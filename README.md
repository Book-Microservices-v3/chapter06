# Learn Microservices with Spring Boot 3 - Chapter 6
This repository contains the source code of the practical use case described in the book [Learn Microservices with Spring Boot 3 (3rd Edition)](https://link.springer.com/book/10.1007/978-1-4842-9757-5).
The book follows a pragmatic approach to building a Microservice Architecture. You start with a small monolith and examine the pros and cons that come with a move to microservices.

## Chapter 6 version

In Chapter 6, you **enter into the world of microservices** with a first approach that uses synchronous processing and _orchestration_ from the Multiplication microservice. As the book explains, **this approach has many issues**: tight coupling, domain pollution, etc. Yet we covered it to learn why it's important to embrace _Asynchronous Processing_ and _Eventual Consistency_ in microservice architectures.

![Logical View - Chapter 6](resources/logical_views-Chapter6c.png)

The main concepts included in this chapter are:

* Monolith vs. Microservices: Pros and Cons
* Starting with a _Small Monolith_
* Non-Functional Requirements in Microservices
* Building the Gamification microservice
* Connecting microservices with synchronous interfaces
* Analysis: Transactionality, Eventual Consistency, Fault Tolerance

As usual, you go through a practical implementation of a microservice architecture that evolves to show you the real problems, and the tools you can use to solve them.

The next figure shows the domain models after introducing the Gamification domain (in the new microservice):

![Domain model](resources/business_model-Chapter6.png)

Check the [Book's Web Page](https://tpd.io/book-extra) to see the complete list of chapters.

## Running the app

Requirements:

* JDK 17
* Node.js v18.16.0
* npm 9.7.1

1. To start the Multiplication microservice, you can use the command line with the included Maven wrapper:
    ```bash
    multiplication$ ./mvnw spring-boot:run
    ```
2. To start the Gamification microservice, you do the same from its corresponding folder:
    ```bash
    gamification ./mvnw spring-boot:run
    ```
2. The React application can be started with npm. First, you need to download the dependencies with:
    ```bash
    challenges-frontend$ npm install
    ```
3. Then, you start the server with:
    ```bash
    challenges-frontend$ npm start
    ```

Once the backend and the fronted are started, you can navigate to `http://localhost:3000` in your browser and start resolving multiplication challenges. This time, you'll see the Leaderboard.

![Application - Screenshot](resources/app-leaderboard-1b.png)

## Questions

* Do you have questions about how to make this application work?
* Did you get the book and have questions about any concept explained within this chapter?
* Have you found issues using updated dependencies?

Don't hesitate to create an issue in this repository and post your question/problem there. 

## Purchase
You can buy the book online from these stores:
* [Apress](https://link.springer.com/book/10.1007/978-1-4842-9757-5)
* [Amazon](https://www.amazon.com/Learn-Microservices-Spring-Boot-Containerization/dp/1484297563)
and other online stores.
