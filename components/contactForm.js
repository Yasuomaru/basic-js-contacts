import { addContact } from "../presenter/contactList.js"

const contactForm = document.querySelector('form')

function setForm({_id = -1, fullname = '', phone_number = '', email = ''}){
  contactForm._id.value = _id
  contactForm.fullname.value = fullname
  contactForm.phone_number = phone_number
  contactForm.email.value = email
}

function registerFormSubmit(){
contactForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  //console.log(e.target.children[0].value) // vai buscar o que está na DOM
  try {
    //Obter valores do formulário
    const rawList=[...e.target.children] // [... ] para introduzir num array
    const inputsList=rawList.filter(input => {return input.name !== ''})
    
    const formObject = {}

    for (const input of inputsList) {
        formObject[input.name] = input.value
    }

    //Guardar os dados
    addContact(formObject)

    //Comunicar com API externa
  }catch (error) {
    console.error(error)
  } 
})
}

// const rawList=[...e.target.children] // [... ] para introduzir num array
// const inputsList=rawList.filter(input => {return input.name !== ''})
        

export {registerFormSubmit, setForm}