import {FaMapMarkerAlt} from "react-icons/fa"

function SearchFormItems({user}) {
    
    return( 

        <div className="search-element">
            <div className="result-icon">
                 <FaMapMarkerAlt/>
            </div>

            <div className="result-paragraph">
                <p>{user[0]}</p>
                <p className="border">{user[4]}</p>
            </div>

        </div>         
    )
}
 

export default SearchFormItems