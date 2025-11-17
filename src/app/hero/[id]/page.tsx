import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

async function getHeroesData(): Promise<IHeroData[]> {
  const res = await fetch(
    "https://690a34181a446bb9cc21c572.mockapi.io/api/heroes",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Hero({ params }: IProps) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes} activeId={id} />;
}
