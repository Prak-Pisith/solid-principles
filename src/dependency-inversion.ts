// TODO: Dependency Inversion Principle (DIP)

interface MessageSender {
  sendMessage(message: string, recipient: string): void;
}

class SmsMessageSender implements MessageSender {
  sendMessage(message: string, recipient: string): void {
    console.log(`Sending SMS message: ${message} to ${recipient}`);
  }
}

class EmailMessageSender implements MessageSender {
  sendMessage(message: string, recipient: string): void {
    console.log(`Sending Email Message: ${message} to ${recipient}`);
  }
}

class MessageService {
  private sender: MessageSender;

  constructor (sender: MessageSender) {
    this.sender = sender;
  }

  sendNotification(message: string, recipient: string) {
    this.sender.sendMessage(message, recipient);
  }
}

// TODO: MessageService depends on abstractions (MessageSender) rather than concrete implementations.

function mainMessageSender () {
  // Sender 
  const smsSender = new SmsMessageSender();
  const emailSender = new EmailMessageSender();

  // Message Service
  const smsMessageService = new MessageService(smsSender);
  smsMessageService.sendNotification(`Hi there!`, 'Pisith');
  
  const emailMessageService = new MessageService(emailSender);
  emailMessageService.sendNotification('How are you?', 'Pisith');

}

mainMessageSender();

