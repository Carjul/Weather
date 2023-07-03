"use client";
import React from 'react'
import {getApiClima} from '../data/action' 
import { BiBug,BiLayout} from "react-icons/bi";

import Link from 'next/link';
import { useAppDispatch } from '@/data/store';


 export default  function Nav() {


const dispatch = useAppDispatch()
   const [ Nombre ,setNombre ] = React.useState("")
   const [ Tema ,setTema ] = React.useState("off")
 
 
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
   if(Tema === "on"){
    setTema("off")
    document.querySelector('html')?.setAttribute('data-theme', 'halloween')
   }else{
    setTema("on")
    document.querySelector('html')?.setAttribute('data-theme', 'ligth')
   }
   
   console.log( Tema)
  };
    return (
        <div className="navbar bg-base-300 z-1 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={'https://portafolio-plum-eight.vercel.app/'}><BiLayout /> Portfolio</Link></li>
                        <li><Link href={'https://github.com/Carjul'} target='_blank'><BiBug /> About</Link></li>
                        <li className='flex flex row'><BiBug /> Tema <input type="checkbox" className="toggle toggle-warning" value={Tema} onChange={handleChange} /></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href={'/'} className="btn btn-ghost normal-case text-xl">Weather App</Link>
            </div>


            <div className="navbar-end">
                <form className="form-control flex-row" onSubmit={(e) => { e.preventDefault(), dispatch(getApiClima(Nombre)), setNombre("") }}>
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={(e) => setNombre(e.target.value)} value={Nombre} />
                    <button type="submit" className="btn btn-ghost btn-circle" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
            </div>

        </div>
    )
}
