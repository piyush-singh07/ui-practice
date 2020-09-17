var str = prompt('Enter a string')
alert('The value is ' + toUpp(str))

function toUpp(str) {
    return str[0].toUpperCase() + str.slice(1);
}