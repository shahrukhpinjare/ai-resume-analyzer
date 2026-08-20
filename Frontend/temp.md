// import "../style/home.scss";

// const Home = () => {
// return (
// <main className="home-page">
// <section className="hero-section">
// <div className="hero-copy">
// <p className="eyebrow">Create Your Custom Interview Plan</p>
// <h1>
// Let our AI analyze the job requirements and your unique profile to build a winning strategy.
// </h1>
// </div>
// </section>

// <section className="interview-panel">
// <div className="panel-card job-card">
// <div className="panel-header">
// <div>
// <span className="panel-title">Target Job Description</span>
// <span className="badge">Required</span>
// </div>
// </div>

// <textarea
// name="jobDescription"
// id="jobDescription"
// placeholder="Paste the full job description here..."
// />

// <div className="panel-footer">
// <span>0/5000 chars</span>
// </div>
// </div>

// <div className="panel-card profile-card">
// <div className="panel-header">
// <span className="panel-title">Your Profile</span>
// </div>

// <div className="upload-section">
// <div className="upload-dropzone">
// <span className="upload-icon">📄</span>
// <p>Click to upload or drag & drop</p>
// <small>PDF or DOCX Max 5MB</small>
// </div>
// <label className="upload-button" htmlFor="resume">
// Upload Resume
// </label>
// <input hidden type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />
// </div>

// <div className="input-group">
// <label htmlFor="selfDescription">Quick Self-Description</label>
// <textarea
// name="selfDescription"
// id="selfDescription"
// placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
// />
// </div>

// <p className="hint">
// Either a Resume or a Self Description is required to generate a personalized plan.
// </p>

// <button className="button primary-button">
// Generate My Interview Strategy
// </button>

// <p className="meta">AI-Powered Strategy Generation • Approx 30s</p>
// </div>
// </section>
// </main>
// );
// };

// export default Home;

// import "../style/interview.scss";

