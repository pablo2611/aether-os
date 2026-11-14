## Project rules
- AETHER OS lives on `/` with module selection in the validated `view` search param; keep shareable module URLs without duplicate shell routes.
- Live threat data comes from free public feeds aggregated server-side in `src/lib/threat-feed.server.ts` (cached per isolate) and exposed via server functions; never ship invented telemetry as real.
- AI features call the configured AI gateway only from server functions (`src/lib/ai/*.server.ts`), consuming the stream server-side and returning a structured DTO.
- Clearly label illustrative or visual-only elements; keep cryptographic calculations real and local to the browser.
