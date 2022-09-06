import { Component, h, State } from "@stencil/core";
import { Scale } from "@esri/calcite-components/dist/types/components/interfaces";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css"
})
export class MyComponent {
  @State() valueList: string[] = ["value1", "value2", "value3", "value4"];

  private toggle: boolean = true;

  private comboboxChanged(e: CustomEvent) {
    console.log("value changed", (e.target as any)?.scale ?? "Unsure scale");

    // Toggle value1 in list (state should re-render)
    if (this.toggle) {
      this.valueList = ["value2", "value3", "value4"];
    } else {
      this.valueList = ["value1", "value2", "value3", "value4"];
    }

    this.valueList = [...this.valueList];
    this.toggle = !this.toggle;
  }

  private renderComboBox() {
    const list: string[] | undefined = this.valueList;
    return (
      <calcite-combobox
        scale={"s" as Scale}
        label={"Choices"}
        selectionMode={"single"}
        placeholder={"placeholder"}
        allowCustomValues={false}
        onCalciteComboboxChange={this.comboboxChanged}
      >
        {list?.map((value) => this.buildComboBoxItem(value))}
      </calcite-combobox>
    );
  }

  private buildComboBoxItem(choice: string): any {
    // These should render with a scale of "s" / class list includes "scale--s"
    return (
      <calcite-combobox-item
        key={choice}
        value={choice}
        textLabel={choice}
        selected={choice === "value2"}
      ></calcite-combobox-item>
    );
  }

  render() {
    console.log(this.valueList);
    let stringInputElement: HTMLElement;
    stringInputElement = this.renderComboBox();
    return (
      <div>
        <h2>Here it is?: </h2>
        <main>{stringInputElement}</main>
        <br />
      </div>
    );
  }
}
