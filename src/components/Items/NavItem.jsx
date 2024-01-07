// Это компонент, отвечающий за переключащие контент вкладки, такие как над строкой поиска (видео, картинки) и над блоком новостей (Германия, рекомендуем).

export function NavItem({ item }) {
  const { title, link } = item;
  return (
    <li className="tab">
      <a className="title" href={link}>{title}</a>
    </li>
  )
}