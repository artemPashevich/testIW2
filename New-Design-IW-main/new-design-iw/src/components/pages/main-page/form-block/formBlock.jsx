import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TextField from '../text-field/textField.jsx';
import MainButton from '../../../buttons/main-button.jsx';
import DetailsForm from '../detail-form/detailForm.jsx';
import './formBlock.css';
import { Reveal } from '/src/animations/reveal.tsx';
import { addClient } from '/backend/HTTPSrequests.js';  
import { mapServicesToInt, mapBudgetToInt } from './mapValues.js';  
import { validateFormData } from './helpers.js';
import { triggerConfetti } from '/src/animations/confetti';
import Congratulation from '../congratulation/congratulation.jsx'

const formBlockVariants = {
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }, 
  exit: { opacity: 0, transition: { duration: 1, ease: "easeInOut" } }, 
};

const newBlockVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }, 
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    services: '',
    budget: '',
  });
  const [errors, setErrors] = useState({});
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); 

  const thankYouRef = useRef(null);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: phone,
    }));
  };

  
  useEffect(() => {
    if (formSubmitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formSubmitted]);

  
  const validateForm = () => {
    const newErrors = validateFormData(email, formData, showDetailsForm);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loading) {
      setLoading(true);
      const isValid = validateForm();
      if (isValid) {
        const clientData = {
          email,
          name: `${formData.firstName} ${formData.lastName}`,
          phone: formData.phoneNumber,
          service: mapServicesToInt(formData.services),
          priceRange: mapBudgetToInt(formData.budget),
          withSubscription: false,
          isCustom: false,
        };

        try {
          if (showDetailsForm) {
            // Second POST request for full client data
            const response = await addClient(clientData);
            console.log('Client full data added successfully:', response);
            triggerConfetti();  // Show confetti after success
            setFormSubmitted(true);  // Trigger fade-out animation and scroll
          } else {
            // First POST request with just email
            const emailData = { email };
            const response = await addClient(emailData);
            console.log('Client email added successfully:', response);
            setShowDetailsForm(true);  // Proceed to details form
          }
        } catch (error) {
          console.error('Error submitting client data:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        console.log('Validation failed. Errors:', errors);
      }
    }
  };

  return (
    <div id="formBlock" className="container">
      <AnimatePresence>
        {!formSubmitted && (
          <motion.div
            className="contact-form-container"
            initial="visible"
            animate="visible"
            exit="exit"
            variants={formBlockVariants}  // Fade-out animation
            key="contact-form"  // Key ensures unique identification for AnimatePresence
          >
            <Reveal>
              <h2 className="contact-form-h2">Let's start your project</h2>
            </Reveal>
            <Reveal>
              <p className="contact-form-p">
                Begin by entering your email, or if you'd like to share more details, feel free to text us at{' '}
                <a className="contact-form-a" href="mailto:contact@innovatework.net">contact@innovatework.net</a>
              </p>
            </Reveal>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                error={errors.email}
              />
              {showDetailsForm && (
                <DetailsForm
                  formData={formData}
                  handleChange={handleDetailsChange}
                  handlePhoneChange={handlePhoneChange}
                  errors={errors}
                />
              )}
              <MainButton 
                type="submit" 
                title={showDetailsForm ? "Send my message" : "Send email"}
                disabled={loading} 
              />
            </form>
          </motion.div>
        )}

        {formSubmitted && (  
         <motion.div
            className="congratulation-container"
            ref={thankYouRef}
            initial="hidden"
            animate="visible"
            variants={newBlockVariants} 
            key="thank-you-block"
            >
            <Congratulation />
         </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;