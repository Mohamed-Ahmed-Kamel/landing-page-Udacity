//Navigation global variable.
const Navi= document.getElementById('navbar__list');

// Sections global variable.
const Sections= document.querySelectorAll('section');

/**
 * End Global Variables.
 * Start Helper Functions.
*/

/**
 * End Helper Functions.
 * Begin Main Functions.
*/

// Build nav.
const NaviBuild= () => {
    let naviUI= '';
    
    // looping over all sections
    Sections.forEach(section => {
        const SectionID = section.id;
        const SectionDataNavi = section.dataset.nav;
        naviUI += `<li><a class="menu__link" href="#${SectionID}">${SectionDataNavi}</a></li>`;
    });
    
    // Append all elements to the navigation.
    
    Navi.innerHTML= naviUI;
};
NaviBuild();

// Add class 'active' to section when near top of viewport.

// Getting the largest value that's less or equal to the number.

const offset= (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// Remove the active class.

const removeACT= (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};

// Adding the active class.
const addACT= (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: #441c2d;";
    };
};

//Implementating the actual function.

const SectionACTn= () => {
    Sections.forEach(section => {
        const ElementOffset = offset(section);
        inviewport = () => ElementOffset < 100 && ElementOffset >= -100;

        removeACT(section);
        addACT(inviewport(),section);
    });
};

// Scroll to anchor ID using scrollTO event.

window.addEventListener('scroll' ,SectionACTn);
const scroll= () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(var x = 50 ; x<Sections ; x=x+1){
                Sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });
};

scroll();

/**
 * End Main Functions.
 * Begin Events.
 * Build menu.
 * Scroll to section on link click.
 * Set sections as active.
*/
