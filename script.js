// Script untuk menampilkan tombol saat scroll ke bawah
const backToTopButton = document.getElementById("backToTopButton");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Script untuk kembali ke atas
backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});
