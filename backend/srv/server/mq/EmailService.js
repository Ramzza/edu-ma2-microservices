#!/usr/bin/env node

const amqp = require("amqplib/callback_api");

const sendQeue = "mining_queue";

class EmailService {
  static instance = EmailService.instance || new EmailService();

  static getInstance() {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  constructor() {
    amqp.connect("amqp://rabbitmq-service", (error0, connection) => {
      if (error0) {
        console.log(error0);
      } else {
        this.initSender(connection);
      }
    });
  }

  initSender(connection) {
    connection.createChannel((error1, channel) => {
      if (error1) {
        console.log(error1);
      } else {
        this.channelSend = channel;

        channel.assertQueue(sendQeue, {
          durable: true,
        });
      }
    });
  }

  sendEmail(sUser) {
    this.channelSend.sendToQueue(sendQeue, Buffer.from(sUser), {
      persistent: true,
    });
  }
}

module.exports = EmailService.getInstance;
