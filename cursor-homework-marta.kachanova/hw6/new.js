

//const header = document.querySelector("header");
//const testBTN = document.querySelector('#testBTN');

//window.addEventListener("scroll", function(){
 // let scrollPos = this.window.scrollY;
  
//if(scrollPos > 0) {
    //header.classList.add('black');
//} else{
  // header.classList.remove('black');
//}
//})

 //testBTN.addEventListener("click", function(){
   //  console.log('clicked');
 //})

 //заголовок рамка чорна
 $('h2').css('border', 'solid 3px blac k');

 //ти клікнув по заголовку
 $('h2').click(function(){
     alert('ти натиснув заголовок')
 });

 //анімація
$('a').delay(1000).hide(1000).show(1000);
