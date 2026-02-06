import { render } from "./JS/render.js";
import { initLanguageToggle } from "./JS/languageSwitcher.js";
import { initServiceToggle } from "./JS/serviceToggle.js";
import { initNavbar } from "./JS/navbar.js";


// initial render
render();

 // set up buttons
initLanguageToggle();


// Make navbar clicks independent
initNavbar();


//service toggle
initServiceToggle();
