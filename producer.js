
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  setInterval(async () => {
    const msg = `Message à ${new Date().toISOString()}`;
    try {
      await producer.send({
        topic: 'test-topic',
        messages: [
          { value: msg },
        ],
      });
      console.log('✅ Message produit :', msg);
    } catch (err) {
      console.error('❌ Erreur de production', err);
    }
  }, 2000);
};

run().catch(console.error);
