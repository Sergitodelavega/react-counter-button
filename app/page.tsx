"use client";

import { useState, useCallback } from "react";
import { ButtonSharedState } from "./components/button-shared-state";
import { ButtonIndependentState } from "./components/button-independent-state";
import MyInput from "./components/input";
import TaskManager from "./components/task-manager";
import CheckLogin from "./components/check-login";

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ title, description, children, className = "" }: SectionProps) => (
  <section className={`w-full max-w-md mx-auto mb-8 ${className}`}>
    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      {title}
    </h2>
    {description && (
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>
    )}
    {children}
  </section>
);

export default function Home() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <main 
      className="min-h-screen bg-zinc-50 font-sans p-8 dark:bg-black"
      role="main"
      aria-label="React Counter Button Demo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            React Counter Button
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A demonstration of React state management patterns
          </p>
        </header>

        {/* Buttons with Shared State */}
        <Section 
          title="Buttons with Shared State" 
          description="Both buttons share the same count state. Click either to update both."
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <ButtonSharedState count={count} onClick={handleClick} />
            <ButtonSharedState count={count} onClick={handleClick} />
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">
            Current count: <strong>{count}</strong>
          </p>
        </Section>

        {/* Buttons with Independent State */}
        <Section 
          title="Buttons with Independent State" 
          description="Each button maintains its own independent count state."
        >
          <div className="flex gap-4 justify-center flex-wrap">
            <ButtonIndependentState initialCount={0} />
            <ButtonIndependentState initialCount={0} />
          </div>
        </Section>

        {/* Input Component */}
        <Section 
          title="Input Component" 
          description="Demonstrates controlled input with real-time feedback."
        >
          <MyInput 
            placeholder="Type something..." 
            label="Your Text"
          />
        </Section>

        {/* Task Manager */}
        <Section 
          title="Task Manager" 
          description="Full CRUD functionality for managing tasks with completion tracking."
        >
          <TaskManager />
        </Section>

        {/* Check Login */}
        <Section 
          title="Login Status" 
          description="Interactive component demonstrating boolean state management."
        >
          <CheckLogin initialState={false} />
        </Section>

        {/* Footer */}
        <footer className="text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}

