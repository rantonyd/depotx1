import  {Button} from "antd";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BiLogoFacebookCircle } from "react-icons/bi"
import img1 from "../../assets/Frame 177.png";
import i1 from "../../assets/Group 223779.png";
import i2 from "../../assets/Group 223780.png";
import WebsiteHeader from "../../component/websiteHeader";
import "./style.css"
import HomeForm from "../../component/form";

function HomeScreen(){
  
    return(
      <div className="homeScreen">
       
        <div className="homeScreen-Box1">
          <div className="image-text-container">
            <img className="img1" src={ img1 } alt="" /> 
            <div className="text-overlay">
              <div className="tt"><img className="aifilicon" src={i1} alt="" />
                <BiLogoFacebookCircle  className="aifilicon"/>
                <AiFillTwitterCircle className="aifilicon"/>
                <img className="aifilicon" src={i2} alt="" />
                </div>
              </div>
            <div className="header-overlay">
               <WebsiteHeader /> 
            </div>
          </div>
          <div className="homeScreen-Box2">
            <div className="homeScreen-Box3">
              <div>
                <div className="homeScreen-Txt1">Storage in Dubai</div>
                <div  className="homeScreen-Txt2">Unlimited storage anywhere</div>
                <div  className="homeScreen-Txt3"> anytime at minimum cost</div>
                <div className="homeScreen-Txt4"><Button>Get Quote</Button></div>
              </div>
              <HomeForm/>
            </div>
            
          </div>
        </div>
      </div>
    )
}
export default HomeScreen;

