class Contact{
    #fullname
    #phone_Number
    #email
    constructor(props){
        const{_id, fullname,phone_number,email}=props // destruturar o objeto
        this.#email=email
        this.#phone_Number=phone_number
        this.#fullname=fullname
    }

    get fullname(){
        return this.#fullname
    }

    get _id(){
        return this.#_id
    }

    set _id(value){
        this.#_id = value
    }
}
export {Contact}