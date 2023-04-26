import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    padding: "2rem",
    color: "white",
    // flexWrap: "wrap",
    background: "#e3c148"
    // "@media screen and (max-width: 1000px)": {
    //   flexDirection: "column"
    // }
  },
  rund: {
    width: "2.6rem",
    height: "2.6rem",
    margin: "0 auto",
    border: "1px solid white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Arbetsprocessen = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#e3c148", color: "white" }}>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          paddingTop: "2rem"
        }}
      >
        SÅ FUNGERAR DET
      </h2>
      <div className={classes.root}>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div id="vardering">
            <div className={classes.rund}>
              <p>1</p>
            </div>
            <p style={{ width: "300px", marginTop: "0.5rem" }}>
              <strong style={{ color: "white" }}> VÄRDERING:</strong> Vi
              erbjuder en kostnadsfri värdering av hemmets föremål, dödsboet
              eller bohaget. Detta är för att kunna ge er ett fast pris för
              själva{" "}
              <a
                href="/tomma-dodsbo"
                style={{ color: "white" }}
                title="tömma dödsbo"
              >
                tömningen av dödsboet
              </a>{" "}
              och så att vi även kan ge er ett pris för uppköpet av lösöret vi
              är intresserade av att köpa upp.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/4245922/pexels-photo-4245922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="värdering av dödsbo"
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <div
              className={classes.rund}
              style={{ marginTop: "0.5rem" }}
              id="bortforsling"
            >
              <p>2</p>
            </div>
            <p style={{ width: "300px", marginTop: "1rem" }}>
              <strong style={{ color: "white" }}>
                Tömning & Bortforsling:
              </strong>{" "}
              Vi kommer den dagen vi bestämt tillsammans för att börja sortera i{" "}
              <a href="/dodsboet" style={{ color: "white" }} title="dödsboet">
                dödsboet
              </a>{" "}
              eller bohaget. När vi sorterat klart börjar vi forsla bort det som
              vi kan skänka eller det som skall gå till tippen. Efter detta tar
              vi då det lösöre vi köpt upp som vi kör till vår butik eller
              lager.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://images.pexels.com/photos/8770246/pexels-photo-8770246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="bortforsling av möbler, skräp och av dödsbo"
            />
          </div>
        </section>
        <section
          style={{
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div>
            <div
              className={classes.rund}
              style={{ marginTop: "0.5rem" }}
              id="stadning"
            >
              <p>3</p>
            </div>
            <p style={{ width: "300px", marginTop: "1rem" }}>
              <strong style={{ color: "white" }}> STÄDNING:</strong> Behöver du
              även hjälp med att få dödsboet eller bohaget{" "}
              <a
                href="/stadning-av-dodsbo"
                title="städning av dödsbo"
                style={{ color: "white" }}
              >
                städat
              </a>{" "}
              så erbjuder vi även den tjänsten för alla våra dödsbon och bohag.
              Vi gör även saneringar som luktsaneringar av rökande eller annat.
            </p>
          </div>
          <div className="ddddd">
            <img
              src="https://cdn.pixabay.com/photo/2021/01/18/16/56/blinds-5928691_1280.jpg"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="städning av dödsbo"
            />
          </div>
        </section>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <div id="betalning">
            <div className={classes.rund}>
              <p>4</p>
            </div>
            <p style={{ width: "300px", marginTop: "1rem" }}>
              <strong style={{ color: "white" }}> BETALNING: </strong>Är
              föremålen/lösöret av högre värde än kostnaderna för arbetet så
              kommer vi att betala dig som kund för att få{" "}
              <a
                href="/tomma-dodsbo"
                style={{ color: "white" }}
                title="tömma dödsbo"
              >
                tömma dödsboet
              </a>
              . Eller så kan det även bli att vi drar av summan mot det ni skall
              betala oss.
            </p>
          </div>

          <div className="ddddd">
            <img
              src="https://cdn.pixabay.com/photo/2016/10/20/18/36/money-1756279_1280.jpg"
              style={{
                height: "200px",
                width: "200px",
                objectFit: "cover",
                marginTop: "4rem",
                borderRadius: "50%",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              }}
              alt="vem köper dödsbon"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Arbetsprocessen;
