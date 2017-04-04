$(function() {

	var toggles=$('.toggle a');
	var codes=$('.code');

	toggles.on('click',function(event){
		console.log("msg");
		event.preventDefault();
		var $this=$(this);

		if(!$this.hasClass('active')){
			toggles.removeClass('active');
			$this.addClass('active');
			codes.hide().filter(this.hash).show();
		}
	});

	toggles.first().click();
});
