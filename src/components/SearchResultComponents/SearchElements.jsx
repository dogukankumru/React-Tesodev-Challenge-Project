import { useContext, useEffect } from "react"
import Context from "../../context/Context"
import UserList from "./UserList"
import SearchResultHeader from "./SearchResultHeader"

function SearchElements() {

  const {text,setText,setSelectedValue,fetchData} =useContext(Context)

  //Sayfa yenilendiği takdirde Json dosyasından bilgileri tekrardan alması gerekiyor.
  useEffect(()=>{
    fetchData();
  })

  //Bu sayfada anasayfadaki gibi dinamik arama olmadığı için, sadece butona tıklandığı zaman sonuçlar ekranda gösterilecek.
  const handleSubmit =(e)=>{
    e.preventDefault();
    setText(e.target.children[0].value)
    
  }

  const handleChange=(e)=>{
    setSelectedValue(e.target.value);
  }

  return (
    <>
      <SearchResultHeader/>
      
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" defaultValue={text} />
        <button className="btn btn-middle" type="submit">Search</button>

        <select defaultValue={"Order By"} onChange={handleChange} name="sort" id="sort">
          <option value="Order By" disabled hidden>Order By</option>
          <option value="NA">Name Ascending</option>
          <option value="ND">Name Descending</option>
          <option value="YA">Year Ascending</option>
          <option value="YD">Year Descending</option>
        </select>
        
      </form>

      <UserList/>

        
    </>
  )
}

export default SearchElements