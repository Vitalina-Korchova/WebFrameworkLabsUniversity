export function ValidationBook(): boolean {
    const formElements = document.querySelectorAll('.needs-validation');
    let isValid = true;

    Array.prototype.slice.call(formElements).forEach(function (formElem) {
        if (!formElem.checkValidity()) {
            isValid = false;
        }
    
        formElem.classList.add('was-validated'); 
    });

    return isValid;
}
