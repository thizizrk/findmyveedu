import { useEffect, useRef } from 'react'
import './style.scss'
const PropertiesMenu = () => {

    let propertiesMenuRef = useRef(null);

    useEffect(()=>{
        window.onload = () => {
            const propertiesMenu = propertiesMenuRef.current;
            if(document.querySelector('.sm-screen')){
                propertiesMenu.style.top = propertiesMenu.clientHeight - 6 + "px";
            }
            else{
                propertiesMenu.style.top = propertiesMenu.clientHeight + "px";
            }
        }
    },[])
    return (
        <>
            <div className="properties-menu" ref={propertiesMenuRef}>
                <ul className="menu-list list-unstyled d-flex">
                    <li> <i className="fa fa-bed me-2" aria-hidden="true"></i> PG</li>
                    <div className="vr"></div>

                    <li> <i className="fa fa-building me-2" aria-hidden="true"></i> Flats</li>
                    <div className="vr"></div>

                    <li> <i className="fa fa-home me-2" aria-hidden="true"></i>Individual Houses</li>
                    <div className="vr"></div>

                </ul>
            </div>
            {/* <div className="h-full w-full d-flex justify-center items-center mb-5"></div> */}
        </>
    )
}
export default PropertiesMenu