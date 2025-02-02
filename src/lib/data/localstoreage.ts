"use client"
import { ListingsResult } from "./memoryDb";

function getTasks() {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem("tasks") ?? "[]");
}

function setTasks(tasks) {
  if (typeof window === 'undefined') return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function listingData(): ListingsResult {
  return {
    result: {
      categories: [
        { key: "inProgress", index: 0, name: "In Progress", count: 2 },
        { key: "finished", index: 1, name: "Finished", count: 1 }
      ],
      listings: Object.values(getTasks())
    }
  }
}

let nextId = 0;

export function createListing(info: string, user: string) {
  const id = nextId;
  const listings = getTasks();
  listings[id] = { id, user, info, categoryIndex: 0 }
  setTasks(listings);
  nextId += 1;
}

export function addPin(id: number) {
  const listings = getTasks();
  const entry = listings[id]
  if (!entry) return
  entry.pinned = true;
  setTasks(listings);
}

export function removePin(id: number) {
  const listings = getTasks();
  const entry = listings[id];
  if (!entry) return;
  entry.pinned = false;
  setTasks(listings);
}
