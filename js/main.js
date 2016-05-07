$(window).load(function(){
	$("#landing-img")
			.mouseover(function(){
				$(this)
				.velocity({ width: '+=10%'})
			})
			.mouseout(function(){
				$(this)
				.velocity({ width: '100px'})
			})

		// current page menu item set to active
	    $(".nav li").on("click", function() {
	      $(".nav li").removeClass("active");
	      $(this).addClass("active");
	    });

	    // Scroll product list
	    $("#a2").velocity("scroll", { axis:'x', container: $(".product-list"), delay: 2000, duration: 5000 });
	    $("#b2").velocity("scroll", { axis:'x', container: $(".product-list"), delay: 2000, duration: 5000 });
});
