export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  title: string;
  alt: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: "pizza-zurawina",
    width: 1030,
    height: 1100,
    title: "Dolce Pancetta",
    alt: "Pizza z szynką, serem i sosem żurawinowym, przybrana świeżą bazylią",
  },
  {
    src: "mojito",
    width: 825,
    height: 1100,
    title: "Lemoniada",
    alt: "Orzeźwiające mojito z miętą i limonką w wysokiej szklance",
  },
  {
    src: "wnetrze",
    width: 1100,
    height: 829,
    title: "Wnętrze",
    alt: "Wnętrze lokalu z ceglaną ścianą, drewnianymi stołami i zielonymi krzesłami",
  },
  {
    src: "osmiornica",
    width: 480,
    height: 720,
    title: "Ośmiornica",
    alt: "Grillowana ośmiornica z warzywami i mikroliśćmi na białym talerzu",
  },
  {
    src: "porn-star-martini",
    width: 825,
    height: 1100,
    title: "Porn Star Martini",
    alt: "Koktajl Porn Star Martini w kieliszku na barze",
  },
  {
    src: "napoj-sloik",
    width: 480,
    height: 640,
    title: "Herbata",
    alt: "Aromatyczny napój z rozmarynem podany w słoiku z uchem",
  },
  {
    src: "przystawka-lupek",
    width: 480,
    height: 720,
    title: "Stek wołowy",
    alt: "Przystawka podana na kamiennej płycie z dwoma dipami i rozmarynem",
  },
  {
    src: "kawa-deser",
    width: 480,
    height: 640,
    title: "Kawa z bitą śmietaną",
    alt: "Kawa deserowa z bitą śmietaną w wysokiej szklance",
  },
  {
    src: "deser-zurawina",
    width: 480,
    height: 640,
    title: "Grzaniec",
    alt: "Deser z żurawiną i gałązką rozmarynu w prążkowanym naczyniu",
  },
];

export const galleryPath = (src: string) => `/images/gallery/${src}.webp`;
