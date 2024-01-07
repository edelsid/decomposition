// Это компонент, отвечающий за пункты информационного блока "Телепрограмма".

export function TVItem({ item }) {
  const {name, time, link, channel} = item;
  return (
    <li className="listItem">
      <a className="linkItem generalText " href={link}>
        <p className="important">{time}</p>
        <p className="addCat">{name}</p>
        <p className="shadowedText addCat">{channel}</p>
      </a>
    </li>
  )
}