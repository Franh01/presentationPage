const filter_btns = document.querySelectorAll('.filter-btn');
const skills_wrap = document.querySelector('.skills');
const skills_bars = document.querySelectorAll('.skill-progress');
const e = document.getElementsByName('language')[0];

function language(){
    var strUser = e.options[e.selectedIndex].value;

    if (strUser === 'english') {
        document.title = 'Presentation';
        //* Links
        document.getElementsByName('servicesLink').forEach(c => c.innerText = 'Services');
        document.getElementsByName('aboutLink').forEach(c => c.innerText = 'About');
        document.getElementsByName('contactLink').forEach(c => c.innerText = 'Contact');
        //* End Links

        //*Presentacion
        document.getElementsByName('presentationText')[0].innerText = "Hi, I'm Francisco Lopez and I'm a Full Stack web developer.";
        document.getElementsByName('downloadCV')[0].innerText = "Download resume";
        //*End Presentacion
        
        //*Services
        document.getElementsByName('servTitle')[0].innerText = 'Technologies';
        document.getElementsByName('servTitle')[0].dataset.title = 'What do I do?';
        document.getElementsByName('scndTitleServ')[0].innerText = 'What technologies do I work with?';
        document.getElementsByName('tecnologias')[0].innerText = 'HTML, CSS, Bootstrap, JavaScript, ES6, React, Redux, Postman, NodeJS, Git, Bash, Express, Jest, Mocha, SQL, MySQL, Sequelize and PostgreSQL.';
        //* End Services
        
        //* Portfolio
        document.getElementsByName('portfolioTitle')[0].dataset.title = 'My works';
        document.getElementsByName('allPortfolio')[0].innerText = 'All';
        document.getElementsByName('individualPortfolio')[0].innerText = 'Personal projects';
        document.getElementsByName('jobsPortfolio')[0].innerText = 'Jobs';
        document.getElementsByName('seeMore').forEach(c => c.innerText = 'See more');
        //* End Portfolio
        
        //* About
        document.getElementsByName('aboutTitle')[0].innerText = 'About me';
        document.getElementsByName('aboutTitle')[0].dataset.title = 'Who I am?';
        document.getElementsByName('prePresentationAbout')[0].innerText = 'Hello, I am';
        document.getElementsByName('presentationAbout')[0].innerText = 'a Full Stack web developer with preference on the front end, I acquired my knowledge at Henry, and also by my own means, I like to always learn new things and constantly improve.'
        document.getElementsByName('readMore')[0].innerText = 'Read more';
        //* End About
        
        //* Contact
        document.getElementsByName('contactTitle')[0].innerText = 'Contact me';
        document.getElementsByName('contactSubT')[0].innerText = 'Communicate with me through.';
        //* End Contact
    } else {
        document.title = 'Presentación'
        //* Links
        document.getElementsByName('servicesLink').forEach(c => c.innerText = 'Servicios');
        document.getElementsByName('aboutLink').forEach(c => c.innerText = 'Acerca de mí');
        document.getElementsByName('contactLink').forEach(c => c.innerText = 'Contacto');
        //* End Links
        
        //*Presentacion
        document.getElementsByName('presentationText')[0].innerText = 'Hola, soy Francisco Lopez y soy un desarrollador web Full Stack.';
        document.getElementsByName('downloadCV')[0].innerText = "Descargar CV";
        //*End Presentacion
        
        //*Services
        document.getElementsByName('servTitle')[0].innerText = 'Tecnologías';
        document.getElementsByName('servTitle')[0].dataset.title = '¿Qué es lo que hago?';
        document.getElementsByName('scndTitleServ')[0].innerText = '¿Con qué tecnologías trabajo?';
        document.getElementsByName('tecnologias')[0].innerText = 'HTML, CSS, Bootstrap, JavaScript, ES6, React, Redux, Postman, NodeJS, Git, Bash, Express, Jest, Mocha, SQL, MySQL, Sequelize y PostgreSQL.';
        //* End Services
        
        //* Portfolio
        document.getElementsByName('portfolioTitle')[0].dataset.title = 'Mis trabajos';;
        document.getElementsByName('allPortfolio')[0].innerText = 'Todos';
        document.getElementsByName('individualPortfolio')[0].innerText = 'Proyectos personales';
        document.getElementsByName('jobsPortfolio')[0].innerText = 'Trabajos';
        document.getElementsByName('seeMore').forEach(c => c.innerText = 'Ver más');
        //* End Portfolio
        
        //* About
        document.getElementsByName('aboutTitle')[0].innerText = 'Acerca de mí';
        document.getElementsByName('aboutTitle')[0].dataset.title = '¿Quién soy?';
        document.getElementsByName('prePresentationAbout')[0].innerText = 'Hola, yo soy';
        document.getElementsByName('presentationAbout')[0].innerText = 'un desarrollador web Full Stack con preferencia en el front end, adquirí mis conocimientos en Henry, y también por mis propios medios, me gusta siempre aprender cosas nuevas y mejorar constantemente.'
        document.getElementsByName('readMore')[0].innerText = 'Leer más';
        //* End About
        
        //* Contact
        document.getElementsByName('contactTitle')[0].innerText = 'Contactame';
        document.getElementsByName('contactSubT')[0].innerText = 'Comunicate conmigo mediante.';
        //* End Contact
    }
}
e.onchange=language;
language();


filter_btns.forEach(btn => btn.addEventListener('click', () => {
    filter_btns.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;

    $('.grid').isotope({ filter: filterValue });
}))

$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s'
});

window.addEventListener('scroll', () => {
    skillsEffect()
})

function checkScroll(el) {
    let rect = el.getBoundingClientRect();
    if (window.innerHeight >= rect.top + el.offsetHeight) {
        return true
    } else {
        return false
    }
}

function skillsEffect() {
    if (!checkScroll(skills_wrap)) {
        return;
    } else {
        skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
    }
}