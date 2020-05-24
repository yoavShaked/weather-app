export const mock_locationAutocomplete = [
  {
    AdministrativeArea: {
      ID: "WA",
      LocalizedName: "Western Australia",
    },
    Country: {
      ID: "AU",
      LocalizedName: "Australia",
    },
    Key: "3493236",
    LocalizedName: "Israelite Bay",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: {
      ID: "GO",
      LocalizedName: "Goiás",
    },
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    Key: "43543",
    LocalizedName: "Israelândia",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: {
      ID: "MG",
      LocalizedName: "Minas Gerais",
    },
    Country: {
      ID: "BR",
      LocalizedName: "Brazil",
    },
    Key: "2727808",
    LocalizedName: "Israel Pinheiro",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: {
      ID: "SH",
      LocalizedName: "Schleswig-Holstein",
    },
    Country: {
      ID: "DE",
      LocalizedName: "Germany",
    },
    Key: "1016589",
    LocalizedName: "Israelsdorf",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "CHP", LocalizedName: "Chiapas" },
    Country: { ID: "MX", LocalizedName: "Mexico" },
    Key: "1057615",
    LocalizedName: "Israel",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "ZSI", LocalizedName: "Zamboanga Sibugay" },
    Country: { ID: "PH", LocalizedName: "Philippines" },
    Key: "3419818",
    LocalizedName: "Israel",
    Rank: 85,
    Type: "City",
    Version: 1,
  },
  {
    AdministrativeArea: { ID: "OH", LocalizedName: "Ohio" },
    Country: { ID: "US", LocalizedName: "United States" },
    Key: "2628738",
    LocalizedName: "Israel Township",
    Rank: 285,
    Type: "City",
    Version: 1,
  },
];

export const mock_weatherByLocation = [
  {
    LocalObservationDateTime: "2020-05-24T17:10:00+08:00",
    EpochTime: 1590311400,
    WeatherText: "Cloudy",
    WeatherIcon: 7,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 17.6,
        Unit: "C",
        UnitType: 17,
      },
      Imperial: {
        Value: 64,
        Unit: "F",
        UnitType: 18,
      },
    },
    MobileLink:
      "http://m.accuweather.com/en/au/israelite-bay/3493236/current-weather/3493236?lang=en-us",
    Link:
      "http://www.accuweather.com/en/au/israelite-bay/3493236/current-weather/3493236?lang=en-us",
  },
];

export const mock_dailyForcast = {
  Headline: {
    EffectiveDate: "2020-05-25T13:00:00+08:00",
    EffectiveEpochDate: 1590382800,
    Severity: 4,
    Text: "Expect rainy weather Monday afternoon through late Monday night",
    Category: "rain",
    EndDate: "2020-05-26T07:00:00+08:00",
    EndEpochDate: 1590447600,
    MobileLink:
      "http://m.accuweather.com/en/au/israelite-bay/3493236/extended-weather-forecast/3493236?lang=en-us",
    Link:
      "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2020-05-24T07:00:00+08:00",
      EpochDate: 1590274800,
      Temperature: {
        Minimum: {
          Value: 54,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 73,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 32,
        IconPhrase: "Windy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=1&lang=en-us",
      Link:
        "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=1&lang=en-us",
    },
    {
      Date: "2020-05-25T07:00:00+08:00",
      EpochDate: 1590361200,
      Temperature: {
        Minimum: {
          Value: 53,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 69,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 14,
        IconPhrase: "Partly sunny w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 18,
        IconPhrase: "Rain",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=2&lang=en-us",
      Link:
        "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=2&lang=en-us",
    },
    {
      Date: "2020-05-26T07:00:00+08:00",
      EpochDate: 1590447600,
      Temperature: {
        Minimum: {
          Value: 50,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 61,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 4,
        IconPhrase: "Intermittent clouds",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Night: {
        Icon: 39,
        IconPhrase: "Partly cloudy w/ showers",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Light",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=3&lang=en-us",
      Link:
        "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=3&lang=en-us",
    },
    {
      Date: "2020-05-27T07:00:00+08:00",
      EpochDate: 1590534000,
      Temperature: {
        Minimum: {
          Value: 53,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 65,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=4&lang=en-us",
      Link:
        "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=4&lang=en-us",
    },
    {
      Date: "2020-05-28T07:00:00+08:00",
      EpochDate: 1590620400,
      Temperature: {
        Minimum: {
          Value: 56,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 68,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=5&lang=en-us",
      Link:
        "http://www.accuweather.com/en/au/israelite-bay/3493236/daily-weather-forecast/3493236?day=5&lang=en-us",
    },
  ],
};

export {default as getDailyForcast} from './getDailyForcast'
export {default as getLocationAutocomplete} from './getLocationAutocomplete';
export {default as getLocationCurrentWeather} from './getLocationCurrentWeather';