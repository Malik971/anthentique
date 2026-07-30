import type { MenuCategory, MenuItem } from "@/lib/types";
import { MenuItemCard } from "@/components/menu/MenuItemCard";

export function MenuCategorySection({ category, items }: { category: MenuCategory; items: MenuItem[] }) {
  return (
    <section className="menu-category" id={category.slug} aria-labelledby={`${category.slug}-title`}>
      <header><p>{String(category.order).padStart(2, "0")}</p><div><h2 id={`${category.slug}-title`}>{category.name}</h2><span>{category.description}</span></div></header>
      <div className="menu-category__items">
        {items.map((item) => <MenuItemCard item={item} key={item.id} />)}
      </div>
    </section>
  );
}
