$(function() {
	$("#mobile-menu-id").click(() => {
		
		if($("#mobile-menu-container").hasClass("mobile-menu-show"))
		{
			$("#mobile-menu-container").removeClass("mobile-menu-show");
		}
		else
		{
			$("#mobile-menu-container").addClass("mobile-menu-show");
		}
	});
});
	