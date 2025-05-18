import generateSlug from "./generateSlug";

const categories = [
  { id: 1, name: "Son Dakika" },
  { id: 2, name: "Dünya" },
  { id: 3, name: "Ekonomi" },
  { id: 4, name: "Spor" },
  { id: 5, name: "Magazin" },
  { id: 6, name: "Politika" },
  { id: 7, name: "Finans" },
  { id: 8, name: "Teknoloji" },
  { id: 9, name: "Kültür Sanat" },
  { id: 10, name: "Otomobil" },
  { id: 11, name: "Turizm" },
  { id: 12, name: "3. Sayfa" },
].map((item) => ({
  ...item,
  slug: generateSlug(item.name),
}));

export default categories;
