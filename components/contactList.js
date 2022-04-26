import {createContactListItem} from '../components/contactListItem.js'

const ulEl = document.querySelector('ul')

function addContactToUI(contact){
  ulEl.append(createContactListItem(contact))
}

function clearList() {
  ulEl.innerHtml = ''
}

export {addContactToUI, clearList}