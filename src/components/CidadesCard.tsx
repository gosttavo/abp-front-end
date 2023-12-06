import { Link } from "react-router-dom";

interface CidadesCardProps {
    id: number;
    nome: string;
    size?: string;
}

export default function CidadesCard(props: CidadesCardProps) {
    return (
        <>
          <Link to={`/cidades/${props.id}`}>
            <div className={`${props.size} bg-gray-100 rounded-md p-6 shadow hover:shadow-lg transition`}>
                <p className="flex justify-center text-ellipsis overflow-hidden" title={props.nome}>
                    <span className="text-2xl font-semibold">
                        {props.nome}
                    </span>
                </p>
            </div>
          </Link>
        </>
      );
}