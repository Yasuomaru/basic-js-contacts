import { addContactToList, getContactList } from '../store/contactsList.js'
import { addContactToUI, renderList } from '../components/contactList.js'

function addContact(contact){
  //Refresh Data
  addContactToList(contact)

  //Refresh screen
  addContactToUI(contact)
}



function renderContactListOnLoad(isToClearList = false){
  renderList(getContactList())
}

export {addContact, renderContactListOnLoad}