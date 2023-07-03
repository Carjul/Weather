import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '../data/store'
export default function Card({ max, min, names, img, desc, main,key, onClose,pais }:{max:number, min:number, names:string, img:string, desc:string, main:string,key:number, onClose:()=>void,pais:string}) {
    const dispatch = useAppDispatch()
    return (
        <div className="card w-96 bg-base-200 shadow-xl mt-10 mb-10 ml-10 mr-10 z-0" key={key}>
            <button className="btn btn-error w-10 mt-1 ml-2 hover:bg-base-300" onClick={()=>onClose()}>X</button>
           <figure><Image  src={`http://openweathermap.org/img/wn/${img}@2x.png`} width={200} height={190} alt="Shoes" /></figure> 
            <div className="card-body">
                <h2 className="card-title">
                    {names}
                    <div className="badge badge-secondary">{main}</div>
                </h2>
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