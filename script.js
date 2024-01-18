function trackProduct() {
    var code = document.getElementById("code").value;
    var password = document.getElementById("password").value;

    // Simple password validation (replace with a more secure method)
    if (password !== "your_secure_password") {
        document.getElementById("error").innerText = "Invalid password";
        return;
    }

    // Simulated database for product tracking
    var products = {
        '123456': {'name': 'Product A', 'status': 'Shipped'},
        '789012': {'name': 'Product B', 'status': 'Processing'},
        // Add more products as needed
    };

    // Check if the product code exists in the database
    if (code in products) {
        var product = products[code];
        document.getElementById("productName").innerText = product.name;
        document.getElementById("productStatus").innerText = product.status;
        document.getElementById("result").style.display = "block";
        document.getElementById("error").innerText = "";
        document.getElementById("trackingForm").style.display = "none";
    } else {
        document.getElementById("error").innerText = "Product not found";
    }
}

function resetForm() {
    document.getElementById("trackingForm").reset();
    document.getElementById("error").innerText = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("trackingForm").style.display = "block";
}