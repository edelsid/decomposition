// Это компонент "заголовка" страницы - всего того, что расположено выше строки поиска ее вспомогательных блоков.
// Здесь можно найти блок новостей, обмена валют и особый блок (Special), с круглой картинкой и ссылкой на какую-то отдельную статью.

import { List } from "../models/List"
import { MoneyItem } from "../Items/MoneyItem"
import { NewsItem } from "../Items/NewsItem"
import { Special } from "./Special"
import { NavItem } from "../Items/NavItem"

export function Header ({ data }) {
   const { tabs, news, money, special } = data;
   return (
      <header className="header">
         <div className="newsArea">

            <List props='list navMenu'>
               {tabs.names.map((item) => <NavItem key={item.id} item={item}></NavItem>)}
               <li className="additionalText">{tabs.date}</li>
            </List>

            <List props='list news'>
               {news.map((item) => <NewsItem key={item.id} item={item}></NewsItem>)}
            </List>

            <List props='list exchange'>
               {money.map((item) => <MoneyItem key={item.id} item={item}></MoneyItem>)}
            </List>
         </div>
         
         <Special prop={special}></Special>
      </header>
   )
}