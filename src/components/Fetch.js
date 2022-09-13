

export const Fetch = (promesa)=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(promesa)
    },2000)
})
}