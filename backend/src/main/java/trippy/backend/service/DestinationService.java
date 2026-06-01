package trippy.backend.service;

import org.springframework.stereotype.Service;
import trippy.backend.model.Destination;
import trippy.backend.repository.DestinationRepository;

import java.util.List;

@Service
public class DestinationService {

    private final DestinationRepository repo;

    public DestinationService(DestinationRepository repo) {
        this.repo = repo;
    }


    public List<Destination> getAllDestinations() {
        return repo.findAll();
    }


    public Destination getById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Destination not found"));
    }


    public Destination createDestination(Destination destination) {
        return repo.save(destination);
    }


    public Destination updateDestination(Long id, Destination updated) {
        Destination existing = getById(id);

        existing.setName(updated.getName());
        existing.setLocation(updated.getLocation());
        existing.setImageUrl(updated.getImageUrl());
        existing.setDescription(updated.getDescription());

        return repo.save(existing);
    }


    public void deleteDestination(Long id) {
        repo.deleteById(id);
    }


    public List<Destination> searchByName(String name) {
        return repo.findByNameContainingIgnoreCase(name);
    }

    public List<Destination> filterByLocation(String location) {
        return repo.findByLocation(location);
    }
}
