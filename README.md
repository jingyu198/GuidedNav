# GuidedNav project website

Public URL: https://jingyu198.github.io/GuidedNav/

The page contains the paper title, authors and affiliations, the original research figures, eight demonstration videos, original
benchmark tables and plots from the paper, and a copyable BibTeX entry.
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

## Selected demonstration media

The four real-world task clips are split from the selected 100.2-second
`Real_Robot_Representations_Final.mp4`. Task boundaries are 0, 28.5, 47.0,
79.5 and 100.2 seconds. Each clip retains the original recording, representation
overlays and soundtrack. `media-manifest.json` records the segment boundaries.
The simulator, Guided-R2R and Guided-RxR demos are the selected source files
and are copied without modification.

The headline wordmark combines cute hand-lettered GuidedNav lettering with an
AgiBot X2-inspired cartoon mascot. Overview and Method use one figure and a
short explanation beneath it. Benchmark results reproduce the source paper's
Table 1, Figure 4 and Table 2 instead of reconstructing their data in HTML.

Current caption update: real-world and simulator clips display their original
English model instructions without rewritten descriptions. Simulator videos
currently include R2R episodes 1190 and 1288. Two RxR model rollout videos
remain unavailable in the supplied local captures; expert annotation videos
are kept in the dataset section. Result images retain their original embedded
paper titles without additional HTML captions. GuidedNav uses smaller orderly
lettering with dimensional teal coloring; only its greeting mascot loops.
