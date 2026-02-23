function mudarIdioma() {
    
        // menu
        document.querySelector('.home').innerHTML = 'Home';
        document.querySelector('.experience').innerHTML = 'Experience';
        document.querySelector('.projects').innerHTML = 'Projects';
        document.querySelector('.education').innerHTML = 'Education';

        // sobre mim
        document.querySelector('.descricao').innerHTML = 'My name is Roberto, I\m 23 years old and I have a degree in Systems Analysis and Development and a postgraduate degree in Information Security. I had the opportunity to work as an intern at a technology consulting company, where I developed practical skills in IT solutions and teamwork. In addition, I gained experience in other areas, which contributed to my emotional intelligence, analytical skills, and adaptability in different professional contexts. I am looking for new challenges in the technology field, where I can apply my knowledge, grow professionally, and contribute solid results to the team.';
        document.querySelector('.download').innerHTML = '<a href="src/arquivos/CVROBERTOJR1.pdf" download="CVROBERTOJR1.pdf">Download CV </a>'  + '<i class="fa-solid fa-download"> </i>';
        document.querySelector('.download').style.color = 'white';

        // experiência
        document.querySelector('#titulo1').innerHTML = 'Experience';
        document.querySelector('#t1').innerHTML = 'Internship at Fi-group';
        document.querySelector('#t2').innerHTML = 'Delivery at Mercado Livre';
        document.querySelector('#t3').innerHTML = 'Construction Management';
        document.querySelector('#tex1').innerHTML = 'Intern at a consulting company, I passed a new company internship program called Speed Program.';
        document.querySelector('#tex2').innerHTML = 'I worked making deliveries of goods through the Mercado Livre app.';
        document.querySelector('#tex3').innerHTML = 'I am responsible for managing and coordinating all administrative and operational activities of the construction site. My role is to ensure that the construction happens according to the schedule, budget, and established quality standards. Diverse professional experience, demonstrating proactivity and responsibility.';
        document.querySelector('.epoca').innerHTML = 'August 2022 - May 2023';
        document.querySelector('#epoca1').innerHTML = 'June 2023 - December 2024';
        document.querySelector('#epoca2').innerHTML = 'January 2025 - April 2025';

        // projetos
        document.querySelector('#project').innerHTML = 'Projects';
        document.querySelector('#tit1').innerHTML = 'Adimo Imóveis Project';
        document.querySelector('#tit2').innerHTML = 'Byte Minds Project';
        document.querySelector('#tit3').innerHTML = 'Silva & Associados Advocacy';
        document.querySelector('#tit4').innerHTML = 'Arca da Vida e do tempo - museum';
        document.querySelector('#tit5').innerHTML = 'NEXA PRIME - agency of influencers';
        document.querySelector('#p1').innerHTML = 'The project is a university case to develop a project of a fictitious real estate agency, this is the project.';
        document.querySelector('#p2').innerHTML = 'The project is a university case of a virtual store, it works with integration to an AWS database.';
        document.querySelector('#p3').innerHTML = 'A case study of an advocacy company called Silva & Associados.'; 
        document.querySelector('#p4').innerHTML = 'A case study of a fictitious museum called Arca da Vida e do tempo, it has exhibition programs, the timeline, scheduling and hours.';
        document.querySelector('#p5').innerHTML = 'Case study developed for NEXA PRIME Agenciamento, a company focused on talent management and professional opportunities. The project presents strategic solutions for profile organization, opportunity disclosure, scheduling and event and selection management, with a focus on efficiency, user experience and digital innovation. The proposal demonstrates skills in web development, user interface design and digital marketing strategies.';
        document.querySelector('#more1').innerHTML = '<a href="https://adimoimoveis.netlify.app/" target="_blank" rel="noopener noreferrer">Learn more</a>';
        document.querySelector('#more2').innerHTML = '<a href="https://byteminds.netlify.app/loja.html" target="_blank" rel="noopener noreferrer">Learn more</a>';
        document.querySelector('#more3').innerHTML = '<a href="https://robertojsjtv.github.io/ProjetoADV/" target="_blank" rel="noopener noreferrer">Learn more</a>';
        document.querySelector('#more4').innerHTML = '<a href="https://robertojsjtv.github.io/ProjetoMuseu/" target="_blank" rel="noopener noreferrer">Learn more</a>';
        document.querySelector('#more5').innerHTML = '<a href="https://robertojsjtv.github.io/ProjetoAgencia/" target="_blank" rel="noopener noreferrer">Learn more</a>';

        //formação
        document.querySelector('#formation').innerHTML = 'Academic formation';
        document.querySelector('#grad').innerHTML = 'Graduation';
        document.querySelector('#mat').innerHTML = 'Systems Analysis and Development';
        document.querySelector('#lug').innerHTML = 'Senac University Center.';
        document.querySelector('#dat').innerHTML = '<b>Completion:</b> December 2023';
        document.querySelector('#pos-grad').innerHTML = 'Post-Graduation';
        document.querySelector('#mat1').innerHTML = 'Information Security';
        document.querySelector('#senac').innerHTML = 'Senac EAD';
        document.querySelector('#dat1').innerHTML = '<strong>Completion:</strong> July 2025';
    
        document.querySelector('#deve').innerHTML = 'Site developed by Roberto José';
    }