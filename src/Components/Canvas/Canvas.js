function Canvas() {
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    ctx.current = canvasEle.getContext("2d");
    ctx.current.width = canvasEle.width;
    drawList();
  }, [drawList, stateList, setList, canvas]);

  const drawFillRect = useCallback((info, style) => {
    const { x, y, w, h } = info;
    const { backgroundColor = "black" } = style;

    ctx.current.beginPath();
    ctx.current.fillStyle = backgroundColor;
    ctx.current.fillRect(x, y, w, h);
    ctx.current.stroke();
  }, []);

  return (
    <div>
      <canvas ref={canvas}></canvas>
    </div>
  );
}
export default Canvas;
