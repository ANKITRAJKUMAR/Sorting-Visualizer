let currentRunId = 0;

export default {
  startRun() {
    currentRunId += 1;
    return currentRunId;
  },
  getCurrentRunId() {
    return currentRunId;
  },
  isRunActive(id) {
    return id === currentRunId;
  }
};
