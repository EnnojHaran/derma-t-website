import React, { useState } from 'react';

const facts = [
  { title: 'Skin Renewal', fact: 'Your skin completely renews itself every 28-30 days. That\'s approximately 30,000-40,000 dead skin cells shed per minute!' },
  { title: 'Largest Organ', fact: 'Your skin is your body\'s largest organ! It covers about 22 square feet in adults and accounts for about 15% of total body weight.' },
  { title: 'Acne Facts', fact: 'Acne affects up to 50 million Americans annually. It\'s not caused by chocolate or dirt, but by bacteria, oil, and clogged pores.' },
  { title: 'Sunscreen Power', fact: 'SPF 30 blocks 97% of UVB rays, SPF 50 blocks 98%, and SPF 100 blocks 99%. Regular reapplication every 2 hours is key.' },
  { title: 'Eczema Reality', fact: 'Over 31 million Americans have some form of eczema. It\'s not contagious and can be managed with proper skincare and medication.' },
  { title: 'Psoriasis Stats', fact: 'Psoriasis affects 2-3% of the global population. It\'s an autoimmune condition, not contagious, and can be effectively managed.' },
  { title: 'Skin Benefits', fact: 'Regular skincare routines improve skin health dramatically. Just 4 weeks of consistent care can show visible improvements!' },
  { title: 'Age Factor', fact: 'Skin concerns change with age. Teens often struggle with acne, adults with sensitivity and aging signs. Skincare should adapt with you.' },
  { title: 'Diversity Matters', fact: 'Skin health needs differ across skin tones. Dark skin often needs different care approaches. Inclusive dermatology is essential!' },
];

function Facts() {
  const [flipped, setFlipped] = useState({});

  const toggle = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }));

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Fun Skin Health Facts</h1>
          <p>Click each card to learn something new!</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="facts-grid">
            {facts.map((item, i) => (
              <div
                key={i}
                className={`fact-card${flipped[i] ? ' flipped' : ''}`}
                onClick={() => toggle(i)}
              >
                {flipped[i] ? (
                  <div className="fact-back">
                    <p>{item.fact}</p>
                  </div>
                ) : (
                  <div className="fact-front">
                    <h3>{item.title}</h3>
                    <p>Click to reveal</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Facts;
