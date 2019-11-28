var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];

function myfun(){
  var list = document.querySelectorAll("li");
  document.body.style.fontFamily = "Arial, sans-serif";
  var listArr = ["Nickname: ward","Favorite Animal: Canary","Hometown: Makkah"];
  var node = document.createElement("H1");
  var textnode = document.createTextNode("My Book List");
  node.appendChild(textnode);
  document.querySelector(".favoriteBooks").appendChild(node);


  for (var i=0; i<list.length; i++){
    for (var j=0; j<listArr.length; j++){
      list[i].style.color = "rebeccapurple";
      list[i].innerHTML=listArr[i];
    } 
    list[i].classList.add("listitem"); 
  }

  for (var m=0; m<books.length; m++){
    var node = document.createElement("P");
    var pNode = document.createTextNode(books[m].title + ", by " + books[m].author);
    node.appendChild(pNode);
    document.querySelector(".favoriteBooks").appendChild(node);
  }

  var img = document.createElement("IMG");
  img.setAttribute("src","https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2121,x_0,y_134/f_auto,q_auto,w_1100/v1559847832/shape/mentalfloss/24107-istock-1040334020.jpg");
  img.setAttribute("width", "500");
  img.setAttribute("height", "300");
  var picNode = document.querySelector(".profilePicture");
  picNode.appendChild(img);
   
}
