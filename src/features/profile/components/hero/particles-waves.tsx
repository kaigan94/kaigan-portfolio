"use client";

import * as React from "react";
import * as THREE from "three";

type Props = {
  className?: string;
  particleColor?: string;
  pointSize?: number;
  amountX?: number;
  amountY?: number;
  separation?: number;
  amplitude?: number;
  speed?: number; // 0–0.6
  dprLimit?: number; // 1–3
  cameraFov?: number;
  cameraHeight?: number;
  sideMotion?: number; // 0
};

export default function ParticlesWaves({
  className,
  particleColor = "#87DDFF",
  pointSize = 10,
  amountX = 60,
  amountY = 60,
  separation = 100,
  amplitude = 40,
  speed = 0.25,
  dprLimit = 2,
  cameraFov = 55,
  cameraHeight = 600,
  sideMotion = 0,
}: Props) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const rafRef = React.useRef<number>(0);

  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    let disposed = false;
    cancelAnimationFrame(rafRef.current);
    el.textContent = "";

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
      powerPreference: "high-performance",
    });
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.setClearColor(0, 0);
    el.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      cameraFov,
      1,
      1,
      separation * 80
    );
    camera.position.set(0, cameraHeight, separation * 12);
    camera.lookAt(0, 0, 0);

    // mjuk “glow” som sprite
    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext("2d")!;
    const r = 32;
    const g = ctx.createRadialGradient(r, r, 0, r, r, r);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.5, "rgba(255,255,255,0.7)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(r, r, r, 0, Math.PI * 2);
    ctx.fill();
    const sprite = new THREE.CanvasTexture(spriteCanvas);
    sprite.generateMipmaps = true;
    sprite.minFilter = THREE.LinearMipMapLinearFilter;
    sprite.magFilter = THREE.LinearFilter;

    const count = amountX * amountY;
    const positions = new Float32Array(count * 3);
    const halfX = (amountX - 1) * separation * 0.5;
    const halfY = (amountY - 1) * separation * 0.5;

    let i = 0;
    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        positions[i * 3 + 0] = ix * separation - halfX;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = iy * separation - halfY;
        i++;
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(particleColor),
      size: pointSize,
      map: sprite,
      alphaMap: sprite,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geom, material);
    scene.add(points);

    const pos = geom.getAttribute("position") as THREE.BufferAttribute;
    const clock = new THREE.Clock();

    const setSize = () => {
      const w = Math.max(1, el.clientWidth || 800);
      const h = Math.max(1, el.clientHeight || 500);
      renderer.setPixelRatio(Math.min(dprLimit, window.devicePixelRatio || 1));
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const tick = () => {
      if (disposed) return;
      const t = clock.getElapsedTime();
      let k = 0;

      for (let ix = 0; ix < amountX; ix++) {
        for (let iy = 0; iy < amountY; iy++) {
          const baseX = ix * separation - halfX;
          const baseZ = iy * separation - halfY;

          const y =
            Math.sin((ix + t * (speed * 60)) * 0.3) * amplitude +
            Math.sin((iy + t * (speed * 60)) * 0.5) * amplitude;

          pos.setY(k, y);

          if (sideMotion !== 0) {
            const dx = sideMotion * Math.sin((ix + t * (speed * 60)) * 0.2);
            const dz = sideMotion * Math.cos((iy + t * (speed * 60)) * 0.25);
            pos.setX(k, baseX + dx);
            pos.setZ(k, baseZ + dz);
          } else {
            pos.setX(k, baseX);
            pos.setZ(k, baseZ);
          }
          k++;
        }
      }

      pos.needsUpdate = true;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(el);
    window.addEventListener("resize", setSize);
    setSize();
    tick();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("resize", setSize);
      scene.remove(points);
      geom.dispose();
      sprite.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [
    particleColor,
    pointSize,
    amountX,
    amountY,
    separation,
    amplitude,
    speed,
    dprLimit,
    cameraFov,
    cameraHeight,
    sideMotion,
  ]);

  return (
    <div
      ref={rootRef}
      className={["pointer-events-none h-full w-full", className].join(" ")}
      aria-hidden
      role="presentation"
      style={{ position: "absolute", inset: 0 }}
    />
  );
}
