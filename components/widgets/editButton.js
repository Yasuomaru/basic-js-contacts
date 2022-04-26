
function createEditButton(text, clickEvent){
  const editBtn = document.createElement('button')
  editBtn.textContent = text
  editBtn.addEventListener('click', clickEvent)
  editBtn.classList.add('bg-blue')

  return editBtn
}

export {createEditButton}