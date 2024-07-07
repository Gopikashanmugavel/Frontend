import React from 'react';

const FastagRecharge = ({ recharge }) => (
  <div className="container4">
    <section className="fastag-recharge">
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>FASTag Recharge</p>
      <p style={{ fontSize: '14px' }}>Get upto 100% cashback on first 3 Fastag Recharges</p>
      <div style={{ display: 'flex' }}>
        <input className="input" type="text" placeholder="Add vehicle or chassis no." />
        <button onClick={recharge}>Recharge</button>
      </div>
      <div style={{ display: 'flex', marginLeft: '20px' }}>
        <p>Powered by</p>
        <img src="img/national-electronic-toll-collection-netc-logo-vector_svgrepo.com-1.png" style={{ marginLeft: '15px' }} alt="" />
        <img src="img/bharat-billpay-seeklogo.com_svgrepo.com.png" style={{ marginLeft: '15px' }} alt="" />
      </div>
    </section>
    <hr style={{ width: '300px' }} />
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

  </div>

   
);

export default FastagRecharge;
