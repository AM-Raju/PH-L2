"use strict";
{
    /* Destructuring in TS */
    /* Object Destructuring in TS */
    const user = {
        id: 345,
        name: {
            firstName: "Md.",
            middleName: "Aziz",
            lastName: "Morshed",
        },
        contactNo: 54645464,
        address: "Bangladesh",
    };
    const { contactNo: number, name: { middleName: midName }, } = user;
    /* Array destructuring */
    const myFriends = ["Rasel", "Sontu", "Soikot", "Israfil", "Himel", "Muzahid"];
    const [a, b, c, bestFriend, ...restFrnds] = myFriends;
}
