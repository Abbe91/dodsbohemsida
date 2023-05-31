import React, { useState, useEffect } from "react";
import { getLeads, setNewLead } from "../../redux-toolkit/leads/leadsSlice";
import {
  doc,
  collection,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const classes = useStyles();
  const [status, setstatus] = useState("undefined");

  const fetchFirestoreData = async () => {
    await getDocs(collection(db, "newLead")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      dispatch(setNewLead(newData));
    });
  };
  useEffect(() => {
    fetchFirestoreData();
  }, []);
  console.log(leadDataFireStore);
  return <div>dashboard</div>;
};

export default Bortforslingavdodsbogoteborg;
