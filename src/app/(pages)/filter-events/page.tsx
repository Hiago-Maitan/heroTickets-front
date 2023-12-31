import { CardFilter } from "@/app/components/CardFilter";
import { Button } from "@/app/components/Form/Button";
import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { InputRange } from "@/app/components/Form/InputRange";
import { categories } from "@/app/utils/categories";

export default function FilterEvents() {
  return (
    <div className="container m-auto">
      <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue-900 text-2xl font-medium">Filtrar Eventos</p>
            <p className="text-blue-900 text-base font-light">
              Busque o evento que é a sua cara de maneira mais detalhada!
            </p>
          </div>
          <Input
            title='Nome'
            placeholder='Insira o nome do seu evento'
            type='text'
          />
          <Input
            title='Localização'
            placeholder='Insira o endereço do seu evento'
            type='text'
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              title='Data'
              placeholder='dd/mm/aaaa'
              type='date'
            />
            <div className="mb-4 text-blue-900 font-medium">
              <label htmlFor="">Tipo de evento</label>
              <select
                name=""
                id=""
                className="w-full h-[38px] px-6 py-[5px] mt-2 bg-white rounded-lg border border-teal-400">
                <option value="">Selecione</option>
                {categories.map((category) => (
                  <option value={category.name}>{category.name}</option>
                ))}

              </select>
            </div>
          </div>

          <InputRange title="Distância" />
          <InputRange title="Valor" />
          <div className="grid grid-cols-2 gap-7 w-2/3 m-auto">
            <Button title="Limpar" className="bg-white border border-blue-900 text-blue-900" />
            <Button title="Buscar" />
          </div>
        </div>
        <div className="mb-4 ml-4">
          <p className="text-blue-900 text-2xl font-medium">Resultados da busca</p>
          <p className="text-blue-900 text-base font-light">
            Explore os resultados da sua busca por diversão! :)
          </p>
          <CardFilter />
          <CardFilter />
          <CardFilter />
        </div>
      </div>
    </div>
  )
}