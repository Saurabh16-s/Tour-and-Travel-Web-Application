package trippy.backend.aws;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;

@Service
public class EmailService {

    @Autowired
    private SesClient sesClient;

    public void sendEmail(String toEmail, String username) {

        SendEmailRequest request = SendEmailRequest.builder()
                .destination(Destination.builder()
                        .toAddresses(toEmail)
                        .build())
                .message(Message.builder()
                        .subject(Content.builder()
                                .data("Booking Confirmed 🎉")
                                .build())
                        .body(Body.builder()
                                .text(Content.builder()
                                        .data("Hello " + username + ", your booking is confirmed!")
                                        .build())
                                .build())
                        .build())
                .source("saurabhsingh050416@gmail.com") // MUST be verified in SES
                .build();

        sesClient.sendEmail(request);
        System.out.println("=== TRYING TO SEND EMAIL TO: " + toEmail);

        try {
            sesClient.sendEmail(request);
            System.out.println("=== EMAIL SENT SUCCESS ===");
        } catch (Exception e) {
            System.out.println("=== EMAIL FAILED ===");
            e.printStackTrace();
        }
    }
}