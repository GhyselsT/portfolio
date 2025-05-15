document.addEventListener('DOMContentLoaded', function() {


var map = L.map('map').setView([51.14518, 4.33834], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.polygon([
    [51.161882, 4.332093],
    [51.129898, 4.326685],
    [51.135725, 4.357868],
    [51.155477, 4.348948]
],{
    color: '#bc96e6',
    fillOpacity: 0.3
}).addTo(map);
});