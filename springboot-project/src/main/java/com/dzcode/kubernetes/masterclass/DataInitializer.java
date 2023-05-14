package com.dzcode.kubernetes.masterclass;

import java.time.Instant;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.dzcode.kubernetes.masterclass.domain.Bookmark;
import com.dzcode.kubernetes.masterclass.domain.BookmarkRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final BookmarkRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new Bookmark(null, "SivaLabs", "https://sivalabs.in", Instant.now()));
        repository.save(new Bookmark(null, "SpringBlog", "https://springio/blog", Instant.now()));
        repository.save(new Bookmark(null, "Quarkus", "https://quarkus.io", Instant.now()));
        repository.save(new Bookmark(null, "Micronaut", "https://micronaut.io/", Instant.now()));
        repository.save(new Bookmark(null, "JOOQ", "https://www.jooq.org", Instant.now()));
        repository.save(new Bookmark(null, "VladMihalcea", "https://vladmihalvea.com", Instant.now()));
        repository.save(new Bookmark(null, "Thoughts On Java", "https://thorben-janssen.com", Instant.now()));
        repository.save(new Bookmark(null, "DZone", "https://dzone.com", Instant.now()));
        repository.save(new Bookmark(null, "DevOpsBookmarks", "https://www.devopsbookmarks.com/", Instant.now()));
        repository.save(new Bookmark(null, "Kubernetes docs", "https://Kubernetes.io/docs/home", Instant.now()));
        repository.save(new Bookmark(null, "Expressjs", "https://expressjs.com", Instant.now()));
        repository.save(new Bookmark(null, "Marcobehler", "https://www.marcobehler.com", Instant.now()));
        repository.save(new Bookmark(null, "baeldung", "https://www.baeldung.com", Instant.now()));
        repository.save(new Bookmark(null, "devglan", "https://www.devglan.com", Instant.now()));
        repository.save(new Bookmark(null, "linuxize", "https://linuxize.com", Instant.now()));
    }    
}
