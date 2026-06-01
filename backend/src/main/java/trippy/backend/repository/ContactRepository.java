package trippy.backend.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import trippy.backend.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}