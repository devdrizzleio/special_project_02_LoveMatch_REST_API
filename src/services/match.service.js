const formatMatchResponse = (match) => {
  return {
    matchId: match._id,
    users: match.users,
    createdAt: match.createdAt
  };
};

export { formatMatchResponse };