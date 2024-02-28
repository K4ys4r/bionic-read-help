import { describe, expect, it } from "vitest";
import BionicReadHelp from "../lib/bionic-read-help";

const attrs = [
  "brh-type",
  "brh-opacity",
  "brh-text-color",
  "brh-algorithm",
].sort();

describe("BionicReadHelp", () => {
  it("test class attribute", () => {
    expect(Object.keys(BionicReadHelp.attributes).sort()).toEqual(attrs);
    expect(Object.values(BionicReadHelp.attributes).sort()).toEqual(attrs);
    expect(BionicReadHelp.tagName).toBe("wc-bionic-read-help");
  });

  it("test class instance", () => {
    let brh = new BionicReadHelp();
    expect(brh).toBeDefined();
    expect(brh).toBeInstanceOf(BionicReadHelp);
    expect(brh).toBeInstanceOf(HTMLElement);
    expect(brh).toBeTypeOf("object");
    expect(brh.bionicOpacity).toEqual(0.75);
    expect(brh.bionicType).toEqual("static");
    expect(brh.bionicTextColor).toEqual("#000");
    expect(brh.bionicAlgo).toEqual([-1, 0.25, 0.25, 0.35, 0.5, 0.65]);
    expect(brh.isBionic).toEqual(true);
  });
});
