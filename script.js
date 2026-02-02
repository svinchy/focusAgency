import { render } from "./JS/render.js";
import { initLanguageToggle } from "./JS/languageSwitcher.js";

// initial render
render();

 // set up buttons
initLanguageToggle();


// Make navbar clicks independent
document.querySelectorAll(".navBar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // prevents page jump if href="#"
    // do nothing else → render() is NOT called
  });
});

