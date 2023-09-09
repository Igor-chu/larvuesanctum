<template>
    <div class="w-25">
        <div class="mt-3">Registration</div>
        <input v-model="name" type="text" class="form-control mb-3 mt-3" placeholder="name">
        <input v-model="email" type="email" class="form-control mb-3 mt-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="password confirmation">
        <input @click.prevent="register" type="submit" value="register" class="btn btn-primary">
    </div>
</template>

<script>
    export default {
        mame: "Registration",

        data() {
            return {
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        },

        methods: {
            register() {
                axios.get('/sanctum/csrf-cookie')
                    .then(response => {
                        axios.post('/register', {
                            name: this.name,
                            email: this.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        })
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            console.log(res.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({name: 'user.personal'})
                        })
                    })
            }
        }
    }
</script>

<style scoped>

</style>
