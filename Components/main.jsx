import videojs from "video.js";
import $ from "jquery";

export function Video() {
  var reproductor = videojs("fm-video", {
    fluid: false,
  });
  var whereYouAt = 0;
  var boton = document.getElementsByClassName("gg-play-button");
  $("#overlay").on("click", function (e) {
    e.preventDefault(); // prevent reload
    e.stopImmediatePropagation();
    console.log("entro");
    console.log(reproductor);
    if (reproductor.paused() == true) {
      reproductor.play();
      if (whereYouAt <= 180) {
        reproductor.currentTime(whereYouAt);
      } else {
        reproductor.currentTime(0);
      }
      $(".gg-play-button").hide();
    } else {
      whereYouAt = reproductor.currentTime();
      reproductor.load();
      reproductor.pause();
      $(".gg-play-button").show();
    }
  });
}
export function Modal() {
  const openModal = document.querySelector('.img-fenix');
  const Modal = document.querySelector('.modal1');
  const openModal2 = document.querySelector('.img-mafe');
  const Modal2 = document.querySelector('.modal2');
  const openpay = document.querySelector('#buy');
  const Modal3 = document.querySelector('.payment');
  const Modal4 = document.querySelector('.compra');
  const closeModal = document.querySelector('.modal_boton');
  const closeModal2 = document.querySelector('.modal_boton2');
  const closeModal3 = document.querySelector('.modal_boton3');
  const closeModal4 = document.querySelector('.modal_boton4');
  openModal.addEventListener('click', (e)=>{
    e.preventDefault(); // prevent reload
    e.stopImmediatePropagation();
    Modal.classList.add("modal1-show");
  })
  openModal2.addEventListener('click', (e)=>{
    e.preventDefault(); // prevent reload
    e.stopImmediatePropagation();
    Modal2.classList.add("modal2-show");
  })

  closeModal.addEventListener('click', (e)=>{
    Modal2.classList.remove("modal2-show");


  })
  closeModal2.addEventListener('click', (e)=>{
    Modal.classList.remove("modal1-show");
  })
    $(".buy").on('click', (e)=>{
      e.preventDefault(); // prevent reload
      e.stopImmediatePropagation();
      Modal3.classList.add("payment-show");
  
    })
    closeModal3.addEventListener('click', (e)=>{
      Modal3.classList.remove("payment-show");
    })
    $("#tarjeta").on('click', (e)=>{
      e.preventDefault(); // prevent reload
      e.stopImmediatePropagation();
      Modal4.classList.add("compra-show");
  
    })
    closeModal4.addEventListener('click', (e)=>{
      Modal4.classList.remove("compra-show");
    })
    
}
