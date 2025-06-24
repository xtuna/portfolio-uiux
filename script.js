// --- Initial Project Data (used if no data in localStorage) ---
const defaultProjects = [{
    id: 1,
    title: "Sakay.ph Mobile App Redesign",
    image: "Sakay.ph Redesign - Mobile App",
    description: "Redesigned Metro Manila's public transport app to improve user experience for daily commuters. Enhanced route visualization, real-time updates, and accessibility features.",
    tags: ["Mobile App", "User Research", "Prototyping", "UI Design"],
    active: true,
    // Add case study specific data here for each project
    figmaUrl: "https://example.com/sakay-live",
    caseStudy: {
        subtitle: "Reimagining public transport navigation for Metro Manila commuters",
        role: "UX/UI Designer",
        timeline: "4 Weeks",
        team: "Solo Project",
        tools: "Figma, Miro",
        contentHTML: `
            <section class="section fade-in">
                <h2 class="section-title">Project Overview</h2>
                <p class="text-content">
                    Sakay.ph is Metro Manila's primary public transport navigation app, helping millions of Filipinos plan their daily commutes. However, the current app suffers from outdated design patterns, poor information architecture, and limited real-time functionality that frustrate users during their already stressful commutes.
                </p>

                <div class="problem-box">
                    <h3>The Problem</h3>
                    <p>Daily commuters in Metro Manila struggle with unreliable public transport information, leading to longer travel times, increased stress, and poor commuting experiences. The current Sakay.ph app, while functional, has significant usability issues that prevent it from truly serving its users' needs.</p>
                </div>

                <div class="solution-box">
                    <h3>The Solution</h3>
                    <p>A complete redesign focusing on intuitive navigation, real-time updates, and personalized features that make public transport planning faster, more reliable, and less stressful for Filipino commuters.</p>
                </div>

                <div class="image-placeholder large-image">
                    Before & After Comparison - Hero Screens
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Research & Discovery</h2>

                <h3 class="section-subtitle">User Research</h3>
                <p class="text-content">
                    I conducted interviews with 15 regular Metro Manila commuters to understand their pain points, behaviors, and needs when planning public transport journeys.
                </p>

                <div class="insights-grid">
                    <div class="insight-card">
                        <div class="insight-number">73%</div>
                        <div class="insight-text">of users check multiple apps before deciding on a route</div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-number">85%</div>
                        <div class="insight-text">prioritize real-time updates over route variety</div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-number">92%</div>
                        <div class="insight-text">use mobile phones as primary transport planning tool</div>
                    </div>
                </div>

                <h3 class="section-subtitle">Key User Pain Points</h3>
                <div class="two-column">
                    <div>
                        <h4><strong>Information Overload</strong></h4>
                        <p>Users feel overwhelmed by dense text and unclear route comparisons, making quick decisions difficult during rush hours.</p>

                        <h4><strong>Lack of Real-time Data</strong></h4>
                        <p>Static schedule information doesn't reflect actual transport conditions, leading to unexpected delays and frustration.</p>
                    </div>
                    <div>
                        <h4><strong>Poor Visual Hierarchy</strong></h4>
                        <p>Important information like travel time and cost isn't prominently displayed, requiring users to scan through text.</p>

                        <h4><strong>No Personalization</strong></h4>
                        <p>Users can't save favorite routes or customize the app based on their regular commuting patterns.</p>
                    </div>
                </div>

                <div class="image-placeholder medium-image">
                    User Research Insights & Quotes
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">User Personas</h2>
                <p class="text-content">
                    Based on my research, I identified two primary user personas that represent the majority of Sakay.ph users.
                </p>

                <div class="two-column">
                    <div class="insight-card">
                        <h3>Maria, 28 - Office Worker</h3>
                        <p><strong>Goal:</strong> Quick, reliable route planning for daily work commute</p>
                        <p><strong>Frustrations:</strong> Unpredictable delays, crowded transport, wasted time waiting</p>
                        <p><strong>Needs:</strong> Real-time updates, alternative routes, cost comparison</p>
                    </div>
                    <div class="insight-card">
                        <h3>Carlos, 22 - Student</h3>
                        <p><strong>Goal:</strong> Budget-friendly routes to various destinations</p>
                        <p><strong>Frustrations:</strong> Complex multi-modal trips, unclear transfers, high costs</p>
                        <p><strong>Needs:</strong> Cheapest options, step-by-step directions, offline access</p>
                    </div>
                </div>

                <div class="image-placeholder medium-image">
                    Detailed User Persona Cards
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Design Process</h2>

                <h3 class="section-subtitle">Information Architecture</h3>
                <p class="text-content">
                    I restructured the app's information architecture to prioritize the most important user tasks and reduce cognitive load.
                </p>

                <div class="image-placeholder medium-image">
                    Current vs Proposed Information Architecture
                </div>

                <h3 class="section-subtitle">User Journey Mapping</h3>
                <p class="text-content">
                    I mapped out the complete user journey from route planning to arrival, identifying key touchpoints and opportunities for improvement.
                </p>

                <div class="journey-steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-title">Search</div>
                        <div class="step-description">Enter destination quickly with smart suggestions</div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-title">Compare</div>
                        <div class="step-description">View route options with clear time and cost comparison</div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-title">Navigate</div>
                        <div class="step-description">Follow step-by-step directions with real-time updates</div>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <div class="step-description">Save favorites and provide feedback</div>
                        <div class="step-title">Complete</div>
                    </div>
                </div>

                <div class="image-placeholder large-image">
                    Complete User Journey Map with Touchpoints
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Design Solutions</h2>

                <h3 class="section-subtitle">1. Streamlined Home Screen</h3>
                <p class="text-content">
                    Redesigned the home screen with a prominent search interface, recent routes, and quick access to favorite destinations.
                </p>

                <div class="image-placeholder large-image">
                    Home Screen: Before vs After Comparison
                </div>

                <h3 class="section-subtitle">2. Card-Based Route Results</h3>
                <p class="text-content">
                    Implemented a card-based layout that makes route comparison intuitive, with clear visual hierarchy for time, cost, and transport modes.
                </p>

                <div class="two-column">
                    <div>
                        <h4><strong>Clear Visual Hierarchy</strong></h4>
                        <p>Travel time and cost are prominently displayed at the top of each route card, making comparison instant.</p>

                        <h4><strong>Transport Mode Icons</strong></h4>
                        <p>Custom Filipino transport icons (jeepney, bus, MRT/LRT) provide immediate visual recognition.</p>
                    </div>
                    <div>
                        <h4><strong>Real-time Status</strong></h4>
                        <p>Color-coded status indicators show real-time delays, disruptions, or normal operations.</p>
                    </div>
                    <div>
                        <h4><strong>Step-by-step Preview</strong></h4>
                        <p>Expandable route details show walking directions, transfer points, and waiting times.</p>
                    </div>
                </div>

                <div class="image-placeholder large-image">
                    Route Results Screen: Card Layout Design
                </div>

                <h3 class="section-subtitle">3. Enhanced Map Interface</h3>
                <p class="text-content">
                    Improved the map with better route visualization, interactive stops, and real-time vehicle tracking where available.
                </p>

                <div class="image-placeholder large-image">
                    Interactive Map Interface with Route Visualization
                </div>

                <h3 class="section-subtitle">4. Personalization Features</h3>
                <p class="text-content">
                    Added favorites, recent searches, and customizable preferences to reduce friction for repeat users.
                </p>

                <div class="image-placeholder medium-image">
                    Favorites & Personalization Screens
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Prototyping & Testing</h2>

                <h3 class="section-subtitle">Interactive Prototype</h3>
                <p class="text-content">
                    I created a high-fidelity interactive prototype to test the core user flows and validate design decisions with real users.
                </p>

                <div class="image-placeholder large-image">
                    Interactive Prototype Screens & Flows
                </div>

                <h3 class="section-subtitle">Usability Testing Results</h3>
                <p class="text-content">
                    Conducted usability tests with 8 participants using both the original app and my redesign to measure improvement in key metrics.
                </p>

                <div class="insights-grid">
                    <div class="insight-card">
                        <div class="insight-number">65%</div>
                        <div class="insight-text">faster route selection time</div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-number">40%</div>
                        <div class="insight-text">reduction in user errors</div>
                    </div>
                    <div class="insight-card">
                        <div class="insight-number">89%</div>
                        <div class="insight-text">preferred the new design</div>
                    </div>
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Results & Impact</h2>

                <div class="results-grid">
                    <div class="result-card">
                        <div class="result-metric">4.8/5</div>
                        <div class="result-description">Average usability score</div>
                    </div>
                    <div class="result-card">
                        <div class="result-metric">-2min</div>
                        <div class="result-description">Average route planning time</div>
                    </div>
                    <div class="result-card">
                        <div class="result-metric">95%</div>
                        <div class="result-description">Task completion rate</div>
                    </div>
                </div>

                <h3 class="section-subtitle">Key Improvements</h3>
                <div class="two-column">
                    <div>
                        <h4><strong>User Experience</strong></h4>
                        <p>Significantly reduced cognitive load and improved task completion rates through better information architecture and visual design.</p>

                        <h4><strong>Accessibility</strong></h4>
                        <p>Improved contrast ratios, larger touch targets, and clearer iconography make the app more accessible to diverse users.</p>
                    </div>
                    <div>
                        <h4><strong>Business Value</strong></h4>
                        <p>Enhanced user satisfaction could lead to increased daily active users and reduced support requests.</p>

                        <h4><strong>Technical Feasibility</strong></h4>
                        <p>Design solutions work within existing technical constraints while preparing for future real-time data integration.</p>
                    </div>
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Key Learnings & Next Steps</h2>

                <h3 class="section-subtitle">What I Learned</h3>
                <p class="text-content">
                    This project reinforced the importance of understanding local context and cultural nuances in design. Filipino commuters have unique needs and behaviors that differ from users in other countries, and designing for accessibility and limited connectivity is crucial.
                </p>

                <h3 class="section-subtitle">Next Steps</h3>
                <div class="text-content">
                    <p><strong>Phase 2 Features:</strong></p>
                    <ul style="margin-left: 2rem; margin-top: 1rem;">
                        <li>Integration with real-time vehicle tracking systems</li>
                        <li>Community-driven updates and route conditions</li>
                        <li>Offline route caching for areas with poor connectivity</li>
                        <li>Integration with mobile payment systems (GCash, PayMaya)</li>
                        <li>Multi-language support (Filipino, regional languages)</li>
                    </ul>
                </div>

                <div class="image-placeholder medium-image">
                    Future Features Roadmap
                </div>
            </section>
        `
    }
}, {
    id: 2,
    title: "Filipino Restaurant Chain Website",
    image: "Local Restaurant Website",
    description: "Responsive website design for a local restaurant chain, featuring online ordering, store locator, and cultural menu storytelling optimized for mobile-first users.",
    tags: ["Web Design", "Responsive", "E-commerce", "Branding"],
    active: true,
    figmaUrl: "https://example.com/sakay-live",
    caseStudy: {
        subtitle: "Bringing authentic Filipino flavors online with a modern web experience",
        role: "UX/UI Designer",
        timeline: "6 Weeks",
        team: "Solo Project",
        tools: "Figma, Adobe XD",
        contentHTML: `
            <section class="section fade-in">
                <h2 class="section-title">Project Overview</h2>
                <p class="text-content">
                    Designed a responsive website for a popular Filipino restaurant chain aiming to expand its online presence and streamline the ordering process. The goal was to create an intuitive and visually appealing platform that reflects the brand's identity and caters to both dine-in and online customers.
                </p>
                <div class="solution-box">
                    <h3>The Solution</h3>
                    <p>A user-centric website with an emphasis on easy navigation, high-quality visuals of food, integrated online ordering, and a prominent store locator. The design prioritizes mobile accessibility to cater to the majority of Filipino internet users.</p>
                </div>
                <div class="image-placeholder large-image">
                    Restaurant Website Mockup - Homepage
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Design Highlights</h2>
                <h3 class="section-subtitle">1. Intuitive Menu & Ordering</h3>
                <p class="text-content">
                    Created a clear menu structure with large, appetizing food photos and a seamless ordering flow, allowing users to customize orders and checkout efficiently.
                </p>
                <div class="image-placeholder large-image">
                    Online Menu and Order Flow Screens
                </div>
                <h3 class="section-subtitle">2. Store Locator & Reservations</h3>
                <p class="text-content">
                    Integrated an easy-to-use store locator with map view and direct links for directions. Added a simple reservation system for dine-in customers.
                </p>
                <div class="image-placeholder medium-image">
                    Store Locator and Reservation Interface
                </div>
            </section>
        `
    }
}, {
    id: 3,
    title: "Community Health Dashboard",
    image: "Barangay Health Dashboard",
    description: "Data visualization dashboard for barangay health workers to track vaccination rates, disease outbreaks, and maternal health metrics in their communities.",
    tags: ["Dashboard", "Data Viz", "Social Impact", "Admin Tools"],
    active: true,
    figmaUrl: "https://example.com/sakay-live",
    caseStudy: {
        subtitle: "Empowering local health workers with actionable data insights",
        role: "UX/UI Designer",
        timeline: "5 Weeks",
        team: "Solo Project",
        tools: "Figma, Tableau (concept)",
        contentHTML: `
            <section class="section fade-in">
                <h2 class="section-title">Project Overview</h2>
                <p class="text-content">
                    Developed a data visualization dashboard aimed at assisting barangay (local village) health workers in Metro Manila. The dashboard provides a centralized, easy-to-understand view of key health metrics, enabling better decision-making and resource allocation at the community level.
                </p>
                <div class="problem-box">
                    <h3>The Problem</h3>
                    <p>Barangay health workers often rely on manual data collection and fragmented reports, making it difficult to get a real-time, comprehensive understanding of community health trends and needs.</p>
                </div>
                <div class="solution-box">
                    <h3>The Solution</h3>
                    <p>An intuitive and visually rich dashboard that presents critical health data (vaccination rates, disease incidence, maternal health) in an accessible format, allowing health workers to quickly identify areas needing intervention.</p>
                </div>
                <div class="image-placeholder large-image">
                    Dashboard Overview - Key Metrics
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Features & Design</h2>
                <h3 class="section-subtitle">1. Interactive Data Visualizations</h3>
                <p class="text-content">
                    Implemented interactive charts and graphs for vaccination coverage, disease trends, and demographic breakdowns, allowing health workers to drill down into specific data points.
                </p>
                <div class="image-placeholder large-image">
                    Vaccination Rate Chart and Map Integration
                </div>
                <h3 class="section-subtitle">2. Alert System</h3>
                <p class="text-content">
                    Designed an alert system to notify health workers of potential disease outbreaks or significant changes in health metrics, enabling proactive responses.
                </p>
                <div class="image-placeholder medium-image">
                    Alerts and Notifications Interface
                </div>
            </section>
        `
    }
}, {
    id: 4,
    title: "Disaster Preparedness App",
    image: "Disaster Preparedness App",
    description: "Mobile app helping Filipino families prepare for natural disasters with early warnings, evacuation routes, and emergency contacts. Features offline functionality for affected areas.",
    tags: ["Social Impact", "Mobile App", "Emergency", "Offline Design"],
    active: true,
    figmaUrl: "https://example.com/sakay-live",
    caseStudy: {
        subtitle: "A lifeline for Filipino families in times of natural calamities",
        role: "UX/UI Designer",
        timeline: "7 Weeks",
        team: "Solo Project",
        tools: "Figma, Balsamiq",
        contentHTML: `
            <section class="section fade-in">
                <h2 class="section-title">Project Overview</h2>
                <p class="text-content">
                    Given the Philippines' vulnerability to natural disasters, this mobile application aims to provide critical information and tools to help families prepare, respond, and recover. A key feature is its robust offline functionality, crucial during power outages and network disruptions.
                </p>
                <div class="problem-box">
                    <h3>The Problem</h3>
                    <p>During natural disasters, reliable communication and access to information are often compromised, leaving families vulnerable and unprepared. Existing solutions lack offline capabilities and localized, actionable advice.</p>
                </div>
                <div class="solution-box">
                    <h3>The Solution</h3>
                    <p>A user-friendly mobile app offering real-time disaster alerts, clear evacuation routes, emergency contact management, and essential preparedness checklists, all designed to function effectively even without internet connectivity.</p>
                </div>
                <div class="image-placeholder large-image">
                    Disaster Preparedness App - Main Screens
                </div>
            </section>

            <section class="section fade-in">
                <h2 class="section-title">Key Features</h2>
                <h3 class="section-subtitle">1. Offline Emergency Information</h3>
                <p class="text-content">
                    All critical information, including emergency contacts, local shelters, and first aid guides, is stored locally and accessible without an internet connection.
                </p>
                <div class="image-placeholder medium-image">
                    Offline Content View
                </div>
                <h3 class="section-subtitle">2. Dynamic Evacuation Maps</h3>
                <p class="text-content">
                    Maps with pre-downloadable areas and real-time (when online) or cached (when offline) evacuation routes to designated shelters.
                </p>
                <div class="image-placeholder large-image">
                    Evacuation Map Interface
                </div>
                <h3 class="section-subtitle">3. Family Connect</h3>
                <p class="text-content">
                    A feature allowing users to pre-designate family members and share their location status with each other even with limited SMS/cellular signals.
                </p>
                <div class="image-placeholder small-image">
                    Family Connect Status Screen
                </div>
            </section>
        `
    }
}];

