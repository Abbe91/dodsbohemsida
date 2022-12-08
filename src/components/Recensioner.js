import React from "react";
import { makeStyles, Card } from "@material-ui/core";
import { customerReviews } from "../utils/data";
const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    height: "400px",
    margin: "1rem 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  contentContainer: {
    maxWidth: "50%"
  },
  cardContainer: {
    margin: "1rem 0",
    background: "white"
  },
  reviews: {
    overflowY: "scroll"
  }
});
const Recensioner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.contentContainer}>
        <h1>Längst erfarenhet</h1>
        <p>
          Vi på Dödsbo Jouren är det självklara valet för hantering av bohag och
          dödsbo med över 20 års erfarenhet tillsammans är vi helt övetygade om
          att vi kan erbjuda dig det besta upplägget för ditt bohag, dödsbo och
          din plånbok. Vårt upptagningsområde sträcker sig över hela Västra
          Götaland.
        </p>
      </section>
      <section className={classes.reviews}>
        {customerReviews?.map((review) => (
          <div id={review.id} className={classes.cardContainer}>
            <Card>
              <h4>{review.service}</h4>
              <p>{review.kund}</p>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recensioner;