// const interviewData = {
// matchScore: 95,
// technicalQuestions: [
// {
// question: "What is the difference between props and state in React?",
// intention:
// "To evaluate the candidate's understanding of core React concepts.",
// answer:
// "Props are read-only values passed from a parent component to a child component, while state is data managed internally by a component and can change over time. State changes can trigger a component re-render.",
// },
// {
// question: "How do you create a responsive web application using CSS?",
// intention:
// "To assess the candidate's knowledge of responsive frontend development.",
// answer:
// "Responsive web applications can be created using flexible layouts, CSS Flexbox or Grid, relative units, media queries, and mobile-first design principles.",
// },
// {
// question:
// "What are REST APIs and how have you used them in your React applications?",
// intention: "To evaluate practical experience with API integration.",
// answer:
// "REST APIs allow frontend and backend applications to communicate using HTTP methods such as GET, POST, PUT, and DELETE. In React applications, APIs can be called using fetch or libraries such as Axios, and the returned data can be stored in component state.",
// },
// {
// question: "How would you handle API errors in a React application?",
// intention: "To assess error handling and frontend reliability skills.",
// answer:
// "API calls should use proper error handling with try-catch or promise error handlers. The application should show appropriate loading and error states and avoid breaking the user interface when an API request fails.",
// },
// {
// question:
// "How would you implement JWT authentication in a MERN stack e-commerce application?",
// intention:
// "To evaluate the candidate's understanding of authentication in a MERN stack application.",
// answer:
// "After successful login, the server generates a JWT token. The client sends the token with protected requests, usually through an Authorization header. The backend verifies the token before allowing access to protected resources.",
// },
// {
// question: "What is the difference between PUT and PATCH in a REST API?",
// intention: "To test understanding of commonly used HTTP methods.",
// answer:
// "PUT is generally used to replace or update an entire resource, while PATCH is used to partially update specific fields of an existing resource.",
// },
// {
// question:
// "How do Git and GitHub help during collaborative frontend development?",
// intention: "To evaluate version control and collaboration skills.",
// answer:
// "Git tracks changes locally and allows developers to create branches, commit changes, and merge work. GitHub provides remote repository hosting, collaboration, pull requests, code review, and issue tracking.",
// },
// {
// question: "What steps would you take to fix a UI bug reported by a user?",
// intention: "To assess debugging and problem-solving ability.",
// answer:
// "First, reproduce the issue and inspect the affected component using browser developer tools. Then identify whether the problem is caused by HTML, CSS, JavaScript, React state, or API data, fix the root cause, test the solution, and verify that no related functionality is affected.",
// },
// {
// question: "What is the purpose of useEffect in React?",
// intention: "To evaluate understanding of React hooks.",
// answer:
// "useEffect is used to handle side effects in functional components, such as API calls, subscriptions, timers, and synchronizing external systems with component state.",
// },
// {
// question:
// "How does a React frontend communicate with a Node.js and Express backend?",
// intention:
// "To assess full-stack understanding relevant to the candidate's projects.",
// answer:
// "The React frontend sends HTTP requests to backend API endpoints. Express receives and processes the request, performs required business logic or database operations, and sends a response that React uses to update the user interface.",
// },
// ],
// behavioralQuestions: [
// {
// question:
// "Tell me about a challenging bug you faced during your internship and how you solved it.",
// intention:
// "To evaluate practical problem-solving and debugging experience.",
// answer:
// "A strong answer should explain the problem, the investigation process, the technical steps taken, the solution implemented, and the final result using a clear situation-action-result structure.",
// },
// {
// question:
// "Describe a time when you had to learn a new technology quickly.",
// intention: "To assess learning ability and adaptability.",
// answer:
// "A strong answer should describe the technology, why it needed to be learned, how the candidate approached learning it, how it was applied, and the outcome.",
// },
// {
// question:
// "How do you handle feedback on your code from a senior developer or teammate?",
// intention:
// "To evaluate teamwork, communication, and willingness to improve.",
// answer:
// "I would listen carefully to the feedback, understand the reasoning behind it, ask questions if necessary, improve the code accordingly, and use the feedback to avoid similar mistakes in future work.",
// },
// {
// question:
// "How do you prioritize tasks when working on multiple frontend issues?",
// intention: "To assess time management and prioritization skills.",
// answer:
// "I would prioritize tasks based on business impact, urgency, dependencies, and user impact. Critical bugs affecting users would be handled before lower-priority improvements.",
// },
// {
// question:
// "How would you collaborate with a backend developer when integrating an API?",
// intention:
// "To evaluate communication and cross-functional collaboration.",
// answer:
// "I would first understand the API contract, request and response formats, authentication requirements, and error responses. I would communicate clearly about issues, test endpoints using tools such as Postman, and integrate the API into the frontend.",
// },
// ],
// skillGaps: [
// {
// skill: "Clean and maintainable code practices",
// severity: "medium",
// },
// ],
// preparationPlan: [
// {
// day: 1,
// focus: "HTML and CSS Fundamentals",
// tasks: [
// "Revise semantic HTML elements",
// "Practice Flexbox and CSS Grid",
// "Build a responsive webpage using media queries",
// ],
// description:
// "Strengthen the frontend fundamentals required for developing responsive web applications.",
// },
// {
// day: 2,
// focus: "JavaScript Fundamentals",
// tasks: [
// "Revise variables, scope, closures, and functions",
// "Practice promises and async/await",
// "Solve JavaScript debugging problems",
// ],
// description:
// "Improve JavaScript fundamentals and prepare for common frontend interview questions.",
// },
// {
// day: 3,
// focus: "React.js",
// tasks: [
// "Revise components, props, and state",
// "Practice useState and useEffect",
// "Build a small React application",
// ],
// description:
// "Strengthen core React concepts and practical component development skills.",
// },
// ],
// };

// const Interview = () => {
// const {
// matchScore,
// technicalQuestions,
// behavioralQuestions,
// skillGaps,
// preparationPlan,
// } = interviewData;

// return (
// <main className="interview-page">
// <section className="hero-section">
// <div className="hero-copy">
// <p className="eyebrow">Interview Strategy Report</p>
// <h1>
// Review your tailored questions, skill gaps, and preparation plan.
// </h1>
// </div>

// <div className="score-card panel-card">
// <p className="score-label">Job match score</p>
// <strong className="score-value">{matchScore}%</strong>
// <p className="score-help">
// Target your preparation with relevant topics and a guided study
// path.
// </p>
// </div>
// </section>

// <section className="interview-grid">
// <aside className="panel-card section-nav">
// <div className="panel-header small-header">
// <span className="panel-title">Sections</span>
// </div>
// <nav className="nav-list">
// <button type="button" className="nav-item active">
// Technical questions
// </button>
// <button type="button" className="nav-item">
// Behavioral questions
// </button>
// <button type="button" className="nav-item">
// Preparation plan
// </button>
// </nav>
// </aside>

// <article className="panel-card main-content">
// <div className="content-meta">
// <span className="badge">
// {technicalQuestions.length} technical questions
// </span>
// <span className="meta-text">
// Keep this page open while you prepare.
// </span>
// </div>

