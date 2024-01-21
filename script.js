const input = document.getElementById('input');
const form = document.getElementById('form');
const parentContainer = document.querySelector('.parent_container');
const msg = 'Please provide a valid email address';
const msg2 = 'It looks like you forgot to add your email';
const msg3 = 'Email is correct';

const messagesContainer = document.createElement('div');
messagesContainer.classList.add('error_container');
messagesContainer.style.padding = '.8rem 1.2rem';

const message = document.createElement('p');
message.classList.add('error_text', 'message');
message.textContent = msg;

const message2 = document.createElement('p');
message2.classList.add('error_text2', 'message');
message2.textContent = msg2;

const message3 = document.createElement('p');
message3.classList.add('error_text3', 'message');
message3.textContent = msg3;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearMessages();

    if (input.value === "") {
        messagesContainer.appendChild(message2);
        message2.style.color = 'hsl(354, 100%, 66%)';
    } else if (!isValidEmail(input.value)) {
        messagesContainer.appendChild(message);
        message.style.color = 'hsl(354, 100%, 66%)';
    } else if (isValidEmail(input.value)) {
        messagesContainer.appendChild(message3);
        message3.style.color = 'green';
    }
    form.appendChild(messagesContainer);
    handleResponsiveLayout();
});


function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
}

function clearMessages() {
    while(messagesContainer.firstChild) {
        messagesContainer.removeChild(messagesContainer.firstChild);
    } 
}

function handleResponsiveLayout() {
    if (window.innerWidth < 469) {
        parentContainer.appendChild(messagesContainer);
    } else {
        form.appendChild(messagesContainer);
    }
}
window.addEventListener('resize', handleResponsiveLayout);

