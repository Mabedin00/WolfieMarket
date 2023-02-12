var checked = 0;

window.addEventListener('load', (event) => {
    const checkboxes = document.getElementsByClassName('form-check-input');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('change', (event) => {
            var items = document.getElementsByClassName('item');
            if (event.currentTarget.checked) {
                console.log(event.currentTarget);
            }
        });
    }
});
