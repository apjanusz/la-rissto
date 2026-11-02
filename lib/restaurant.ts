// Przykładowe dane — do podmiany po otrzymaniu informacji od restauracji.
export const restaurant = {
  address: "ul. Bohaterów Westerplatte 13",
  city: "18-100 Łapy",
  phone: "+48 794 617 598",
  phoneHref: "tel:+48794617598",
  mapHref: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x471fed0001cdb675:0xa5e3c8cb9034329f?sa=X&ved=1t:8290&ictx=111",
  hours: [ ["Pon – Czw", "12:00 – 22:00"], ["Pt – Sob", "11:00 – 00:00"], ["Ndz", "11:00 – 22:00"] ],
};
export const pizzas = [
  { name: "Margherita", price: 33, image: "margherita", ingredients: "Pomidory san marzano, mozzarella, świeża bazylia" },
  { name: "Cotto", price: 41, image: "prosciutto", ingredients: "Pomidory san marzano, mozzarella, szynka cotto, świeża bazylia." },
  { name: "Salame", price: 41, image: "diavola", ingredients: "Pomidory san marzano, mozzarella, salami, oregano." },
  { name: "Peperoni", price: 44, image: "funghi", ingredients: "Pomidory san marzano, mozzarella, salami spianata, salami napoli, oregano." },
  { name: "Capricciosa", price: 46, image: "formaggi", ingredients: "Mozzarella, szynka cotto, boczek pancetta, cebula czerwona, pieczarki, oregano." },
  { name: "Salame Spianata", price: 46, image: "vegetariana", ingredients: "Pomidory san marzano, mozzarella, salami spianata, sos balsamiczny, rukola." },
];
