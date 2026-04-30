import {
  Waves,
  Gauge,
  FileBarChart,
  SearchCheck,
  CloudSun,
  Settings2,
} from "lucide-react";

const iconColors = [
  "text-[hsl(196,80%,35%)]",
  "text-[hsl(340,65%,47%)]",
  "text-[hsl(262,60%,50%)]",
  "text-[hsl(25,90%,50%)]",
  "text-[hsl(150,60%,40%)]",
  "text-[hsl(45,85%,45%)]",
];

const iconBgs = [
  "bg-[hsl(196,80%,92%)]",
  "bg-[hsl(340,65%,92%)]",
  "bg-[hsl(262,60%,92%)]",
  "bg-[hsl(25,90%,92%)]",
  "bg-[hsl(150,60%,92%)]",
  "bg-[hsl(45,85%,90%)]",
];

const features = [
  {
    icon: Waves,
    title: "Previsão",
    desc: "Acompanhe diariamente o quanto pode ser o valor da conta de água no fim do mês.",
  },
  {
    icon: Gauge,
    title: "Monitoramento",
    desc: "Veja em tempo real o fluxo dos seus sistemas hídricos.",
  },
  {
    icon: FileBarChart,
    title: "Relatórios",
    desc: "Análises de uso com histórico, tendências e relatórios prontos.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-primary border-b-2 border-primary pb-1">
            Recursos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-3 text-foreground">
            O que oferecemos
          </h2>
          <p className="text-muted-foreground">
            Ferramentas práticas para quem leva a gestão de água a sério.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="surface-card p-6 hover:shadow-sm transition-all duration-200 group"
            >
              <div
                className={`w-10 h-10 rounded-md ${iconBgs[i]} flex items-center justify-center mb-4`}
              >
                <f.icon className={`h-5 w-5 ${iconColors[i]}`} />
              </div>
              <h3 className="font-display text-base font-semibold mb-1.5 text-foreground">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

