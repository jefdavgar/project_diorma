import NavLink from '../../atom/Link/NavLink'
import { BrowserRouter as Router } from 'react-router-dom'

const Menu = () => {
  return (
    <Router>
        <nav>
          <NavLink text="Menu"></NavLink>
        </nav>
    </Router>
  )
}

export default Menu