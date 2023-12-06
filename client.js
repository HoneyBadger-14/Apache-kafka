const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "kafka-test-app",
    brokers: ["192.168.1.13:9092"],
  });