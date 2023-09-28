import { initTabs } from "./tabs.js";
import { membersMain } from "./members.js";
import { resultsMain } from "./results.js";
import { MemberRenderer } from "./MemberRenderer.js";
import { ResultRenderer } from "./resultRenderer.js";

window.addEventListener("load", initApp);

async function initApp() {
  initTabs();
  await membersMain(MemberRenderer);
  await resultsMain(ResultRenderer);
}
