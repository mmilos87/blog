const { authenticate } = require('@feathersjs/authentication').hooks;
const mapAidToData = async context=>{
 
  if (context.data && context.params.route.aid){
    context.data.articleId=context.params.route.aid; 
  }
  if (context.method === 'find') {
    context.params.query.articleId = context.params.route.aid;
  }

  return context;
}


const whoIsAutor = require('../../hooks/who-is-autor');

const limitTextLength = require('../../hooks/limit-text-length');




module.exports = {
  before: {
    all: [ ],
    find: [mapAidToData],
    get: [],
    create: [authenticate('jwt'), mapAidToData, limitTextLength()],
    update: [authenticate('jwt'), mapAidToData, whoIsAutor(), limitTextLength()],
    patch: [authenticate('jwt'), mapAidToData],
    remove: [authenticate('jwt'), whoIsAutor()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
