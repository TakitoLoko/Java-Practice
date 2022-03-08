window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams
    const name = params.get('name');
    const address = params.get('address');
    const number = params.get('number');
    const email = params.get('email');
    const languages = params.get('languages');
    const software = params.get('software');
    const hardware = params.get('hardware');
    const nameWork = params.get('nameWork');
    const locationWork = params.get('locationWork');
    const roleWork = params.get('roleWork');
    const datesWork = params.get('datesWork');
    const taskOneWork = params.get('taskOneWork');
    const taskTwo = params.get('taskTwoWork');
    const nameSchool = params.get('nameSchool');
    const locationSchool = params.get('locationSchool');
    const careerSchool = params.get('careerSchool');
    const datesSchool = params.get('datesSchool');
    const taskOneSchool = params.get('taskOneSchool');
    const taskTwoSchool = params.get('taskTwoSchool');
    const awardOne = params.get('awardOne');
    const awardTwo = params.get('awardTwo');




    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-number').innerHTML = number;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-languages').innerHTML = languages;
    document.getElementById('result-software').innerHTML = software;
    document.getElementById('result-hardware').innerHTML = hardware;
    document.getElementById('result-nameWork').innerHTML = nameWork;
    document.getElementById('result-locationWork').innerHTML = locationWork;
    document.getElementById('result-roleWork').innerHTML = roleWork;
    document.getElementById('result-datesWork').innerHTML = datesWork;
    document.getElementById('result-taskOneWork').innerHTML = taskOneWork;
    document.getElementById('result-taskTwoWork').innerHTML = taskTwo;
    document.getElementById('result-nameSchool').innerHTML = nameSchool;
    document.getElementById('result-locationSchool').innerHTML = locationSchool;
    document.getElementById('result-careerSchool').innerHTML = careerSchool;
    document.getElementById('result-datesSchool').innerHTML = datesSchool;
    document.getElementById('result-taskOneSchool').innerHTML = taskOneSchool;
    document.getElementById('result-taskTwoSchool').innerHTML = taskTwoSchool;
    document.getElementById('result-awardOne').innerHTML = awardOne;
    document.getElementById('result-awardTwo').innerHTML = awardTwo;





    
})