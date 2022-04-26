import { addContactToList, getContactList } from '../store/contactsList.js'
import { addContactToUI, renderList } from '../components/contactList.js'

function addContact(contact){
  //Refresh Data
  addContactToList(contact)

  //Refresh screen
  addContactToUI(contact)
}

function editContact(contact){
  //Edit contact in data list
  alert(contact)

  //Edit contact in UI
  renderList(getContactList())
}

function deleteContact(contact){
  alert(contact)
  renderList(getContactList())
}


function renderContactListOnLoad(isToClearList = false){
  renderList(getContactList())
}

export {addContact, renderContactListOnLoad, editContact, deleteContact}