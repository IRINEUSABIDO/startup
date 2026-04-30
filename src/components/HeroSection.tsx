import { ArrowRight, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-water-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Water background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="flex flex-grow justify-center text-center z-10 w-full px-4">
        <div className="flex flex-col md:flex-row items-center justify-centergap-12 md:gap-16">
          <div className="flex-1">
            <div className="mb-6 animate-fade-in-up">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-primary border-b-2 border-primary pb-1">
                Gestão Hídrica Inteligente
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:0.1s] opacity-0 text-foreground">
              Cuide da água.
              <br />
              <span className="text-gradient">Cuide do futuro.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in-up [animation-delay:0.2s] opacity-0">
              O Flux’Água ajuda você a monitorar e otimizar o uso de água com
              simplicidade — seja em casa, no trabalho ou em grandes
              infraestruturas.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 animate-fade-in-up [animation-delay:0.3s] opacity-0">
              <a href="/checkout">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  Começar Agora <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-primary/80"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

