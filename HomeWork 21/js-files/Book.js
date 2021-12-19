export class Book {
    constructor(name, author, publishing, price) {
        this.name = name;
        this.author = author;
        this.publishing = publishing;
        this.price = price;
    }
    getBookVat(price) {
        return price * 0.17;
    }
    displayBookDetails(booksArray) {
        const booksTableBodyElement = document.querySelector(".books-table-body");
        let tableDataStr = "";
        for (let i = 0; i < booksArray.length; i++) {
            tableDataStr += `<tr>
            <td>${i + 1}</td>
            <td>${booksArray[i].name}</td>
            <td>${booksArray[i].author}</td>
            <td>${booksArray[i].publishing}</td>
            <td>${booksArray[i].price}&#36;</td>
            <td id = "vat-${i}"><a type ="button" id="button-${i}" class = "vat-button">get book vat</a></td>
        </tr>`;
        }
        booksTableBodyElement.innerHTML = tableDataStr;
    }
}
