import React, { useState, useEffect } from "react";
import { getLeads, setNewLead } from "../../redux-toolkit/leads/leadsSlice";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  beskriv: {
    fontSize: "0.8rem"
  },
  headbody: {
    borderBottom: "1px solid black"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    padding: "1rem",
    cursor: "pointer",
    width: "95%",
    margin: "1rem 0.5rem"
  },
  filterBtn: {
    width: "4.4rem",
    height: "1.6rem",
    background: "#20B2AA",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px"
  },
  searchContainer: {
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    position: "relative"
  },
  search: {
    position: "absolute",
    top: "20%",
    left: "2%"
  }
});
const leadsStates = ["vunnen", "offert", "lost", "besok", "pending", "all"];

const Bortforslingavdodsbogoteborg = () => {
  const navigate = useNavigate();
  const leadDataFireStore = useSelector(getLeads);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [addCustomer, setaddCustomer] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const [addedCustomerData, setaddedCustomerData] = useState({
    namn: "",
    email: "",
    nummer: "",
    ort: "",
    tidsram: "",
    beskrivning: "",
    service: "",
    adID: Number(Math.floor(Math.random() * 1000000000))
  });
  const fetchFirestoreData = async () => {
    await getDocs(collection(db, "newLead")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      dispatch(setNewLead(newData));
    });
  };

  const handleFiltering = (e) => {
    if (e.target.innerText === "all") {
      fetchFirestoreData();
      setsearchQuery("");
    } else {
      const newItems = leadDataFireStore.filter(
        (el) => el.status === e.target.innerText
      );
      dispatch(setNewLead(newItems));
    }
  };

  const handleSearchQustomer = (e) => {
    setsearchQuery(e.target.value);
    dispatch(
      setNewLead(
        leadDataFireStore.filter((el) => el?.namn.includes(e.target.value))
      )
    );
  };
  const handleAddCustomerChange = (e) => {
    setaddedCustomerData({
      ...addedCustomerData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddCustomerToFireBase = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "newLead"), addedCustomerData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  useEffect(() => {
    fetchFirestoreData();
  }, []);

  return (
    <div>
      <div style={{ padding: "1rem", display: "flex", alignItems: "center" }}>
        <h4>
          {leadDataFireStore.filter((el) => el.status !== "remove")?.length}{" "}
          kunder
        </h4>
        <button
          onClick={() => setaddCustomer(!addCustomer)}
          style={{
            marginLeft: "1rem",
            width: "7rem",
            background: "#4B0082",
            border: "none",
            borderRadius: "5px",
            color: "white",
            height: "1.8rem",
            fontWeight: "bold"
          }}
        >
          Lägg till kund
        </button>
      </div>
      <div
        style={{
          display: addCustomer ? "block" : "none"
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
            maxWidth: "60%"
          }}
        >
          <input
            type="text"
            placeholder="namn"
            name="namn"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="nummer"
            name="nummer"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="ort"
            name="ort"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="tidsram"
            name="tidsram"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="tjänst"
            name="service"
            onChange={handleAddCustomerChange}
          />
          <input
            type="text"
            placeholder="beskrivning"
            name="beskrivning"
            onChange={handleAddCustomerChange}
          />
          <button
            onClick={handleAddCustomerToFireBase}
            style={{ height: "2rem" }}
          >
            add customer
          </button>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {leadsStates.map((el, i) => (
          <button
            key={i}
            className={classes.filterBtn}
            onClick={handleFiltering}
          >
            {el}
          </button>
        ))}
      </div>
      <div className={classes.searchContainer}>
        <div className={classes.search}>
          <BsSearch style={{ color: "#4B0082", fontSize: "1.1rem" }} />
        </div>
        <input
          onChange={handleSearchQustomer}
          value={searchQuery}
          type="text"
          placeholder="sök på kund"
          style={{
            height: "2rem",
            width: "100%",
            textAlign: "center",
            border: "2px solid #4B0082"
          }}
        />
      </div>
      <div>
        {leadDataFireStore
          ?.filter((el) => el.status !== "remove")
          ?.map((el, i) => {
            return (
              <div
                key={i}
                className={classes.card}
                onClick={() => navigate(`/dashboard/leads/customer/${el.id}`)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem"
                  }}
                >
                  <h4
                    style={{
                      borderBottom: "1px solid black",
                      maxWidth: "150px",
                      color: "#4B0082",
                      marginRight: "1rem"
                    }}
                  >
                    {el.namn}
                  </h4>
                  <p>
                    <strong>adID:</strong> {el.adID}
                  </p>
                </div>

                <p>
                  <strong>ort:</strong>
                  <span> {el.ort}</span>
                </p>
                <p>
                  <strong>tidsram:</strong> <span>{el.tidsram}</span>
                </p>
                <p>
                  <strong>tjänst:</strong> <span>{el.service}</span>
                </p>
                <p>
                  <strong>beskrivning:</strong>{" "}
                  <span style={{ fontSize: "0.8rem" }}>{el.beskrivning}</span>
                </p>
                {el.offertPris && (
                  <p>
                    <strong>OFFERT:</strong>{" "}
                    <strong style={{ color: "green" }}>
                      {el.offertPris}KR
                    </strong>
                  </p>
                )}
                {el.offertKommentar && (
                  <p>
                    {" "}
                    <strong>Kommentar:</strong> {el.offertKommentar}
                  </p>
                )}
                {el.AttFakturera && (
                  <p>
                    <strong>Att Fakturera:</strong>{" "}
                    <strong style={{ color: "green" }}>
                      {el.AttFakturera}kr
                    </strong>
                  </p>
                )}
                {el.lost && (
                  <p>
                    <strong style={{ color: "red" }}>Lost: </strong>{" "}
                    <strong style={{ color: "red" }}>true</strong>
                  </p>
                )}
                {el.bokatBesokDag && (
                  <p>
                    <strong>Bokat besök:</strong>{" "}
                    <span style={{ color: "green" }}>{el.bokatBesokDag}</span>
                  </p>
                )}
                {el.underLevHarBetalt && (
                  <p>
                    <strong>Reglerad faktura:</strong>{" "}
                    <strong style={{ color: "green" }}>true</strong>
                  </p>
                )}
                {el.pending && <p style={{ color: "orange" }}>Pending</p>}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Bortforslingavdodsbogoteborg;
