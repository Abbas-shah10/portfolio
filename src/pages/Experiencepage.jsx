import React from "react";
import Experience from "../components/exp.jsx";
import axamineLogo from "../assets/newaxamine.png";
import accreteLogo from "../assets/accrete.png";

const ExperiencePage = () => {
  const ProjectLinks = () => (
    <div className="flex gap-6 text-sm font-medium">
      <a
        href="https://github.com/AdarshKumarSr/Kalp.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 hover:underline"
      >
        View Project →
      </a>

      <a
        href="https://kalp-ai-1.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-text-main hover:underline"
      >
        Live →
      </a>
    </div>
  );

  return (
    <section
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          Professional Experience
        </h2>

        <Experience
          role="Full Stack Developer"
          timeline="Jan 2026 – Present · Onsite"
          description={
            <>
              {/* Currently undergoing structured internship training with a focus
              on backend development fundamentals and real-world engineering
              practices. */}
              <br />
              <br />
              <h1 className="text-4xl font-extrabold ">
                Actively learning and applying:
              </h1>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>MySQL</strong> — writing queries, joins, and schema
                  design
                </li>
                <li>
                  <strong>Database Design</strong> — normalization & relational
                  modeling
                </li>
                <li>
                  <strong>Node.js</strong> — backend basics and server-side
                  logic
                </li>
                <li>
                  <strong>Git & GitHub</strong> — version control and
                  collaboration workflows
                </li>
              </ul>
              <br />
              Focused on building a strong foundation in software engineering
              concepts while preparing for production-level development work.
            </>
          }
        />
      </div>
    </section>
  );
};

export default ExperiencePage;
