import { AboutSection } from "@/src/components/AboutSection";

export default function SobrePage() {
  return (
    <div className="pt-32 pb-24">
      <AboutSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif text-navy mb-4">Missão</h3>
            <p className="text-gray-500 text-sm">
              Proporcionar segurança e transparência em cada transação imobiliária, transformando sonhos em realidade com ética e profissionalismo.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif text-navy mb-4">Visão</h3>
            <p className="text-gray-500 text-sm">
              Ser referência em consultoria imobiliária de alto padrão em João Pessoa, reconhecida pela excelência no atendimento e resultados sólidos.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif text-navy mb-4">Valores</h3>
            <p className="text-gray-500 text-sm">
              Honestidade absoluta, compromisso técnico, presença constante e foco total na satisfação e rentabilidade do cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
