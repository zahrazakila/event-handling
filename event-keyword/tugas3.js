document.getElementById('inputField').addEventListener('keydown', function (event) {
    document.getElementById('output').textContent = `Karakter terakhir yang ditekan: ${event.key}`;
});
