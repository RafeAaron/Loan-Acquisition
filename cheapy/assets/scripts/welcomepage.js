
document.addEventListener('DOMContentLoaded', () => {
    const drawer = document.querySelector('.drawer');
    const hamburger = document.querySelector('.hamburger');
    const drawerItems = document.querySelectorAll('.drawer ul li');

    hamburger.addEventListener('click', () => {
        drawer.classList.toggle('open'); // Toggle drawer visibility
        hamburger.classList.toggle('open'); // Toggle hamburger icon to close icon
    });

    drawerItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', (event) => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                event.preventDefault(); // Prevent default action for demonstration purposes
                dropdown.classList.toggle('open'); // Toggle dropdown visibility
            }
        });
    });

    // Floating Call Button click event
    const callButton = document.getElementById('callButton');
    callButton.addEventListener('click', () => {
        window.location.href = './videocall.html'
    });
});
