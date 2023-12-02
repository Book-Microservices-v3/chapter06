class GameApiClient {
    static SERVER_URL = 'https://orange-potato-4qjp9wgrp2qv6v-8081.app.github.dev';
    static GET_LEADERBOARD = '/leaders';

    static leaderBoard(): Promise<Response> {
        return fetch(GameApiClient.SERVER_URL +
            GameApiClient.GET_LEADERBOARD);
    }

}

export default GameApiClient;