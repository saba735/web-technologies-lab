const url = "http://localhost:3000";

function displayBooks(data) {

let output = "";

data.forEach(book => {
output += `
<p>
<b>${book.title}</b><br>
Author: ${book.author}<br>
Category: ${book.category}<br>
Price: ${book.price}<br>
Rating: ${book.rating}
</p>
<hr>
`;
});

document.getElementById("books").innerHTML = output;
}


// Search by title
function searchBook(){

let title = document.getElementById("title").value;

fetch(`${url}/books/search?title=${title}`)
.then(res => res.json())
.then(data => displayBooks(data));
}


// Filter category
function filterCategory(){

fetch(`${url}/books/category/Programming`)
.then(res => res.json())
.then(data => displayBooks(data));
}


// Sort by price
function sortPrice(){

fetch(`${url}/books/sort/price`)
.then(res => res.json())
.then(data => displayBooks(data));
}


// Sort by rating
function sortRating(){

fetch(`${url}/books/sort/rating`)
.then(res => res.json())
.then(data => displayBooks(data));
}


// Top rated
function topBooks(){

fetch(`${url}/books/top`)
.then(res => res.json())
.then(data => displayBooks(data));
}


// Pagination
function loadPage(){

fetch(`${url}/books?page=1`)
.then(res => res.json())
.then(data => displayBooks(data));
}
