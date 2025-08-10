class MessagingService {
    send(message) {
        throw new Error("send() petq e irakanacvi jarangi klasum");
    }
}

class EmailService extends MessagingService {
    send(message) {
        console.log(`uxarkum e email: ${message}`);
    }
}

class SMSService extends MessagingService {
    send(message){
        console.log(`uxarkum e SMS: ${message}`);
    }
}

class MessageSender {
    constructor(messagingService) {
        this.service = messagingService;
    }

    sendMessage(message) {
        this.service.send(message);
    }
}
