{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "Slate",
    "description": "An optimized, consistent, and functional theme for Discord based on GitHub's design language.",
    "type": "object",
    "properties": {
      "name": {
        "description": "Slate",
        "type": "string"
      },
      "description": {
        "description": "An optimized, consistent, and functional theme for Discord based on GitHub's design language.",
        "type": "string"
      },
      "author": {
        "description": "Tropical",
        "type": "string"
      },
      "license": {
        "description": "MIT",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/147.gif",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }