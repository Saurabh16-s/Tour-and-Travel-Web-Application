package trippy.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import trippy.backend.config.JwtUtil;
import trippy.backend.dto.AuthRequest;
import trippy.backend.dto.AuthResponse;
import trippy.backend.model.User;
import trippy.backend.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://13.127.212.231")
public class AuthController {

    @Autowired
    private AuthService service;

    @Autowired
    private JwtUtil jwt;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest req) {

        System.out.println("LOGIN EMAIL: " + req.getEmail());

        User user = service.login(req.getEmail(), req.getPassword());

        System.out.println("USER FOUND: " + user.getEmail());

        String token = jwt.generateToken(user.getEmail());

        System.out.println("TOKEN: " + token);

        return new AuthResponse(token);
    }
}