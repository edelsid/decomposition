// Это компонент зоны поиска. Он отвечает за отображение строки поиска вместе с логотипом, списка категорий над ней (видео, картинки и т.д.),
// и примера поискового запроса.

import { List } from "../models/List"
import { NavItem } from "../Items/NavItem"
import { Example } from "./Example"

export function SearchArea( {data} ) {
  const {nav, examples, black} = data;
  return (
    <main className="searchArea">
        <List props='navMenu list'>
          {nav.map((item) => <NavItem key={item.id} item={item}></NavItem>)}
        </List>
        <div className="searchBar">
          <img className="logo" src={black}></img>
          <input className="input"></input>
          <button type="submit" className="accept">Найти</button>
        </div>
        <Example props={examples}></Example>
    </main>
  )
}