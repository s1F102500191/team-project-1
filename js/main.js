document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById('cover');
  const buttons = document.querySelectorAll('.region-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      cover.classList.add('active');

      // ページ遷移をアニメーション後に遅延（600ms）
      setTimeout(() => {
        window.location.href = href;
      }, 700); // transitionより少し長めに
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover");

  if (cover && cover.classList.contains("active")) {
    cover.classList.remove("active");
    cover.style.display = "none";
  }
});
