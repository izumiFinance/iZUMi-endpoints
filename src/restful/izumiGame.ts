import axios from 'axios';
import { ENDPOINTS } from './apiEndpoints';
import { Response, RequestNormal, NormalResponseDataWrapper } from './apiUtils';

export enum GameEventsTypeEnum {
    UPCOMING = 0,
    LIVE = 1,
    ENDED = 2,
    STOP = 3,
    OTHER = 4,
}

export enum GameTypeEnum {
    WEEKLY = 0,
    DAILY = 1,
    TOKEN = 2,
}

export type GameEvents = {
    id: number;
    name: string;
    status: GameEventsTypeEnum;
    startTime: string;
    endTime: string;
    banner: string;
    leftTime: string;
    type: GameTypeEnum;
};

export type ResponseGameEvents = {
    data: GameEvents[];
};

export const getGameEvents = async (): Response<NormalResponseDataWrapper<ResponseGameEvents>> => {
    return axios.get(ENDPOINTS.game.events);
};

export type RequestGameJoin = {
    address: string;
    id: number;
};

export type ResponseGameJoin = {
    joined: boolean;
};

export const postGameJoin: RequestNormal<RequestGameJoin, ResponseGameJoin> = async (params) => {
    return axios.post(ENDPOINTS.game.join, { params });
};

export type RequestGameUser = {
    address: string;
    id: number;
};
export type ResponseGameUser = {
    data: GameUser;
};
export type GameUser = {
    score: string;
    reward: string;
    volume: string;
    activityIndex: string;
};

export const getGameUser: RequestNormal<RequestGameUser, ResponseGameUser> = async (params) => {
    return axios.get(ENDPOINTS.game.user, { params });
};

export type tabData = {
    rank: number;
    address: string;
    score: string;
    reward: string;
};

export type RequestGameWinner = {
    id: number;
};

export type GameWinner = {
    tabName: string;
    tabData: tabData[];
};

export type ResponseGameWinner = {
    data: GameWinner[];
};

export const getGameWinner: RequestNormal<RequestGameWinner, ResponseGameWinner> = async (params) => {
    return axios.get(ENDPOINTS.game.winner, { params });
};

export type GameRule = {
    title: string;
    detail: string;
};

export type RequestGameRules = {
    id: number;
};

export type ResponseGameRules = {
    winnerRules: GameRule[];
    gameRules: GameRule[];
    description: GameRule[];
};

export const getGameRules: RequestNormal<RequestGameRules, ResponseGameRules> = async (params) => {
    return axios.get(ENDPOINTS.game.rules, { params });
};

export type RequestGameId = {
    id: number;
};

export const getGameEventById: RequestNormal<RequestGameId, ResponseGameEvents> = async (params) => {
    return axios.get(ENDPOINTS.game.events, { params });
};
