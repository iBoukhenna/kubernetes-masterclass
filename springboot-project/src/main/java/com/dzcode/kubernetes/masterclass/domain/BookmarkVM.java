package com.dzcode.kubernetes.masterclass.domain;

import java.time.Instant;

public interface BookmarkVM {

    Long getId();
    String getTitle();
    String getUrl();
    Instant getCreatedAt();
}
