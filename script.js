window.addEventListener("load", function() {
  const loader = document.getElementById("loader-wrapper");
  const content = document.getElementById("content");
  setTimeout(function() {
    loader.style.display = "none";
    content.style.display = "block";
  }, 3500); // Change the duration as per your requirement
});
function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  }else{
    document.getElementById('menu').style.borderRadius = '10px';
  }
}
