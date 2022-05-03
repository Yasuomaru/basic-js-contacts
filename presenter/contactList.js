import { addContactToList, deleteContactFromList, editContactFromList, getContactList } from '../store/contactsList.js'
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

  const newContact = new Contact(contact)
  //Edit contact in data list
  editContactFromList(newContact)

  //Render list
  renderList(getContactList(), true)
}

function deleteContact(contact){
  //Remove contact
  deleteContactFromList(contact)

  //Render list
  renderList(getContactList(), true)
}


function renderContactList(isToClearList = false){
  renderList(getContactList())
}

export {addContact, renderContactList, editContact, deleteContact}