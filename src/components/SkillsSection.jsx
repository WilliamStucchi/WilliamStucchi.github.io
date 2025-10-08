import { cn } from "@/lib/utils";
import { useState } from "react";

/* List of skills I have */
const skills = [
    // AI
    {name: "SKILL1", level: 95, category: "ai"},
    {name: "SKILL2", level: 80, category: "ai"},

    // Vision
    {name: "SKILL3", level: 70, category: "vision"},

    // Tools
    {name: "SKILL4", level: 90, category: "tools"},
    {name: "SKILL5", level: 70, category: "tools"},

    // Others

    {name: "SKILL6", level: 90, category: "others"},
    {name: "SKILL7", level: 70, category: "others"}
];

const categories = ["all", "ai", "vision", "tools", "others"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-4 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}
                        onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                       <div
                       key={key}
                       className="bg-card p-6 rounded-lg shadow-xs card-hover">

                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>

                            {/*TODO: change cards from BAR to STORY*/}
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow1.5s_ease-out]" 
                                style={{width: skill.level + "%"}}/>
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                       </div> 
                    ))};
                </div>
            </div>
        </section>
    );
}