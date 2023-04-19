import React from "react";
import { makeStyles, Card } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { customerReviews } from "../utils/data";

const useStyles = makeStyles({
  root: {
    background: "rgb(248, 247, 247)",
    height: "560px",
    margin: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    "@media screen and (max-width: 800px)": {
      height: "860px"
    }
  },
  contentContainer: {
    maxWidth: "50%"
  },
  cardContainer: {
    margin: "1rem 0",
    background: "white",
    borderRadius: "5px"
  },
  reviews: {
    overflowY: "scroll"
  },
  card: {
    height: "260px",
    width: "340px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    "@media screen and (min-width: 800px)": {
      width: "600px"
    }
  },
  divider: {
    height: "1px",
    background: "#0369a1",
    width: "140px",
    margin: "0.5rem 0"
  }
});
const Recensioner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.contentContainer}>
        <h2 style={{ margin: "1rem 0" }}>Längst erfarenhet</h2>
        <p style={{ lineHeight: "26px", marginBottom: "1rem" }}>
          Vi på Dödsbo Jouren är det självklara valet för hantering av bohag och
          dödsbo med över 50 års erfarenhet tillsammans är vi helt övetygade om
          att vi kan erbjuda dig det bästa upplägget för ditt bohag, dödsbo och
          din plånbok. Vårt upptagningsområde sträcker sig över hela Västra
          Götaland.
        </p>
      </section>
      <section className={classes.reviews}>
        {customerReviews?.map((review) => (
          <div key={review.id} className={classes.cardContainer}>
            <Card className={classes.card}>
              <a
                href={review.path}
                style={{ color: "black" }}
                title={review.service}
              >
                <h5>{review.service}</h5>
              </a>
              <p style={{ fontSize: "0.8rem", margin: "0.2rem 0" }}>
                {review.kund}
              </p>
              <div className={classes.divider}></div>
              <span
                style={{
                  fontSize: "0.75rem",
                  maxWidth: "260px",
                  lineHeight: "21px",
                  marginBottom: "0.5rem"
                }}
              >
                {review.comment}
              </span>
              <div style={{ color: "orange" }}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Card>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Recensioner;
