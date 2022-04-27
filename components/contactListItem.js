import { deleteContact, editContact } from "../presenter/contactList.js"
import { createDeleteButton } from "./widgets/deleteButton.js"
import { createEditButton } from "./widgets/editButton.js"

function createContactListItem(contact){
  const liElement = document.createElement('li')

  liElement.textContent = contact.fullname
  liElement.append(createEditButton(() => {
    editContact(contact)
  }))
  liElement.append(createDeleteButton(() => {
    deleteContact(contact)
  }))

  return liElement
}

export {createContactListItem}