var widget = document.getElementById('widget');

/*Should probably be replaced with the thing that queries the API or whatever*/
var elements;

/*Add an item to the Supreme List of Everything, also known as the widget*/
function addItem(list, content, tag, clicker){
  var item = document.createElement('li');
  var anchor = document.createElement('a');
  
  if(tag) {
    anchor.setAttribute("class", tag);
  }

  anchor.innerHTML += content;

  if (clicker){
    var clicker = document.createElement('span');
    clicker.setAttribute("class", "klikding");
    clicker.innerHTML = ">>";
    anchor.appendChild(clicker);
  }

  item.appendChild(anchor);
  list.appendChild(item);
}

/*Makes a new list*/
function addList(place, items, tag) {
  var list = document.createElement('ul');

  if (tag) {
    list.setAttribute("class", tag);
  }

  for (item in items) {
    addItem(list, item[0], item[1], item[2]);
  }

  place.appendChild(list);
}

/*Adds a script to the widget*/
function addScript(file) {
  script = document.createElement('script');
  script.setAttribute("src", file);
  widget.appendChild(script);
}

/*Adds style to the widget*/
function addStyle(file) {
  style = document.createElement('link');
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", file);
  widget.appendChild(style);
}

addList(widget, leftMenu, leftMenu);
console.log(widget);
