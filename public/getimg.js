
let imgArray;

const getImages = () =>{

    var xhttp = new XMLHttpRequest();
    var keygen16 = document.querySelector("#keygen16").innerHTML;
    console.log(keygen16)
    console.log(typeof(keygen16))
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            document.querySelector("#loading").style.display="none";
            document.querySelector('#keygenimg').innerHTML = ''
            console.log(this.responseText)
            imgArray = JSON.parse(this.responseText)
            if(imgArray.images.length > 0){
                imgArray.images.split(',').forEach( function (source) {
                    var image = document.createElement('img')
                    image.src = source;
                    image.style.width = "15vw";
                    image.style.height ="15vw";
                    image.style.padding="3vw";
                    document.querySelector('#keygenimg').appendChild(image)
                })
            }
        }
    };
    console.log(keygen16)
    console.log(typeof(keygen16))
    xhttp.open('GET','/scraper/' + keygen16,true);
    xhttp.send();
}

getImages();