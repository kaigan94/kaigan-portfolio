# Contributing

Thanks for your interest in improving the Kaigan Portfolio. A few quick notes will keep the process smooth and friendly.

## Getting Started

1. Fork the repository and create a topic branch from `main`.
2. Install dependencies with `pnpm install` and run `pnpm dev` to verify the app boots.
3. Use `pnpm lint` and `pnpm format` before opening a pull request.

## Commit Guidelines

- Follow conventional commits when possible (`feat:`, `fix:`, `docs:`).
- Keep commits focused—small, purposeful changes are easier to review.
- Include tests or snapshots whenever you change behaviour.

## Pull Request Checklist

- [ ] Update relevant documentation when you add or change features.
- [ ] Run `pnpm lint` and address any warnings.
- [ ] Provide screenshots or recordings for UI changes.
- [ ] Note any follow-up work or open questions in the PR description.

## Project Structure

- `src/features/profile` – profile data, cover components, and panel UIs.
- `src/components` – shared UI primitives, branding assets, and utilities.
- `src/registry` – component registry entries surfaced in the app and CLI.
- `public/` – static assets such as favicons, screenshots, and manifest icons.

## Communication

If you discover a security issue, please email `kaigan.codes@gmail.com` rather than opening a public issue. For general questions, discussions, or feature ideas, open a GitHub Discussion or issue so others can chime in.

Happy building!
