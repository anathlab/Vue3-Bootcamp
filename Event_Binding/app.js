const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
    };
  },
  computed: {
    fullname(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'LastName';
    },
  },
  methods: {
    outputFullName(){
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'LastName';
    },
    resetInput (){
      this.name = '';
    },
    confirmInput(){
      this.confirmName = this.name;
    },
    submitForm(event){
      event.preventDefault();
      alert("Submitted!");
    },
    setName(event){
      this.name = event.target.value;
    },
    secSetName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
    Add(num){
      this.counter = this.counter + num;
    },
    Remove(num){
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
