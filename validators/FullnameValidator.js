import { ContactFullNameEmptyError} from "../helpers/exceptions/contact/ContactFullNameEmptyError.js"

class ContactFullNameValidator{
    static exec(fullname){
        this.isEmpty(fullname)
    }

    static isEmpty(fullname){
        if(!fullname) throw new ContactFullNameEmptyError('Exemplo')
    }
}

export{ContactFullNameValidator}