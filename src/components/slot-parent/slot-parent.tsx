import { Prop } from "@esri/calcite-components/dist/types/stencil-public-runtime";
import { Component, h } from "@stencil/core";

@Component({
  tag: "slot-parent",
  styleUrl: "slot-parent.css",
})
export class SlotParent {
  @Prop({ reflect: true }) searchedFor = "found it?";

  connectedCallback() {
    console.log("slot parent connected callback");
  }

  async componentWillLoad() {
    console.log("slot parent componentWillLoad");
    return Promise.resolve();
  }

  async componentWillRender() {
    console.log("slot parent componentWillRender");
    return Promise.resolve();
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

  async componentDidRender() {
    console.log("slot parent componentDidRender");
    return Promise.resolve();
  }

  async componentDidLoad() {
    console.log("slot parent componentDidLoad");
    return Promise.resolve();
  }

  disconnectedCallback() {
    console.log("slot parent disconnected callback");
  }
}
