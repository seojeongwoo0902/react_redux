export const initialScoreboardData: ScoreboardData = {
    type: 'universal',
    theme: 'universal',
    team1Name: 'Team 1',
    team1Score: '00',
    team1SetScore: '0',
    team1Foul: '0',
    team1Avatar: '',
    team1MatchImg: '',

    team2Name: 'Team 2',
    team2Score: '00',
    team2SetScore: '0',
    team2Foul: '0',
    team2Avatar: '',
    team2MatchImg: '',

    matchName: 'Match Name!',
    timer: 0,
    addTimer: 0,
    showHide: true,
    customCSS: '',

    inning: '1',
    isTop: true,
    out: '0',
    ball: '0',
    strike: '0',
    base1: true,
    base2: true,
    base3: true,
    period: '1 ST',
    set: '1',

    selectedPlayerIndex: 0,
    holeNumber: '1',
    holePar: '3',
    holeDistance: '450 M',
    players: [
        {
            playerName: 'Player 1',
            holeScore: '0',
            score: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
            ],
            scoreIn: '0',
            scoreOut: '0',
            scoreTotal: '0',
        },
        {
            playerName: 'Player 2',
            holeScore: '0',
            score: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
            ],
            scoreIn: '0',
            scoreOut: '0',
            scoreTotal: '0',
        },
        {
            playerName: 'Player 3',
            holeScore: '0',
            score: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
            ],
            scoreIn: '0',
            scoreOut: '0',
            scoreTotal: '0',
        },
        {
            playerName: 'Player 4',
            holeScore: '0',
            score: [
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
                '0',
            ],
            scoreIn: '0',
            scoreOut: '0',
            scoreTotal: '0',
        },
    ],

    par: [
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
        '0',
    ],
    parIn: '0',
    parOut: '0',
    parTotal: '0',

    over: '0.0',
    batsman1Name: 'Batsman 1',
    batsman1Score: '0',
    batsman1Hit: '0',
    batsman2Name: 'Batsman 2',
    batsman2Score: '0',
    batsman2Hit: '0',
    bowlerName: 'Bowler',
    bowlerScore: '0',
    bowlerOut: '0',
    cricketTeam2Score: '0 - 00',
    isStart: false,
    isPause: false,
    timerShowHide: true,

    awayPlayers: [],
    homePlayers: [],

    pauseMatchTime: 0,
    startTime: 0,
};