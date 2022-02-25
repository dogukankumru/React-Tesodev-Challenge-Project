import {FaMapMarkerAlt} from "react-icons/fa"
import Pagination from "./Pagination";

function UserListResults({currentPosts,postsPerPage,dummy,currentPage,setCurrentPage}) {
  return (
    <>
        <ul className="result-ul">
          {
            currentPosts.map((user,index)=>(
              <li key={index}> 
                <div className="result-icon-userlist">
                  <FaMapMarkerAlt/>
                </div>
  
                <div className="result-paragraph-userlist">
                  <p>{user[5]}</p>
                    <p className="result-border">{user[4]}</p>
                </div>
  
                <div className="result-right-side">
                  <p>{user[0]}</p>
                  <p>{user[3]}</p>
                </div>
  
              </li> 
            ))
          }
            <Pagination postsPerPage={postsPerPage} totalPosts={dummy.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </ul>
        
      </>
  )
}

export default UserListResults