import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id: 1, 
        title: "Project1",
        description: "Description of Project1",
        image: "/projects/project1.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
    {
        id: 2, 
        title: "Project2",
        description: "Description of Project2",
        image: "/projects/project2.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
    {
        id: 3, 
        title: "Project3",
        description: "Description of Project3",
        image: "/projects/project3.png",
        tags: ["tag1", "tag2", "tag3"],
        githubUrl: "#"
    },
];

export const ProjectsSection = () => {
    const scrollRef = useRef(null);
    const [focusedIndex, setFocusedIndex] = useState(0);

    const handleScroll = () => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;

        const items = container.querySelectorAll('.carousel-item');
        let closesIndex = 0;
        let closestDistance = Infinity;

        items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.clientWidth / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closesIndex = index;
            }
        });

        setFocusedIndex(closesIndex);
    };

    const scrollToProject = (index) => {
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
                behaviour: 'smooth'
            });
        }
    };

    useEffect(() => {
        // Center the first item on mount
        setTimeout(() => scrollToProject(0), 100);
    }, []);

    return (
        <div className="w-full py-12 bg-background">
        <div className="relative">
            <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 px-[calc(50vw-200px)] py-8 snap-x snap-mandatory scrollbar-hide"
            style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
            }}
            >
            {projects.map((project, index) => (
                <div
                key={project.id}
                onClick={() => scrollToProject(index)}
                className={`carousel-item flex-shrink-0 snap-center transition-all duration-500 cursor-pointer ${
                    focusedIndex === index 
                    ? 'w-[280px] sm:w-[340px] md:w-[400px]' 
                    : 'w-[240px] sm:w-[280px] md:w-[320px] opacity-60 scale-95'
                }`}
                >
                <div className="bg-card rounded-lg overflow-hidden shadow-lg h-full">
                    <div className="h-48 overflow-hidden">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    </div>
                    <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                        <span 
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/25 text-secondary-foreground"
                        >
                            {tag}
                        </span>
                        ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                        <a 
                            href={project.githubUrl}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={20} />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
                <button
                key={index}
                onClick={() => scrollToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    focusedIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-foreground/20 hover:bg-foreground/40'
                }`}
                aria-label={`Go to project ${index + 1}`}
                />
            ))}
            </div>
        </div>
        
        <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
            display: none;
            }
        `}</style>
        </div>
    );
}