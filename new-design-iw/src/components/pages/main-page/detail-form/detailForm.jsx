import React from 'react';
import TextField from '../text-field/textField.jsx';
import RadioButton from '../radio-button/radioButton.jsx';
import { motion } from 'framer-motion';
import './detailForm.css';
import PhoneNumberInput from '../phone-number-input/phone-code.jsx';

const DetailsForm = ({ formData, handleChange, handlePhoneChange, errors }) => {
  const fieldVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5, // Delays between animations
        duration: 1.5,        // Animation duration
        ease: 'easeInOut',    // Animation easing
      },
    },
  };

  return (
    <motion.div className="details-form-container" initial="hidden" animate="visible" variants={containerVariants}>
      <p className="details-form-p">Okay, now tell us more about yourself and your project</p>
      <div className="textfield-block" style={{ display: 'flex', gap: '20px' }}>
        <motion.div variants={fieldVariants} style={{ flex: 1 }}>
          <TextField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
        </motion.div>
        <motion.div variants={fieldVariants} style={{ flex: 1 }}>
          <TextField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </motion.div>
      </div>
      <div className="textfield-block">
        <motion.div variants={fieldVariants}>
          <PhoneNumberInput
            phone={formData.phoneNumber}
            handlePhoneChange={handlePhoneChange}
            error={errors.phoneNumber}
          />
        </motion.div>
      </div>

      <div className="form-group-block">
        <motion.div className="form-group" variants={fieldVariants}>
          <label className="form-group-label">What services do you need?</label>
          <div className="radio-group radio-group-services">
            <RadioButton label="Website" name="services" value="Website" checked={formData.services === 'Website'} onChange={handleChange} />
            <RadioButton label="Application" name="services" value="Application" checked={formData.services === 'Application'} onChange={handleChange} />
            <RadioButton label="Other" name="services" value="Other" checked={formData.services === 'Other'} onChange={handleChange} />
          </div>
          {errors.services && <p className="error-text">{errors.services}</p>}
        </motion.div>

        <motion.div className="form-group" variants={fieldVariants}>
          <label className="form-group-label">Budget in USD</label>
          <div className="radio-group radio-group-budget">
            <RadioButton label="1K-5K" name="budget" value="From1Kto5K" checked={formData.budget === 'From1Kto5K'} onChange={handleChange} />
            <RadioButton label="5K-10K" name="budget" value="From5Kto10K" checked={formData.budget === 'From5Kto10K'} onChange={handleChange} />
            <RadioButton label="10K-50K" name="budget" value="From10Kto50K" checked={formData.budget === 'From10Kto50K'} onChange={handleChange} />
            <RadioButton label="More than 50K" name="budget" value="MoreThan50K" checked={formData.budget === 'MoreThan50K'} onChange={handleChange} />
          </div>
          {errors.budget && <p className="error-text">{errors.budget}</p>}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DetailsForm;