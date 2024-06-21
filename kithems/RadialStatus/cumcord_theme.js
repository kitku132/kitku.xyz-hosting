{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "RadialStatus",
    "description": "Changes the status icons to wrap around the avatar. Shape can be changed inside the theme file.",
    "type": "object",
    "properties": {
      "name": {
        "description": "RadialStatus",
        "type": "string"
      },
      "description": {
        "description": "Changes the status icons to wrap around the avatar. Shape can be changed inside the theme file.",
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
        "description": "https://betterdiscord.app/resources/thumbnails/420.jpg",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }