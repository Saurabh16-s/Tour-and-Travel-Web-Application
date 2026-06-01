package trippy.backend.service;

import org.springframework.stereotype.Service;
import trippy.backend.model.Contact;
import trippy.backend.repository.ContactRepository;

import java.util.List;

@Service
public class ContactService {

    private final ContactRepository repo;

    public ContactService(ContactRepository repo) {
        this.repo = repo;
    }


    public Contact saveMessage(Contact contact) {
        return repo.save(contact);
    }


    public List<Contact> getAllMessages() {
        return repo.findAll();
    }
}
