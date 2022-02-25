import {FaRegWindowClose} from "react-icons/fa"

function ErrorWindows({errorMessage,show,setShow}) {


  //Eğer Inputlardan herhangi bir error döndüyse hata mesajı sağ altta gözükecek.
  if((errorMessage.username)||(errorMessage.mail)||(errorMessage.onlyLetters)||(errorMessage.length))
  {

    return (
      <div className={show ? "display-none" : "error-window"}>
          <FaRegWindowClose onClick={()=>setShow(true)} className="error-close"/>
          <h3>Error while adding link element</h3>
          <div className="error-alert"><span>Error</span></div>
  
          <p>{errorMessage.username}</p>
          <p>{errorMessage.onlyLetters}</p>
          <p>{errorMessage.length}</p>
          <p>{errorMessage.mail}</p>
      </div>
    )
  }

  //Inputlarda herhangi bir hata yaşanmazsa boş html içeriği gönderiyoruz.
  else{
    return (
     <> </>
    )
  }

}

export default ErrorWindows