import fs from "node:fs";
import path from "node:path";

import type { Browser } from "puppeteer-core";
import puppeteer from "puppeteer-core";

const executablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const url = process.env.URL || "http://localhost:1408";
const outputDir = path.join(process.cwd(), ".kaigan/screenshots");

const SIZE = {
  // Full HD
  desktop: {
    width: 1920,
    height: 1080,
  },
  // iPhone 16 Pro Max
  mobile: {
    width: 440,
    height: 956,
  },
  // Open Graph image size
  "og-image": {
    width: 1200,
    height: 630,
  },
} as const;

type Theme = "light" | "dark";

async function captureScreenshot({
  browser,
  url,
  size,
  themes = ["light"],
  type = "webp",
}: {
  browser: Browser;
  url: string;
  size: keyof typeof SIZE;
  themes?: Theme[];
  type?: "webp" | "png" | "jpeg";
}) {
  // Ensure the output directory exists
  await fs.promises.mkdir(outputDir, { recursive: true });

  for (const theme of themes) {
    const page = await browser.newPage();

    const { width, height } = SIZE[size];
    await page.setViewport({ width, height });

    await page.evaluateOnNewDocument((selectedTheme) => {
      try {
        localStorage.setItem("theme", selectedTheme);
      } catch (error) {
        console.warn("Unable to persist theme in localStorage", error);
      }

      if (selectedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, theme);

    await page.goto(url, { waitUntil: "networkidle2" });

    await page.emulateMediaFeatures([
      { name: "prefers-color-scheme", value: theme },
    ]);

    const filePath = path.join(
      outputDir,
      `screenshot-${size}-${theme}.${type}`
    ) as `${string}.webp` | `${string}.png` | `${string}.jpeg`;

    await new Promise((res) => setTimeout(res, 300));
    await page.screenshot({
      path: filePath,
      type,
      quality: type !== "png" ? 90 : undefined,
    });

    console.log(`✅ Screenshot saved:`, filePath);

    await page.close();
  }
}

async function main() {
  const browser = await puppeteer.launch({
    executablePath,
  });

  try {
    await captureScreenshot({
      browser,
      url,
      size: "desktop",
      themes: ["light", "dark"],
    });

    await captureScreenshot({
      browser,
      url,
      size: "mobile",
      themes: ["light", "dark"],
    });

    await captureScreenshot({
      browser,
      url: `${url}/og`,
      size: "og-image",
      themes: ["light", "dark"],
      type: "png",
    });

    console.log("✅ All screenshots captured successfully.");
  } catch (error) {
    console.error("⛔️ Error capturing screenshots:", error);
  } finally {
    await browser.close();
  }
}

main();
