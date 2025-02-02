"use client"
import { ListingsResult } from "./memoryDb";

export function testing() {
  localStorage.setItem("hello", "abc");
  return localStorage.getItem("hello");
}

export function listingData(): ListingsResult {
  return {
    result: {
      categories: [
        { key: "inProgress", index: 0, name: "In Progress", count: 2 },
        { key: "finished", index: 1, name: "Finished", count: 1 }
      ],
      listings: Object.values(JSON.parse(localStorage.getItem("tasks") ?? "[]"))
    }
  }
}

let nextId = 0;

export function createListing(info: string, user: string) {
  const id = nextId;
  const listings = JSON.parse(localStorage.getItem("tasks") ?? "[]");
  listings[id] = { id, user, info, categoryIndex: 0 }
  localStorage.setItem("tasks", JSON.stringify(listings));
  nextId += 1;
}

export function addPin(id: number) {
  const listings = JSON.parse(localStorage.getItem("tasks") ?? "[]");
  const entry = listings[id]
  if (!entry) return
  entry.pinned = true;
  localStorage.setItem("tasks", JSON.stringify(listings));
}

export function removePin(id: number) {
  const listings = JSON.parse(localStorage.getItem("tasks") ?? "[]");
  const entry = listings[id];
  if (!entry) return;
  entry.pinned = false;
  localStorage.setItem("tasks", JSON.stringify(listings));
}
