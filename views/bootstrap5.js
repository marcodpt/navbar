import {html} from '../dependencies.js'

export default ({
  whiteText,
  fixed,
  expand,
  type,
  home,
  image,
  title,
  label,
  items
}) => html(({
  nav, div, a, span, button, ul, li, i, img
}) => 
  nav({
    class: [
      'navbar',
      fixed ? 'fixed-'+fixed : '',
      !expand ? '' :
        ('navbar-expand'+(typeof expand == 'string' ? '-'+expand : '')),
      'navbar-'+(whiteText ? 'dark' : 'light'),
      'bg-'+(type || 'light')
    ]
  }, [
    div({
      class: 'container-fluid'
    }, [
      !image ? null : a({
        class: 'navbar-brand',
        href: home
      }, [
        img({
          src: image,
          alt: title,
          title: title,
          height: 0
        })
      ]),
      image || !title ? null : a({
        title: title,
        href: home,
        class: 'navbar-brand'
      }, title),
      span({
        class: 'navbar-text',
        dataCtx: 'label'
      }, label),
      button({
        class: 'navbar-toggler',
        dataBsToggle: 'collapse',
        dataBsTarget: '.navbar-collapse'
      }, [
        span({
          class: 'navbar-toggler-icon'
        })
      ]),
      div({
        class: 'collapse navbar-collapse'
      }, [
        ul({
          class: 'navbar-nav ms-auto'
        }, (items || []).map(({
          icon,
          title,
          ...item
        }) =>
          item.items ? !item.items.length ? null : li({
            class: 'nav-item dropdown'
          }, [
            a({
              class: 'nav-link dropdown-toggle',
              dataBsToggle: 'dropdown',
              ...item
            }, [
              icon ? i({
                class: icon
              }) : null,
              icon && title ? ' ' : null,
              title
            ]),
            ul({
              class: 'dropdown-menu'
            }, item.items.map(({
              icon,
              title,
              ...item
            }) => 
              li([
                a({
                  class: 'dropdown-item',
                  ...item
                }, [
                  icon ? i({
                    class: icon
                  }) : null,
                  icon && title ? ' ' : null,
                  title
                ])
              ])
            ))
          ]) : li({
            class: 'nav-item'
          }, [
            a({
              ...item,
              class: 'nav-link'
            }, [
              icon ? i({
                class: icon
              }) : null,
              icon && title ? ' ' : null,
              title
            ])
          ])
        ))
      ])
    ])
  ])
)
