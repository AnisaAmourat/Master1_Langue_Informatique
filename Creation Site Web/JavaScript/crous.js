function changeImage() {
    var image = document.getElementById('Image');
    if (image.src.match("image_crous.jpeg")) {
        image.src = "../images/self_crous.png";
    } else if (image.src.match("self_crous.png")) {
        image.src = "../images/plat_crous.png";
    } else if (image.src.match("plat_crous.png")) {
        image.src = "../images/restaurant_crous.png";   
    } else {
        image.src = "../images/image_crous.jpeg";
    }
}
