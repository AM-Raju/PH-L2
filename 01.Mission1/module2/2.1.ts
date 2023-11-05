{
  // Block starts
  /* Type assertion */
  let anything: any;

  anything = "Next level web development";

  anything as string;

  // Using type assertion in converting value

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm(1000) as string;

  // Using type assertion to handle error message
  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  // Block ends
}
