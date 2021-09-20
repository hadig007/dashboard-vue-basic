<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <div class="full-form">
                    <div class="header">
                        <h2>Register Page</h2>
                    </div>
                    <form @submit.prevent="signUp">
                        <div class="form">
                            <label for="firstName">First Name</label>
                            <input type="text" v-model.trim="datas.firstName" name="firstName" id="firstName" placeholder="insert your firstName..">
                        </div>
                        <div class="form">
                            <label for="lastName">Last Name</label>
                            <input type="text" v-model.trim="datas.lastName" name="lastName" id="lastName" placeholder="insert your lastName..">
                        </div>
                        <div class="form">
                            <label for="email">Email</label>
                            <input type="email" v-model.trim="datas.email" name="email" id="email" placeholder="insert your email..">
                        </div>
                        <div class="form">
                            <label for="password">Password</label>
                            <input type="password" v-model.trim="datas.password" name="password" id="password" placeholder="insert your password..">
                        </div>
                        <button class="btn btn-secondary">Sign Up</button>
                        <p>have an account, <router-link to="/login">login</router-link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datas:{
                firstName:'',
                lastName:'',
                email:'',
                password:''
            }
        }
    },
    emits:['sign-up'],
    methods:{
        signUp(){
            console.log(this.datas)
        }
    }
}
</script>

<style scoped>
.full-form{
    /* background-color: purple; */
    margin-top: 30%;
    padding: 1.2rem;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    color: gray;
    border-radius: 4px;
}
h2{
    text-align: center;
    /* background-color: purple; */
    border-bottom: solid gray 2px;
    padding-bottom: 10px;
    font-weight: bold;
}
form{
    background-color: white;
    display: flex;
    flex-direction: column;
}
.form{
    margin:10px 0;
    display: flex;
    flex-direction: column;
    padding: 0.2rem;
}
label{
    color: gray;
    font-weight: bold;
}
input{
    border-radius: 4px;
    border: solid gray 1px;
    font-size: 1rem;
    padding:0 5px;
    color: gray;
}
p {
    margin: 5px 0;
    text-align: start;
}
a{
    text-decoration: none;
}
</style>
