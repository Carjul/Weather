"use client"
import Nav from '../../components/nav'
import Link from 'next/link'
import { useAppSelector } from '../../data/store'

export default function Vista() {

    const { oneData } = useAppSelector((state) => state.datApi)

    return (
        <div className="flex flex-col">
            <Nav />
           
            <div className='card flex flex-col flex-wrap w-3/5  bg-accent items-center mx-auto mt-10 z-10'>
                <h2 className='p-5 card-title'>Weather Information for {oneData?.name}</h2>
                <p className='p-2'>Latitude: {oneData?.coord.lat}</p>
                <p className='p-2'>Longitude: {oneData?.coord.lon}</p>
                <p className='p-2'>Weather: {oneData?.weather[0].description}</p>
                <p className='p-2'>Temperature: {oneData?.main.temp} °C</p>
                <p className='p-2'>Feels Like: {oneData?.main.feels_like} °C</p>
                <p className='p-2'>Pressure: {oneData?.main.pressure} hPa</p>
                <p className='p-2'>Humidity: {oneData?.main.humidity}%</p>
                <p className='p-2 pb-6'>Wind Speed: {oneData?.wind.speed} m/s</p>
            </div>
            <Link href="/home" className='mt-10 ml-8'><button   className="btn btn-secondary">{"<- Volver"}</button></Link>
        </div>
    )

}




