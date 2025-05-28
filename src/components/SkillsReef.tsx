import { motion } from "framer-motion";
import "../styles/SkillsReef.scss";

const skills = [
    { name: "React & TypeScript", category: "Frontend" },
    { name: "HTML / SCSS", category: "Frontend" },
    { name: "JavaScript / DOM", category: "Frontend" },

    { name: "C# / .NET", category: "Backend" },
    { name: "ASP.NET / Blazor", category: "Backend" },
    { name: "REST APIs", category: "Backend" },

    { name: "SQL / EF Core", category: "Databases" },
    { name: "NoSQL / MongoDB", category: "Databases" },

    { name: "Git & GitHub", category: "Tools" },
    { name: "Azure", category: "Tools" },
    { name: "WordPress", category: "CMS" },
    { name: "Project management", category: "Other" },
    { name: "WCAG & Usability", category: "Other" },
    { name: "Search Engine Optimization (SEO)", category: "Other" },
    { name: "Web Performance", category: "Other" },
];

const SkillsReef = () => {
    return (
        <section className="skills-reef" id="skills">
            <h2>🪸 Mina färdigheter</h2>
            {["Frontend", "Backend", "Databases", "Tools", "CMS", "Other"].map((category) => (
                <div key={category} className="skill-category">
                    <h3>{category}</h3>
                    <div className="skills-list">
                        {skills
                            .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                                <motion.div

                                    key={skill.name}
                                    className="skill-bubble"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}

                                >
                                    <strong aria-label={`Skill: ${skill.name}`}>{skill.name}</strong>
                                </motion.div>
                            ))}
                    </div>
                </div>
            ))}

        </section>
    );
};

export default SkillsReef;
