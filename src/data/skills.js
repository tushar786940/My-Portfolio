import {
    Code,
    Layout,
    Server,
    Database,
    Brain,
    Wrench
} from "lucide-react"

export const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "Firebase", "REST APIs"]
    },
    {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "MySQL"]
    },
    {
        category: "AI / ML",
        icon: Brain,
        items: ["Python", "NumPy", "Pandas", "Scikit-learn"]
    },
    {
        category: "Tools",
        icon: Wrench,
        items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter"]
    }
]
