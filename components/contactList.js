import {createContactListItem} from '../components/contactListItem.js'
import {getContactList} from "../store/contactsList.js"

const ul = document.querySelector('ul')

document.addEventListener('contactAddedToListWithData', function(e){
  addContactToUI(e.detail)
})

document.addEventListener('contactUpdated', function(e){
  renderList(true)
})

document.addEventListener('DOMContentLoaded', () => {
  renderList()
})

document.addEventListener('contactDeleted', () =>{
  renderList(true)
})

function addContactToUI(contact){
  
  ul.append(createContactListItem(contact))

}

function clearList() {
  ul.innerHTML = ''
}

function renderList(isToClearList = false){
  
  if(isToClearList) clearList()

  getContactList().then(contactsList => {
    contactsList.forEach(contact => {
      addContactToUI(contact)
    })
  })
}

export {addContactToUI, clearList, renderList}