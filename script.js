/* CRUMBLE & CO. — fitur interaktif
   Isi nomor WhatsApp pada WHATSAPP_NUMBER sebelum menerima pesanan.
   Format: kode negara + nomor, tanpa tanda +, spasi, atau tanda hubung.
   Contoh format Indonesia: 62812XXXXXXXX
*/
(() => {
  "use strict";

  const WHATSAPP_NUMBER = "6283877660960";

  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });

      productCards.forEach((card) => {
        const matches = filter === "all" || card.dataset.category === filter;
        card.hidden = !matches;
      });
    });
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
  });

  document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.dataset.product || "produk Crumble & Co.";
      if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
        alert("Nomor WhatsApp toko belum diatur. Silakan isi WHATSAPP_NUMBER di file script.js terlebih dahulu.");
        return;
      }
      const message = `Halo Crumble & Co., saya ingin memesan ${product}. Mohon informasi ketersediaan dan cara pemesanannya.`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  // Jangan arahkan pengunjung ke tautan yang masih kosong (#).
  ["tiktok-link", "instagram-link"].forEach((id) => {
    const link = document.getElementById(id);
    if (link && (!link.getAttribute("href") || link.getAttribute("href") === "#")) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Tautan media sosial belum diatur. Tambahkan URL akun toko pada index.html.");
      });
    }
  });
})();
