<template>
    <div>
        <router-link to="/" class="m-2">Home</router-link>
        <router-link v-if="token" :to="{name: 'get.index'}" class="m-2">Get</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}" class="m-2">Personal</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}" class="m-2">Login</router-link>
        <router-link v-if="!token" :to="{name: 'user.registration'}" class="m-2">Registration</router-link>
        <a href="#" v-if="token" @click.prevent="logout" class="m-2">Logout</a>

        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Index",

        data(){
            return {
                token: null
            }
        },

        mounted() {
            this.getToken()
        },

        updated() {
            this.getToken()
        },

        methods: {
            getToken(){
                this.token = localStorage.getItem('x_xsrf_token')
            },

            logout() {
                axios.post('/logout')
                    .then(res => {
                        localStorage.removeItem('x_xsrf_token')
                        this.$router.push({name: 'user.login'})
                    })
            }

        }
    }
</script>
