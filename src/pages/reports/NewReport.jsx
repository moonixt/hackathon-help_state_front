import React from "react";
import { Button } from "flowbite-react";
import { Label, TextInput, Textarea, Select  } from "flowbite-react";


const Newreport = () => {
  return (
    <div className="pt-20">

      <div>
        <h1 className="font-bold">Deixe nos saber o que acontece</h1>
      </div>


<div className=" pt-10">
      <div className="mb-4 block">
        <Label htmlFor="Categorias" value="Selecione a categoria de sua ocorrência." />
      </div>
      <Select id="countries" required>
        <option>Enchentes</option>
        <option>Incendios</option>
        <option>Desmoronamento</option>
        <option>Outro</option>
      </Select>
    </div>
    
    <div className="">
      <div className="mb-4 block">
        <Label htmlFor="Categorias" value="Selecione a subcategoria de sua ocorrência." />
      </div>
      <Select id="countries" required>
        <option>XXXXXX</option>
        <option>XXXXXX</option>
        <option>XXXXXX</option>
        <option>Outro</option>
      </Select>
    </div>

    <div className="">
      <div className="mb-4 block">
        <Label htmlFor="Categorias" value="Selecione quem é afetado por esta ocorrência" />
      </div>
      <Select id="countries" required>
        <option>Rua</option>
        <option>Municipio</option>
        <option>Bairro</option>
        <option>Outro</option>
      </Select>
    </div>




    <div className="flex  flex-col gap-4">
      <div>
        <div className="mb-4 pt-5 block">
          <Label htmlFor="base" value="Titulo" />
        </div>
        <TextInput placeholder="Titulo de sua ocorrência" id="base" type="text" sizing="lg" />
      </div>


      <div className="">
      <div className="mb-4 block">
        <Label htmlFor="comment" value="Sua mensagem" />
      </div>
      <Textarea id="comment" placeholder="Como podemos ajudar?" required rows={10} />
    </div>

    <Button type="submit">Enviar</Button>

    </div>

    
    </div>

  );
};

export default Newreport;
