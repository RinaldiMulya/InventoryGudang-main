document.addEventListener('DOMContentLoaded', function() {
    // Simulasi data stok yang akan diambil dari database
    let totalStok = 500;
    let barangMasuk = 30;
    let barangKeluar = 15;

    // Menampilkan data stok
    document.getElementById('total-stok').innerText = totalStok;
    document.getElementById('barang-masuk').innerText = barangMasuk;
    document.getElementById('barang-keluar').innerText = barangKeluar;

    // API fetch bisa dilakukan di sini untuk data real-time dari database
    // fetch('your-api-url-here')
    //     .then(response => response.json())
    //     .then(data => {
    //         document.getElementById('total-stok').innerText = data.totalStok;
    //         document.getElementById('barang-masuk').innerText = data.barangMasuk;
    //         document.getElementById('barang-keluar').innerText = data.barangKeluar;
    //     });
});
