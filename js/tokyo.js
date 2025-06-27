document.addEventListener("DOMContentLoaded", () => {
  

  // iframeの読み込み監視（loading状態の表示）
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    // iframeの親要素にローディング表示を入れる
    const parent = iframe.parentElement;
    const loadingText = document.createElement("div");
    loadingText.textContent = "読み込み中...";
    loadingText.style.textAlign = "center";
    loadingText.style.padding = "10px";
    loadingText.style.color = "#666";
    loadingText.style.fontStyle = "italic";
    loadingText.classList.add("iframe-loading-text");

    parent.insertBefore(loadingText, iframe);

    iframe.style.visibility = "hidden";

    iframe.addEventListener("load", () => {
      loadingText.style.display = "none";
      iframe.style.visibility = "visible";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("page-cover");

  // 少し遅延してから外す（自然に見せるため）
  setTimeout(() => {
    cover.classList.add("hide");
  }, 100); // 100〜200msくらいが自然
});
