import { GraphQLServer } from "graphql-yoga";
import { v4 as uuidv4 } from "uuid";

const users = [
  {
    id: "1",
    name: "Szymon",
    email: "szymon@example.com",
    age: 21,
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
  },
  {
    id: "3",
    name: "Roko",
    email: "roko@example.com",
    age: 12,
  },
];

const posts = [
  {
    id: "10",
    title: "GraphQL",
    body: "This is GraphQL ",
    published: true,
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 21",
    body: "This is GraphQL... ",
    published: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programming music",
    body: "",
    published: true,
    author: "2",
  },
];

const comments = [
  {
    id: "102",
    text: "This worked well for me.",
    author: "3",
  },
  {
    id: "103",
    text: "Glad you enjoyed it.",
    author: "1",
  },
  {
    id: "104",
    text: "This did not work.",
    author: "2",
  },
  {
    id: "105",
    text: "Nevermind. I got it to work",
    author: "1",
  },
];

// Type definitions (schema)
const typeDefs = `
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments: [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    createPost(title: String!, body: String!, published: Boolean!, author: ID!): Post!
    createComment(text: String!, author: ID!, post: ID!): Comment!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },

    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }

      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },

    comments() {
      return comments;
    },

    me() {
      return {
        id: "123456",
        name: "Mike",
        email: "mike@example.com",
        age: 28,
      };
    },

    post() {
      return {
        id: "25963",
        title: "NorderW",
        body: "",
        published: true,
      };
    },
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => user.email === args.data.email);
      if (emailTaken) {
        throw new Error("Email taken");
      }

      const user = {
        id: uuidv4(),
        ...args.data,
      };

      users.push(user);
      return user;
    },

    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.author);

      if (!userExists) {
        throw new Error("User not found");
      }
      const post = {
        id: uuidv4(),
        ...args,
      };

      posts.push(post);
      return post;
    },

    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.author);
      const postExists = posts.some(
        (post) => post.id === args.post && post.published === true
      );

      if (!userExists || !postExists) {
        throw new Error("Unable to find user and post ");
      }

      const comment = {
        id: uuidv4(),
        ...args,
      };
      comments.push(comment);
      return comment;
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("The server is up");
});
