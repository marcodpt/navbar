import view from './views/bootstrap5.js'
import {
  component
} from 'https://cdn.jsdelivr.net/gh/marcodpt/component/index.js'

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
  return component(e, (h, text) => S => 
    h('div', {}, [
      view(h, text)(S),
      S.fixed ? view(h, text)({
        whiteText: S.whiteText,
        type: S.type,
        image: S.image,
        title: S.title,
        expand: 'xs'
      }) : null
    ])
  , params, (state, url) => {
    console.log('Here: ')
    console.log(url)
    console.log(getLabel(state.items, url))
    return ({
      ...state,
      label: getLabel(state.items, url)
    })
  })
}
