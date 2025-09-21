# Branding Guide

This project ships with two primary SVG assets that power the on-site branding:

| Asset | Location | Usage |
| --- | --- | --- |
| `favicon.svg` | `public/icons/favicons/favicon.svg` | 32×32 square mark used for favicons, registry downloads, and compact iconography. Referenced by `KaiganMark` and metadata in `src/app/layout.tsx`. |
| `favicon-full.svg` | `public/icons/favicons/favicon-full.svg` | 108×32 wordmark + mark lockup used in animated header contexts. Referenced by `SiteHeaderMark`. |

### Updating the Artwork

1. Replace the SVG files above with your own branding (keep the same filenames).
2. If the aspect ratio changes, update the `viewBox`, `width`, and `height` attributes in:
   - `src/components/kaigan-mark.tsx`
   - `src/components/site-header-mark.tsx`
3. For raster touch icons, update `public/apple-touch-icon.png`, `public/icons/icon-192x192.png`, and `public/icons/icon-512x512.png`.

### Export Tips

- Export SVGs without embedded fonts; convert text to paths for consistent rendering.
- Keep fills set to `currentColor` when possible so the icons adapt to light/dark themes.
- Run `pnpm lint` after replacing assets to catch any formatting issues in JSX.

### Registry Downloads

When users copy or download the logo from the in-app context menu, the project uses the helper functions from `src/components/kaigan-mark.tsx` and `src/components/kaigan-wordmark.tsx`. Update those helper strings if you change filenames.
