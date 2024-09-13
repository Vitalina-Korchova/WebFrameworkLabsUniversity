export function ValidationBook(): boolean {
    const formElements = document.querySelectorAll('.needs-validation');
    let isValid = true;

    formElements.forEach(function (formElem) {
        
        if (formElem instanceof HTMLFormElement) {
            if (!formElem.checkValidity()) {
                isValid = false;
            }

            const releaseYearInput = formElem.querySelector('.input_release_year') as HTMLInputElement;
            const releaseYearFeedback = formElem.querySelector('.input_release_year + .invalid-feedback') as HTMLElement;

            if (releaseYearInput && releaseYearFeedback) {
                releaseYearInput.addEventListener('input', function () {
                    validateReleaseYear(releaseYearInput, releaseYearFeedback);
                });

                if (!validateReleaseYear(releaseYearInput, releaseYearFeedback)) {
                    isValid = false;
                }
            }

            formElem.classList.add('was-validated');

            if (isValid) {
                formElem.reset();
                formElem.classList.remove('was-validated'); 
            }
        }
    });

    return isValid;
}


function validateReleaseYear(releaseYearInput: HTMLInputElement, releaseYearFeedback: HTMLElement): boolean {
    const releaseYear = releaseYearInput.value.trim();
    const currentYear = new Date().getFullYear();
    const releaseYearNum = parseInt(releaseYear);
    let isValid = true;

    if (releaseYear === '') {
        releaseYearFeedback.textContent = 'Введіть рік видання!';
        releaseYearInput.setCustomValidity('invalid');
        isValid = false;
    } else if (!/^\d{4}$/.test(releaseYear) || isNaN(releaseYearNum) || releaseYearNum < 1 || releaseYearNum > currentYear) {
        releaseYearFeedback.textContent = `Введіть коректний рік видання (від 1 до ${currentYear})`;
        releaseYearInput.setCustomValidity('invalid');
        isValid = false;
    } else {
        releaseYearInput.classList.add('was-validated');
        releaseYearFeedback.textContent = '';
        releaseYearInput.setCustomValidity('');
    }

    return isValid;
}
