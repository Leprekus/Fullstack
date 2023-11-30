import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = ( props ) => {
  //separation of concerns
  //tilelist receives object arr
  //tile just receives an object
  //this makes the component more reusable
  const { list } = props
  return (
    <ul>
    { list.length > 0 ?
          list.map( (dataObject, index) => (
            /*
            <ul key={index}>
            <li>
            <label>Name: </label>
            {dataObject.Name}
            <br/>
            <label>Phone: </label>
            {dataObject.Phone}
            <br/>
            <label>Email: </label>
            {dataObject.Email}
            </li>
            </ul>
            */
            <Tile key={`tile_${index}`} dataObject={dataObject}/>
            
            )) : 'Nothing here yet...'
        }
      
    </ul>
  );
};
