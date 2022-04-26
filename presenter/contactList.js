import { addContactToList, getContactList } from '../store/contactsList.js'
import { addContactToUI,clearList } from '../components/contactList.js'

function addContact(contact){
  //Refresh Data
  addContactToList(contact)

  //Refresh screen
  addContactToUI(contact)
}



function renderContactList(isToClearList = false){
  if(isToClearList) clearList()
  
  getContactList().forEach(contact => {
    addContactToUI(contact)
  })
}

export {addContact, renderContactList}