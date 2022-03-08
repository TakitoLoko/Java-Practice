window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams
    const name = params.get('name');
    const address = params.get('address');
    const number = params.get('number');
    const email= params.get('email');
    const languages = params.get('languages');
    const software = params.get('software');
    const hardware= params.get('hardware');

    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-number').innerHTML = number;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-languages').innerHTML = languages;
    document.getElementById('result-software').innerHTML = software;
    document.getElementById('result-hardware').innerHTML = hardware;


    
})