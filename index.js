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

const displayNamePostAndTitle = async () => {
	const users = await getAllUsers();
	const posts = await getAllPosts();

	// Display the title, post, and user on the page
	const displayPostAndUser = (matchFound) => {
	const postContainer = document.getElementsByClassName("posts")[0];

		const post = posts.find((post) => {
			return post.userId === matchFound;
		});

		const user = users.find((user) => {
			return user.id === matchFound;
		});

		postContainer.innerHTML += `<div class='post-block' id='${post.id}'><strong>Post Title:</strong> ${post.title}<br>
									<strong>Post:</strong> ${post.body}<br>
									<span class='authors-name'><strong>Author's Name:</strong> ${user.name}</span><br>
									<strong>Post Id:</strong> ${post.id}<br></div>`;
	};
	
	// Grab and display the first post that appears in the list for each of the users
	users.forEach((user) => {
		displayPostAndUser(user.id);
	});

	getComments();
};

displayNamePostAndTitle();

// Display comments for each post when clicked
const getComments = async () => {
	const postBlock = await document.querySelectorAll(".post-block");

	postBlock.forEach((post) => {
		post.addEventListener("click", function () {
			displayComments(this.id);
		});
	});
};

// Display comments for post with specific id
const displayComments = async (thisPostId) => {
	const getComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${thisPostId}/comments`);
	const retrievedComments = await getComments.json();
	let thisPostWithASpecificId = document.getElementById(thisPostId); 

	retrievedComments.forEach((comment) => {
		thisPostWithASpecificId.innerHTML += `<div class='comment'>
												<span class='comment-label'>Comment:</span> ${comment.name}<br>
												<span class='comment-label'>Name:</span> ${comment.name}</div>`;
	});

	thisPostWithASpecificId.style.pointerEvents = "none";
};

