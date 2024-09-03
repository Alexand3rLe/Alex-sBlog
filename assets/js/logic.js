const blogPosts = [];

function storeBlogPosts() {
    localStorage.setItem('posts', JSON.stringify(blogPosts))
}



