import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
const formData = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)):{};

updateForm();

function onInput(e) {
    formData[e.target.name] = e.target.value;
    const formDataStringify = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataStringify);
};

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
    // console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function updateForm(e) {
    const saveForm = localStorage.getItem(STORAGE_KEY);
   
    if (saveForm) {
        const saveFormPars = JSON.parse(saveForm);
        if (saveFormPars.email) {
            form.elements.email.value = saveFormPars.email;
             console.log(saveFormPars);
        };
        if (saveFormPars.message) {
            form.elements.message.value = saveFormPars.message;
             console.log(saveFormPars);
        }
    }
}
