import { Contact } from "../model/contact.js"
import { getAllContacts } from "../services/contact.js"

let ContactList = []

function getTotalContacts(){
  return ContactList.length
}

function getContactById(_id){
  return ContactList.find(c => c._id == _id)
}

async function addContact(contact) {
  //Add to contact list
  const newContact = new Contact(contact)

  await newContact.save()

  ContactList.push(newContact)
  //Criar evento
  const eventWithData = new CustomEvent('contactAddedToListWithData', {detail: newContact})

  document.dispatchEvent(eventWithData)
}

async function editContact(updatedContact){
  const idx = ContactList.findIndex(c => c._id === updatedContact._id)

  //get contact to be updated
  const contact = ContactList[idx]

  contact.fullname = updatedContact.fullname
  contact.email = updatedContact.email
  contact.phone_number = updatedContact.phone_number

  await contact.save()

  ContactList[idx] = contact

  const contactUpdated = new CustomEvent('contactUpdated', {detail: contact})
  document.dispatchEvent(contactUpdated)
}

async function deleteContact(contact){
  const idx = ContactList.findIndex(c => c._id === contact._id)
  if (idx > -1) {

    await ContactList[idx].delete()
    ContactList.splice(idx, 1)

    const deletedContactEvent = new Event('contactDeleted')
    document.dispatchEvent(deletedContactEvent)
  }
} 

async function getContactList(){
  if (ContactList.length <= 0){
      const api_contacts = await getAllContacts()
      api_contacts.forEach(contact => {
        ContactList.push(new Contact(contact))
      });
    }
  return ContactList
}

export {addContact, editContact,deleteContact,getContactList}