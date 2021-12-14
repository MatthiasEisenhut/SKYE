const { createApp } = Vue;

const myApp = {
  data() {
    return {
      weather: [],
      sunrise: "",
      sundown: "",
      date: "",
      ampm: "",
      dir: "",
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
    this.date =
      today.getHours() +
      ":" +
      today.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    if (today.getHours() <= 12) {
      this.ampm = "AM";
    } else {
      this.ampm = "PM";
    }

    var directions = ["N", "N-E", "E", "S-E", "S", "S-W", "W", "N-W  "];

    var index =
      Math.round(
        ((this.weather.current.wind_deg %= 360) < 0
          ? this.weather.current.wind_deg + 360
          : this.weather.current.wind_deg) / 45
      ) % 8;
    this.dir = directions[index];
  },
};

createApp(myApp).mount("#app");
