const User = {
  posts(parent, { db }) {
    return db.posts.filter((post) => {
      return post.author === parent.id;
    });
  },
  comments(parent, { db }) {
    return db.comments.filter((comment) => {
      return comment.author === parent.id;
    });
  },
};

export { User as default };
