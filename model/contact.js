class Contact{
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
}
export {Contact}