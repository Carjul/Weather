'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '../data/store'
import { getOneData } from '../data/action'
export default function Card({ id, max, min, names, img, desc, main, llave, onClose, pais }: { id: string, max: number, min: number, names: string, img: string, desc: string, main: string, llave: number, onClose: () => void, pais: string }) {
    const dispatch = useAppDispatch()
    const { replace } = useRouter()
    const click = () => {
        replace(`/detalle`)
        dispatch(getOneData(id))
    }
    return (
        <div className="card w-96 bg-base-300 shadow-xl mt-10 mb-10 ml-10 mr-10 z-0" key={llave} >

            <button className="btn btn-error w-10 mt-1 ml-2 hover:bg-base-300" onClick={() => onClose()}>X</button>

            <figure><Image src={`http://openweathermap.org/img/wn/${img}@2x.png`} width={200} height={190} alt="Shoes" /></figure>

            <div className="card-body" onClick={click}>

                <h2 className="card-title">
                    {names}
                    <div className="badge badge-secondary">{main}</div>
                </h2>

                <h3>Temperatura:</h3>  

                <p> Máx {max}</p>

                <p> Mín {min}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{desc}</div>
                    <div className="badge badge-outline">{pais}</div>
                </div>

            </div>

        </div>
    )
}