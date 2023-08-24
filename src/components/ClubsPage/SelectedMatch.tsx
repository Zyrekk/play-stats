import React from "react";
import Image from "next/image";

interface RootObject {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    minute: number;
    injuryTime: number;
    attendance: number;
    venue: string;
    matchday: number;
    stage: string;
    group?: any;
    lastUpdated: string;
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
    score: Score;
    goals: Goal[];
    penalties: Penalty[];
    bookings: Booking[];
    substitutions: Substitution[];
    odds: Odds;
    referees: Referee[];
}

interface Referee {
    id: number;
    name: string;
    type: string;
    nationality: string | null;
}

interface Odds {
    homeWin: number;
    draw: number;
    awayWin: number;
}

interface Substitution {
    minute: number;
    team: Team;
    playerOut: Team;
    playerIn: Team;
}

interface Booking {
    minute: number;
    team: Team;
    player: Team;
    card: string;
}

interface Penalty {
    player: Team;
    team: Team2;
    scored: boolean;
}

interface Team2 {
    id?: any;
    name?: any;
}

interface Goal {
    minute: number;
    injuryTime?: any;
    type: string;
    team: Team;
    scorer: Team;
    assist: Team | null;
    score: FullTime;
}

interface Team {
    id: number;
    name: string;
}

interface Score {
    winner: string;
    duration: string;
    fullTime: FullTime;
    halfTime: FullTime;
}

interface FullTime {
    home: number;
    away: number;
}

interface AwayTeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: Coach;
    leagueRank?: any;
    formation: string;
    lineup: Lineup2[];
    bench: Lineup2[];
    statistics: Statistics;
}

interface Lineup2 {
    id: number;
    name: string;
    position: string | null;
    shirtNumber: number;
}

interface HomeTeam {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    coach: Coach;
    leagueRank?: any;
    formation: string;
    lineup: Lineup[];
    bench: Lineup[];
    statistics: Statistics;
}

interface Statistics {
    corner_kicks: number;
    free_kicks: number;
    goal_kicks: number;
    offsides: number;
    fouls: number;
    ball_possession: number;
    saves: number;
    throw_ins: number;
    shots: number;
    shots_on_goal: number;
    shots_off_goal: number;
    yellow_cards: number;
    yellow_red_cards: number;
    red_cards: number;
}

interface Lineup {
    id: number;
    name: string;
    position: string | null;
    shirtNumber: number;
}

interface Coach {
    id: number;
    name: string;
    nationality: string;
}

interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner?: any;
    stages: string[];
}

interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}

