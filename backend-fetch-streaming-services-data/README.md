# Node server

This directory contains the code for the Node server that will be able to connect to Spotify APIs and fetch data for the user.

This repository would need a .env file that exposes the following environment variables -

| Environment Variable Name | Description                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `CLIENT_ID`               | Spotify Developer credential to enable your application to make authorsation calls                                |
| `CLIENT_SECRET`           | Spotify Developer credential to enable your application to generate access & refresh tokens on behalf of the user |
| `SCOPES`                  | Scope of access required from the user                                                                            |
| `REDIRECT_URI`            | Redirect URI to be supplied to Spotify, used once after authorisation is granted by the user                      |
| `CORS_FRONTEND`           | Frontend URL for the application                                                                                  |
| `PORT`                    | Port this microservice runs on                                                                                    |

## Getting Started

`npm run dev`

This command will run the microservice through nodemon, meaning the microservice will automatically reload if there are any changes made to the codebase and saved. It will also try and connect to your local instances of Redis and DynamoDB.

A health check endpoint to test that the microservice is running can be found at `/health`.

The port number that the microservice runs on will depend on the value of your environment variable `PORT`. If the environment variable is not defined, it will default to running on port 3000.

-- INCOMING FUNCTIONALITY --

Swagger docs will be published for the microservice in the near future.

## Credits

- [Spotify Authorisation Examples](https://github.com/spotify/web-api-auth-examples/tree/master/)
- [Spotify Authorisation Guide](https://developer.spotify.com/documentation/general/guides/authorization-guide/)
