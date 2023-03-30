import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { faqcontent } from "../../utils/faq";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontWeight: "bold",
    fontSize: "1rem",
    letterSpacing: "0.5px"
  }
}));
const Faq = ({ city }) => {
  const classes = useStyles();
  return (
    <div style={{ margin: "2rem auto" }} className="faq-root">
      <h2 style={{ margin: "1.5rem 0", marginLeft: "0.5rem" }}>
        Vanliga frågor
      </h2>
      <div className={classes.root}>
        {faqcontent?.map((el, i) => {
          return (
            <Accordion key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading} variant="h6">
                  {el.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="subtitle1"
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: "22px",
                    letterSpacing: "1px"
                  }}
                >
                  {/* {el.text.replaceAll("City", city)} */}
                  {!city
                    ? el.text.replaceAll("i City", "")
                    : el.text.replaceAll("City", city)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
