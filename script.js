window.addEventListener("load", function() {
  const loader = document.getElementById("loader-wrapper");
  const content = document.getElementById("content");
  setTimeout(function() {
    loader.style.display = "none";
    content.style.display = "block";
  }, 3500); // Change the duration as per your requirement
});
