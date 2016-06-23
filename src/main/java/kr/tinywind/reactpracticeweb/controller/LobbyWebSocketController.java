package kr.tinywind.reactpracticeweb.controller;

import kr.tinywind.reactpracticeweb.model.Lobby;
import kr.tinywind.reactpracticeweb.model.LobbyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class LobbyWebSocketController {
    @Autowired
    LobbyRepository repository;

    @MessageMapping("/lobbies/init")
    @SendTo("/topic/lobbies")
    public List<Lobby> getLobbies() {
        return repository.findAll();
    }
}
