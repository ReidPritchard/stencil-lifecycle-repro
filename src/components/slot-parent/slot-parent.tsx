import { Prop } from "@esri/calcite-components/dist/types/stencil-public-runtime";
import { Component, h } from "@stencil/core";

@Component({
  tag: "slot-parent",
  styleUrl: "slot-parent.css",
})
export class SlotParent {
  @Prop({ reflect: true }) look = "found it?";

  connectedCallback() {
    console.log(
      "slot parent connected callback, look is set on the instance, but not in the dom"
    );
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
        <h2>Slot Parent</h2>
        <calcite-combobox>
          <slot />
        </calcite-combobox>
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
