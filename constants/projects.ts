import GraphVisualizer from '../assets/images/projects/AlgorithmVisualizer.png';
import CelebrateLeetCode from '../assets/images/projects/CelebrateLeetcode.png';
import Huffman from '../assets/images/projects/HuffmanCoding.png';
import KMeanClustering from '../assets/images/projects/KMeanClustering.png';
import LookUp from '../assets/images/projects/LookUp.png';
import MazeGenerator from '../assets/images/projects/MazeGenerator.png';
import SudokuGame from '../assets/images/projects/SudokuGame.png';
import TypingMultiplayer from '../assets/images/projects/TypingMultiplayer.png';
import CrystalFramework from '../assets/images/projects/crystal-framework.png';
import InterviewExperience from '../assets/images/projects/interview-experience.png';
import SobelFilter from '../assets/images/projects/sobel_filter.png';
import WorkshopManager from '../assets/images/projects/workshop-manager.png';

export const projects = [
  {
    title: 'Interview Experience',
    startDate: 'Jan 2023',
    endDate: 'Mar 2023',
    detail:
      'An Interview Experience Sharing Portal for KKWIEER Students. Senior Students can share their experience and students can view and share them easily.',
    techStack: [
      'NodeJs',
      'Express',
      'ReactJs',
      'Redux',
      'TypeScript',
      'MongoDB[Mongoose]',
      'Eslint[AirBnb]',
      'QuillEditor',
    ],
    image: InterviewExperience,
    codeURL: 'https://github.com/Kkwagh-Coders/interview-experience-client',
    liveURL: 'https://official-interview-experience.netlify.app',
    infoURL: '',
  },
  {
    title: 'Crystal Web Framework',
    startDate: 'Apr 2023',
    endDate: 'Present',
    detail:
      'A Web Application Framework in C++ from Scratch. This project helped me to gain deep understanding about Servers and also apply my API Knowledge.',
    techStack: ['C++', 'DSA', 'HTTP', 'CNS'],
    image: CrystalFramework,
    codeURL: 'https://github.com/Suhaan-Bhandary/HTTP-Server-CPP',
    liveURL: 'https://crystal-web-framework.onrender.com',
    infoURL: '',
  },
  {
    title: 'Workshop Manager',
    startDate: 'Sep 2022',
    endDate: 'Dec 2022',
    detail:
      'Secured Sponsorship from the College Workshop for a Web Application, which reduces paper trail by 70%. Designed and implemented the frontend flow for the application and developed an authentication system using Session and mail system with Nodemailer, resulting in a more efficient and streamlined process.',
    techStack: ['ReactJs', 'Redux', 'NodeJs', 'ExpressJs', 'PostgreSQL'],
    image: WorkshopManager,
    codeURL: '',
    liveURL: '',
    infoURL:
      'https://drive.google.com/file/d/1zpJKvCFkl4Wh6YKSRx65sssgiICGtzxB/view',
  }, 
  {
    title: 'Typing Multiplayer',
    startDate: 'Aug 2021',
    endDate: '',
    detail:
      'A Website which can be used to host Typing Games and Chat with Friends and one can also Join other Groups and spend fun times with other and compare speeds using charts and learn typing.',
    techStack: ['JavaScript', 'NodeJs', 'Express', 'SocketIo', 'HTML/CSS'],
    image: TypingMultiplayer,
    codeURL: 'https://github.com/Suhaan-Bhandary/TypingFightMultiplayer',
    liveURL: 'https://typing-fight.glitch.me',
    infoURL: '',
  }, 
  {
    title: 'LookUp',
    startDate: 'Jun 2021',
    endDate: '',
    detail:
      'A Bridge Between Teachers and Students, This project was a custom notification app where teachers can post assignments, news, and instructions, and students were notified using Gmail. It had an user base of 200 when Online Classes were going.',
    techStack: ['Django', 'Django RestApi', 'React', 'Sqlite'],
    image: LookUp,
    codeURL: 'https://github.com/Suhaan-Bhandary/PBL-Website',
    liveURL: '',
    infoURL: '',
  },
  {
    title: 'Graph Visualizer',
    startDate: 'May 2022',
    endDate: '',
    detail:
      'It is a Graph Visualizer created in Java in which one can create custom graphs and visualize BFS, DFS, Dijkstra, Components, Spanning Tree, Bridges, and Articulation point.\nWe won First Prize in DSA Mini Project in Second Year with this Project.',
    techStack: ['JAVA', 'JavaFX', 'XML'],
    image: GraphVisualizer,
    codeURL: 'https://github.com/Suhaan-Bhandary/GraphVisualizer',
    liveURL: '',
    infoURL: '',
  },
  {
    title: 'Celebrate LeetCode',
    startDate: 'Dec 2022',
    endDate: '',
    detail: 'LeetCode still does doesn\'t provide a way to search through the leader board of a contest, so this extension provides a way to search players using their username!!. It also has a celebrate feature which plays a sound whenever your code get\'s accepted on LeetCode.',
    techStack: ['Chrome Extension', 'JavaScript', 'HTML', 'CSS'],
    image: CelebrateLeetCode,
    codeURL: 'https://github.com/Suhaan-Bhandary/Celebrate-LeetCode',
    liveURL: '',
    infoURL: '',
  }, 
  {
    title: 'Sudoku',
    startDate: 'Oct 2021',
    endDate: '',
    detail:
      'A Full Featured Sudoku Game. Features of Sudoku: Hard Mode, Hints, Auto Solve, Danger Indication and Animations.\nWas Created as a Case Study for Discrete Maths',
    techStack: ['React', 'CSS', 'LottieFiles'],
    image: SudokuGame,
    codeURL: 'https://github.com/Suhaan-Bhandary/Sudoku-Game',
    liveURL: 'https://suhaan-bhandary.github.io/Sudoku-Game/',
    infoURL: '',
  },
  {
    title: 'Maze Generator',
    startDate: 'Jan 2021',
    endDate: '',
    detail:
      'A Maze-Generator using DFS Algorithm which can be used to generate mazes and also get the solution of the generated mazes.',
    techStack: ['React', 'react-icons'],
    image: MazeGenerator,
    codeURL: 'https://github.com/Suhaan-Bhandary/Maze-Generator-DFS',
    liveURL: 'https://suhaan-bhandary.github.io/Maze-Generator-DFS',
    infoURL: '',
  },
  {
    title: 'Sobel Filter',
    startDate: 'Apr 2023',
    endDate: '',
    detail:
      'Image Processing Project in C++. Implemented the Sobel Filter for Edge Detection.',
    techStack: ['C++', 'Sobel Algorithm', 'PPM P3'],
    image: SobelFilter,
    codeURL:
      'https://github.com/Suhaan-Bhandary/Image-Processing-And-Sobel-CPP',
    liveURL: '',
    infoURL: '',
  },
  {
    title: 'KMean on IPL Data',
    startDate: 'Aug 2022',
    endDate: '',
    detail:
      'A Mini Project using KMean Clustering Algorithm Implementation to Analyze and Create group based on IPL Data',
    techStack: ['Python', 'JupyterNotebook', 'Pandas', 'Matplotlib'],
    image: KMeanClustering,
    codeURL: 'https://github.com/Suhaan-Bhandary/KMean-Clusturing-Algorithm',
    liveURL: 'https://suhaan-bhandary.github.io/KMean-Clusturing-Algorithm',
    infoURL: '',
  },
  {
    title: 'Huffman Coding',
    startDate: 'March 2022',
    endDate: '',
    detail: 'A Text Encryption and Compression Project using Huffman Coding',
    techStack: ['React', 'react-icons', 'Heap'],
    image: Huffman,
    codeURL: 'https://github.com/Suhaan-Bhandary/Huffman-Coding',
    liveURL: 'https://suhaan-bhandary.github.io/Huffman-Coding',
    infoURL: '',
  },
];
