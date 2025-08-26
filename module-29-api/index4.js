// Axios -> library js mempermudah kerja dgn API lebih singkat // Get Method

axios.get('https://jsonplaceholder.typicode.com/posts/1').then((data)=> {
    console.log(data)
}).catch(error => {
    console.log(error)
});
