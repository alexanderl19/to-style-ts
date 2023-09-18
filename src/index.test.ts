import { expect, test, describe } from "bun:test";
import { toStyleString } from ".";

describe("toStyleString", () => {
  describe("basic functionality", () => {
    test("returns empty string from empty object", () => {
      expect(toStyleString({})).toBe("");
    });

    test("returns kebab/hyphen case property names with standard css properties", () => {
      expect(
        toStyleString({
          width: "10px",
          margin: "1em",
        })
      ).toBe("width:10px;margin:1em;");
    });
  });

  describe("number units", () => {
    test("appends 'px' to length value", () => {
      expect(
        toStyleString({
          width: 10,
        })
      ).toBe("width:10px;");
    });

    test("leaves unitless property unitless", () => {
      expect(
        toStyleString({
          zIndex: 10,
        })
      ).toBe("z-index:10;");
    });
  });

  describe("vendor prefixes", () => {
    test("Moz unitless", () => {
      expect(
        toStyleString({
          MozBoxFlex: 2,
        })
      ).toBe("-moz-box-flex:2;");
    });

    test("Moz appends 'px' to length value", () => {
      expect(
        toStyleString({
          MozOutlineRadius: 2,
        })
      ).toBe("-moz-outline-radius:2px;");
    });

    test("ms unitless", () => {
      expect(
        toStyleString({
          msFlexPositive: 2,
        })
      ).toBe("-ms-flex-positive:2;");
    });

    test("ms appends 'px' to length value", () => {
      expect(
        toStyleString({
          msScrollLimitXMax: 2,
        })
      ).toBe("-ms-scroll-limit-x-max:2px;");
    });

    test("Webkit unitless", () => {
      expect(
        toStyleString({
          WebkitFlexGrow: 2,
        })
      ).toBe("-webkit-flex-grow:2;");
    });

    test("Webkit appends 'px' to length value", () => {
      expect(
        toStyleString({
          WebkitMaskPosition: 2,
        })
      ).toBe("-webkit-mask-position:2px;");
    });
  });
});
