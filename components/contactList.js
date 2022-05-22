import {createContactListItem} from '../components/contactListItem.js'

const ul = document.querySelector('ul')

document.addEventListener('contactAddedToListWithData', function(e){
  ul.textContent = e.detail
})

function addContactToUI(contact){
  
  ul.append(createContactListItem(contact))

}

function clearList() {
  ul.innerHTML = ''
}

function renderList(contactsList, isToClearList = false){
  
  if(isToClearList) clearList()
  
  contactsList.forEach(contact => {
    addContactToUI(contact)
  })
}

export {addContactToUI, clearList, renderList}