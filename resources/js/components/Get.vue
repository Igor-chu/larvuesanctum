<template>
    <div>
        GET
    </div>
</template>

<script>
    export default {
        mame: "Get",

        mounted() {
            this.getData()
        },

        methods: {
            getData() {
                axios.get('/api/get')
                    .then(res => {
                        console.log(res);
                    })
            }
        }
    }

</script>

<style scoped>

</style>
