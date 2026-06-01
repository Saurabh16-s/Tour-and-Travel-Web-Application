package trippy.backend.aws;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.sqs.SqsClient;
import software.amazon.awssdk.services.sqs.model.*;

import java.util.List;

@Service
public class SqsConsumer {

    @Autowired
    private SqsClient sqsClient;

    @Autowired
    private EmailService emailService;

    private final String QUEUE_URL = "url";

    public void pollMessages() {



        ReceiveMessageRequest request = ReceiveMessageRequest.builder()
                .queueUrl(QUEUE_URL)
                .maxNumberOfMessages(5)
                .build();

        List<Message> messages = sqsClient.receiveMessage(request).messages();

        for (Message msg : messages) {

            System.out.println("=== MESSAGE RECEIVED RAW: " + msg.body());

            try {

                String[] data = msg.body().split(",");

                String email = data[0];
                String name = data[1];

                System.out.println("=== CALLING EMAIL SERVICE ===");

                emailService.sendEmail(email, name);

                System.out.println("=== EMAIL SERVICE DONE ===");


                sqsClient.deleteMessage(DeleteMessageRequest.builder()
                        .queueUrl(QUEUE_URL)
                        .receiptHandle(msg.receiptHandle())
                        .build());

            } catch (Exception e) {
                System.out.println("=== ERROR IN CONSUMER ===");
                e.printStackTrace();
            }
        }
    }
}