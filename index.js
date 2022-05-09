import view from './views/bootstrap5.js'

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

export default ({
  update,
  items,
  ...params
}) => {
  const e = view({
    items,
    ...params
  })

  const x = e.querySelector(`[data-ctx="label"]`)
  if (x) {
    update(url => {
      x.textContent = getLabel(items, url)
    })
  }

  setTimeout(() => {
    const img = e.querySelector('img')
    if (img) {
      const p = img.parentNode
      const cs = window.getComputedStyle(p)
      const height = p.clientHeight
        - (parseFloat(cs.getPropertyValue('padding-top')) || 0)
        - (parseFloat(cs.getPropertyValue('padding-bottom')) || 0)
        - 4
      img.style.height = height+'px'
    }
    if (e.classList.contains('fixed-top')) {
      document.body.style['padding-top'] = e.offsetHeight+'px'
    } else {
      document.body.style['padding-top'] = '0px'
    }
  }, 50)

  return e
}
