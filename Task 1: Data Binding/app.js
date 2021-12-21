const app = Vue.createApp({
    data(){
        return {
            name: 'Anita',
            myAge: 23,
            value: '',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
        };
    },
    methods: {
        favoriteNumber(){
            const randomNumber = Math.random();
            return randomNumber;

        }

    }
});
app.mount('#assignment');