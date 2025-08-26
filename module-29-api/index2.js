// Post method 

const postData = {
    title : "New Post",
    body : "Ini bagian post yang baru",
    userId : 1
}

fetch('https://jsonplaceholder.typicode.com/posts'),{
    method :'POSTS',
    hedears :{
        'Content-type ': 'application/json'
    },

    body :JSON.stringify(postData)
}.then(response=> response.json()).then((data)=> console.log('Data posted :', data)).catch(error =>{

})