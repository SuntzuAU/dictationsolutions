# Dictation Solutions Australia

Astro gateway site for dictationsolutions.com.au

**Tech stack:** Astro + Cloudflare Pages + R2 images

**Colour palette:** Charcoal + green

**Site structure:**
- `/` - Homepage gateway with 3 pathways: Dragon Software, Cloud Speech, Dictation Hardware
- `/dragon-software` - Dragon product overview (Pro 16, Anywhere, Medical One)
- `/dragon-medical-one` - Dedicated Dragon Medical One page
- `/medical-transcription` - Medical transcription approaches
- `/speech-to-text` - General speech-to-text comparison
- `/dictation-equipment` - Philips/Olympus hardware hub
- `/support` - Technical support routing
- `/about` - About page
- `/privacy` - Privacy policy
- `/terms` - Terms of use

**After cloning / setup:**
1. Add this repo to Cloudflare Pages
2. Set `PUBLIC_R2_BASE` environment variable in Cloudflare Pages settings
3. Generate images via master-image-generator Worker (see src/image.prompts.json)
4. Update src/data/image-manifest.json with returned R2 keys
5. Upload logo as /public/logo.png

**R2 base URL:** https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev
