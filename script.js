function imgchange(event){

    let selecteddiv = document.querySelector('#img');

    selecteddiv.style.backgroundImage = 'url(second_img.avif)';
    

    console.log(event);
}
function downimg(){
    let downimg = document.querySelector("#img")
     downimg.style.backgroundImage = 'url(third_img.jpg)'
}
