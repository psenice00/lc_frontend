import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from './shared_components/header'
import Home from './pages/main_page';
import Footer from './shared_components/footer'
import Writers from './pages/writers_page/writers';
import Books from './pages/books_page/books';
import Abstracts from './pages/abstract_page/abstracts';
import AbstractDetail from './pages/abstract_detail_page/abstract_detail';
import Search from './pages/search_page/search';
import Questionare from './pages/questionare_page/questionare';

import CookieConsent from 'react-cookie-consent-notification';
const checkStatus = (status) => {
  if (status) {
    // To set a cookies
  }
};

const App = () => {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route exact path="/writers" component={Writers} />
          <Route exact path="/questionare" component={Questionare} />
          <Route exact path="/:slug" component={Books} />
          <Route exact path="/:writer/:book" component={Abstracts} />
          <Route exact path="/:writer/:book/:abstractId" component={AbstractDetail} />
        </Switch>
        <Footer />
      </Router>
      <CookieConsent
        background={'#fff'}
        bottomPosition={true}
        buttonText={'Rozumím'}
        buttonColor={'#000'}
        buttonFontSize={20}
        color={'#F34E3A'}
        consentFunction={checkStatus}
        padding={20}
      >
        Tyto webové stránky používají k poskytování služeb a analýze návštěvnosti soubory cookie. Informace o tom, jak tyto webové stránky používáte, jsou sdíleny se společností Google. Používáním těchto webových stránek souhlasíte s použitím souborů cookie.
      </CookieConsent>
    </div >
  )
}

export default App