export const trendingVideo = (req, res) =>
  res.render("home", { pageTitle: "Home" });
export const seeVideo = (req, res) =>
  res.render("watch", { pageTitle: "Watch" });
export const editVideo = (req, res) =>
  res.render("edit", { pageTitle: "Edit" });
export const deleteVideo = (req, res) => res.send("Delete Video");
export const searchVideo = (req, res) => res.send("Search Video");
export const uploadVideo = (req, res) => res.send("Upload Video");
