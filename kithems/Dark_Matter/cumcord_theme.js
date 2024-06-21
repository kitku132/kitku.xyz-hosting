{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "N/A",
    "title": "Dark Matter",
    "description": "A cold, dark & frosty theme.",
    "type": "object",
    "properties": {
      "name": {
        "description": "Dark Matter",
        "type": "string"
      },
      "description": {
        "description": "A cold, dark & frosty theme.",
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
        "description": "https://camo.githubusercontent.com/e89f2084b190ae8f24117948f9b327ec21f52f0716f8db1b7ba51d9ecb69af59/68747470733a2f2f692e696d6775722e636f6d2f785347393671612e706e67",
        "type": [ "array", "string" ],
        "items": {
          "type": "string"
        }
      }
    },
    "required": [ "name", "description", "author" ]
  }