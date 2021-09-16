(function () {
  // (=============MY VARIABLES==============)
  // =========NAVBAR IN SMALL ,, MOBILE WINDOW VARIABLE==============
  let sideIcon = document.querySelector('.sidIcons');
  let insideIcon = document.querySelector('.sidIcons i');
  // ==================SLIDER HEADER VARIABLES================
  let sliderSubtitle = Array.from(document.querySelectorAll('.subtitle .title'));
  let title = document.querySelector('.title');
  let currentTitle = 0;
  let prevTitle = document.getElementById('prevTitle');
  let nextTitle = document.getElementById('nextTitle');
  let myBullets = Array.from(document.querySelectorAll('#bullets span'));
  // ============GALLERY IMAGE CONTAINER AND BOX VARIABLES=============
  let galleryImgs = Array.from(document.querySelectorAll('.gallery .img img'));
  let imgContainer = document.querySelector('#images_container');
  let imgBox = document.querySelector('#img_box');
  let currentImg = 0;
  // IMAGES BOX ICONS 
  let nextBtn = document.getElementById('next');
  let prevBtn = document.getElementById('prev');

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
  //===================================================================================
  // ==================START SLIDER HEADER VARIABLES===================

  // Handle Click On Prev And Next Button
  prevTitle.onclick = thePrevTitle;
  nextTitle.onclick = theNextTitle;

  // Function To Add Class Active To Title
  function checker() {
    removeActiveFromAll();
    sliderSubtitle[currentTitle].classList.add('active');
    myBullets[currentTitle].classList.add('active');
  }
  checker();

  // Function To Remove Class Active From Another Titles
  function removeActiveFromAll() {
    sliderSubtitle.forEach((title) => {
      title.classList.remove('active')
    })

    myBullets.forEach((bl) => {
      bl.classList.remove('active');
    })
  }

  // The Next Title Function
  function theNextTitle() {
    currentTitle++;
    if (currentTitle == sliderSubtitle.length) {
      currentTitle = 0
    }
    checker();
  }

  // The Prev Title Function
  function thePrevTitle() {
    currentTitle--;
    if (currentTitle < 0) {
      currentTitle = sliderSubtitle.length - 1
    }
    checker();
  }

  // LOOP THROUGH THE BULLETS
  for (var i = 0; i < myBullets.length; i++) {
    myBullets[i].addEventListener('click', function () {
      currentTitle = parseInt(this.getAttribute('data-index'))
      checker();
    })
  }
  // ======END SLIDER HEADER VARIABLES======
  // ====================================================================================================
  // =================START NAVBAR IN SMALL ,, MOBILE WINDOW=====================

  sideIcon.onclick = sideBar;
  function sideBar() {
    if (insideIcon.classList.contains('fa-align-right')) {
      insideIcon.classList.replace('fa-align-right', 'fa-times');
      document.querySelector('.sideBar').classList.add('sideOpen');
      document.querySelector('.sideBar').style.display = 'block';
    }
    else if (insideIcon.classList.contains('fa-times')) {
      insideIcon.classList.replace('fa-times', 'fa-align-right');
      document.querySelector('.sideBar').classList.remove('sideOpen');
      document.querySelector('.sideBar').style.display = 'none';
    }
  }
  // =================END NAVBAR IN SMALL ,, MOBILE WINDOW=====================

  let toTopIcon = document.querySelector('.to_top');
  let headerHeight = document.querySelector('header').offsetHeight;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= headerHeight) {
      toTopIcon.style.display = 'flex'
    }
    else {
      toTopIcon.style.display = 'none'
    }
  })
  toTopIcon.addEventListener('click', function () {
    window.scrollTo(0, 0);
  })

  // =====FOR AOS PLUGIN======
  AOS.init();

})();