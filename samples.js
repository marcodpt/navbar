import navbar from './index.js'
import light from './samples/light.js'
import dark from './samples/dark.js'
import primary from './samples/primary.js'

const update = (callback) => {
  window.addEventListener("hashchange", () => {
    callback(window.location.hash)
  })
}

export default {
  title: 'Navbar',
  samples: {
    dark: {
      attributes: {
        update,
        ...dark
      }
    },
    primary: {
      attributes: {
        update,
        ...primary
      }
    },
    light: {
      attributes: {
        update,
        ...light
      }
    }
  },
  element: navbar
}
