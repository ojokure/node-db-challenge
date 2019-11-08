const server = require("./server.js");

const PORT = process.env.PORT || 3200;

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
