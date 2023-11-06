{
  // block stars

  /* Generic interface */
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  // type declaration
  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  // Poor Developer object

  //   const poorDeveloper: Developer<EmilabWatch, null> = {
  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Raju",
    computer: {
      brand: "Asus",
      model: "X-2055",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  // interface declaration
  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  // interface declaration
  interface Yamaha {
    model: string;
    engineCapacity: string;
  }

  // Rich Dev object
  const richDeveloper: Developer<AppleWatch, Yamaha> = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-2055",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
  // block ends
}
