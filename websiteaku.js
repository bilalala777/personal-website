function adjustLayout() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');

    if (width < 600) {
        container.style.flexDirection = 'column'; // Misalnya, ubah arah layout menjadi kolom
    } else {
        container.style.flexDirection = 'row'; // Kembalikan ke baris
    }
}