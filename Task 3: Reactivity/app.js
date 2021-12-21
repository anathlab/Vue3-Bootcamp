const app = Vue.createApp ({
    data(){
        return {
            counter:  0,
            messA: 'Not there yet',
            messB: 'Too much!',
        }
    },
    computed: {
        mess (){
            if(this.counter > 37) {
                return this.messB;
            }else {
                return this.messA;
            }
        }

    },
    watch: {
        counter(value){
            if( value > 37){
                const that = this;
                setTimeout(function(){
                    that.counter = 0;
                }, 5000);

            }
        },
    },
    methods: {
        add (num){
            this.counter = this.counter + num;
        },
    }
});

app.mount('#assignment');