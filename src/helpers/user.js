
import AppStorage from './appStorage'
 import Token from './token'


export default{
    responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.nama
        if(Token.isValid(access_token)){
            AppStorage.store(access_token,username)
        }
    },

    hasToken(){
        const storeToken = localStorage.getItem(AppStorage.getToken);
        if(storeToken){
            return Token.isValid(storeToken) ? true : false
        }
        false
    },

    loggedIn(){
        console.log('yes loggend in')
        console.log(this.hasToken)
        return this.hasToken;
    },

    name(){
        if(this.loggedIn()){
            return localStorage.getItem(AppStorage.getUser)
        }
    },

    id(){
        if(this.loggedIn()){
            const payload = Token.payload(localStorage.getItem('token'));
            return payload.sub   
        }
        return false; 
    }
}
