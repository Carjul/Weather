"use client"
import Nav from '../../components/nav'
import Link from 'next/link'
import Image from 'next/image'
import { useAppSelector } from '../../data/store'

export default function Vista() {

    const { oneData } = useAppSelector((state) => state.datApi)

    return (
        <div className="flex flex-col">
            <Nav />

            <div className="card w-3/5 glass mx-auto mt-10 z-10 bg-base-300">
            <figure><Image src={`http://openweathermap.org/img/wn/${oneData?.weather[0].icon}@2x.png`} width={200} height={190} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Weather Information for {oneData?.name}</h2>
                    <p className='p-2'>Latitude: {oneData?.coord.lat}</p>
                    <p className='p-2'>Longitude: {oneData?.coord.lon}</p>
                    <p className='p-2'>Weather: {oneData?.weather[0].description}</p>
                    <p className='p-2'>Temperature: {oneData?.main.temp} °C</p>
                    <p className='p-2'>Feels Like: {oneData?.main.feels_like} °C</p>
                    <p className='p-2'>Pressure: {oneData?.main.pressure} hPa</p>
                    <p className='p-2'>Humidity: {oneData?.main.humidity}%</p>
                    <p className='p-2 pb-6'>Wind Speed: {oneData?.wind.speed} m/s</p>
                    <div className="card-actions justify-end">
                    <Link href="/home" className='mt-10 ml-8'><button className="btn btn-primary">{"<- Volver"}</button></Link>
                    </div>
                </div>
            </div>
            
            
        </div>
    )

}




