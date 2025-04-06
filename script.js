function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex'; // Show the menu
    } else {
        menu.style.display = 'none'; // Hide the menu
    }
}