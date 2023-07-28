package com.dzcode.kubernetes.masterclass.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dzcode.kubernetes.masterclass.domain.BookmarkDTO;
import com.dzcode.kubernetes.masterclass.domain.CreateBookmarkRequest;
import com.dzcode.kubernetes.masterclass.domain.BookmarkService;
import com.dzcode.kubernetes.masterclass.domain.BookmarksDTO;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/bookmarks")
@RequiredArgsConstructor
public class BookmarkController {
    private final BookmarkService bookmarkService;

    @GetMapping
    public BookmarksDTO getBookmarks(@RequestParam(name = "page", defaultValue = "1") Integer page, 
                                @RequestParam(name = "query", defaultValue = "") String query) {
        if (query == null || query.trim().length() == 0) {
            return bookmarkService.getBookmarks(page);
        }
        return bookmarkService.searchBookmarks(query, page);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BookmarkDTO createBookmark(@RequestBody @Valid CreateBookmarkRequest createBookmarkRequest) {
        return bookmarkService.createBookmark(createBookmarkRequest);
    }
}
