import {Schema,model,models}  from 'mongoose'

const datosSchema = new Schema(
  {
        coord: {
          lon: Number,
            lat: Number
        },
        weather: [
            {
                id: Number,
                main: String,
                description: String,
                icon: String
            }
        ],
        base: String,
        main: {
            temp: Number,
            feels_like: Number,
            temp_min: Number,
            temp_max: Number,
            pressure: Number,
            humidity: Number
        },
        visibility: Number,
        wind: {
            speed: Number,
            deg: Number
        },
        clouds: {
            all: Number
        },
        dt: Number,
        sys: {
            type: {
                type: Number
            },
            id: Number,
            country: String,
            sunrise: Number,
            sunset: Number
        },
        timezone: Number,
        id: Number,
        name: String,
        cod: Number
    } 

);

export default models.Datos || model('Datos', datosSchema)