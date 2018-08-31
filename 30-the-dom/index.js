window.addEventListener('DOMContentLoaded', () => {
  let header = document.getElementById('header')
  let paragraph = document.getElementById('paragraph')
  let text = "he is a true American"

  header.addEventListener('click', () => {
    paragraph.innerText += text
  })
})
