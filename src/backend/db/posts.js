import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  //post 1
  {
  _id: uuid(),
  content: "dolor sit amet, consectetur adipisicing elit. sed nemo accusamus et, con",
  firstName: "Yash",
  lastName: "Ghodekar",
  username: "horsemaker",
  avatarURL:
    "https://github.com/horsemaker.png",
  createdAt: new Date("June 7 2022"),
  updatedAt: new Date("June 7 2022"),
  likes: {
    likeCount: 2,
    likedBy: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
    ],
    dislikedBy: [],
  },
  
  comments: [
    {
      _id: uuid(),
      firstName: "Rushikesh",
      lastName: "Tarapure",
      username: "t007rushi",
      avatarURL: "https://github.com/t007rushi.png",
      text: "Interesting",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
    {
      _id: uuid(),
      firstName: "Miheer",
      lastName: "Tamkhane",
      username: "MiheerTamkhane",
      avatarURL: "https://github.com/MiheerTamkhane.png",
      text: "Noice!",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
  ],
},


// Post 2
{
  _id: uuid(),
  content: "consectetur adipisicing elit. sed nemo accusamus et, con",
  firstName: "Narhari",
  lastName: "Kale",
  username: "narharikale",
  avatarURL:"https://github.com/narharikale.png",
  createdAt: new Date("June 1 2022"),
  updatedAt: new Date("June 1 2022"),
  likes: {
    likeCount: 3,
    likedBy: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
      },
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
    ],
    dislikedBy: [],
  },
  comments: [
    {
      _id: uuid(),
      firstName: "Vijay",
      lastName: "Tembugade",
      username: "vijaytembugade",
      avatarURL:"https://github.com/vijaytembugade.png",
      text: "Interesting",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
    {
      _id: uuid(),
      firstName: "Miheer",
      lastName: "Tamkhane",
      username: "MiheerTamkhane",
      avatarURL: "https://github.com/MiheerTamkhane.png",
      text: "Noice!",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
  ],
},

{
  _id: uuid(),
  content: "lorem ipsum dolor sit amet, consectetur adipisicing elit. sed nemo accusamus et, con",
  firstName: "Rushikesh",
  lastName: "Tarapure",
  username: "t007rushi",
  avatarURL:"https://github.com/t007rushi.png",
  createdAt: new Date("May 15 2022"),
  updatedAt: new Date("May 15 2022"),
  likes: {
    likeCount: 2,
    likedBy: [
      {
        _id: uuid(),
        firstName: "Vijay",
        lastName: "Tembugade",
        username: "vijaytembugade",
        avatarURL: "https://github.com/vijaytembugade.png",
      },
      {
        _id: uuid(),
        firstName: "Narhari",
        lastName: "Kale",
        username: "narharikale",
        avatarURL: "https://github.com/narharikale.png",
      },
    ],
    dislikedBy: [],
  },
  
  comments: [
    {
      _id: uuid(),
      firstName: "Yash",
      lastName: "Ghodekar",
      username: "horsemaker",
      avatarURL:"https://github.com/horsemaker.png",
      text: "amzing",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
    {
      _id: uuid(),
      firstName: "Vijay",
      lastName: "Tembugade",
      username: "vijaytembugade",
      avatarURL:"https://github.com/vijaytembugade.png",
      text: "great",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
  ],
},

// Post 3
{
  _id: uuid(),
  content:"lorem ipsum dolor sit amet, consectetur adipisicing elit. sed nemo accusamus et, con.",
    firstName: "Miheer",
    lastName: "Tamkhane",
    avatarURL:"https://github.com/MiheerTamkhane.png",
    username: "MiheerTamkhane",
    createdAt: new Date("May 13 2022"),
    updatedAt: new Date("May 13 2022"),
    likes: {
    likeCount: 3,
    likedBy: [
      {
        _id: uuid(),
        firstName: "Rushikesh",
        lastName: "Tarapure",
        username: "t007rushi",
        avatarURL: "https://github.com/t007rushi.png",
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
        firstName: "Narhari",
        lastName: "Kale",
        username: "narharikale",
        avatarURL: "https://github.com/narharikale.png",
      },
    ],
    dislikedBy: [],
  },
  comments: [
    {
      _id: uuid(),
      firstName: "Vijay",
      lastName: "Tembugade",
      username: "vijaytembugade",
      avatarURL:"https://github.com/vijaytembugade.png",
      text: "Interesting",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
    {
      _id: uuid(),
      firstName: "Rushikesh",
      lastName: "Tarapure",
      username: "t007rushi",
      avatarURL: "https://github.com/t007rushi.png",
      text: "Interesting",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
  ],
},



// Post 4

]