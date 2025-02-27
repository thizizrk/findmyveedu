import { useEffect, useState } from "react";

const ContentWrapper = ({className, children }) => {
    const [headerHeight, setHeaderHeight] = useState();

    useEffect(() => {
        let header = document.querySelector('.header');
        setHeaderHeight(header.clientHeight);
    }, [])
    return (
        <div className={`${className} my-5`} style={
            {
                paddingTop: headerHeight + "px",
                paddingBottom: headerHeight + "px"
            }
        }>
            {children}
        </div>
    )
}
export default ContentWrapper