import * as React from "react";
import { AURASurface } from "@/components/aura";
import { Button } from "@/components/ui/button";
import identity from "./identity.json";

const originalLogo = new URL("./assets/shendrik-logo-color.png", import.meta.url).href;

export interface DeveloperProduct {
  productName: string;
  version: string;
  releaseYear?: number;
  licenseText?: string;
}

export interface DeveloperBadgeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  logoSrc?: string;
}

export function DeveloperBadge({ logoSrc = originalLogo, className = "", ...props }: DeveloperBadgeProps) {
  return (
    <button type="button" className={`aura-developer-badge ${className}`} aria-label="О программе и разработчике" {...props}>
      <img src={logoSrc} alt="Логотип Константина Шендрика" className="aura-developer-logo" />
      <span><strong>{identity.studio}</strong><small>Константин Шендрик</small></span>
    </button>
  );
}

export interface DeveloperAboutProps extends DeveloperProduct {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  logoSrc?: string;
}

export function DeveloperAbout({ open, onOpenChange, productName, version, releaseYear, licenseText, logoSrc = originalLogo }: DeveloperAboutProps) {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();
  React.useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  return (
    <dialog ref={dialog} className="aura-developer-dialog" aria-labelledby={titleId} aria-describedby={descriptionId}
      onCancel={(event) => { event.preventDefault(); onOpenChange(false); }} onClose={() => onOpenChange(false)}>
      <AURASurface elevation="E5" auraIntensity={1} className="aura-developer-about">
        <img src={logoSrc} alt="Логотип Константина Шендрика" className="aura-developer-hero" />
        <div className="aura-developer-heading"><span className="aura-developer-kicker">О ПРОГРАММЕ</span><h2 id={titleId}>{identity.studio}</h2>
          <p id={descriptionId}>Разработчик: <strong>{identity.developer}</strong></p></div>
        <dl className="aura-developer-details">
          <div><dt>Продукт</dt><dd>{productName}</dd></div>
          <div><dt>Версия</dt><dd>{version}</dd></div>
          <div><dt>Правообладатель</dt><dd>{identity.rightsHolder}</dd></div>
          {releaseYear !== undefined && <div><dt>Год выпуска</dt><dd>{releaseYear}</dd></div>}
          {licenseText && <div><dt>Лицензия</dt><dd>{licenseText}</dd></div>}
        </dl>
        <Button variant="secondary" onClick={() => onOpenChange(false)}>Закрыть</Button>
      </AURASurface>
    </dialog>
  );
}

export function DeveloperIdentity(props: DeveloperProduct) {
  const [open, setOpen] = React.useState(false);
  return <><DeveloperBadge onClick={() => setOpen(true)} /><DeveloperAbout {...props} open={open} onOpenChange={setOpen} /></>;
}

export function DeveloperFooter({ releaseYear, className = "" }: { releaseYear?: number; className?: string }) {
  return <footer className={`aura-developer-footer ${className}`}><span>{releaseYear !== undefined ? `© ${releaseYear} ` : ""}{identity.studio}</span><span>Разработчик: {identity.developer}</span></footer>;
}
