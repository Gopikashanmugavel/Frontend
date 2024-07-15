import React from 'react';

const Services = () => (
  <div className="container2">
    <section className="services">
      <p style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '3px' }}>Services</p>
      <div>
        <div className="box">
          <div className="service">
            <div className="container3">
              <img src="img/location-pin-map_svgrepo.com-1.png" alt='' />
            </div>
            <p className="para">Nearby Parking</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/electric-car-illustration-1_svgrepo.com-1.png" alt=''/>
            </div>
            <p className="para">EV Parking</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/Group (2).svg" alt=''/>
            </div>
            <p className="para">Car Service</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/car_svgrepo.com-1.svg"  alt=''/>
            </div>
            <p className="para">Vehicle Insurance</p>
          </div>
        </div>
        <div className="box">
          <div className="service">
            <div className="container3">
              <img src="img/crane-truck_svgrepo.com (1).svg" alt='' />
            </div>
            <p className="para">Roadside Assistance</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/ticket_svgrepo.com-1.svg" style={{ margin: '10px' }} alt=''/>
            </div>
            <p className="para">Pay Online</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/Group 447-1.svg" alt=''/>
            </div>
            <p className="para">Toll Estimation</p>
          </div>
          <div className="service">
            <div className="container3">
              <img src="img/Group 418-1.svg" alt=''/>
            </div>
            <p className="para">Valet Parking</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