const match: RootObject = {
    area: {
        id: 2072,
        name: "England",
        code: "ENG",
        flag: "https://crests.football-data.org/770.svg",
    },
    competition: {
        id: 2021,
        name: "Premier League",
        code: "PL",
        type: "LEAGUE",
        emblem: "https://crests.football-data.org/PL.png",
    },
    season: {
        id: 733,
        startDate: "2021-08-13",
        endDate: "2022-05-22",
        currentMatchday: 37,
        winner: null,
        stages: ["REGULAR_SEASON"],
    },
    id: 327117,
    utcDate: "2022-02-12T12:30:00Z",
    status: "FINISHED",
    minute: 90,
    injuryTime: 6,
    attendance: 73084,
    venue: "Old Trafford",
    matchday: 25,
    stage: "REGULAR_SEASON",
    group: null,
    lastUpdated: "2022-05-17T17:33:08Z",
    homeTeam: {
        id: 66,
        name: "Manchester United FC",
        shortName: "Man United",
        tla: "MUN",
        crest: "https://crests.football-data.org/66.png",
        coach: {
            id: 59070,
            name: "Ralf Rangnick",
            nationality: "Germany",
        },
        leagueRank: null,
        formation: "4-2-3-1",
        lineup: [
            {
                id: 3188,
                name: "David De Gea",
                position: "Goalkeeper",
                shirtNumber: 1,
            },
            {
                id: 15905,
                name: "Diogo Dalot",
                position: "Right-Back",
                shirtNumber: 20,
            },
            {
                id: 3360,
                name: "Raphaël Varane",
                position: "Centre-Back",
                shirtNumber: 19,
            },
            {
                id: 3326,
                name: "Harry Maguire",
                position: "Centre-Back",
                shirtNumber: 5,
            },
            {
                id: 7898,
                name: "Luke Shaw",
                position: "Left-Back",
                shirtNumber: 23,
            },
            {
                id: 3366,
                name: "Paul Pogba",
                position: "Central Midfield",
                shirtNumber: 6,
            },
            {
                id: 7905,
                name: "Scott McTominay",
                position: "Defensive Midfield",
                shirtNumber: 39,
            },
            {
                id: 3257,
                name: "Bruno Fernandes",
                position: "Attacking Midfield",
                shirtNumber: 18,
            },
            {
                id: 146,
                name: "Jadon Sancho",
                position: "Left Winger",
                shirtNumber: 25,
            },
            {
                id: 44,
                name: "Cristiano Ronaldo",
                position: "Centre-Forward",
                shirtNumber: 7,
            },
            {
                id: 3331,
                name: "Marcus Rashford",
                position: "Left Winger",
                shirtNumber: 10,
            },
        ],
        bench: [
            {
                id: 5457,
                name: "Dean Henderson",
                position: "Goalkeeper",
                shirtNumber: 26,
            },
            {
                id: 3492,
                name: "Victor Nilsson-Lindelöf",
                position: "Centre-Back",
                shirtNumber: 2,
            },
            {
                id: 7897,
                name: "Phil Jones",
                position: "Centre-Back",
                shirtNumber: 4,
            },
            {
                id: 15904,
                name: "Alex Telles",
                position: "Left-Back",
                shirtNumber: 27,
            },
            {
                id: 8158,
                name: "Aaron Wan-Bissaka",
                position: "Right-Back",
                shirtNumber: 29,
            },
            {
                id: 3325,
                name: "Jesse Lingard",
                position: "Attacking Midfield",
                shirtNumber: 14,
            },
            {
                id: 7909,
                name: "Mata",
                position: "Attacking Midfield",
                shirtNumber: 8,
            },
            {
                id: 161521,
                name: "Anthony Elanga",
                position: null,
                shirtNumber: 36,
            },
            {
                id: 169325,
                name: "Hannibal Mejbri",
                position: null,
                shirtNumber: 46,
            },
        ],
        statistics: {
            corner_kicks: 1,
            free_kicks: 14,
            goal_kicks: 9,
            offsides: 7,
            fouls: 12,
            ball_possession: 51,
            saves: 1,
            throw_ins: 22,
            shots: 8,
            shots_on_goal: 7,
            shots_off_goal: 1,
            yellow_cards: 4,
            yellow_red_cards: 0,
            red_cards: 0,
        },
    },
    awayTeam: {
        id: 340,
        name: "Southampton FC",
        shortName: "Southampton",
        tla: "SOU",
        crest: "https://crests.football-data.org/340.png",
        coach: {
            id: 43924,
            name: "Ralph Hasenhüttl",
            nationality: "Austria",
        },
        leagueRank: null,
        formation: "4-4-2",
        lineup: [
            {
                id: 8079,
                name: "Fraser Forster",
                position: "Goalkeeper",
                shirtNumber: 44,
            },
            {
                id: 7995,
                name: "Kyle Walker-Peters",
                position: "Right-Back",
                shirtNumber: 2,
            },
            {
                id: 8086,
                name: "Jan Bednarek",
                position: "Centre-Back",
                shirtNumber: 35,
            },
            {
                id: 81039,
                name: "Mohammed Salisu",
                position: "Centre-Back",
                shirtNumber: 22,
            },
            {
                id: 8435,
                name: "Romain Perraud",
                position: "Left-Back",
                shirtNumber: 15,
            },
            {
                id: 15614,
                name: "Stuart Armstrong",
                position: "Central Midfield",
                shirtNumber: 17,
            },
            {
                id: 8088,
                name: "James Ward-Prowse",
                position: "Central Midfield",
                shirtNumber: 8,
            },
            {
                id: 8091,
                name: "Oriol Romeu",
                position: "Defensive Midfield",
                shirtNumber: 6,
            },
            {
                id: 16060,
                name: "Mohamed Elyounoussi",
                position: "Left Winger",
                shirtNumber: 24,
            },
            {
                id: 4119,
                name: "Che Adams",
                position: "Centre-Forward",
                shirtNumber: 10,
            },
            {
                id: 143054,
                name: "Armando Broja",
                position: "Centre-Forward",
                shirtNumber: 18,
            },
        ],
        bench: [
            {
                id: 3203,
                name: "Willy Caballero",
                position: "Goalkeeper",
                shirtNumber: 13,
            },
            {
                id: 8085,
                name: "Jack Stephens",
                position: "Centre-Back",
                shirtNumber: 5,
            },
            {
                id: 99799,
                name: "Yan Valery",
                position: "Right-Back",
                shirtNumber: 43,
            },
            {
                id: 9240,
                name: "Moussa Djénepo",
                position: "Left Winger",
                shirtNumber: 19,
            },
            {
                id: 137396,
                name: "William Smallbone",
                position: "Central Midfield",
                shirtNumber: 20,
            },
            {
                id: 8763,
                name: "Ibrahima Diallo",
                position: "Defensive Midfield",
                shirtNumber: 27,
            },
            {
                id: 8098,
                name: "Shane Long",
                position: "Centre-Forward",
                shirtNumber: 7,
            },
            {
                id: 4863,
                name: "Adam Armstrong",
                position: "Centre-Forward",
                shirtNumber: 9,
            },
            {
                id: 168712,
                name: "Valentino Livramento",
                position: "Right-Back",
                shirtNumber: 21,
            },
        ],
        statistics: {
            corner_kicks: 4,
            free_kicks: 19,
            goal_kicks: 8,
            offsides: 1,
            fouls: 13,
            ball_possession: 49,
            saves: 5,
            throw_ins: 20,
            shots: 12,
            shots_on_goal: 4,
            shots_off_goal: 8,
            yellow_cards: 0,
            yellow_red_cards: 0,
            red_cards: 0,
        },
    },
    score: {
        winner: "DRAW",
        duration: "REGULAR",
        fullTime: {
            home: 1,
            away: 1,
        },
        halfTime: {
            home: 1,
            away: 0,
        },
    },
    goals: [
        {
            minute: 21,
            injuryTime: null,
            type: "REGULAR",
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            scorer: {
                id: 146,
                name: "Jadon Sancho",
            },
            assist: {
                id: 3331,
                name: "Marcus Rashford",
            },
            score: {
                home: 1,
                away: 0,
            },
        },
        {
            minute: 48,
            injuryTime: null,
            type: "REGULAR",
            team: {
                id: 340,
                name: "Southampton FC",
            },
            scorer: {
                id: 4119,
                name: "Che Adams",
            },
            assist: {
                id: 16060,
                name: "Mohamed Elyounoussi",
            },
            score: {
                home: 1,
                away: 1,
            },
        },
    ],
    penalties: [],
    bookings: [
        {
            minute: 16,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            player: {
                id: 3331,
                name: "Marcus Rashford",
            },
            card: "YELLOW",
        },
        {
            minute: 31,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            player: {
                id: 7905,
                name: "Scott McTominay",
            },
            card: "YELLOW",
        },
        {
            minute: 85,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            player: {
                id: 3366,
                name: "Paul Pogba",
            },
            card: "YELLOW",
        },
        {
            minute: 90,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            player: {
                id: 3325,
                name: "Jesse Lingard",
            },
            card: "YELLOW",
        },
    ],
    substitutions: [
        {
            minute: 46,
            team: {
                id: 340,
                name: "Southampton FC",
            },
            playerOut: {
                id: 8086,
                name: "Jan Bednarek",
            },
            playerIn: {
                id: 8085,
                name: "Jack Stephens",
            },
        },
        {
            minute: 71,
            team: {
                id: 340,
                name: "Southampton FC",
            },
            playerOut: {
                id: 16060,
                name: "Mohamed Elyounoussi",
            },
            playerIn: {
                id: 168712,
                name: "Valentino Livramento",
            },
        },
        {
            minute: 76,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            playerOut: {
                id: 7905,
                name: "Scott McTominay",
            },
            playerIn: {
                id: 161521,
                name: "Anthony Elanga",
            },
        },
        {
            minute: 82,
            team: {
                id: 66,
                name: "Manchester United FC",
            },
            playerOut: {
                id: 3331,
                name: "Marcus Rashford",
            },
            playerIn: {
                id: 3325,
                name: "Jesse Lingard",
            },
        },
        {
            minute: 90,
            team: {
                id: 340,
                name: "Southampton FC",
            },
            playerOut: {
                id: 8091,
                name: "Oriol Romeu",
            },
            playerIn: {
                id: 8763,
                name: "Ibrahima Diallo",
            },
        },
    ],
    odds: {
        homeWin: 1.45,
        draw: 4.52,
        awayWin: 6.71,
    },
    referees: [
        {
            id: 11615,
            name: "Adam Nunn",
            type: "ASSISTANT_REFEREE_N1",
            nationality: "England",
        },
        {
            id: 73363,
            name: "Nick Hopton",
            type: "ASSISTANT_REFEREE_N2",
            nationality: null,
        },
        {
            id: 11556,
            name: "David Coote",
            type: "FOURTH_OFFICIAL",
            nationality: "England",
        },
        {
            id: 11494,
            name: "Stuart Attwell",
            type: "REFEREE",
            nationality: "England",
        },
        {
            id: 23568,
            name: "Jarred Gillett",
            type: "VIDEO_ASSISTANT_REFEREE_N1",
            nationality: "Australia",
        },
        {
            id: 11424,
            name: "Neil Davies",
            type: "VIDEO_ASSISTANT_REFEREE_N2",
            nationality: "England",
        },
    ],
};