let projects = []; // This will hold the current state of projects
let currentEditingId = null;
let currentTags = [];
let currentCaseStudyId = null; // Tracks which project's case study is open

// --- Local Storage Functions ---

function saveProjects() {
    try {
        localStorage.setItem('portfolioProjects', JSON.stringify(projects));
    } catch (e) {
        console.error("Error saving to localStorage:", e);
        alert("Your browser does not support local storage or it's full. Project changes might not be saved.");
    }
}

function loadProjectsFromLocalStorage() {
    try {
        const storedProjects = localStorage.getItem('portfolioProjects');
        if (storedProjects) {
            projects = JSON.parse(storedProjects);
        } else {
            projects = [...defaultProjects]; // Use default if nothing in storage
        }
    } catch (e) {
        console.error("Error loading from localStorage:", e);
        // Fallback to default projects if there's an issue loading
        projects = [...defaultProjects];
    }
}

// --- Core Project Management Functions (for manager.html) ---

function loadManagerProjects() {
    const container = document.getElementById('projectsContainer');
    if (container) {
        container.innerHTML = '';

        projects.forEach(project => {
            const projectElement = createManagerProjectElement(project);
            container.appendChild(projectElement);
        });

        updateStats();
    }
}

function createManagerProjectElement(project) {
    const div = document.createElement('div');
    div.className = `project-item ${project.active ? 'active' : 'inactive'}`;
    div.innerHTML = `
        <div class="project-header">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>Image: ${project.image}</p>
            </div>
            <div class="project-controls">
                <span class="status-indicator ${project.active ? 'status-active' : 'status-inactive'}">
                    ${project.active ? 'Active' : 'Hidden'}
                </span>
                <button class="btn ${project.active ? 'btn-danger' : 'btn-success'}"
                        onclick="toggleProject(${project.id})">
                    ${project.active ? 'Hide' : 'Show'}
                </button>
                <button class="btn btn-secondary" onclick="editProject(${project.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProject(${project.id})">Delete</button>
            </div>
        </div>
        <div class="project-details">
            <div class="project-description">
                ${project.description}
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    return div;
}

function updateStats() {
    const totalProjectsEl = document.getElementById('totalProjects');
    const activeProjectsEl = document.getElementById('activeProjects');
    const inactiveProjectsEl = document.getElementById('inactiveProjects');

    if (totalProjectsEl && activeProjectsEl && inactiveProjectsEl) {
        const total = projects.length;
        const active = projects.filter(p => p.active).length;
        const inactive = total - active;

        totalProjectsEl.textContent = total;
        activeProjectsEl.textContent = active;
        inactiveProjectsEl.textContent = inactive;
    }
}

function toggleProject(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
        project.active = !project.active;
        saveProjects();
        loadManagerProjects();
    }
}

function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        projects = projects.filter(p => p.id !== id);
        saveProjects();
        loadManagerProjects();
    }
}

function editProject(id) {
    const project = projects.find(p => p.id === id);
    if (project) {
        currentEditingId = id;
        currentTags = [...project.tags];

        document.getElementById('modalTitle').textContent = 'Edit Project';
        document.getElementById('projectTitle').value = project.title;
        document.getElementById('projectImage').value = project.image;
        document.getElementById('projectDescription').value = project.description;

        displayTags();
        document.getElementById('projectModal').style.display = 'block';
    }
}

function openAddModal() {
    currentEditingId = null;
    currentTags = [];

    document.getElementById('modalTitle').textContent = 'Add New Project';
    document.getElementById('projectForm').reset();
    displayTags();
    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function displayTags() {
    const tagsContainer = document.getElementById('projectTags');
    if (tagsContainer) {
        tagsContainer.innerHTML = currentTags.map(tag => `
            <div class="tag-input">
                ${tag}
                <button type="button" class="tag-remove" onclick="removeTag('${tag}')">&times;</button>
            </div>
        `).join('');
    }
}

function removeTag(tag) {
    currentTags = currentTags.filter(t => t !== tag);
    displayTags();
}

function addTag(tag) {
    tag = tag.trim();
    if (tag && !currentTags.includes(tag)) {
        currentTags.push(tag);
        displayTags();
    }
}

function exportProjects() {
    const dataStr = JSON.stringify(projects, null, 2);
    const dataBlob = new Blob([dataStr], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-projects.json';
    link.click();
}

// --- Event Listeners for Management UI (only attach if elements exist) ---
document.addEventListener('DOMContentLoaded', () => {
    const projectTagInput = document.getElementById('projectTagInput');
    if (projectTagInput) {
        projectTagInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addTag(this.value);
                this.value = '';
            }
        });
    }

    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const title = document.getElementById('projectTitle').value;
            const image = document.getElementById('projectImage').value;
            const description = document.getElementById('projectDescription').value;

            const projectData = {
                title,
                image,
                description,
                tags: currentTags,
                active: true,
                // For new projects, provide a default empty case study object
                caseStudy: {
                    subtitle: "",
                    role: "",
                    timeline: "",
                    team: "",
                    tools: "",
                    contentHTML: `<section class="section fade-in">
                                    <h2 class="section-title">Coming Soon!</h2>
                                    <p class="text-content">Detailed case study content for this project will be available soon.</p>
                                    <div class="image-placeholder medium-image">Placeholder</div>
                                </section>`
                },
                figmaUrl: "", // Add a default empty string for new projects
            };

            if (currentEditingId) {
                const project = projects.find(p => p.id === currentEditingId);
                // Preserve existing caseStudy, liveUrl, and githubUrl data if editing
                Object.assign(project, {
                    ...projectData,
                    caseStudy: project.caseStudy || projectData.caseStudy,
                    figmaUrl: project.figmaUrl || projectData.figmaUrl
                });
            } else {
                const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id), 0) + 1 : 1;
                projects.push({
                    id: newId,
                    ...projectData
                });
            }

            saveProjects();
            // loadManagerProjects(); // Only needed for manager.html
            closeModal();
        });
    }

    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});


// --- Public Portfolio Rendering (for index.html) ---

function renderPublicProjects() {
    const container = document.getElementById('projects-grid');
    if (container) {
        container.innerHTML = '';

        const activeProjects = projects.filter(p => p.active);

        activeProjects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.opacity = '0';
            projectCard.style.transform = 'translateY(30px)';
            projectCard.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

            projectCard.innerHTML = `
                <div class="project-image">
                    ${project.image}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">
                        ${project.description}
                    </p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('\n')}
                    </div>
                    <a href="#" class="project-link" data-project-id="${project.id}" onclick="openCaseStudyModal(event, ${project.id})">View Case Study →</a>
                    <div class="project-actions">
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="project-action-link">
                            <i class="fas fa-external-link-alt"></i> View Live
                        </a>` : ''}
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="project-action-link">
                            <i class="fab fa-github"></i> View on Github
                        </a>` : ''}
                    </div>
                </div>
            `;
            container.appendChild(projectCard);
        });

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });
    }
}

function openCaseStudyModal(event, id) {
    event.preventDefault();
    const modal = document.getElementById('caseStudyModal');
    const project = projects.find(p => p.id === id);

    if (project && project.caseStudy) {
        currentCaseStudyId = id;

        // Generate links inline
        let linksHTML = '';
        if (project.figmaUrl) {
            linksHTML += `<a href="${project.figmaUrl}" class="project-link" target="_blank">
                <i class="fab fa-figma"></i> View Figma
            </a>`;
        }
        if (project.liveUrl) {
            linksHTML += `<a href="${project.liveUrl}" class="project-link" target="_blank">
                <i class="fas fa-globe"></i> View Live
            </a>`;
        }
        if (project.githubUrl) {
            linksHTML += `<a href="${project.githubUrl}" class="project-link" target="_blank">
                <i class="fab fa-github"></i> View Code
            </a>`;
        }
        if (project.documentUrl) {
            linksHTML += `<a href="${project.documentUrl}" class="project-link" target="_blank">
                <i class="fas fa-file-alt"></i> View Document
            </a>`;
        }
        const linkSection = `
          const linkSection = `
          <section class="section fade-in">
            <h2 class="section-title">Explore the Project</h2>
            <div class="project-links">
              ${linksHTML}
            </div>
          </section>
        `;


        // Now get the container and inject the content
        const caseStudyContentContainer = document.getElementById('caseStudyContent').querySelector('.container');
        caseStudyContentContainer.innerHTML = project.caseStudy.contentHTML + linkSection;


        // Fill header info
        document.getElementById('caseStudyTitle').textContent = project.title;
        document.getElementById('caseStudySubtitle').textContent = project.caseStudy.subtitle;
        document.getElementById('caseStudyRole').textContent = project.caseStudy.role;
        document.getElementById('caseStudyTimeline').textContent = project.caseStudy.timeline;
        document.getElementById('caseStudyTeam').textContent = project.caseStudy.team;
        document.getElementById('caseStudyTools').textContent = project.caseStudy.tools;

        // Re-observe animated sections
        caseStudyContentContainer.querySelectorAll('.fade-in').forEach(section => {
            section.classList.remove('visible');
            observer.observe(section);
        });

        updateCaseStudyNavButtons();
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    } else {
        alert("Case study content not available for this project.");
    }
}


