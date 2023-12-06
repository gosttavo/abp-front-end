import CidadesCard from "../components/CidadesCard";

export default function Cidade() {
    return (
        <>
            <div className="container">
                <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <CidadesCard
                        size="w-30"
                        key={1}
                        id={1}
                        nome={'Criciúma'}
                    />
                    <CidadesCard
                        size="w-30"
                        key={2}
                        id={2}
                        nome={'Florianópolis'}
                    />
                    <CidadesCard
                        size="w-30"
                        key={3}
                        id={3}
                        nome={'Blumenau'}
                    />
                    <CidadesCard
                        size="w-30"
                        key={4}
                        id={4}
                        nome={'Sangão'}
                    />
                    <CidadesCard
                        size="w-30"
                        key={5}
                        id={5}
                        nome={'Brusque'}
                    />
                    <CidadesCard
                        size="w-30"
                        key={6}
                        id={6}
                        nome={'Braço do Norte'}
                    />
                    
                </div>
            </div>
        </>
    )
}
