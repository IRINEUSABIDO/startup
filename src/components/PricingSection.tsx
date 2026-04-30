import { Check, Droplets } from "lucide-react";
import flowSensor from "@/assets/flow-sensor.png";
import arduinoUno from "@/assets/arduino-uno.png";

const plans = [
  {
    name: "Nosso Kit",
    price: "209,99",
    description:
      "Tudo o que você precisa para monitorar e cuidar do seu consumo de água.",
    specs: [
      "Arduino Uno REV3 [A000066]",
      "Sensor Hall Fluxo Vazão Água YF-S201 1/2",
      "Jumpers",
      "Módulo sem fio Bluetooth HC-05",
      "Módulo Regulador De Tensão Lm2596",
    ],
    features: [
      { label: "Instalação", detail: "Configuração assistida remota" },
      { label: "Suporte", detail: "Prioritário (resposta em 24h)" },
      { label: "Tempo de Garantia", detail: "12 meses" },
    ],
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-elevated">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <span className="text-xs font-medium tracking-widest uppercase text-primary border-b-2 border-primary pb-1">
            Kit
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-3 text-foreground">
            Escolha nosso Kit
          </h2>
          <p className="text-muted-foreground">
            A solução completa para começar a monitorar seu consumo de água
            hoje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          <div className="flex justify-center">
            <img
              src={flowSensor}
              alt="Sensor de fluxo de água YF-S201 com cabo conector"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-card border border-primary rounded-lg p-7 flex flex-col shadow-sm transition-colors duration-200"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1.5 mb-3">
                {plan.description}
              </p>
              <div className="text-sm mb-5">
                <p className="font-medium text-foreground mb-1.5">
                  Especificações:
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  {plan.specs.map((spec) => (
                    <li key={spec}>- {spec}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-foreground">
                  R${plan.price}
                </span>
              </div>
              <ul className="space-y-3 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      <span className="font-medium text-foreground">
                        {f.label}:
                      </span>{" "}
                      <span className="text-muted-foreground">{f.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <a href="/checkout">
                <button className="w-full py-2.5 rounded-md font-medium text-sm transition-colors duration-200 bg-primary text-primary-foreground hover:bg-primary/90">
                  Começar
                </button>
              </a>
            </div>
          ))}
          <div className="flex justify-center">
            <img
              src={arduinoUno}
              alt="Placa Arduino Uno REV3"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

