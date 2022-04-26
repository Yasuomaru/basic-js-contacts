function createDeleteButton(clickEvent){
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Apagar'
  deleteBtn.addEventListener('click', clickEvent)
  deleteBtn.classList.add('bg-red')

  return deleteBtn
}

export {createDeleteButton}