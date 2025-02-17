
// Use JavaScript to load the header dynamically
fetch('assets/parts/sticky-header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('st-header').innerHTML = data;
    })
    .catch(error => console.error('Error loading the header:', error));
