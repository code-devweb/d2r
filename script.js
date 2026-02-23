document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((cb, index) => {
        // Charger l'état sauvegardé depuis le stockage local du navigateur
        const state = localStorage.getItem('d2r-task-' + index);
        if (state === 'true') {
            cb.checked = true;
            cb.parentElement.classList.add('done');
        }

        // Écouter les clics
        cb.addEventListener('change', () => {
            if (cb.checked) {
                cb.parentElement.classList.add('done');
            } else {
                cb.parentElement.classList.remove('done');
            }
            // Sauvegarder l'état
            localStorage.setItem('d2r-task-' + index, cb.checked);
        });
    });
});
