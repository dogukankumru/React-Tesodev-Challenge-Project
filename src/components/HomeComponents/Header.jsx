import HeaderImage from "../../images/HeaderImage.png"
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
        <Link to="/addRecord" className="header-link btn btn-large">Add New Record</Link>
        <div className="header-resim">
            <img src={HeaderImage} alt="header" />
            <p>Search App</p>
        </div>
    </header>
  )
}

export default Header