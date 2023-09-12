import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-2">
      <BannerPrimary />
      <div className="p-2 text-blue-900 px-6 ">
        <p className="text-2xl font-medium">Eventos em destaque</p>
        <p className="font-light text-base">
          Se divirta com os principais eventos do Brasil!
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-3 mb-4">
        <BannerSecondary />
        <BannerSecondary />
        <BannerSecondary />
      </div>
      <div className="p-2 text-blue-900 ">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className="font-light text-base">
          Vá ao avento que é a sua cara :D
        </p>
      </div>
      <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-2 sm:gap-1">
        {categories.map((category) => {
          return (
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <img src={category.icon} alt="" className="rounded-full" />
              <p>{category.name}</p>
            </div >
          );
        })}
      </div>
    </div>
  );
}