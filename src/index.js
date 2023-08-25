import './style.css'
import showHome from './home'
import showMenu from './menu'
import showAbout from './about'

const header = document.createElement('div')
header.classList.add('header')

const headerNavBtns = document.createElement('ul')
headerNavBtns.classList.add('header-nav-btns')

const home = document.createElement('li')
home.classList.add('home')
home.textContent = "Home"
headerNavBtns.appendChild(home)

const menu = document.createElement('li')
menu.classList.add('menu')
menu.textContent = 'Menu'

const about = document.createElement('li')
about.classList.add('about')
about.textContent = 'About'


headerNavBtns.appendChild(menu)
headerNavBtns.appendChild(about)

header.appendChild(headerNavBtns)

document.body.appendChild(header)

// const headerLogo = document.createElement('div')
// headerLogo.textContent = 'Bikram\'s Kitchen'
// headerLogo.classList.add('header-logo')

// header.appendChild(headerLogo)

const headerToolBtns = document.createElement('ul')
headerToolBtns.classList.add('header-tool-btns')
const order = document.createElement('li')
const contact = document.createElement('li')
const signIn = document.createElement('li')

order.classList.add('order')
signIn.classList.add('sign-in')
contact.classList.add('contact')

order.textContent = 'Order'
signIn.textContent = 'Sign in'
contact.textContent = 'Contact'


headerToolBtns.appendChild(order)
headerToolBtns.appendChild(signIn)
headerToolBtns.appendChild(contact)


header.appendChild(headerToolBtns)


const content = document.createElement('div')
content.classList.add('content')
document.body.appendChild(content)

showHome()
home.addEventListener('click', showHome)
menu.addEventListener('click', showMenu)
about.addEventListener('click', showAbout)