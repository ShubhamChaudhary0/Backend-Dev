 function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Login Successfull");
            resolve();
        }, 2000);
    })
}

function useDetails(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("user details");
            resolve();
        },2000);
    })
}

function password(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Password");
            resolve();
        },2000)
    })
}

// callback promises
login()
.then(()=>{
    return useDetails();
})
.then(()=>{
    return password();
})
.then(()=>{
    console.log("All done");
}).catch((err)=>{
    console.error("Error:", err);
})