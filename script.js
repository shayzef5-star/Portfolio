// ===== ДАННЫЕ ПРОЕКТОВ =====
const projects = [
  {
    id: 'project1',
    title: 'Portfolio',
    description: 'A clean one-page portfolio site that showcases my key projects and skills. It includes sections for services, portfolio, about me, and a contact form. Fully responsive across mobile and desktop. Tech Stack: HTML, CSS (Flexbox/Grid), JavaScript.',
    image: 'images/logo.jpg',
    link: '',
    buttonText: 'This Page'
  },
  {
    id: 'project2',
    title: 'Price Calculator',
    description: 'An interactive cost estimator that helps clients quickly get a price quote for their project. Users select service type and options, and the total updates instantly. It simplifies the quoting process and makes pricing transparent. Tech Stack: HTML, CSS, JavaScript (event handling, dynamic DOM updates).',
    image: 'images/ComingSoon.png',
    link: '#contact',
    buttonText: 'Coming Soon'
  },
  {
    id: 'project3',
    title: 'To-Do list app',
    description: 'A simple task management tool. Users can add tasks, mark them as completed, delete them, and filter by status. Data is saved in Local Storage, so nothing is lost on page refresh. Tech Stack: HTML, CSS, JavaScript (DOM manipulation, Local Storage).',
    image: 'images/ComingSoon.png',
    link: 'https://chat.deepseek.com/a/chat/s/51337a57-62de-4233-a1b2-5438437a272b',
    buttonText: 'Coming Soon'
  },
  {
    id: 'project4',
    title: 'Online Store',
    description: 'A service catalog with a functional shopping cart. Users can browse services, add items to their cart, view the total cost, and submit a request. Clean UI for a smooth client experience. Tech Stack: HTML, CSS, JavaScript (state management, dynamic interface).',
    image: 'images/ComingSoon.png',
    link: '#',
    buttonText: 'Coming Soon'
  }
];

// ===== НАХОДИМ ЭЛЕМЕНТЫ НА СТРАНИЦЕ =====
const mainProject = document.getElementById('mainProject');
const mainImage = mainProject.querySelector('img');
const mainTitle = mainProject.querySelector('.main-info h2');
const mainDesc = mainProject.querySelector('.main-info p');
const mainLink = document.getElementById('projectLink');

const icons = document.querySelectorAll('.project-icon');

let currentLink = '';

function showProject(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;

  mainImage.src = project.image;
  mainImage.alt = project.title;
  mainTitle.textContent = project.title;
  mainDesc.textContent = project.description;
  
  currentLink = project.link;
  mainLink.textContent = project.buttonText || 'Check Website';

  icons.forEach(icon => icon.classList.remove('active'));

  const activeIcon = document.querySelector(`.project-icon[data-id="${projectId}"]`);
  if (activeIcon) {
    activeIcon.classList.add('active');
  }
}

function openProject() {
  if (currentLink) {
    window.open(currentLink, '_blank');
  } else {
    alert('Ссылка пока не добавлена');
  }
}

icons.forEach(icon => {
  icon.addEventListener('click', function() {
    const projectId = this.getAttribute('data-id');
    showProject(projectId);
  });
});

showProject('project1');
