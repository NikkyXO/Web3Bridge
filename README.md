<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

`This project is a Random Password Generator script built with NestJS and TypeScript. 
It generates random passwords of specified length and strength, containing a mix of uppercase letters, 
lowercase letters, numbers, and special characters. 
The project also includes test cases to ensure the functionality of the password generator`.

## Installation

```bash
$ git clone https://github.com/NikkyXO/Web3Bridge.git

$ cd Web3Bridge

$ npm install

$ npm run start:dev

$ View apis on swagger documentation at http://localhost:3008/api

```

## Usage

`The Random Password Generator can be accessed via a simple HTTP POST request. You can specify the length of the password and the inclusion of uppercase letters, numbers, and special characters through query parameters`

## API Endpoints

### Generate Password
 - URL: /password/generate
 - Method: POST
 - Body Payload:
 - length (number, required): Length of the password (min: 4, max: 128).
useUpperCase (boolean, optional): Include uppercase letters (default: false).
 - useNumbers (boolean, optional): Include numbers (default: false).
useSpecialChars (boolean, optional): Include special characters (default: false).

## Running the app

```bash
# development
$ npm run test

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Olanike Ogundiran](https://olanike.com)

## License

Nest is [MIT licensed](LICENSE).
