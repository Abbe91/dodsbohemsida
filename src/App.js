import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Partners from "./components/Partners";
import { getContentData } from "./redux-toolkit/content/contentSlice";
import { useSelector } from "react-redux";
import Links from "./internalLinks/Links";
import { Audio } from "react-loader-spinner";
import SeoServiceComponent from "./components/SeoServiceComponent";
const LeadsDetails = lazy(() => import("./pages/LeadsDetails"));
const PrivatRoute = lazy(() => import("./pages/PrivatRoute"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const DodsboKopesGoteborg = lazy(() =>
  import("./blocks//Goteborg/DodsboKopesGoteborg")
);
const KoperDodsbonGoteborg = lazy(() =>
  import("./blocks/Goteborg/KoperDodsbonGoteborg")
);
const AtervinningscentralGoteborg = lazy(() =>
  import("./pages/InfoPages/AtervinningscentralGoteborg")
);
const Atervinningscentral = lazy(() =>
  import("./pages/InfoPages/Atervinningscentral")
);
const Atervinningsstation = lazy(() =>
  import("./pages/InfoPages/Atervinningsstation")
);
const Uppkopdodsbogoteborg = lazy(() =>
  import("./components/uppkopdodsbogoteborg/Uppkopdodsbogoteborg")
);
const ForFragan = lazy(() => import("./components/ForFragan"));
const ServicesIconsComp = lazy(() => import("./components/ServicesIconsComp"));
const Error = lazy(() => import("./pages/Error/Error"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Tommadodsbogoteborg = lazy(() =>
  import("./components/tommadodsbogoteborg/Tommadodsbogoteborg")
);
const Tommabohag = lazy(() => import("./components/Tommabohag"));
const Varderadodsbogoteborg = lazy(() =>
  import("./blocks/Varderadodsbogoteborg")
);
const Saljadodsbogoteborg = lazy(() => import("./blocks/Saljadodsbogoteborg"));
const Bortforslingdodsbogoteborg = lazy(() =>
  import("./blocks/Bortforslingdodsbogoteborg")
);
const Bortforslingdodsboulricehamn = lazy(() =>
  import("./blocks/Bortforslingdodsboulricehamn")
);
const Varderadodsboulricehamn = lazy(() =>
  import("./blocks/Varderadodsboulricehamn")
);
const Hjalpdodsboulricehamn = lazy(() =>
  import("./blocks/Hjalpdodsboulricehamn")
);
const Saljadodsboulricehamn = lazy(() =>
  import("./blocks/Saljadodsboulricehamn")
);
const Tommadodsboulricehamn = lazy(() =>
  import("./blocks/Tommadodsboulricehamn")
);

const Uppkopdodsboulricehamn = lazy(() =>
  import("./blocks/Uppkopdodsboulricehamn")
);
const Hjalpdodsbogoteborg = lazy(() => import("./blocks/Hjalpadodsbogoteborg"));
const Besok = lazy(() => import("./components/Besok"));
const BortforslingDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/BortforslingDodsboKungalv")
);
const HjalpDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/HjalpDodsboKungalv")
);
const SaljaDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/SaljaDodsboKungalv")
);
const TommaDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/TommaDodsboKungalv")
);
const VarderaDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/VarderaDodsboKungalv")
);
const UppkopDodsboKungalv = lazy(() =>
  import("./blocks/kungalv/UppkopDodsboKungalv")
);
const Bortforslingdodsboale = lazy(() =>
  import("./blocks/ale/Bortforslingdodsboale")
);
const Hjalpdodsboale = lazy(() => import("./blocks/ale/Hjalpdodsboale"));
const Saljadosboale = lazy(() => import("./blocks/ale/Saljadosboale"));
const Tommadodsboale = lazy(() => import("./blocks/ale/Tommadodsboale"));
const Uppkopdodsboale = lazy(() => import("./blocks/ale/Uppkopdodsboale"));
const Varderadodsboale = lazy(() => import("./blocks/ale/Varderadodsboale"));
const DodsboGoteborg = lazy(() => import("./blocks/DodsboGoteborg"));
const Bortforslingdodsbofrolunda = lazy(() =>
  import("./blocks/frolunda/Bortforslingdodsbofrolunda")
);
const Saljadodsbofrolunda = lazy(() =>
  import("./blocks/frolunda/Saljadodsbofrolunda")
);
const Tommadodsbofrolunda = lazy(() =>
  import("./blocks/frolunda/Tommadodsbofrolunda")
);
const Uppkopdodsbofrolunda = lazy(() =>
  import("./blocks/frolunda/Uppkopdodsbofrolunda")
);
const Varderadodsbofrolunda = lazy(() =>
  import("./blocks/frolunda/Varderadodsbofrolunda")
);
const Bortforslinghisingen = lazy(() =>
  import("./blocks/Hisingen/Bortforslinghisingen")
);
const Saljadodsbohisingen = lazy(() =>
  import("./blocks/Hisingen/Saljadodsbohisingen")
);
const Tommadodsbohisingen = lazy(() =>
  import("./blocks/Hisingen/Tommadodsbohisingen")
);
const Uppkopdodsbohisingen = lazy(() =>
  import("./blocks/Hisingen/Uppkopdodsbohisingen")
);
const Varderadodsbohisingen = lazy(() =>
  import("./blocks/Hisingen/Varderadodsbohisingen")
);
const ExternaLankar = lazy(() =>
  import("./components/externalLinks/ExternaLankar")
);
const Dodsboanmalan = lazy(() => import("./pages/InfoPages/Dodsboanmalan"));
const Dodsbodelagare = lazy(() => import("./pages/InfoPages/Dodsbodelagare"));
const Dodsboet = lazy(() => import("./pages/InfoPages/Dodsboet"));
const SaljaDodsbo = lazy(() => import("./pages/InfoPages/SaljaDodsbo"));
//
const DodsboUppkopare = lazy(() => import("./blocks/Goteborg/DodsboUppkopare"));
const Dodsbouppkoparegoteborg = lazy(() =>
  import("./blocks/Goteborg/Dodsbouppkoparegoteborg")
);
const Tommerdodsbo = lazy(() => import("./blocks/Goteborg/Tommerdodsbo"));
const Dodsbofirma = lazy(() => import("./blocks/Goteborg/Dodsbofirma"));
//
const Uppkopavbohag = lazy(() => import("./blocks/Goteborg/Uppkopavbohag"));
const Tommadodsbo = lazy(() => import("./blocks/Goteborg/Tommadodsbo"));
const Foretagsomkoperbohag = lazy(() =>
  import("./blocks/Goteborg/Foretagsomkoperbohag")
);
const Stadningavdodsbo = lazy(() => import("./blocks/Stadningavdodsbo"));
//
const Oppetider = lazy(() => import("./components/Oppetider"));
const Recensioner = lazy(() => import("./components/Recensioner"));
const Seo = lazy(() => import("./components/SEO/Seo"));
const Arbetsprocessen = lazy(() => import("./components/Arbetsprocessen"));
const ImagesServicesComponent = lazy(() =>
  import("./components/ImagesServicesComponent")
);
const Dodsbokopes = lazy(() => import("./blocks/Dodsbokopes"));
const Tomningavdodsbo = lazy(() => import("./blocks/Tomningavdodsbo"));
const Helhetslosningdodsbo = lazy(() =>
  import("./components/Helhetslosningdodsbo")
);
const UppkopAvDodsbo = lazy(() => import("./blocks/Goteborg/UppkopAvDodsbo"));
const Bortforslingdodsbokungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Bortforslingdodsbokungsbacka")
);
const Dodsbofirmakungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Dodsbofirmakungsbacka")
);
const HamtardodsboKungsbacka = lazy(() =>
  import("./blocks/kungsbacka/HamtardodsboKungsbacka")
);
const Koperdodsbokungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Koperdodsbokungsbacka")
);
const Saljadodsbokungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Saljadodsbokungsbacka")
);
const TommadodsboKungsbacka = lazy(() =>
  import("./blocks/kungsbacka/TommadodsboKungsbacka")
);
const Tommerdodsbokungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Tommerdodsbokungsbacka")
);
const Bortforslingdodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Bortforslingdodsbomolndal")
);
const Dodsbofirmamolndal = lazy(() =>
  import("./blocks/Molndal/Dodsbofirmamolndal")
);
const Kopadodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Kopadodsbomolndal")
);
const Rojadodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Rojadodsbomolndal")
);
const Saljadodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Saljadodsbomolndal")
);
const Stadadodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Stadadodsbomolndal")
);
const Tommadodsbomolndal = lazy(() =>
  import("./blocks/Molndal/Tommadodsbomolndal")
);
const Rojadodsbogoteborg = lazy(() =>
  import("./blocks/Goteborg/Rojadodsbogoteborg")
);
const Stadadodsbogoteborg = lazy(() =>
  import("./blocks/Goteborg/Stadadodsbogoteborg")
);
const TommerDodsboPartille = lazy(() =>
  import("./blocks/Partille/TommerDodsboPartille")
);
const Bortforslingdodsbopartille = lazy(() =>
  import("./blocks/Partille/Bortforslingdodsbopartille")
);
const Kopadodsbopartille = lazy(() =>
  import("./blocks/Partille/Kopadodsbopartille")
);
const Rojerdodsbopartille = lazy(() =>
  import("./blocks/Partille/Rojerdodsbopartille")
);
const Saljadodsbopartille = lazy(() =>
  import("./blocks/Partille/Saljadodsbopartille")
);
const Stadadodsbopartille = lazy(() =>
  import("./blocks/Partille/Stadadodsbopartille")
);
const Uppkopdodsbopartille = lazy(() =>
  import("./blocks/Partille/Uppkopdodsbopartille")
);
const Varderadodsbokungsbacka = lazy(() =>
  import("./blocks/kungsbacka/Varderadodsbokungsbacka")
);
const Bortforslingdodsbostenungssund = lazy(() =>
  import("./blocks/Stenungsund/Bortforslingdodsbostenungssund")
);
const Kopadodsbostenungssund = lazy(() =>
  import("./blocks/Stenungsund/Kopadodsbostenungssund")
);
const Rojadodsbostenungsund = lazy(() =>
  import("./blocks/Stenungsund/Rojadodsbostenungsund")
);
const Saljadodsbostenungssund = lazy(() =>
  import("./blocks/Stenungsund/Saljadodsbostenungssund")
);
const Tommadodsbostenungssund = lazy(() =>
  import("./blocks/Stenungsund/Tommadodsbostenungssund")
);
const Varderadodsbostenungssund = lazy(() =>
  import("./blocks/Stenungsund/Varderadodsbostenungssund")
);
const Bortforslingdodsbotrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Bortforslingdodsbotrollhattan")
);
const Dodsbokopestrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Dodsbokopestrollhattan")
);
const Dodsbotrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Dodsbotrollhattan")
);
const Flyttstadningtrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Flyttstadningtrollhattan")
);
const Saljadodsbotrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Saljadodsbotrollhattan")
);
const Stadningavdodsbotrollhatttan = lazy(() =>
  import("./blocks/Trollhattan/Stadningavdodsbotrollhatttan")
);
const Tommadodsbotrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Tommadodsbotrollhattan")
);
const Varderadodsbotrollhattan = lazy(() =>
  import("./blocks/Trollhattan/Varderadodsbotrollhattan")
);
const Bortforslingdodsboboras = lazy(() =>
  import("./blocks/boras/Bortforslingdodsboboras")
);
const Dodsbofirmaboras = lazy(() => import("./blocks/boras/Dodsbofirmaboras"));
const Dodsbotomningboras = lazy(() =>
  import("./blocks/boras/Dodsbotomningboras")
);
const Flyttstadningdodsboboras = lazy(() =>
  import("./blocks/boras/Flyttstadningdodsboboras")
);
const Kopadodsboboras = lazy(() => import("./blocks/boras/Kopadodsboboras"));
const Rojadodsboboras = lazy(() => import("./blocks/boras/Rojadodsboboras"));
const Saljadodsboboras = lazy(() => import("./blocks/boras/Saljadodsboboras"));
const Slutstadningdodsboboras = lazy(() =>
  import("./blocks/boras/Slutstadningdodsboboras")
);
const Tommadodsboboras = lazy(() => import("./blocks/boras/Tommadodsboboras"));
const Tommerlagenheterboras = lazy(() =>
  import("./blocks/boras/Tommerlagenheterboras")
);
const Uppkopdodsboboras = lazy(() =>
  import("./blocks/boras/Uppkopdodsboboras")
);
const Varderadodsboboras = lazy(() =>
  import("./blocks/boras/Varderadodsboboras")
);
const Flyttstadningavbohag = lazy(() =>
  import("./blocks/flyttstadning/Flyttstadningavbohag")
);
const Varderingavdodsbo = lazy(() =>
  import("./pages/InfoPages/Varderingavdodsbo")
);
const Flyttstadning = lazy(() =>
  import("./blocks/flyttstadning/Flyttstadning")
);
const Flyttstadninggoteborg = lazy(() =>
  import("./blocks/flyttstadning/Flyttstadninggoteborg")
);
const Flyttstadningkungalv = lazy(() =>
  import("./blocks/flyttstadning/Flyttstadningkungalv")
);
const Koperdodsboalingsas = lazy(() =>
  import("./blocks/alingsas/Koperdodsboalingsas")
);
const Stadardodsboalingsas = lazy(() =>
  import("./blocks/alingsas/Stadardodsboalingsas")
);
const Tommadodsboalingsas = lazy(() =>
  import("./blocks/alingsas/Tommadodsboalingsas")
);
const Varderadodsboalingsas = lazy(() =>
  import("./blocks/alingsas/Varderadodsboalingsas")
);
const Bohagsflytt = lazy(() => import("./blocks/flytt/Bohagsflytt"));
const Varderadodsbo = lazy(() => import("./components/Varderadodsbo"));
const Bortforslingdodsbo = lazy(() =>
  import("./components/Bortforslingdodsbo")
);
const Saneradodsbo = lazy(() => import("./components/Saneradodsbo"));
const Koperdodsbogoteborg = lazy(() =>
  import("./blocks/Goteborg/Koperdodsbogoteborg")
);
const Flytta = lazy(() => import("./components/Flytta"));
const SaljaDodsbon = lazy(() => import("./components/SaljaDodsbo"));
const BookingModal = lazy(() => import("./components/BookingModal"));
const Tommahusgoteborg = lazy(() =>
  import("./blocks/Goteborg/Tommahusgoteborg")
);
const Tommalagenhetgoteborg = lazy(() =>
  import("./blocks/Goteborg/Tommalagenhetgoteborg")
);
const TommaHusKungsbacka = lazy(() =>
  import("./blocks/kungsbacka/TommaHusKungsbacka")
);

