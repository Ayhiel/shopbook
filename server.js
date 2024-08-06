const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// Set up the middlewares
server.use(middlewares);

// Set up the authentication middleware
server.use(auth);

// Use the router
server.use(router);

// Specify the port
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
