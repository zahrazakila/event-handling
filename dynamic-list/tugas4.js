document.getElementById('addItemBtn').addEventListener('click', function () {
    const itemValue = document.getElementById('itemInput').value;
    if (itemValue.trim() !== '') {
        const newItem = document.createElement('li');
        newItem.textContent = itemValue;
        document.getElementById('itemList').appendChild(newItem);
        document.getElementById('itemInput').value = ''; // Kosongkan input setelah menambahkan
    } else {
        alert('Mohon masukkan item sebelum menambahkannya ke daftar!');
    }
});
