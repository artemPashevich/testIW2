import { apiRequest } from './apiServices';

/**
 * Add a new client by sending a POST request
 * @param {object} clientData - The client data (e.g., name, email, phone, etc.)
 * @returns {Promise<any>}
 */
export const addClient = async (clientData) => {
  return await apiRequest('clients', 'POST', clientData);
};