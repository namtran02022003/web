function CallApi(API,callback){
    
    fetch(API)
    .then((response)=> response.json())
    .then(callback)
}
export default CallApi