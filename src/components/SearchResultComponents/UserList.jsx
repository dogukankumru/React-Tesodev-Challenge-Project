import {useContext, useEffect,useState} from "react"
import Context from "../../context/Context"
import UserListResults from "./UserListResults";

function UserList() {

  const {users,text,setDummy,dummy,selectedValue} = useContext(Context);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  
  // Input içine yazılan değer her değiştiğinde filtreleme işlemi gerçekleşiyor. Filtrelenen değerleri dummy bir array'e koyuyoruz 

  useEffect(()=>{
    const updatedDummy = users.filter(user => {
      if((user[0].toLowerCase().includes(text.trim().toLowerCase()))&&(text.trim().length>0)) {
        return true;
      }
      else{
        return false;
      }
    
    });
    setDummy(updatedDummy);
  },[text,setDummy,users])


  //Pagination sayfasında kullanacağımız sayfada bulunacak içerik sayısına göre index numaralarını belirleme işlemi
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummy.slice(indexOfFirstPost,indexOfLastPost)
  
  //Eğer Alfabetik olarak sıralanma seçildiyse bu condition dönecek
  if(selectedValue==="NA")
  {
    dummy.sort()
    return (
      <UserListResults currentPosts={currentPosts} postsPerPage={postsPerPage} dummy={dummy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
  }

  //Eğer alfabetik olarak tersten sıralanma seçeneği seçildiyse bu sonuç dönecek
  else if(selectedValue==="ND"){
    dummy.reverse()
    return(
      <UserListResults currentPosts={currentPosts} postsPerPage={postsPerPage} dummy={dummy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
  }

  //Eğer yıl azalacak şekilde dönüldüyse json içinde bulunan tarih bilgileri alınacak Date objesine döndürülüp sıralama kıyaslanması yapılacak artacak şekilde
  else if(selectedValue==="YA"){
    dummy.sort((a,b)=>new Date(a[3])-new Date(b[3]))
    return(
      <UserListResults currentPosts={currentPosts} postsPerPage={postsPerPage} dummy={dummy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
  }

  //Eğer yıl artacak azalacak şekilde seçildiyse bu sonuç dönecek
  else if(selectedValue==="YD"){
    dummy.sort((a,b)=>new Date(b[3])-new Date(a[3]))
    return(
      <UserListResults currentPosts={currentPosts} postsPerPage={postsPerPage} dummy={dummy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
  }

  //Eğer sıralama ile alakalı bir seçenek dönülmediyse json bilgisi olduğu şekilde sıralanacak.
  else{
    return (
        <UserListResults currentPosts={currentPosts} postsPerPage={postsPerPage} dummy={dummy} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    )
  }
  
}

export default UserList