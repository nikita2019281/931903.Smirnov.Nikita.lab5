openwindow = id => {
	dialog = document.getElementById(id);
    dialog.showModal();
    dialog.addEventListener('click', (event) => {if (event.target == dialog) dialog.close();});
};