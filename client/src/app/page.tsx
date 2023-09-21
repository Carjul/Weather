"use client"
import Link from "next/link";
import imagen from '../../public/icono2.ico'
import foto from '../../public/foto.jpg'
import Image from "next/image";
import { useUser } from '@clerk/nextjs'
import { useEffect , useState} from "react";
import { postUser } from '@/data/action'
import { useAppDispatch, useAppSelector } from "@/data/store";


export default function Landing() {
  const { user } = useUser()
  const { User } = useAppSelector(state => state.datApi)


  const dispatch = useAppDispatch()

  useEffect(() => {
     if (!User._id && user) {
    dispatch(postUser({
        nombre: user.firstName || '',
        apellido: user.lastName || '',
        email: user.emailAddresses[0].emailAddress || '',
        password: user.fullName || ''
      })) 
 
    }
      
  }, [user,User,dispatch])



  return (
    <>
      <div className="hero min-h-screen" >
      <Image src={foto} alt="logo"  priority={true} fill/>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex flex-row">
              <h1 className="flex flex-row w-full text-secondary-content text-5xl font-bold">Weather App </h1>
              <figure className="px-auto"><Image className="mx-auto" src={imagen} alt="no img" /></figure>
            </div>
            <p className="py-6 text-secondary-content"> Aplicación del clima, sencilla y practica </p>
            {!User && user? <button className="btn btn-primary">
              <span className="loading loading-spinner"></span> </button> : null}
            {User && user ? <Link href={"/home"} className="btn btn-primary">Launch</Link> : null}
            {!user? <Link href={"/sign-in"} className="btn btn-primary" >sign-in</Link> : null}

          </div>
        </div>
      </div>
    </>
  )
}
