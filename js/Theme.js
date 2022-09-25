let theme = document.querySelector('#theme-change')

const colors = {
  primaryBlack: '#131515',
  primaryGray: '#2B2C28',
  primaryWhite: '#F9F9F9',
  bgGray: '#eee',
  rgba: 'rgba(0, 0, 0, 0.2)'
}


let themeWhite = false

theme.addEventListener('click', () => {
  if(themeWhite === false) {
    document.body.style.backgroundColor = colors.primaryWhite
    document.querySelector('#theme-image').setAttribute('src', './images/moon.svg')
    document.querySelector('#home').style.color = colors.primaryGray  
    let homeLinks = document.querySelectorAll('.home-links a')
    homeLinks.forEach((item)=>{
      item.style.color = colors.primaryGray
    })
    document.querySelector('#about').style.backgroundColor = colors.bgGray
    document.querySelector('#about').style.color = colors.primaryGray
    let abilitities = document.querySelectorAll('.abilities-item')
    abilitities.forEach((item)=>{
      item.style.backgroundColor = colors.primaryGray
    })
    document.querySelector('.projects-main--text').style.color = colors.primaryGray
    let gridItem = document.querySelectorAll('.grid-item')
    gridItem.forEach((item)=>{
      item.style.backgroundColor = colors.primaryGray
    })
    console.log(themeWhite)
    themeWhite = true
  } else {
    document.body.style.backgroundColor = colors.primaryBlack
    document.querySelector('#theme-image').setAttribute('src', './images/sun.svg')
    document.querySelector('#home').style.color = colors.primaryWhite
    let homeLinks = document.querySelectorAll('.home-links a')
    homeLinks.forEach((item)=>{
      item.style.color = colors.primaryWhite
    })
    document.querySelector('#about').style.backgroundColor = colors.primaryGray
    document.querySelector('#about').style.color = colors.primaryWhite
    let abilitities = document.querySelectorAll('.abilities-item')
    abilitities.forEach((item)=>{
      item.style.backgroundColor = colors.rgba
    })
    let gridItem = document.querySelectorAll('.grid-item')
    gridItem.forEach((item)=>{
      item.style.backgroundColor = colors.rgba
    })
    console.log(themeWhite)
    themeWhite = false
  }
})




