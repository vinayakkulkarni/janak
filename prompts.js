module.exports = [
  {
    name: 'name',
    message: 'What is the name of the new package?',
    default: '{outFolder}',
    filter: val => val.toLowerCase()
  },
  {
    name: 'description',
    message: 'How would you describe the new package?',
    default: 'An awesome package'
  },
  {
    name: 'fullname',
    message: 'What is your name?',
    store: true
  },
  {
    name: 'username',
    message: 'What is your GitHub username?',
    default: '{gitUser.name}',
    filter: val => val.toLowerCase(),
    store: true
  },
  {
    name: 'email',
    message: 'What is your email?',
    default: '{gitUser.email}',
    filter: val => val.toLowerCase(),
    store: true
  },
  {
    name: 'website',
    message: 'What is your website?',
    default: '{gitUser.website}',
    filter: val => val.toLowerCase(),
    store: true
  },
]