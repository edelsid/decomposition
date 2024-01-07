// Это компонент для "особенного" содержания, стоящего в стороне от прочих стандартных новостей.
// В данном случае это круглая иллюстрация и приглашение перейти почитать какую-то конкретную статью или ресурс.

export function Special({ prop }) {
  const {img, title, text, link} = prop;
  return (
    <div className="special">
      <img className="specialImg" src={img}></img>
      <a href={link} className="title headerText">{title}</a>
      <a className="generalText" href={link}>{text}</a>
    </div>
  )
}