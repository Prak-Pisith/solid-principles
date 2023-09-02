// TODO: Dependency Inversion Principle (DIP)
class SmsMessageSender {
    sendMessage(message, recipient) {
        console.log(`Sending SMS message: ${message} to ${recipient}`);
    }
}
class EmailMessageSender {
    sendMessage(message, recipient) {
        console.log(`Sending Email Message: ${message} to ${recipient}`);
    }
}
class MessageService {
    constructor(sender) {
        this.sender = sender;
    }
    sendNotification(message, recipient) {
        this.sender.sendMessage(message, recipient);
    }
}
// TODO: MessageService depends on abstractions (MessageSender) rather than concrete implementations.
function mainMessageSender() {
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
