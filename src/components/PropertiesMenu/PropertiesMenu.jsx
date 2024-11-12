import { useEffect, useRef } from 'react'
import './style.scss'
const PropertiesMenu = () => {

    let propertiesMenuRef = useRef(null);

    useEffect(() => {
        const propertiesMenu = propertiesMenuRef.current;
        document.querySelector('.header').clientHeight
        if (document.querySelector('.sm-screen')) {
            propertiesMenu.style.position = "fixed";
            propertiesMenu.style.top = document.querySelector('.header').clientHeight - 12 + "px";
            propertiesMenu.style.width = '100vw'
        }
        else {
            propertiesMenu.style.position = "fixed";
            propertiesMenu.style.width = '100vw'
            propertiesMenu.style.top = document.querySelector('.header').clientHeight + "px";
        }
    }, [])
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