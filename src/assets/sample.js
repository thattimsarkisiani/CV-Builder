import { avatar } from './avatar'

export const sample = {
  firstName: 'Mandy',
  lastName: 'Smith',
  title: 'Senior Front-End Developer',
  summary:
    "My name is Mandy Smith. I am a passionate, over-achieving Web Developer who believes the programmer's #1 job is making life easier.",
  email: 'm.smith@immersive.ge',
  phone: '+995 XXX XX XX XX',
  address: 'Tbilisi, Georgia',
  avatar: avatar,
  more: null,
  link: [
    {
      id: 1,
      label: 'gitHub',
      url: 'https://github.com/'
    },
    {
      id: 2,
      label: 'Linkedin',
      url: 'https://www.linkedin.com/'
    },
    {
      id: 3,
      label: 'Twitter',
      url: 'https://twitter.com/'
    }
  ],
  experience: [
    {
      id: 1,
      beginDate: '2023',
      endDate: '',
      title: 'Front End Lead',
      company: 'Immersive LLC',
      description: 'Développement d\'une librairie de composants (Vue, Tailwind, Storybook).\n' +
        'Tests unitaires et fonctionnels\n' +
        'Spécifications UX/UI'
    },
    {
      id: 2,
      beginDate: '2020',
      endDate: '',
      title: 'Deputy Director Parks Department',
      company: 'Company LLC',
      description:
        "Développement d'une app BtoB : \n" +
        '- développement de composants (UI et custom) et de stores : Vuejs, Vuex, Tailwind, Storybook\n' +
        '- spécifications fonctionnelles et ergonomiques\n' +
        '- test unitaires'
    },
    {
      id: 3,
      beginDate: '2019',
      endDate: '2020',
      title: 'Développeur Front-End',
      company: 'Novazéo',
      description:
        'Intégration et développement sur Django CMS / Symfony (VueJs, OpenLayers).' +
        'Conception UX/UI (Figma).'
    },
    // {
    //   id: 4,
    //   beginDate: '2016',
    //   endDate: '2018',
    //   title: 'Journaliste web',
    //   company: 'La Provence',
    //   description:
    //     'Rédaction, production de modules éditoriaux (Data journalisme, infographies).'
    // },
    // {
    //   id: 5,
    //   beginDate: '2011',
    //   endDate: '2015',
    //   title: 'Chef de Projet numérique',
    //   company: 'La Provence',
    //   description:
    //     'En charge de projets numériques : web, mobiles, applications, réseaux sociaux...'
    // },
    // {
    //   id: 6,
    //   beginDate: '2007',
    //   endDate: '2010',
    //   title: 'Webmaster',
    //   company: 'La Provence',
    //   description:
    //     'Développement et intégration, accompagnement de la rédaction au numérique.'
    // },
    // {
    //   id: 7,
    //   beginDate: '2005',
    //   endDate: '2007',
    //   title: 'Intégrateur',
    //   company: '3SC Global Services',
    //   description: 'HTML, CSS, JS'
    // },
    // {
    //   id: 8,
    //   beginDate: '2001',
    //   endDate: '2004',
    //   title: 'Développeur fullstack',
    //   company: 'Freelance',
    //   description:
    //     'Création de sites web : graphisme, développement et intégration'
    // }
  ],
  education: [
    {
      id: 1,
      beginDate: '2023',
      endDate: '',
      school: 'Immersive Academy',
      degree: 'Full-stack Web Developer',
      city: 'Tbilisi',
      description: 'Ruby, Ruby & Rails, React'
    },
    {
      id: 2,
      beginDate: '2019',
      endDate: '2022',
      school: 'Immersive University',
      degree: 'MST Communication ',
      city: 'Tbilisi',
      description: ''
    }
    // {
    //   id: 3,
    //   beginDate: '1999',
    //   endDate: '2001',
    //   school: 'Université des Pays du Vaucluse',
    //   degree: 'MST Communication : conception multimédias',
    //   city: 'Avignon',
    //   description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    // }
  ],
  skill: [
    { id: 1, label: 'Javascript (ES6) ***' },
    { id: 2, label: 'Vuejs (Vue3, Vuex) ***' },
    { id: 9, label: 'React *' },
    { id: 4, label: 'UI : Tailwind, Headless UI, Vuetify, Quasar ***' },
    { id: 8, label: 'Datavisualisation : D3, OpenLayers **' },
    { id: 3, label: 'Figma, Adobe XD **' },
    { id: 5, label: 'Storybook, Bit ***' },
    { id: 6, label: 'Git **' }
  ],
  hobby: 'Side projects, history, sports'
}
