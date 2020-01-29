import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBotton: '5px' }} />
      <div className="red-text" style={{ marginBotton: '20px' }}>
        {touched && error}

      </div>
    </div>
  )

}

export default SurveyField;