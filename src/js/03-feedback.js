import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

updateForm();

function onInput(e) {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};
    // if (formData) {
    //     formData = JSON.parse(formData);
    //     console.log(formData);
    // } else {
    //     FormData = {};
    // }
    // if (e.target.value = "") {
    //     formData = '';
    // }
    formData[e.target.name] = e.target.value;
    const formDataStringify = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formDataStringify);
};

function onSubmit(e) {
    e.preventDefault();
    // formData.email = e.target.email.value;
    // formData.message = e.target.message.value;
    const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
    // console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function updateForm(e) {
    const saveForm = localStorage.getItem(STORAGE_KEY);
    const saveFormPars = JSON.parse(saveForm);
    if (saveForm) {
        form.elements.email.value = saveFormPars.email;
        form.elements.message.value = saveFormPars.message;
     console.log(saveFormPars);
    };
};