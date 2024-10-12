import axios from "axios";
const url = () => {
    return 'https://jsonplaceholder.typicode.com/'
}
class Api {
    getUsers(){
        return axios.get(url() + 'users').then(res=>res.data)
    }
    getUser(id:number){
        return axios.get(url() + 'users/' + id).then(res=>res.data)
    }
}

export const api = new Api()