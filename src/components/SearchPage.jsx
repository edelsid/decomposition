// Это основной компонент, отвечающий за всю страницу поиска целиком. К нему подключены компоненты заголовка (Header - блоки над поисковой строкой),
// поиска (SearchArea - блоки поиска и в непосредственной близости), рекламный (Advert) и дополнительный (Additional - блоки новостные блоки под поисковой строкой).
// Так же сюда загружены все сырые данные, которые потом пробрасываются в нужные компоненты.

import { Advert } from "./Advert"
import { SearchArea } from "./SearchArea/SearchArea"
import { Header } from "./Header/Header"
import { Additional } from "./Additional/Additional"
import { news, money, tabs, special, nav, examples, weather, categories, map, tv, stream } from '../data/data'
import black from "../img/black.jpg"

export function Searchpage() {
   return (
      <div className="searchPage">
         <Header data={{news, money, tabs, special}}></Header>
         <SearchArea data={{nav, examples, black}}></SearchArea>
         <Advert img={black}></Advert>
         <Additional data={{weather, categories, map, tv, stream}}></Additional>
      </div>
   )
}