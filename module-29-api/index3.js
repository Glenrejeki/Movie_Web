// async dgn fetch



async function getPost(params) {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        if(res){
            throw new Error('Network responses not ok')
        }   
        const data =await res.json()
        console.log(data)
    } catch (error) {
            console.log(`error :${error}`)

    }
}


getPost()