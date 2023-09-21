import { Dispatch } from 'redux';
import { sendData,setMessage,setOnedata,WeatherData,User,setuser} from '../data/features/climadta';

 

export const postUser = (user:User) => (dispatch: Dispatch) => {

  fetch(`/api/users`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      dispatch(setuser(data));
       
      }
      )
      .catch(error => {
        // Manejar errores
        dispatch(setMessage({message:"Usuario no creado"}));
        console.log(error)
      });
      

}



export const getApiClima = (Nombre: string,_id:string) =>async (dispatch: Dispatch) => {
  

   fetch(`/api/datos`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Nombre: Nombre,_id:_id }),
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
 
export const sevedata = (_id:string) => (dispatch: Dispatch) => {
  var datos:WeatherData[]
  fetch('/api/datos', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({UserId: _id }),
    
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
  fetch(`/api/datos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
    .then(response => response.json())
    .then(data => {
      dispatch(setMessage({message:"Ciudad eliminada"}));
      }
    )
    .catch(error => {
      console.log(error)
    });
}

export const getOneData = (id: string) => (dispatch: Dispatch) => {
  fetch(`/api/datos/${id}`, {
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