'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

var data ="clitan";
var entities;

module.exports = {

  index: async ctx => {
    entities = await strapi.services.firstapi.find(ctx.query);
    data =  entities.map(entity =>
       sanitizeEntity(entity, { model: strapi.models.firstapi })
     );

    return ctx.render('home', {  
      title: data[0].Tittle
    });
  },

};
