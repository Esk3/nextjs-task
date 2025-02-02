"use server"

import { console } from "inspector";

export interface Result<T, E> {
  ok?: T | undefined,
  err?: E | undefined
};

const users: { [username: string]: { username: string } } = {};

export async function createUser(username: string): Promise<{ ok: boolean }> {
  if (users[username]) return { ok: false };
  users[username] = { username };
  return { ok: true };
}

export async function getUser(username: string): Promise<{ username: string } | undefined> {
  return users[username];
}

const sessions: { [token: string]: string } = {};

let nextSessionId = 1;

export async function loginUser(username: string): Promise<Result<string, string>> {
  const user = users[username];
  if (!user) return { err: "user not found" };
  nextSessionId += 1;
  const id = String(nextSessionId);
  sessions[id] = username;
  return { ok: id };
}

export async function getUserFromSessionToken(token: string): Promise<Result<{ username: string }, string>> {
  console.log(token, sessions, "here");
  const user = sessions[token];
  console.log(user, "u");
  if (!user) return { ok: undefined, err: "auth error" };
  return { ok: { username: user } };
}

export async function logoutUser(token: string) {
  sessions[token] = undefined!;
}

export interface DashData {
  result: DashResult;
}

export interface DashResult {
  categories: string[];
  pins: ListingEntry[],
  categoryData:
  {
    [key: string]: DashEntry;
  };
}

export interface DashEntry {
  count: number;
  data: {
    id: number,
    user: string;
    info: string;
  }[];
}

export async function dashboardData(): Promise<DashData> {
  return {
    result: {
      categories: ["notStarted", "inProgress", "finished"],
      pins: [{ id: 1, user: "theFirstUser", info: "Buy Milk", categoryIndex: 1, pinned: true }],
      categoryData: {
        notStarted: {
          count: 0,
          data: []
        },
        inProgress: {
          count: 2,
          data: [
            { id: 1, user: "UsertheNext", info: "Buy Milk" },
            { id: 3, user: "user2", info: "hello world" }
          ]
        },
        finished: {
          count: 1,
          data: [
            { id: 2, user: "finishedUser", info: "123abc" }
          ]
        }
      }
    }
  }
}

export interface ListingsResult {
  result: Listings;
}

export interface Listings {
  categories: Category[];
  listings: ListingEntry[];
}

export interface Category {
  key: string,
  index: number,
  name: string,
  count: number,
}

export interface ListingEntry {
  id: number,
  user: string,
  info: string,
  categoryIndex: number,
  pinned?: boolean,
}

