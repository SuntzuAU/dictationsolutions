# CLAUDE.md

**STOP. Before doing anything, read every file in the `.claude/` folder in this repo.**

That folder contains the complete instruction set for this site: legal compliance rules, linking system, architecture patterns, image generation rules, content approval workflow, and deployment config.

After reading `.claude/`, also read:
- `src/data/link-network.json` - anchor pools, bridge phrases, authority language
- `src/site.config.json` - this site's content, colours, products
- `src/data/link-usage.json` - what has already been linked from this site
- `src/content/news/` - existing blog posts

**Do not write code or content until you have read all of the above.**


## Image generation on THIS repo — operating procedure (read before touching images)

**This site is NOT wired like the other gateway sites.** It still runs the legacy
`.github/workflows/generate-images.yml`, which is **manual-dispatch only**. It does
NOT have the network-standard push-triggered `.github/workflows/generate-on-demand.yml`
(the one described in `.claude/IMAGE-GENERATION.md`). So an article commit here does
**not** auto-generate images the way it does on `speechrecognitioncloud` / `dragonnaturallyspeaking`.

### To generate images on this repo (until it is migrated)
1. In the article frontmatter set `heroPrompt` (+ `breakPrompt1` / `breakPrompt2` if wanted),
   leave `heroImage` / `breakImage1` / `breakImage2` empty. Commit + push.
2. Trigger the run manually: GitHub → this repo → Actions → "Generate Images" → Run workflow.
   (A Cowork sandbox session CANNOT do this: `workflow_dispatch` needs the GitHub API, which is
   blocked from the sandbox, and the current PAT lacks `workflow` scope.)
3. The Action runs `generate-images.js` on GitHub's runners (which CAN reach the image Worker),
   writes R2 keys back into the article, and bot-commits with `[skip ci]`.
4. **CRITICAL — force the deploy.** That bot commit's `[skip ci]` makes **Cloudflare Pages skip
   the rebuild too**, so the live page stays image-less. Push a **real** commit (a one-line body
   change is enough) to force the build. An **empty commit does NOT work** — Cloudflare skips it.
   Only then do the images appear live. Hard-refresh (Ctrl+F5) to clear browser cache.

### Sandbox (Cowork) environment limits — do not re-discover these
- `api.github.com` is blocked. Use **git over `github.com`** with the PAT for clone/commit/push.
- The image Worker (`*.workers.dev`) and `*.r2.dev` are blocked from the sandbox, so images
  **cannot** be generated or byte-verified from here. Generation must run via the Action.
  Verify a live image with the `web_fetch` tool (it reaches sites the sandbox curl cannot).
- The PAT lacks `workflow` scope: a session **cannot** edit any `.github/workflows/*` file or
  dispatch a workflow. To automate this repo (migrate to `generate-on-demand.yml`), the owner
  must regenerate the PAT with `workflow` scope.

### Permanent fix (owner action)
Migrate this repo to the network-standard `generate-on-demand.yml` (push-triggered, `imagesPending`
opt-in) as used on the other sites, and set repo variable `IMAGE_GEN_ENABLED="true"`. After that,
images generate automatically on article push and this manual dance goes away.

## CRITICAL RULES - NEVER VIOLATE

1. **voicerecognition.com.au is the PRIMARY Shopify site.** Gateway sites link TO it. Never redesign it.
2. **Never invent domains.** Only use the verified list in `src/data/link-network.json`.
3. **No footer links. Ever.** All links contextual in body copy.
4. **Never commit content without explicit owner approval.** Draft in chat, wait for "commit it".
5. **Never use emoji or special Unicode in `site.config.json`.** Breaks Astro builds via GitHub API.
6. **Never generate images without owner approval.** Show prompts first, wait for "go".
7. **All content must comply with Australian Consumer Law.** See `.claude/CONTENT-GUIDELINES.md`.

---
*Owner: Russell Bewsell, Voice Recognition Australia | github.com/SuntzuAU | March 2026*
