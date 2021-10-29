import { h } from "vue";

const Count = function (props) {
  function onClick() {
    console.log("I'm clicked");
  }
  return h("p", { class: "count", onClick }, props.count);
};
Count.props = {
  count: {
    type: Number,
    required: true,
  },
};
export default Count;
