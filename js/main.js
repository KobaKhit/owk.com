$(window).load(function(){
	$("#landing-img")
			.mouseover(function(){
				$(this)
				.velocity({ width: '+=1%'})
			})
			.mouseout(function(){
				$(this)
				.velocity({ width: '100px'})
			})

	    $(".nav li").on("click", function() {
	      $(".nav li").removeClass("active");
	      $(this).addClass("active");
	    });
});