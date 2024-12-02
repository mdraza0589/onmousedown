function imgchange(event){

    let selecteddiv = document.querySelector('#img');

    selecteddiv.style.backgroundImage = 'url(img.avif)';
    

    console.log(event);
}
function downimg(){
    let downimg = document.querySelector("#img")
     downimg.style.backgroundImage = 'url(newphoto.jpg)'
}
