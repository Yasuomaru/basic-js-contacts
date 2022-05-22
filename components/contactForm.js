import { addContact, editContact } from "../presenter/contactList.js"

const contactForm = document.querySelector('form')

function setFormData({_id = -1, fullname = '', phone_number = '', email = ''}){
  contactForm._id.value = _id
  contactForm.fullname.value = fullname
  contactForm.phone_number.value = phone_number
  contactForm.email.value = email
}

function getFormData(){
  return {
    _id: contactForm._id.value, 
    fullname : contactForm.fullname.value, 
    phone_number : contactForm.phone_number.value, 
    email : contactForm.email.value
  }
}

function registerFormEvents(){
  registerFormSubmit()
  registerFormReset()
}

function registerFormSubmit(){
  
contactForm.addEventListener('submit',function(e){
  e.preventDefault()
  //console.log(e.target.children[0].value) // vai buscar o que está na DOM
  try {
    //Obter valores do formulário
    const formObject = getFormData()

    //Guardar os dados
    formObject._id <= 0 ? addContact(formObject) : editContact(formObject)
    
    //Limpar formulário depois de criar o contacto
    setFormData({})

    //Criar evento
    const event = new Event('contactAddedToList')

    const eventWithData = new CustomEvent('contactAddedToListWithData', {detail: formObject})
    
    // console.log(this)
    //emitir o evento
    document.dispatchEvent(event)
    document.dispatchEvent(eventWithData)

    //Comunicar com API externa
  }catch (error) {
    console.error(error)
  } 
})
}



function registerFormReset(){
  contactForm.addEventListener('reset', ()=>{
    contactForm._id.value = ''
  })
}

document.addEventListener('contactAddedToList', (e)=>{
  console.log('form')
})

export {registerFormEvents, setFormData}