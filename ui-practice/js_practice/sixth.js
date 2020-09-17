var name = prompt('Enter your name')

wishme(name)

//wishme()

function wishme(name = 'Guest') {
    alert("Hello !! " + name)
}