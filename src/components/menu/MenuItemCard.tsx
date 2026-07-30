import type { MenuItem } from "@/lib/types";
import { formatPrice } from "@/lib/format-price";

export function MenuItemCard({ item, featured = false }: { item: MenuItem; featured?: boolean }) {
  const formattedPrice = formatPrice(item.price);
  return (
    <article className={featured ? "menu-item menu-item--featured" : "menu-item"}>
      <div className="menu-item__line">
        <h3>{item.name}</h3>
        {formattedPrice ? <><span className="menu-item__dots" aria-hidden="true" /><p className="menu-item__price">{formattedPrice}</p></> : null}
      </div>
      {item.description ? <p className="menu-item__description">{item.description}</p> : null}
      {item.tags?.length ? <ul className="menu-item__tags" aria-label="Informations complémentaires">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul> : null}
    </article>
  );
}
