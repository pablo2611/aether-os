import { StartClient } from "@tanstack/react-start/client";
import { createRoot } from "react-dom/client";

// The Pages build serves one static shell for every module URL.
createRoot(document).render(<StartClient />);
