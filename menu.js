$(document).ready(function (){

    $(".menu-btn").click(()=>{
        $(".nav-links").css('transform','translateX(0)')
        $(".menu-btn").css('display','none')
        $(".cross-btn").css('display','block')
        $(".menu-btn-box").css('backgroundColor','#39DB4A ')


    })

    $(".cross-btn").click( ()=>{
        $(".nav-links").css('transform','translateX(-120%)')
        $(".menu-btn").css('display','block')
        $(".cross-btn").css('display','none')
        $(".menu-btn-box").css('backgroundColor','transparent')

    })

   
  
});
