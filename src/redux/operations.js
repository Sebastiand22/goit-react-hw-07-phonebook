import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://666748d3a2f8516ff7a7035f.mockapi.io/contacts';

// Se definește si se exporta o acțiune asincronă numită 'fetchContacts' folosind createAsyncThunk:
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Numele acțiunii (în acest caz, 'contacts/fetchAll')

  // Callback asincron invocat când acțiunea este declanșată (dispatch):
  async (_, thunkAPI) => {
    try {
      // Se realizează o cerere GET către server pentru a obține datele despre contacte:
      const response = await axios.get('/contacts');

      // Afișează datele în consolă:
      console.log('Datele din API:', response.data);

      // Returnează datele obținute de la server:
      return response.data;
    } catch (error) {
      // În caz de eroare, se respinge cu o valoare care include mesajul de eroare:
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

    // ==== Actiunea asincrona addContact: ====
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ==== Actiunea asincrona deleteContact: ====
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
