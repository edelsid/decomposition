// Это компонент, отвечающий за погодный виджет.

export function Weather({ props, className }) {
  const { title, info } = props;
  return (
    <div className={className}>
      <p className="title widgetTitle">{title}</p>
      <a href ={info.link} className="linkItem generalText">
        <img className="specialImg" src={info.img}></img>
        <p className="mainTemp">{info.temp}</p>
        <div className="addTemps">
          <p className="generalText">Утром {info.morning}</p>
          <p className="generalText">Днем {info.day}</p>
          <p className="generalText">Вечером {info.evening}</p>
        </div>
      </a>
    </div>
  )
}