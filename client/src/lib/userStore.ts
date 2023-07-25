// userStore.ts
import { writable } from 'svelte/store';

// Define the initial user data (or set it to null if no user is logged in)
const initialUser = {
	id: '',
	email: '',
	name: '',
	userType: '',
	chatIDs: []
};

// Helper function to set the user data in localStorage
const setUserToLocalStorage = (user) => {
	if (typeof localStorage !== 'undefined') {
		localStorage.setItem('user', JSON.stringify(user));
	}
};

// Helper function to get the user data from localStorage
const getUserFromLocalStorage = () => {
	if (typeof localStorage !== 'undefined') {
		const userData = localStorage.getItem('user');
		return userData ? JSON.parse(userData) : initialUser;
	}
	return initialUser;
};

// Create the writable store with the initial user data
export const userStore = writable(getUserFromLocalStorage());

// Subscribe to changes in the userStore and save the updated user data to localStorage
userStore.subscribe((value) => {
	setUserToLocalStorage(value);
});
