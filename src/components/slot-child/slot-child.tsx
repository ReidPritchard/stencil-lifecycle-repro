import { Component, h, Element, Method } from "@stencil/core";

/**
 * Used to get the closest element with a given property.
 * The idea is that you can set the prop on the parent element and the slotted elements will be able to find it.
 * @param el The element to start searching from.
 * @param prop The property to search for.
 * @param fallbackValue The value to return if the property is not found.
 */
function getElementProp(el: Element, prop: string, fallbackValue: any): any {
  const selector = `[${prop}]`;
  const closest = el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}

@Component({
  tag: "slot-child",
  styleUrl: "slot-child.css",
})
export class SlotChild {
  @Element() el: any;

  private syncDelay(ms: number) {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  }

  connectedCallback() {
    console.log("slot child connected callback");
    this.syncDelay(1000);
    this.tryToFindProp();
  }

  async componentWillLoad() {
    console.log("slot child componentWillLoad");
    this.tryToFindProp();
    return Promise.resolve();
  }

  async componentWillRender() {
    console.log("slot child componentWillRender");
    this.tryToFindProp();
    return Promise.resolve();
  }

  render() {
    console.log("slot child render");
    this.tryToFindProp();
    return (
      <calcite-combobox-item
        textLabel="child"
        value="slot-child"
      ></calcite-combobox-item>
    );
  }

  async componentDidRender() {
    console.log("slot child componentDidRender");
    this.tryToFindProp();
    return Promise.resolve();
  }

  async componentDidLoad() {
    console.log("slot child componentDidLoad");
    this.tryToFindProp();
    return Promise.resolve();
  }

  disconnectedCallback() {
    console.log("slot child disconnected callback");
    this.tryToFindProp();
  }

  @Method()
  async tryToFindProp() {
    console.log(getElementProp(this.el, "look", "no luck :/"));
    return Promise.resolve();
  }
}
