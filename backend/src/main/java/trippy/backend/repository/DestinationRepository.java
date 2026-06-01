package trippy.backend.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import trippy.backend.model.Destination;

import java.util.List;

public interface DestinationRepository extends JpaRepository<Destination, Long> {


    List<Destination> findByLocation(String location);

    List<Destination> findByNameContainingIgnoreCase(String name);
}