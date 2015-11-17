/**
* Test.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	instruction:{
  		type: 'string'
  	},
  	question: {
  		type: 'string'
  	},
  	answers: {
  		type: 'Array'
  	},
  	right_answer: {
  		type: 'string'
  	},
    used: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
  }
};

