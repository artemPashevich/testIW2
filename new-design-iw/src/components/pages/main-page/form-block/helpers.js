import { validateNotEmpty, validateEmail } from '/backend/validation';

export const validateFormData = (email, formData, showDetailsForm) => {
  const newErrors = {};

  if (!validateNotEmpty(email)) {
    newErrors.email = 'Email is required.';
  } else if (!validateEmail(email)) {
    newErrors.email = 'Invalid email address.';
  }

  if (showDetailsForm) {
    if (!validateNotEmpty(formData.firstName)) {
      newErrors.firstName = 'First name is required.';
    }
    if (!validateNotEmpty(formData.services)) {
      newErrors.services = 'Service is required.';
    }
    if (!validateNotEmpty(formData.budget)) {
      newErrors.budget = 'Price range is required.';
    }
  }

  return newErrors;
};