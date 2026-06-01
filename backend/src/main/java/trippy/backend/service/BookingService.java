package trippy.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import trippy.backend.dto.BookingRequest;
import trippy.backend.model.Booking;
import trippy.backend.model.Destination;
import trippy.backend.model.User;
import trippy.backend.repository.BookingRepository;
import trippy.backend.repository.DestinationRepository;
import trippy.backend.repository.UserRepository;
import trippy.backend.aws.SqsProducer;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private DestinationRepository destRepo;

    @Autowired
    private SqsProducer sqsProducer;

    public Booking createBooking(String email, BookingRequest req) {

        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Destination dest = destRepo.findById(req.getDestinationId())
                .orElseThrow(() -> new RuntimeException("Destination not found"));

        Booking booking = new Booking();
        booking.setCheckInDate(req.getCheckInDate());
        booking.setCheckOutDate(req.getCheckOutDate());
        booking.setGuests(req.getGuests());
        booking.setUser(user);
        booking.setDestination(dest);

        Booking savedBooking = bookingRepo.save(booking);

        try {
            String message = user.getEmail() + "," + user.getName();
            sqsProducer.sendMessage(message);
        } catch (Exception e) {
            System.out.println("SQS failed (non-critical): " + e.getMessage());

        }

        return savedBooking;
    }
}