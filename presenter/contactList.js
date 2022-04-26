import {createContactListItem} from '../components/contactListItem.js'
import {getContactList} from '../store/contactsList.js'

function addContactToUI(contact, parent = document.querySelector('ul')){
  parent.append(createContactListItem(contact))
}

function renderContactList(contactsList){
  const contastList = getContactList()
  contastList.forEach(contact => {
    addContactToUI(contact)
  })
}

export {addContactToUI, renderContactList}