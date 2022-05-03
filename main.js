import { registerFormSubmit } from "./components/contactForm.js";
import {renderContactList} from './presenter/contactList.js'

document.addEventListener('DOMContentLoaded', () => {
  //Registering the submit event
  registerFormSubmit()

  //render list on screen
  renderContactList()
})
