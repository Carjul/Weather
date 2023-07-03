import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type } from 'os';

 type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  _id: string;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
type msg = {
  message: string;
}

interface Data {
  datos: WeatherData[];
  data:msg;
}

const initialState: Data = {
  datos: [],
  data:{message:""}
};

export const DatApiSlice = createSlice({
  name: 'datos del clima',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<msg>) => {
      state.data = action.payload;
    },
    sendData: (state, action: PayloadAction<WeatherData[]>) => {
         state.datos= action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
          state.datos.sort((a, b) => {
            if (a.name > b.name) {
              return action.payload === 'asc' ? 1 : -1;
            }
            if (a.name < b.name) {
              return action.payload === 'desc' ? -1 : 1;
            }
            return 0;
          })
    },
    deleteData: (state, action: PayloadAction<number>) => {
        state.datos = state.datos.filter((item, index) => item.id !== action.payload);
    }
  }
});

export const { sendData,deleteData,setMessage,setSort } = DatApiSlice.actions;

export default DatApiSlice.reducer;
