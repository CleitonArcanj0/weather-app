export const weatherMock = {
  location: {
    city: "Kyiv",
    country: "Ukraine",
  },

  current: {
    date: "Tuesday",
    time: "11:56",
    temperature: 10,
    condition: "Cloudy",
    weatherCode: 3,

    humidity: 73,
    windSpeed: 10,
    rainProbability: 90,

    sunrise: "4:53 am",
    sunset: "8:13 pm",
    daylightDuration: "15 h 32 m",
  },

  forecast: [
    {
      id: 1,
      day: "Today",
      condition: "Cloudy",
      weatherCode: 3,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 2,
      day: "Wed",
      condition: "Partly Cloudy",
      weatherCode: 2,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 3,
      day: "Thu",
      condition: "Rain",
      weatherCode: 61,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 4,
      day: "Fri",
      condition: "Clear",
      weatherCode: 0,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 5,
      day: "Sat",
      condition: "Cloudy",
      weatherCode: 3,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 6,
      day: "Sun",
      condition: "Rain",
      weatherCode: 61,
      maxTemp: 10,
      minTemp: 1,
    },
    {
      id: 7,
      day: "Mon",
      condition: "Partly Cloudy",
      weatherCode: 2,
      maxTemp: 10,
      minTemp: 1,
    },
  ],
};