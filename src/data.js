import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import periodicImage from './assets/Periodic-Table.png';
import todoList from './assets/To-Do-List.png';
import foodOrderApp from './assets/Food-Order-App.png';
import ticTacToe from './assets/Tic-Tac-Toe.png';


export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'HTML5',
    description:
      'THTML5 maestro crafting digital wonders 🖥️✨',
  },
  {
    image: jsxImg,
    title: 'CSS',
    description:
      'CSS Wizard conjuring style magic. 💫✨ 💻🎨',
  },
  {
    image: propsImg,
    title: 'JavaScript',
    description:
      'Unlocking the full potential of the web with JavaScript sorcery. 💡🌐',
  },
  {
    image: stateImg,
    title: 'ReactJs',
    description:
      'Bringing ideas to life with ReactJS magic! ✨💻',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Interactive Periodic Table: Built with HTML and CSS',
    description:
      'Developed a visually engaging and interactive periodic table using HTML and CSS. This project demonstrates my ability to create complex, responsive layouts and apply custom styling to enhance user experience. Each element is styled individually, showcasing attention to detail and design consistency.',
    image: periodicImage,
    link: 'https://niwani.github.io/The-Periodic-Table/'
  },
  jsx: {
    title: 'Tic Tac Toe Game: Developed with ReactJS',
    description:
      'Built a dynamic and interactive Tic Tac Toe game using ReactJS, featuring a clean UI, responsive design, and state management for real-time gameplay. This project showcases my proficiency in React, component-based architecture, and creating engaging user experiences.',
    image: ticTacToe,
    link: 'https://niwani.github.io/Tic-Tac-Toe_ReactJS/',
  },
  props: {
    title: 'Deliciously Simple: A ReactJS Food Order App',
    description:
      'Developed a seamless and intuitive food ordering app using ReactJS, featuring a user-friendly interface, real-time order tracking, and secure payment integration. This project showcases my proficiency in front-end development, user experience design, and API integration.',
    image: foodOrderApp,
    link: 'https://niwani.github.io/Food-Order-App-reactjs-/'
  },
  state: {
    title: 'Organize Your Day: A ReactJS To-Do List App',
    description:
      'Designed and developed a functional and elegant to-do list app using ReactJS, enabling users to efficiently manage tasks with features such as adding, editing, and deleting tasks, as well as categorizing and prioritizing them. This project highlights my skills in front-end development, state management, and responsive design.',
    image: todoList, 
    link: 'https://niwani.github.io/To-Do-List-App/'
  },
};