var filter = '';

window.addEventListener('load', (event) => {
    const checkboxes = document.getElementsByClassName('form-check-input');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                filter += '.' + event.currentTarget.id
                var items = document.querySelectorAll('.item:not(' + filter + ')');
                for (let i = 0; i < items.length; i++) {
                    items[i].style.display = 'none';
                }
            }
            else {
                filter = filter.replace('.' + event.currentTarget.id, '');
                var items = filter === '' ? document.querySelectorAll('.item') : document.querySelectorAll(filter);
                for (let i = 0; i < items.length; i++) {
                    items[i].style.display = '';
                }
            }
        });
    }
});
