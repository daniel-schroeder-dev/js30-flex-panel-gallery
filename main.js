const panels = document.querySelector('.panels');

panels.addEventListener('click', e => {
	panels.querySelectorAll('.panel').forEach(panel => {
		if (panel.style.flexGrow !== '1') {
			panel.style.flexGrow = '1';
			panel.firstElementChild.style.transform = 'translateY(-500px)';
			panel.firstElementChild.nextElementSibling.style.transform = 'scale(1)';
			panel.lastElementChild.style.transform = 'translateY(500px)';		
		}
	});
	const panel = e.target.tagName === 'P' ? e.target.parentElement : e.target;
	panel.style.flexGrow = '4';
	panel.firstElementChild.style.transform = 'translateY(-50px)';
	panel.firstElementChild.nextElementSibling.style.transform = 'scale(1.5)';
	panel.lastElementChild.style.transform = 'translateY(50px)';
});
