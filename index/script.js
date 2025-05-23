// Event listener untuk form submission
document.getElementById("safelink-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman secara default

    // Ambil URL yang dimasukkan oleh pengguna
    const linkInput = document.getElementById("link-input").value;

    // Validasi: Pastikan URL tidak kosong
    if (!linkInput) {
        alert("Please enter a valid URL.");
        return;
    }

    // Encode URL menggunakan Base64 agar aman
    const encodedLink = btoa(linkInput);
    const safelink = `${window.location.origin}/redirect.html?url=${encodedLink}`;

    // Tampilkan hasil safelink kepada pengguna
    const resultSection = document.getElementById("result");
    const output = document.getElementById("safe-link-output");
    output.textContent = safelink;
    resultSection.classList.remove("hidden"); // Tampilkan hasil yang semula tersembunyi
});

// Event listener untuk tombol salin (copy)
document.getElementById("copy-button").addEventListener("click", function() {
    const copyText = document.getElementById("safe-link-output").textContent;

    // Salin teks ke clipboard pengguna
    navigator.clipboard.writeText(copyText)
        .then(() => alert("Safelink copied to clipboard!")) // Berhasil
        .catch(err => console.error("Failed to copy text: ", err)); // Gagal
});
