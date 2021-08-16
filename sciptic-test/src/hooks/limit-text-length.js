// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const text = context.data.text; 
    if (text.length > 255) { 
      text.substr(0, 254);
      context.data.text =  text.substr(0, 254);
      console.log(context.data.text.length)
    }
    return context;
  };
};
