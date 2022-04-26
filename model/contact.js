class Contact{
    #fullName
    #phone_Number
    #email
    constructor(props){
        const{fullname,phone_number,email}=props // desconstriur o objeto
        this.#email=email
        this.#phone_Number=phone_number
        this.#fullName=fullname
    }

    get fullname(){
        return this.#fullName
    }
}
export {Contact}