# GuidedNav project website

Public URL: https://jingyu198.github.io/GuidedNav/

The page contains the paper title, authors and affiliations, the three guidance
designs, the original research figures, six local demonstration videos, selected
benchmark comparisons, inference efficiency, and a copyable BibTeX entry.
Paper, code and dataset resources are marked forthcoming until their release
URLs are available. No arXiv identifier or conference acceptance is assumed.

## Update the page

- Edit `app/homepage.html` for page content.
- Edit `app/globals.css` for styling.
- Store figures, posters and videos in `public/assets/`.
- Run `npm run build` to validate the Sites development project.
- Run `npm run export:pages` to regenerate the self-contained GitHub Pages
  output in `docs/`.
- Commit the updated source and `docs/`, then push `main`.

GitHub Pages publishes `main` from `/docs`. Asset paths are relative so the site
works under `/GuidedNav/`. The page uses native video controls, requests no
video preload, and does not include analytics or external fonts.

The navigation rollout videos are decision-level visualizations, not real-time
camera recordings. The dataset videos display expert observations and generated
annotations. Quantitative benchmark values and the abstract match the supplied
manuscript. Relative success-rate improvements are distinct from percentage
point differences.

Credentials are managed outside this repository. No password, access token,
local credential helper path or private source paths belong in tracked files.
