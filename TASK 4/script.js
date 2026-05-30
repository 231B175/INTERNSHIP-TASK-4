// Welcome Button

function welcomeMessage() {
    alert("Welcome to My Portfolio Website!");
}

/* =========================
   TO-DO LIST WITH LOCAL STORAGE
========================= */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);
    });
}

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if(task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);

    saveTasks();

    displayTasks();

    input.value = "";
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}

displayTasks();


/* =========================
   PRODUCT LIST
========================= */

let products = [

    {
        name: "Laptop",
        category: "electronics",
        price: 50000
    },

    {
        name: "Headphones",
        category: "electronics",
        price: 2500
    },

    {
        name: "Smart Watch",
        category: "electronics",
        price: 4000
    },

    {
        name: "Shoes",
        category: "fashion",
        price: 3000
    },

    {
        name: "Jacket",
        category: "fashion",
        price: 2000
    },

    {
        name: "Backpack",
        category: "fashion",
        price: 1500
    }

];

function displayProducts(productArray) {

    let container =
        document.getElementById("productContainer");

    container.innerHTML = "";

    productArray.forEach(product => {

        let card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Category:</strong>
            ${product.category}</p>

            <p><strong>Price:</strong>
            ₹${product.price}</p>
        `;

        container.appendChild(card);
    });
}

/* Filter */

function filterProducts() {

    let category =
        document.getElementById("filter").value;

    let filteredProducts;

    if(category === "all") {

        filteredProducts = products;

    } else {

        filteredProducts = products.filter(
            product =>
            product.category === category
        );
    }

    displayProducts(filteredProducts);
}

/* Sort */

function sortProducts() {

    let sortValue =
        document.getElementById("sort").value;

    let sortedProducts = [...products];

    if(sortValue === "low") {

        sortedProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if(sortValue === "high") {

        sortedProducts.sort(
            (a, b) => b.price - a.price
        );
    }

    displayProducts(sortedProducts);
}

/* Load Products */

displayProducts(products);