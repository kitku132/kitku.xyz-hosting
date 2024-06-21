{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "Tokyo Night",
    "description": "Discord Port of Visual Studio Code Theme",
    "type": "object",
    "properties": {
      "name": {
        "description": "Tokyo Night",
        "type": "string"
      },
      "description": {
        "description": "Discord Port of Visual Studio Code Theme",
        "type": "string"
      },
      "author": {
        "description": "Ashtrath",
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