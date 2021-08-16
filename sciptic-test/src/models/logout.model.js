module.exports = function (app) {
    const db = app.get('knexClient');
    const tableName = 'logout';
    db.schema.hasTable(tableName).then(exists => {
      if(!exists) {
        db.schema.createTable(tableName, table => {
          table.increments('id');
          table.integer('userId').unsigned().notNullable();
          table.timestamp("logOutDate").defaultTo(db.fn.now());
          table.foreign('userId').references('id').inTable('users');
        })
          .then(() => console.log(`Created ${tableName} table`))
          .catch(e => console.error(`Error creating ${tableName} table`, e));
      }
    });
    
  
    return db;
  };
  