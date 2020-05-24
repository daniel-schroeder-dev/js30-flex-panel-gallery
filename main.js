const panels = document.querySelector('.panels');

panels.addEventListener('click', e => {
	panels.querySelectorAll('.panel').forEach(panel => {
		if (panel.classList.contains('active')) panel.classList.remove('active');
	});
	const panel = e.target.tagName === 'P' ? e.target.parentElement : e.target;
	panel.classList.add('active');
});
