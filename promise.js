// fetch data promises
let addUsersToList = document.querySelector(".users ul");
let userComments = document.querySelector(".users .comments");
let fetchUsers = fetch("https://jsonplaceholder.typicode.com/users");

fetchUsers
	.then((promise) => {
		return promise.json();
	})
	.then((users) => {
		users.map((user) => {
			addUsersToList.innerHTML += `<li userId=${user.id} onclick="getPosts(event)">${user.name}</li>`;
		});
	})
	.catch(() => {
		console.log("problem in fetching data");
	});

function getPosts(e) {
	let userId = e.target.attributes.userId.nodeValue;
	let getUserPosts = fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);

	getUserPosts
		.then((postPromise) => {
			return postPromise.json();
		})
		.then((posts) => {
			userComments.innerHTML = "";
			posts.map((post) => {
				userComments.innerHTML += `
                         <div class="comment">
                              <h2>${post.title}</h2>
                              <p>${post.body}</p>
                         </div>
                    `;
			});
		})
		.catch((error) => {
			console.log("problem on getting posts");
		});
}

// with async, await
async function getPosts(e) {
	let userId = e.target.attributes.userId.nodeValue;
	let getUserPosts = await fetch(
		`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
	);

	let response = await getUserPosts.json();

	userComments.innerHTML = "";
	response.map((post) => {
		userComments.innerHTML += `
               <div class="comment">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
               </div>
          `;
	});
}
