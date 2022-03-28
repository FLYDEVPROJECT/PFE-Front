import {useState} from 'react'
function Collapsible(props){
    const [isOpen, setIsopen] = useState(false);
    return(
    <>
        <tr
                        style={{ backgroundColor: "#f0f0f0" }}
         onClick={()=> setIsopen(!isOpen)} >
            { props.header}
         </tr>
         {isOpen &&<>{props.children}</>}
    </>
    )

    
}
export default Collapsible;