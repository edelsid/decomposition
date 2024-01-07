// Это компонент, отвечающий за пункты информационного блока "Посещаемое".
// "Категории" обозначают темы по интересам, которые могут занять людей (недвижимость, авто и т.д.)

export function CategoryItem({ item }) {
  const {name, theme, link} = item;
  return (
    <li className="listItem">
      <a className="important linkItem" href={link}>
        <p>{name}</p>
        <p className="generalText addCat"> - {theme}</p>
      </a>
    </li>
  )
}
