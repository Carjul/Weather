import { Dispatch } from 'redux';
import { useAppDispatch} from '../data/store';



import { sendData,setMessage,setOnedata} from '../data/features/climadta';

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


export const getApiClima = (Nombre: string) =>async (dispatch: Dispatch) => {
  

   fetch(`http://localhost:3004/api/sevedatos?Nombre=${Nombre}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(setMessage({message:"Ciudad encontrada"}));
      console.log('Success:', data);
      }
      )
      .catch(error => {
        // Manejar errores
        dispatch(setMessage({message:"Ciudad no encontrada"}));
        console.log(error)
      });
      
      
      
    }
 
export const sevedata = () => (dispatch: Dispatch) => {
  var datos:WeatherData[]
  fetch('http://localhost:3004/api/getdatos', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    
  })
    .then(response => response.json())
    .then(data => {

      datos = JSON.parse(JSON.stringify(data))
      dispatch(sendData(datos))
    }
    )
    .catch(error => {
      // Manejar errores
      dispatch(setMessage({message:"Ciudad no encontrada"}));
      console.log(error)
    });
}

export const deleteData = (id: string) => (dispatch: Dispatch) => {
  fetch(`http://localhost:3004/api/deletedato/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      dispatch(setMessage({message:"Ciudad eliminada"}));
      }
    )
    .catch(error => {
      console.log(error)
    });
}

export const getOneData = (id: string) => (dispatch: Dispatch) => {
  fetch(`http://localhost:3004/api/getdato/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
    .then(response => response.json())
    .then(data => {
      dispatch(setOnedata(data));
      }
    )
    .catch(error => {
      console.log(error)
    });
}