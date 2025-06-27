// src/utils/api.js
// Centralized API utility for frontend to connect with backend

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050/api';

// Generic GET request
export async function apiGet(path) {
    const response = await fetch(`${BASE_URL}${path}`, {
        credentials: 'include',
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

// Generic POST request
export async function apiPost(path, data) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

// Generic PUT request
export async function apiPut(path, data) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

// Generic DELETE request
export async function apiDelete(path) {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

// Example usage:
// import { apiGet, apiPost } from '../utils/api';
// const user = await apiGet('/user/profile');
// const result = await apiPost('/user/login', { email, password });
