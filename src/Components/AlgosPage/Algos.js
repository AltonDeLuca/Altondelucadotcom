import ButtonWithDropDown from "../Buttons/ButtonDropDown";
import Button from "../Buttons/Button";
import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Algos.css";

function Algos() {
  const canvas = useRef();
  let ctx = useRef(null);

  const [stateList, setList] = useState(Array.from(Array(40).keys()));
  // const [clicked, setClicked] = useState("");

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
    stateList.map((value, index) => {
      let info = { x: index * 10, y: -1, w: 10, h: 10 + value * 10 };

      return drawFillRect(
        info,
        index % 2 === 0
          ? { backgroundColor: "blue" }
          : { backgroundColor: "black" }
      );
    });
  }, [drawFillRect, stateList]);

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight * 2;

    ctx.current = canvasEle.getContext("2d");
    ctx.current.width = canvasEle.width;
    drawList();
  }, [drawList, stateList, setList, canvas]);

  function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function partition(arr, low, high) {
    // pivot
    let pivot = arr[high];

    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // If current element is smaller
      // than the pivot
      if (arr[j] < pivot) {
        // Increment index of
        // smaller element
        i++;
        swap(arr, i, j);
      }
    }
    swap(arr, i + 1, high);
    return i + 1;
  }
  async function quickSort(arr, low, high) {
    setList(arr);
    drawList();
    await timeout(100);
    if (low < high) {
      // pi is partitioning index, arr[p]
      // is now at right place
      let pi = partition(arr, low, high);

      // Separately sort elements before
      // partition and after partition
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  async function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const handleSelect = async (e) => {
    var n = stateList.length;
    var arr = stateList;
    switch (e) {
      case "bubble":
        console.log("bub");

        var i, j;

        for (i = 0; i < n - 1; i++) {
          for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1);
            }
            setList(arr);
            drawList();
            await timeout(5);
          }
        }

        break;
      case "quicksort":
        console.log("quicky");
        quickSort(arr, 0, n - 1);
        setList(arr);
        drawList();
        await timeout(10);
        break;
      default:
        break;
    }
  };

  const ddContent = ["bubble", "quicksort"];

  const handleClickClear = () => {
    ctx.current.clearRect(0, 0, 398, 596);
  };

  const handleClickRand = () => {
    var list2 = stateList.sort(() => Math.random() - 0.5);
    setList(list2);
    drawList();
  };

  //draw rectangle
  // const drawRect = (info, style = {}) => {
  //   const { x, y, w, h } = info;
  //   const { borderColor = "black", borderWidth = 1 } = style;

  //   ctx.beginPath();
  //   ctx.strokeStyle = borderColor;
  //   ctx.lineWidth = borderWidth;
  //   ctx.rect(x, y, w, h);
  //   ctx.stroke();
  // };

  // draw rectangle with background

  return (
    <div className="center">
      <div>
        <canvas ref={canvas}></canvas>
      </div>
      <div className="btn-container">
        <div>
          <Button
            content="Randomize"
            className="btn"
            onClick={() => handleClickRand(stateList)}
          />
        </div>
        <div>
          <Button content="Clear" className="btn" onClick={handleClickClear} />
        </div>
        <ButtonWithDropDown
          content="Sort"
          data={ddContent}
          handleSelect={handleSelect}
          //props={(handleSelect, ddContent)}
          className=""
          variant="flat"
          id="dropdown-basic-button"
        />
      </div>
    </div>
  );
}

//() => setList(list.sort(() => Math.random() - 0.5))

export default Algos;
