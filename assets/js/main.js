const moon = document.querySelector('.fa-moon');
const sun = document.querySelector('.fa-sun');
const dbody = document.querySelector('.bdclas');
const menuBtn = document.querySelector('.hmenBtn');
const litemenu = document.querySelector('.litemen');
const linkfilts = document.querySelectorAll('.hrheadlf');
const linkSlide = document.querySelectorAll(".hrbgridc");


(function(){
    if(localStorage.getItem("theme") == "dark"){
        dbody.classList.add('backgDark')
        dbody.classList.remove('backgLight')
        moon.style.display = 'flex'
        sun.style.display = 'none'
    }
})();
(function(){
    if(localStorage.getItem("theme") == "light"){
         dbody.classList.add('backgLight')
         dbody.classList.remove('backgDark')
         moon.style.display = 'none'
         sun.style.display = 'flex'
    }
})();

sun.addEventListener('click', ()=>{
    localStorage.setItem("theme", "dark")
    dbody.classList.add('backgDark')
    dbody.classList.remove('backgLight')
    moon.style.display = 'flex'
    sun.style.display = 'none'
    
});
moon.addEventListener('click', ()=>{
    localStorage.setItem("theme", "light")
    dbody.classList.add('backgLight')
    dbody.classList.remove('backgDark')
    moon.style.display = 'none'
    sun.style.display = 'flex'
    
});

menuBtn.addEventListener('click', ()=>{
    litemenu.classList.toggle('slitemen')

    // if(litemenu.classList.contains('slitemen')){
    //     litemenu.classList.remove('slitemen')
    // }
})


window.addEventListener('scroll', () =>{
    litemenu.classList.remove('slitemen')
});


// Filters-for-Properties
linkfilts.forEach((linkfilt) => {
  linkfilt.addEventListener("click", (e) => {
    // alert("hi");
    e.preventDefault()
    const filter = e.target.getAttribute("data-filter");
    // console.log("filter");

    linkSlide.forEach((item) => {
      if (filter === "all") {
        item.style.display = "flex";
      } else {
        if (item.classList.contains(filter)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});
