     function add(){

	var comments = document.getElementById('comment').value;
	document.getElementById('comment').value = "";
    var cont = document.getElementById('cont');

	// creo div contenedor//
	var newComments = document.createElement('div');

	//validación escritura//
	if(comments.length == 0 || comments == null) {
		alert('Si twittear quieres, escribir debes!');
		return false;
	}
		
	//nuevos text nodes//
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);
	newComments.appendChild(contenedorElemento);
	cont.appendChild(newComments);

}
/*
function disable(){
	 document.getElementById("tweetbtn").disabled = true;

}

tweetbtn.addEventListener('click', function(){
	tweetbtn.classList.toggle('rojo');
})*/

(function(){
  var msg = document.getElementsByClassName("txt")[0],
      charLeftLabel = "char-left",
      charLeft = document.getElementsByClassName(charLeftLabel)[0],
      maxChar = 140,
      maxCharWarn = 20;
  
  	  // muestra caracteres que faltan
  	  charLeft.innerHTML = maxChar;

  	  // baja mientras se escribe
  	  msg.onkeydown = function(){
      setTimeout(function(){
      charLeft.innerHTML = maxChar - msg.value.length;

       // whether or not to display warning class based on characters left
       var warnLabel = msg.value.length >= maxChar - maxCharWarn ? " warning" : "";
          charLeft.className = charLeftLabel + warnLabel;
        }, 1); 
      };
})();

