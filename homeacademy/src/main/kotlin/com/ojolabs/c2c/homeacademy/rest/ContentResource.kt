package com.ojolabs.c2c.homeacademy.rest

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.ojolabs.c2c.homeacademy.config.JacksonConfiguration
import com.ojolabs.c2c.homeacademy.model.Comment
import com.ojolabs.c2c.homeacademy.model.Content
import com.ojolabs.c2c.homeacademy.service.ContentService
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/content")
class ContentResource(
    private val dealService: ContentService
) {

    @RequestMapping("/{subject}", method = [RequestMethod.GET])
    @ResponseStatus(value = HttpStatus.OK)
    suspend fun getContent(
        @PathVariable subject: String
    ): Content? {
        val eventMapper: ObjectMapper = JacksonConfiguration().objectMapper()
        return eventMapper.readValue<Content>(
            this::class.java.getResource("/samples/${subject}/content.json")!!.readText(Charsets.UTF_8)
        )
    }

    @RequestMapping("/{subject}/comments", method = [RequestMethod.GET])
    @ResponseStatus(value = HttpStatus.OK)
    suspend fun getComments(
        @PathVariable subject: String
    ): List<Comment>? {
        val eventMapper: ObjectMapper = JacksonConfiguration().objectMapper()
        val content = eventMapper.readValue<Content>(this::class.java.getResource("/samples/${subject}/content.json")!!.readText(Charsets.UTF_8))
        val comments = ArrayList<Comment>()
        for(commentId in content.comments) {
            val comment = eventMapper.readValue<Comment>(
                this::class.java.getResource("/samples/${commentId}.json")!!.readText(Charsets.UTF_8)
            )
            comments.add(comment)
        }
        return comments
    }

    @RequestMapping("/{commentId}/replies", method = [RequestMethod.GET])
    @ResponseStatus(value = HttpStatus.OK)
    suspend fun getReplies(
        @PathVariable commentId: String
    ): List<Comment>? {
        val eventMapper: ObjectMapper = JacksonConfiguration().objectMapper()
        val comment = eventMapper.readValue<Comment>(this::class.java.getResource("/samples/${commentId}.json")!!.readText(Charsets.UTF_8))
        val replies = ArrayList<Comment>()
        for(replyId in comment.replies) {
            val reply = eventMapper.readValue<Comment>(
                this::class.java.getResource("/samples/${replyId}.json")!!.readText(Charsets.UTF_8)
            )
            replies.add(reply)
        }
        return replies
    }
}