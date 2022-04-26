
function createEditButton(clickEvent){
  const editBtn = document.createElement('button')
  editBtn.textContent = 'Editar'
  editBtn.addEventListener('click', clickEvent)
  editBtn.classList.add('bg-blue')

  return editBtn
}

export {createEditButton}