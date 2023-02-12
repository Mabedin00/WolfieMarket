window.addEventListener('load', (event) => {
    const checkbox = document.getElementById('textbooks');
    checkbox.addEventListener('change', (event) => {
        var items = document.getElementsByClassName('item');
        if (event.currentTarget.checked) {
            for (let i = 0; i < items.length; i++) {
                if (!items[i].classList.contains('textbook')) {
                    items[i].style.display = 'none';
                }
            }
        }
        else {
            for (let i = 0; i < items.length; i++) {
                if (!items[i].classList.contains('textbook')) {
                    items[i].style.display = '';
                }
            }
        }
    });
});
