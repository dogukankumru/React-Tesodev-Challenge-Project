import {Link, useNavigate} from "react-router-dom"
import {useEffect, useContext} from "react"
import SearchFormItems from "./SearchFormItems"
import {FaSearch} from "react-icons/fa"
import Context from "../../context/Context"

function SearchForm() {

    const navigate = useNavigate()
    const {users,text,fetchData,setText,dummy,setDummy} = useContext(Context)
    
    useEffect(()=>{
        fetchData();
    })

    useEffect(()=>{
        const updatedDummy1 = users.filter(user => {
          if((user[0].toLowerCase().includes(text.trim().toLowerCase()))&&(text.trim().length>1)) {
            return true;
          }
          else{
            return false;
          }
        
        });
        setDummy(updatedDummy1);
    },[text])

    const takeFormValue = (e)=>{
        setText(e.target.value)
    }

   const handleNavigate = (e)=>{
       e.preventDefault();
       navigate("/searchResults")
   }

   
  return (
    <div className="search-elements">
        <h3>Find in records</h3>

        <form >
            <FaSearch className="faSearch"/>
            <input type="text" value={text} onChange={takeFormValue}/>
            <button onClick={handleNavigate} className="link btn btn-middle" disabled={text.length<2}>Search</button>
        </form>

        {/*Sayfada sadece ilk üç sonucun gözükmesini sağlıyoruz */}
        <div className="result-element">
            {dummy.slice(0,3).map((user,index)=>(
                <SearchFormItems key={index} user={user}/>    
            ))}

            {/*Eğer listemizde üçten fazla bilgi bulunuyorsa bizi searchResults sayfasına aktaran link ortaya çıkıyor */}
            {dummy.length>3 ? <Link className="show-more" to="/searchResults">Show More...</Link> : null}
        </div>

    </div>
  )
}

export default SearchForm