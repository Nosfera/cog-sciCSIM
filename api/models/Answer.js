/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string'
  	},
  	result: {
  		type: 'string'
  	},
  	mouse: {
  		type: 'json'
  	},
    runner: {
      type: 'string'
    },
    testno: {
      type: 'string'
    },
    type: {
      type: 'string'
    }
  }
};

