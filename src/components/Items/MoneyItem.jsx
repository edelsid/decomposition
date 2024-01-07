// Это компонент, отвечающий за пункты блока обмена валют.

export function MoneyItem({ item }) {
  const { name, value, change } = item;
  return (
    <li className="currency">
      <p className="important">{name}</p>
      <p className="generalText">{value}</p>
      <p className="shadowedText">{change}</p>
    </li>
  )
}