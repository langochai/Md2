export class TennisGame {
    score: string = '';
    private readonly scoreLove = 0;
    private readonly score15 = 1;
    private readonly score30 = 2;
    private readonly score40 = 3;
    private readonly scoreOver = 4;

    getScore(player1Name: string,
             player2Name: string,
             player1Score: number,
             player2Score: number) {


        if (player1Score == player2Score) {
            this.whenDraw(player1Score);
        } else if (player1Score >= this.scoreOver || player2Score >= this.scoreOver) {
            this.whenDeuce(player1Score, player2Score);
        } else {
            this.whenContesting(player1Score, player2Score);
        }
    }

    private whenContesting(player1Score: number, player2Score: number) {
        let tempScore = 0;
        for (let i = 1; i < 3; i++) {
            if (i == 1) tempScore = player1Score;
            else {
                this.score += "-";
                tempScore = player2Score;
            }
            switch (tempScore) {
                case this.scoreLove:
                    this.score += "Love";
                    break;
                case this.score15:
                    this.score += "Fifteen";
                    break;
                case this.score30:
                    this.score += "Thirty";
                    break;
                case this.score40:
                    this.score += "Forty";
                    break;
            }
        }
    }

    private whenDeuce(player1Score: number, player2Score: number) {
        let minusResult = player1Score - player2Score;
        if (minusResult == 1) this.score = "Advantage player1";
        else if (minusResult == -1) this.score = "Advantage player2";
        else if (minusResult >= 2) this.score = "Win for player1";
        else this.score = "Win for player2";
    }

    private whenDraw(player1Score: number) {
        switch (player1Score) {
            case this.scoreLove:
                this.score = "Love-All";
                break;
            case this.score15:
                this.score = "Fifteen-All";
                break;
            case this.score30:
                this.score = "Thirty-All";
                break;
            case this.score40:
                this.score = "Forty-All";
                break;
            default:
                this.score = "Deuce";
                break;

        }
    }
}
