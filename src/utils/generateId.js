import { v4 as uuidv4 } from "uuid";

const generateUniqueId = () => {
  const rawId = uuidv4().replace(/-/g, "");

  return rawId.substring(0, 12);
};

export { generateUniqueId };