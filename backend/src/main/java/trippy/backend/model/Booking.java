package trippy.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String checkInDate;
    private String checkOutDate;
    private int guests;

    @ManyToOne
    private User user;

    @ManyToOne
    private Destination destination;
}