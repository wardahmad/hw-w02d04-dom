
function myImg(width,height){
    if (width || height !== null){
        var wid = document.querySelector(".width").value;
        var hei = document.querySelector(".height").value;

        console.log(wid);

        var img = document.getElementById("image1");
        var result = img.setAttribute("src","https://source.unsplash.com/collection/190727/"+ wid+"x"+hei);
    }else {
        var img = document.getElementById("image1");
        var result = img.setAttribute("src","https://source.unsplash.com/collection/190727/1600x900");
    }
}

