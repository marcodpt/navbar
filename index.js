import view from './views/bootstrap5.js'
import component from 
  'https://cdn.jsdelivr.net/gh/marcodpt/component@0.0.1/index.js'

const getLabel = (items, url, path) => {
  var label = ''
  const I = (items || [])
  const p = (path || '')+(path ? ' / ' : '')
  I.forEach(item => {
    if (item.href) {
      if (!label && item.href == url.substr(0, item.href.length)) {
        label = p+item.title
      }
    }
    if (!label) {
      label = getLabel(item.items, url, p+item.title)
    }
  })
  return label
}

export default (e, params) => {
  const c = component(e, view, params, (state, url) => {
    return ({
      ...state,
      label: getLabel(state.items, url)
    })
  })
  setTimeout(() => {
    const nav = e.querySelector('nav')
    if (nav.classList.contains('fixed-top')) {
      document.body.style['padding-top'] = nav.offsetHeight+'px'
    } else {
      document.body.style['padding-top'] = '0px'
    }
  }, 50)
  return c
}
