let togMenu = document.querySelector(".fa-bars");
let mobileNav = document.querySelector(".nav-mobile");
let escBtn = document.querySelector(".nav-mobile .fa-xmark");
escBtn.style.cssText = "cursor: pointer;";

togMenu.onclick = () => {
    mobileNav.classList.add("active");
};

escBtn.onclick = () => {
    mobileNav.classList.remove("active");
};
//////////////////////////////////////////////////////
//search
let searchBtn = document.querySelector(".right .fa-magnifying-glass");
let searchDiv = document.querySelector(".container-input");
let searchEsc = document.querySelector(".container-input .fa-xmark");
searchBtn.onclick = () => {
    let overLay = document.createElement('div');
    overLay.className = 'overlay'
    document.body.appendChild(overLay)
    searchDiv.classList.add("active")
}

searchEsc.onclick = () => {
    searchDiv.classList.remove('active');
    let overLay = document.querySelector('.overlay');
    overLay.remove()
}
///////////////////////////////////////////////////////
function shop() {
    const pro = {
        myLocation: document.querySelector('.location .active'),
        mainImg: document.querySelector(".shop .main-img .swiper-slide-active img"),
        mImgs: Array.from(document.querySelectorAll(".shop .main-img img")),
        smallImgs: Array.from(document.querySelectorAll(".shop .imgs-holder img ")),
        smallImgActive: document.querySelector(".shop .imgs-holder img.active "),
        mainTitle: document.querySelector('.shop .img-title'),
        newPrice: document.querySelector('.shop .new-price'),
        sale: document.querySelector('.shop .sale'),
        colors: Array.from(document.querySelectorAll(".shop .color-list div")),
        sizes: Array.from(document.querySelectorAll(".shop .size-list li")),
        addCart: document.querySelector(".shop .add .button"),
        buyNow: document.querySelector(".shop .buy"),
        count: 1,
    }
    console.log(pro.mainImg)
    pro.smallImgs.forEach((imgs) => {
        imgs.addEventListener("click", function (ele) {
            pro.smallImgs.forEach((i) => {
                i.classList.remove('active');
            })
            ele.currentTarget.classList.add('active')
            let ds = imgs.getAttribute('src')
            clearAll()
            pro.colors[imgs.dataset.color - 1].classList.add('active')
            pro.mainImg.src = ds
            pro.addCart.classList.add(`${imgs.dataset.color}`)
            pro.mainTitle.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.name;
            pro.newPrice.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.salary;
            pro.sale.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.sale;
            pro.myLocation.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.name;
        })
    })
    /////////////////////
    pro.mImgs.forEach((img) => {
        img.addEventListener("pointermove", function ({target}) {
            removeAll()
            pro.smallImgs[target.dataset.num - 1].classList.add('active')
            pro.mainTitle.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.name;
            pro.newPrice.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.salary;
            pro.sale.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.sale;
            pro.myLocation.textContent = document.querySelector(".shop .imgs-holder img.active").dataset.name;
        })
    })
    ////////////////////
    function removeAll() {
        pro.smallImgs.forEach((ele => {
            ele.classList.remove('active')
        }))
    }
    ////////////////////
    function clearAll() {
        pro.colors.forEach((ele) => {
            ele.classList.remove('active')
        })
    }
    ///////////////////
    function activeSize() {
        pro.sizes.forEach((si) => {
            si.addEventListener("click", function (ele) {
                pro.sizes.forEach((s) => {
                    s.classList.remove('active')
                })
                ele.currentTarget.classList.add('active')
            })
        })
    }
    activeSize();
    ///////////////////
    let q = 1;
    function qun() {
        let negBtn = document.querySelector(".shop .neg");
        let posBtn = document.querySelector(".shop .pos");
        let allBtn = Array.from(document.querySelectorAll(".shop .count span")) 
        let qSpan = document.querySelector(".shop .qun"); 

        
        negBtn.onclick = negClick;
        posBtn.onclick = posClick;
    
    function posClick() {
        if (posBtn.classList.contains('dis')) {
            return false
        } else {
            q++;
            check();
        }
    }
    function negClick() {
        if (negBtn.classList.contains('dis')) {
            return false
        } else {
            q--;
            check();
        }
    }
    function check() {
        qSpan.textContent = `${q}`
        if (q === 0) {
            negBtn.classList.add("dis")
        } else {
            negBtn.classList.remove("dis")
        }
        // if (q === 10) {
        //     posBtn.classList.add('dis')
        // } else {
        //     posBtn.classList.remove("dis")
        // }
    }
    check()
    }
    qun()
    ///////////////////
    document.querySelector(".total").insertAdjacentHTML("beforeend", `<span></span>`)
    //////////////////
        
        
        
    function cartAdd() {
        let cart = document.querySelector(".navbar .fa-bag-shopping");
        let cartMenu = document.querySelector(".navbar .cart");
        let cartEsc = document.querySelector(".navbar .cart .fa-xmark");
        let cartBox = document.querySelector(".navbar .fa-bag-shopping + .cart-box");
        cart.onclick = () => {
            cartBox.classList.toggle("show")
        }
        cartEsc.onclick = () => {
            cartBox.classList.remove("show")
        }
        pro.addCart.onclick = () => {
            cartMenu.insertAdjacentHTML("beforeend",
                `<li>
                    <div class="quantity"><span>-</span><span>${document.querySelector(".shop .add .qun").textContent}</span><span>+</span></div>
                    <img src="${pro.mainImg.getAttribute('src')}">
                    <div class="title">
                        <span class="pru-name">${document.querySelector(".shop .imgs-holder img.active").dataset.name}</span>
                        <span class="cart-color">Color: ${document.querySelector('.shop .color-list .active').dataset.color}</span>
                        <span class="cart-size">Size: ${document.querySelector('.shop .size-list .active').dataset.size}</span>
                        <span class="price">${document.querySelector(".shop .imgs-holder img.active").dataset.salary}</span>
                    </div>
                    <i class="fa-regular fa-trash-can" style="cursor: pointer; z-index: 100;"></i>
                </li>`
            );
            Array.from(document.querySelectorAll('.fa-trash-can')).forEach((i) => {
                i.addEventListener('click', function (ele) {
                    ele.currentTarget.parentElement.remove();
                })
            });
            console.log(pro.mainImg.getAttribute('src'))
            console.log(pro.mainImg)

        }
        
    
    }
    cartAdd()
    
    ///////////////
    let shareBtn = document.querySelector(".shop .wishes #share");
    let linkClone = document.querySelector(".shop .share-box .link");
    console.log(linkClone)
    linkClone.insertAdjacentText("afterbegin",  window.location.href)
    shareBtn.onclick = () => {
        document.querySelector('.overlay-box').classList.add('show')
    }
    document.querySelector('.overlay-box .fa-xmark').onclick = () => {
        document.querySelector('.overlay-box').classList.remove('show')
    }
}
shop();



function newArr() {
    const wrapper = document.querySelector(".new-arr .container");
    const carousel = document.querySelector(".new-arr .carousel");
    const firstCardWidth = carousel.querySelector(".new-arr .card").offsetWidth;
    // const arrowBtns = document.querySelectorAll(".container i");
    const carouselChildrens = [...carousel.children];
  
    let isDragging = false,
      isAutoPlay = true,
      startX,
      startScrollLeft,
      timeoutId;
  
    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
  
    // Insert copies of the last few cards to beginning of carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });
  
    // Insert copies of the first few cards to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
  
    // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  
    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      // Records the initial cursor and scroll position of the carousel
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };
  
    const dragging = (e) => {
      if (!isDragging) return; // if isDragging is false return from here
      // Updates the scroll position of the carousel based on the cursor movement
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
  
    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };
  
    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
  
      // Clear existing timeout & start autoplay if mouse is not hovering over carousel
      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) autoPlay();
    };
  
    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 5000);
    };
    autoPlay();
  
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
  }
  newArr();