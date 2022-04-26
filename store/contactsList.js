// import { Contact } from "../model/contact.js"
const ContactList = []

function addContact(contact) {
  //Add to contact list
  ContactList.push(contact)

  //Refresh UI list
  const ulElement = document.querySelector('ul')
  const liElement = document.createElement('li')
  console.log(liElement)
  liElement.textContent = contact.fullname
  
  ulElement.append(liElement)

  console.log(ContactList)
}

function getContactList(){
  return ContactList
}

export {addContact}