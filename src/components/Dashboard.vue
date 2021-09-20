<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <header-dashboard></header-dashboard>
            </div>
            <div class="row">
                <div class="col-md-3">
                   <div class="sidebar">
                        <h3>Hadi Gunawan</h3>
                        <div class="others">
                            <h4 v-for="(other, index) in others" :key="index">
                               <li>
                                   <router-link :to="'/home/' + other.id ">
                                        {{ other.title }} <i class="fas fa-chevron-right"></i>
                                   </router-link>
                               </li>
                            </h4>
                        </div>
                   </div>
                </div>
                <div class="col-md-9">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderDashboard from './HeaderDashboard.vue'
export default {
  components: { HeaderDashboard },
    data(){
        return{
            others:[
            {id:'pos', title:'Pos'},
            {id:'orders', title:'Orders'},
            {id:'pos', title:'Pos'},
            {id:'orders', title:'Orders'},
            {id:'pos', title:'Pos'},
            {id:'orders', title:'Orders'},
            {id:'pos', title:'Pos'},
            {id:'orders', title:'Orders'},
            {id:'pos', title:'Pos'},
            {id:'orders', title:'Orders'},
            ]
        }
    }
}
</script>

<style scoped>

h1{
    margin: 0 50px;
    text-align: start;
}
.row>*{
    padding: 0;
}
.sidebar{
    background-color: whitesmoke;
}
li{
    list-style: none;
    padding: 3px 40px;
    transition: .2s;
}
h3{
    background-color: rgb(221, 221, 221);
    padding: 1rem;
    border-bottom: solid 3px rgb(196, 196, 196);
}
a{
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: rgb(17, 65, 87);
}
h4{
    text-align: start;
    transition: .25s;
}
li:hover,
h4:hover{
    transform: scale(1.05);
    background-color: rgb(226, 226, 226);
}
</style>

