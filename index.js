/* Fetching Posts & Displaying Comments */

// Get all users
const getAllUsers = async () => {
	const getUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const retrievedUsers = await getUsers.json();

	return retrievedUsers;
};

// Get all posts
const getAllPosts = async () => {
	const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const retrievedPosts = await getPosts.json();

	return retrievedPosts;
};
