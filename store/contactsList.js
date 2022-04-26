import { Contact } from "../model/contact.js"

const ContactList = [
  new Contact ({fullname: 'Contact 01', phone_number: '919919919', email: 'contact1@mail.pt'}),
  new Contact ({fullname: 'Contact 02', phone_number: '929929929', email: 'contact2@mail.pt'}),
  new Contact ({fullname: 'Contact 03', phone_number: '939939939', email: 'contact3@mail.pt'})
]

function addContactToList(contact) {
  //Add to contact list
  ContactList.push(contact)

  console.log(ContactList)
}

function editContact(contact){
  const idx = ContactList.findIndex(c => {c._id === contact._id})
  ContactList[idx] = contact

  renderContactList(getContactList())
}

function getContactList(){
  return ContactList
}

export {addContactToList, editContact, getContactList}