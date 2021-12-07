const { createApp } = Vue;

const myApp = {
    data() {
        return {
            data: {},
        }
    },
  async created() {
    try {
        const { data } = await axios.get('http://localhost:3000/weather/getData');
        this.data = data;
        console.table(data.current);
        console.table(data.daily);
    } catch (error) {
      console.log(error);
    }
  },
};

createApp(myApp).mount('#app');
