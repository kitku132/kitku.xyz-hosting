{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "DiscordNight",
    "description": "A dark and compact theme",
    "type": "object",
    "properties": {
      "name": {
        "description": "DiscordNight",
        "type": "string"
      },
      "description": {
        "description": "A dark and compact theme",
        "type": "string"
      },
      "author": {
        "description": "KillYoy",
        "type": "string"
      },
      "license": {
        "description": "N/A",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/338.png",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }