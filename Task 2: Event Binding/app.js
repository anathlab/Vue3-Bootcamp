const app  = Vue.createApp({
    data(){
     return {
     input: '',
     c: '',
     };
    },
    methods: {
        confirmInput(){
            this.c = this.input;
        },
        showAlert(event) {
            event.preventDefault();
            alert("Alert");
        },
        setInput(event){
            this.input = event.target.value;
        },

    }
})

app.mount('#assignment');