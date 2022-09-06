import { Prop } from "@esri/calcite-components/dist/types/stencil-public-runtime";
import { Component, h } from "@stencil/core";

@Component({
  tag: "slot-parent",
  styleUrl: "slot-parent.css"
})
export class SlotParent {
  @Prop({ reflect: true }) searchedFor = "found it?";

  connectedCallback() {
    console.log("slot parent connected callback");
  }

  componentWillLoad() {
    console.log("slot parent componentWillLoad");
  }

  componentWillRender() {
    console.log("slot parent componentWillRender");
  }

  render() {
    console.log("slot parent render");
    return (
      <div>
        <h1> This is just so the element is visible! </h1>
        <slot />
      </div>
    );
  }

  componentDidRender() {
    console.log("slot parent componentDidRender");
  }

  componentDidLoad() {
    console.log("slot parent componentDidLoad");
  }

  disconnectedCallback() {
    console.log("slot parent disconnected callback");
  }
}
