package trippy.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trippy.backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    //  Find user by email (used in login & JWT)
    Optional<User> findByEmail(String email);

    // (optional) check if email exists
    boolean existsByEmail(String email);
}
