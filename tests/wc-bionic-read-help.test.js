import BionicReadHelp from "../lib/bionic-read-help";
import "../lib/bionic-read-help";
import { beforeEach, describe, expect, it } from "vitest";
import { createBionicHelpWC, delay } from "./utils";

describe("wc-bionic-read-help", () => {
  beforeEach(async () => {
    document.body.innerHTML = "";
  });
  it("add wc-bionic-read-help to the DOM mode interactive", async () => {
    let message = "Hello World";
    createBionicHelpWC({ message, type: "interactive" });
    await delay(1000);

    const wcBrh = document.querySelector(BionicReadHelp.tagName);
    expect(wcBrh).not.toBeNull();
    expect(wcBrh.textContent).toBe(message);
    expect(wcBrh.shadowRoot.innerHTML).toMatchSnapshot();

    // test bionic tool bar content
    const brhToolBar = wcBrh.shadowRoot.querySelector("#wc-bionic-toolbar");
    expect(brhToolBar).not.toBeNull();
    const opacityInp = brhToolBar.querySelector("#bionic-opacity");
    const algoInp = brhToolBar.querySelector("#bionic-algorithm ");
    const checkInp = brhToolBar.querySelector("#bionic-check");
    const textColorInp = brhToolBar.querySelector("#bionic-text-color");
    expect(opacityInp).not.toBeNull();
    expect(opacityInp.value).toBe("0.75");
    expect(algoInp).not.toBeNull();
    expect(algoInp.value.split(/\s/).map(Number)).toEqual([
      -1, 0.25, 0.25, 0.35, 0.5, 0.65,
    ]);
    expect(checkInp).not.toBeNull();
    expect(checkInp.checked).toEqual(true);
    expect(textColorInp).not.toBeNull();
    expect(textColorInp.value).toBe("#000000");
    expect(brhToolBar.innerHTML).toMatchSnapshot();

    // test bionic text content
    const brhText = wcBrh.shadowRoot.querySelector("#wc-bionic-read-help-text");
    const bolds = brhText.querySelectorAll("b");
    const spans = brhText.querySelectorAll("span");
    expect(brhText).not.toBeNull();
    expect(bolds.length).toBeGreaterThan(0);
    expect(spans.length).toBeGreaterThan(0);
    expect(brhText.innerHTML).toMatchSnapshot();
  });

  it("add wc-bionic-read-help to the DOM mode static", async () => {
    document.body.innerHTML =
      "<wc-bionic-read-help>Hello World</wc-bionic-read-help>";

    await delay(1000);

    const wcBrh = document.querySelector(BionicReadHelp.tagName);
    expect(wcBrh).not.toBeNull();
    expect(wcBrh.textContent).toBe("Hello World");
    expect(wcBrh.shadowRoot.innerHTML).toMatchSnapshot();

    // test bionic tool bar content
    const brhToolBar = wcBrh.shadowRoot.querySelector("#wc-bionic-toolbar");
    expect(brhToolBar).toBeNull();

    // test bionic text content
    const brhText = wcBrh.shadowRoot.querySelector("#wc-bionic-read-help-text");
    const bolds = brhText.querySelectorAll("b");
    const spans = brhText.querySelectorAll("span");
    expect(brhText).not.toBeNull();
    expect(bolds.length).toBeGreaterThan(0);
    expect(spans.length).toBeGreaterThan(0);
    expect(brhText.innerHTML).toMatchSnapshot();
  });
});
