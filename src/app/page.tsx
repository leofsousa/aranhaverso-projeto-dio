import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";
import styles from "./page.module.scss";

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(
    "https://690a34181a446bb9cc21c572.mockapi.io/api/heroes",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch heroes");
  }

  return res.json();
}

export default async function Home() {
  const heroes = await getHeroesData();

  return (
    <main className={styles.main}>
      <HeroesList heroes={heroes} />
    </main>
  );
}
