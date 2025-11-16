import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

/* List of skills I have */
const skills = [
    // AI
    {name: "SKILL1", level: 5, category: "ai"},
    {name: "SKILL2", level: 4, category: "ai"},

    // Vision
    {name: "SKILL3", level: 2, category: "vision"},

    // Tools
    {name: "SKILL4", level: 5, category: "tools"},
    {name: "SKILL5", level: 3, category: "tools"},

    // Others

    {name: "SKILL6", level: 5, category: "others"},
    {name: "SKILL7", level: 2, category: "others"}
];


const proficiencyLevels = [
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
    "Master"
]

const categories = ["all", "ai", "vision", "tools", "others"];

export const SkillsSection = () => {
    const scrollRef = useRef(null);
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;

        const items = container.querySelectorAll('.carousel-item');
        let closestIndex = 0;
        let closestDistance = Infinity;

        items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.clientWidth / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setFocusedIndex(closestIndex);

        if (filteredSkills[closestIndex]) {
            const newCategory = filteredSkills[closestIndex].category;
            if (activeCategory !== 'all' && activeCategory !== newCategory) {
                setActiveCategory(newCategory);
            }
        }
    };

    const scrollToSkill = (index) => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const items = container.querySelectorAll('.carousel-item');
        const targetItem = items[index];

        if (targetItem) {
            const containerCenter = container.clientWidth / 2;
            const itemCenter = targetItem.offsetLeft + targetItem.clientWidth / 2;
            const scrollPosition = itemCenter - containerCenter;
            
            container.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setFocusedIndex(0);
        setTimeout(() => scrollToSkill(0), 100);
    };

    useEffect(() => {
        setTimeout(() => scrollToSkill(0), 100);
    }, [activeCategory]);

    return (
        <section id="skills" className="py-12 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
                </h2>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                    key={key}
                    className={cn(
                        "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}
                    onClick={() => handleCategoryChange(category)}
                    >
                    {category}
                    </button>
                ))}
                </div>

                {/* Horizontal scrolling carousel */}
                <div className="relative">
                <div 
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-8 px-[calc(50vw-175px)] py-8 snap-x snap-mandatory scrollbar-hide"
                    style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {filteredSkills.map((skill, index) => (
                    <div
                        key={index}
                        onClick={() => scrollToSkill(index)}
                        className={cn(
                        "carousel-item flex-shrink-0 snap-center transition-all duration-500 cursor-pointer",
                        focusedIndex === index 
                            ? 'w-[350px]' 
                            : 'w-[280px] opacity-60 scale-95'
                        )}
                    >
                        <div className="bg-card p-6 rounded-lg shadow-lg h-full">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                            {skill.name}
                            </h3>
                            <span className={cn(
                            "inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full capitalize",
                            "bg-primary/20 text-primary"
                            )}>
                            {skill.category}
                            </span>
                        </div>
                        
                        {/* Star rating display */}
                        <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={cn(
                                "w-6 h-6 transition-all duration-300",
                                star <= skill.level
                                    ? "fill-primary text-primary"
                                    : "fill-none text-secondary/50",
                                focusedIndex === index && star <= skill.level && "animate-[pulse_0.5s_ease-in-out]"
                                )}
                                style={{
                                animationDelay: `${star * 100}ms`
                                }}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            ))}
                        </div>
                        
                        <div className="text-left">
                            <span className="text-sm font-medium text-primary">
                            {proficiencyLevels[skill.level - 1]}
                            </span>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                
                {/* Navigation dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {filteredSkills.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSkill(index)}
                        className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        focusedIndex === index 
                            ? 'bg-primary w-8' 
                            : 'bg-foreground/20 hover:bg-foreground/40'
                        )}
                        aria-label={`Go to skill ${index + 1}`}
                    />
                    ))}
                </div>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .scrollbar-hide::-webkit-scrollbar {
                display: none;
                }
            `}} />
            </section>
    );
}