const Tommerhem = lazy(() => import("./blocks/Goteborg/Tommerhem"));
const TommerHushall = lazy(() => import("./blocks/Goteborg/TommerHushall"));
const Tommerhushallgoteborg = lazy(() =>
  import("./blocks/Goteborg/Tommerhushallgoteborg")
);
const Tommerhemgoteborg = lazy(() =>
  import("./blocks/Goteborg/Tommerhemgoteborg")
);
const Bortforsling = lazy(() => import("./blocks/Goteborg/Bortforsling"));
const Billigflyttfirmagoteborg = lazy(() =>
  import("./blocks/flytt/Billigflyttfirmagoteborg")
);
const Flyttfirmakungalv = lazy(() =>
  import("./blocks/flytt/Flyttfirmakungalv")
);
const Flyttfirmaoffert = lazy(() => import("./blocks/flytt/Flyttfirmaoffert"));
const Flyttfirmaboras = lazy(() => import("./blocks/flytt/Flyttfirmaboras"));
const Flyttfirmagoteborg = lazy(() =>
  import("./blocks/flytt/Flyttfirmagoteborg")
);
//
const Tommerdodsbonlerum = lazy(() =>
  import("./blocks/lerum/Tommerdodsbonlerum")
);
const Koperdodsbonlerum = lazy(() =>
  import("./blocks/lerum/Koperdodsbonlerum")
);
const Koperdodsbouddevalla = lazy(() =>
  import("./blocks/uddevalla/Koperdodsbouddevalla")
);
const Tommerdodsbouddevalla = lazy(() =>
  import("./blocks/uddevalla/Tommerdodsbouddevalla")
);
const TommerDodsboGoteborg = lazy(() =>
  import("./blocks/Goteborg/TommerDodsboGoteborg")
);
const TommaDodsboKortedala = lazy(() =>
  import("./blocks/kortedala//TommaDodsboKortedala")
);
// new info pages
const Atervinning = lazy(() => import("./pages/InfoPages/Atervinning"));
const Avfallshantering = lazy(() =>
  import("./pages/InfoPages/Avfallshantering")
);
const App = () => {
  const contentData = useSelector(getContentData);
  return (
    <div className="App">
      <Suspense
        fallback={
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
          />
        }
      >
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home videoText={contentData?.videoText} />}
            />
            <Route path="/atervinning" element={<Atervinning />} />
            <Route
              path="/atervinningscentral"
              element={<Atervinningscentral />}
            />
            <Route
              path="/atervinningscentral-goteborg"
              element={<AtervinningscentralGoteborg />}
            />
            <Route
              path="/atervinningsstation"
              element={<Atervinningsstation />}
            />
            <Route path="/forfragan" element={<ForFragan />} />
            <Route path="/avfallshantering" element={<Avfallshantering />} />
            <Route path="/boka" element={<BookingModal />} />
            <Route
              path="flyttfirma/billig-flyttfirma-goteborg"
              element={
                <Billigflyttfirmagoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="flyttfirma/flyttfirma-kungalv"
              element={<Flyttfirmakungalv videoText={contentData?.videoText} />}
            />
            <Route
              path="flyttfirma/flyttfirma-boras"
              element={<Flyttfirmaboras videoText={contentData?.videoText} />}
            />
            <Route
              path="flyttfirma/flyttfirma-goteborg"
              element={
                <Flyttfirmagoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="flyttfirma/flyttfirma-offert"
              element={<Flyttfirmaoffert videoText={contentData?.videoText} />}
            />
            <Route
              path="/salja-dodsbo/salja-dodsbo"
              element={<SaljaDodsbon videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-hus/tomma-hus-kungsbacka"
              element={
                <TommaHusKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-bohag"
              element={<Tommabohag videoText={contentData?.videoText} />}
            />
            <Route
              path="/bortforsling"
              element={<Bortforsling videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hem"
              element={<Tommerhem videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hem-goteborg"
              element={<Tommerhemgoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="/koper-dodsbon-goteborg"
              element={
                <KoperDodsbonGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/dodsbo-kopes-goteborg"
              element={
                <DodsboKopesGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tommer-hushall"
              element={<TommerHushall videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-hushall-goteborg"
              element={
                <Tommerhushallgoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-hus/tomma-hus-goteborg"
              element={<Tommahusgoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-lagenhet/tomma-lagenhet-goteborg"
              element={
                <Tommalagenhetgoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-goteborg"
              element={
                <Koperdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-goteborg"
              element={
                <TommerDodsboGoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kortedala"
              element={
                <TommaDodsboKortedala videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-lerum"
              element={<Koperdodsbonlerum videoText={contentData?.videoText} />}
            />
            <Route
              path="tommer-dodsbo-lerum"
              element={
                <Tommerdodsbonlerum videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-uddevalla"
              element={
                <Koperdodsbouddevalla videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-uddevalla"
              element={
                <Tommerdodsbouddevalla videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/sanera-dodsbo"
              element={<Saneradodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/bohagsflytt"
              element={<Flytta videoText={contentData?.videoText} />}
            />
            <Route
              path="/bortforsling-dodsbo"
              element={
                <Bortforslingdodsbo videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo"
              element={<Varderadodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/bohagsflytt"
              element={<Bohagsflytt videoText={contentData?.videoText} />}
            />
            <Route
              path="/vardera-dodsbo-alingsas"
              element={
                <Varderadodsboalingsas videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-alingsas"
              element={
                <Tommadodsboalingsas videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/stadar-dodsbo-alingsas"
              element={
                <Stadardodsboalingsas videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/koper-dodsbo-alingsas"
              element={
                <Koperdodsboalingsas videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-i-goteborg"
              element={
                <Flyttstadninggoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-i-kungalv"
              element={
                <Flyttstadningkungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-av-bohag"
              element={
                <Flyttstadningavbohag videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning"
              element={<Flyttstadning videoText={contentData?.videoText} />}
            />
            <Route
              path="/vardering-av-dodsbo"
              element={<Varderingavdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="/tomma-dodsbo-boras"
              element={<Tommadodsboboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/vardera-dodsbo-boras"
              element={
                <Varderadodsboboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-boras"
              element={<Uppkopdodsboboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/tommer-lagenheter-boras"
              element={
                <Tommerlagenheterboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/slutstadning-dodsbo-boras"
              element={
                <Slutstadningdodsboboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-boras"
              element={<Saljadodsboboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/kopa-dodsbo-boras"
              element={<Kopadodsboboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/roja-dodsbo-boras"
              element={<Rojadodsboboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/bortforsling-dodsbo-boras"
              element={
                <Bortforslingdodsboboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/dodsbo-firma-boras"
              element={<Dodsbofirmaboras videoText={contentData?.videoText} />}
            />
            <Route
              path="/dodsbo-tomning-boras"
              element={
                <Dodsbotomningboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-dodsbo-boras"
              element={
                <Flyttstadningdodsboboras videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/flyttstadning-trollhattan"
              element={
                <Flyttstadningtrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/dodsbo-trollhattan"
              element={<Dodsbotrollhattan videoText={contentData?.videoText} />}
            />
            <Route
              path="/dodsbo-kopes-trollhattan"
              element={
                <Dodsbokopestrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-trollhattan"
              element={
                <Bortforslingdodsbotrollhattan
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/vardera-dodsbo-trollhattan"
              element={
                <Varderadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-trollhattan"
              element={
                <Saljadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-trollhattan"
              element={
                <Tommadodsbotrollhattan videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/stadning-av-dodsbo-trollhattan"
              element={
                <Stadningavdodsbotrollhatttan
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/bortforsling-dodsbo-stenungsund"
              element={
                <Bortforslingdodsbostenungssund
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/roja-dodsbo-stenungsund"
              element={
                <Rojadodsbostenungsund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/kopa-dodsbo-stenungsund"
              element={
                <Kopadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-stenungsund"
              element={
                <Saljadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-stenungsund"
              element={
                <Tommadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo-stenungsund"
              element={
                <Varderadodsbostenungssund videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-partille"
              element={
                <Bortforslingdodsbopartille
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="/tommer-dodsbo-partille"
              element={
                <TommerDodsboPartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-partille"
              element={
                <Saljadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/kopa-dodsbo-partille"
              element={
                <Kopadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/rojer-dodsbo-partille"
              element={
                <Rojerdodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/stada-dodsbo-partille"
              element={
                <Stadadodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-partille"
              element={
                <Uppkopdodsbopartille videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/tomma-dodsbo-goteborg"
              element={
                <Tommadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/salja-dodsbo-goteborg"
              element={
                <Saljadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/uppkop-dodsbo-goteborg"
              element={
                <Uppkopdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/vardera-dodsbo-goteborg"
              element={
                <Varderadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="/bortforsling-dodsbo-goteborg"
              element={
                <Bortforslingdodsbogoteborg
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="bortforsling-dodsbo-ulricehamn"
              element={
                <Bortforslingdodsboulricehamn
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="vardera-dodsbo-ulricehamn"
              element={
                <Varderadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-ulricehamn"
              element={
                <Hjalpdodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-ulricehamn"
              element={
                <Saljadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-ulricehamn"
              element={
                <Tommadodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-ulricehamn"
              element={
                <Uppkopdodsboulricehamn videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-goteborg"
              element={
                <Hjalpdodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-kungalv"
              element={
                <BortforslingDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-kungalv"
              element={
                <HjalpDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-kungalv"
              element={
                <SaljaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kungalv"
              element={
                <TommaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-kungalv"
              element={
                <VarderaDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-kungalv"
              element={
                <UppkopDodsboKungalv videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-ale"
              element={
                <Bortforslingdodsboale videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hjalp-dodsbo-ale"
              element={<Hjalpdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo-ale"
              element={<Saljadosboale videoText={contentData?.videoText} />}
            />
            <Route
              path="tomma-dodsbo-ale"
              element={<Tommadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-dodsbo-ale"
              element={<Uppkopdodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="vardera-dodsbo-ale"
              element={<Varderadodsboale videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-goteborg"
              element={<DodsboGoteborg videoText={contentData?.videoText} />}
            />
            <Route
              path="bortforsling-dodsbo-frolunda"
              element={
                <Bortforslingdodsbofrolunda
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-frolunda"
              element={
                <Saljadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-frolunda"
              element={
                <Tommadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-frolunda"
              element={
                <Uppkopdodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-frolunda"
              element={
                <Varderadodsbofrolunda videoText={contentData?.videoText} />
              }
            />
            <Route
              path="vardera-dodsbo-hisingen"
              element={
                <Varderadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-hisingen"
              element={
                <Tommadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-hisingen"
              element={
                <Saljadodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="uppkop-dodsbo-hisingen"
              element={
                <Uppkopdodsbohisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-hisingen"
              element={
                <Bortforslinghisingen videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsboanmalan"
              element={<Dodsboanmalan videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo"
              element={<SaljaDodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="Dodsboet"
              element={<Dodsboet videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbodelagare"
              element={<Dodsbodelagare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-uppkopare"
              element={<DodsboUppkopare videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-uppkopare-goteborg"
              element={
                <Dodsbouppkoparegoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo"
              element={<Tommerdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbofirma"
              element={<Dodsbofirma videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-av-bohag"
              element={<Uppkopavbohag videoText={contentData?.videoText} />}
            />
            <Route
              path="foretag-som-koper-bohag"
              element={
                <Foretagsomkoperbohag videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo"
              element={<Tommadodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="dodsbo-kopes"
              element={<Dodsbokopes videoText={contentData?.videoText} />}
            />
            <Route
              path="stadning-av-dodsbo"
              element={<Stadningavdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="tomning-av-dodsbo"
              element={<Tomningavdodsbo videoText={contentData?.videoText} />}
            />
            <Route
              path="uppkop-av-dodsbo"
              element={<UppkopAvDodsbo videoText={contentData?.videoText} />}
            />

            <Route
              path="bortforsling-dodsbo-kungsbacka"
              element={
                <Bortforslingdodsbokungsbacka
                  videoText={contentData?.videoText}
                />
              }
            />
            <Route
              path="vardera-dodsbo-kungsbacka"
              element={
                <Varderadodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsbo-firma-kungsbacka"
              element={
                <Dodsbofirmakungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="hamtar-dodsbo-kungsbacka"
              element={
                <HamtardodsboKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="koper-dodsbo-kungsbacka"
              element={
                <Koperdodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="salja-dodsbo-kungsbacka"
              element={
                <Saljadodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-kungsbacka"
              element={
                <TommadodsboKungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tommer-dodsbo-kungsbacka"
              element={
                <Tommerdodsbokungsbacka videoText={contentData?.videoText} />
              }
            />
            <Route
              path="tomma-dodsbo-molndal"
              element={
                <Tommadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="bortforsling-dodsbo-molndal"
              element={
                <Bortforslingdodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dodsbo-firma-molndal"
              element={
                <Dodsbofirmamolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="kopa-dodsbo-molndal"
              element={<Kopadodsbomolndal videoText={contentData?.videoText} />}
            />
            <Route
              path="roja-dodsbo-molndal"
              element={<Rojadodsbomolndal videoText={contentData?.videoText} />}
            />
            <Route
              path="salja-dodsbo-molndal"
              element={
                <Saljadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="stada-dodsbo-molndal"
              element={
                <Stadadodsbomolndal videoText={contentData?.videoText} />
              }
            />
            <Route
              path="roja-dodsbo-goteborg"
              element={
                <Rojadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="stada-dodsbo-goteborg"
              element={
                <Stadadodsbogoteborg videoText={contentData?.videoText} />
              }
            />
            <Route
              path="dashboard/leads/customer/:id"
              element={
                <PrivatRoute>
                  <LeadsDetails />
                </PrivatRoute>
              }
            />
            <Route
              path="/dashboard-main"
              element={
                <PrivatRoute>
                  <Dashboard />
                </PrivatRoute>
              }
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <Partners />
          <ImagesServicesComponent />
          <Besok />
          <SeoServiceComponent />
          <Oppetider />
          <ServicesIconsComp />
          <Recensioner />
          <Footer />
          <Links />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
