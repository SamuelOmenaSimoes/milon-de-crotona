import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, MapPin, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-milon.png.asset.json";
import hero from "@/assets/hero.jpg";
import weights from "@/assets/weights.jpg";
import machines from "@/assets/machines.jpg";
import barbell from "@/assets/barbell.jpg";

const TITLE = "Milon de Crotona — Academia de Musculação em Itajubá, MG";
const DESC =
  "A força não é dada. É construída. Academia de musculação em Itajubá — um conceito milenar de treinamento.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Index,
});

const WHATS = "https://wa.me/5535997617396?text=" + encodeURIComponent("Olá! Quero treinar na Milon de Crotona.");
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua Manoel Correa Cardoso, Itajubá - MG, 37502-470");

const NAV = [
  ["Início", "#inicio"],
  ["A Academia", "#academia"],
  ["Estrutura", "#estrutura"],
  ["Treinamento", "#conceito"],
  ["Planos", "#planos"],
  ["Contato", "#contato"],
] as const;

// Edite aqui os planos reais quando disponíveis.
const PLANOS = [
  { nome: "Plano 01", preco: "R$ —", periodo: "/mês", itens: ["Benefício a definir", "Benefício a definir"] },
  { nome: "Plano 02", preco: "R$ —", periodo: "/trimestre", itens: ["Benefício a definir", "Benefício a definir"], destaque: true },
  { nome: "Plano 03", preco: "R$ —", periodo: "/ano", itens: ["Benefício a definir", "Benefício a definir"] },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-border bg-iron/95 backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#inicio" className="flex shrink-0 items-center gap-3">
          <img src={logo.url} alt="Milon de Crotona" className="h-10 w-10 object-cover object-[50%_35%] md:h-12 md:w-12" />
          <span className="hidden font-display text-sm uppercase tracking-[0.2em] sm:block">Milon de Crotona</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={WHATS} target="_blank" rel="noreferrer" className="btn-red hidden !px-5 !py-3 !text-xs sm:inline-flex">
            Venha treinar
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex h-[calc(100svh-4rem)] flex-col justify-between bg-iron px-5 pb-10 pt-6 lg:hidden">
          <div className="flex flex-col">
            {NAV.map(([l, h], i) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-border py-4 font-display text-3xl uppercase">
                <span className="text-xs text-primary">0{i + 1}</span>
                {l}
              </a>
            ))}
          </div>
          <a href={WHATS} target="_blank" rel="noreferrer" className="btn-red w-full">
            Venha treinar
          </a>
        </nav>
      )}
    </header>
  );
}

