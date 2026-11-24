
/* CRUMBLE & CO. — interactive features */
(() => {
  "use strict";

  // Nomor WhatsApp CRUMBLE & CO.
  const WHATSAPP_NUMBER = "6283877660960";

  // Harga produk
  const productPrices = {
    "Choco Chip Cookies": "Rp25.000",
    "Fudgy Brownies Bites": "Rp30.000",
    "Premium Nastar": "Rp35.000",
    "Crispy Cheese Stick": "Rp20.000",
    "Sweet Palmier": "Rp22.000"
  };

  // MOBILE MENU
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Tutup menu" : "Buka menu"
      );

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

  // PRODUCT FILTER
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
        const matches =
          filter === "all" ||
          card.dataset.category === filter;

        card.hidden = !matches;
      });
    });

    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active"))
    );
  });

  // WHATSAPP ORDER
  document.querySelectorAll(".order-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const product =
        button.dataset.product || "produk Crumble & Co.";

      const price = productPrices[product] || "";

      const message =
        `Halo Crumble & Co., saya ingin memesan:\n\n` +
        `Produk: ${product}\n` +
        `Harga: ${price}\n\n` +
        `Mohon informasi ketersediaan dan cara pemesanan. Terima kasih.`;

      const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
  });

  // WHATSAPP CONTACT BUTTON
  const contactButtons = document.querySelector(".contact-buttons");

  if (contactButtons) {
    const whatsappButton = document.createElement("a");

    whatsappButton.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    whatsappButton.className = "btn btn-primary";
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
    whatsappButton.textContent = "Pesan via WhatsApp";

    contactButtons.appendChild(whatsappButton);
  }

  // TIKTOK
  const tiktokLink = document.getElementById("tiktok-link");

  if (tiktokLink) {
    tiktokLink.href = "https://www.tiktok.com/@crumbleco01";
    tiktokLink.target = "_blank";
    tiktokLink.rel = "noopener noreferrer";
  }

})();
