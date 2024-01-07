// Это рекламный компонент. Он отвечает за отображение длинного баннера под строкой поиска.

export function Advert({ img }) {
  return (
    <div className="advert">
      <img className="advertImg" src={img}></img>
    </div>
  )
}