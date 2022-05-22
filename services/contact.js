//Criar funções para cada endpoint na minha API

//Configuration
const base_url = 'http://localhost:6868/contacts'
const headers = {
    'Content-Type' : 'application/json'
  }


//Get all
async function getAllContacts(){
  //Use fetch api to comunicate with the api
  const response = await fetch(`${base_url}`, {headers})
  
  //After the response convert the data from json
  const data = await response.json()

  return data
}

//Get one by id
async function getContactById(_id){
  const response = await fetch(`${base_url}/${_id}`, {headers})
  const data = await response.json()
  return data
}

//Create
async function createContact(contact){
  const response = await fetch(`${base_url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(contact)
  })
  const data = await response.json()
  return data
}
//Update
async function updateContact(contact){
  const response = await fetch(`${base_url}/${contact._id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(contact)
  })
  const data = await response.json()
  return data
}


//Delete
async function deleteContact(_id){
  const response = await fetch(`${base_url}/${_id}`, {
    method: 'DELETE',
    headers
  })
  const data = await response.json()
  return data
}

export {getAllContacts, getContactById, createContact, updateContact, deleteContact}