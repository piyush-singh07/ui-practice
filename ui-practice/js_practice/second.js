var name = prompt('Enter your name :')
var age = prompt('Enter your age :')
if (age < 18) {
    alert('Hello ' + name + 'you are not a voter')
} else if (age >= 18) {
    alert('Hello ' + name + 'you are a voter')
}