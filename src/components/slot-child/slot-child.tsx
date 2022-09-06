import { Component, h, Element } from "@stencil/core";

function getElementProp(el: Element, prop: string, fallbackValue: any): any {
  const selector = `[${prop}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}

@Component({
  tag: "slot-child",
  styleUrl: "slot-child.css"
})
export class SlotChild {
  @Element() el: any;

  connectedCallback() {
    (function () {
      return new Promise((resolve) => setTimeout(resolve, 10000));
    })();
    console.log("slot child connected callback");
    console.log(this.el);
    console.log(getElementProp(this.el, "searchFor", "no luck :/"));
  }

  componentWillLoad() {
    console.log("slot child componentWillLoad");
  }

  componentWillRender() {
    console.log("slot child componentWillRender");
  }

  render() {
    console.log("slot child render");
    return (
      <div>
        <h2> Child Element! </h2>
      </div>
    );
  }

  componentDidRender() {
    console.log("slot child componentDidRender");
  }

  componentDidLoad() {
    console.log("slot child componentDidLoad");
  }

  disconnectedCallback() {
    console.log("slot child disconnected callback");
  }
}
