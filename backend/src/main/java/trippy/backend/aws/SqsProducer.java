package trippy.backend.aws;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.sqs.SqsClient;
import software.amazon.awssdk.services.sqs.model.SendMessageRequest;

@Service
public class SqsProducer {

    @Autowired
    private SqsClient sqsClient;

    private final String QUEUE_URL = "url";

    public void sendMessage(String messageBody) {

        SendMessageRequest request = SendMessageRequest.builder()
                .queueUrl(QUEUE_URL)
                .messageBody(messageBody)
                .build();

        sqsClient.sendMessage(request);
    }
}