import { menuCategories } from "@/content/menu";

export function MenuCategoryNav() {
  return (
    <nav className="menu-category-nav" aria-label="Catégories de la carte">
      <div className="container">
        {menuCategories.map((category) => <a href={`#${category.slug}`} key={category.id}>{category.shortName}</a>)}
      </div>
    </nav>
  );
}
