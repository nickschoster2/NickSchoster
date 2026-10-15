// ===== EDIT THIS FILE: every project on the site comes from this list =====
// type: "game" (Games page) or "interactive" (Interactive Design page)
// featured: true shows it on the home page
// tools: any of the keys in TOOL_ICONS below
// image: path like "images/my-game.png" (leave "" to show a colored placeholder)
const PROJECTS = [
  {
    id: "project-one", type: "game", featured: true,
    title: "Project One", image: "",
    summary: "A short one-sentence pitch for this game.",
    tools: ["unity", "csharp", "blender"],
    role: "Lead Designer & Programmer", team: "Team of 4", year: "2026", duration: "12 weeks",
    description: ["Write a paragraph about what the game is and what makes it fun.", "Write a second paragraph about your design decisions, challenges, and what you learned."],
    links: [{ label: "Play it", url: "#" }, { label: "Source code", url: "#" }],
    gallery: []
  },
  {
    id: "project-two", type: "game", featured: true,
    title: "Project Two", image: "",
    summary: "A short one-sentence pitch for this game.",
    tools: ["unrealengine", "cplusplus"],
    role: "Level Designer", team: "Solo", year: "2025", duration: "8 weeks",
    description: ["Describe the game here.", "Describe your process here."],
    links: [{ label: "Play it", url: "#" }], gallery: []
  },
  {
    id: "project-three", type: "game", featured: true,
    title: "Project Three", image: "",
    summary: "A short one-sentence pitch for this game.",
    tools: ["godot", "photoshop"],
    role: "Designer & Artist", team: "Team of 3", year: "2025", duration: "48-hour game jam",
    description: ["Describe the game here."], links: [], gallery: []
  },
  {
    id: "interactive-one", type: "interactive", featured: false,
    title: "Interactive Project One", image: "",
    summary: "An app, prototype, or installation you built.",
    tools: ["figma", "javascript"],
    role: "UX Designer", team: "Solo", year: "2026", duration: "6 weeks",
    description: ["Describe the project here."], links: [{ label: "View prototype", url: "#" }], gallery: []
  },
  {
    id: "interactive-two", type: "interactive", featured: false,
    title: "Interactive Project Two", image: "",
    summary: "Another non-game project.",
    tools: ["illustrator", "python"],
    role: "Designer", team: "Team of 2", year: "2024", duration: "4 weeks",
    description: ["Describe the project here."], links: [], gallery: []
  }
];

// Icons come from the free Devicon set. Add more at https://devicon.dev
const TOOL_ICONS = {
  unity: ["Unity", "unity/unity-original.svg"],
  unrealengine: ["Unreal Engine", "unrealengine/unrealengine-original.svg"],
  godot: ["Godot", "godot/godot-original.svg"],
  blender: ["Blender", "blender/blender-original.svg"],
  csharp: ["C#", "csharp/csharp-original.svg"],
  cplusplus: ["C++", "cplusplus/cplusplus-original.svg"],
  python: ["Python", "python/python-original.svg"],
  javascript: ["JavaScript", "javascript/javascript-original.svg"],
  figma: ["Figma", "figma/figma-original.svg"],
  photoshop: ["Photoshop", "photoshop/photoshop-original.svg"],
  illustrator: ["Illustrator", "illustrator/illustrator-original.svg"]
};
