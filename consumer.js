
const { Kafka } = require('kafkajs');
const connectDB = require('./db');
const Message = require('./Message');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

const run = async () => {
  await connectDB();
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = message.value.toString();
      console.log('📥 Message reçu :', value);

      const newMessage = new Message({ value });
      await newMessage.save();
    },
  });
};

run().catch(console.error);
