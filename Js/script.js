// Mengambil elemen dari DOM
const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

// Menambahkan interaktivitas klik pada menu burger
burger.addEventListener('click', () => {
    // Memunculkan atau menyembunyikan menu navigasi samping
    nav.classList.toggle('nav-active');
    
    // Animasi perubahan bentuk ikon burger
    burger.classList.toggle('toggle');
});