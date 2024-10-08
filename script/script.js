document.addEventListener('DOMContentLoaded', function() {
    let keranjang = [];
    const formTransaksi = document.getElementById('form-transaksi');
    const tabelKeranjang = document.getElementById('tabel-keranjang').getElementsByTagName('tbody')[0];
    const totalStok = document.getElementById('total-stok');
    let totalBarang = 0;

    // Fungsi untuk menambahkan barang ke dalam keranjang
    formTransaksi.addEventListener('submit', function(e) {
        e.preventDefault();

        let namaBarang = document.getElementById('nama-barang').value;
        let jumlahBarang = parseInt(document.getElementById('jumlah-barang').value);
        let hargaBarang = parseInt(document.getElementById('harga-barang').value);
        let totalHarga = jumlahBarang * hargaBarang;

        // Tambah barang ke array keranjang
        keranjang.push({
            nama: namaBarang,
            jumlah: jumlahBarang,
            harga: hargaBarang,
            total: totalHarga
        });

        // Update total barang
        totalBarang += jumlahBarang;
        totalStok.innerText = totalBarang;

        // Update tabel keranjang
        updateTabelKeranjang();

        // Clear form input
        formTransaksi.reset();
    });

    // Fungsi untuk update tabel keranjang
    function updateTabelKeranjang() {
        tabelKeranjang.innerHTML = '';
        keranjang.forEach((barang, index) => {
            let row = tabelKeranjang.insertRow();
            row.insertCell(0).innerText = index + 1;
            row.insertCell(1).innerText = barang.nama;
            row.insertCell(2).innerText = barang.jumlah;
            row.insertCell(3).innerText = barang.harga;
            row.insertCell(4).innerText = barang.total;
            let aksiCell = row.insertCell(5);
            let deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger btn-sm';
            deleteButton.innerText = 'Hapus';
            deleteButton.onclick = () => {
                keranjang.splice(index, 1); // Hapus barang dari keranjang
                totalBarang -= barang.jumlah; // Update total stok
                totalStok.innerText = totalBarang;
                updateTabelKeranjang(); // Update tabel
            };
            aksiCell.appendChild(deleteButton);
        });
    }

    // Fungsi untuk memproses transaksi
    document.getElementById('proses-transaksi').addEventListener('click', function() {
        if (keranjang.length > 0) {
            alert('Transaksi berhasil diproses!');
            keranjang = []; // Kosongkan keranjang setelah transaksi
            updateTabelKeranjang(); // Update tabel
            totalBarang = 0;
            totalStok.innerText = totalBarang;
        } else {
            alert('Keranjang masih kosong!');
        }
    });
});
