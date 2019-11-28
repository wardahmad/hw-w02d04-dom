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


document.body.style.fontFamily = "Arial, sans-serif";

document.getElementById("nickname").innerHTML = "Ward";
document.getElementById("favorite").innerHTML = "Canary";
document.getElementById("hometown").innerHTML = "Makkah";



document.querySelector("li").classList.add("listitem");

document.querySelector("li").style.color = "rebeccapurple";

var img = document.createElement("IMG");
img.setAttribute("src","https://images2.minutemediacdn.com/image/upload/c_crop,h_1190,w_2121,x_0,y_134/f_auto,q_auto,w_1100/v1559847832/shape/mentalfloss/24107-istock-1040334020.jpg");
img.setAttribute("width", "304");
img.setAttribute("height", "228");
document.body.appendChild(img);

var node = document.createElement("H1");
var textnode = document.createTextNode("My Book List");
node.appendChild(textnode);
document.querySelector("div.favoriteBooks").appendChild(node);

for (const i in books){
    books.title[i] + ", by " + books.author[i]
}