import React from 'react';
import clouds from '../../assets/img/clouds.svg';

const Notfound = () => (
  <div className="card">
    <div className="card-body" style={{ marginTop: '5%' }}>
      <center>
        <img id="error-img" src={clouds} alt="Error" style={{ width: '5%' }} />
      </center>
      <center style={{
        lineHeight: '18px',
        fontSize: '24px',
        fontWeight: '200',
        marginTop: '8px'
      }}
      >
        <p>This page doesn't exist.</p>
        <p>Verify that you have correctly written the link you want.</p>
      </center>
    </div>
  </div>
);
export default Notfound;
