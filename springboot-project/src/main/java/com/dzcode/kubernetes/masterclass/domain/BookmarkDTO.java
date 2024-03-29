package com.dzcode.kubernetes.masterclass.domain;

import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class BookmarkDTO {

    private Long id;
    private String title;
    private String url;
    private Instant createdAt;
}
