// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('nav h2').classList.toggle('active');
        document.querySelector('.menu-toggle').classList.toggle('active');
    });
});