function closeCaseStudyModal() {
    const modal = document.getElementById('caseStudyModal');
    modal.style.display = 'none'; // Hide the modal
    document.body.classList.remove('modal-open'); // Remove class from body to allow scrolling
    currentCaseStudyId = null; // Clear the active case study ID
}

function showPrevProject() {
    const activeProjects = projects.filter(p => p.active);
    const currentIndex = activeProjects.findIndex(p => p.id === currentCaseStudyId);
    if (currentIndex > 0) {
        const prevProject = activeProjects[currentIndex - 1];
        // Note: Event is not typically passed here, if it's an internal function call.
        // The preventDefault is handled when openCaseStudyModal is called from an anchor tag.
        openCaseStudyModal(new Event('click'), prevProject.id); // Create a dummy event for consistency
    }
}

function showNextProject() {
    const activeProjects = projects.filter(p => p.active);
    const currentIndex = activeProjects.findIndex(p => p.id === currentCaseStudyId);
    if (currentIndex < activeProjects.length - 1) {
        const nextProject = activeProjects[currentIndex + 1];
        // Note: Event is not typically passed here, if it's an internal function call.
        openCaseStudyModal(new Event('click'), nextProject.id); // Create a dummy event for consistency
    }
}

function updateCaseStudyNavButtons() {
    const activeProjects = projects.filter(p => p.active);
    const currentIndex = activeProjects.findIndex(p => p.id === currentCaseStudyId);

    const prevBtn = document.getElementById('prevProjectBtn');
    const nextBtn = document.getElementById('nextProjectBtn');

    if (prevBtn) {
        prevBtn.style.display = (currentIndex > 0) ? 'inline-block' : 'none';
    }
    if (nextBtn) {
        nextBtn.style.display = (currentIndex < activeProjects.length - 1) ? 'inline-block' : 'none';
    }
}


