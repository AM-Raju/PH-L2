{
  // block starts
  /* Mapped types */

  /* Normal mapping example */
  const arrOfNumbers: number[] = [1, 4, 5];
  //   const arrOfStrings: string[] = ["1", "4", "5"];
  // we did it manually

  const arrOfStrings: string[] = arrOfNumbers.map((number) => number.toString());

  console.log(arrOfStrings);

  /* mapping type started */
  type AreaNumber = {
    height: number;
    width: number;
  };

  /*  type AreaString = {
    height: string;
    width: string;
  }; */
  // We did it manually

  // Now we use the TS map type to get the same data
  type AreaString = {
    [key in keyof AreaNumber]: string;
  };

  // A tiny note about type lookUp
  type Height = AreaNumber["height"];
  // === its called lookup type.

  /* Using map type into generic way */
  type AreaString2<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString2<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
  // block ends
}
