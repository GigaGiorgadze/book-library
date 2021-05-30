let myLibrary = JSON.parse(localStorage.getItem('items')) || [{name: "you don't know javascript", author: 'Kyle Simpson', pages: 180, read: "true"}];
const addBtn = document.querySelector('#add')
const tbody = document.querySelector('tbody')
const form = document.querySelector('form')
const nameInput = document.querySelector('input[name="name"]')
const authorInput = document.querySelector('input[name="author"]')
const pagesInput = document.querySelector('input[name="pages"]')
const inputs = document.querySelectorAll('input')
const readInput = document.querySelector('select')
let readState;

function Book(name,author,pages,read) {       
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.read = read
}
let i = 0;
function addBookToLibrary() {
    if(nameInput.value === '' || authorInput.value === ''){
        alert("please fill out every field")
    }else{
       
        let nameQustion = nameInput.value
let authorQustion = authorInput.value
let pagesQuestion = pagesInput.value
let readQuestion = readInput.value
    let book1 = new Book(nameQustion,authorQustion,pagesQuestion,readQuestion)
    myLibrary.push(book1)
    localStorage.setItem('items', JSON.stringify(myLibrary))
    myLibrary.forEach(book => {    
        const tr = document.createElement('tr')
        const Nametd = document.createElement('td')
        const authortd = document.createElement('td')
        const pagestd = document.createElement('td')
        const read = document.createElement('td')
        read.setAttribute('id', "state")
        const readBtn = document.createElement('td')
        readBtn.addEventListener('click', (e) => {
            if(read.innerText === "yes"){
                read.innerText = 'no'
            }else if(read.innerText === 'no'){
                read.innerText = 'no'
            }
        })
        const deleteBtn = document.createElement('td')
        let readStatus = (myLibrary[i].read == "true" ? "yes" : 'no')
        Nametd.innerText =myLibrary[i].name
        authortd.innerText =myLibrary[i].author
        pagestd.innerText = myLibrary[i].pages
        read.innerText = readStatus
        readBtn.innerHTML = `<button>change read status</button>`
        deleteBtn.innerHTML = `<button>delete</button>`
        deleteBtn.addEventListener('click', () => {
            tr.remove()
            myLibrary.splice(i,1)
            myLibrary.splice(i-1,1)
            localStorage.setItem('items', JSON.stringify(myLibrary))
        })
        tbody.appendChild(tr)
        tr.appendChild(Nametd)
        tr.appendChild(authortd)
        tr.appendChild(pagestd)
        tr.appendChild(read)
        tr.appendChild(readBtn)
        tr.appendChild(deleteBtn)
        i++
        form.reset()
    })
    }
    
}
addBtn.addEventListener('click', addBookToLibrary)
addBtn.addEventListener('click', (e) =>{
    e.preventDefault()
})
window.addEventListener('load', () => {
    
    myLibrary.forEach(book => {    
        const tr = document.createElement('tr')
        const Nametd = document.createElement('td')
        const authortd = document.createElement('td')
        const pagestd = document.createElement('td')
        const read = document.createElement('td')
        read.setAttribute('id', "state")
        const readBtn = document.createElement('td')
        readBtn.addEventListener('click', (e) => {
            if(read.innerText === "yes"){
                read.innerText = 'no'
            }else if(read.innerText === 'no'){
                read.innerText = 'no'
            }
        })
        const deleteBtn = document.createElement('td')
        let readStatus = (myLibrary[i].read == "true" ? "yes" : 'no')
        Nametd.innerText =myLibrary[i].name
        authortd.innerText =myLibrary[i].author
        pagestd.innerText = myLibrary[i].pages
        read.innerText = readStatus
        readBtn.innerHTML = `<button>change read status</button>`
        deleteBtn.innerHTML = `<button>delete</button>`
        deleteBtn.addEventListener('click', () => {
            console.log(i)
            tr.remove()
            myLibrary.splice(i-1,1)
            localStorage.setItem('items', JSON.stringify(myLibrary))
        })
        tbody.appendChild(tr)
        tr.appendChild(Nametd)
        tr.appendChild(authortd)
        tr.appendChild(pagestd)
        tr.appendChild(read)
        tr.appendChild(readBtn)
        tr.appendChild(deleteBtn)
        i++
        form.reset()
    })
})
