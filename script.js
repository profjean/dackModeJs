function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 function funcSome() {
    var x = document.getElementById("some");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  setTimeout(esconder, 5000);

  function esconder(){
    document.getElementById("alerta").style.display = "none";
  }