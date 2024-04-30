import Image from "next/image";

export default function Home() {
  return (
    <form className="flex flex-col w-full max-w-sm mx-auto mt-8 p-4 border border-gray-300 rounded-lg shadow-md">
      
      <label className="mb-2 font-semibold" htmlFor="username">Usuario:</label>
      <input
        type="text"
        id="username"
        className="mb-4 p-2 border border-gray-300 rounded-md"
        required
      />

      <label className="mb-2 font-semibold" htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        className="mb-4 p-2 border border-gray-300 rounded-md"
        required
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Iniciar sesión
      </button>

    </form>
  );
  
}
