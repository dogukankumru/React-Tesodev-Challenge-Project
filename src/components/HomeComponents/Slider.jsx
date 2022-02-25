import {FaAngleLeft,FaAngleRight} from "react-icons/fa"
import SliderImage from "../../images/SliderImage.png"
import {useState} from "react"

function Slider()
{
    const [count,setCount] =useState(0);
    //Slider kısmındaki resimlerin ve yazıların bulunduğu liste
    const sliders=[{resim: SliderImage,text:"Text1: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text2: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text3: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text4: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text5: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text6: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"},
                 {resim: SliderImage,text:"Text7: A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",footer:"1h ago · by Troy Corlson"}] 


    const decreaseCount = ()=>{
        if(count>0){
            setCount(count-1)
        }
    }

    const increaseCount = ()=>{
        if(count<4){
            setCount(count+1)
        }
    }


    return(
        <div className="slider">
            <h3>Top News</h3>
            
            <div className="slider-elements">
                <button onClick={decreaseCount} className="left-button"><FaAngleLeft/></button>

                {sliders.map((slider,index)=>(
                    /*Sayfada her zaman üç tane resmin gösterimini sağlamak için bunu if condition ile sağladım */
                    (index<=count+2 && index>count-1) ? 
                        (
                        <div key={index} className="element">
                            <img className="slider-image" src={slider.resim} alt="resim" />
                            <p className="slider-paragraph">{slider.text}</p>
                            <p className="slider-footer">{slider.footer}</p>
                        </div> 
                        ) 
                        : null
                    
                ))}

                <button onClick={increaseCount} className="right-button"><FaAngleRight/></button>
            </div>
        </div>
    )
}

export default Slider;