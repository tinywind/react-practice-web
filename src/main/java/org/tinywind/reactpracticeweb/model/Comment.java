package org.tinywind.reactpracticeweb.model;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Created by tinywind on 2016-06-23.
 */
@Data
@AllArgsConstructor
public class Comment {
    private int id;
    private String author;
    private String content;
}
