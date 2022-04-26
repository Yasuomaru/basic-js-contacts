class ContactFullNameEmptyError extends Error{
    constructor(name){
        super('Fullname field is required')
        this.name=name
    }
}

export {ContactFullNameEmptyError}