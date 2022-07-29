package com.ojolabs.c2c.homeacademy.model

import java.time.Instant
import java.util.UUID

data class Comment(
    val id: UUID = UUID.randomUUID(),
    val user: String? = "",
    val text: String? = "",
    val replies: List<UUID> = emptyList(),
//    val createdAt: Instant = Instant.now()
) {}
