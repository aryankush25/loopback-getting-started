'use strict';

module.exports = function(app) {
  console.log('#### hello');

  app.dataSources.loopbackGettingStartedDb.automigrate(
    'CoffeeShop',
    function(err) {
      if (err) throw err;

      app.models.CoffeeShop.create([{
        name: 'Bel Cafe',
        city: 'Vancouver',
      }, {
        name: 'Three Bees Coffee House',
        city: 'San Mateo',
      }, {
        name: 'Caffe Artigiano',
        city: 'Vancouver',
      }], function(err, coffeeShops) {
        if (err) throw err;

        console.log('Models created: \n', coffeeShops);
      });
    }
  );

  console.log('#### hello 1');
};
