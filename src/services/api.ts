import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' });

export function setAuthHeader(token: string) {
	api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export function postItem<T = unknown>(url: string, data: any): Promise<T | null> {
	const response = api
		.post(url, data)
		.then((response) => response.data)
		.catch(() => null);

	return response;
}

export default api;