function Index() {
  useReveal();
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="Área de musculação da Milon de Crotona" width={1920} height={1088} className="hero-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="shade-left absolute inset-0" />
        <div className="shade-bottom absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <p className="eyebrow reveal mb-6">Itajubá • MG</p>
          <h1 className="reveal text-[15vw] font-bold leading-[0.88] md:text-[8.5rem]">
            A força não é dada.
            <br />
            <span className="text-primary">É construída.</span>
          </h1>
          <div className="reveal mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md font-serif text-2xl italic text-muted-foreground md:text-3xl">
              Milon de Crotona — um conceito milenar de treinamento.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={WHATS} target="_blank" rel="noreferrer" className="btn-red">
                Venha treinar <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#academia" className="btn-line">Conheça a academia</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEITO */}
      <section id="conceito" className="relative border-y border-border bg-iron py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:px-8">
          <div className="reveal md:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <img src={logo.url} alt="Símbolo Milon de Crotona" loading="lazy" className="w-full opacity-90" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-primary" />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <p className="eyebrow reveal mb-6">O conceito</p>
            <h2 className="reveal text-6xl font-bold md:text-8xl">
              Força
              <br />
              <span className="text-outline">se constrói.</span>
            </h2>
            <div className="reveal mt-10 grid gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
              <p>
                Conta a tradição que Milon de Crotona ergueu um bezerro todos os dias. O animal cresceu, e sua força cresceu junto.
              </p>
              <p>
                É essa a nossa filosofia: <span className="text-foreground">sobrecarga progressiva, constância e disciplina.</span> Nenhum atalho. Só o trabalho, repetido, até virar resultado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIA */}
      <section id="academia" className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="reveal text-6xl font-bold md:text-[7rem]">
              Ferro.<br />Foco.<br /><span className="text-primary">Evolução.</span>
            </h2>
            <p className="reveal max-w-sm text-lg text-muted-foreground">
              Um ambiente preto e vermelho, feito para quem entra para treinar. Musculação, pesos livres e espaço para evoluir.
            </p>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-12">
          <figure className="zoom-img reveal relative md:col-span-8">
            <img src={machines} alt="Equipamentos de musculação" loading="lazy" width={1536} height={1024} className="aspect-[4/3] h-full w-full object-cover md:aspect-auto" />
            <figcaption className="eyebrow absolute bottom-5 left-5 !text-foreground">01 — Musculação</figcaption>
          </figure>
          <figure className="zoom-img reveal relative md:col-span-4">
            <img src={weights} alt="Pesos livres" loading="lazy" width={1024} height={1280} className="aspect-[4/5] h-full w-full object-cover" />
            <figcaption className="eyebrow absolute bottom-5 left-5 !text-foreground">02 — Pesos livres</figcaption>
          </figure>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="bg-iron py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="eyebrow reveal mb-6">Estrutura</p>
          <h2 className="reveal mb-14 max-w-4xl text-5xl font-bold md:text-7xl">
            Estrutura para quem leva <span className="text-primary">treino a sério.</span>
          </h2>
          <div className="grid auto-rows-[220px] grid-cols-2 gap-2 md:auto-rows-[260px] md:grid-cols-4">
            {[
              { src: barbell, alt: "Barra olímpica no rack", c: "col-span-2 row-span-2" },
              { src: weights, alt: "Halteres", c: "row-span-2" },
              { src: hero, alt: "Ambiente da academia", c: "" },
              { src: machines, alt: "Máquinas", c: "" },
              { src: hero, alt: "Área de treino", c: "col-span-2 md:col-span-3" },
              { src: barbell, alt: "Anilhas", c: "col-span-2 md:col-span-1" },
            ].map((g, i) => (
              <div key={i} className={`zoom-img reveal ${g.c}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 md:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="eyebrow reveal mb-6">Planos</p>
            <h2 className="reveal text-5xl font-bold md:text-7xl">
              Comece sua <span className="text-primary">evolução.</span>
            </h2>
            <p className="reveal mt-6 text-muted-foreground">Fale com a gente para conhecer os planos e valores atuais.</p>
          </div>
          <div className="border-t border-border md:col-span-8">
            {PLANOS.map((p, i) => (
              <div key={i} className="reveal group grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-4 border-b border-border py-8 md:grid-cols-[4rem_1fr_auto_auto]">
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <div>
                  <h3 className="text-3xl font-semibold transition-colors group-hover:text-primary">{p.nome}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.itens.join(" · ")}</p>
                </div>
                <p className="col-span-2 font-display text-4xl md:col-span-1">
                  {p.preco}<span className="text-base text-muted-foreground">{p.periodo}</span>
                </p>
                <a href={WHATS} target="_blank" rel="noreferrer" className={`col-span-2 md:col-span-1 ${p.destaque ? "btn-red" : "btn-line"}`}>
                  Quero começar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO + CONTATO */}
      <section id="contato" className="border-t border-border bg-iron">
        <div className="grid md:grid-cols-2">
          <div className="px-5 py-24 md:px-16 md:py-32">
            <p className="eyebrow reveal mb-6">Contato</p>
            <h2 className="reveal text-5xl font-bold md:text-7xl">
              Seu próximo treino <span className="text-primary">começa aqui.</span>
            </h2>
            <a href={WHATS} target="_blank" rel="noreferrer" className="btn-red reveal mt-10 w-full sm:w-auto">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
            </a>
            <div className="reveal mt-14 space-y-6 border-t border-border pt-10">
              <a href={WHATS} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg hover:text-primary">
                <MessageCircle className="h-5 w-5 shrink-0 text-primary" /> +55 35 99761-7396
              </a>
              <a href="mailto:crotonaacademia@outlook.com" className="flex items-center gap-4 break-all text-lg hover:text-primary">
                <Mail className="h-5 w-5 shrink-0 text-primary" /> crotonaacademia@outlook.com
              </a>
              <div className="flex items-start gap-4 text-lg">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-display uppercase tracking-widest">Milon de Crotona</p>
                  <p className="text-muted-foreground">Rua Manoel Correa Cardoso<br />Itajubá — MG<br />CEP 37502-470</p>
                </div>
              </div>
              <a href={MAPS} target="_blank" rel="noreferrer" className="btn-line">Como chegar</a>
            </div>
          </div>
          <div className="min-h-[420px] grayscale invert-[0.9] contrast-[0.9]">
            <iframe
              title="Mapa Milon de Crotona"
              src={"https://www.google.com/maps?q=" + encodeURIComponent("Rua Manoel Correa Cardoso, Itajubá - MG, 37502-470") + "&output=embed"}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-32 md:py-48">
        <img src={barbell} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay/70" />
        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-8">
          <h2 className="reveal text-6xl font-bold md:text-9xl">
            Não existe força<br /><span className="text-primary">sem constância.</span>
          </h2>
          <a href={WHATS} target="_blank" rel="noreferrer" className="btn-red reveal mt-12">
            Venha treinar <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-iron">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-4">
            <img src={logo.url} alt="Milon de Crotona" loading="lazy" className="h-14 w-14 object-cover object-[50%_35%]" />
            <div>
              <p className="font-display uppercase tracking-[0.2em]">Milon de Crotona</p>
              <p className="text-sm text-muted-foreground">Itajubá — MG</p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {[["Academia", "#academia"], ["Estrutura", "#estrutura"], ["Planos", "#planos"], ["Localização", "#contato"], ["Contato", "#contato"]].map(([l, h]) => (
              <a key={l} href={h} className="hover:text-foreground">{l}</a>
            ))}
          </nav>
          <div className="text-sm text-muted-foreground">
            <a href={WHATS} target="_blank" rel="noreferrer" className="block hover:text-foreground">WhatsApp +55 35 99761-7396</a>
            <a href="mailto:crotonaacademia@outlook.com" className="block hover:text-foreground">crotonaacademia@outlook.com</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATS}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
