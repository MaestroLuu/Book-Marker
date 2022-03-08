const { Book, User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.find(_id);
    },
  },
//   Mutation: {
//     createMatchup: async (parent, args) => {
//       const matchup = await Matchup.create(args);
//       return matchup;
//     },
//     createVote: async (parent, { _id, techNum }) => {
//       const vote = await Matchup.findOneAndUpdate(
//         { _id },
//         { $inc: { [`tech${techNum}_votes`]: 1 } },
//         { new: true }
//       );
//       return vote;
//     },
//   },
};

module.exports = resolvers;
