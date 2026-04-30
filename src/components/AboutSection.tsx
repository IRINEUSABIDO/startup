import { Mail } from "lucide-react";

const team = [
  { name: "Ivan", initials: "I", color: "hsl(196, 80%, 35%)" },
  { name: "Julia", initials: "J", color: "hsl(340, 65%, 50%)" },
  { name: "Murilo", initials: "M", color: "hsl(160, 60%, 38%)" },
  { name: "Alex", initials: "A", color: "hsl(270, 55%, 50%)" },
  { name: "Victor", initials: "V", color: "hsl(30, 70%, 50%)" },
  { name: "Maria Eduarda", initials: "ME", color: "hsl(220, 65%, 45%)" },
  { name: "Larissa", initials: "L", color: "hsl(0, 60%, 50%)" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-medium tracking-widest uppercase text-primary border-b-2 border-primary pb-1">
              Equipe
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-3 text-foreground">
              Quem faz acontecer
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pessoas reais comprometidas com a gestão inteligente da água.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center w-28">
                <div
                  className="w-20 h-20 rounded-full border-2 border-border mb-3 flex items-center justify-center"
                  style={{ backgroundColor: member.color }}
                >
                  <span
                    className="text-white font-bold text-2xl"
                    style={{ fontFamily: "'Fira Code', monospace" }}
                  >
                    {member.initials}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground text-center leading-tight">{member.name}</span>
              </div>
            ))}
          </div>

          <div className="border border-border rounded-lg p-8 md:p-10 text-center">
            <h3 className="font-display text-xl font-bold mb-3 text-foreground">Entre em Contato</h3>
            <p className="text-muted-foreground mb-5 max-w-md mx-auto">
              Dúvidas, sugestões ou parcerias? Mande um e-mail.
            </p>
            <a
              href="mailto:amigodaagua@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              amigodaagua@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
