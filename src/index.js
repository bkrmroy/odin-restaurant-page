import './style.css'

const header = document.createElement('div')
header.classList.add('header')

const headerNavBtns = document.createElement('ul')
headerNavBtns.classList.add('header-nav-btns')

const home = document.createElement('li')
home.classList.add('home')
home.textContent = "Home"

const menu = document.createElement('li')
menu.classList.add('menu')
menu.textContent = 'Menu'

const about = document.createElement('li')
about.classList.add('about')
about.textContent = 'About'

headerNavBtns.appendChild(home)
headerNavBtns.appendChild(menu)
headerNavBtns.appendChild(about)

header.appendChild(headerNavBtns)

document.body.appendChild(header)

const content = document.createElement('div')
content.classList.add('content')
document.body.appendChild(content)