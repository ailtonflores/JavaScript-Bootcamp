document.body.onload = adcElemento;



function myFunction() {
    var para = document.createElement("P");
    para.innerHTML = "This is a paragraph.";
    document.getElementById("myDIV").appendChild(para);
  }
