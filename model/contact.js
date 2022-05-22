import { createContact, destroyContact, updateContact } from "../services/contact.js"

class Contact {
    #_id
    #fullname
    #phone_number
    #email
    constructor(props){
        const{_id = -1, fullname,phone_number,email}=props // destruturar o objeto
        this.#_id = _id
        this.#email=email
        this.#phone_number=phone_number
        this.#fullname=fullname
    }

    get fullname(){
        return this.#fullname
    }

    get email(){
        return this.#email
    }

    get phone_number(){
        return this.#phone_number
    }

    get _id(){
        return this.#_id
    }

    set _id(value){
        this.#_id = value
    }

    set fullname(value){
        this.#fullname = value
    }

    set email(value){
        this.#email = value
    }

    set phone_number(value){
        this.#phone_number = value
    }

    toJSON(){
        return {
            _id : this._id,
            email : this.email,
            phone_number : this.phone_number,
            fullname : this.fullname
        }
    }


    async save(){
        if( this._id != '')
            await updateContact(this.toJSON())
        else
            await createContact(this.toJSON())
    }

    async delete(){
        await destroyContact(this._id)
    }
}
export {Contact}