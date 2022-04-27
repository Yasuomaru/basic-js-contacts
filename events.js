import {renderContactListOnLoad} from './presenter/contactList.js'

function setupContactList(){
    document.addEventListener('DOMContentLoaded', () => {
        renderContactListOnLoad()
    })
}

export {setupContactList}


// Add contactacto ha lista de dados
// Sempre que modificarmos a lista de dados renderizamos novamente o componente