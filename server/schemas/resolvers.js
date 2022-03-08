const { Book, User } = require('../models');
const {signToken} = require('../utils/auth')


const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.find(_id);
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);
      return {token, user};
    },

    // saveBook: async (parent, { authors, description, title, bookId, image, link }) => {
    // }
  },
};

module.exports = resolvers;
