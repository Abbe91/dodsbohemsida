import "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { getLeads } from "../redux-toolkit/leads/leadsSlice";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase";
const useStyles = makeStyles({
  item: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
    borderBottom: "1px solid black",
    padding: "1rem"
  },
  select: {
    width: "9rem",
    height: "1.8rem",
    background: "transparent",
    border: "2px solid #20B2AA",
    borderRadius: "5px",
    fontWeight: "bold",
    color: "#20B2AA",
    marginTop: "0.5rem",
    marginBottom: "1rem"
  },
  status: {
    textTransform: "capitalize",
    color: "green",
    borderBottom: "1px solid green",
    fontSize: "1.2rem",
    marginLeft: "0.3rem"
  },
  offert: {
    display: "flex",
    flexDirection: "column"
  }
});
const LeadsDetails = () => {
  const classes = useStyles();
  const leadsFirebase = useSelector(getLeads);
  const { id } = useParams();
  const currentLead = leadsFirebase?.filter((el) => el.id === id);
  const [status, setStatus] = useState("");
  const [offertPris, setoffertPris] = useState("");
  const [offertKommentar, setoffertKommentar] = useState("");
  const [updated, setUpdated] = useState(false);
  const [vunnenPris, setvunnenPris] = useState("");
  const [bokatDatum, setbokatDatum] = useState(new Date());
  const [bokatTid, setbokatTid] = useState(new Date());
  const { user } = useAuth0();
  const updateCall = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        harRingtKund: true
      });
      console.log("updated click to call");
    } catch (error) {
      console.log(error);
    }
  };
  const updateEmail = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        harMailatKund: true
      });
      console.log("updated sent email");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date) => {
    setbokatDatum(date);
  };
  const handleTimeChange = (date) => {
    setbokatTid(date);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const updateLeadsStatus = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        status: status,
        offertPris: offertPris,
        offertKommentar: offertKommentar
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updateVunnenPris = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        AttFakturera: vunnenPris,
        status: status
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateLost = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        lost: true,
        status: status
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const upDateBooking = async (adId) => {
    const year = bokatDatum.getFullYear();
    const month = bokatDatum.getMonth() + 1;
    const dag = bokatDatum.getDate();
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        bokatBesokDag: `${dag}/${month}-${year}`,
        bokatBesokTid: bokatTid.toLocaleTimeString(),
        status: status
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updaterBetaltAvUndLev = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        underLevHarBetalt: true
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updatePending = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        pending: true,
        status: status
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  const removeCustomer = async (adId) => {
    try {
      const q = query(
        collection(db, "newLead"),
        where("adID", "==", Number(adId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newLead", docId);
      await updateDoc(object, {
        status: status
      });
      console.log("updated");
      setUpdated(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {currentLead?.map((el, i) => {
        return (
          <div key={i} className={classes.root}>
            <Link
              to="/dashboard-main"
              style={{
                color: "green",
                fontSize: "1.3rem",
                marginLeft: "0.75rem"
              }}
            >
              <BsFillArrowLeftCircleFill />
            </Link>
            <div className={classes.item}>
              <h4>
                Status:{" "}
                <span
                  className={classes.status}
                  style={{ color: status === "lost" && "red" }}
                >
                  {status}
                </span>
              </h4>
              <select
                className={classes.select}
                name="status"
                id="status"
                onChange={(e) => handleStatusChange(e, i)}
              >
                <option value={"undefined"}>Ändra status</option>
                <option value={"besok"}>Bokat besök</option>
                <option value={"offert"}>Fått offert</option>
                <option value={"vunnen"}>Affär</option>
                <option value={"lost"}>Tappad</option>
                <option value={"pending"}>Pending</option>
                {user.email === "louiestokk@gmail.com" && (
                  <option value={"remove"}>Remove</option>
                )}
              </select>
              {status === "offert" && (
                <div className={classes.offert}>
                  <input
                    onChange={(e) => setoffertPris(e.target.value)}
                    value={offertPris}
                    type="text"
                    placeholder="ange pris här"
                    name="offert"
                    style={{ height: "2.4rem", marginBottom: "0.5rem" }}
                  />
                  <input
                    onChange={(e) => setoffertKommentar(e.target.value)}
                    value={offertKommentar}
                    placeholder="ange kommentar eller notis här"
                    type="text"
                    name="offertKommentar"
                    style={{ height: "2.4rem" }}
                  />
                  <button
                    style={{
                      height: "2.4rem",
                      marginTop: "0.5rem",
                      background: "#20B2AA",
                      borderRadius: "5px",
                      border: "none",
                      fontWeight: "bold",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      cursor: "pointer"
                    }}
                    onClick={() => updateLeadsStatus(el.adID)}
                  >
                    {updated ? "uppdaterad" : "Uppdatera"}
                  </button>
                </div>
              )}
              {status === "vunnen" && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <input
                    style={{ height: "2.4rem" }}
                    type="text"
                    placeholder="ange total priset"
                    value={vunnenPris}
                    onChange={(e) => setvunnenPris(e.target.value)}
                  />
                  <button
                    style={{
                      height: "2.4rem",
                      marginTop: "0.5rem",
                      background: "#20B2AA",
                      borderRadius: "5px",
                      border: "none",
                      fontWeight: "bold",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      cursor: "pointer"
                    }}
                    onClick={() => updateVunnenPris(el.adID)}
                  >
                    {updated ? "uppdaterad" : "Uppdatera"}
                  </button>
                </div>
              )}
              {status === "lost" && (
                <button
                  onClick={() => updateLost(el.adID)}
                  style={{
                    height: "2.4rem",
                    marginTop: "0.5rem",
                    background: "#20B2AA",
                    borderRadius: "5px",
                    border: "none",
                    fontWeight: "bold",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    cursor: "pointer"
                  }}
                >
                  {updated ? "uppdaterad" : "Uppdatera till lost"}
                </button>
              )}
              {status === "pending" && (
                <button
                  onClick={() => updatePending(el.adID)}
                  style={{
                    height: "2.4rem",
                    marginTop: "0.5rem",
                    background: "#20B2AA",
                    borderRadius: "5px",
                    border: "none",
                    fontWeight: "bold",
                    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    cursor: "pointer"
                  }}
                >
                  {updated ? "uppdaterad" : "Uppdatera till pending"}
                </button>
              )}
              {status === "remove" && (
                <button onClick={() => removeCustomer(el.adID)}>
                  {" "}
                  {updated ? "uppdaterad" : "Remove"}
                </button>
              )}
              {status === "besok" && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Datum"
                      value={bokatDatum}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                    <KeyboardTimePicker
                      disableToolbar
                      margin="normal"
                      id="time-picker"
                      label="Tid"
                      value={bokatTid}
                      onChange={handleTimeChange}
                      KeyboardButtonProps={{
                        "aria-label": "change time"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                  <button
                    onClick={() => upDateBooking(el.adID)}
                    style={{
                      height: "2.4rem",
                      marginTop: "0.5rem",
                      background: "#20B2AA",
                      borderRadius: "5px",
                      border: "none",
                      fontWeight: "bold",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      cursor: "pointer"
                    }}
                  >
                    {updated ? "uppdaterad" : "Uppdatera Bokning"}
                  </button>
                </div>
              )}
            </div>
            <section style={{ padding: "1rem" }}>
              <p style={{ marginBottom: "0.75rem" }}>
                <strong>id: </strong>{" "}
                <span style={{ fontSize: "0.85rem" }}>{el.adID}</span>
              </p>
              {user.email === "louiestokk@gmail.com" &&
                !el.underLevHarBetalt && (
                  <button onClick={() => updaterBetaltAvUndLev(el.adID)}>
                    Magnus har betalt
                  </button>
                )}
              <h4
                style={{
                  borderBottom: "1px solid black",
                  maxWidth: "150px",
                  marginBottom: "0.5rem",
                  color: "#4B0082"
                }}
              >
                {el.namn}
              </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#FFA07A",
                  marginBottom: "0.5rem"
                }}
              >
                <BsTelephoneFill />
                <a
                  href={`tel:${el.nummer}`}
                  onClick={() => updateCall(el.adID)}
                  style={{
                    color: "#FFA07A",
                    marginLeft: "0.5rem"
                  }}
                >
                  {el.nummer}
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#20B2AA",
                  marginBottom: "0.5rem"
                }}
              >
                <MdEmail />
                <a
                  href={`mailto:${el.email}`}
                  onClick={() => updateEmail(el.adID)}
                  style={{
                    color: "#20B2AA",
                    marginLeft: "0.5rem"
                  }}
                >
                  {el.email}
                </a>
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
                  <strong style={{ color: "green" }}>OFFERT:</strong>{" "}
                  {el.offertPris}KR
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

              {el.harRingtKund && user.email === "louiestokk@gmail.com" && (
                <p>
                  Click to call:{" "}
                  <strong style={{ color: "green" }}>true</strong>{" "}
                </p>
              )}
              {el.harMailatKund && user.email === "louiestokk@gmail.com" && (
                <p>
                  Sent email: <strong style={{ color: "green" }}>true</strong>{" "}
                </p>
              )}
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default LeadsDetails;
