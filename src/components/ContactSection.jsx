import { cn } from "@/lib/utils";

import { Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";

import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        try {
            const formspreeId = import.meta.env.VITE_FORMSPREE_ID || process.env.REACT_APP_FORMSPREE_ID;

            if (!formspreeId) {
                setStatus("Formspree ID not configured. Check your .env.local file.");
                setLoading(false);
                return;
            }

            console.log("Formspree ID:", formspreeId); // Debug log

            const formData = new FormData(e.target);

            const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            console.log("Response status:", res.status); // Debug log
            const data = await res.json();
            console.log("Response data:", data); // Debug log

            if (res.ok) {
                setStatus("Message sent!");
                e.target.reset();
            } else {
                setStatus(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error("Full error:", error);
            setStatus(`Failed to send message: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30 scroll-mt-15">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have an open role in a company?
                    Have a project in mind or want to collaborate?
                    Feel free to reach out. I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Links
                        </h3>
                        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
                            <div className="flex items-start space-x-4">
                                <div>
                                    <a href={"mail" + "to:" + "stucchiw53" + "@" + "gmail" + "." + "com"} aria-label="Email"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        <Mail className="h-10 w-10 text-primary" />{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div>
                                    <a href="https://www.linkedin.com/in/williamstucchi" target="_blank"
                                        aria-label=""
                                        className="text-muLinkedInted-foreground hover:text-primary transition-colors">
                                        <Linkedin className="h-10 w-10 text-primary" />{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form
                            className="space-y-6"
                            onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Joseph Cooper"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="anakin@dooku.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full h-40 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about ... how I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2")
                                }>
                                {loading ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>

                        {status && (
                            <p className="text-center mt-4 text-primary font-medium">{status}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};