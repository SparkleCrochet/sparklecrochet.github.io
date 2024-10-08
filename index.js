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
