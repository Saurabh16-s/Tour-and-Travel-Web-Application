package trippy.backend.aws;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class Scheduler {

    @Autowired
    private SqsConsumer sqsConsumer;

   // @Scheduled(fixedRate = 5000) // every 5 sec
//    public void pollQueue() {
//        sqsConsumer.pollMessages();
//    }
}