import { createSlice, PayloadAction } from '@reduxjs/toolkit';


 export type WeatherData = {
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

export type User =   {
  _id?: string,
    nombre: String,
    apellido: String,
    email: String,
    password: String
  }


interface Data {
  datos: WeatherData[];
  data:msg;
  oneData?: WeatherData;
  User:User;
  isLoading: boolean
}

const initialState: Data = {
  datos: [],
  data:{message:""},
  User:{
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  },
  isLoading: false

}

export const DatApiSlice = createSlice({
  name: 'datos del clima',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<msg>) => {
      state.data = action.payload;
    },
    setuser:(state, action: PayloadAction<User>) => {
      state.User = action.payload;
    },
    sendData: (state, action: PayloadAction<WeatherData[]>) => {
         state.datos= action.payload.reverse();
    },
    clenData: (state) => {
      state.oneData= undefined;
    },
    setOnedata: (state, action: PayloadAction<WeatherData>) => {
      state.oneData = action.payload;
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
    },
    updateUserLoading: (state, action: PayloadAction<boolean>) => {
      if (state.User) {
        state.isLoading = action.payload;
      }
    }
  
  }
});

export const { sendData,deleteData,setMessage,setSort,setOnedata,setuser,clenData,updateUserLoading} = DatApiSlice.actions;

export default DatApiSlice.reducer;
