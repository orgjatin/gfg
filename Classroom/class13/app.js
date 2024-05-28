

// function image(){
//     let imgTag = document.querySelector("#img");
//     imgTag.setAttribute('src','https://images.unsplash.com/photo-1715292779491-a32d1f086f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'); 

// }
// function image2(){
//     let imgTag = document.querySelector("#img");
//     imgTag.setAttribute('src','https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'); 

// }

// setInterval(image,1000);
// setInterval(image2,2000);

let isTrue = true;
let imgTag = document.querySelector("#img");

function image(){

    if(isTrue){
        imgTag.setAttribute('src','https://images.unsplash.com/photo-1715292779491-a32d1f086f5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'); 
    }
    else{
        imgTag.setAttribute('src','https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8');
    }

    isTrue = !isTrue;

    
    }

    setInterval(image,1000);