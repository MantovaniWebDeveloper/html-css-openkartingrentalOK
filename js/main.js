/***PER REALIZZARE UN HAMBURGER MENU IN JQUERY ***/
//salvo in variabile il pulsante e il menù responsive
var button = $('#btnMR');
var menu = $('#menu');
console.log(button);

var aperto = false;
button.click(function(){
  if (aperto == false) {
    menu.show();
    aperto = true;
  }
  else {
    menu.hide();
    aperto = false;
  }
});
/*****************************************/
