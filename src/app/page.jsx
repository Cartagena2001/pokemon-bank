import Image from "next/image";
import ButtonMain from "./components/ButtonMain";

export default function Home() {
  return (
    <main className="max-w-full">
      <section className="flex flex-col items-center justify-center h-screen">
        <Image
          src="/resources/logo.svg"
          alt="Pokémon Bank Logo"
          height={300}
          width={300}
          style={{ height: "auto" }}
        />
        <div className="mt-20">
          <div className="my-2">
            <h1 className="text-3xl font-bold text-white">Ingrese su PIN</h1>
          </div>
          <input
            className="w-100 text-5xl font-bold border-4 border-pokeblue-light rounded-xl p-3 focus:outline-none"
            type="text"
            placeholder="PIN"
          />
        </div>
        <ButtonMain text="Ingresar" href="dashboard/home" />
      </section>
    </main>
  );
}
