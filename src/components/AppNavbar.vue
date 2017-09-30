<template>
    <nav class="navbar">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/"><img src="../assets/images/logo.svg" alt=""></router-link>

            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li v-for="item in menu.items"><router-link :to="getAddress(item.url)">{{item.title}}</router-link></li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import Axios from 'axios'

    export default {
        name: 'navbar',
        data () {
            return {
                title: 'Ricardo Amb',
                menu: []
            }
        },
        methods: {
          getAddress(addr){
              return addr.replace('https://ricardoamb.000webhostapp.com','')
          }
        },
        created() {
            Axios.get('https://ricardoamb.000webhostapp.com/wp-json/menus/v1/menus/primary')
                .then((response) => {
                    this.menu = response.data
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
</script>

<style scoped>
    .navbar {
        border-radius: 0;
        border: none;
        background: #2a292a;
        font-size: 2rem;
        margin: 0;
        padding: 0;
    }
    .navbar-nav li a{
        color: #FFF;
    }
    .navbar-toggle span {
        background: #FFF;
        width: 40px;
        height: 5px;
        margin-bottom: 8px;
    }
    .navbar-toggle span:last-of-type{
        margin-bottom: 0;
    }
    .navbar-brand {
        padding-top: 7px;
        padding-bottom: 3px;
    }
    .navbar-brand img{
        height: 35px;
    }
    @media (max-width: 768px){
        .navbar-brand {
            padding-top: 10px;
            padding-bottom: 3px;
        }
        .navbar-brand img{
            height: 45px;
        }
    }
</style>
