// reducer.js
var offer = { offer: JSON.parse(localStorage.getItem("offer")) };
var departure = localStorage.getItem("departure");
var arrival = localStorage.getItem("arrival");
var arrivalDate = localStorage.getItem("arrivalDate");
var departureDate = localStorage.getItem("departureDate");
var arrivalItaCode = localStorage.getItem("arrivalItaCode");
var departureItaCode = localStorage.getItem("departureItaCode");
var tripClass = localStorage.getItem("tripClass");
var totalPassenger = localStorage.getItem("totalPassenger");
var airlines = { airlines: JSON.parse(localStorage.getItem("airlines")) };
var adult = localStorage.getItem("adult");
var children = localStorage.getItem("children");
var infants = localStorage.getItem("infants");
var lastOffer = JSON.parse(localStorage.getItem("lastOffer"));
var flightWay = localStorage.getItem("flightWay");
var loading = false;
var counter = "/";
var leadId = null
const initialState = {
  offer,
  departure,
  arrival,
  arrivalDate,
  departureDate,
  arrivalItaCode,
  departureItaCode,
  airlines,
  tripClass,
  totalPassenger,
  adult,
  children,
  infants,
  loading,
  lastOffer,
  flightWay,
  counter,
  leadId
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_OFFER":
      return { ...state, offer: action.payload };
    case "SET_DEPARTURE":
      return { ...state, departure: action.departure };
    case "SET_ARRIVAL":
      return { ...state, arrival: action.arrival };
    case "SET_ARRIVALDATE":
      return { ...state, arrivalDate: action.arrivalDate };
    case "SET_DEPARTUREDATE":
      return { ...state, departureDate: action.departureDate };
    case "SET_DEPARTUREITACODE":
      return { ...state, departureItaCode: action.departureItaCode };
    case "SET_ARRIVALITACODE":
      return { ...state, arrivalItaCode: action.arrivalItaCode };
    case "SET_AIRLINES":
      return { ...state, airlines: action.airlines };
    case "SET_TRIPCLASS":
      return { ...state, tripClass: action.tripClass };
    case "SET_TOTALPASSENGER":
      return { ...state, totalPassenger: action.totalPassenger };
    case "SET_ADULT":
      return { ...state, adult: action.adult };
    case "SET_CHILDREN":
      return { ...state, children: action.children };
    case "SET_INFANTS":
      return { ...state, infants: action.infants };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_LASTOFFER":
      return { ...state, lastOffer: action.lastOffer };
    case "SET_FLIGHTWAY":
      return { ...state, flightWay: action.flightWay };
    case "SET_COUNTER":
      return { ...state, counter: action.counter };
    case "SET_LEADID":
      return { ...state, leadId: action.leadId };
    default:
      return state;
  }
};

export default counterReducer;
