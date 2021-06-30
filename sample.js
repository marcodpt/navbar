import navbar from './index.js'
import light from './samples/light.js'
import dark from './samples/dark.js'

export default {
  title: 'Navbar component',
  gh: 'https://github.com/marcodpt/navbar',
  samples: {
    light,
    dark
  },
  comp: navbar,
  updates: {
    home: '#',
    John: '#/user/john',
    Hippo: '#/animals/hippo',
    Running: '#/sports/running'
  }
}
