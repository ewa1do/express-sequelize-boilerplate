import app from './app.js';
import { sequelize } from './database/database.js';
// import './models/index.js';

// import './models/Project.js';
// import './models/Task.js';

(async function () {
  try {
    await sequelize.sync();
    app.listen(8080);
    console.log(`Connection enabled, server running on PORT: 8080`);
  } catch (err) {
    console.error('Connection unable', err);
  }
})();
