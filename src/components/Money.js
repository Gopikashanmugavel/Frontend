import React from 'react';

const Money = ({ addMoney }) => (
    <div className="money">
        <img src="img/Rectangle 20.png" style={{ marginRight: '5px', marginLeft: '25px', width: '350px', height: '180px' }} alt="" />
        <div className="money2">
            <div className="wallet">
                <p style={{ color: 'white', fontSize: '15px' }}>Add money to wallet</p>
                <p style={{ color: 'white', fontSize: '12px' }}>Get 2% cashback</p>
                <button className="btn" style={{ color: '#3ea175', backgroundColor: 'white', width: '100px', height: '30px' }}>Add Money</button>
            </div>
            <img src="img/Frame.png" style={{ height: '100px', width: '100px', margin: '25px' }} alt="" />
        </div>
        <img src="img/Group 436.png" style={{ marginLeft: '170px', marginTop: '20px' }} alt="" />
    </div>
);

export default Money;
