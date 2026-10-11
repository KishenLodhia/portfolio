import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

// Unauthenticated public GitHub API. Tokens must never ship in client bundles.
const API = "https://api.github.com";

export type GitHubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  size: number;
  topics?: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
};

export const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Dart: "#00B4AB",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4F5D95",
  Kotlin: "#A97BFF",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  SCSS: "#c6538c",
  "Jupyter Notebook": "#DA5B0B",
  Swift: "#F05138",
  Shell: "#89e051",
};

export const colorFor = (language: string | null) => (language && languageColors[language]) || "#8b8b94";

// Responses are cached for the session so navigating back and forth stays within the 60 req/hour limit.
const cache = new Map<string, Promise<unknown>>();

const getJson = <T,>(path: string): Promise<T> => {
  if (!cache.has(path)) {
    const request = fetch(`${API}${path}`, { headers: { Accept: "application/vnd.github+json" } }).then(
      async (response) => {
        if (!response.ok) {
          cache.delete(path);
          throw new Error(
            response.status === 403 ? "GitHub's rate limit was reached. Try again in a few minutes." : "Could not load data from GitHub."
          );
        }
        return response.json();
      }
    );
    cache.set(path, request);
  }
  return cache.get(path) as Promise<T>;
};

export function useGitHub<T>(path: string) {
  // Results are tagged with the path they belong to, so a stale result reads as loading.
  const [result, setResult] = useState<{ path: string; data?: T; error?: string }>();

  useEffect(() => {
    let active = true;
    getJson<T>(path)
      .then((data) => active && setResult({ path, data }))
      .catch((error: Error) => active && setResult({ path, error: error.message }));
    return () => {
      active = false;
    };
  }, [path]);

  const current = result?.path === path ? result : undefined;
  return { data: current?.data, error: current?.error, loading: !current };
}

export const userPath = `/users/${profile.github}`;
export const reposPath = `/users/${profile.github}/repos?per_page=100&sort=pushed`;
export const repoPath = (name: string) => `/repos/${profile.github}/${name}`;
export const languagesPath = (name: string) => `/repos/${profile.github}/${name}/languages`;

export const timeAgo = (iso: string) => {
  const seconds = (Date.now() - new Date(iso).getTime()) / 1000;
  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
  ];
  const format = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  for (const [unit, size] of units) {
    if (seconds >= size) return format.format(-Math.floor(seconds / size), unit);
  }
  return "just now";
};
