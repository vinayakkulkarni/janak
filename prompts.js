module.exports = [
  {
    name: 'name',
    message: 'What is the name of the new package?',
    default: '{outFolder}',
    filter: (val) => val.toLowerCase(),
  },
  {
    name: 'description',
    message: 'How would you describe the new package?',
    default: 'An awesome package',
  },
  {
    name: 'fullname',
    message: 'What is your name?',
    store: true,
  },
  {
    name: 'username',
    message: 'What is your GitHub username?',
    default: '{gitUser.name}',
    filter: (val) => val.toLowerCase(),
    store: true,
  },
  {
    name: 'email',
    message: 'What is your email?',
    default: '{gitUser.email}',
    filter: (val) => val.toLowerCase(),
    store: true,
  },
  {
    name: 'website',
    message: 'What is your website?',
    default: '{gitUser.website}',
    filter: (val) => val.toLowerCase(),
    store: true,
  },
  {
    name: 'docs',
    message: 'Would you like to write docs?',
    type: 'list',
    pageSize: 10,
    choices: [
      { name: 'VuePress', value: 'vuepress' },
      { name: "I don't write docs", value: false },
    ],
    default: false,
  },
  {
    when: (answers) => answers.docs !== false,
    name: 'netlify',
    message: 'Would you like deploy docs on netlify?',
    type: 'list',
    pageSize: 10,
    choices: [
      { name: 'Yes', value: true },
      { name: 'Not needed', value: false },
    ],
    default: false,
  },
];
