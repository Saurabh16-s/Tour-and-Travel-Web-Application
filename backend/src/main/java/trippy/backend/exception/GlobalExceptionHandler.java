package trippy.backend.exception;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(CustomException.class)
  public ResponseEntity<?> handleCustomException(CustomException ex) {

    return new ResponseEntity<>(
            Map.of(
                    "timestamp", LocalDateTime.now(),
                    "error", ex.getMessage()
            ),
            HttpStatus.BAD_REQUEST
    );
  }


  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> handleGeneralException(Exception ex) {

    return new ResponseEntity<>(
            Map.of(
                    "timestamp", LocalDateTime.now(),
                    "error", ex.getMessage()
            ),
            HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}