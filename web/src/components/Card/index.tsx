interface CardProps {
  title: string;
  adsCount: number;
  imgUrl: string;
  imgAlt: string;
}

export function Card({ title, adsCount, imgUrl, imgAlt }: CardProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden">
      <img src={imgUrl} alt={imgAlt} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}