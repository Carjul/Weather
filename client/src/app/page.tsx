import Link from "next/link";
import imagen from '../../public/icono2.ico'
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="hero min-h-screen" id="screm">
        <div className="hero-content text-center">
          <div className="max-w-md">
           <div className="flex flex-row">
           <h1 className="flex flex-row w-full  text-5xl font-bold">Weather App </h1>
            <figure  className="px-auto"><Image className="mx-auto" src={imagen} alt="no img" /></figure>
           </div>
            <p className="py-6"> Aplicación del clima, sencilla y practica </p>
            <Link href={"/home"} className="btn btn-primary">Launch</Link>
          </div>
        </div>
      </div>
    </>
  )
}
