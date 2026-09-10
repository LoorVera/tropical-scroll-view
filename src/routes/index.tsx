import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sun, ShoppingBag } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollReveal } from "@/components/scroll-reveal";
import { useTheme } from "@/components/theme-provider";
import logoAsset from "@/assets/selva-tropical-logo.png.asset.json";
import heroProduct from "../../public/images/hero-product.jpg";
import productSuperC from "../../public/images/product-super-c.jpg";
import productEnergy from "../../public/images/product-energy-powder.jpg";
import productChlorophyll from "../../public/images/product-chlorophyll.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Selva Tropical — Vitaminas y Suplementos" },
      { name: "description", content: "Suplementos orgánicos extraídos de la biodiversidad tropical. Vitaminas, suplementos y bienestar natural de la selva." },
      { property: "og:title", content: "Selva Tropical — Vitaminas y Suplementos" },
      { property: "og:description", content: "Suplementos orgánicos extraídos de la biodiversidad tropical." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const products = [
  {
    id: 1,
    name: "Super-C Amazonia",
    description: "Inmunidad y Colágeno Natural",
    price: "$34.00",
    tag: "Best Seller",
    image: productSuperC,
  },
  {
    id: 2,
    name: "Jungle Energy Powder",
    description: "Enfoque mental sin cafeína",
    price: "$42.00",
    tag: null,
    image: productEnergy,
  },
  {
    id: 3,
    name: "Chlorophyll Detox",
    description: "Limpieza sistémica profunda",
    price: "$29.00",
    tag: null,
    image: productChlorophyll,
  },
];

const benefits = [
  {
    title: "Origen Puro",
    description: "Cosechamos ingredientes de manera sostenible en el corazón del Amazonas.",
    border: "border-zest",
    dot: "bg-zest",
  },
  {
    title: "Alta Potencia",
    description: "Concentraciones optimizadas mediante procesos de extracción en frío.",
    border: "border-leaf",
    dot: "bg-leaf",
  },
  {
    title: "Eco-Consciente",
    description: "Empaques 100% compostables y libres de plástico virgen.",
    border: "border-white/20",
    dot: "bg-white",
  },
];

function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={resolvedTheme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-zest" />
      ) : (
        <Moon className="h-5 w-5 text-jungle-900" />
      )}
    </button>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Logotipo de Selva Tropical"
              className="h-11 w-11 rounded-full object-cover"
              width={44}
              height={44}
            />
            <span className="font-serif text-xl font-bold tracking-tight text-jungle-900 dark:text-white">
              Selva Tropical
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <a
              href="#productos"
              className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-zest md:block"
            >
              Tienda
            </a>
            <a
              href="#beneficios"
              className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-zest md:block"
            >
              Nosotros
            </a>
            <ThemeToggle />
            <MobileNav className="md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal className="relative z-10">
              <span className="mb-6 inline-block rounded-full bg-leaf/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-leaf dark:bg-leaf/20">
                Poder Ancestral
              </span>
              <h1 className="mb-6 font-serif text-5xl leading-[0.9] text-jungle-900 dark:text-white md:text-7xl lg:text-8xl">
                Energía que <br />
                <span className="italic text-zest">fluye</span> de la selva.
              </h1>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Suplementos orgánicos extraídos de la biodiversidad más profunda, diseñados para el rendimiento humano moderno.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#productos"
                  className="inline-flex items-center justify-center rounded-full bg-jungle-900 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-zest dark:bg-white dark:text-jungle-950 dark:hover:bg-zest dark:hover:text-white"
                >
                  Explorar Vitaminas
                </a>
                <a
                  href="#beneficios"
                  className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-bold text-foreground transition-colors hover:bg-secondary"
                >
                  Nuestra Ciencia
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="scale" className="relative">
              <div className="absolute -right-20 -top-20 size-80 rounded-full bg-zest/20 blur-[100px]" />
              <div className="relative aspect-square w-full overflow-hidden rounded-[40px] bg-muted shadow-2xl">
                <img
                  src={heroProduct}
                  alt="Frasco premium de suplemento Selva Tropical entre hojas tropicales"
                  className="h-full w-full object-cover"
                  width={1200}
                  height={1200}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="overflow-hidden bg-jungle-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 ${benefit.border}`}
                >
                  <div className={`h-2 w-2 rounded-full ${benefit.dot}`} />
                </div>
                <h3 className="mb-4 font-serif text-2xl">{benefit.title}</h3>
                <p className="leading-relaxed text-zinc-400">{benefit.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="productos" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
            <ScrollReveal>
              <h2 className="mb-2 font-serif text-3xl text-jungle-900 dark:text-white md:text-4xl">
                Esenciales del Mes
              </h2>
              <p className="text-muted-foreground">La selección curada para tu bienestar diario.</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <a
                href="#productos"
                className="border-b-2 border-zest/20 pb-1 text-sm font-bold uppercase tracking-widest text-zest transition-all hover:border-zest"
              >
                Ver Todo
              </a>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <ScrollReveal
                key={product.id}
                delay={index * 120}
                className={`group ${index === 1 ? "md:mt-12" : ""}`}
              >
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                  {product.tag && (
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-jungle-950 backdrop-blur dark:bg-black/90 dark:text-white">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="font-serif text-xl text-jungle-900 transition-colors group-hover:text-zest dark:text-white">
                  {product.name}
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-jungle-900 dark:text-white">{product.price}</span>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-zest"
                    aria-label={`Agregar ${product.name} al carrito`}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Banner */}
      <section id="suscripcion" className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl bg-jungle-900 px-8 py-12 text-white md:px-16 md:py-20">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                <div className="absolute right-8 top-8 h-32 w-2 rotate-12 rounded-full bg-white" />
                <div className="absolute right-20 top-16 h-24 w-2 -rotate-6 rounded-full bg-zest" />
                <div className="absolute right-12 bottom-12 h-28 w-2 rotate-3 rounded-full bg-leaf" />
              </div>
              <div className="relative z-10 max-w-xl">
                <h2 className="mb-4 font-serif text-3xl leading-tight md:text-4xl">
                  Recibe la selva en tu puerta
                </h2>
                <p className="mb-8 leading-relaxed text-zinc-300">
                  Suscríbete y ahorra un 15% en cada pedido. Envío gratis y pausa cuando quieras.
                </p>
                <form
                  className="flex max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 rounded-full border-none bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-zest"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-zest px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-zest-hover"
                  >
                    Unirse
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="border-t border-border bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <img
                  src={logoAsset.url}
                  alt="Logotipo de Selva Tropical"
                  className="h-9 w-9 rounded-full object-cover"
                  loading="lazy"
                  width={36}
                  height={36}
                />
                <span className="font-serif text-lg font-bold text-jungle-900 dark:text-white">
                  Selva Tropical
                </span>
              </div>
              <p className="max-w-sm leading-relaxed text-muted-foreground">
                Transformando la sabiduría botánica en vitalidad diaria. Suscríbete para recibir noticias de la selva.
              </p>
            </div>
            <div>
              <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-jungle-900 dark:text-white">
                Productos
              </h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#productos" className="transition-colors hover:text-zest">
                    Multivitamínicos
                  </a>
                </li>
                <li>
                  <a href="#productos" className="transition-colors hover:text-zest">
                    Probióticos
                  </a>
                </li>
                <li>
                  <a href="#productos" className="transition-colors hover:text-zest">
                    Súper Alimentos
                  </a>
                </li>
                <li>
                  <a href="#productos" className="transition-colors hover:text-zest">
                    Aceites Esenciales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-jungle-900 dark:text-white">
                Comunidad
              </h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-zest">
                    Blog de Selva
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-zest">
                    Embajadores
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-zest">
                    Sostenibilidad
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-zest">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-xs italic text-muted-foreground">
              © 2024 Selva Tropical S.A. Cosechado con respeto.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-zest">
                Instagram
              </a>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-zest">
                TikTok
              </a>
              <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-zest">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
