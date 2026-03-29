const formatMessage = (message) => {
  return {
    id: message._id,
    text: message.text,
    sender: message.senderId,
    createdAt: message.createdAt
  };
};

export { formatMessage };