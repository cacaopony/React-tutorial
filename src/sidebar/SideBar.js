import { useRef, useState } from "react";

export default function SideBar() {
    const [width, setWidth] = useState('10vw');
    const ref = useRef(null);

    const startResizing = (mouseDownEvent) => {
        const startX = mouseDownEvent.clientX;
        const initialWidth = ref.current.offsetWidth;

        const handleMouseMove = (mouseMoveEvent) => {
            const currentX = mouseMoveEvent.clientX;
            const newWidth = initialWidth + (currentX - startX);
            setWidth(`${newWidth}px`);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="side-bar" style={{ width: width }} ref={ref}>
            <div className="resize-handle" onMouseDown={startResizing}></div>
            {/* サイドバーの内容 */}
        </div>
    );
}

