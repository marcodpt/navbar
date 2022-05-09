export default {
  type: 'dark',
  whiteText: true,
  fixed: 'top',
  expand: 'lg',
  title: 'Dark Navbar',
  home: '#',
  items: [
    {
      icon: 'fas fa-paw',
      title: 'Animals',
      items: [
        {
          icon: 'fas fa-hippo',
          title: 'Hippo',
          href: '#/animals/hippo'
        }, {
          icon: 'fas fa-dog',
          title: 'Dog',
          href: '#/animals/dog'
        }, {
          icon: 'fas fa-horse',
          title: 'Horse',
          href: '#/animals/horse'
        }, {
          icon: 'fas fa-fish',
          title: 'Fish',
          href: '#/animals/fish'
        }, {
          icon: 'fas fa-cat',
          title: 'Cat',
          href: '#/animals/cat'
        }
      ]
    }, {
      icon: 'fas fa-dumbbell',
      title: 'Sports',
      items: [
        {
          icon: 'fas fa-volleyball-ball',
          title: 'Volleyball',
          href: '#/sports/volleyball'
        }, {
          icon: 'fas fa-running',
          title: 'Running',
          href: '#/sports/running'
        }, {
          icon: 'fas fa-futbol',
          title: 'Futbal',
          href: '#/sports/futbol'
        }, {
          icon: 'fas fa-basketball-ball',
          title: 'Basketball',
          href: '#/sports/basketball'
        }, {
          icon: 'fas fa-swimmer',
          title: 'Swim',
          href: '#/sports/swim'
        }, {
          icon: 'fas fa-biking',
          title: 'Cycling',
          href: '#/sports/cycling'
        }
      ]
    }, {
      icon: 'fas fa-user',
      title: 'John',
      href: '#/user/john'
    }, {
      icon: 'fab fa-github',
      title: 'Fork me on GitHub',
      href: 'https://github.com/marcodpt/navbar'
    }
  ]
}
