document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // let username = document.getElementById('username').value;
    // let subject = document.getElementById('subject').value;
    // let content = document.getElementById('content').value; 

    let postObj = {
        username: document.getElementById('username').value,
        subject: document.getElementById('subject').value,
        content: document.getElementById('content').value

    };

    // Retrieve existing posts from local storage or initialize an empty array if no posts exist
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // Add the new post to the posts array
    posts.push(postObj);

    // Save the updated posts array back to local storage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to the blog.html page
    window.location.href = 'blog.html';
});


//WHAT I LEARNED: The event listener should be on the entire form with a type of submit followed by the callback function. the let posts item is what I got stuck on because I didn't think to use the OR operator to prevent overriding
 //the local storage array




//OLD CODE
// const blogPosts = [];

// function storeBlogPosts() {
//     localStorage.setItem('posts', JSON.stringify(blogPosts))
// }

// const blogForm = document.querySelector('#blog-form')
// const userNameInput = document.querySelector('#username');
// const subjectInput = document.querySelector('#subject');
// const contentInput = document.querySelector('#content');
// const postbtn = document.querySelector('#postbtn');

// postbtn.addEventListener('click', function(event){
//     event.preventDefault()

//     const userPost = {
//         username: userNameInput.value,
//         subject: subjectInput.value,
//         content: contentInput.value
//     }

//     blogPosts.push(userPost)
//     storeBlogPosts()
// })