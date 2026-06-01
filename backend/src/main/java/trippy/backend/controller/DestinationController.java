package trippy.backend.controller;

import org.springframework.web.bind.annotation.*;
import trippy.backend.model.Destination;
import trippy.backend.service.DestinationService;

import java.util.List;

@RestController
@RequestMapping("/destinations")
@CrossOrigin(origins = "http://13.127.212.231")
public class DestinationController {

    private final DestinationService service;

    public DestinationController(DestinationService service) {
        this.service = service;
    }


    @GetMapping
    public List<Destination> getAll() {
        return service.getAllDestinations();
    }


    @GetMapping("/{id}")
    public Destination getById(@PathVariable Long id) {
        return service.getById(id);
    }


    @PostMapping
    public Destination create(@RequestBody Destination destination) {
        return service.createDestination(destination);
    }


    @PutMapping("/{id}")
    public Destination update(@PathVariable Long id,
                              @RequestBody Destination destination) {
        return service.updateDestination(id, destination);
    }


    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        service.deleteDestination(id);
        return "Deleted successfully";
    }

    @GetMapping("/search")
    public List<Destination> search(@RequestParam String name) {
        return service.searchByName(name);
    }

    @GetMapping("/filter")
    public List<Destination> filter(@RequestParam String location) {
        return service.filterByLocation(location);
    }
}