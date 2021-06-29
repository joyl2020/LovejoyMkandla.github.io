$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/ navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 
    
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer","Data Scientist","Front End Developer","Back End Developer",
                    "Design Thinking Practitioner","FullStack Developer","IT Technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        });

    var typed = new Typed(".typing02", {
        strings: ["Software Developer","Data Scientist", "Front End Developer","Back End Developer",
                    "Design Thinking Practitioner","FullStack Developer","IT Technician"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
        });   
        
        //Trigger a file Download
        $("#download").click(function (e) {
            e.preventDefault();
            window.location.href="./cv/Lovejoy_Mkandla_CV.pdf";
        });     

});
        //submit the form

        $(document).ready(function () {
            $('#sendButton').on('click', submitTheForm());
        });
            
        // function submitTheForm() {
            // $('.myForm').submit();
          //  alert("Message Sent Successfully!!!")
          //  }

   
