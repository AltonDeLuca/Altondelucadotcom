import ButtonWithDropDown from "../Buttons/ButtonDropDown";
import Button from "../Buttons/Button";
import Canvas from "../Canvas/Canvas";
import React, { useRef, useEffect, useState, useCallback } from "react";
import "./Algos.css";

function Algos() {
  const [stateList, setList] = useState(Array.from(Array(40).keys()));
  // const [clicked, setClicked] = useState("");

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
    //drawList();
    await timeout(500);
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
            //drawList();
            await timeout(5);
          }
        }

        break;
      case "quicksort":
        console.log("quicky");
        quickSort(arr, 0, n - 1);
        setList(arr);
        //drawList();
        await timeout(5000);
        break;
      default:
        break;
    }
  };

  const ddContent = ["bubble", "quicksort"];

  const handleClickRand = () => {
    var list2 = stateList.sort(() => Math.random() - 0.5);
    setList(list2);
    //drawList();
  };

  return (
    <div className="center">
      <div>
        <Canvas list={stateList}></Canvas>
      </div>
      <div className="btn-container">
        <div>
          <Button
            content="Randomize"
            className="btn"
            onClick={() => handleClickRand(stateList)}
          />
        </div>
        <ButtonWithDropDown
          content="Sort"
          data={ddContent}
          handleSelect={handleSelect}
          className=""
          variant="flat"
          id="dropdown-basic-button"
        />
      </div>
    </div>
  );
}

export default Algos;
