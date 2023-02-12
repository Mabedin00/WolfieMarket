var checked = 0;

window.addEventListener('load', (event) => {
    const checkboxes = document.getElementsByClassName('form-check-input');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                // filter += '.' + event.currentTarget.id
                // var items = document.querySelectorAll('.item:not(' + filter + ')');
                // for (let i = 0; i < items.length; i++) {
                //     items[i].style.display = 'none';
                // }    
                if (checked === 0) {
                    var items = document.querySelectorAll('.item:not(.' + event.currentTarget.id + ')');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = 'none';
                    }
                }
                else {
                    var items = document.querySelectorAll('.' + event.currentTarget.id);
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = '';
                    }
                }
                checked += 1;
            }
            else {
                // filter = filter.replace('.' + event.currentTarget.id, '');
                // var items = filter === '' ? document.querySelectorAll('.item') : document.querySelectorAll(filter);
                // for (let i = 0; i < items.length; i++) {
                //     items[i].style.display = '';
                // }
                if (checked === 1) {
                    var items = document.querySelectorAll('.item');
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = '';
                    }
                }
                else {
                    var items = document.querySelectorAll('.' + event.currentTarget.id);
                    for (let i = 0; i < items.length; i++) {
                        items[i].style.display = 'none';
                    }
                }
                checked -= 1;
            }
        });
    }
});
