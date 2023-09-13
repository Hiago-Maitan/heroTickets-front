import { Input } from "@/app/components/Form/Input";
import { InputFile } from "@/app/components/Form/InputFile";
import { categories } from "@/app/utils/categories";

export default function CreateEvent() {
  return (
    <div className="container m-auto">
      <div className="grid md:grid-cols-2 gap-1 grid-cols-1 p-8">
        <div className="mb-4 pr-6 border-r-2 border-[#61D9DE]">
          <div className="mb-4">
            <p className="text-blue-900 text-2xl font-medium">Adicionar Eventos</p>
            <p className="text-blue-900 text-base font-light">
              Crie o seu próprio evento da maneira que você preferir! :)
            </p>
          </div>
          <Input
            title='Título'
            placeholder='Insira o nome do seu evento'
            type='text'
          />
          <Input
            title='Endereço'
            placeholder='Insira o endereço do seu evento'
            type='text'
          />
          <Input
            title='Cupom'
            placeholder='Insira o código'
            type='text'
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              title='Data'
              placeholder='dd/mm/aaaa'
              type='date'
            />
            <Input
              title='Horário'
              placeholder='hh:mm'
              type='number'
            />
          </div>
          <p className="text-blue-900 text-lg font-medium mb-4">
            Categoria do Evento
          </p>
          <div className="grid grid-cols-4 gap-2">
            {categories.map((category) => (
              <div className="text-blue-900">
                <input type="checkbox" className="mr-2 w-3 h-3 relative bg-white rounded border border-gray-300" />
                <label htmlFor="">{category.name}</label>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-blue-900 text-lg font-medium">Valor</p>
            <p className="text-neutral-500 text-sm font-light">
              Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
              haja mais de um setor, basta adicionar a seção. Se houver cupom
              promocional, basta colocar o código no campo “cupom”.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            <Input
              title='Preço'
              placeholder='R$0,00'
              type='number'
              className="col-span-2"
            />
            <Input
              title='Setor'
              placeholder='Insira o nome do setor'
              type='text'
              className="col-span-3"
            />
          </div>
          <Input
            title='Descrição'
            placeholder='Dê uma descrição que vai embalar o seu público!'
            type='textarea'
            className="col-span-3"
          />
        </div>
        <div className="mb-4 ml-4">
          <p className="text-blue-900 text-2xl font-medium">Área Criativa</p>
          <p className="text-blue-900 text-base font-light">
            Adicione as imagens referentes ao seu evento!
          </p>
          <div className="my-4">
            <p className="text-blue-900 text-base font-medium">Banner</p>
            <p className="text-neutral-500 text-sm font-light mb-2">
              Insira um banner no formato 336x280
            </p>
            <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
          <div className="my-4">
            <p className="text-blue-900 text-base font-medium">Flyers</p>
            <p className="text-neutral-500 text-sm font-light mb-2">
              Insira até três flyers
            </p>
            <div className="grid grid-cols-3 gap-2">
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
              <div className="w-full h-28 bg-zinc-300 rounded-3xl shadow">
                <InputFile />
              </div>
            </div>
          </div>
          <div className="my-4">
            <p className="text-blue-900 text-base font-medium">Mapa do Evento</p>
            <p className="text-neutral-500 text-sm font-light mb-2">
            Insira o Mapa do Evento indicando os setores
            </p>
            <div className="w-full h-96 bg-zinc-300 rounded-3xl shadow">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

