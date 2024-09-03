const themeBtn = addEventListener('click', () => {
    document.body.setAttribute('background-color:', 'white;')
})

const allPosts = JSON.parse(localStorage.getItem('posts'))

function renderPost() {
    

    for(i = 0; i < allPosts.length; i++) {
        const postsContainer = document.createElement('div')
        postsContainer.setAttribute('class', 'postsContainer')

        const usernameEl = document.createElement('h1');
        usernameEl.setAttribute('class', 'username')
        usernameEl.textContent = `${allPosts[i].username}`

        const subjectEl = document.createElement('h3')
        subjectEl.setAttribute('class', 'subject')
        subjectEl.textContent = `${allPosts[i].subject}`

        const contentEl = document.createElement('div');
        contentEl.setAttribute('class', 'content')
        contentEl.textContent = `${allPosts[i].content}`
        
        postsContainer.appendChild(usernameEl)
        postsContainer.appendChild(subjectEl)
        postsContainer.appendChild(contentEl)
        document.body.append(postsContainer)

    }
}

renderPost()