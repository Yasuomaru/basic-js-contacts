import {renderContactList} from './presenter/contactList.js'

function setupContactList(){
    document.addEventListener('DOMContentLoaded', () => {
        renderContactList()
    })
}

export {setupContactList}


// Add contactacto ha lista de dados
// Sempre que modificarmos a lista de dados renderizamos novamente o componente