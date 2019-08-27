const fastify = require('fastify')(
);

fastify.register(require('fastify-cors'), {
  origin: true,
});

// Declare a route
fastify.post('/api/monthlyInstallment', async (request, reply) => {
  const { amount, duration } = request.body;
  const months = duration * 12;
  const monthlyInstallment = (amount / months).toFixed(2);
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ amount, duration, monthlyInstallment });
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
