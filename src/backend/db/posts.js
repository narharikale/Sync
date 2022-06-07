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
  content: "The journey of a thousand miles begins with one step.",
  firstName: "Yash",
  lastName: "Ghodekar",
  username: "horsemaker",
  avatarURL:
    "https://github.com/horsemaker.png",
  createdAt: formatDate(),
  updatedAt: formatDate(),
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
  content: "That which does not kill us makes us stronger.",
  firstName: "Narhari",
  lastName: "Kale",
  username: "narharikale",
  avatarURL:
    "https://github.com/narharikale.png",
  createdAt: formatDate(),
  updatedAt: formatDate(),
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



// Post 3
{
  _id: uuid(),
  content:"Memories warm you up from the inside. But they also tear you apart.",
    firstName: "Miheer",
    lastName: "Tamkhane",
    avatarURL:"https://github.com/MiheerTamkhane.png",
    username: "MiheerTamkhane",
    createdAt: formatDate(),
    updatedAt: formatDate(),
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
{
  _id: uuid(),
  content:
    "Memories warm you up from the inside. But they also tear you apart.",
  firstName: "Rushikesh",
  lastName: "Tarapure",
  username: "t007rushi",
  avatarURL:"https://github.com/t007rushi.png",
  createdAt: formatDate(),
  updatedAt: formatDate(),
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
      text: "Interesting",
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
      text: "Interesting",
      votes: {
        upvotedBy: [],
        downvotedBy: [],
      },
    },
  ],
},
]