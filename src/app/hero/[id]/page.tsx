import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

async function getHeroesData(): Promise<{data: IHeroData[] }> {
  const res = await fetch(`${process.env.DOMAIN_ORIGIN}/api/heroes`);

  if (!res.ok) {
    throw new Error("Failed to request heroes list");
  }

  return res.json();
}

export default async function Hero({ params }: IProps) {
  const { id } = await params;
  const heroes = await getHeroesData();

  return <Carousel heroes={heroes.data} activeId={id}/>;
}

