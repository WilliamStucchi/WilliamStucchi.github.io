import { cn } from "@/lib/utils"
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative scroll-mt-15">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate AI Developer & Engineer</h3>

                        <p className="text-muted-foreground">
                            I am a <strong>CS & AI Engineer</strong> specializing in deploying intelligent systems for autonomous vehicles.
                            My expertise lies in architecting <strong>end-to-end solutions</strong> that integrate detection, vehicle dynamics, and real-time sensor fusion,
                            with a proven track record of migrating complex models <strong>from ideas to production</strong>.
                            From modeling racing car dynamics to developing safety-critical software for agricultural vehicles,
                            I bridge the gap between high-level research and <strong>edge-computing reality</strong>.
                        </p>

                        <p className="text-muted-foreground">
                            I am driven by a passion for <strong>exploring emerging technologies</strong> and <strong>collaborating within cross-functional teams</strong>
                            to solve complex problems.
                            My goal is to transform cutting-edge AI research into meaningful, high-value products that <strong>improve safety and efficiency</strong> for society.
                            I believe the best innovation happens at the intersection of <strong>teamwork</strong> and <strong>technical curiosity</strong>,
                            creating tools that truly make life easier for the end user.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a
                                href="#contact"
                                className={cn("px-5 py-2 rounded-full border border-primary",
                                    "text-primary hover:bg-primary/10 transition-colors duration-300")}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> AI Development</h4>
                                    <p className="text-muted-foeground">
                                        I deploy real-time CNNs on embedded Linux and high-precision segmentation on NVIDIA platforms,
                                        optimizing complex models for autonomous edge-computing.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Team Work</h4>
                                    <p className="text-muted-foeground">
                                        I drive innovation through cross-functional collaboration,
                                        coordinating with teams across Italy, Germany and France to deliver complex,
                                        multi-company engineering projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Project Management</h4>
                                    <p className="text-muted-foeground">
                                        I lead the lifecycle of full-stack intelligent HMI system, transitioning from supervised
                                        software development to managing multiple software solutions implementations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
