import Axios from 'axios';
import {urls} from "./urls";

Axios.defaults.headers.common['Content-Type'] = 'application/json';
Axios.defaults.baseURL = 'https://repo-code-uninorte.herokuapp.com/api/v1';
Axios.defaults.headers.common['Accept'] = 'application/json';
export default class Common {
    static getHeader() {
        return {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    static login(email,password, onSuccess, onError) {
        Axios.post(urls.login,{
            email,
            password
        }).then(Response=>{ 
            const token = Response.data.data.token
            localStorage.setItem('token',token)            
            onSuccess(true);
        }).catch(Error=>{
            onError(Error
            )
        })
    }
    static vote(apunte, onSuccess, onError) {


    }

};

