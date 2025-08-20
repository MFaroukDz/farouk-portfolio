/*
 * JavaScript to populate the portfolio with data from data/profile.js.
 * The profile.js script defines a global `profileData` object containing
 * all of the information needed to build the page. This script reads
 * that object and inserts the data into the relevant DOM elements.
 */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof profileData === 'undefined') {
    console.error('profileData is not defined. Ensure that data/profile.js is loaded.');
    return;
  }

  // Basic helpers
  const qs = (selector) => document.querySelector(selector);
  const qsa = (selector) => Array.from(document.querySelectorAll(selector));

  // Populate hero section
  qs('#profileName').textContent = profileData.name;
  qs('#nameFooter').textContent = profileData.name;
  qs('#profileTagline').textContent = profileData.tagline;
  const photoEl = qs('#profilePhoto');
  if (profileData.photo) {
    photoEl.src = profileData.photo;
  } else {
    photoEl.remove();
  }

  // Populate social links
  const linksContainer = qs('#socialLinks');
  const linkMap = {
    email: { label: 'Email', icon: '✉️' },
    scholar: { label: 'Scholar', icon: '📖' },
    orcid: { label: 'ORCID', icon: '🧬' },
    github: { label: 'GitHub', icon: '🐱' },
    linkedin: { label: 'LinkedIn', icon: '💼' },
    cv: { label: 'CV', icon: '📄' }
  };
  Object.keys(profileData.links || {}).forEach((key) => {
    const url = profileData.links[key];
    if (!url) return;
    const a = document.createElement('a');
    a.href = url.startsWith('mailto') || url.startsWith('http') ? url : url;
    a.target = url.startsWith('http') ? '_blank' : '';
    a.rel = 'noopener';
    a.textContent = `${linkMap[key]?.icon || ''} ${linkMap[key]?.label || key}`;
    linksContainer.appendChild(a);
  });

  // Helper to build list items with optional date
  function buildList(containerId, items, formatter) {
    const container = qs(containerId);
    if (!items || !items.length) {
      container.closest('section').style.display = 'none';
      return;
    }
    items.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = formatter(item);
      container.appendChild(li);
    });
  }

  // Biography
  qs('#bio').textContent = profileData.bio;

  // Affiliations
  buildList('#affiliations', profileData.affiliations, (aff) => `${aff}`);

  // News
  buildList('#news', profileData.news, (n) => {
    return `<span class="date">${n.date}</span>${n.text}`;
  });

  // Publications
  buildList('#publications', profileData.publications, (pub) => {
    let str = '';
    if (pub.title) str += `<strong>${pub.title}</strong>`;
    if (pub.authors) str += `<br/><em>${pub.authors.join(', ')}</em>`;
    if (pub.venue || pub.year) {
      str += `<br/>${pub.venue || ''}${pub.venue && pub.year ? ', ' : ''}${pub.year || ''}`;
    }
    if (pub.doi) str += ` – <a href="https://doi.org/${pub.doi}" target="_blank" rel="noopener">DOI</a>`;
    return str;
  });

  // Projects
  buildList('#projects', profileData.projects, (proj) => {
    let str = `<strong>${proj.title}</strong>`;
    if (proj.description) str += `<br/>${proj.description}`;
    if (proj.link) str += ` – <a href="${proj.link}" target="_blank" rel="noopener">Learn more</a>`;
    return str;
  });

  // Awards
  buildList('#awards', profileData.awards, (award) => `${award}`);

  // Service
  buildList('#service', profileData.service, (svc) => `${svc}`);

  // Current year in footer
  qs('#currentYear').textContent = new Date().getFullYear();
});