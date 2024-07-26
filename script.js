function redirectTo(link) {
    switch (link) {
        case 'link1':
            window.location.href = 'http://example.com/sestava1';
            break;
        case 'link2':
            window.location.href = 'http://example.com/sestava2';
            break;
        case 'link3':
            window.location.href = 'http://example.com/sestava3';
            break;
        // Přidej další odkazy podle potřeby
        default:
            break;
    }
}
