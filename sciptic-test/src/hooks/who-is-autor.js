// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const creatorId = context.params.user.id;
    const articleComentId = context.params.query.aid || context.params.query.cid || context.data.id;
    const { service } = context;
    const articleOrComent = await service.get(articleComentId);
    if (articleOrComent.userId != creatorId) throw new Error('content is not created  by you');
    return context;
  };
};
