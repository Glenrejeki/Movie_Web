function getUserData(callback){
    console.log('Fetching user data')

    setTimeout(()=> {
        const userData = {
            id : 1,
            name : 'glen',
            email : 'glen.tbjs@gmail.com'

        }
        
        callback(null,userData)
    }, 5000)

}

function displayUserData(error,userData){

    if(error){
        console.error('Error fetching user data : ', error)
    } else{
    console.log('User Data : ', userData)
    }
}

getUserData(displayUserData)