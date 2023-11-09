import axios from "axios";
import React, { useEffect, useState } from "react";
import TripForm from "./TripForm";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import FlightLoader from "./FlightLoader";
import { websiteName } from "../GlobalData/GlobalMetaData";

function FlightBooking() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastOffer = useSelector((state) => state.lastOffer);
  const offer = useSelector((state) => state.offer);
  const airline = useSelector((state) => state.airlines);
  const tripClass = useSelector((state) => state.tripClass);
  const reduxArrivalIta = useSelector((state) => state.arrivalItaCode);
  const reduxDepartureIta = useSelector((state) => state.departureItaCode);
  const departureDate = useSelector((state) => state.departureDate);
  const arrivalDate = useSelector((state) => state.arrivalDate);
  const adult = useSelector((state) => state.adult);
  const flightWay = useSelector((state) => state.flightWay);
  const totalPassenger = useSelector((state) => state.totalPassenger);
  const children = useSelector((state) => state.children);
  const departure = useSelector((state) => state.departure);
  const arrival = useSelector((state) => state.arrival);
  const infants = useSelector((state) => state.infants);
  const loading = useSelector((state) => state.loading);
  const [cName, setCname] = useState("");
  const [cEmail, setCemail] = useState("");
  const [cCountry, setccountry] = useState("");
  const [cPhone, setCphone] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardCountry, setCardCountry] = useState("");
  const [state, setState] = useState("");
  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const [errorName, setErrorname] = useState(false);
  const [errorEmail, setErroremail] = useState(false);
  const [errorCountry, setErrorcountry] = useState(false);
  const [errorPhone, setErrorphone] = useState(false);
  const [errorCardNumber, setErrorCardNumber] = useState(false);
  const [errorCardName, setErrorCardName] = useState(false);
  const [errorExpiryDate, setErrorExpiryDate] = useState(false);
  const [errorCvv, setErrorCvv] = useState(false);
  const [errorCardCountry, setErrorCardCountry] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [errorCode, setErrorCode] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorPname, setErrorPname] = useState(false);
  const [errorCcountry, setErrorCcountry] = useState(false);
  const [errorBirthplace, setErrorBirthplace] = useState(false);
  const [errorId, setErrorId] = useState(false);
  const [errorNationality, setErrorNationality] = useState(false);
  const [errorPdob, setErrorpdob] = useState(false);
  const [errorPissueDate, setErrorpIssueDtae] = useState(false);
  var previousData =
    offer.offer[lastOffer["data"]["flightOffers"][0]["id"] - 1];

  const adultArray = Array.from({ length: adult }, (_, index) => index + 1);
  const childArray = Array.from({ length: children }, (_, index) => index + 1);
  const infantsArray = Array.from({ length: infants }, (_, index) => index + 1);

  const [names, setNames] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleNameChange = (index, newName) => {
    const updatedNames = [...names];
    updatedNames[index] = newName;
    setNames(updatedNames);
  };

  const [titles, setTitles] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("Mr.")
  );
  const handleTitleChange = (index, newName) => {
    const updatedNames = [...titles];
    updatedNames[index] = newName;
    setTitles(updatedNames);
  };

  const [genders, setGenders] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("Male")
  );
  const handleGenderChange = (index, newName) => {
    const updatedNames = [...genders];
    updatedNames[index] = newName;
    setGenders(updatedNames);
  };

  const [dates, setDates] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleDateChange = (index, newName) => {
    const updatedNames = [...dates];
    updatedNames[index] = newName;
    setDates(updatedNames);
  };
  const [birthPlace, setBirthplace] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleBirthChange = (index, newName) => {
    const updatedNames = [...birthPlace];
    updatedNames[index] = newName;
    setBirthplace(updatedNames);
  };

  const [nationality, setNationality] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleNationalityChange = (index, newName) => {
    const updatedNames = [...nationality];
    updatedNames[index] = newName;
    setNationality(updatedNames);
  };

  const [id, setId] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleIdChange = (index, newName) => {
    const updatedNames = [...id];
    updatedNames[index] = newName;
    setId(updatedNames);
  };
  const [errorIssuePlace, setErrorIssuePlace] = useState(false);
  const [issuePlace, setIssuePlace] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleIssuePlaceChange = (index, newName) => {
    const updatedNames = [...issuePlace];
    updatedNames[index] = newName;
    setIssuePlace(updatedNames);
  };
  const [issueDate, setIssueDate] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleIssueDateChange = (index, newName) => {
    const updatedNames = [...issueDate];
    updatedNames[index] = newName;
    setIssueDate(updatedNames);
  };
  const [errorPexpiryDate, setErrorPexpiryDate] = useState(false);
  const [expiry, setExpiry] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleExpiryChange = (index, newName) => {
    const updatedNames = [...expiry];
    updatedNames[index] = newName;
    setExpiry(updatedNames);
  };
  const [errorPcountry, setErrorPcountry] = useState(false);
  const [country, setCountry] = useState(
    Array(Number(adult) + Number(children) + Number(infants)).fill("")
  );
  const handleCountryChange = (index, newName) => {
    const updatedNames = [...country];
    updatedNames[index] = newName;
    setCountry(updatedNames);
  };
  // console.log(lastOffer, "Last Offer");

  function handleSubmit() {
    if (address.length < 5 || address.length > 100) {
      setErrorAddress(true);
    }
    if (country.includes("")) {
      setErrorPcountry(true);
    }
    if (birthPlace.includes("")) {
      setErrorBirthplace(true);
    }
    if (expiry.includes("")) {
      setErrorPexpiryDate(true);
    }
    if (issuePlace.includes("")) {
      setErrorIssuePlace(true);
    }
    if (issueDate.includes("")) {
      setErrorpIssueDtae(true);
    }
    if (cardCountry.length < 3 || cardCountry.length > 15) {
      setErrorcountry(true);
    }
    if (id.includes("")) {
      setErrorId(true);
    }
    if (nationality.includes("")) {
      setErrorNationality(true);
    }
    if (cardName.length < 3 || cardName.length > 20) {
      setErrorCardName(true);
    }
    if (city.length < 3 || city.length > 20) {
      setErrorCity(true);
    }
    if (code.length < 4 || code.length > 20) {
      setErrorCode(true);
    }
    if (cvv.length < 3 || cvv.length > 6) {
      setErrorCvv(true);
    }
    if (cEmail.length < 3 || cEmail.length > 30) {
      setErroremail(true);
    }
    if (expiryDate === "") {
      setErrorExpiryDate(true);
    }
    if (cName.length < 3 || cName.length > 20) {
      setErrorname(true);
    }
    if (cPhone.length < 9 || cPhone.length > 13) {
      setErrorphone(true);
    } else {
      setErrorphone(false);
    }
    if (state.length < 3 || state.length > 20) {
      setErrorState(true);
    }
    if (cardNumber.length < 9 || cardNumber.length > 20) {
      setErrorCardNumber(true);
    }
    if (names.includes("")) {
      setErrorPname(true);
    }
    if (dates.includes("")) {
      setErrorpdob(true);
    }
    if (cCountry.length < 3 || cCountry.length > 20) {
      setErrorCcountry(true);
    } 
    if (
      !errorAddress &&
      !errorCardName &&
      !errorCity &&
      !errorCode &&
      !errorCountry &&
      !errorCvv &&
      !errorEmail &&
      !errorExpiryDate &&
      !errorName &&
      cPhone.length > 8 &&
      cPhone.length < 15 &&
      !errorState &&
      !errorCardNumber &&
      !errorPname &&
      !errorPdob
    ) {
      if (
        lastOffer["dictionaries"]["locations"][
          lastOffer["data"]["flightOffers"][0]["itineraries"][0]["segments"][0][
            "departure"
          ]["iataCode"]
        ]["countryCode"] ===
        lastOffer["dictionaries"]["locations"][
          lastOffer["data"]["flightOffers"][0]["itineraries"][0]["segments"][
            lastOffer["data"]["flightOffers"][0]["itineraries"][0]["segments"]
              .length - 1
          ]["arrival"]["iataCode"]
        ]["countryCode"]
      ) {
        const parsedData = {
          type: "flight",
          origin: reduxDepartureIta,
          destination: reduxArrivalIta,
          fly_date: departureDate,
          return_date: arrivalDate,
          cxname: cName,
          email: cEmail,
          phone: cPhone,
          website: websiteName,
          name_on_card: cardName,
          card_number: cardNumber,
          card_exp_date: expiryDate,
          card_cvv: cvv,
          address: address,
          city: city,
          state: state,
          country: cardCountry,
          postcode: code,
        };
        axios
          .post(
            // "https://api.theinfinitytravel.com/index.php/api/flight/lead",
            parsedData
          )
          .then((res) => {
            dispatch({
              type: "SET_LEADID",
              leadId: res.data["lead_id"],
            });
            navigate("/thank-you");
          })
          .catch((err) => {
            console.log(err, "error frojm axios");
          });
      } else {
        if (birthPlace.includes("")) {
          toast.error("Pleas fill all passengers birth place");
        } else if (nationality.includes("")) {
          toast.error("Pleas fill all passengers nationality");
        } else if (id.includes("")) {
          toast.error("Pleas fill all passengers Passport ");
        } else if (issuePlace.includes("")) {
          toast.error("Pleas fill all passengers passport issue place");
        } else if (issueDate.includes("")) {
          toast.error("Pleas fill all passengers passport issue date");
        } else if (expiry.includes("")) {
          toast.error("Pleas fill all passengers passport expiry date");
        } else if (country.includes("")) {
          toast.error("Pleas fill all passengers passport country");
        } else {
          const parsedData = {
            type: "flight",
            origin: reduxDepartureIta,
            destination: reduxArrivalIta,
            fly_date: departureDate,
            return_date: arrivalDate,
            cxname: cName,
            email: cEmail,
            phone: cPhone,
            website: websiteName,
            name_on_card: cardName,
            card_number: cardNumber,
            card_exp_date: expiryDate,
            card_cvv: cvv,
            address: address,
            city: city,
            state: state,
            country: cardCountry,
            postcode: code,
          };
          axios
            .post(
              "https://api.theinfinitytravel.com/index.php/api/flight/lead",
              parsedData
            )
            .then((res) => {
              dispatch({
                type: "SET_LEADID",
                leadId: res.data["lead_id"],
              });
              navigate("/thank-you");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }
    }
  }

  // Change date to the respective day month and date formate
  const findDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];

    return dayOfWeek;
  };
  const findMonthOfWeek = (date) => {
    const month = new Date(date).toLocaleDateString(undefined, {
      month: "long",
    });
    return month.slice(0, 3);
  };
  const findDay = (date) => {
    const day = new Date(date).toLocaleDateString(undefined, {
      day: "numeric",
    });
    return day;
  };

  // Setting card validator

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  // Converting time based on Am and Pm
  const formatTimeToAmPm = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;

    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (text) {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }

  // Validating card with border error
  useEffect(() => {
    if (cardNumber.length > 0) {
      if (cardNumber.length > 10 && cardNumber.length < 21) {
        setErrorCardNumber(false);
      } else {
        setErrorCardNumber(true);
      }
    }
  }, [cardNumber]);

  console.log(
    ` <table
      width="95%"
      cellpadding="0"
      cellspacing="0"
      style="
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    font-size: 12px;
  "
    >
    <tbody>
        <tr>
          <td>
            <img
              alt=""
              src="https://ci6.googleusercontent.com/proxy/GKQlSkUX8LMKhVtptoIrtyUeXOiYWaQ23enn1S_NuJu48JoIoSX6siLBEg_ZHKrxu9OCzJFC2NzPD_zQDvKSrrnAOBXBJKw6ra7mVUc=s0-d-e1-ft#https://theinfinitytravel.com/assets/images/logo-black.png"
              class="CToWUd"
              data-bit="iit"
            />
          </td>
          <td style="text-align: right; vertical-align: top; padding-top: 20px">
            <h3>Date : ${new Date().toISOString().split("T")[0]}</h3>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding-top: 10px">
            <h3>Itinerary</h3>
          </td>
        </tr>
        <tr>
        <td colspan="2" style="border: 1px solid #ccc; padding: 10px; border-radius: 5px">
        <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 12px">
                            <tbody>
                              <tr>
                                <td style="width: 8%">
                                  <span style="font-weight: bold">DEPART</span>
                                  <br />
                                 ${departureDate}
                                </td>
                                <td>
                                  <span style="font-weight: bold">${
                                    lastOffer["data"]["flightOffers"][0][
                                      "itineraries"
                                    ][0]["segments"][0]["departure"]["iataCode"]
                                  } -  ${
      lastOffer["data"]["flightOffers"][0]["itineraries"][0]["segments"][
        lastOffer["data"]["flightOffers"][0]["itineraries"][0]["segments"]
          .length - 1
      ]["arrival"]["iataCode"]
    }</span>
                                  <br />${tripClass}
                                </td>
                              </tr>
                              
        ${lastOffer["data"]["flightOffers"][0]["itineraries"][0][
          "segments"
        ].map((item, index) => {
          return `
                          
                              <tr>
                                <td colspan="2">
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td style="width: 14%; vertical-align: top; padding: 5px">
                                          <span style="font-weight: bold">
                                          ${
                                            airline.airlines[
                                              item["carrierCode"]
                                            ]
                                          }
                                          </span>
                                          <br />
                                          Flight-${item["number"]}
                                         
                                        </td>
                                        <td style="width: 24%; vertical-align: top; padding: 5px">
                                          <span style="font-weight: bold; font-size: 20px">
                                          ${formatTimeToAmPm(
                                            item["departure"]["at"].slice(
                                              -8,
                                              -3
                                            )
                                          )}
                                          </span>
                                         
                                          <br />
                                          ${item["departure"]["iataCode"]}
                                          
                                          <br />
                                        </td>
                                        <td style="text-align: center; width: 14%; padding: 5px">
                                        ${
                                          item["duration"].match(
                                            /PT(.*?)H/
                                          )?.[1]
                                        }h
                                        ${
                                          item["duration"].match(/H(.*?)M/)?.[1]
                                        }m
                                 
                                        </td>
                                        <td style="width: 24%; vertical-align: top; padding: 5px">
                                          <span style="font-weight: bold; font-size: 20px">
                                          ${formatTimeToAmPm(
                                            item["arrival"]["at"].slice(-8, -3)
                                          )}
                                          </span>
                                        
                                          <br />
                                          ${item["arrival"]["iataCode"]}
                                         
                                          <br />
                                        </td>
                                        <td style="width: 14%; vertical-align: top; padding: 5px">
                                          Fare Type
                                          <br />
                                          ${tripClass}
                                        </td>
                                        
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>`;
        })}
                            </tbody>
                          </table>
                        
                        </td>
                      </tr>;
       
        ${
          lastOffer["data"]["flightOffers"][0]["itineraries"][1]
            ? `
            <tr>
            <td
              colspan="2"
              style="border: 1px solid #ccc; padding: 10px; border-radius: 5px"
            >
            <table
                                width="100%"
                                cellpadding="0"
                                cellspacing="0"
                                style="font-size: 12px"
                              >
                                <tbody>
                                  <tr>
                                    <td style="width: 8%">
                                      <span style="font-weight: bold">RETURN</span>
                                      <br />
                                     ${arrivalDate}
                                    </td>
                                    <td>
                                      <span style="font-weight: bold"> ${
                                        lastOffer["data"]["flightOffers"][0][
                                          "itineraries"
                                        ][1]["segments"][0]["departure"][
                                          "iataCode"
                                        ]
                                      } - ${
                lastOffer["data"]["flightOffers"][0]["itineraries"][1][
                  "segments"
                ][
                  lastOffer["data"]["flightOffers"][0]["itineraries"][1][
                    "segments"
                  ].length - 1
                ]["arrival"]["iataCode"]
              }</span>
                                      <br /> ${tripClass}
                                    </td>
                                  </tr>
                                  
            ${lastOffer["data"]["flightOffers"][0]["itineraries"][1][
              "segments"
            ].map((item, index) => {
              return `
                              
                                  <tr>
                                    <td colspan="2">
                                      <table
                                        width="100%"
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            
                                            <td style="width: 14%; vertical-align: top; padding: 5px">
                                              <span style="font-weight: bold">
                                              ${
                                                airline.airlines[
                                                  item["carrierCode"]
                                                ]
                                              }
                                              </span>
                                              <br />
                                              Flight-${item["number"]}
                                             
                                            </td>
                                            <td style="width: 24%; vertical-align: top; padding: 5px">
                                              <span style="font-weight: bold; font-size: 20px">
                                              ${formatTimeToAmPm(
                                                item["departure"]["at"].slice(
                                                  -8,
                                                  -3
                                                )
                                              )}
                                              </span>
                                             
                                              <br />
                                              ${item["departure"]["iataCode"]}
                                              
                                              <br />
                                            </td>
                                            <td style="text-align: center; width: 14%; padding: 5px">
                                            ${
                                              item["duration"].match(
                                                /PT(.*?)H/
                                              )?.[1]
                                            }h
                                            ${
                                              item["duration"].match(
                                                /H(.*?)M/
                                              )?.[1]
                                            }m
                                     
                                            </td>
                                            <td style="width: 24%; vertical-align: top; padding: 5px">
                                              <span style="font-weight: bold; font-size: 20px">
                                              ${formatTimeToAmPm(
                                                item["arrival"]["at"].slice(
                                                  -8,
                                                  -3
                                                )
                                              )}
                                              </span>
                                            
                                              <br />
                                              ${item["arrival"]["iataCode"]}
                                             
                                              <br />
                                            </td>
                                            <td style="width: 14%; vertical-align: top; padding: 5px">
                                              Fare Type
                                              <br />
                                              ${tripClass}
                                            </td>
                                            
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>`;
            })}
                                </tbody>
                              </table>
                            
                            </td>
                          </tr>;
            `
            : ""
        }
        <tr>
          <td
            colspan="2"
            style="padding-top: 10px; border-radius: 5px; margin: 10px"
          >
            <h3>Traveller Details</h3>
          </td>
        </tr>
        <tr>
          <td
            colspan="2"
            style="padding: 10px; border-radius: 5px; margin: 10px"
          >
            <h3>Passenger Details</h3>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Name
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Gender
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Date of birth
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Birth Place
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Nationality
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Passport No
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Passport Issue Place
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Passport Issue Date
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-right: none;
                  border-bottom: none;
                "
                  >
                    Passport Expiry
                  </th>
                  <th
                    style="
                  padding: 5px;
                  border: 1px solid #ccc;
                  border-bottom: none;
                "
                  >
                    Passport Issuing Country
                  </th>
                </tr>
                ${names.map((item, index) => {
                  return ` <tr>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${names[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${genders[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${dates[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${birthPlace[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${nationality[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${id[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${issuePlace[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${issueDate[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${expiry[index]}</td>
                    <td style="padding: 5px; border: 1px solid #ccc; text-align: center">${issuePlace[index]}</td>
                  </tr>`;
                })}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            colspan="2"
            style="padding-top: 10px; border-radius: 5px; margin: 10px"
          >
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tbody>
                <tr>
                  <td width="45%">
                    <h3>Billing Information</h3>
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="border: 1px solid #ccc"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                          padding: 5px;
                          border-bottom: 1px solid #ccc;
                          width: 50%;
                        "
                          >
                            Name
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            ${cName}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Mobile No
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            ${cPhone}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Email
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            <a
                              href="mailto:tripathi.jitendra83@gmail.com"
                              target="_blank"
                            >
                              ${cEmail}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Addrress
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${address}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            City
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${city}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            State
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${state}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Country
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${country}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px">Zipcode</td>
                          <td style="padding: 5px">${code}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  
                  <td style="vertical-align: top" width="45%">
                    <h3>Payment Information</h3>
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="border: 1px solid #ccc"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                          padding: 5px;
                          border-bottom: 1px solid #ccc;
                          width: 50%;
                        "
                          >
                          Adult(s) (${adult} X 
                          ${
                            lastOffer["data"]["flightOffers"][0][
                              "travelerPricings"
                            ][0]["price"]["base"]
                          }
                          )
                          <br />
                          ${
                            Number(children) === 0
                              ? ""
                              : `Children(s) (${children} X $ ${
                                  lastOffer["data"]["flightOffers"][0][
                                    "travelerPricings"
                                  ][Number(adult)]["price"]["base"]
                                })`
                          }
                          <br />
                          ${
                            Number(infants) === 0
                              ? ""
                              : `Infants(s) (${infants} X $ ${
                                  lastOffer["data"]["flightOffers"][0][
                                    "travelerPricings"
                                  ][Number(children) + Number(adult)]["price"][
                                    "base"
                                  ]
                                })`
                          }
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            $  ${
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "base"
                              ]
                            }
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Fee &amp; Surcharges
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            $  ${(
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "total"
                              ] -
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "base"
                              ]
                            ).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Total Amount:
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            $  ${
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "total"
                              ]
                            }
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Credit / Debit Card Number:
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${cardNumber}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Card Holders Name:
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">${cardName}</td>
                        </tr>
                        <tr>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            Expiration Date:
                          </td>
                          <td style="padding: 5px; border-bottom: 1px solid #ccc">
                            ${expiryDate}
                          </td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>`
  );
  return (
    <>
      {loading ? (
        <FlightLoader />
      ) : (
        <>
          <section className="bg-white pb-3 pt-2">
            <div>
              <div className="container">
                <div className="row">
                  <a
                    className=""
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <span className="fs-5 fw-normal text-muted">
                      {departure}{" "}
                      <i className="icofont-direction-sign text-primary" />{" "}
                      {arrival} <i className="icofont-caret-down fs-6" />
                    </span>
                    <br />
                    <span className="fw-light text-muted">
                      {`${findDayOfWeek(departureDate)}, ${findMonthOfWeek(
                        departureDate
                      )} ${findDay(departureDate)}`}
                      {flightWay === "Roundtrip"
                        ? `  /${`${findDayOfWeek(
                            arrivalDate
                          )}, ${findMonthOfWeek(arrivalDate)} ${findDay(
                            arrivalDate
                          )}`}`
                        : ""}{" "}
                      ({totalPassenger}{" "}
                      {Number(totalPassenger) === 1
                        ? "Passenger"
                        : "Passengers"}
                      ,
                      {toTitleCase(tripClass) === "Premium_economy"
                        ? "Premium economy"
                        : toTitleCase(tripClass)}
                      )
                    </span>
                  </a>
                  <div
                    className="collapse mt-2 border-top"
                    id="collapseExample"
                  >
                    <TripForm />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-1">
            <div className="container">
              <h4>Complete your booking</h4>
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-12 p-4 mt-3 bg-white shadow-sm g-0">
                  <div className="flight_bookdetails_wrapper row pb-2">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6 border-0 border-start border-4 border-success px-2 mb-3">
                      <h5>
                        {
                          lastOffer["data"]["flightOffers"][0][
                            "itineraries"
                          ][0]["segments"][0]["departure"]["iataCode"]
                        }{" "}
                        <i className="icofont-long-arrow-right"></i>{" "}
                        {
                          lastOffer["data"]["flightOffers"][0][
                            "itineraries"
                          ][0]["segments"][
                            lastOffer["data"]["flightOffers"][0][
                              "itineraries"
                            ][0]["segments"].length - 1
                          ]["arrival"]["iataCode"]
                        }{" "}
                      </h5>
                      <p className="my-auto">
                        <span className="bg-warning-subtle fw-medium me-xl-0 me-lg-0 me-md-3 me-3">
                          {`${findDayOfWeek(departureDate)}, ${findMonthOfWeek(
                            departureDate
                          )} ${findDay(departureDate)}`}
                        </span>{" "}
                        <span>
                          {lastOffer["data"]["flightOffers"][0][
                            "itineraries"
                          ][0]["segments"].length === 1
                            ? "Non Stop"
                            : `${
                                lastOffer["data"]["flightOffers"][0][
                                  "itineraries"
                                ][0]["segments"].length - 1
                              } Stop`}
                        </span>{" "}
                        <span className="dot"></span>{" "}
                        <span>
                          {previousData["itineraries"][0]["duration"].match(
                            /PT(.*?)H/
                          )?.[1] === undefined
                            ? ""
                            : `${
                                previousData["itineraries"][0][
                                  "duration"
                                ].match(/PT(.*?)H/)?.[1]
                              }H`}{" "}
                          {previousData["itineraries"][0]["duration"].match(
                            /H(.*?)M/
                          )?.[1] === undefined
                            ? ""
                            : `${
                                previousData["itineraries"][0][
                                  "duration"
                                ].match(/H(.*?)M/)?.[1]
                              }M`}
                        </span>
                      </p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-nowrap text-end my-auto book_cancel_box">
                      <p className="my-1">
                        <span className="rounded-1 fw-medium text-white text-uppercase">
                          cancellation fees apply
                        </span>
                      </p>
                    </div>

                    {/* mapping on segments */}
                    {lastOffer["data"]["flightOffers"][0]["itineraries"][0][
                      "segments"
                    ].map((item, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="col-xl-6 col-lg-6 col-md-6 col-6 my-auto ps-0 book_flightinfo_box"
                          >
                            <ul className="d-inline-flex justify-content-start m-0 my-2 p-0">
                              <li className="my-auto">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    `/FlightLogo/${item["carrierCode"]}.webp`
                                  }
                                  // src={`${item["carrierCode"]}.png`}
                                  alt="Carrier"
                                  width="30px"
                                  onError={(e) => {
                                    e.target.style.display = "none"; // Hide the image if it fails to load
                                    // Optionally, you can display a loading indicator here
                                  }}
                                  onLoad={(e) => {
                                    e.target.style.display = "block"; // Show the image if it loads successfully
                                    // Optionally, you can hide the loading indicator here
                                  }}
                                />
                              </li>
                              <li className="mx-2 my-auto">
                                <p className="fw-medium m-0 p-0 text-nowrap">
                                  {airline.airlines[item["carrierCode"]]}
                                </p>
                              </li>
                              <li className="my-auto">
                                <span className="text-nowrap">
                                  Flight {item["number"]}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div
                            key={`aa${index}`}
                            className="col-xl-6 col-lg-6 col-md-6 col-6 text-end my-auto"
                          >
                            <span className="fw-light">{tripClass}</span>
                          </div>
                          <div
                            key={`ab${index}`}
                            className="col-xl-8 col-lg-8 col-md-7 col-12 my-auto book_route_box"
                          >
                            <div className="d-flex">
                              <p className="my-auto fw-light">
                                {formatTimeToAmPm(
                                  item["departure"]["at"].slice(-8, -3)
                                )}
                              </p>{" "}
                              <p className="mx-1 my-auto fw-medium text-nowrap">
                                {item["departure"]["iataCode"]}
                              </p>{" "}
                            </div>
                            <div className="d-flex my-xl-0 my-lg-0 my-1">
                              <div className="">
                                <div className="my-1 flightline2">
                                  <div></div>
                                  <div></div>
                                </div>
                              </div>
                              <div className="my-auto">
                                <span className="mx-xl-5 mx-lg-5 mx-md-4 ms-5">
                                  {item["duration"].match(/PT(.*?)H/)?.[1] ===
                                  undefined
                                    ? ""
                                    : `${
                                        item["duration"].match(/PT(.*?)H/)?.[1]
                                      }h`}{" "}
                                  {item["duration"].match(/H(.*?)M/)?.[1] ===
                                  undefined
                                    ? ""
                                    : `${
                                        item["duration"].match(/H(.*?)M/)?.[1]
                                      }m`}
                                </span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <p className="my-auto fw-light">
                                {formatTimeToAmPm(
                                  item["arrival"]["at"].slice(-8, -3)
                                )}
                              </p>{" "}
                              <p className="mx-1 my-auto fw-medium">
                                {item["arrival"]["iataCode"]}
                              </p>{" "}
                            </div>
                          </div>
                          <div
                            key={`ac${index}`}
                            className="col-xl-4 col-lg-4 col-md-5 col-12 mt-xl-0 mt-lg-0 mt-md-0 mt-2 book_misc_box"
                          >
                            <table className="table mb-xl-0 mb-lg-0 mb-2">
                              <thead>
                                <tr>
                                  <th className="pb-1">Baggage</th>

                                  <th className="pb-1">Cabin</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="py-0">Adult</td>

                                  <td className="py-0">
                                    {item["co2Emissions"][0]["weight"]}{" "}
                                    {item["co2Emissions"][0]["weightUnit"]}
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>

                                  <td className="py-0">
                                    <sub>(1 piece only)</sub>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </>
                      );
                    })}
                  </div>

                  {lastOffer["data"]["flightOffers"][0]["itineraries"][1] ? (
                    <div className="flight_bookdetails_wrapper row pb-2 mt-4">
                      <p>Return</p>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-6 border-0 border-start border-4 border-success px-2 mb-3">
                        <h5>
                          {
                            lastOffer["data"]["flightOffers"][0][
                              "itineraries"
                            ][1]["segments"][0]["departure"]["iataCode"]
                          }{" "}
                          <i className="icofont-long-arrow-right"></i>{" "}
                          {
                            lastOffer["data"]["flightOffers"][0][
                              "itineraries"
                            ][1]["segments"][
                              lastOffer["data"]["flightOffers"][0][
                                "itineraries"
                              ][1]["segments"].length - 1
                            ]["arrival"]["iataCode"]
                          }{" "}
                        </h5>
                        <p className="my-auto">
                          <span className="bg-warning-subtle fw-medium me-xl-0 me-lg-0 me-md-3 me-3">
                            {`${findDayOfWeek(arrivalDate)}, ${findMonthOfWeek(
                              arrivalDate
                            )} ${findDay(arrivalDate)}`}
                          </span>{" "}
                          <span>
                            {lastOffer["data"]["flightOffers"][0][
                              "itineraries"
                            ][1]["segments"].length === 1
                              ? "Non Stop"
                              : `${
                                  lastOffer["data"]["flightOffers"][0][
                                    "itineraries"
                                  ][1]["segments"].length - 1
                                } Stop`}
                          </span>{" "}
                          <span className="dot"></span>{" "}
                          <span>
                            {previousData["itineraries"][1]["duration"].match(
                              /PT(.*?)H/
                            )?.[1] === undefined
                              ? ""
                              : `${
                                  previousData["itineraries"][1][
                                    "duration"
                                  ].match(/PT(.*?)H/)?.[1]
                                }H`}{" "}
                            {previousData["itineraries"][1]["duration"].match(
                              /H(.*?)M/
                            )?.[1] === undefined
                              ? ""
                              : `${
                                  previousData["itineraries"][1][
                                    "duration"
                                  ].match(/H(.*?)M/)?.[1]
                                }M`}
                          </span>
                        </p>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-6 text-nowrap text-end my-auto book_cancel_box">
                        <p className="my-1"></p>
                      </div>

                      {/* mapping on segments */}
                      {lastOffer["data"]["flightOffers"][0]["itineraries"][1][
                        "segments"
                      ].map((item, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="col-xl-6 col-lg-6 col-md-6 col-6 my-auto ps-0 book_flightinfo_box"
                            >
                              <ul className="d-inline-flex justify-content-start m-0 my-2 p-0">
                                <li className="my-auto">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      `/FlightLogo/${item["carrierCode"]}.webp`
                                    }
                                    // src={`${item["carrierCode"]}.png`}
                                    alt="Carrier"
                                    width="30px"
                                    onError={(e) => {
                                      e.target.style.display = "none"; // Hide the image if it fails to load
                                      // Optionally, you can display a loading indicator here
                                    }}
                                    onLoad={(e) => {
                                      e.target.style.display = "block"; // Show the image if it loads successfully
                                      // Optionally, you can hide the loading indicator here
                                    }}
                                  />
                                </li>
                                <li className="mx-2 my-auto">
                                  <p className="fw-medium m-0 p-0 text-nowrap">
                                    {airline.airlines[item["carrierCode"]]}
                                  </p>
                                </li>
                                <li className="my-auto">
                                  <span className="text-nowrap">
                                    Flight {item["number"]}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div
                              key={`aa${index}`}
                              className="col-xl-6 col-lg-6 col-md-6 col-6 text-end my-auto"
                            >
                              <span className="fw-light">{tripClass}</span>
                            </div>
                            <div
                              key={`ab${index}`}
                              className="col-xl-8 col-lg-8 col-md-7 col-12 my-auto book_route_box"
                            >
                              <div className="d-flex">
                                <p className="my-auto fw-light">
                                  {formatTimeToAmPm(
                                    item["departure"]["at"].slice(-8, -3)
                                  )}
                                </p>{" "}
                                <p className="mx-1 my-auto fw-medium text-nowrap">
                                  {item["departure"]["iataCode"]}
                                </p>{" "}
                              </div>
                              <div className="d-flex my-xl-0 my-lg-0 my-1">
                                <div className="">
                                  <div className="my-1 flightline2">
                                    <div></div>
                                    <div></div>
                                  </div>
                                </div>
                                <div className="my-auto">
                                  <span className="mx-xl-5 mx-lg-5 mx-md-4 ms-5">
                                    {item["duration"].match(/PT(.*?)H/)?.[1] ===
                                    undefined
                                      ? ""
                                      : `${
                                          item["duration"].match(
                                            /PT(.*?)H/
                                          )?.[1]
                                        }h`}{" "}
                                    {item["duration"].match(/H(.*?)M/)?.[1] ===
                                    undefined
                                      ? ""
                                      : `${
                                          item["duration"].match(/H(.*?)M/)?.[1]
                                        }m`}
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex">
                                <p className="my-auto fw-light">
                                  {formatTimeToAmPm(
                                    item["arrival"]["at"].slice(-8, -3)
                                  )}
                                </p>{" "}
                                <p className="mx-1 my-auto fw-medium">
                                  {item["arrival"]["iataCode"]}
                                </p>{" "}
                              </div>
                            </div>
                            <div
                              key={`ac${index}`}
                              className="col-xl-4 col-lg-4 col-md-5 col-12 mt-xl-0 mt-lg-0 mt-md-0 mt-2 book_misc_box"
                            >
                              <table className="table mb-xl-0 mb-lg-0 mb-2">
                                <thead>
                                  <tr>
                                    <th className="pb-1">Baggage</th>

                                    <th className="pb-1">Cabin</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="py-0">Adult</td>

                                    <td className="py-0">
                                      {item["co2Emissions"][0]["weight"]}{" "}
                                      {item["co2Emissions"][0]["weightUnit"]}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td></td>

                                    <td className="py-0">
                                      <sub>(1 piece only)</sub>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-xl-3 col-lg-3 col-12 mt-3">
                  <div className="col-12 bg-white shadow-sm p-2">
                    <h4>Fare Summary</h4>
                    <table className="table">
                      <tbody>
                        <tr className="border-bottom">
                          <td className="px-2">
                            <span
                              className="text-decoration-none text-dark-emphasis fw-medium"
                              href="#basefare"
                            >
                              Base Fare
                            </span>
                            <div className="collapse show" id="basefare">
                              <span
                                className="text-muted"
                                style={{ fontSize: "12px" }}
                              >
                                Adult(s) ({adult} X ${" "}
                                {
                                  lastOffer["data"]["flightOffers"][0][
                                    "travelerPricings"
                                  ][0]["price"]["base"]
                                }
                                )
                                <br />
                                {Number(children) === 0
                                  ? ""
                                  : `Children(s) (${children} X $ ${
                                      lastOffer["data"]["flightOffers"][0][
                                        "travelerPricings"
                                      ][Number(adult)]["price"]["base"]
                                    })`}
                                <br />
                                {Number(infants) === 0
                                  ? ""
                                  : `Infants(s) (${infants} X $ ${
                                      lastOffer["data"]["flightOffers"][0][
                                        "travelerPricings"
                                      ][Number(children) + Number(adult)][
                                        "price"
                                      ]["base"]
                                    })`}
                              </span>
                            </div>
                          </td>
                          <td className="text-muted text-end px-2 text-nowrap">
                            ${" "}
                            {
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "base"
                              ]
                            }
                          </td>
                        </tr>
                        <tr className="border-bottom">
                          <td className="px-2">
                            <span className="text-decoration-none text-dark-emphasis fw-medium">
                              Taxes and Surcharges
                            </span>
                            <div className="collapse" id="charges">
                              <span className="text-muted"></span>
                            </div>
                          </td>
                          <td className="text-muted text-end px-2 text-nowrap">
                            ${" "}
                            {(
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "total"
                              ] -
                              lastOffer["data"]["flightOffers"][0]["price"][
                                "base"
                              ]
                            ).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2">
                            <span className="fw-bold fs-6">Total</span>
                          </td>
                          <td className="px-2 text-end">
                            <span className="fw-bold fs-6 text-nowrap">
                              ${" "}
                              {
                                lastOffer["data"]["flightOffers"][0]["price"][
                                  "total"
                                ]
                              }
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-12 p-4 bg-white shadow-sm g-0">
                  <div className="flight_passengerdetails_wrapper row py-3 mt-3 border-bottom border-success">
                    <div className="col-9 border-start border-4 border-success d-flex justify-content-between">
                      <h5>Passenger Details</h5>
                    </div>
                    {/* Running loop for adult passenger */}
                    {adultArray.map((value, index) => {
                      return (
                        <div
                          key={index}
                          className="align-content-center border border-bottom rounded px-2 py-3"
                        >
                          <h6>Adult-{index + 1}</h6>
                          <form action="" className="row mt-2 passengerform">
                            <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                              <label
                                htmlFor="title"
                                className="col-6 form-label"
                              >
                                Title
                              </label>
                              <select
                                onChange={(e) =>
                                  handleTitleChange(index, e.target.value)
                                }
                                className="form-control"
                                name="title"
                                id="title"
                              >
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Miss.">Miss.</option>
                                <option value="Mstr.">Mstr.</option>
                              </select>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                              <label htmlFor="name" className="form-label">
                                Name<span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  errorPname && names[index] === ""
                                    ? "error-border"
                                    : ""
                                }`}
                                name="name"
                                // id="name"
                                placeholder="Name"
                                onChange={(e) => {
                                  handleNameChange(index, e.target.value);
                                  setErrorPname(false);
                                }}
                              />
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                              <label htmlFor="gender" className="form-label">
                                Gender<span style={{ color: "red" }}>*</span>
                              </label>
                              <select
                                className="form-control"
                                name="gender"
                                id="gender"
                                onChange={(e) =>
                                  handleGenderChange(index, e.target.value)
                                }
                              >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                              <label htmlFor="dob" className="form-label">
                                Date of Birth
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              {/* <input
                              type="date"
                              className={`form-control ${
                                errorPdob ? "error-border" : ""
                              }`}
                              name="dob"
                              id="dob"
                              placeholder=""
                              onChange={(e) => {
                                handleDateChange(index, e.target.value);
                                setErrorpdob(false);
                              }}
                            /> */}
                              <DatePicker
                                disabledDate={(current) =>
                                  current && current > new Date()
                                }
                                className={`form-control ${
                                  errorPdob && dates[index] === ""
                                    ? "error-border"
                                    : ""
                                }`}
                                name="dob"
                                id="dob"
                                onChange={(date, dateString) => {
                                  handleDateChange(index, dateString);
                                  setErrorpdob(false);
                                }}
                              />
                            </div>

                            {/* Handle Intyernational passenger */}
                            {lastOffer["dictionaries"]["locations"][
                              lastOffer["data"]["flightOffers"][0][
                                "itineraries"
                              ][0]["segments"][0]["departure"]["iataCode"]
                            ]["countryCode"] ===
                            lastOffer["dictionaries"]["locations"][
                              lastOffer["data"]["flightOffers"][0][
                                "itineraries"
                              ][0]["segments"][
                                lastOffer["data"]["flightOffers"][0][
                                  "itineraries"
                                ][0]["segments"].length - 1
                              ]["arrival"]["iataCode"]
                            ]["countryCode"] ? (
                              ""
                            ) : (
                              <>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Birth Place
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorBirthplace &&
                                      birthPlace[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Birth Place"
                                    onChange={(e) => {
                                      handleBirthChange(index, e.target.value);
                                      setErrorBirthplace(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Nationality
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorNationality &&
                                      nationality[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Nationality"
                                    onChange={(e) => {
                                      handleNationalityChange(
                                        index,
                                        e.target.value
                                      );
                                      setErrorNationality(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Passport or ID Number
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorId && id[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Passport or ID Number"
                                    onChange={(e) => {
                                      handleIdChange(index, e.target.value);
                                      setErrorId(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Passport Issue Place
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorIssuePlace &&
                                      issuePlace[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Passport Issue Place"
                                    onChange={(e) => {
                                      handleIssuePlaceChange(
                                        index,
                                        e.target.value
                                      );
                                      setErrorIssuePlace(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Passport Issue date
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {/* <input
                                  type="date"
                                  className={`form-control ${
                                    errorPissueDate ? "error-border" : ""
                                  }`}
                                  name="name"
                                  id="name"
                                  placeholder=""
                                  onChange={(e) => {
                                    handleIssueDateChange(
                                      index,
                                      e.target.value
                                    );
                                    setErrorpIssueDtae(false);
                                  }}
                                /> */}
                                  <DatePicker
                                    disabledDate={(current) =>
                                      current && current > new Date()
                                    }
                                    className={`form-control ${
                                      errorPissueDate && issueDate[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    onChange={(date, dateString) => {
                                      handleIssueDateChange(index, dateString);
                                      setErrorpIssueDtae(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Passport Expiry Date
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {/* <input
                                  type="date"
                                  className={`form-control ${
                                    errorPexpiryDate ? "error-border" : ""
                                  }`}
                                  name="name"
                                  id="name"
                                  placeholder=""
                                  onChange={(e) => {
                                    handleExpiryChange(index, e.target.value);
                                    setErrorPexpiryDate(false);
                                  }}
                                /> */}
                                  <DatePicker
                                    disabledDate={(current) =>
                                      current && current < new Date()
                                    }
                                    className={`form-control ${
                                      errorPexpiryDate && expiry[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    onChange={(date, dateString) => {
                                      handleExpiryChange(index, dateString);
                                      setErrorPexpiryDate(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Passport Country
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorPcountry && country[index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Passport Country"
                                    onChange={(e) => {
                                      handleCountryChange(
                                        index,
                                        e.target.value
                                      );
                                      setErrorPcountry(false);
                                    }}
                                  />
                                </div>
                              </>
                            )}
                          </form>
                        </div>
                      );
                    })}

                    {/* Running loop for child passenger */}
                    {Number(children) === 0 ? (
                      ""
                    ) : (
                      <>
                        <div className="mt-3" />
                        {childArray.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="align-content-center border border-bottom rounded px-2 py-3"
                            >
                              <h6>Children-{index + 1}</h6>
                              <form
                                action=""
                                className="row mt-2 passengerform"
                              >
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="title"
                                    className="col-6 form-label"
                                  >
                                    Title
                                  </label>
                                  <select
                                    onChange={(e) =>
                                      handleTitleChange(
                                        Number(adult) + index,
                                        e.target.value
                                      )
                                    }
                                    className="form-control"
                                    name="title"
                                    id="title"
                                  >
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Miss.">Miss.</option>
                                    <option value="Mstr.">Mstr.</option>
                                  </select>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Name<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorPname &&
                                      names[Number(adult) + index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Name"
                                    onChange={(e) => {
                                      handleNameChange(
                                        Number(adult) + index,
                                        e.target.value
                                      );
                                      setErrorPname(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Gender
                                  </label>
                                  <select
                                    className="form-control"
                                    name="gender"
                                    id="gender"
                                    onChange={(e) =>
                                      handleGenderChange(
                                        Number(adult) + index,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="dob" className="form-label">
                                    Date of Birth
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {/* <input
                                  type="date"
                                  className="form-control"
                                  name="dob"
                                  id="dob"
                                  placeholder=""
                                  onChange={(e) =>
                                    handleDateChange(
                                      Number(adult) + index,
                                      e.target.value
                                    )
                                  }
                                /> */}
                                  <DatePicker
                                    disabledDate={(current) =>
                                      current && current > new Date()
                                    }
                                    className={`form-control ${
                                      errorPdob &&
                                      dates[Number(adult) + index] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="dob"
                                    id="dob"
                                    onChange={(date, dateString) => {
                                      handleDateChange(
                                        Number(adult) + index,
                                        dateString
                                      );
                                      setErrorpdob(false);
                                    }}
                                  />
                                </div>

                                {/* Handle Intyernational passenger */}
                                {lastOffer["dictionaries"]["locations"][
                                  lastOffer["data"]["flightOffers"][0][
                                    "itineraries"
                                  ][0]["segments"][0]["departure"]["iataCode"]
                                ]["countryCode"] ===
                                lastOffer["dictionaries"]["locations"][
                                  lastOffer["data"]["flightOffers"][0][
                                    "itineraries"
                                  ][0]["segments"][
                                    lastOffer["data"]["flightOffers"][0][
                                      "itineraries"
                                    ][0]["segments"].length - 1
                                  ]["arrival"]["iataCode"]
                                ]["countryCode"] ? (
                                  ""
                                ) : (
                                  <>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Birth Place
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorBirthplace &&
                                          birthPlace[Number(adult) + index] ===
                                            ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Birth Place"
                                        onChange={(e) => {
                                          handleBirthChange(
                                            Number(adult) + index,
                                            e.target.value
                                          );
                                          setErrorBirthplace(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Nationality
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorNationality &&
                                          nationality[Number(adult) + index] ===
                                            ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Nationality"
                                        onChange={(e) => {
                                          handleNationalityChange(
                                            Number(adult) + index,
                                            e.target.value
                                          );
                                          setErrorNationality(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport or ID Number
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorId &&
                                          id[Number(adult) + index] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport or ID Number"
                                        onChange={(e) => {
                                          handleIdChange(
                                            Number(adult) + index,
                                            e.target.value
                                          );
                                          setErrorId(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Issue Place
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorIssuePlace &&
                                          issuePlace[Number(adult) + index] ===
                                            ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport Issue Place"
                                        onChange={(e) => {
                                          handleIssuePlaceChange(
                                            Number(adult) + index,
                                            e.target.value
                                          );
                                          setErrorIssuePlace(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Issue date
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      {/* <input
                                      type="date"
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      placeholder=""
                                      onChange={(e) =>
                                        handleIssueDateChange(
                                          Number(adult) + index,
                                          e.target.value
                                        )
                                      }
                                    /> */}
                                      <DatePicker
                                        disabledDate={(current) =>
                                          current && current > new Date()
                                        }
                                        className={`form-control ${
                                          errorPissueDate &&
                                          issueDate[Number(adult) + index] ===
                                            ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        onChange={(date, dateString) => {
                                          handleIssueDateChange(
                                            Number(adult) + index,
                                            dateString
                                          );
                                          setErrorpIssueDtae(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Expiry Date
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      {/* <input
                                      type="date"
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      placeholder=""
                                      onChange={(e) =>
                                        handleExpiryChange(
                                          Number(adult) + index,
                                          e.target.value
                                        )
                                      }
                                    /> */}
                                      <DatePicker
                                        disabledDate={(current) =>
                                          current && current < new Date()
                                        }
                                        className={`form-control ${
                                          errorPexpiryDate &&
                                          expiry[Number(adult) + index] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        onChange={(date, dateString) => {
                                          handleExpiryChange(
                                            Number(adult) + index,
                                            dateString
                                          );
                                          setErrorPexpiryDate(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Passport Country
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorPcountry &&
                                          country[Number(adult) + index] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport Country"
                                        onChange={(e) => {
                                          handleCountryChange(
                                            Number(adult) + index,
                                            e.target.value
                                          );
                                          setErrorPcountry(false);
                                        }}
                                      />
                                    </div>
                                  </>
                                )}
                              </form>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {/* Running loop for infants passenger */}
                    {Number(infants) === 0 ? (
                      ""
                    ) : (
                      <>
                        <div className="mt-3" />
                        {infantsArray.map((value, index) => {
                          return (
                            <div
                              key={index}
                              className="align-content-center border border-bottom rounded px-2 py-3"
                            >
                              <h6>Infants-{index + 1}</h6>
                              <form
                                action=""
                                className="row mt-2 passengerform"
                              >
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="title"
                                    className="col-6 form-label"
                                  >
                                    Title
                                  </label>
                                  <select
                                    onChange={(e) =>
                                      handleTitleChange(
                                        Number(adult) +
                                          Number(children) +
                                          index,
                                        e.target.value
                                      )
                                    }
                                    className="form-control"
                                    name="title"
                                    id="title"
                                  >
                                    <option value="Mr.">Mr.</option>
                                    <option value="Mrs.">Mrs.</option>
                                    <option value="Miss.">Miss.</option>
                                    <option value="Mstr.">Mstr.</option>
                                  </select>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="name" className="form-label">
                                    Name<span style={{ color: "red" }}>*</span>
                                  </label>
                                  <input
                                    type="text"
                                    className={`form-control ${
                                      errorPname &&
                                      names[
                                        Number(adult) + Number(children) + index
                                      ] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    placeholder="Name"
                                    onChange={(e) => {
                                      handleNameChange(
                                        Number(adult) +
                                          Number(children) +
                                          index,
                                        e.target.value
                                      );
                                      setErrorPname(false);
                                    }}
                                  />
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label
                                    htmlFor="gender"
                                    className="form-label"
                                  >
                                    Gender
                                  </label>
                                  <select
                                    className="form-control"
                                    name="gender"
                                    id="gender"
                                    onChange={(e) =>
                                      handleGenderChange(
                                        Number(adult) +
                                          Number(children) +
                                          index,
                                        e.target.value
                                      )
                                    }
                                  >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                  </select>
                                </div>
                                <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                  <label htmlFor="dob" className="form-label">
                                    Date of Birth
                                    <span style={{ color: "red" }}>*</span>
                                  </label>
                                  {/* <input
                                  type="date"
                                  className="form-control"
                                  name="dob"
                                  id="dob"
                                  placeholder=""
                                  onChange={(e) =>
                                    handleDateChange(
                                      Number(adult) + Number(children) + index,
                                      e.target.value
                                    )
                                  }
                                /> */}

                                  <DatePicker
                                    disabledDate={(current) =>
                                      current && current > new Date()
                                    }
                                    className={`form-control ${
                                      errorPdob &&
                                      dates[
                                        Number(adult) + Number(children) + index
                                      ] === ""
                                        ? "error-border"
                                        : ""
                                    }`}
                                    name="name"
                                    // id="name"
                                    onChange={(date, dateString) => {
                                      handleDateChange(
                                        Number(adult) +
                                          Number(children) +
                                          index,
                                        dateString
                                      );
                                      setErrorpdob(false);
                                    }}
                                  />
                                </div>
                                {/* Handle Intyernational passenger */}
                                {lastOffer["dictionaries"]["locations"][
                                  lastOffer["data"]["flightOffers"][0][
                                    "itineraries"
                                  ][0]["segments"][0]["departure"]["iataCode"]
                                ]["countryCode"] ===
                                lastOffer["dictionaries"]["locations"][
                                  lastOffer["data"]["flightOffers"][0][
                                    "itineraries"
                                  ][0]["segments"][
                                    lastOffer["data"]["flightOffers"][0][
                                      "itineraries"
                                    ][0]["segments"].length - 1
                                  ]["arrival"]["iataCode"]
                                ]["countryCode"] ? (
                                  ""
                                ) : (
                                  <>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Birth Place
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorBirthplace &&
                                          birthPlace[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Birth Place"
                                        onChange={(e) => {
                                          handleBirthChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            e.target.value
                                          );
                                          setErrorBirthplace(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Nationality
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorNationality &&
                                          nationality[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Nationality"
                                        onChange={(e) => {
                                          handleNationalityChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            e.target.value
                                          );
                                          setErrorNationality(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport or ID Number
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorId &&
                                          id[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport or ID Number"
                                        onChange={(e) => {
                                          handleIdChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            e.target.value
                                          );
                                          setErrorId(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Issue Place
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorIssuePlace &&
                                          issuePlace[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport Issue Place"
                                        onChange={(e) => {
                                          handleIssuePlaceChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            e.target.value
                                          );
                                          setErrorIssuePlace(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Issue date
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      {/* <input
                                      type="date"
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      placeholder=""
                                      onChange={(e) =>
                                        handleIssueDateChange(
                                          Number(adult) +
                                            Number(children) +
                                            index,
                                          e.target.value
                                        )
                                      }
                                    /> */}
                                      <DatePicker
                                        disabledDate={(current) =>
                                          current && current > new Date()
                                        }
                                        className={`form-control ${
                                          errorPissueDate &&
                                          issueDate[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        onChange={(date, dateString) => {
                                          handleIssueDateChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            dateString
                                          );
                                          setErrorpIssueDtae(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="name"
                                        className="form-label"
                                      >
                                        Passport Expiry Date
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      {/* <input
                                      type="date"
                                      className="form-control"
                                      name="name"
                                      id="name"
                                      placeholder=""
                                      onChange={(e) =>
                                        handleExpiryChange(
                                          Number(adult) +
                                            Number(children) +
                                            index,
                                          e.target.value
                                        )
                                      }
                                    /> */}

                                      <DatePicker
                                        disabledDate={(current) =>
                                          current && current < new Date()
                                        }
                                        className={`form-control ${
                                          errorExpiryDate &&
                                          expiry[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        onChange={(date, dateString) => {
                                          handleExpiryChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            dateString
                                          );
                                          setErrorExpiryDate(false);
                                        }}
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                                      <label
                                        htmlFor="gender"
                                        className="form-label"
                                      >
                                        Passport Country
                                        <span style={{ color: "red" }}>*</span>
                                      </label>
                                      <input
                                        type="text"
                                        className={`form-control ${
                                          errorCountry &&
                                          country[
                                            Number(adult) +
                                              Number(children) +
                                              index
                                          ] === ""
                                            ? "error-border"
                                            : ""
                                        }`}
                                        name="name"
                                        // id="name"
                                        placeholder="Passport Country"
                                        onChange={(e) => {
                                          handleCountryChange(
                                            Number(adult) +
                                              Number(children) +
                                              index,
                                            e.target.value
                                          );
                                          setErrorcountry(false);
                                        }}
                                      />
                                    </div>
                                  </>
                                )}
                              </form>
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>
                  <div className="flight_confirmdetails_wrapper border-bottom border-success row py-3 mt-3">
                    <div className="col-12 d-flex border-start border-4 border-success justify-content-between">
                      <h5>Customer Details</h5>
                    </div>
                    <div className="align-content-center mt-1">
                      <form action="" className="row">
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label
                            htmlFor="fullName"
                            className="col-6 form-label"
                          >
                            Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errorName ? "error-border" : ""
                            }`}
                            name="fullName"
                            id="fullName"
                            placeholder="Name"
                            onChange={(e) => {
                              setCname(e.target.value);
                              setErrorname(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="email" className="form-label">
                            Email Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errorEmail ? "error-border" : ""
                            }`}
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            onChange={(e) => {
                              setCemail(e.target.value);
                              setErroremail(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="country" className="form-label">
                            Country<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errorCcountry ? "error-border" : ""
                            }`}
                            name="country"
                            id="country"
                            placeholder="Country"
                            onChange={(e) => {
                              setccountry(e.target.value);
                              setErrorCcountry(false);
                            }}
                          />
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 col-lg-3">
                          <label htmlFor="phoneNumber" className="form-label">
                            Phone Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <PhoneInput
                            defaultCountry="IN"
                            value={cPhone}
                            onChange={setCphone}
                            className={`form-control ${
                              errorPhone ? "error-border" : ""
                            }`}
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Enter Your Mobile No."
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flight_confirmdetails_wrapper border-bottom border-success row py-3 mt-3">
                    <div className="col-12 d-flex border-start border-4 border-success justify-content-between">
                      <h5>Credit Card Information</h5>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-6">
                        <div className="payment-img">
                          <img
                            height={"40"}
                            width={"80"}
                            src={require("./paypal1.png")}
                            alt="paypal"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="payment-img">
                          <img
                            height={"40"}
                            width={"80"}
                            src={require("./Discover1.png")}
                            alt="Discover"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="payment-img">
                          <img
                            height={"40"}
                            width={"80"}
                            src={require("./mastercard1.png")}
                            alt="mastercard"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="payment-img">
                          <img
                            height={"40"}
                            width={"80"}
                            src={require("./VISA1.png")}
                            alt="VISA"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-6">
                        <div className="payment-img">
                          <img
                            height={"40"}
                            width={"80"}
                            src={require("./Strip.png")}
                            alt="E-bay"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="align-content-center mt-1">
                      <div className="card-deataols">
                        <div className="card card-body">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  Card Holder's Name
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  placeholder="Card Holder's Name"
                                  className={`form-control travellerdetails ${
                                    errorCardName ? "error-border" : ""
                                  }`}
                                  name="traveller_name_on_card"
                                  id="traveller_name_on_card"
                                  type="text"
                                  autoComplete="off"
                                  onChange={(e) => {
                                    setCardName(e.target.value);
                                    setErrorCardName(false);
                                  }}
                                />
                                <small className="text-muted p-1">
                                  (As it appears on your credit card)
                                </small>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  Card Number
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                <div className="tvlrFormField make_relative card-reader card">
                                  {/* <label class="LatoBold">Credit / Debit Card Number</label> */}
                                  <span
                                    id="CreditCardImg"
                                    className="CreditCardImg"
                                  />
                                  <svg
                                    className="cardImage"
                                    {...getCardImageProps({ images })}
                                  />
                                  <input
                                    placeholder="Card Number"
                                    className={`form-control travellerdetails ${
                                      errorCardNumber ? "error-border" : ""
                                    }`}
                                    name="traveller_card_number"
                                    id="traveller_card_number"
                                    type="text"
                                    // value={cardNumber}

                                    {...getCardNumberProps({
                                      onChange: (e) => {
                                        setCardNumber(e.target.value);
                                      },
                                    })}
                                  />
                                  <small className="error">
                                    {errorCardNumber
                                      ? "Enter valid card number"
                                      : ""}
                                  </small>
                                  {/* <small className="text-muted p-1">
                                (Pay with credit or debit card)
                              </small> */}
                                  <div style={{ clear: "both" }} />
                                  <p className="status">
                                    <span className="status_icon" />
                                    <span className="status_message" />
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="row">
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="review-label text-nowrap">
                                      Expiry Date
                                      <span style={{ color: "red" }}>*</span>
                                    </label>
                                    <input
                                      placeholder="YEAR"
                                      className={`form-control travellerdetails payment_exp_date ${
                                        errorExpiryDate ? "error-border" : ""
                                      }`}
                                      name="traveller_card_cvv"
                                      // id="traveller_card_cvv"
                                      type="number"
                                      // onChange={(e)=>setYear(e.target.value)}
                                      {...getExpiryDateProps({
                                        onChange: (e) => {
                                          setExpiryDate(e.target.value);
                                          setErrorExpiryDate(false);
                                        },
                                      })}
                                    />
                                    <small className="error">
                                      {erroredInputs.expiryDate &&
                                        erroredInputs.expiryDate}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group">
                                <label className="review-label">
                                  CVV Code
                                  <span style={{ color: "red" }}>*</span>
                                </label>
                                {/* <input type="text" class="form-control"  placeholder="0000"> */}
                                <input
                                  placeholder="cvv"
                                  className={`form-control travellerdetails payment_exp_date ${
                                    errorCvv ? "error-border" : ""
                                  }`}
                                  name="traveller_card_cvv"
                                  // id="traveller_card_cvv"
                                  type="number"
                                  onChange={(e) => {
                                    setCvv(e.target.value);
                                    if (cvv.length === 2 || cvv.length === 3) {
                                      setErrorCvv(false);
                                    } else {
                                      setErrorCvv(true);
                                    }
                                  }}
                                />
                                <small className="error">
                                  {errorCvv ? "Enter correct CVV" : ""}
                                </small>
                                <small className="text-muted p-1">
                                  {/* 3 digit number from your card &nbsp;{" "} */}
                                  <img
                                    width={"44"}
                                    height={"28"}
                                    src={require("./card.gif")}
                                    alt="card"
                                  />
                                </small>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group1">
                                <label className="review-label">
                                  Address<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="Address"
                                  className={`form-control tvlrInput travellerdetails ${
                                    errorAddress ? "error-border" : ""
                                  }`}
                                  name="traveller_address"
                                  id="traveller_address"
                                  type="text"
                                  onChange={(e) => {
                                    setAddress(e.target.value);
                                    setErrorAddress(false);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group1">
                                <label className="review-label">
                                  City<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="City"
                                  className={`form-control tvlrInput travellerdetails ${
                                    errorCity ? "error-border" : ""
                                  }`}
                                  name="traveller_city"
                                  id="traveller_city"
                                  type="text"
                                  onChange={(e) => {
                                    setCity(e.target.value);
                                    setErrorCity(false);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group1 destination-placeholder">
                                <label className="review-label">
                                  State<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="State"
                                  className={`form-control tvlrInput travellerdetails ${
                                    errorState ? "error-border" : ""
                                  }`}
                                  name="traveller_state"
                                  id="traveller_state"
                                  type="text"
                                  onChange={(e) => {
                                    setState(e.target.value);
                                    setErrorState(false);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="form-group1">
                                <label className="review-label">
                                  Country<span style={{ color: "red" }}>*</span>
                                </label>
                                {/* <input type="text" class="form-control"  placeholder="Enter Country"> */}
                                <input
                                  placeholder="Country"
                                  className={`form-control tvlrInput travellerdetails ${
                                    errorCountry ? "error-border" : ""
                                  }`}
                                  name="traveller_card_cvv"
                                  // id="traveller_card_cvv"
                                  type="text"
                                  onChange={(e) => {
                                    setCardCountry(e.target.value);
                                    setErrorcountry(false);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="col-md-2">
                              <div className="form-group1">
                                <label className="review-label">
                                  Zipcode<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  autoComplete="none"
                                  placeholder="Zipcode"
                                  className={`form-control tvlrInput travellerdetails ${
                                    errorCode ? "error-border" : ""
                                  }`}
                                  name="traveller_postcode"
                                  id="traveller_postcode"
                                  type="number"
                                  onChange={(e) => {
                                    setCode(e.target.value);
                                    setErrorCode(false);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap justify-content-between mt-3">
                    <button
                      onClick={handleSubmit}
                      className="form_submit_btn bg-success text-white"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default FlightBooking;
