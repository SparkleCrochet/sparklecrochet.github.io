function addItem() {
    const title = document.getElementById('itemTitle').value;
    const fileInput = document.getElementById('itemImage');
    const price = document.getElementById('itemPrice').value;
    const status = document.getElementById('itemStatus').value;

    if (title && fileInput.files.length > 0 && price && status) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            const imageUrl = event.target.result; // The base64 encoded image data
            const itemContainer = document.createElement('div');
            itemContainer.className = 'item';
            itemContainer.innerHTML = `
                <h2>${title}</h2>
                <img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">
                <div class="price">${price}</div>
            `;

            // Append to the appropriate section based on status
            const targetContainer = status === 'available' ? document.getElementById('available-items') : document.getElementById('sold-items');
            targetContainer.appendChild(itemContainer);

            // Clear input fields
            document.getElementById('itemTitle').value = '';
            document.getElementById('itemImage').value = '';
            document.getElementById('itemPrice').value = '';
            document.getElementById('itemStatus').value = '';
        };

        reader.readAsDataURL(file); // Read the image file as a data URL
    } else {
        alert("Please fill in all fields.");
    }
}

function addItem() {
    const title = document.getElementById('itemTitle').value;
    const price = document.getElementById('itemPrice').value;
    const description = document.getElementById('itemDescription').value;
    const fileInput = document.getElementById('itemImage');

    if (title && fileInput.files.length > 0 && price && description) {
        const images = []; // Array to hold image URLs

        Array.from(fileInput.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(event) {
                images.push(event.target.result);
                if (images.length === fileInput.files.length) {
                    // Create a link to the new item page
                    const itemLink = document.createElement('a');
                    itemLink.href = `item.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&images=${encodeURIComponent(JSON.stringify(images))}`;
                    itemLink.target = "_blank"; // Open in a new tab
                    itemLink.innerText = title; // Display the title
                    document.getElementById('items-container').appendChild(itemLink); // Append link to items container
                    itemLink.style.display = 'block'; // Make it a block element for better appearance

                    // Clear input fields
                    document.getElementById('itemTitle').value = '';
                    document.getElementById('itemImage').value = '';
                    document.getElementById('itemPrice').value = '';
                    document.getElementById('itemDescription').value = '';
                }
            };
            reader.readAsDataURL(file);
        });
    } else {
        alert("Please fill in all fields.");
    }
}

