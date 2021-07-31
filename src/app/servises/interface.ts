export interface bigWeatherData {
  current?: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      }
    ];
    wind_deg: number;
    wind_speed: number;
  };
  daily?: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: {
        day: number;
        eve: number;
        morn: number;
        night: number;
      };
      humidity: number;
      moon_phase: number;
      moonrise: number;
      moonset: number;
      pop: number;
      pressure: number;
      sunrise: number;
      sunset: number;
      temp: {
        day: number;
        eve: number;
        max: number;
        min: number;
        morn: number;
        night: number;
      };
      uvi: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }
  ];
  hourly?: [
    {
      clouds: number;
      dew_point: number;
      dt: number;
      feels_like: number;
      humidity: number;
      pop: number;
      pressure: number;
      temp: number;
      uvi: number;
      visibility: number;
      weather: [
        {
          description: string;
          icon: string;
          id: number;
          main: string;
        }
      ];
      wind_deg: number;
      wind_gust: number;
      wind_speed: number;
    }
  ];
  lat: number;
  lon: number;
  minutely?: [
    {
      dt: number;
      precipitation: number;
    }
  ];
  timezone: string;
  timezone_offset: number;
}

export interface weatherData {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  visibility: number;
  weather: [{ description: string; icon: string; main: string }];
  wind: { speed: number };
}

export interface Api {
  key: string;
  base: string;
}

export interface Coordinate {
  results: [
    {
      geometry: {
        lat: number;
        lng: number;
      };
    }
  ];
}