// <div className="section-block">
// <div className="section-heading">
// <h2>Technical questions</h2>
// <p>Key answers to help you structure responses clearly.</p>
// </div>
// {technicalQuestions.map((question, index) => (
// <div className="question-card" key={`tech-${index}`}>
// <div className="question-meta">
// <span>Q{index + 1}</span>
// <span className="question-intent">{question.intention}</span>
// </div>
// <h3>{question.question}</h3>
// <p className="answer-label">Suggested answer</p>
// <p>{question.answer}</p>
// </div>
// ))}
// </div>

// <div className="section-block">
// <div className="section-heading">
// <h2>Behavioral questions</h2>
// <p>Practice storytelling with structure and clarity.</p>
// </div>
// {behavioralQuestions.map((question, index) => (
// <div className="question-card" key={`beh-${index}`}>
// <div className="question-meta">
// <span>Q{index + 1}</span>
// <span className="question-intent">{question.intention}</span>
// </div>
// <h3>{question.question}</h3>
// <p className="answer-label">Suggested approach</p>
// <p>{question.answer}</p>
// </div>
// ))}
// </div>
// </article>

// <aside className="panel-card summary-panel">
// <div className="panel-section">
// <div className="panel-header small-header">
// <span className="panel-title">Skill gaps</span>
// </div>
// <div className="tag-grid">
// {skillGaps.map((gap, index) => (
// <span className="skill-pill" key={`gap-${index}`}>
// {gap.skill}
// </span>
// ))}
// </div>
// </div>

// <div className="panel-section">
// <div className="panel-header small-header">
// <span className="panel-title">Preparation plan</span>
// </div>
// <div className="plan-list">
// {preparationPlan.map((item) => (
// <div className="plan-item" key={`plan-${item.day}`}>
// <div className="plan-day">Day {item.day}</div>
// <h3>{item.focus}</h3>
// <p className="plan-description">{item.description}</p>
// <ul>
// {item.tasks.map((task, taskIndex) => (
// <li key={`task-${item.day}-${taskIndex}`}>{task}</li>
// ))}
// </ul>
// </div>
// ))}
// </div>
// </div>
// </aside>
// </section>
// </main>
// );
// };

// export default Interview;

// .home-page {
// min-height: 100vh;
// padding: 3rem 1rem;
// background: radial-gradient(
// circle at top,
// #141824 0%,
// #0b0f17 40%,
// #05070c 100%
// );
// color: #f5f7ff;
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 2rem;
// }

// .hero-section {
// width: min(1200px, 100%);
// text-align: center;
// }

// .hero-copy {
// max-width: 820px;
// margin: 0 auto;
// }

// .eyebrow {
// display: inline-flex;
// align-items: center;
// gap: 0.5rem;
// color: #ff5fa3;
// font-size: 0.95rem;
// font-weight: 700;
// text-transform: uppercase;
// letter-spacing: 0.12em;
// margin-bottom: 1rem;
// }

// .hero-copy h1 {
// font-size: clamp(2rem, 4vw, 3.2rem);
// line-height: 1.1;
// max-width: 860px;
// margin: 0 auto;
// }

// .interview-panel {
// width: min(1200px, 100%);
// display: grid;
// grid-template-columns: 1.2fr 0.9fr;
// gap: 1.5rem;
// }

// .panel-card {
// background: rgba(18, 24, 37, 0.92);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 28px;
// padding: 1.75rem;
// box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
// }

// .panel-header {
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-bottom: 1.25rem;
// }

// .panel-title {
// font-size: 1rem;
// font-weight: 700;
// letter-spacing: 0.02em;
// }

// .badge {
// display: inline-flex;
// align-items: center;
// padding: 0.45rem 0.75rem;
// background: rgba(255, 95, 163, 0.12);
// color: #ff82b7;
// border-radius: 999px;
// font-size: 0.8rem;
// font-weight: 700;
// }

// .job-card textarea,
// .profile-card textarea {
// width: 100%;
// min-height: 420px;
// border: 1px solid rgba(255, 255, 255, 0.1);
// border-radius: 22px;
// background: #111720;
// color: #f8f9ff;
// padding: 1.25rem 1.4rem;
// font-size: 0.98rem;
// line-height: 1.7;
// resize: none;
// outline: none;
// }

// .job-card textarea::placeholder,
// .profile-card textarea::placeholder {
// color: rgba(255, 255, 255, 0.42);
// }

// .panel-footer {
// display: flex;
// justify-content: flex-end;
// margin-top: 0.85rem;
// color: rgba(255, 255, 255, 0.55);
// font-size: 0.92rem;
// }

