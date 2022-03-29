import { useCallback, useEffect, useRef } from "react";
import Button from "../Buttons/Button";
function Canvas(props) {
  const canvas = useRef();
  let ctx = useRef(null);

  const drawFillRect = useCallback((info, style) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;

    ctx.current.beginPath();
    ctx.current.fillStyle = backgroundColor;
    ctx.current.fillRect(x, y, w, h);
    ctx.current.stroke();
  }, []);

  const drawList = useCallback(() => {
    ctx.current.clearRect(0, 0, 398, 596);
    console.log(props.list);
    if (!props.list) {
      return null;
    }
    props.list.map((value, index) => {
      let info = { x: 10 + index * 10, y: -800, w: 10, h: value * 1000 };
      console.log(
        "Drawing at: " + info.x + " " + info.y + " height: " + info.h
      );
      return drawFillRect(
        info,
        index % 2 === 0
          ? { backgroundColor: "blue" }
          : { backgroundColor: "black" }
      );
    });
  }, [drawFillRect, props.list]);

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    ctx.current = canvasEle.getContext("2d");
    ctx.current.width = canvasEle.width;
    if (props.list === undefined) {
    } else drawList();
  }, [drawList, props.list, canvas]);

  const handleClickClear = () => {
    ctx.current.clearRect(0, 0, 398, 596);
  };
  if (props.list === undefined) {
    return <div> LOADING </div>;
  }

  return (
    <div>
      <canvas ref={canvas}></canvas>
      <div>
        <Button content="Clear" className="btn" onClick={handleClickClear} />
        <Button content="DRAW" onClick={drawList}></Button>
      </div>
    </div>
  );
}
export default Canvas;
