function addItem() {
    const title = document.getElementById('itemTitle').value;
    const image = document.getElementById('itemImage').value;
    const price = document.getElementById('itemPrice').value;
    const status = document.getElementById('itemStatus').value;

    if (title && image && price && status) {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item';

        itemContainer.innerHTML = `
            <h2>${title}</h2>
            <img src="${image}" alt="${title}">
            <div class="price">${price}</div>
        `;

        // Append to the appropriate section
        if (status === 'available') {
            document.querySelector('#available-items').appendChild(itemContainer);
        } else if (status === 'sold') {
            document.querySelector('#sold-items').appendChild(itemContainer);
        }

        // Clear the input fields
        document.getElementById('itemTitle').value = '';
        document.getElementById('itemImage').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('itemStatus').value = '';
    } else {
        alert("Please fill in all fields.");
    }
}
