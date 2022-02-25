import {Link} from "react-router-dom"
import SearchResultHeaderImage from "../../images/SearchResultHeaderImage.png"


function SearchResultHeader() {
  return (
    <div className="srheader">
        <img src={SearchResultHeaderImage}  className="userlist-resim" alt="header-resmi" />
        <Link to="/addRecord" className="header-link btn btn-large">Add New Record</Link>
    </div>
  )
}

export default SearchResultHeader