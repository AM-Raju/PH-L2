{
  /* Spread Operator */
  const bros1: string[] = ["Rahim", "Rana", "Rasel"];
  const bros2: string[] = ["Himel", "Hasem", "Himesh"];

  //   bros1.push(bros2);
  bros1.push(...bros2);

  /* Using spread operator inside object */
  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = { ...mentors1, ...mentors2 };

  /* Rest Operator */

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => `Hi ${friend}`);
  };

  greetFriends("Himel", "Hasem", "Himesh");
}
