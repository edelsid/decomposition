// Это компонент, отвечающий за пункты информационного блока "Карта Германии".
// На образце такой пункт один, но потенциально их могло быть несколько.

export function MapItem({ item }) {
  const { text, link } = item;
  return (
    <li className="listItem">
        <a className="generalText" href={link}>{text}</a>
    </li>
  )
}