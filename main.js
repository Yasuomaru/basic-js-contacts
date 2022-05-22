import { registerFormEvents } from "./components/contactForm.js";
import "./components/contactList.js"

document.addEventListener('DOMContentLoaded', () => {
  //Registering the submit event
  registerFormEvents()
})
