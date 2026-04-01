function loadXML() {

    fetch("employees.xml")
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {

        const employees = data.getElementsByTagName("employee");
        const table = document.getElementById("table");
        table.innerHTML = "";

        for(let i=0; i<employees.length; i++){

            const id = employees[i].getElementsByTagName("id")[0].textContent;
            const name = employees[i].getElementsByTagName("name")[0].textContent;
            const dept = employees[i].getElementsByTagName("department")[0].textContent;
            const salary = employees[i].getElementsByTagName("salary")[0].textContent;

            table.innerHTML += `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${dept}</td>
                    <td>${salary}</td>
                </tr>
            `;
        }

    })
    .catch(() => {
        alert("Error loading XML");
    });

}
