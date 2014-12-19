var widget = document.getElementById('widget');
var leftMenu = document.createElement('ul');
leftMenu.setAttribute("class", "left-menu");

function addItem(content, tag){
  var item = document.createElement('li');
  var anchor = document.createElement('a');
  if(tag) {
    anchor.setAttribute("class", tag);
  }
  anchor.innerHTML += content;
  item.appendChild(anchor);
  leftMenu.appendChild(item);

/* Left For Debugging Purposes
  console.log(content);
  console.log(item);
  console.log(anchor);
  console.log(leftMenu);*/
}

var elements = ["title", "description", "link"];

for (element in elements) {
  addItem(elements[element], elements[element]);
}

widget.appendChild(leftMenu);
console.log(widget);