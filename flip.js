['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix){
	document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
	document.body.style[prefix + 'transform'] = 'rotate(180deg)';
});
lo7NAB();
