import { registerFormEvents } from "./components/contactForm.js";
import {renderContactList} from './presenter/contactList.js'

document.addEventListener('DOMContentLoaded', () => {
  //Registering the submit event
  registerFormEvents()

  //render list on screen
  renderContactList()
})


document.addEventListener('contactAddedToListWithData', (e)=>{
  console.log(e.detail)
})
