import { writeFile } from "node:fs/promises";
import { loadThreatFeed } from "../src/lib/threat-feed.server";

const feed = await loadThreatFeed();
await writeFile("dist/client/threat-feed.json", JSON.stringify(feed));
console.log(`Published ${feed.attackers.length} geolocated reports and ${feed.kev.total} CISA KEV entries.`);
