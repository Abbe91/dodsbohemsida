import React, { useState } from "react";
import { getLeads } from "../../redux-toolkit/leads/leadsSlice";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { makeStyles, Card } from "@material-ui/core";
const useStyles = makeStyles({
  container: {
    border: "1px solid black",
    width: "90%",
    margin: "1rem 1rem",
    fontSize: "0.9rem"
  }
});
const Bortforslingavdodsbogoteborg = () => {
  const leadDataFireStore = useSelector(getLeads);
  const classes = useStyles();
  const [status, setstatus] = useState("undefined");

  const handleUpdateLead = async (leadId) => {
    try {
      const q = query(
        collection(db, "newAd"),
        where("leadId", "==", Number(leadId))
      );
      const querySnapshot = await getDocs(q);
      let docId = "";
      querySnapshot.forEach((doc) => (docId = doc.id));
      const object = doc(db, "newAd", docId);
      await updateDoc(object, {
        status: status
      });
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {leadDataFireStore.map((lead) => {
        return (
          <div key={lead.id} className={classes.container}>
            <p>
              <strong> Namn:</strong> {lead.namn}
            </p>
            <p>
              <strong> Email:</strong> {lead.email}
            </p>
            <p>
              <strong> Tele:</strong> {lead.telefon}
            </p>
            <p style={{ color: "green" }}>
              <strong> Beskriv:</strong> {lead.beskriv}
            </p>
            <p>
              <strong> Tjänst:</strong> {lead.tjanst}
            </p>
            <p>
              <strong> Typ:</strong> {lead.typ}
            </p>
            <p style={{ color: status === "win" ? "green" : "red" }}>
              <strong>Status: </strong> {status}
            </p>
            <label
              style={{
                marginRight: "0.5rem"
              }}
            >
              <strong>Status Actions</strong>
            </label>
            <select
              onChange={(e) => {
                setstatus(e.target.value);
                handleUpdateLead(lead?.leadId);
              }}
            >
              <option value={"undefined"}>Undefined</option>
              <option value={"win"}>Win</option>
              <option value={"lose"}>Lose</option>
              <option value={"pending"}>Pending</option>
              <option value={"booked"}>Booked</option>
            </select>
          </div>
        );
      })}
    </div>
  );
};

export default Bortforslingavdodsbogoteborg;
