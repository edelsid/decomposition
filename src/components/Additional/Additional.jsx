// Это компонент, отвечающий всю справочную информацию, расположенную под строкой поиска и рекламным блоком.
// Сюда входит виджет погоды и 4 похожих списка на разные темы.

import { List } from "../models/List"
import { Weather } from "./Weather"
import { MapItem } from "../Items/MapItem"
import { TVItem } from "../Items/TVItem"
import { StreamItem } from "../Items/StreamItem"
import { CategoryItem } from "../Items/CategoryItem"

export function Additional({ data }) {
  const {weather, categories, map, tv, stream} = data;
  return (
    <div className="additional">
      <Weather props={weather} className='widget'></Weather>

      <List props='list' title={map.title} className='widget'>
        <MapItem item={map.desc}></MapItem>
      </List>

      <List props='list' title={stream.title} className='widget'>
        {stream.streams.map((item) => <StreamItem key={item.id} item={item}></StreamItem>)}
      </List>

      <List props='list' title={categories.title} className='widget'>
        {categories.feed.map((item) => <CategoryItem key={item.id} item={item}></CategoryItem>)}
      </List>

      <List props='list' title={tv.title} className='widget'>
        {tv.movies.map((item) => <TVItem key={item.id} item={item}></TVItem>)}
      </List>

    </div>
  )
}