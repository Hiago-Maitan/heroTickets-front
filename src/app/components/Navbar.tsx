import Image from "next/image";
export const Navbar = () => {
  return (
    <nav className="bg-blue-900 flex mx-auto px-6 absolute top-0 w-full h-16 items-center">
      <Image
        src='/logo.png'
        width={200}
        height={200}
        alt="Logo"
        className="mr-[6rem]"
      />
      <div className="flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)" />
      </div>
    </nav>
  );
}