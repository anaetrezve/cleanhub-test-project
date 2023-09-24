export const getHubLists = async () => {
  const res = await fetch("https://marketplace-demo.cleanhub.com/api/public/hubs");
  return res.json();
};
