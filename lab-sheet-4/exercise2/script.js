const search = document.getElementById("search");
const resultDiv = document.getElementById("results");

let timeout = null;

search.addEventListener("input", function() {

    clearTimeout(timeout);

    timeout = setTimeout(() => {

        fetch("products.json")
        .then(res => res.json())
        .then(data => {

            const query = search.value.toLowerCase();
            const filtered = data.filter(product =>
                product.name.toLowerCase().includes(query)
            );

            resultDiv.innerHTML = "";

            if(filtered.length === 0){
                resultDiv.innerHTML = "No results found";
            }

            filtered.forEach(product => {
                resultDiv.innerHTML += `
                    <p>${product.name} - ₹${product.price} - ${product.category}</p>
                `;
            });

        })
        .catch(() => {
            resultDiv.innerHTML = "Error fetching products";
        });

    }, 500);

});
