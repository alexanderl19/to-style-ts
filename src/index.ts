import type { Properties } from "csstype";
import { isUnitlessNumber } from "unitless";

export const toStyleString = (properties: Properties<string | number>) => {
  return Object.entries(properties)
    .flatMap(([property, value]) => stylePropertyToString(property, value))
    .join("");
};

const stylePropertyToString = (property: string, value: string | number) => {
  const propertyKebabCase = property.replace(
    // `ms` prefix is lowercase
    /([A-Z]|ms)/g,
    (letter) => `-${letter.toLowerCase()}`
  );

  const valueString =
    typeof value === "number"
      ? isUnitlessNumber(property)
        ? value
        : value + "px"
      : value;
  return propertyKebabCase + ":" + valueString + ";";
};
