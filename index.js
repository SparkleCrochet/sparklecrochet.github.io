<script>
    const correctPassword = "SparkleCrochet"; // Set your password here

    function openAddItemWindow() {
        const password = prompt("Enter password:");
        if (password === correctPassword) {
            window.open('add-item.html', '_blank', 'width=600,height=400');
        } else {
            alert("Incorrect password!");
        }
    }

    function addItemToContainer(title, price, description, images, status) {
        const itemDiv = document.createElement('div');
        itemDiv.className = "item";

        const itemLink = document.createElement('a');
        itemLink.href = `item.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&images=${encodeURIComponent(JSON.stringify(images))}`;
        itemLink.target = "_blank"; // Open in new tab
        itemLink.innerText = title;

        const itemPrice = document.createElement('div');
        itemPrice.innerText = `Price: ${price}`;

        const itemImage = document.createElement('img');
        itemImage.src = images[0]; // Use the first image as a thumbnail
        itemImage.alt = title; // Set alt text for accessibility

        itemDiv.appendChild(itemLink);
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemPrice);

        // Append to the appropriate section based on status
        if (status === "available") {
            document.getElementById('available-items').appendChild(itemDiv);
        } else {
            document.getElementById('sold-items').appendChild(itemDiv);
        }
    }

    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => {
            addItemToContainer(item.title, item.price, item.description, item.images, item.status);
        });
    }

    window.onload = loadItems; // Load items when the page loads
</script>
   <script>
    const correctPassword = "SparkleCrochet"; // Set your password here
    function openAddItemWindow() {
        const password = prompt("Enter password:");
        if (password === correctPassword) {
            window.open('add-item.html', '_blank', 'width=600,height=400');
        } else {
            alert("Incorrect password!");
        }
    }

    function addItemToContainer(title, price, description, images, status) {
        const itemDiv = document.createElement('div');
        itemDiv.className = "item";

        const itemLink = document.createElement('a');
        itemLink.href = `item.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&images=${encodeURIComponent(JSON.stringify(images))}`;
        itemLink.target = "_blank"; // Open in new tab
        itemLink.innerText = title;

        const itemPrice = document.createElement('div');
        itemPrice.innerText = `Price: ${price}`;

        const itemImage = document.createElement('img');
        itemImage.src = images[0]; // Use the first image as a thumbnail

        itemDiv.appendChild(itemLink);
        itemDiv.appendChild(itemImage);
        itemDiv.appendChild(itemPrice);

        if (status === "available") {
            document.getElementById('available-items').appendChild(itemDiv);
        } else {
            document.getElementById('sold-items').appendChild(itemDiv);
        }
    }

    function loadItems() {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.forEach(item => {
            addItemToContainer(item.title, item.price, item.description, item.images, item.status);
        });
    }

    window.onload = loadItems; // Load items when the page loads
</script>
