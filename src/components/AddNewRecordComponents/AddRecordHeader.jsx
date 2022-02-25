import {Link} from "react-router-dom"
import SearchResultHeaderImage from "../../images/SearchResultHeaderImage.png"
import {FaArrowLeft} from "react-icons/fa"

function AddRecordHeader() {
  return (
    <div className="adHeader">
        <img src={SearchResultHeaderImage} alt="adrecord-resim" />
        <Link to="/searchResults" className="ad-link" > <FaArrowLeft/> <span>Return to List Page</span></Link>
    </div>
  )
}

export default AddRecordHeader