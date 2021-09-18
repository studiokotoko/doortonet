import React, { useRef, useEffect, useState } from "react";
import useMousePosition from "./useMousePosition";

let count = 0; //counter is used as key which is pass as props
let remove_expand_counter = 0; //will count how many expand should delete
let updateCursorSize;
let width = 25;

//cursor function
function Cursor() {
  //
  //
  let [children, setChildren] = useState([]); //array to store all expand div
  const { x, y } = useMousePosition(); //get mouse position from hook
  const cursor = useRef(null); //get refrence to cursor

  //add expand on mouse down
  const updateOnMouseUp = (event) => {
    //remove expand
    children = removeExpands();

    //add new expand to children
    children.unshift(
      <Expand
        key={count} //musht have an uniqe key
        topPos={event.clientY - width / 2} //position from top
        leftPos={event.clientX - width / 2} //position from left
        size={width}
      />
    );

    //
    const newChildren = [...children];
    setChildren(newChildren);

    count++;
  };

  // update the cursor size when cursor is on button
  updateCursorSize = (size, opacity) => {
    if (cursor.current) {
      cursor.current.style.width = `${size}px`;
      cursor.current.style.height = `${size}px`;
      cursor.current.style.opacity = `${opacity}`;
    }
  };

  //remove expand 
  const removeExpands = () => {
    let newChildren = [...children];
    const rm = remove_expand_counter;
    for (let i = 0; i < rm; i++) {
      newChildren.pop();
    }
    remove_expand_counter -= rm;
    return [...newChildren];
  };

  //assign event listener
  useEffect(() => {

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      cursor.current.style.display="none";
    }


    window.addEventListener("mouseup", updateOnMouseUp);
    return () => {
      window.removeEventListener("mouseup", updateOnMouseUp);
    };
  },[]);

  //change the cursor(circle) position on mouse position
  const changeCursorPosition = () => {
    if (cursor.current) {
      width = cursor.current.getBoundingClientRect().width;
      cursor.current.style.top = `${y - width / 2}px`;
      cursor.current.style.left = `${x - width / 2}px`;
    }
  };  

  changeCursorPosition();

  //draw cursor
  return (
    <>
      <div id="cursor" ref={cursor}></div>
      {/* all expand div's as children in div */}
      <div>{children}</div>
    </>
  );
}

//expand component
function Expand(props) {
  //style expand and position
  const style = {
    top: `${props.topPos}px`,
    left: `${props.leftPos}px`,
    width: `${props.size}px`,
    height: `${props.size}px`,
    animation: "expandAnim .5s ease-out",
  };

  //remove expand component when time outs
  window.setTimeout(() => {
    //
    remove_expand_counter++;
  }, 1000);

  //expand element
  return <div className="expand" style={style}></div>;
}

export default Cursor;

const onMouseIn = (size, opacity) => {
  updateCursorSize(size, opacity);
};

const onMouseOut = () => {
  updateCursorSize(25, 1);
};

export { updateCursorSize,onMouseIn,onMouseOut };
