import { useEffect, useRef, useState } from 'react'
import './style.scss'
const PropertiesMenu = () => {

    let propertiesMenuRef = useRef(null);

    useEffect(() => {
        const propertiesMenu = propertiesMenuRef.current;
        let header = document.querySelector('.header');
        let headerHeight = header.clientHeight;
        propertiesMenu.style.position = "fixed";
        propertiesMenu.style.top = headerHeight + "px";
        propertiesMenu.style.width = '100vw'

        if(propertiesMenu.clientHeight){
            headerHeight += propertiesMenu.clientHeight
        }
        
        headerHeight += "px"
        console.log("updatedPadding ::::", headerHeight)
        let mainContent = document.querySelector('.main-content');
        mainContent.style.paddingTop = headerHeight;
        mainContent.style.paddingBottom = headerHeight;

    }, [propertiesMenuRef.current])
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