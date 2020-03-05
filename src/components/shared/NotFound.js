import React from 'react';
import clouds from '../../assets/img/clouds.svg';
import i18n from '../../i18n';

const Notfound = () => (
  <div className="card">
    <div className="card-body" style={{ marginTop: '5%' }}>
      <center>
        <img id="error-img" src={clouds} alt={i18n.t('notFound.iconAlt')} style={{ width: '5%' }} />
      </center>
      <center style={{
        lineHeight: '18px',
        fontSize: '24px',
        fontWeight: '200',
        marginTop: '8px'
      }}
      >
        <h1>{i18n.t('notFound.title')}</h1>
        <p>{i18n.t('notFound.message')}</p>
      </center>
    </div>
  </div>
);
export default Notfound;
