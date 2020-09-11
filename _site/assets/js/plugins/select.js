function selector() {
  var target = document.getElementById("input").value;
  var sliders = document.getElementsByClassName("cocoen");
  for(var i=0; i<sliders.length; i++) {
            if (document.getElementById(target).id == sliders[i].id) {
                sliders[i].style.display = "block";
            }
            else {
                sliders[i].style.display = "none";
            }
       }
}
