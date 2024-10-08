function addItem() {
    const title = document.getElementById('itemTitle').value;
    const price = document.getElementById('itemPrice').value;
    const description = document.getElementById('itemDescription').value;
    const fileInput = document.getElementById('itemImage');

    // Check if all fields are filled
    if (title && fileInput.files.length > 0 && price && description) {
        const images = []; // Array to hold image URLs

        // Process each selected file
        Array.from(fileInput.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(event) {
                images.push(event.target.result);
                // If all images are loaded, create the item
                if (images.length === fileInput.files.length) {
                    // Create a link to the new item page
                    const itemLink = document.createElement('a');
                    itemLink.href = `item.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&description=${encodeURIComponent(description)}&images=${encodeURIComponent(JSON.stringify(images))}`;
                    itemLink.target = "_blank"; // Open in a new tab
                    itemLink.innerText = title; // Display the title
                    itemLink.style.display = 'block'; // Make it a block element for better appearance

                    // Append link to the items container
                    document.getElementById('items-container').appendChild(itemLink);

                    // Clear input fields
                    document.getElementById('itemTitle').value = '';
                    document.getElementById('itemImage').value = '';
                    document.getElementById('itemPrice').value = '';
                    document.getElementById('itemDescription').value = '';
                }
            };
            reader.readAsDataURL(file); // Read the file
        });
    } else {
        alert("Please fill in all fields."); // Alert if fields are empty
    }
}