// .profile-card {
// display: flex;
// flex-direction: column;
// gap: 1.2rem;
// }

// .upload-section {
// display: grid;
// gap: 1rem;
// }

// .upload-dropzone {
// min-height: 180px;
// border: 1px dashed rgba(255, 255, 255, 0.16);
// border-radius: 22px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 0.5rem;
// color: rgba(255, 255, 255, 0.72);
// background: rgba(255, 255, 255, 0.02);
// text-align: center;
// }

// .upload-icon {
// font-size: 2rem;
// }

// .upload-button {
// width: fit-content;
// padding: 0.9rem 1.2rem;
// background: #ff2e6d;
// color: #fff;
// border-radius: 999px;
// cursor: pointer;
// font-weight: 700;
// border: none;
// transition:
// transform 0.2s ease,
// opacity 0.2s ease;
// }

// .upload-button:hover {
// transform: translateY(-1px);
// opacity: 0.95;
// }

// .input-group {
// display: grid;
// gap: 0.75rem;
// }

// .input-group label {
// color: rgba(255, 255, 255, 0.75);
// font-size: 0.95rem;
// font-weight: 600;
// }

// .profile-card textarea {
// min-height: 160px;
// }

// .hint {
// color: rgba(255, 255, 255, 0.65);
// font-size: 0.92rem;
// line-height: 1.6;
// margin: 0;
// }

// .button.primary-button {
// width: 100%;
// padding: 1rem 1.2rem;
// background: linear-gradient(90deg, #ff2f6f 0%, #ff5fa3 100%);
// color: #fff;
// border: none;
// border-radius: 18px;
// font-size: 1rem;
// font-weight: 700;
// transition:
// filter 0.2s ease,
// transform 0.2s ease;
// cursor: pointer;
// }

// .button.primary-button:hover {
// filter: brightness(1.05);
// transform: translateY(-1px);
// }

// .meta {
// color: rgba(255, 255, 255, 0.55);
// font-size: 0.9rem;
// margin: 0;
// text-align: center;
// }

// @media (max-width: 980px) {
// .interview-panel {
// grid-template-columns: 1fr;
// }

// .job-card textarea {
// min-height: 320px;
// }
// }

// @media (max-width: 680px) {
// .home-page {
// padding: 2rem 0.75rem;
// }

// .hero-copy h1 {
// font-size: 2rem;
// }

// .upload-dropzone {
// min-height: 150px;
// }
// }

// .interview-page {
// min-height: 100vh;
// padding: 3rem 1rem;
// background: radial-gradient(
// circle at top,
// #141824 0%,
// #0b0f17 40%,
// #05070c 100%
// );
// color: #f5f7ff;
// }

// .hero-section {
// width: min(1200px, 100%);
// display: grid;
// grid-template-columns: 1.7fr 0.9fr;
// gap: 1.5rem;
// align-items: center;
// margin: 0 auto 2rem;
// }

// .hero-copy {
// max-width: 780px;
// }

// .hero-copy .eyebrow {
// display: inline-flex;
// align-items: center;
// gap: 0.5rem;
// color: #ff5fa3;
// font-size: 0.95rem;
// font-weight: 700;
// text-transform: uppercase;
// letter-spacing: 0.12em;
// margin-bottom: 1rem;
// }

// .hero-copy h1 {
// font-size: clamp(2rem, 4vw, 3.2rem);
// line-height: 1.1;
// margin: 0;
// }

// .score-card {
// padding: 2rem;
// background: rgba(18, 24, 37, 0.92);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 28px;
// display: flex;
// flex-direction: column;
// gap: 1rem;
// box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
// }

// .score-label {
// color: rgba(255, 255, 255, 0.72);
// font-size: 0.95rem;
// font-weight: 600;
// }

// .score-value {
// font-size: 4rem;
// line-height: 1;
// color: #ff5fa3;
// }

// .score-help {
// color: rgba(255, 255, 255, 0.7);
// margin: 0;
// line-height: 1.6;
// }

// .interview-grid {
// width: min(1200px, 100%);
// display: grid;
// grid-template-columns: 0.9fr 1.9fr 0.95fr;
// gap: 1.5rem;
// margin: 0 auto;
// }

// .panel-card {
// background: rgba(18, 24, 37, 0.92);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 28px;
// padding: 1.75rem;
// box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
// }

// .section-nav {
// display: flex;
// flex-direction: column;
// gap: 1rem;
// }

// .small-header {
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-bottom: 1rem;
// }

// .panel-title {
// font-size: 1rem;
// font-weight: 700;
// letter-spacing: 0.02em;
// }

