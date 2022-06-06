import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

 export const users = [
  {
    _id: uuid(),
    firstName: "Narhari",
    lastName: "Kale",
    username: "narharikale",
    avatarURL:
      "https://github.com/narharikale.png",
    bio: "Frontend Developer | React",
    website: "https://peerlist.io/narhari_k",
    following: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmeshjagtap",
        avatarURL: "https://github.com/prathmeshjagtap.png",
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "MiheerTamkhane",
        avatarURL: "https://github.com/MiheerTamkhane.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Yash",
        lastName: "Ghodekar",
        username: "horsemaker",
        avatarURL: "https://github.com/horsemaker.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmeshjagtap",
        avatarURL: "https://github.com/prathmeshjagtap.png",
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "MiheerTamkhane",
        avatarURL: "https://github.com/MiheerTamkhane.png",
      },
    ],
    password: "narharikale123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    firstName: "Yash",
    lastName: "Ghodekar",
    username: "horsemaker",
    avatarURL:
      "https://github.com/horsemaker.png",
    bio: "Full Stack Developer | why not ? ",
    website: "https://peerlist.io/horsemaker",
    following: [
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "narharikale",
        avatarURL: "https://github.com/narharikale.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmeshjagtap",
        avatarURL: "https://github.com/prathmeshjagtap.png",
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "MiheerTamkhane",
        avatarURL: "https://github.com/MiheerTamkhane.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Prathmesh",
        lastName: "Jagtap",
        username: "prathmeshjagtap",
        avatarURL: "https://github.com/prathmeshjagtap.png",
      },
      {
        _id: uuid(),
        firstName: "Miheer",
        lastName: "Tamkhane",
        username: "MiheerTamkhane",
        avatarURL: "https://github.com/MiheerTamkhane.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
    ],
    password: "horsemaker123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  
];