// --- General JavaScript ---

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Only apply smooth scroll if on the index.html and it's a hash link
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '/your-portfolio-directory/') { // Added common root paths
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // If on manager.html, let the default link behavior take over (e.g., href="index.html")
        });
    });

    // Close case study modal when clicking outside its content
    const caseStudyModal = document.getElementById('caseStudyModal');
    if (caseStudyModal) {
        caseStudyModal.addEventListener('click', function(e) {
            if (e.target === this) { // If the click is directly on the modal background
                closeCaseStudyModal();
            }
        });
    }

    // Close case study modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && caseStudyModal && caseStudyModal.style.display === 'block') {
            closeCaseStudyModal();
        }
    });

    // Initial render for the public page when it loads
    loadProjectsFromLocalStorage(); // Load projects from local storage
    renderPublicProjects(); // Render public projects
});


// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header && !document.body.classList.contains('modal-open')) { // Ensure header exists and modal is not open
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'; // Add subtle shadow
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none'; // Remove shadow
        }
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('visible'); // Add visible class for fade-in animations
        } else {
            // Optional: reset animation when out of view, useful for modals if content is reused
            // entry.target.style.opacity = '0';
            // entry.target.style.transform = 'translateY(30px)';
            // entry.target.classList.remove('visible');
        }
    });
}, observerOptions);


// Resume download function
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'your-resume.pdf'; // Update this with your actual resume file path
    link.download = 'YourName-UX-Designer-Resume.pdf'; // Update with your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
