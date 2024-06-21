{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "Discord+",
    "description": "A sleek, customizable Discord theme, inspired by Material",
    "type": "object",
    "properties": {
      "name": {
        "description": "Discord+",
        "type": "string"
      },
      "description": {
        "description": "A sleek, customizable Discord theme, inspired by Material",
        "type": "string"
      },
      "author": {
        "description": "Insta",
        "type": "string"
      },
      "license": {
        "description": "N/A",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/548.png",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }