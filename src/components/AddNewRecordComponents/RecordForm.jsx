import {useState} from "react"
import ErrorWindows from "./ErrorWindows"

function RecordForm()
{
    
    const [errorName,setErrorName] = useState(false)
    const [errorCity,setErrorCity] = useState(false)
    const [errorCountry,setErrorCountry] = useState(false)
    const [errorMail,setErrorMail] = useState(false)
    const [checkName,setCheckName] =useState("")
    const [checkCountry,setCheckCountry] =useState("")
    const [checkCity,setCheckCity] =useState("")
    const [checkMail,setCheckMail] =useState("")
    const [errorMessage,setErrorMessage] =useState({})
    const [show,setShow] = useState(false)
    

    const handleSubmit = (e)=>{

        e.preventDefault();

        //Sağ altta bulunan hata barının gözükmesini önlüyoruz.
        setShow(false);

        setErrorName(false);
        setErrorCity(false);
        setErrorCountry(false);
        setErrorMail(false);
        let errors={};

        //Inputun içinde sadece alfabatik harflerin olup olmadığını kontrol eden regular expression.
        var RegExpression = /^[a-zA-Z\s]*$/;

        //Email validation için gereken regular expression.
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        //Girilen inputların uygun olup olmadığı kontrol ediliyor. Hatalı olan inputlar belirleniyor.
        if(checkName.trim().includes(" ")===false)
        {
            setErrorName(true)
            errors.username="Name and surname should contain at least two words."
        }

        if(RegExpression.test(checkName)===false){
            setErrorName(true)
            errors.onlyLetters="Input is invalid !"
        }

        if(checkName.trim().length<4 || checkName.trim().length>60){
            setErrorName(true)
            errors.length="Input length is not correct."
        }

        if(checkCountry.trim().length<2 || checkCountry.trim().length>40){
            setErrorCountry(true)
            errors.length="Input length is not correct."
        }

        if(checkCity.trim().length<2 || checkCity.trim().length>40){
            setErrorCity(true)
            errors.length="Input length is not correct."
        }

        if(pattern.test(checkMail)===false){
            setErrorMail(true)
            errors.mail="Please enter a valid mail address."
        }

        setErrorMessage(errors);
    }

    return(
        <>
            <form className="record-form" onSubmit={handleSubmit}>

                {/* Name inputu içinde hata olması durumunda uyarı mesajları conditionlar ile sağlandı */}
                <label htmlFor="name-surname" className={errorName ? "error-label" : null}>Name and Surname</label>
                <input type="text" id="name-surname" className={errorName ? "error-borderr" : null} placeholder="Enter name and surname" value={checkName} onChange={(e)=>setCheckName(e.target.value)}/>
                <div className={errorName ? "error" : "hidden"}>Enter a valid "Name and Surname" input</div>

                {/* Country inputu içinde hata olması durumunda uyarı mesajları conditionlar ile sağlandı */}
                <label htmlFor="country" className={errorCountry ? "error-label" : null}>Country</label>
                <input type="text" id="country" placeholder="Enter a country" className={errorCountry ? "error-border" : null} value={checkCountry} onChange={(e)=>setCheckCountry(e.target.value)}/>
                <div className={errorCountry ? "error" : "hidden"}>Length must be between 2-40 characters and consist only of letters!</div>

                {/* City inputu içinde hata olması durumunda uyarı mesajları conditionlar ile sağlandı */}
                <label htmlFor="city" className={errorCity ? "error-label" : null}>City</label>
                <input type="text" id="city" placeholder="Enter a city" value={checkCity} className={errorCity ? "error-border" : null} onChange={(e)=>setCheckCity(e.target.value)}/>
                <div className={errorCity ? "error" : "hidden"}>Length must be between 2-40 characters and consist only of letters!</div>

                {/* Email inputu içinde hata olması durumunda uyarı mesajları conditionlar ile sağlandı */}
                <label htmlFor="email" className={errorMail ? "error-label" : null}>Email</label>
                <input type="text" id="email" placeholder="Enter an e-mail(abc@xyz.com)" className={errorMail ? "error-border" : null} value={checkMail} onChange={(e)=>setCheckMail(e.target.value)}/>
                <div className={errorMail ? "error" : "hidden"}>Enter a valid e-mail address!</div>

                {/* Inputlara girilen değerlerin uzunluğu istenilen seviyede değilse buton aktif olmayacak */}
                <button className="btn btn-small" type="submit" disabled={((checkName.trim().length<4) || (checkCountry.trim().length<2) || (checkCity.trim().length<2) || (checkMail.trim().length<10))}>Add</button>
            </form>

            <ErrorWindows errorMessage={errorMessage} show={show} setShow={setShow}/>
        </>
    )
}

export default RecordForm;