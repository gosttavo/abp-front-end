import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import ItemCardapio from "../components/ItemCardapio";
import { RestaurantesList } from "../database/RestaurantesList";
import { useParams } from "react-router-dom";
import { Restaurante } from "../interfaces/Restaurante";

export default function PerfilRestaurante() {
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);
  const restaurantes: Restaurante[] = RestaurantesList;
  const params = useParams();

  function getRestaurante(id: number): Restaurante | undefined {
    return restaurantes.find((r) => r.id === id);
  }

  useEffect(() => {
    const restauranteEncontrado = getRestaurante(Number(params.id));
    setRestaurante(restauranteEncontrado || null);
  }, [params.id]);

  if (!restaurante) {
    return <p>Restaurante não encontrado</p>;
  }

  return (
    <>
      <div className="flex flex-col justify-between">
        <p className="flex mb-2">
          <span className="text-3xl font-semibold">{restaurante.nome}</span>
          <span className="ml-5 flex font-semibold mt-2">
            <Icon path={mdiStar} size={1} />
            {restaurante.nota}
          </span>
        </p>

        <p className="flex flex-col">
          <span>{restaurante?.descricao}</span>
          <span className="font-semibold">{restaurante?.cidade?.nome}</span>
        </p>
      </div>

      <div className="mt-10 container">
        <p className="align-center mb-10 font-semibold text-3xl">Cardápio</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {!restaurante?.itemsCardapio && (
            <p className="font-semibold text-3xl bg-gray-100 rounded-md p-6">
              Nenhum item no cardápio!
            </p>
          )}
          {restaurante?.itemsCardapio?.map((m) => (
            <ItemCardapio
              id={m.id}
              nome={m.nome}
              descricao={m.descricao}
              preco={m.preco}
              imagem={m.imagem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
