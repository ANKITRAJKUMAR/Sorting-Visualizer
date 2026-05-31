import { connect } from "react-redux";
import Toolbar from "./Toolbar.jsx";
import { setArray } from "../../../reducers/array";
import { setAlgorithm } from "../../../reducers/algorithm";
import { setCurrentSorted } from "../../../reducers/sorted";
import { setRunning } from "../../../reducers/running";
import { setPaused } from "../../../reducers/paused";
import pauseController from "../../../pauseController";
import runController from "../../../runController";
import bubbleSort from "../../../algorithms/bubbleSort.js";
import quickSort from "../../../algorithms/quickSort.js";
import heapSort from "../../../algorithms/heapSort.js";
import mergeSort from "../../../algorithms/mergeSort.js";

const mapStateToProps = ({
  array,
  algorithm,
  isRunning,
  isPaused,
}) => ({
  array,
  algorithm,
  isRunning,
  isPaused,
});

const mapDispatchToProps = () => dispatch => ({
  generateArray: (length) => {
    let array = [];
    while (array.length < length) {
      array.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
    dispatch(setPaused(false));
    pauseController.setPaused(false);
  },

  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
    dispatch(setPaused(false));
    pauseController.setPaused(false);
  },

  togglePause: () => {
    const currentPaused = pauseController.isPaused();
    const newPaused = !currentPaused;
    dispatch(setPaused(newPaused));
    pauseController.setPaused(newPaused);
  },

  sort: (algorithm, array, speed) => {
    let doSort = algorithm === "bubbleSort" ?
      bubbleSort : algorithm === "quickSort" ?
        quickSort : algorithm === "heapSort" ?
          heapSort : algorithm === "mergeSort" ?
            mergeSort : null;
    dispatch(setCurrentSorted([]));
    // start a new run id so any previous run stops
    runController.startRun();
    dispatch(setPaused(false));
    pauseController.setPaused(false);
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
