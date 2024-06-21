{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "Ultra",
    "description": "A Smooth, Black theme",
    "type": "object",
    "properties": {
      "name": {
        "description": "Ultra",
        "type": "string"
      },
      "description": {
        "description": "A Smooth, Black theme",
        "type": "string"
      },
      "author": {
        "description": "The Commie Axolotl",
        "type": "string"
      },
      "license": {
        "description": "MIT",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/849.png",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }