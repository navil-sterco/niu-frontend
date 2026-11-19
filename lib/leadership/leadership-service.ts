import { cache } from "react";
import {
  leadershipAssets,
  leadershipMembers,
  leadershipPageContent,
} from "@/data/leadership/leadership-data";
import type {
  LeadershipAssets,
  LeadershipMember,
  LeadershipPageContent,
} from "@/types/leadership-types";


export const getLeadershipMembers = cache(
  async (): Promise<LeadershipMember[]> =>
    [...leadershipMembers].sort((a, b) => a.id - b.id),
);

export const getLeadershipMember = cache(
  async (slug: string): Promise<LeadershipMember | null> => {
    const members = await getLeadershipMembers();
    return members.find((member) => member.slug === slug) ?? null;
  },
);

export async function getLeadershipSlugs(): Promise<string[]> {
  const members = await getLeadershipMembers();
  return members.map((member) => member.slug);
}

export async function getLeadershipPageContent(): Promise<LeadershipPageContent> {
  return leadershipPageContent;
}

export async function getLeadershipAssets(): Promise<LeadershipAssets> {
  return leadershipAssets;
}
