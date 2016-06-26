package org.tinywind.reactpracticeweb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.tinywind.reactpracticeweb.model.Comment;
import org.tinywind.reactpracticeweb.model.Lobby;
import org.tinywind.reactpracticeweb.model.LobbyRepository;

import java.util.Arrays;

@Controller
public class SimpleController {
    @Autowired
    LobbyRepository repository;

    @Autowired
    private SimpMessagingTemplate messenger;

    @RequestMapping("")
    public String index(Model model) {
        model.addAttribute("title", "The title");
        model.addAttribute("comments",
                Arrays.asList(new Comment(1, "griffio", "This is the first comment"),
                        new Comment(2, "griffio", "This is the second comment")));
        return "home";
    }

    @RequestMapping("/lobbies/{name}")
    @ResponseBody
    public void createLobby(@PathVariable String name) {
        repository.save(new Lobby(name));
        messenger.convertAndSend("/topic/lobbies", repository.findAll());
    }

    @RequestMapping("/lobbies/{name}/clear")
    @ResponseBody
    public void deleteLobby(@PathVariable String name) {
        repository.deleteByName(name);
        messenger.convertAndSend("/topic/lobbies", repository.findAll());
    }
}