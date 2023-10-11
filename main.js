const app = Vue.createApp ({
    data () {
        return {
            cart: 0,
            premium: true
        }
    },

    methods: {
        updateCart(id){
            this.cart += 1
        }
    }
    
})
