var name = prompt('Enter the snake case:')
alert('Snake to kebab is :' + toKebab(name))

function toKebab(name) {
    return name.replace(/_/g, '-')
}