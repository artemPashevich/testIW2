// import React from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import './phone-code.css';

// const PhoneNumberInput = ({ phone, handlePhoneChange }) => {
//   return (
//     <div className="phone-textfield-container">
//       <label className="phone-textfield-label" htmlFor="phoneNumber">
//         Phone Number
//       </label>
//       <PhoneInput
//         country={'us'}
//         value={phone}
//         onChange={handlePhoneChange} // Ensure this correctly updates phone number in parent
//         inputProps={{
//           name: 'phoneNumber', // Make sure this aligns with the formData key
//           required: true,
//           id: 'phoneNumber',
//         }}
//         containerClass="phone-input-container"
//         inputClass="phone-textfield-input"
//         buttonClass="phone-input-button"
//       />
//     </div>
//   );
// };

// export default PhoneNumberInput;

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './phone-code.css';

const PhoneNumberInput = ({ phone, handlePhoneChange, error }) => {
  return (
    <div className="phone-textfield-container">
      <label className="phone-textfield-label" htmlFor="phoneNumber">
        Phone Number
      </label>
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          name: 'phoneNumber',
          required: true,
          id: 'phoneNumber',
        }}
        containerClass="phone-input-container"
        inputClass={`phone-textfield-input ${error ? 'phone-error' : ''}`}
        buttonClass="phone-input-button"
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;