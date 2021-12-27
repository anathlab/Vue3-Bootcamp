const app = Vue.createApp({
  data() {
    return {
       goals: [],
       enteredGoalValue: '',
      };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx){
      this.goals.splice(idx,1);
    },     
  }
});

app.mount('#user-goals');
