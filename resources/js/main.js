$(document).ready(function(){
    
    
    // Strickey Menu
   $("nav").sticky({topSpacing:0});
    
    // MIXITUP(Portfolio section)
    var mixer = mixitup(".row");
	
	//SMOOTH SCROLL FOR IE/SAFARI/EDGE

		$("a").on('click',function (event){
			
			if (this.hash !== ""){
				event.preventDefault();
				var hash = this.hash;
				$('html,body').animate({
					scrollTop: $(hash).offset().top
				}, 800,function(){
					window.location.hash = hash;
				});
			}
		});
});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}