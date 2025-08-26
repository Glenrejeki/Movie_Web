// Get Method

fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=> {
    if((res)=> {
        throw new Error('Network responses not ok')
    })
    return res.json
}).then((data)=> {
    console.log(data)
}).catch(error => {
    console.log(error)
});
