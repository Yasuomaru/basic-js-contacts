import { createContactListItem } from "../components/contactListItem.js"

// import { Contact } from "../model/contact.js"
const ContactList = []

function addContact(contact) {
  //Add to contact list
  ContactList.push(contact)

  //Refresh UI list

  const ulElement = document.querySelector('ul')
  ulElement.append(createContactListItem(contact))

  console.log(ContactList)
}

function getContactList(){
  return ContactList
}

export {addContact}