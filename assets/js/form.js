const blogForm = document.querySelector('#blog-form')
const userNameInput = document.querySelector('#username');
const subjectInput = document.querySelector('#subject');
const contentInput = document.querySelector('#content');
const postbtn = document.querySelector('#postbtn');

postbtn.addEventListener('click', function(event){
    event.preventDefault()

    const userPost = {
        username: userNameInput.value,
        subject: subjectInput.value,
        content: contentInput.value
    }

    blogPosts.push(userPost)
    storeBlogPosts()
})
