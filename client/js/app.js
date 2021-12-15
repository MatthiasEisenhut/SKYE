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
      currentdatetime: "",
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      imagetoday: "",
      imagetwo: "",
      imagethree: "",
      imagefour: "",
      imagefive: "",
      imagesix: "",
    };
  },
  async created() {
    const { data } = await axios.get("http://localhost:3000/weather/getData");
    this.weather = data;

    const directions = ["N", "N-E", "E", "S-E", "S", "S-W", "W", "N-W  "];
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const secondday = new Date(this.weather.daily[1].dt * 1000);
    const thirdday = new Date(this.weather.daily[2].dt * 1000);
    const fourthday = new Date(this.weather.daily[3].dt * 1000);
    const fifthday = new Date(this.weather.daily[4].dt * 1000);
    const sixthday = new Date(this.weather.daily[5].dt * 1000);
    const rise = new Date(this.weather.current.sunrise * 1000);
    const down = new Date(this.weather.current.sunset * 1000);

    this.sunrise =
      rise.getHours() +
      ":" +
      rise.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

    this.sundown =
      down.getHours() +
      ":" +
      down.getMinutes().toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

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

    this.currentdatetime =
      weekday[today.getDay()] +
      ", " +
      today.getDate() +
      " " +
      month[today.getMonth()];

    this.one = weekday[today.getDay()];
    this.two = weekday[secondday.getDay()].substring(0, 3);
    this.three = weekday[thirdday.getDay()].substring(0, 3);
    this.four = weekday[fourthday.getDay()].substring(0, 3);
    this.five = weekday[fifthday.getDay()].substring(0, 3);
    this.six = weekday[sixthday.getDay()].substring(0, 3);

    const index =
      Math.round(
        ((this.weather.current.wind_deg %= 360) < 0
          ? this.weather.current.wind_deg + 360
          : this.weather.current.wind_deg) / 45
      ) % 8;
    this.dir = directions[index];

    this.imagetoday = `http://openweathermap.org/img/wn/${this.weather.current.weather[0].icon}@2x.png`;
    this.imagetwo = `http://openweathermap.org/img/wn/${this.weather.daily[1].weather[0].icon}@2x.png`;
    this.imagethree = `http://openweathermap.org/img/wn/${this.weather.daily[2].weather[0].icon}@2x.png`;
    this.imagefour = `http://openweathermap.org/img/wn/${this.weather.daily[3].weather[0].icon}@2x.png`;
    this.imagefive = `http://openweathermap.org/img/wn/${this.weather.daily[4].weather[0].icon}@2x.png`;
    this.imagesix = `http://openweathermap.org/img/wn/${this.weather.daily[5].weather[0].icon}@2x.png`;
  },
};

createApp(myApp).mount("#app");
