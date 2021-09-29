const pagetop = document.getElementById('pageTop');
pagetop.addEventListener('click',() =>{
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
});