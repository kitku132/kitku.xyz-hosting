{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "GitHub Dark",
    "description": "A theme based off of the GitHub Dark theme.",
    "type": "object",
    "properties": {
      "name": {
        "description": "GitHub Dark",
        "type": "string"
      },
      "description": {
        "description": "A theme based off of the GitHub Dark theme.",
        "type": "string"
      },
      "author": {
        "description": "Sango",
        "type": "string"
      },
      "license": {
        "description": "N/A",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/597.png",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }