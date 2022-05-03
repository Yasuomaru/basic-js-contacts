import { Contact } from "../model/contact.js"

const ContactList = [
  new Contact ({_id: 0, fullname: 'Contact 01', phone_number: '919919919', email: 'contact1@mail.pt'}),
  new Contact ({_id: 1, fullname: 'Contact 02', phone_number: '929929929', email: 'contact2@mail.pt'}),
  new Contact ({_id: 2, fullname: 'Contact 03', phone_number: '939939939', email: 'contact3@mail.pt'})
]

function getTotalContacts(){
  return ContactList.length
}

function getContactById(_id){
  return ContactList.find(c => c._id == _id)
}

function addContactToList(contact) {
  //Add to contact list
  contact._id = ContactList.length
  ContactList.push(contact)
}

function editContactFromList(updatedContact){
  const contact = getContactById(updatedContact._id)

  contact.fullname = updatedContact.fullname
  contact.email = updatedContact.email
  contact.phone_number = updatedContact.phone_number

  console.log(ContactList)
}

function deleteContactFromList(contact){
  const idx = ContactList.findIndex(c => c._id === contact._id)
  if (idx > -1) ContactList.splice(idx, 1)
} 

function getContactList(){
  return ContactList
}

export {addContactToList, editContactFromList,deleteContactFromList,getContactList}