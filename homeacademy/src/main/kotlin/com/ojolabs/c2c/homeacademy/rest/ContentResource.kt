package com.ojolabs.c2c.homeacademy.rest

import com.ojolabs.c2c.homeacademy.model.Content
import com.ojolabs.c2c.homeacademy.service.ContentService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("/content")
class ContentResource(
    private val dealService: ContentService
) {

//        private val logger = KotlinLogging.logger {}

    @RequestMapping("/{contentId}", method = [RequestMethod.GET])
    @ResponseStatus(value = HttpStatus.OK)
    suspend fun getContent(
        @PathVariable contentId: String
    ): Content? {
        return Content(UUID.randomUUID(), title = "Sample content", description = "This is a sample content description", comments = emptyList())
    }
}