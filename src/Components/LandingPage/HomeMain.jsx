import LandingPage2 from "./LandingPage2";
import LandingPage3 from "./LandingPage3";
import LandingPage4 from "./LandingPage4";
import LandingPage5 from "./LandingPage5";
import LandingPage6 from "./LandingPage6";
import Banner from "./Banner";
import LandingPageNewUpdated from "./LandingPageNewUpdated";

const HomeMain = () =>{
    return (
        <div>
            <Banner/>
            <LandingPage2/>
            <LandingPage3/>
            <LandingPage4/>
            <LandingPage5/>
            <LandingPage6/>
            {/* <LandingPageNew/> */}
            <LandingPageNewUpdated/>
        </div>
    )
}

export default HomeMain;