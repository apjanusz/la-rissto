import data from "@/data/menu.json";

export type MenuVariant = { etykieta: string; cena: number };
export type MenuItem = { nazwa: string; cena: number; skladniki?: string[]; ceny?: MenuVariant[] };
export type MenuGroup = { nazwa: string | null; pozycje: MenuItem[] };
export type MenuCategory = { id: string; nazwa: string; opis?: string; grupy: MenuGroup[] };
export type MenuData = {
  restauracja: { nazwa: string; adres: string; telefon: string; uwagi: string[] };
  kategorie: MenuCategory[];
};

export const menu = data as MenuData;
