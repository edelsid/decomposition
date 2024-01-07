// Это компонент, отвечающий за пункты новостного блока вверху страницы.

export function NewsItem({ item }) {
  const {icon, text, link} = item;
  return (
    <li className="listItem">
      <img className="icon" src={icon}></img>
      <a className='generalText' href={link}>{text}</a>
    </li>
  )
}