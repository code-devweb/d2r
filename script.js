document.addEventListener('DOMContentLoaded', () => {
    // 1. Gestion des accordéons
    const acc = document.getElementsByClassName("step-header");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    // 2. Gestion des cases à cocher (LocalStorage)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb, index) => {
        const state = localStorage.getItem('d2r-task-' + index);
        if (state === 'true') {
            cb.checked = true;
            cb.parentElement.classList.add('done');
        }

        cb.addEventListener('change', () => {
            if (cb.checked) {
                cb.parentElement.classList.add('done');
            } else {
                cb.parentElement.classList.remove('done');
            }
            localStorage.setItem('d2r-task-' + index, cb.checked);
        });
    });
});