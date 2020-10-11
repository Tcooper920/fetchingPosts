/* Fetching Posts & Displaying Comments */

// Get all users
const getAllUsers = async () => {
	const getUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const retrievedUsers = await getUsers.json();

	return retrievedUsers;
};

