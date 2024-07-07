import React from 'react';

const PremiumPlans = () => (
    <section className="premium-plans">
        <p style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '10px' }}>Premium Plans</p>
        <div style={{ display: 'flex' }}>
            <div className="plan">
                <img src="img/Rectangle 21 (1).png" style={{ height: '120px', width: '180px' }} alt="" />
                <div className="plan2" style={{ display: 'flex' }}>
                    <div>
                        <p style={{ color: 'yellow', fontWeight: 'bold' }}>Monthly Parking</p>
                        <p>Dedicated Parking available near you.</p>
                        <button className="planbtn">Explore Now <img src="img/arrow_right_alt (1).png" alt="" /></button>
                    </div>
                    <img src="img/Group 465 (1).png" style={{ height: '55px', width: '70px', marginTop: '50px', marginRight: '5px' }} alt="" />
                </div>
            </div>
            <div className="plan">
                <img src="img/Frame 275.png" style={{ marginLeft: '20px', height: '120px', width: '170px' }} alt="" />
                <div className="plan2" style={{ marginLeft: '20px' }}>
                    <p style={{ color: 'yellow', fontWeight: 'bold' }}>Elite Car Wash</p>
                    <p>Elite Car rooming at your doorstep.</p>
                    <button className="planbtn">Explore Now <img src="img/arrow_right_alt (1).png" alt="" /></button>
                </div>
            </div>
        </div>
    </section>
);

export default PremiumPlans;
