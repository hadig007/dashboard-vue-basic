<template>
    <header>
        <h1>Header</h1>
        <ul>
            <li><router-link to="/login">Login</router-link></li>
            <li><router-link to="/sign-up">SignUp</router-link></li>
        </ul>
    </header>
</template>
<script>
export default {
    
}
</script>

<style scoped>
header{
    background-color: gray;
    padding: 0.7rem;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-around;
}
ul{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
    margin: 0;
    padding: 5px 10px;
}
a{
    text-decoration: none;
    color: whitesmoke;
}
</style>