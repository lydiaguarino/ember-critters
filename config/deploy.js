module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-critters',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
