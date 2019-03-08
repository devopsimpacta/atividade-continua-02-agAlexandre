var elem = document.getElementById("progbar");   
var width = 1
var timer = setInterval(function() {
   if (width >= 100) {
      clearInterval(timer);
   } else {
      width++; 
      elem.innerHTML = width+ '%'
      elem.style.width = width + '%';
   }
}, 20);
#progress {
  width: 100%;
  background-color: #ddd;
}

#progbar {
  text-align: center;
  color: #000000:
  height: 30px;
  width: 0px;
  background-color: #4CAF50;
}
<div id="progress">
  <div id="progbar">0%</div>
</div>