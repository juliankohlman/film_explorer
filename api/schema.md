# Film-explorer schema docs

## Types

## Types: Query

## Enums

- example config file
  - need to install graphql-cli and run graphql init

```graphql
{
  "schemaPath": "schema.graphql",
  "extensions": {
    "endpoints": {
      "dev": {
        "url": "https://example.com/graphql",
        "headers": {
          "Authorization": "Bearer ${env:AUTH_TOKEN_ENV}"
        },
        "subscription": {
          "url": "ws://example.com/graphql",
          "connectionParams": {
            "Token": "${env:YOUR_APP_TOKEN}"
          }
        }
      }
    }
  }
}
```
