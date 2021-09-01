import React from "react";

export const TD = ({value, update, changer, id, name}) => {



    return <td key={value}>
        <input
            type="text"
               className='input-TD'
               value={value}
               disabled={!update}
                   onChange={(e) => changer(e, id, name)}/>
    </td>
}