const SelectedMatch = () => {
    const date = new Date(match.utcDate);
    const getDate = () => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    };
    return (
        <div className="text-white min-h-[60vh] w-full flex flex-col items-center mt-12">
            <div className="flex flex-col bg-white px-[40px] rounded-lg gap-2 items-center justify-center">
                <Image
                    className="max-w-[120px] max-h-[120px]"
                    src={match.competition.emblem}
                    alt={"team logo"}
                    width={120}
                    height={120}
                />
            </div>
            <div className="mt-5">
                <div className="ease-in-out duration-300 flex flex-row items-start justify-center px-6 py-6">
                    <div className="flex flex-col w-full  max-w-[100px] items-center justify-center">
                        <Image
                            className="max-w-[80px] max-h-[80px]"
                            src={match.homeTeam.crest}
                            alt={"team logo"}
                            width={80}
                            height={80}
                        />
                        <p className="text-[13px] text-center mt-2">
                            {match.homeTeam.name.length > 15
                                ? match.homeTeam.shortName
                                : match.homeTeam.name}
                        </p>
                    </div>
                    <div className="px-12 flex flex-col items-center mt-[20px] justify-center">
                        <div className="flex flex-row gap-4 items-center justify-center">
                            {match.score.fullTime.home !== null ? (
                                <p className="font-bold text-[32px]">
                                    {match.score.fullTime.home}
                                </p>
                            ) : (
                                <p className="font-bold text-[32px]">-</p>
                            )}
                            <p className="text-[32px]">:</p>
                            {match.score.fullTime.away !== null ? (
                                <p className="font-bold text-[32px]">
                                    {match.score.fullTime.away}
                                </p>
                            ) : (
                                <p className="font-bold text-[32px]">-</p>
                            )}
                        </div>
                        {match && (
                            <p className="text-[12px] flex items-center justify-center pb-3">
                                {getDate()}
                            </p>
                        )}
                        <p className=" text-center text-[12px]">
                            {match.venue}
                        </p>
                    </div>
                    <div className="flex flex-col  w-full max-w-[100px] items-center justify-center">
                        <Image
                            className="max-w-[80px] max-h-[80px]"
                            src={match.awayTeam.crest}
                            alt={"team logo"}
                            width={80}
                            height={80}
                        />
                        <p className="text-[13px] text-center mt-2">
                            {match.awayTeam.name.length > 15
                                ? match.awayTeam.shortName
                                : match.awayTeam.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center border-[1px] py-6 rounded-lg border-white justify-center">
                <p className="text-[18px] w-full font-semibold px-6 py-6">
                    Statistics
                </p>
                <div className="flex flex-col  gap-4">
                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.ball_possession}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width: match.homeTeam.statistics
                                            .ball_possession,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Possesion</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width: match.awayTeam.statistics
                                            .ball_possession,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.ball_possession}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.shots}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics.shots * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Shots</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics.shots * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.shots}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.shots_on_goal}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics
                                                .shots_on_goal * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Shots on target</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics
                                                .shots_on_goal * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.shots_on_goal}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.free_kicks}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics
                                                .free_kicks * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Free Kicks</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics
                                                .free_kicks * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.free_kicks}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.yellow_cards}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics
                                                .yellow_cards * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center">
                            <div className="w-2 h-3 bg-yellow-400"></div>
                            <p>Cards</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics
                                                .yellow_cards * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.yellow_cards}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.red_cards}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics
                                                .red_cards * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center justify-center">
                            <div className="w-2 h-3 bg-red-600"></div>
                            <p>Cards</p>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics
                                                .red_cards * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.red_cards}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.corner_kicks}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics
                                                .corner_kicks * 2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Corners</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics
                                                .corner_kicks * 2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.corner_kicks}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row w-full justify-between gap-4 px-6">
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <p className="min-w-[50px] text-right">
                                {match.homeTeam.statistics.offsides}
                            </p>
                            <div className="w-[100px] relative h-[15px] bg-[#040910] rounded-md">
                                <div
                                    style={{
                                        width:
                                            match.homeTeam.statistics.offsides *
                                            2,
                                        height: "100%",
                                    }}
                                    className="bg-red-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                        </div>
                        <div>Offsides</div>
                        <div className="flex flex-row gap-2 items-center justify-center">
                            <div className="w-[100px] relative h-[15px] rounded-md bg-[#040910]">
                                <div
                                    style={{
                                        width:
                                            match.awayTeam.statistics.offsides *
                                            2,
                                        height: "100%",
                                    }}
                                    className="bg-green-500 rounded-md absolute top-0 left-0"
                                />
                            </div>
                            <p className="min-w-[50px] text-left">
                                {match.awayTeam.statistics.offsides}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedMatch;
