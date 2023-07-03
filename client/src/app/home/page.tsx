"use client";
import { useAppDispatch, useAppSelector } from '../../data/store'
import { sevedata } from '../../data/action'
import { setMessage,setSort } from '../../data/features/climadta'
import { deleteData } from '../../data/action'

import React from 'react'

import Card from '../../components/card'
import Nav from '../../components/nav'




export default function Home() {
    const { datos, data } = useAppSelector((state) => state.datApi)
    const dispatch = useAppDispatch()

    const [sort, setSorts] = React.useState("")
 

    React.useEffect(() => {
        dispatch(sevedata())
    }, [])
 

    React.useEffect(() => {
        if (data?.message === "Ciudad encontrada" || data?.message === "Ciudad eliminada") {
            dispatch(sevedata())
        }
        setTimeout(() => {
            dispatch(setMessage({ message: "" }))
        }, 5000)
    }, [dispatch, data])
    const Handlechange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSorts(
            e.target.value
            )
        dispatch(setSort(sort))
    }

    return (
        <main className="flex flex-col">
            <Nav />
            {data.message === "Ciudad encontrada" ? <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{data?.message}</span>
            </div> : null}
            {data.message === "Ciudad eliminada" || data.message === "Ciudad no encontrada" ? <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{data?.message}</span>
            </div> : null}
            <div className="flex flex-row flex-wrap mx-auto mt-6">
                <select name="Ordenar" id="" className='select select-primary w-full max-w-xs' onChange={Handlechange} value={sort}>
                    <option defaultValue={"Ordenar"}>Ordenar</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-start mt-10 mb-10 ml-10 mr-10">
                {datos.length > 0 ? datos.map(e => <Card
                    max={e?.main?.temp_max}
                    min={e?.main?.temp_min}
                    names={e?.name}
                    img={e?.weather[0]?.icon}
                    desc={e?.weather[0]?.description}
                    main={e?.weather[0]?.main}
                    pais={e?.sys?.country}
                    onClose={() => dispatch(deleteData(e?._id))}
                    key={e?.id}

                />) : <h1 className="text-5xl font-bold mx-auto">Busca una nueva ciudad</h1>}

                
            </div>
            <div className="join mx-auto mb-10">
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                    <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                </div>

        </main>
    )
}
