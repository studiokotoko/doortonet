import { useState,useEffect } from "react";

//this hook will return mouse position on screen
const useMousePosition = ()=>{

    //use state hook to store the mouse position 
    const [mousePosition,setMousePosition] = useState({x:null,y:null});

    //to update mouse position
    //method is been called from mouse move event listener
    const updateMousePosition =(event)=>{
        setMousePosition({x:event.clientX,y:event.clientY});
    };

    //need to declare event listener in use effect 
    //so it will declare only once when component is mount
    //use [] to stop declare every time component gets updated
    useEffect(() => {
        window.addEventListener("mousemove",updateMousePosition)
        return () => window.removeEventListener("mousemove",updateMousePosition)
    },[])

    //return mouse position
    return mousePosition;
}

//export mouse use mouse position as hook
export default useMousePosition;
