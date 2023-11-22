import HomeScreen from "./App/homeScreen";
import OfferScreen from "./App/offerScreen";
import HomeForm from "./component/form";
import WebsiteFooter from "./component/websiteFooter";
import WebsiteHeader from "./component/websiteHeader";
import Home from "./App";
import TypeScreen from "./App/typeScreen";
import ClientScreen from "./App/clientScreen";
import ButtonScreen from "./App/buttonScreen";
function App(){
  return(
    <div>
      <HomeScreen/>
        {/* <WebsiteHeader/>   */}
       <OfferScreen/>
       <TypeScreen/>
       <ClientScreen/> 
       <ButtonScreen/> 
       <WebsiteFooter/>
    </div>
  );
}

export default App;