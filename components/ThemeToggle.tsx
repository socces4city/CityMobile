'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      className="glass rounded-full px-4 py-2 text-sm"
      onClick={() => setDark((prev) => !prev)}
      type="button"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
