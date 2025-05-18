const generateSlug = (title) => {
  return title
    .toLowerCase()
    .normalize("NFD") // Türkçe karakterleri ayıkla
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
};

export default generateSlug;
