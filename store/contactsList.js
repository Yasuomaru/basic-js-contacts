import {addContactToUI, renderContactList} from '../presenter/contactList.js'
import { Contact } from "../model/contact.js"

const ContactList = [
  new Contact ({fullname: 'Contact 01', phone_number: '919919919', email: 'contact1@mail.pt'}),
  new Contact ({fullname: 'Contact 02', phone_number: '929929929', email: 'contact2@mail.pt'}),
  new Contact ({fullname: 'Contact 03', phone_number: '939939939', email: 'contact3@mail.pt'})
]

function addContact(contact) {
  //Add to contact list
  ContactList.push(contact)

  //Refresh UI list
  addContactToUI(contact)
}

function getContactList(){
  return ContactList
}

function onloadContactList(){
  renderContactList(getContactList())
}

export {addContact, getContactList, onloadContactList}