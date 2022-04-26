// import { Contact } from "../model/contact.js"
const ContactList = []

function addContact(contact) {
  //Add to contact list
  ContactList.push(contact)

  //Refresh UI list
  
  console.log(ContactList)
}

function getContactList(){

  return ContactList
}

export {addContact}