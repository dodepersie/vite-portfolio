import { MyTechStack } from "./tech.techstack";

export const TechStack = () => {
  return (
    <section id="tech-stack">
      <div className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 p-auto md:p-4 transition-colors ease-in duration-50">
        <MyTechStack />
      </div>
    </section>
  );
};
