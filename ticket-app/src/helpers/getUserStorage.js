export const  getUserStorage = () =>{
    return{
        username: localStorage.getItem('username'),
        desktop: localStorage.getItem('desktop')
    }
}
