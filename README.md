# GuidedNav project website

[Project page](https://jingyu198.github.io/GuidedNav/) · [Research code and release plan](https://github.com/jingyu198/GuidedNav-code)

This repository hosts the GuidedNav project website. The separate **GuidedNav-code** repository is reserved for model checkpoints, inference code, datasets, and training code.

## Website maintenance

- Edit `app/homepage.html` for page content and `app/globals.css` for styling.
- Store figures, posters, videos, and the walking mascot script in `public/`.
- Run `npm run build`, then `npm run export:pages` to regenerate `docs/`.
- Commit the source and generated `docs/`, then push `main`.

GitHub Pages publishes `main` from `/docs`. The site uses native video controls with no video preload. Benchmark figures reproduce the original paper tables and plots.

The real-world clips display their original instructions. Simulator rollouts currently include R2R episodes 1190 and 1288; RxR model rollout captures are pending. Dataset annotation videos remain in the dataset section. `media-manifest.json` records the selected media and task boundaries.

The GuidedNav wordmark uses orderly lettering with dimensional blue coloring and an AgiBot X2-inspired walking mascot.

Xiaoyu Luo and Cheng Wen currently link to Google Scholar author searches; the other authors link to verified personal or university pages.
