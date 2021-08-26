		$(function(){
			$("#menu-toggle").click(function(e) {
				e.preventDefault();

				var className = $('#menu-toggle').attr('class');

				if (className == 'navbar-toggler active') {
					$("#menu-toggle").removeClass("active");
				}else{
					$("#menu-toggle").addClass("active");
				}

				$("#wrapper").toggleClass("toggled");
				// $("#menu-toggle").addClass("active");
			});

			$("#menu-toggle-nav").click(function(e) {
				
				var className = $('#menu-toggle-nav').attr('class');
				
				// console.log(className);

				if (className == 'nav-link nav-btn active') {
					$("#menu-toggle-nav").removeClass("active");
				}else{
					$("#menu-toggle-nav").addClass("active");
				}
				// 
				e.preventDefault();
				$("#wrapper").toggleClass("toggled");
			});

			$(function() {
				if($(window).width()<=768){
					$("#wrapper").removeClass("toggled");
					$("#menu-toggle").removeClass("active");
					$("#menu-toggle-nav").removeClass("active");
				}else{
					$("#wrapper").addClass("toggled");
					$("#menu-toggle").addClass("active");
					$("#menu-toggle-nav").addClass("active");
				}				
			});



			$(window).resize(function(e) {
				if($(window).width()<=768){
					$("#wrapper").removeClass("toggled");
					$("#menu-toggle").removeClass("active");
					$("#menu-toggle-nav").removeClass("active");
				}else{
					$("#wrapper").addClass("toggled");
					$("#menu-toggle").addClass("active");
					$("#menu-toggle-nav").addClass("active");
				}
			});




			$("#navbar-toggler-collapse").click(function(e) {
				
				var className = $('#navbar-toggler-collapse').attr('class');
				
				// console.log(className);

				if (className == 'navbar-toggler active') {
					$("#navbar-toggler-collapse").removeClass("active");				
					
				}else{
					$("#navbar-toggler-collapse").addClass("active");
				}
				
			});



			// nav-link nav-btn

			// $(window).resize(function(e) {
			// 	if($(window).width()<=768){
			// 	$("#wrapper").removeClass("toggled");
			// 	}else{
			// 	$("#wrapper").addClass("toggled");
			// 	}
			// });


		});	
		