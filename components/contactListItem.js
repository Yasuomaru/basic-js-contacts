import { deleteContact } from "../presenter/contactList.js"
import { setFormData } from "./contactForm.js"
import { createDeleteButton } from "./widgets/deleteButton.js"
import { createEditButton } from "./widgets/editButton.js"

function createContactListItem(contact){
  const liElement = document.createElement('li')

  liElement.innerText = `${contact.fullname} - ${contact.phone_number} - ${contact.email}`
  liElement.append(createEditButton(() => {
    setFormData(contact)
  }))
  liElement.append(createDeleteButton(() => {
    deleteContact(contact)
  }))

  return liElement
}

export {createContactListItem}