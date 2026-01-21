/* ================= Exercise 1 ================= */
document.getElementById("regForm").onsubmit = function(e) {
    e.preventDefault();
    let role = roleCheck();
    document.getElementById("regMsg").innerText = role ? "Registration Successful" : "Validation Failed";
};

function roleCheck() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let role = document.getElementById("role").value;

    if (pass !== confirm) return false;
    if (role === "admin" && pass.length < 8) return false;
    if (!document.getElementById("email").value.endsWith(".com")) return false;

    return true;
}
/* ================= Exercise 2 ================= */

let cart = [];

function addToCart() {
    let data = document.getElementById("productSelect").value.split("|");
    let qty = parseInt(document.getElementById("qty").value);

    let product = {
        name: data[0],
        category: data[1],
        price: parseInt(data[2]),
        quantity: qty
    };

    cart.push(product);
    updateCart();
}

function updateCart() {
    let list = document.getElementById("cartList");
    let total = 0;
    list.innerHTML = "";

    cart.forEach((item, index) => {
        let cost = item.price * item.quantity;

        // Bulk discount
        if (item.quantity >= 3) cost *= 0.9;

        // Category discount
        if (item.category === "clothing") cost *= 0.95;

        total += cost;

        list.innerHTML += `
            <li>
                ${item.name} (${item.category}) - ₹${cost}
                <button onclick="removeItem(${index})">Remove</button>
            </li>`;
    });

    // Coupon discount
    let coupon = document.getElementById("coupon").value.trim().toUpperCase();
    if (coupon.startsWith("SAVE")) {
        total *= 0.9;
    }

    // Time-based discount
    let hour = new Date().getHours();
    if (hour >= 18 && hour <= 20) {
        total *= 0.95;
    }

    document.getElementById("cartTotal").innerText = Math.round(total);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
/* ================= Exercise 3 ================= */
const questions = [
    { q: "Your Name", type: "text", required: true },
    { q: "Gender", type: "radio", options: ["Male", "Female"], required: true }
];

const form = document.getElementById("surveyForm");

questions.forEach((item, i) => {
    let label = document.createElement("label");
    label.innerText = item.q;
    form.appendChild(label);

    if (item.type === "text") {
        let input = document.createElement("input");
        input.id = "q" + i;
        form.appendChild(input);
    }

    if (item.type === "radio") {
        item.options.forEach(opt => {
            let r = document.createElement("input");
            r.type = "radio";
            r.name = "q" + i;
            form.appendChild(r);
            form.append(opt);
        });
    }
});

function validateSurvey() {
    document.getElementById("surveyMsg").innerText = "Survey Submitted Successfully";
}

/* ================= Exercise 4 ================= */
let activities = [];

document.addEventListener("click", e => logActivity("Click"));
document.addEventListener("keydown", e => logActivity("Key Press"));

function logActivity(type) {
    activities.push(type);
    document.getElementById("activityLog").innerHTML += `<li>${type}</li>`;
    if (activities.length > 10)
        document.getElementById("warning").innerText = "Suspicious Activity Detected";
}

function resetLog() {
    activities = [];
    document.getElementById("activityLog").innerHTML = "";
}

function exportLog() {
    alert(activities.join(", "));
}

/* ================= Exercise 5 ================= */
let step = 0;
const steps = document.querySelectorAll(".step");

function nextStep() {
    if (!steps[step].querySelector("input").value) return;
    steps[step].classList.remove("active");
    step++;
    if (step < steps.length) {
        steps[step].classList.add("active");
        document.getElementById("bar").style.width = ((step + 1) * 25) + "%";
    }
}
