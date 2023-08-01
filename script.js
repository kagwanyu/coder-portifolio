// window.addEventListener("scroll",function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0)
// })

// console.log('hi')
document.addEventListener('scroll', () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      console.log('Scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });