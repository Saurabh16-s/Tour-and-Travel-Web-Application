package trippy.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import trippy.backend.config.JwtUtil;
import trippy.backend.dto.BookingRequest;
import trippy.backend.model.Booking;
import trippy.backend.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://13.127.212.231")
public class BookingController {

    @Autowired
    private BookingService service;

    @Autowired
    private JwtUtil jwt;

    @PostMapping
    public Booking createBooking(@RequestBody BookingRequest req) {

        String email = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return service.createBooking(email, req);
    }
}