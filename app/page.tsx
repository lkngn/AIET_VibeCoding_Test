"use client";

import { ChangeEvent, useMemo, useState } from "react";

const cuisines = ["Any cuisine", "Italian", "Mexican", "Thai", "Mediterranean"];
const timeOptions = ["Any time", "15 min", "30 min", "45 min"];

const recipes = [
  { title: "Creamy tomato rigatoni", cuisine: "Italian", time: "25 min", image: "🍝", tags: ["Comfort food", "One pot"] },
  { title: "Green goddess grain bowl", cuisine: "Mediterranean", time: "20 min", image: "🥗", tags: ["Fresh", "Vegetarian"] },
  { title: "Crispy chili egg rice", cuisine: "Thai", time: "15 min", image: "🍳", tags: ["Quick", "Pantry hero"] },
];

export default function Home() {
  const [cuisine, setCuisine] = useState("Any cuisine");
  const [time, setTime] = useState("Any time");
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [saved, setSaved] = useState<string[]>([]);

  const visibleRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCuisine = cuisine === "Any cuisine" || recipe.cuisine === cuisine;
      const maxMinutes = time === "Any time" ? Infinity : Number.parseInt(time, 10);
      const matchesTime = Number.parseInt(recipe.time, 10) <= maxMinutes;
      return matchesCuisine && matchesTime;
    });
  }, [cuisine, time]);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) setUploadedFile(file.name);
  }

  function toggleSaved(title: string) {
    setSaved((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title]);
  }

  return (
    <main className="app-shell">
      <nav className="topbar">
        <a className="brand" href="#top" aria-label="FridgeBite home">
          <span className="brand-mark">✦</span>
          <span>fridge<span>bite</span></span>
        </a>
        <div className="nav-links">
          <a className="active" href="#discover">Discover</a>
          <a href="#recipes">My recipes</a>
          <a href="#community">Community</a>
        </div>
        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">⌕</button>
          <button className="avatar" aria-label="Open profile">AL</button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="sparkle">✦</span> Your fridge, reimagined</p>
          <h1>Cook something<br /><em>unexpected.</em></h1>
          <p className="hero-description">Snap what&apos;s in your fridge and we&apos;ll turn it into a meal worth making.</p>
          <div className="hero-stats">
            <div><strong>12k+</strong><span>recipes created</span></div>
            <div><strong>4.9</strong><span>community rating</span></div>
          </div>
        </div>
        <div className="upload-card" id="discover">
          <div className="upload-orbit orbit-one" />
          <div className="upload-orbit orbit-two" />
          <div className="upload-icon">▧</div>
          <h2>What&apos;s in your fridge?</h2>
          <p>Upload a photo and let AI spot the ingredients for you.</p>
          <label className="upload-button">
            <input type="file" accept="image/*" onChange={handleFile} />
            {uploadedFile ? "Photo ready ✓" : "Upload fridge photo"}
          </label>
          <span className="upload-hint">or drag and drop · JPG, PNG up to 10MB</span>
          {uploadedFile && <span className="file-name">{uploadedFile}</span>}
          <button className="text-button">Try a sample fridge →</button>
        </div>
      </section>

      <section className="content-section" id="recipes">
        <div className="section-heading">
          <div><p className="eyebrow">Made for your mood</p><h2>Find your next favorite</h2></div>
          <a className="view-all" href="#all-recipes">View all recipes <span>↗</span></a>
        </div>
        <div className="filters" aria-label="Recipe filters">
          <span className="filter-label">I&apos;m craving</span>
          <select value={cuisine} onChange={(event) => setCuisine(event.target.value)} aria-label="Cuisine">
            {cuisines.map((option) => <option key={option}>{option}</option>)}
          </select>
          <select value={time} onChange={(event) => setTime(event.target.value)} aria-label="Cooking time">
            {timeOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
          <span className="filter-count">{visibleRecipes.length} ideas for you</span>
        </div>
        <div className="recipe-grid">
          {visibleRecipes.map((recipe) => (
            <article className="recipe-card" key={recipe.title}>
              <div className={`recipe-image image-${recipe.cuisine.toLowerCase()}`}><span>{recipe.image}</span><button className="save-button" onClick={() => toggleSaved(recipe.title)} aria-label={`Save ${recipe.title}`}>{saved.includes(recipe.title) ? "♥" : "♡"}</button></div>
              <div className="recipe-body"><div className="recipe-meta"><span>{recipe.cuisine}</span><span>·</span><span>{recipe.time}</span></div><h3>{recipe.title}</h3><div className="tag-row">{recipe.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
        {visibleRecipes.length === 0 && <div className="empty-state">Try widening your filters to see more recipes.</div>}
      </section>

      <section className="community-section" id="community">
        <div className="community-copy"><p className="eyebrow">From the community</p><h2>Good food tastes better together.</h2><p>Follow home cooks, discover hidden gems, and share the meals that made your day.</p><button className="dark-button">Explore the community <span>→</span></button></div>
        <div className="community-cards"><div className="community-photo photo-one"><span>🌶️</span><div><strong>Sunday market pasta</strong><small>by @maria.cooks</small></div></div><div className="community-photo photo-two"><span>🍜</span><div><strong>Best ramen in town</strong><small>by @noodlenotes</small></div></div></div>
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">✦</span><span>fridge<span>bite</span></span></a><p>Make more. Waste less. Eat well.</p><span className="footer-note">© 2026 FridgeBite</span></footer>
    </main>
  );
}
