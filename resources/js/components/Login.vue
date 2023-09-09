<template>
    <div class="w-25">
        Login
        <input v-model="email" type="email" class="form-control mb-3 mt-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input @click.prevent="login" type="submit" value="login" class="btn btn-primary">
    </div>
</template>

<script>
    export default {
        mame: "Login",

        data() {
            return {
                email: null,
                password: null
            }
        },

        methods: {
            login() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios.post('/login', {email: this.email, password: this.password})
                            .then(r => {
                                localStorage.setItem('x_xsrf_token', r.config.headers['X-XSRF-TOKEN'])
                                this.$router.push({name: 'user.personal'})
                            })
                            .catch(err => {
                                console.log(err.response);
                            })
                })
            }
        }
    }
</script>

<style scoped>

</style>
