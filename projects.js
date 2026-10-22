// ===== EDIT THIS FILE: every project on the site comes from this list =====
// type: "game" (Games page) or "interactive" (Interactive Design page)
// featured: true shows it on the home page
// tools: any of the keys in TOOL_ICONS below
// image: path like "images/my-game.png" (leave "" to show a colored placeholder)
const PROJECTS = [
  {
    id: "lanternfall", type: "", featured: false,
    title: "Lanternfall", image: "images/lanternfall-cover.svg",
    summary: "A 2D puzzle-platformer where you carry the only light source through a collapsing cave.",
    tools: ["unity", "csharp", "blender", "photoshop"],
    role: "Lead Designer & Gameplay Programmer", team: "Team of 4", year: "2026", duration: "14 weeks (senior capstone)",
    description: [
      "Lanternfall is a 2D puzzle-platformer about a young cave guide who must carry the last lantern out of a mountain that is slowly caving in. The lantern is both your light and your main tool: you can throw it, set it down to reveal hidden platforms, or swing it to scare off cave creatures. Without it, the cave goes dark.",
      "## The idea",
      "I wanted to make a game where the main resource is not health or ammo, but attention. Light only reveals part of the level at a time, so players have to decide where to look and what to leave in the dark. Early prototypes were built in a weekend with gray boxes, and the lantern-throw mechanic was fun right away, so we built the rest of the game around it.",
      "## My role",
      "I was the lead designer and wrote the gameplay code for the lantern, the player controller and the checkpoint system. I designed all twelve levels on paper first, then built them in Unity. I also ran our weekly playtests and tracked the results in a shared spreadsheet.",
      "## Challenges and what I learned",
      "Our first playtests showed that players kept dying to the falling rocks without understanding why. We added a short rumble and dust effect before each collapse, and the number of unfair-feeling deaths dropped sharply. That taught me to always show the player what is about to happen before it hurts them.",
      "The throw arc was another problem. It felt floaty until I tuned gravity and added a short hang time at the top of the arc, which made it read as a deliberate throw. Small tuning changes like this had a bigger effect on game feel than any new feature.",
      "## What's next",
      "I'd like to add a co-op mode where a second player carries a second lantern, and rework the final level, which playtesters found too long. A post-mortem is available on request."
    ],
    links: [{ label: "Play on itch.io", url: "#" }, { label: "Source code", url: "#" }, { label: "Watch trailer", url: "#" }],
    gallery: ["images/lanternfall-1.svg", "images/lanternfall-2.svg"]
  },
  {
    id: "dodge-bloxz", type: "game", featured: true,
    title: "Dodge Blockz", image: "images/DBTitle.png",
    summary: "A virtual reality dodging and shooting simulation",
    tools: ["unity", "csharp"],
    role: "Level Designer", team: "4 Students", year: "2026", duration: "6 weeks",
    description: ["Dodge Bloxz is a Virtual reality dodging and shooting simulation inspired by games like Ballz and Beat Saber and the show Hole In The Wall. Standing on a small platform and armed with two blasters, the player must face incoming walls of blocks with varying strength levels. The player must either find a gap in the wall to fit through or create one by destroying the blocks in the wall with the blasters. As the game progresses, the blocks get stronger and faster and the player is forced to make split-second decisions of when to shoot and when to dodge.", "I wore many hats working on this project. I was the primary environment, game, and sound designer and I contributed to level design and minor development systems. My biggest challenge for this project is that I had to find a way to design a virtual environment that would fit the theme we had and not disorient the player with a VR headset on. I created a simple neon blue and red environment made of blocks to match the theming of the rest of our game. The environment also helped players get immersed in the experience."],
    links: [{ label: "Play it", url: "#" }], gallery: ["images/DB1.png"]
  },
  {
    id: "autumns-summit", type: "game", featured: true,
    title: "Autumn's Summit", image: "images/AutmnsSummitShot (1).png",
    summary: "A short one-sentence pitch for this game.",
    tools: ["unrealengine", "cplusplus"],
    role: "Designer & Artist", team: "Team of 3", year: "2025", duration: "48-hour game jam",
    description: ["Autumn’s Summit is a single-player narrative horror game about the physical and mental trials that come with big life changes. Set on the fictional Mt. Titan deep in the Appalachian ranges, you follow Autumn as she attempts to summit the mountain despite the horrors she finds in both the environment and herself. Autumn’s summit encompasses the first section to a larger narrative that was completed in the limited time given for the project."], links: [], gallery: []
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
