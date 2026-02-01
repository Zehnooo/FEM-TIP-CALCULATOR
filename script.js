console.log("Hello World");
requestAnimationFrame(() => document.body.classList.add('ready'));
const custInputLabel = document.querySelector('#custom-tip-label');
const elements = custInputLabel.children;
const [custInput, custSpan] = elements;
custInput.addEventListener('click', () => {
    custSpan.classList.add('hide');
    custInput.classList.add('reveal');
    custInput.classList.remove('hide');
});

