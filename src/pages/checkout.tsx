import { useState } from "react";
import arduinoReal from "@/assets/arduinoReal.jpeg";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Lock,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import arduinoUno from "@/assets/arduino-uno.png";

const UNIT_PRICE = 209.99;
const SHIPPING = 19.9;

const specs = [
  "Arduino Uno REV3 [A000066]",
  "Sensor Hall Fluxo Vazão Água YF-S201 1/2",
  "Jumpers",
  "Módulo sem fio Bluetooth HC-05",
  "Módulo Regulador De Tensão Lm2596",
];

const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const Checkout = () => {
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState<"pix" | "credit" | "boleto">("pix");

  const subtotal = UNIT_PRICE * quantity;
  const total = subtotal + SHIPPING;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pedido recebido!",
      description: `Seu kit foi reservado. Total: ${formatBRL(total)}`,
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>

          <header className="mb-10 max-w-2xl">
            <span className="text-xs font-medium tracking-widest uppercase text-primary border-b-2 border-primary pb-1">
              Checkout
            </span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-3 text-foreground">
              Finalize a compra do seu Kit
            </h1>
            <p className="text-muted-foreground text-sm">
              Preencha seus dados de entrega e pagamento. Tudo pronto para
              começar a monitorar seu consumo.
            </p>
          </header>

          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
            <form onSubmit={handleSubmit} className="space-y-8">
              <section className="surface-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-5">
                  Dados de contato
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" required placeholder="Seu nome" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="voce@email.com"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" required placeholder="(11) 99999-9999" />
                  </div>
                </div>
              </section>

              <section className="surface-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-5">
                  Endereço de entrega
                </h2>
                <div className="grid sm:grid-cols-6 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" required placeholder="00000-000" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-4">
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" required placeholder="Av. Exemplo" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" required placeholder="123" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-4">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apto, bloco..." />
                  </div>
                  <div className="space-y-1.5 sm:col-span-3">
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" required placeholder="Sua cidade" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-3">
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" required placeholder="UF" />
                  </div>
                </div>
              </section>

              <section className="surface-card p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-5">
                  Pagamento
                </h2>
                <div className="grid sm:grid-cols-3 gap-3 mb-5">
                  {(
                    [
                      { id: "pix", label: "Pix" },
                      { id: "credit", label: "Cartão" },
                      { id: "boleto", label: "Boleto" },
                    ] as const
                  ).map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setPayment(opt.id)}
                      className={`border rounded-md py-3 text-sm font-medium transition-colors ${
                        payment === opt.id
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {payment === "credit" && (
                  <div className="grid sm:grid-cols-6 gap-4">
                    <div className="space-y-1.5 sm:col-span-6">
                      <Label htmlFor="card">Número do cartão</Label>
                      <Input
                        id="card"
                        required
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="space-y-1.5 sm:col-span-3">
                      <Label htmlFor="cardname">Nome impresso</Label>
                      <Input
                        id="cardname"
                        required
                        placeholder="Como no cartão"
                      />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="exp">Validade</Label>
                      <Input id="exp" required placeholder="MM/AA" />
                    </div>
                    <div className="space-y-1.5 sm:col-span-1">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" required placeholder="123" />
                    </div>
                    <div className="space-y-1.5 sm:col-span-3">
                      <Label htmlFor="installments">Parcelas</Label>
                      <Select defaultValue="1">
                        <SelectTrigger id="installments">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 6, 12].map((n) => (
                            <SelectItem key={n} value={String(n)}>
                              {n}x de {formatBRL(total / n)} sem juros
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {payment === "pix" && (
                  <p className="text-sm text-muted-foreground">
                    Após confirmar o pedido, você receberá o QR Code para
                    pagamento instantâneo.
                  </p>
                )}

                {payment === "boleto" && (
                  <p className="text-sm text-muted-foreground">
                    O boleto será gerado e enviado para o seu e-mail. Vencimento
                    em 3 dias úteis.
                  </p>
                )}
              </section>

              <Button type="submit" size="lg" className="w-full">
                <Lock className="h-4 w-4" />
                Finalizar pedido — {formatBRL(total)}
              </Button>
            </form>

            <aside className="surface-card p-6 lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-semibold text-foreground mb-5">
                Resumo do pedido
              </h2>

              <div className="flex gap-4 pb-5 border-b border-border">
                <img
                  src={arduinoReal}
                  alt="Kit Arduino para monitoramento de água"
                  className="w-20 h-20 object-contain shrink-0 rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground text-sm">
                    Nosso Kit Flux'Água
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Arduino + Sensor + Bluetooth
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-border rounded-md">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        aria-label="Diminuir"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 text-sm font-medium">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-2 py-1 text-muted-foreground hover:text-foreground"
                        aria-label="Aumentar"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {formatBRL(UNIT_PRICE * quantity)}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="py-5 space-y-2 text-xs text-muted-foreground border-b border-border">
                {specs.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <Check className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="py-5 space-y-2 text-sm border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatBRL(subtotal)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Frete</span>
                  <span>{formatBRL(SHIPPING)}</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline pt-5 mb-5">
                <span className="font-medium text-foreground">Total</span>
                <span className="font-display text-2xl font-bold text-foreground">
                  {formatBRL(total)}
                </span>
              </div>

              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5 text-primary" />
                  Envio em até 5 dias úteis
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Garantia de 12 meses
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-primary" />
                  Pagamento seguro
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