// .nav-list {
// display: grid;
// gap: 0.8rem;
// }

// .nav-item {
// width: 100%;
// padding: 0.95rem 1rem;
// text-align: left;
// color: #f5f7ff;
// background: rgba(255, 255, 255, 0.04);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 18px;
// cursor: pointer;
// font-weight: 600;
// transition:
// transform 0.2s ease,
// background 0.2s ease;
// }

// .nav-item:hover,
// .nav-item.active {
// background: rgba(255, 95, 163, 0.12);
// transform: translateX(2px);
// }

// .main-content {
// display: flex;
// flex-direction: column;
// gap: 1.5rem;
// }

// .content-meta {
// display: flex;
// flex-wrap: wrap;
// gap: 1rem;
// align-items: center;
// justify-content: space-between;
// margin-bottom: 1rem;
// }

// .badge {
// display: inline-flex;
// align-items: center;
// padding: 0.45rem 0.75rem;
// background: rgba(255, 95, 163, 0.12);
// color: #ff82b7;
// border-radius: 999px;
// font-size: 0.85rem;
// font-weight: 700;
// }

// .meta-text {
// color: rgba(255, 255, 255, 0.7);
// font-size: 0.95rem;
// }

// .section-block {
// display: grid;
// gap: 1rem;
// }

// .section-heading h2 {
// margin: 0;
// font-size: 1.2rem;
// }

// .section-heading p {
// margin: 0.35rem 0 0;
// color: rgba(255, 255, 255, 0.7);
// font-size: 0.95rem;
// }

// .question-card {
// background: rgba(255, 255, 255, 0.03);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 22px;
// padding: 1.25rem 1.4rem;
// display: grid;
// gap: 0.9rem;
// }

// .question-meta {
// display: flex;
// flex-direction: column;
// gap: 0.45rem;
// color: rgba(255, 255, 255, 0.72);
// font-size: 0.92rem;
// }

// .question-intent {
// color: rgba(255, 255, 255, 0.55);
// }

// .question-card h3 {
// margin: 0;
// font-size: 1rem;
// line-height: 1.4;
// }

// .answer-label {
// margin: 0;
// color: #ff5fa3;
// font-size: 0.95rem;
// font-weight: 700;
// }

// .question-card p:not(.answer-label) {
// margin: 0;
// color: rgba(255, 255, 255, 0.78);
// line-height: 1.75;
// }

// .summary-panel {
// display: grid;
// gap: 1.5rem;
// }

// .panel-section {
// display: grid;
// gap: 1rem;
// }

// .tag-grid {
// display: grid;
// gap: 0.75rem;
// }

// .skill-pill {
// display: inline-flex;
// align-items: center;
// padding: 0.65rem 0.9rem;
// color: #ff82b7;
// background: rgba(255, 95, 163, 0.12);
// border-radius: 999px;
// font-size: 0.9rem;
// border: 1px solid rgba(255, 255, 255, 0.08);
// }

// .plan-list {
// display: grid;
// gap: 1rem;
// }

// .plan-item {
// background: rgba(255, 255, 255, 0.03);
// border: 1px solid rgba(255, 255, 255, 0.08);
// border-radius: 22px;
// padding: 1rem 1.1rem;
// }

// .plan-day {
// display: inline-flex;
// align-items: center;
// justify-content: center;
// width: fit-content;
// padding: 0.35rem 0.75rem;
// background: rgba(255, 255, 255, 0.06);
// color: #ff5fa3;
// border-radius: 999px;
// font-size: 0.85rem;
// font-weight: 700;
// }

// .plan-item h3 {
// margin: 0.65rem 0 0.5rem;
// font-size: 1rem;
// }

// .plan-description {
// margin: 0;
// color: rgba(255, 255, 255, 0.7);
// font-size: 0.95rem;
// line-height: 1.6;
// }

// .plan-item ul {
// margin: 1rem 0 0;
// padding-left: 1.2rem;
// color: rgba(255, 255, 255, 0.72);
// }

// .plan-item li {
// margin-bottom: 0.55rem;
// }

// @media (max-width: 980px) {
// .hero-section,
// .interview-grid {
// grid-template-columns: 1fr;
// }

// .hero-section {
// gap: 1rem;
// }
// }

// @media (max-width: 680px) {
// .interview-page {
// padding: 2rem 0.75rem;
// }

// .nav-item,
// .question-card,
// .plan-item {
// padding: 1rem 1.1rem;
// }

// .score-card {
// padding: 1.5rem;
// }

// .question-card h3,
// .plan-item h3 {
// font-size: 0.98rem;
// }
// }
