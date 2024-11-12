// Mengambil data yang disimpan di localStorage (jika ada)
let currentRating = localStorage.getItem('companyRating') || 0;
const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];

// Menampilkan rating yang disimpan
document.getElementById("rating-output").textContent = "Rating: " + currentRating;

// Menampilkan ulasan yang disimpan
function displaySavedReviews() {
    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = ''; // Clear the container

    savedReviews.forEach((review, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review-item");

        // Menampilkan rating dengan bintang
        let ratingHtml = '';
        for (let i = 0; i < 5; i++) {
            ratingHtml += i < review.rating ? '&#9733;' : '&#9734;'; // Menggunakan karakter bintang penuh atau kosong
        }

        reviewItem.innerHTML = `
            <strong>${review.name}</strong> <span class="text-muted">${review.date}</span>
            <div class="rating">${ratingHtml}</div>
            <p>${review.text}</p>
            <button class="btn btn-danger btn-sm" onclick="deleteReview(${index})">Hapus Ulasan</button>
        `;
        reviewsContainer.appendChild(reviewItem);
    });
}
displaySavedReviews();

// Fungsi untuk menangani rating
function rateCompany(rating) {
    currentRating = rating;
    localStorage.setItem('companyRating', currentRating); // Simpan rating ke localStorage
    document.getElementById("rating-output").textContent = "Rating: " + currentRating;
}

// Menangani pengiriman ulasan
document.getElementById("review-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const visitorName = document.getElementById("visitor-name").value.trim();
    const reviewText = document.getElementById("review-text").value.trim();

    if (visitorName && reviewText && currentRating > 0) {
        // Menambahkan tanggal ulasan
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString(); // Format tanggal dan waktu

        // Menambahkan ulasan baru
        const newReview = {
            name: visitorName,
            text: reviewText,
            rating: currentRating, // Menyimpan rating ulasan
            date: formattedDate // Menyimpan tanggal ulasan
        };

        savedReviews.push(newReview);
        localStorage.setItem('reviews', JSON.stringify(savedReviews)); // Simpan ulasan ke localStorage

        // Tampilkan ulasan yang baru
        displaySavedReviews();

        // Reset form
        document.getElementById("visitor-name").value = '';
        document.getElementById("review-text").value = '';
    }
});

// Fungsi untuk menghapus ulasan
function deleteReview(index) {
    // Menghapus ulasan dari array
    savedReviews.splice(index, 1);
    localStorage.setItem('reviews', JSON.stringify(savedReviews)); // Simpan ulang ulasan yang sudah dihapus
    displaySavedReviews(); // Update tampilan ulasan
}

