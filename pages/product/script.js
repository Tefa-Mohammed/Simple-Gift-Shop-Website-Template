(function () {
  // (=============MY VARIABLES==============)
  // =========NAVBAR IN SMALL ,, MOBILE WINDOW VARIABLE==============
  let mySideBar = document.querySelector('.sideBar');
  let sideIcon = document.querySelector('.sidIcons');
  let insideIcon = document.querySelector('.sidIcons i');
  // ============GALLERY IMAGE CONTAINER AND BOX VARIABLES=============
  let galleryImgs = Array.from(document.querySelectorAll('.gallery .img img'));
  let imgContainer = document.querySelector('#images_container');
  let imgBox = document.querySelector('#img_box');
  let currentImg = 0;
  // IMAGES BOX ICONS 
  let nextBtn = document.getElementById('next');
  let prevBtn = document.getElementById('prev');
  // ========DESCRIPTION TABS LIST VARIABLES============
  let myListButtons = document.querySelectorAll('.tabs li button');
  let myListButtonsArray = Array.from(myListButtons);
  let myContentList = document.querySelectorAll('.content_list > div');
  let myContentListArray = Array.from(myContentList);

  // ======================START PRELOADER PAGE WITH JQUERY================= 
  window.onload = function () {
    $('.loader').fadeOut(1000, function () {
      $('body').css('overflow', 'auto')
    });
  };
  // ==============END PRELOADER PAGE================ 
  //===================================================================================================
  // ================START GALLERY IMAGE CONTAINER AND BOX===================
  galleryImgs.forEach((img) => {
    img.addEventListener('click', function (event) {
      currentImg = galleryImgs.indexOf(event.target);
      let imgSrc = event.target.parentElement.firstElementChild.getAttribute("src");
      imgBox.style.backgroundImage = `url(${imgSrc})`
      $('#images_container').fadeIn(500);
      imgContainer.style.display = "flex";
    })
  })

  // NEXT IMAGE FUNCTION
  function nextImage() {
    currentImg++;
    if (currentImg == galleryImgs.length) {
      currentImg = 0
    }
    let imgSrc = galleryImgs[currentImg].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
  }
  nextBtn.onclick = nextImage

  // PREV IMAGE FUNCTION
  function prevImage() {
    currentImg--;

    if (currentImg < 0) {
      currentImg = galleryImgs.length - 1
    }
    let imgSrc = galleryImgs[currentImg].getAttribute("src");
    imgBox.style.backgroundImage = `url(${imgSrc})`;
  }
  prevBtn.onclick = prevImage

  // NEXT AND PREV FROM KEYBOARD
  document.addEventListener("keydown", function (event) {
    if (event.code == "ArrowRight") {
      nextImage();
    } else if (event.code == "ArrowLeft") {
      prevImage();
    }
  })

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == images_container) {
      $('#images_container').fadeOut(500);
    }
  }
  // ==================END GALLERY IMAGE CONTAINER AND BOX=====================
  // ====================================================================================================
  // =================START NAVBAR IN SMALL ,, MOBILE WINDOW=====================

  sideIcon.onclick = sideBar;
  function sideBar() {
    if (insideIcon.classList.contains('fa-align-right')) {
      insideIcon.classList.replace('fa-align-right', 'fa-times');
      insideIcon.style.color = 'white';
      mySideBar.classList.add('sideOpen');
    }
    else if (insideIcon.classList.contains('fa-times')) {
      insideIcon.classList.replace('fa-times', 'fa-align-right');
      insideIcon.style.color = 'black';
      mySideBar.classList.remove('sideOpen');
    }
  }
  // =================END NAVBAR IN SMALL ,, MOBILE WINDOW=====================

  // ========START DESCRIPTION TABS============
  myListButtonsArray.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      // ADD && REMOVE CLASS ACTIVE TO BUTTONS 
      myListButtonsArray.forEach((btn) => {
        btn.classList.remove('active')
      });
      e.target.classList.add('active');

      // HIDE && SHOW CONTENTS LIST 
      myContentListArray.forEach((div) => {
        div.style.display = 'none';
      })
      document.querySelector(e.target.dataset.content).style.display = 'block';
    })
  })
  // ========END DESCRIPTION TABS============

  let ratingStars = document.querySelectorAll('.rating .star');
  let arrayRatingStars = Array.from(ratingStars);

  arrayRatingStars.forEach((star) => {
    star.addEventListener('mousemove', function () {
      star.previousElementSibling.children[0].style.color = '#ffa80a';
      // console.log(star.previousElementSibling.children);
    })
    star.addEventListener('mouseout', function () {
      star.previousElementSibling.children[0].style.color = '#212529';
    })
  })

  // =====FOR AOS PLUGIN======
  AOS.init();
})();