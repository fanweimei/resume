
const pubsub = {
  _callbacks: {},
  subscribe: (event, listener) => {
    console.log(pubsub._callbacks)
    if(!pubsub._callbacks[event]) {
      pubsub._callbacks[event] = [];
    }
    pubsub._callbacks[event].push(listener);
  },
  unSubscribe: (event) => {
    if(pubsub._callbacks && pubsub._callbacks[event]) {
      delete pubsub._callbacks[event];
    }
  },
  publish: (event, data) => {
    if(!pubsub._callbacks[event] || pubsub._callbacks[event].length<1) {
      return;
    }
    pubsub._callbacks[event].forEach((listener) => {
      listener(data == 0 ?0: (data?data: {}));
    })
  }
}
export default pubsub;
