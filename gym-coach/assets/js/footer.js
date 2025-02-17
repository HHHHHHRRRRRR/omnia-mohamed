
// Use JavaScript to load the header dynamically
fetch('assets/parts/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('js-footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading the header:', error));
