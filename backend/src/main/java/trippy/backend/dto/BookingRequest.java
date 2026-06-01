package trippy.backend.dto;

import lombok.Data;

@Data
public class BookingRequest {
    private String checkInDate;
    private String checkOutDate;
    private int guests;
    private Long destinationId;
}