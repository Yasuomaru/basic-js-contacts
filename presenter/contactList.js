import { addContactToList, deleteContactFromList, getContactList } from '../store/contactsList.js'
import { addContactToUI, renderList } from '../components/contactList.js'
import { Contact } from '../model/contact.js'
import ContactValidator from '../validators/contact/index.js'


function addContact({_id, fullname, phone_number, email}){
  //Validação de dados
  ContactValidator.exec(fullname)
  
  const newContact = new Contact({_id, fullname, phone_number, email})

  //Refresh Data
  addContactToList(newContact)

  //Refresh screen
  addContactToUI(newContact)
}

function editContact(contact){
  //Edit contact in data list
  console.log(contact)

  //Edit contact in UI
  renderList(getContactList(), true)
}

function deleteContact(contact){
  //Remove contact
  deleteContactFromList(contact)

  //Render list
  renderList(getContactList(), true)
}


function renderContactListOnLoad(isToClearList = false){
  renderList(getContactList())
}

export {addContact, renderContactListOnLoad, editContact, deleteContact}