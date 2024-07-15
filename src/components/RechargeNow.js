import React from 'react';

const RechargeNow = ({ addMoney }) => (
    <div style={{ display: 'flex' }}>
              <section>
                  <div className="money">
                      <img src="img/Rectangle 21 (1).png" style={{ marginRight: '5px', marginLeft: '25px', width: '260px', height: '140px' }} alt="" />
                      <div className="money2">
                          <div className="wallet">
                              <p style={{ color: 'yellow', fontSize: '14px', marginTop: '5px' }}>Get 15% off on</p>
                              <p style={{ color: 'white', fontSize: '16px', marginTop: '5px', height: '10px' }}>FASTag Recharge</p>
                              <p style={{ color: 'white', fontSize: '8px', marginTop: '2px', height: '10px' }}>Pay Using Axis Bank Credit & Debit Cards</p>
                              <button className="btn" style={{ color: 'black', backgroundColor: 'white', width: '120px', height: '30px', fontWeight: 'bold', fontSize: '12px', borderRadius: '20px', border: 'none' }}>Recharge Now</button>
                          </div>
                          <img src="img/Group 1.png" style={{ height: '18px', width: '70px', margintop: '100px', marginright: '40px' }} alt=""></img>
                      </div>
                  </div>
              </section>
              <img src="img/Group 556.png" style={{ height: '140px', width: '223px' }} alt="" />
          </div>

);

export default RechargeNow;
