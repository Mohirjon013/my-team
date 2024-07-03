let elHamburgerBtn = document.querySelector(".header__hamburger-link")
let elOuterModal = document.querySelector(".model-outer")
let elInnerModal = document.querySelector(".model-inner")
let elCloseBtn = document.querySelector(".model__close-btn")



elHamburgerBtn.addEventListener("click", function(){
    elOuterModal.classList.add("show-outer")
    elInnerModal.classList.add("show-outer")
    document.body.classList.add(".hidden-scroll")
})

elCloseBtn.addEventListener("click", function(){
    elOuterModal.classList.remove("show-outer")
    elInnerModal.classList.remove("show-outer")
    document.body.classList.remove(".hidden-scroll")
})

elOuterModal.addEventListener("click", function(evt){
    if(evt.target.id == "model-outer"){
        elOuterModal.classList.remove("show-outer")
        elInnerModal.classList.remove("show-outer")
        document.body.classList.remove(".hidden-scroll")
    }
    
})
