import view from './views/bootstrap5.js'

const img = 'https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg'

export default () => {
  QUnit.test("navbar", assert => {
    const test = (params, expected, msg) => {
      assert.equal(
        view(params).outerHTML,
        expected.trim().replace(/\s\s+/g, ' ')
          .split('> <').join('><')
          .split('" >').join('">'),
        msg
      )
    }

    test({}, `
      <nav 
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <span class="navbar-text" data-ctx="label"></span>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto"></ul>
          </div>
        </div>
      </nav>
    `, 'no params')

    test({
      title: "Basic",
      label: "home",
      items: [
        {
          title: 'Sports',
          icon: 'fas fa-running',
          items: [
            {
              title: 'Volleyball',
              icon: 'fas fa-volleyball-ball',
              href: '#volleyball'
            }, {
              title: 'Basketball',
              icon: 'fas fa-basketball-ball',
              href: '#basketball'
            }, {
              title: 'Futbol',
              icon: 'fas fa-futbol',
              href: '#futbol'
            }
          ]
        }, {
          title: 'Profile',
          icon: 'fas fa-user',
          href: '#profile'
        }, {
          title: 'Quit',
          icon: 'fas fa-power-off',
          href: '#logout'
        }
      ]
    }, `
      <nav 
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <a title="Basic" class="navbar-brand">Basic</a>
          <span class="navbar-text" data-ctx="label">home</span>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                ><i class="fas fa-running"></i> Sports</a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#volleyball"
                    ><i class="fas fa-volleyball-ball"></i> Volleyball</a>
                  </li><li>
                    <a
                      class="dropdown-item"
                      href="#basketball"
                    ><i class="fas fa-basketball-ball"></i> Basketball</a>
                  </li><li>
                    <a
                      class="dropdown-item"
                      href="#futbol"
                    ><i class="fas fa-futbol"></i> Futbol</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  href="#profile"
                  class="nav-link"
                ><i class="fas fa-user"></i> Profile</a>
              </li>
              <li class="nav-item">
                <a
                  href="#logout"
                  class="nav-link"
                ><i class="fas fa-power-off"></i> Quit</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `, 'basic')

    test({
      title: "With image",
      label: "home",
      image: img,
      imageHeight: "24",
      items: [
        {
          title: 'Profile',
          icon: 'fas fa-user',
          href: '#profile'
        }
      ]
    }, `
      <nav 
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
          ><img
            src="${img}"
            alt="With image"
            title="With image"
            height="0"
          ></a>
          <span class="navbar-text" data-ctx="label">home</span>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="#profile"
                  class="nav-link"
                ><i class="fas fa-user"></i> Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `, 'With image')

    test({
      title: "With image and href",
      label: "home",
      home: '#home',
      image: img,
      imageHeight: "24",
      items: [
        {
          title: 'Profile',
          icon: 'fas fa-user',
          href: '#profile'
        }
      ]
    }, `
      <nav 
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#home"
          ><img
            src="${img}"
            alt="With image and href"
            title="With image and href"
            height="0"
          ></a>
          <span class="navbar-text" data-ctx="label">home</span>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="#profile"
                  class="nav-link"
                ><i class="fas fa-user"></i> Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `, 'With image and href')

    test({
      title: "Fancy",
      label: "home",
      home: '#fancy',
      fixed: 'top',
      whiteText: true,
      type: 'dark',
      expand: 'lg',
      items: [
        {
          title: 'Profile',
          icon: 'fas fa-user',
          href: '#profile'
        }
      ]
    }, `
      <nav 
        class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      >
        <div class="container-fluid">
          <a
            title="Fancy"
            href="#fancy"
            class="navbar-brand"
          >Fancy</a>
          <span class="navbar-text" data-ctx="label">home</span>
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="#profile"
                  class="nav-link"
                ><i class="fas fa-user"></i> Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `, 'fancy')
  })
}
