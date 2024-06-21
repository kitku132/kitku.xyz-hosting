{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "SoftX",
    "description": "A soft and comfy feel for Discord.",
    "type": "object",
    "properties": {
      "name": {
        "description": "SoftX",
        "type": "string"
      },
      "description": {
        "description": "A soft and comfy feel for Discord.",
        "type": "string"
      },
      "author": {
        "description": "Gibbu",
        "type": "string"
      },
      "license": {
        "description": "MIT",
        "type": "string"
      },
      "media": {
        "description": "https://betterdiscord.app/resources/thumbnails/690.png",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }