import axios from 'axios';
import React from 'react';
import { CONSTANTS } from '../app.config';

const createUser = async (userData) => {
    try {
        const response = await axios.post(CONSTANTS.API_BASE_URL, userData);
        console.log('data in api', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export default createUser;
