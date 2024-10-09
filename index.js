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


function addItem() {
    const title = document.getElementById('itemTitle').value;
    const price = document.getElementById('itemPrice').value;
    const description = document.getElementById('itemDescription').value;
    const status = document.getElementById('itemStatus').value;
    const fileInput = document.getElementById('itemImage');

    console.log('Adding item:', { title, price, description, status });

    if (title && fileInput.files.length > 0 && price && description && status) {
        const images = [];
        let filesProcessed = 0;

        Array.from(fileInput.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(event) {
                images.push(event.target.result);
                filesProcessed++;

                console.log('Processed image:', event.target.result);

                if (filesProcessed === fileInput.files.length) {
                    const newItem = { title, price, description, images, status };
                    const items = JSON.parse(localStorage.getItem('items')) || [];
                    items.push(newItem);
                    localStorage.setItem('items', JSON.stringify(items));

                    console.log('Items saved:', items);
                    window.opener.addItemToContainer(title, price, description, images, status);
                    alert("Item added successfully!");
                    window.close(); // Close the add item window
                }
            };
            reader.readAsDataURL(file);
        });
    } else {
        alert("Please fill in all fields.");
    }
}
