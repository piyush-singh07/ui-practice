var books = []
var choice = prompt('Please select your choice add | update | remove | list | exit')
while (choice != 'exit') {
    if (choice == 'add') {
        var book = prompt('Enter the book name')
        books.push(book)
    } else if (choice == 'update') {
        var temp = prompt('Enter the book you want to update')
            //console.log('------->' + temp)
        var i = books.indexOf(temp)
            //console.log('-------->' + i)
        if (i === -1) {
            alert('Book is not in the List')
        } else {
            books[i] = prompt('Enter the new book name')
        }
    } else if (choice == 'remove') {
        var temp = prompt('Enter the book you want to remove')
        var i = books.indexOf(temp)
        if (i === -1) {
            alert('Book is not in the List')
        } else {
            books.splice(i, 1)
        }

    } else if (choice == 'list') {
        alert('List of available books are :' + books)
    } else {
        alert('Enter a valid input from add | update | remove | list | exit  ')
    }



    var choice = prompt('Please select your choice add | update | remove | list | exit')

}

alert('Thanks for using our application')