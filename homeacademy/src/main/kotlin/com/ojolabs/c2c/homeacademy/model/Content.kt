package com.ojolabs.c2c.homeacademy.model

import java.util.UUID

data class Content(
    val id: UUID?,
    val title: String? = null,
    val description: String? = null,
    val text: String = "<html>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</html>",
    val comments: List<UUID> = emptyList()
)
