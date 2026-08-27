"use client";

import { Menu, X, Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Tienda", href: "#productos" },
  { label: "Nuestra Selva", href: "#beneficios" },
  { label: "Suscripción", href: "#suscripcion" },
  { label: "Contacto", href: "#footer" },
];

export function MobileNav({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className={cn(
            "group inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            className,
          )}
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5 text-foreground transition-transform group-hover:scale-110" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-[85%] max-w-sm flex-col border-r border-border bg-background p-0">
        <SheetHeader className="px-6 pb-4 pt-6 text-left">
          <SheetTitle className="flex items-center gap-2 font-serif text-xl">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-jungle-900 dark:bg-leaf">
              <Leaf className="h-4 w-4 text-white dark:text-jungle-950" />
            </span>
            Selva Tropical
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-1 flex-col gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.label}>
              <a
                href={link.href}
                className="rounded-xl px-4 py-4 font-serif text-2xl font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <div className="border-t border-border px-6 py-6">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center justify-between rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
            aria-label="Cambiar tema"
          >
            <span className="flex items-center gap-2">
              {resolvedTheme === "dark" ? (
                <>
                  <Sun className="h-4 w-4 text-zest" />
                  Modo claro
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-jungle-900" />
                  Modo oscuro
                </>
              )}
            </span>
            <span className="text-xs text-muted-foreground">
              {resolvedTheme === "dark" ? "Activado" : "Desactivado"}
            </span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
