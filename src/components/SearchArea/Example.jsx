// Это компонент, показывающий экземпляр поискового запроса. Функция chooseRandom() выбирает случайную фразу из набора загруженных.

export function Example({ props }) {
  const chooseRandom = () => {
    return props[Math.floor(Math.random() * props.length)];
  }

  return (
    <div className="example"> 
        <p className="generalText">Найдется все. Например, </p>
        <p className="random shadowedText">{chooseRandom()}</p>
    </div>
  )
}