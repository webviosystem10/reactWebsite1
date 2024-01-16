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
var checkin = localStorage.getItem("checkin");
var checkout = localStorage.getItem("checkout");
var area = localStorage.getItem("area");
var address = JSON.parse(localStorage.getItem("address"));
var hotels = JSON.parse(localStorage.getItem("hotels"));
var areaCode = localStorage.getItem("areaCode");
var hotelCode = localStorage.getItem("hotelCode");
var hotelPrice = localStorage.getItem("hotelPrice");
var fetchedIp = localStorage.getItem("fetchedIp");
var userCountry = localStorage.getItem("userCountry");
var userId = localStorage.getItem("userId");
var userName = localStorage.getItem("userName");
var loading = false;
var counter = "/";
var leadId = null;
var airline = "";
var userProfile = "";
var userBookingFlight = "";
var userBookingHotel = "";
var userBookingCar = "";
var coupenCode = "";
var wallet = "";
var notification = "";
var blog = localStorage.getItem("blog");
var blogCategory = localStorage.getItem("blogCategory");
var blogPage = 1;
var compareClick = false;
var percentage = localStorage.getItem("percentage");
var selectedAirlines = JSON.parse(localStorage.getItem("selectedAirlines"));

var dashboard = "dashboard";
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
  leadId,
  area,
  checkout,
  checkin,
  address,
  hotels,
  areaCode,
  hotelCode,
  hotelPrice,
  airline,
  fetchedIp,
  userCountry,
  dashboard,
  userId,
  userName,
  userProfile,
  userBookingFlight,
  userBookingHotel,
  userBookingCar,
  coupenCode,
  wallet,
  notification,
  blog,
  blogCategory,
  blogPage,
  selectedAirlines,
  percentage,
  compareClick,
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
    case "SET_CHECKIN":
      return { ...state, checkin: action.checkin };
    case "SET_CHECKOUT":
      return { ...state, checkout: action.checkout };
    case "SET_AREA":
      return { ...state, area: action.area };
    case "SET_ADDRESS":
      return { ...state, address: action.address };
    case "SET_HOTELS":
      return { ...state, hotels: action.hotels };
    case "SET_AREACODE":
      return { ...state, areaCode: action.areaCode };
    case "SET_HOTELCODE":
      return { ...state, hotelCode: action.hotelCode };
    case "SET_HOTELPRICE":
      return { ...state, hotelPrice: action.hotelPrice };
    case "SET_AIRLINE":
      return { ...state, airline: action.airline };
    case "SET_FETCHEDIP":
      return { ...state, fetchedIp: action.fetchedIp };
    case "SET_USERCOUNTRY":
      return { ...state, userCountry: action.userCountry };
    case "SET_USERID":
      return { ...state, userId: action.userId };
    case "SET_DASHBOARD":
      return { ...state, dashboard: action.dashboard };
    case "SET_USERNAME":
      return { ...state, userName: action.userName };
    case "SET_USERPROFILE":
      return { ...state, userProfile: action.userProfile };
    case "SET_FLIGHTBOOKING":
      return { ...state, userBookingFlight: action.userBookingFlight };
    case "SET_HOTELBOOKING":
      return { ...state, userBookingHotel: action.userBookingHotel };
    case "SET_CARBOOKING":
      return { ...state, userBookingCar: action.userBookingCar };
    case "SET_COUPON":
      return { ...state, coupenCode: action.coupenCode };
    case "SET_WALLET":
      return { ...state, wallet: action.wallet };
    case "SET_NOTIFICATION":
      return { ...state, notification: action.notification };
    case "SET_BLOG":
      return { ...state, blog: action.blog };
    case "SET_BLOGCATEGORY":
      return { ...state, blogCategory: action.blogCategory };
    case "SET_BLOGPAGE":
      return { ...state, blogPage: action.blogPage };
    case "SET_SELECTEDAIRLINES":
      return { ...state, selectedAirlines: action.selectedAirlines };
    case "SET_PERCENTAGE":
      return { ...state, percentage: action.percentage };
    case "SET_COMPARECLICK":
      return { ...state, compareClick: action.compareClick };
    default:
      return state;
  }
};

export default counterReducer;
