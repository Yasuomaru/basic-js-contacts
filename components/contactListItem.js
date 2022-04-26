import { createEditButton } from "./widgets/editButton.js"

function createContactListItem(contact){
  const liElement = document.createElement('li')

  liElement.textContent = contact.fullname
  liElement.append(createEditButton('Editar',  () => {alert('Editar')}))

  return liElement
}

export {createContactListItem}