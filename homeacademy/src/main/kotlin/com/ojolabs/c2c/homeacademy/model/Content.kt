package com.ojolabs.c2c.homeacademy.model

import java.net.URI
import java.time.Instant
import java.util.UUID

data class Content(
    val id: UUID = UUID.randomUUID(),
    val title: String? = "",
    val description: String? = "",
    val text: String? = "",
    val video: URI = URI.create(""),
    val comments: List<UUID> = emptyList(),
//    val createdAt: Instant = Instant.now()
)
