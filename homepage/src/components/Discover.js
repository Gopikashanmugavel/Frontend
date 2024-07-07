import React from 'react';

const Discover = () => {
  return (
    <section className="discover1">
      <p style={{ marginLeft: '20px', fontSize: '16px', fontWeight: 'bold' }}>Discover</p>
      <div style={{ display: 'flex', marginLeft: '20px' }}>
        <div className="discover-item">
          <div className="container5">
            <img src="img/shop-bag_svgrepo.com-1.svg" style={{ marginTop: '10px' }} alt="" />
          </div>
          <p style={{ fontSize: '10px' }}>Buy FASTag</p>
        </div>
        <div className="discover-item">
          <div className="container5">
            <img src="img/published_with_changes-1.svg" style={{ marginTop: '10px' }} alt="" />
          </div>
          <p style={{ fontSize: '10px' }}>Recharge FASTag</p>
        </div>
        <div className="discover-item">
          <div className="container5">
            <img src="img/done_all-1.svg" style={{ marginTop: '10px' }} alt="" />
          </div>
          <p style={{ fontSize: '10px' }}>FASTag History</p>
        </div>
        <div className="discover-item">
          <div className="container5">
            <img src="img/scan_delete-1.svg" style={{ marginTop: '10px' }} alt="" />
          </div>
          <p style={{ fontSize: '10px' }}>Close FASTag</p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
