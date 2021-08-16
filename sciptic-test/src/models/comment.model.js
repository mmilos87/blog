/* eslint-disable no-console */

// Comment-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'comment';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('text');
        table.integer('userId').unsigned().notNullable();
        table.integer('articleId').unsigned().notNullable();
        table.timestamps(true,true);
        table.foreign('userId').references('id').inTable('users');
        table.foreign('articleId').references('id').inTable('article').onDelete('CASCADE');
        
         
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
