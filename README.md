# rAI-SW Corporate Website — GitHub Pages Release v1.2

This package is a static, bilingual release of the rAI-SW corporate website. It includes the Korean and English home pages, product pages, compliance and validation pages, company information, contact pages, product images, and the email-based inquiry form.

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload **all files and folders in this package to the repository root**.
3. Commit to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. The included workflow publishes the site automatically.

The package uses relative links, so it works for both an account site and a project site without changing a base path.

## Important files

- `index.html` — Korean home page and required repository entry point
- `en/index.html` — English home page
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `.nojekyll` — allows static asset directories to be served unchanged
- `404.html` — branded fallback page
- `SHA256SUMS.txt` — integrity manifest for the release contents
- `RELEASE_NOTES.md` — release scope and verification summary

## Custom domain

If a custom domain is used, configure it in GitHub Pages settings. Add a `CNAME` file at the repository root only after the domain is confirmed.
