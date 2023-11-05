{
  // Block start

  /* Union types  (|)  */

  type FrontendDeveloper = "fakibazDeveloper" | "JuniorDevloper"; // string literal types.
  type FullstackDeveloper = "frontendDeveloper" | "backendDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "JuniorDevloper";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const uesr1: User = {
    name: "Raju",
    gender: "Male",
    bloodGroup: "A+",
  };

  /* Intersection Types (&)(Common properties) */
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Dev";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Dev";
  };

  type FullstackDev = FrontendDev & BackendDev;

  const fullstackDev: FullstackDev = {
    skills: ["html", "css", "js"],
    designation1: "Frontend Dev",
    designation2: "Backend Dev",
  };

  // Block Ends
}
