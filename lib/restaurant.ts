// Przykładowe dane — do podmiany po otrzymaniu informacji od restauracji.
export const restaurant = {
  address: "ul. Słoneczna 12",
  city: "15-345 Białystok",
  phone: "+48 123 456 789",
  phoneHref: "tel:+48123456789",
  mapHref: "https://www.google.com/maps/search/?api=1&query=Bia%C5%82ystok",
  hours: [ ["Pon – Czw", "12:00 – 22:00"], ["Pt – Sob", "12:00 – 23:00"], ["Ndz", "12:00 – 21:00"] ],
};
export const pizzas = [
  { name: "Margherita", price: 26, image: "margherita", ingredients: "Sos pomidorowy, mozzarella, świeża bazylia, oliwa z oliwek." },
  { name: "Prosciutto", price: 32, image: "prosciutto", ingredients: "Sos pomidorowy, mozzarella, szynka parmeńska, rukola, parmezan." },
  { name: "Diavola", price: 31, image: "diavola", ingredients: "Sos pomidorowy, mozzarella, salami pikantne, papryczki chili." },
  { name: "Funghi", price: 29, image: "funghi", ingredients: "Sos pomidorowy, mozzarella, pieczarki, natka pietruszki." },
  { name: "Quattro Formaggi", price: 34, image: "formaggi", ingredients: "Mozzarella, gorgonzola, provolone, parmezan." },
  { name: "Vegetariana", price: 28, image: "vegetariana", ingredients: "Sos pomidorowy, mozzarella, warzywa sezonowe, oliwki, bazylia." },
];
