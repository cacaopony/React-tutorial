import { useState } from "react";

export default function SideBar() {
    const [expanded, setExpanded] = useState(false);

    const handleMouseOver = () => {
        setExpanded(true);
    };

    const handleMouseLeave = () => {
        setExpanded(false);
    };
    return (
        <>
            <div className={`side-bar ${expanded ? 'expanded' : ''}`} 
                onMouseOver={handleMouseOver} 
                onMouseLeave={handleMouseLeave}>
            </div>
        </>
    )
}
