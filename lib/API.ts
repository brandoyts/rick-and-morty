import axios from 'axios';

const API = axios.create({
	baseURL: 'https://rickandmortyapi.com/api/',
	headers: { 'Content-Type': 'application/json' },
});

export default API;
