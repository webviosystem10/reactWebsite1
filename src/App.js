import {BrowserRouter as Router,Route,Routes, Navigate, redirect} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import FlightSearch from './Components/Pages/FlightSearch';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import FlightNotFound from './Components/Pages/FlightNotFound';
import About from './Components/Pages/About';
import Flights from './Components/Pages/Flights';
import Contact from './Components/Pages/Contact';
import FlightLoader from './Components/Pages/FlightLoader';
import FlightBooking from './Components/Pages/FlightBooking';
import Sitemap from './Components/Pages/Sitemap';
import AirCanada from './Components/Pages/AllFlights/AirCanada';
import AlaskaAir from './Components/Pages/AllFlights/AlaskaAir';
import Delta from './Components/Pages/AllFlights/Delta';
import JetBlue from './Components/Pages/AllFlights/JetBlue';
import Qatar from './Components/Pages/AllFlights/Qatar';
import Aeromexico from './Components/Pages/AllFlights/Aeromexico';
import Emirate from './Components/Pages/AllFlights/Emirate';
import Frontire from './Components/Pages/AllFlights/Frontire';
import SouthWest from './Components/Pages/AllFlights/SouthWest';
import Westjet from './Components/Pages/AllFlights/Westjet';
import AirFrance from './Components/Pages/AllFlights/AirFrance';
import Etihad from './Components/Pages/AllFlights/Etihad';
import United from './Components/Pages/AllFlights/United';
import American from './Components/Pages/AllFlights/American';
import Hawaiin from './Components/Pages/AllFlights/Hawaiin';
import Spirit from './Components/Pages/AllFlights/Spirit';
import Lufthansa from './Components/Pages/AllFlights/Lufthansa';
import British from './Components/Pages/AllFlights/British';
import Turkish from './Components/Pages/AllFlights/Turkish';
import Klm from './Components/Pages/AllFlights/Klm';
import AirEuropa from './Components/Pages/AllFlights/AirEuropa';
import AirNewZeland from './Components/Pages/AllFlights/AirNewZeland';
import AllNippon from './Components/Pages/AllFlights/AllNippon';
import Alligent from './Components/Pages/AllFlights/Alligent';
import Avianca from './Components/Pages/AllFlights/Avianca';
import Brussels from './Components/Pages/AllFlights/Brussels';
import ElAl from './Components/Pages/AllFlights/ElAl';
import EvaAir from './Components/Pages/AllFlights/EvaAir';
import Iberia from './Components/Pages/AllFlights/Iberia';
import Iceland from './Components/Pages/AllFlights/Iceland';
import Lynx from './Components/Pages/AllFlights/Lynx';
import RoyalAir from './Components/Pages/AllFlights/RoyalAir';
import RoyalAirMarcos from './Components/Pages/AllFlights/RoyalAirMarcos';
import Sas from './Components/Pages/AllFlights/Sas';
import Saudi from './Components/Pages/AllFlights/Saudi';
import Singapore from './Components/Pages/AllFlights/Singapore';
import Swiss from './Components/Pages/AllFlights/Swiss';
import Tap from './Components/Pages/AllFlights/Tap';
import Tunis from './Components/Pages/AllFlights/Tunis';
import Korean from './Components/Pages/AllFlights/Korean';
import Ethiopion from './Components/Pages/AllFlights/Ethiopion';
import Australian from './Components/Pages/AllFlights/Australian';
import Sunwing from './Components/Pages/AllFlights/Sunwing';
import Phillipin from './Components/Pages/AllFlights/Phillipin';
import Lot from './Components/Pages/AllFlights/Lot';
import Cathay from './Components/Pages/AllFlights/Cathay';
import Flair from './Components/Pages/AllFlights/Flair';
import AirTransat from './Components/Pages/AllFlights/AirTransat';
import TermsConditions from './Components/Pages/TermsConditions';
import RefundPolicy from './Components/Pages/RefundPolicy';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import ThankYou from './Components/Pages/ThankYou';
import Business from './Components/Pages/Business';
import FirstClass from './Components/Pages/FirstClass';
function App() {
  return (
   <>
   <Provider store={store}>
   <Router basename='/reactweb' >
   {/* <Router>  */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/first-class" element={<FirstClass/>} />
      <Route path="/business-class" element={<Business/>} />
      <Route path="/thank-you" element={<ThankYou/>} />
      <Route path="/air-transat" element={<AirTransat/>} />
      <Route path="/flair-airline" element={<Flair/>} />
      <Route path="/cathay-pacific-airline" element={<Cathay/>} />
      <Route path="/lot-polish-airline" element={<Lot/>} />
      <Route path="/phillipine-airline" element={<Phillipin/>} />
      <Route path="/sunwing-airline" element={<Sunwing/>} />
      <Route path="/qantas-airline" element={<Australian/>} />
      <Route path="/ethiopian-airline" element={<Ethiopion/>} />
      <Route path="/korean-airline" element={<Korean/>} />
      <Route path="/tunis-airline" element={<Tunis/>} />
      <Route path="/tap-portugal-airline" element={<Tap/>} />
      <Route path="/swiss-airline" element={<Swiss/>} />
      <Route path="/singapore-airline" element={<Singapore/>} />
      <Route path="/saudi-airline" element={<Saudi/>} />
      <Route path="/sas-airline" element={<Sas/>} />
      <Route path="/royal-airmaroc-airline" element={<RoyalAirMarcos/>} /> 
      <Route path="/Royal-Air-Jordanian-airline" element={<RoyalAir/>} />
      <Route path="/lynx-airline" element={<Lynx/>} />
      <Route path="/iceland-airline" element={<Iceland/>} />
      <Route path="/iberia-airline" element={<Iberia/>} />
      <Route path="/eva-airline" element={<EvaAir/>} />
      <Route path="/el-al-airline" element={<ElAl/>} />
      <Route path="/brussels-airline" element={<Brussels/>} />
      <Route path="/avianca-airline" element={<Avianca/>} />
      <Route path="/allegient-airline" element={<Alligent/>} />
      <Route path="/all-nippon-airline" element={<AllNippon/>} />
      <Route path="/air-newzealand-airline" element={<AirNewZeland/>} />
      <Route path="/air-europa-airline" element={<AirEuropa/>} />
      <Route path="/klm-royal-dutch-airline" element={<Klm/>} />
      <Route path="/turkish-airline" element={<Turkish/>} />
      <Route path="/british-airline" element={<British/>} />
      <Route path="/lufthansa-airline" element={<Lufthansa/>} />
      <Route path="/spirit-airline" element={<Spirit/>} />
      <Route path="/hawaiian-airline" element={<Hawaiin/>} />
      <Route path="/american-airline" element={<American/>} />
      <Route path="/united-airline" element={<United/>} />
      <Route path="/etihad-airline" element={<Etihad/>} />
      <Route path="/air-france" element={<AirFrance/>} />
      <Route path="/westjet-airline" element={<Westjet/>} />
      <Route path="/southwest-airline" element={<SouthWest/>} />
      <Route path="/frontiar-airline" element={<Frontire/>} />
      <Route path="/emirates-airline" element={<Emirate/>} />
      <Route path="/aeromexico-airline" element={<Aeromexico/>} />
      <Route path="/qatar" element={<Qatar/>} />
      <Route path="/jetBlue-airline" element={<JetBlue/>} />
      <Route path="/delta-airline" element={<Delta/>} />
      <Route path="/alaska-airline" element={<AlaskaAir/>} />
      <Route path="/sitemap" element={<Sitemap/>} />
      <Route path="/air-canada" element={<AirCanada/>} />
      <Route path="/flight-review" element={<FlightBooking/>} />
      <Route path="/loader" element={<FlightLoader/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/flights" element={<Flights/>} />
      <Route path="/about-us" element={<About/>} />
      <Route path="/flight-not-found" element={<FlightNotFound/>} />
      <Route path="/flight-search"  element={<FlightSearch/>} />
      <Route path="/terms-conditions" element={<TermsConditions/>} />
      <Route path="/refund-policy" element={<RefundPolicy/>} /> 
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    <Footer/>
   </Router>
   </Provider>
   
   </>
  );
}

export default App;
