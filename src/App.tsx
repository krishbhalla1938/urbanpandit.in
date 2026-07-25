import { useEffect, useState } from 'react';
import { courses } from './data/courses';
import Home from './components/Home';
import CourseHub from './components/CourseHub';

export default function App() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('rfa-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#1c1b19' : '#f0eee6');
    localStorage.setItem('rfa-theme', theme);
  }, [theme]);

  const openCourse = openId ? courses.find((c) => c.id === openId) ?? null : null;

  return (
    <div className="app">
      {openCourse ? (
        <CourseHub course={openCourse} onExit={() => setOpenId(null)} />
      ) : (
        <Home
          courses={courses}
          onOpen={setOpenId}
          theme={theme}
          onToggleTheme={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        />
      )}
    </div>
  );
}
