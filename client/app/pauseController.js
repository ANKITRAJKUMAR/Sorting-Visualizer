let _paused = false;

export default {
  setPaused(val) {
    _paused = !!val;
  },
  isPaused() {
    return _paused;
  }
};
