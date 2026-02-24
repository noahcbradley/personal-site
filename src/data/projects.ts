import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "Highwood Emissions Fullstack",
    description:
      "A full-stack emissions monitoring and reporting application for Highwood, deployed on Railway.",
    techTags: ["TypeScript", "Node.js", "Express.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/noahcbradley/highwood_emissions_fullstack",
    liveUrl: "https://protective-dedication-production.up.railway.app/",
  },
  {
    id: "2",
    name: "Fantasy Hockey",
    description:
      "A web scraper application that connects with ESPN's fantasy hockey league to cross-reference and identify the best available players.",
    techTags: ["Python", "Web Scraping", "ESPN API"],
    githubUrl: "https://github.com/noahcbradley/fantasy_hockey",
  },
  {
    id: "3",
    name: "TuneIn — Spotify App",
    description:
      "A social media platform that leverages the Spotify API to allow users to post daily about their favourite music and share discoveries with friends.",
    techTags: ["Spotify API", "JavaScript", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/noahcbradley/TuneIn-SpotifyApp",
  },
  {
    id: "4",
    name: "WestJet Route Map",
    description:
      "Engineering capstone project built with the WestJet development team. An interactive route finder that optimizes travel plans for flight path, connections, and price, displaying location metadata via WestJet's API.",
    techTags: ["Capstone", "API Integration", "Route Optimization"],
    githubUrl: "https://github.com/noahcbradley/WestJet-RouteMap",
  },
];
