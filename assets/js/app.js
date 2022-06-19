// slider

var swiper = new Swiper(".laptopSwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});


var swiper = new Swiper(".testiminoalsSwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    
  });

var swiper = new Swiper(".teamSwiper", {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
   
      },
});


var swiper = new Swiper(".sponsorShipSwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
   
      },
});


// form sender

let formSenderButton = document.getElementById('formSenderButton');
formSenderButton.addEventListener("click", function () {
    formSenderButton.disabled = true;
    let form = document.getElementsByTagName('form');
    nameInput = form[0]['name'].value;
    phoneInput = form[0]['phone'].value;
    emailInput = form[0]['email'].value;

    // console.log(nameInput)


    if (nameInput.length > 0 && phoneInput.length > 0 && emailInput.length > 0) {


        axios.post('mail/mail-sender.php', {
            name: nameInput,
            phone: phoneInput,
            email: emailInput
        }).then(function (response) {
            console.log(response);

            if (response.data == "success") {
                Swal.fire({icon: 'success', title: 'Basarılı!', text: 'Mailiniz Gönderildi!'})

                form[0]['name'].value = '';
                form[0]['phone'].value = '';
                form[0]['email'].value = '';

            } else if (response.data == "error") {
                Swal.fire({icon: 'error', title: 'Hata!', text: 'Mailiniz Gönderilemedi. Tekrar Deneyin!'})

            }
            formSenderButton.disabled = false;

        }).catch(function (error) {
            Swal.fire({icon: 'error', title: 'Hata!', text: 'Mailiniz Gönderilemedi. Tekrar Deneyin!'})
            formSenderButton.disabled = false;
        });

    } else {
        Swal.fire({icon: 'error', title: 'Eksik Bilgi!', text: 'Lütfen Tüm Alanları Doldurun!'})
        formSenderButton.disabled = false;
    }


});


// smooth name scroller

function scrolling(el){
    const element = document.querySelector(el)
    const topPos = element.getBoundingClientRect().top + window.pageYOffset
    
    window.scrollTo({
      top: topPos, // scroll so that the element is at the top of the view
      behavior: 'smooth' // smooth scroll
    })
}