// Array berita dengan objek berita
const newsArticles = [
    {
        id: 1,
        title: "SMKS BINA KARYA 2 Karawang dan PT. COMBEK Kolaborasi dalam Teaching Factory, Cetak Generasi Siap Kerja",
        image: "assets/img/berita/berita1.JPG",
        summary: "SMKS BINA KARYA 2 Karawang menjalin kolaborasi dengan PT. COMBEK melalui program Teaching Factory (TeFa). Program ini bertujuan untuk mempersiapkan siswa dengan keterampilan praktis yang dibutuhkan di dunia industri. Dalam acara pemaparan TeFa, siswa dan guru antusias mengikuti diskusi tentang potensi kerjasama ini. Kepala Sekolah SMKS BINA KARYA 2 menekankan bahwa melalui program ini, siswa tidak hanya dibekali dengan ilmu akademis, tetapi juga pengalaman industri langsung, mulai dari teknologi mutakhir hingga manajemen mutu.",
        content: "Karawang, 8 November 2024 – SMKS BINA KARYA 2 Karawang kembali membuktikan komitmennya dalam mencetak generasi siap kerja melalui kolaborasi dengan PT. COMBEK. Mengusung konsep Teaching Factory (TeFa), program ini menjadi jembatan penting antara dunia pendidikan dan industri, memberikan kesempatan kepada siswa untuk belajar langsung dengan suasana dan standar industri nyata.\n\n" +
                     "Dalam acara pemaparan TeFa yang digelar di SMKS BINA KARYA 2 Karawang, para siswa, guru, serta perwakilan PT. COMBEK antusias mengikuti jalannya diskusi yang memperkenalkan berbagai program dan potensi besar dari kerjasama ini. Kepala SMKS BINA KARYA 2 menegaskan bahwa melalui Teaching Factory, sekolah tidak hanya ingin mencetak lulusan yang kompeten secara akademis, tetapi juga memiliki keterampilan praktis yang siap diterapkan di dunia kerja.\n\n" +
                     "“Di TeFa ini, siswa akan belajar dari ahli industri langsung. Mereka mendapatkan pengalaman nyata tentang cara bekerja dengan teknologi mutakhir, tata kelola produksi, hingga manajemen mutu yang akan menjadi bekal untuk masa depan,” ujar Kepala Sekolah SMKS BINA KARYA 2.\n\n" +
                     "Tak hanya menyediakan kurikulum dan pelatihan teknis, PT. COMBEK juga berkomitmen untuk memberikan pendampingan berupa pelatihan soft skills dan pengembangan karakter, sehingga lulusan SMKS BINA KARYA 2 Karawang tidak hanya siap secara teknis tetapi juga memiliki sikap profesional. \"Kami ingin siswa di sini merasa nyaman sekaligus tertantang dengan pengalaman industri yang sesungguhnya. Dengan begitu, mereka siap untuk bekerja atau bahkan berwirausaha setelah lulus,\" ungkap salah satu perwakilan dari PT. COMBEK.\n\n" +
                     "Kerja sama ini menciptakan atmosfer belajar yang berorientasi industri, di mana siswa dapat berlatih menggunakan alat dan teknologi terbaru, serta belajar menghadapi tantangan dan masalah nyata yang sering muncul di tempat kerja. Di sela-sela acara, beberapa siswa menyampaikan rasa antusias mereka atas adanya TeFa ini, karena memberikan pengalaman berharga yang tidak akan mereka temukan hanya di ruang kelas.\n\n" +
                     "Diharapkan, kolaborasi antara SMKS BINA KARYA 2 Karawang dan PT. COMBEK akan terus berlanjut dan semakin erat, membawa manfaat besar bagi dunia pendidikan dan industri di Indonesia."
    },
    {
        id: 2,
        title: "Bengkel One Auto Service Rayakan Ulang Tahun ke-2 dengan Family Gathering yang Meriah",
        image: "assets/img/berita/berita2.jpg",
        summary: "Acara semakin meriah dengan adanya sesi pembagian hadiah untuk keluarga dan karyawan yang telah berkontribusi luar biasa dalam perjalanan bengkel. Semua tamu yang hadir, baik keluarga maupun pemilik bengkel lainnya, tampak sangat menikmati acara ini, menjadikannya sebagai momen yang tak terlupakan.",
        content: "Karawang, 11 November 2024 – Bengkel One Auto Service merayakan ulang tahun yang kedua dengan mengadakan acara Family Gathering yang berlangsung meriah di Karawang. Acara ini dihadiri oleh para pemilik bengkel, karyawan, serta keluarga besar Bengkel One Auto Service. Acara tersebut bertujuan untuk mempererat hubungan antar pemilik bengkel serta memberikan kesempatan untuk saling berbagi pengalaman dan bersantai bersama setelah dua tahun perjalanan penuh tantangan. Para pemilik bengkel dan karyawan saling memberikan apresiasi atas pencapaian yang telah diraih selama ini dan berharap agar Bengkel One Auto Service dapat terus berkembang dan memberikan layanan terbaik kepada pelanggan. Selain sesi sambutan, acara juga dimeriahkan dengan berbagai kegiatan seperti lomba antar keluarga, hiburan musik, dan diskusi ringan mengenai tren otomotif terbaru. Para tamu yang hadir menikmati acara ini, yang juga menjadi momen berharga untuk memperkuat kerja sama dan jaringan antar bengkel. Sebagai bengkel yang didirikan pada tahun 2022, Bengkel One Auto Service kini semakin berkembang dan berencana untuk membuka cabang baru. Dengan semangat untuk terus berinovasi, bengkel ini berkomitmen untuk terus memberikan pelayanan terbaik dalam perawatan kendaraan."
    }
];

// Fungsi untuk menampilkan berita di halaman utama
function displayNews() {
    const newsContainer = document.getElementById("news-container");

    newsArticles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.className = "card mb-4";
        newsCard.innerHTML = `
            <img src="${article.image}" class="card-img-top img-fluid news-image" alt="${article.title}">
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.summary}</p>
                <button onclick="openFullArticle(${article.id})" class="btn btn-primary">Baca selengkapnya</button>
            </div>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Fungsi untuk menampilkan artikel penuh di bagian atas
function openFullArticle(articleId) {
    const article = newsArticles.find(item => item.id === articleId);
    if (article) {
        document.getElementById("full-article-title").textContent = article.title;
        document.getElementById("full-article-image").src = article.image;
        document.getElementById("full-article-content").textContent = article.content;
        document.getElementById("full-article").style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Fungsi untuk menutup tampilan artikel penuh
function closeFullArticle() {
    document.getElementById("full-article").style.display = "none";
}

// Panggil fungsi untuk menampilkan berita saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayNews);
