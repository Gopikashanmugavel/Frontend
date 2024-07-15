import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services.js';
import FastagRecharge from './components/FastagRecharge';
import Money from './components/Money';
import Others from './components/Others';
import Deals from './components/Deals';
import Travel from './components/Travel';
import PremiumPlans from './components/Premiumplans';
import RechargeAndBillPayments from './components/RechargeAndBillPayments';
import RechargeNow from './components/RechargeNow.js'; 
import Cars from './components/Cars.js';
import Trending from './components/Trending.js';
import ExclusiveOffers from './components/Exclusiveoffers';
import HowItWorks from './components/HowItWorks.js';

const App = () => {
  const recharge = () => {
    alert('Recharge initiated!');
  };

  const addMoney = () => {
    alert('Add money to wallet process started!');
  };

  return (
    <div className="container1">
      <Header />
      <br />
      <br />
      <Services />
      <br />
      <br />
      <FastagRecharge recharge={recharge} />
      <br />
      <br />
      <Money addMoney={addMoney} />
      <br />
      <br />
      <Others />
      <br />
      <Deals />
      <br />
      <br />
      <Travel />
      <br />
      <br />
      <PremiumPlans />
      <br />
      <br />
      <RechargeAndBillPayments />
      <br />
      <br />
      <RechargeNow/>
      <br/>
      <br/>
      <Cars/>
      <br/>
      <br/>
      <Trending/>
      <br/>
      <br/>
      <ExclusiveOffers />
      <br />
      <HowItWorks />
    </div>
  );
};

export default App;
