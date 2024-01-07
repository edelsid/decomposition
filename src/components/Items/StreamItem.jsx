// Это компонент, отвечающий за пункты информационного блока "Эфир".

export function StreamItem({ item }) {
  const {icon, text, channel, link} = item;
  return (
    <li className="listItem">
      <img className="icon" src={icon}></img>
      <a className="linkItem generalText" href={link}>
        <p>{text}</p>
        <p className="shadowedText addCat">{channel}</p>
      </a>
    </li>
  )
}