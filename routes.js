const Wolf = require('./lib/models/wolf');
module.exports = [
    {
        method: 'GET',
        path: '/api/wolves',
        handler: function(request, reply) {
            Wolf.find(function(error, wolves) {
                if(error) {
                    console.error(error);
                }
                reply(wolves);
            });
        }
    },
    {
        method: ['PUT', 'POST'],
        path: '/api/wolves/{name}',
        handler: function(request, reply) {          
            const wolf = new Wolf({
                name: request.params.name
            });
            wolf.save(function(error, wolf) {
                if(error) {
                    console.error(error);
                }
                reply(wolf.id);
            });
        }
    }
];
  
