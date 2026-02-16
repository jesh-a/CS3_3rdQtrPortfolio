const KEY = 'signup';

function onButtonSubmit(event) {
    event.preventDefault();
    const form = event.target.form;
    const name = form.elements['fullName'].value.trim();
    const age = form.elements['age'].value.trim();
    const email = form.elements['email'].value.trim();
    const clubReason = form.elements['clubReason'].value.trim();
    console.log(form);
    
    if (!name || !age || !email || !clubReason) {
        alert('Please fill out all required fields.');
        return;
    }
    const signUp = { name, age, email, clubReason };
    confirmAndAdd(signUp);
    form.reset();

    
}







