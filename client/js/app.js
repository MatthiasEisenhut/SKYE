const { createApp } = Vue;

const myApp = {
  data() {
    return {
      weather: [],
      sunrise: "",
      sundown: "",
      date: "",
    };
  },
  async created() {
    const { data } = await axios.get("http://localhost:3000/weather/getData");
    this.weather = data;
    console.log(this.weather);

    var rise = new Date(this.weather.current.sunrise * 1000);
    this.sunrise =
      rise.getHours() +
      ":" +
      rise.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    var down = new Date(this.weather.current.sunset * 1000);
    this.sundown =
      down.getHours() +
      ":" +
      down.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    var today = new Date(this.weather.current.dt * 1000);
    this.date = today.getDate() + "/" + today.getMonth();
  },
};

createApp(myApp).mount("#app");
