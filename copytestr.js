$( function() {
	$('<style>').text(
		'.liveedit {color:#999 !important;'
		+'background:#FFF;padding:5px;'
		+'box-shadow:1px 1px 2px rgba(0,0,0,0.5);'
		+'border-radius:5px;').appendTo('head');

	$('<style>').text(
	'.editable {transition: all 0.3s ease;'
	+'-webkit-transition: all 0.3s ease;'
	+'-moz-transition: all 0.3s ease;}').appendTo('head');
	
	$('h1,h2,h3,h4,p').each( function() {
		$(this).attr('contentEditable','true');
		$(this).addClass('editable');
	});

	$('.editable').on('focus', function() {
		$(this).addClass('liveedit');
	});

	$('.editable').on('blur', function() {
		$(this).removeClass('liveedit');
	});
});