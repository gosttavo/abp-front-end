import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

interface RestauranteCardProps {
  id: number;
  nome: string;
  horario: string;
  imagem: string;
  nota: number;
  categoria: string;
}

export default function RestauranteCard(props: RestauranteCardProps) {
  return (
    <>
      <Link to={`/restaurantes/${props.id}`}>
        <div className="w-72 flex justify-between bg-gray-100 rounded-md p-6 shadow hover:shadow-lg transition">
          <div className="text-ellipsis overflow-hidden">
            <p className="flex" title={props.nome}>
              <span className="text-2xl font-semibold whitespace-nowrap overflow-ellipsis">
                {props.nome}
              </span>
            </p>

            <p className="flex" title={props.categoria}>
              <span className="mr-1 text-gray-600 break-words overflow-auto mt-2">
                {props.categoria} -
              </span>

              <span className="flex text-gray-600 mt-2" title={`nota ${props.nota}`}>
                <Icon path={mdiStar} size={1} />
                {props.nota}
              </span>
            </p>

            <p className="mt-2" title={`Aberto até ${props.horario}`}>
              Aberto até <span className="font-semibold">{props.horario}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
