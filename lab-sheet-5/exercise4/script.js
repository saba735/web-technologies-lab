let inventory = [];

function loadInventory(){

    fetch("inventory.json")
    .then(res => res.json())
    .then(data => {
        inventory = data;
        displayInventory();
    });
}

function displayInventory(){

    const table = document.getElementById("table");
    table.innerHTML = "";

    let total = 0;

    inventory.forEach((p,index)=>{

        total += p.price * p.stock;

        table.innerHTML += `
            <tr ${p.stock < 5 ? "style='color:red'" : ""}>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").innerText =
        "Total Inventory Value: ₹" + total;
}

function deleteProduct(index){
    inventory.splice(index,1);
    displayInventory();
}
