let posts = JSON.parse(localStorage.getItem('posts'));

let displayContainer = document.getElementById('displayContainer')




     for (i = 0; i<posts.length; i++) {
        let postContainer = document.createElement('div');
        postContainer.setAttribute('class', 'pContainer')

        let usernameEl = document.createElement('h1');
        usernameEl.textContent = `${posts[i].username}`;
        postContainer.appendChild(usernameEl);

        let subjectEl = document.createElement('h3');
        subjectEl.textContent = `${posts[i].subject}`;
        postContainer.appendChild(subjectEl);

        let contentEl = document.createElement('p')
        contentEl.textContent = `${posts[i].content}`
        postContainer.appendChild(contentEl)

        displayContainer.appendChild(postContainer)
        }






// const allPosts = JSON.parse(localStorage.getItem('posts'))

// function renderPost() {
    

//     for(i = 0; i < allPosts.length; i++) {
//         const postsContainer = document.createElement('div')
//         postsContainer.setAttribute('class', 'postsContainer')

//         const usernameEl = document.createElement('h1');
//         usernameEl.setAttribute('class', 'username')
//         usernameEl.textContent = `${allPosts[i].username}`

//         const subjectEl = document.createElement('h3')
//         subjectEl.setAttribute('class', 'subject')
//         subjectEl.textContent = `${allPosts[i].subject}`

//         const contentEl = document.createElement('div');
//         contentEl.setAttribute('class', 'content')
//         contentEl.textContent = `${allPosts[i].content}`
        
//         postsContainer.appendChild(usernameEl)
//         postsContainer.appendChild(subjectEl)
//         postsContainer.appendChild(contentEl)
//         document.body.append(postsContainer)

//     }
// }

// renderPost()