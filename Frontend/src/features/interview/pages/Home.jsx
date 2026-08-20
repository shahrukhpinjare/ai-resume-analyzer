import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useInterview } from "../interview.context.jsx";
import { useInterview } from "../hooks/useInterview";
import "../style/home.scss";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const fileInputRef = useRef(null);

  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    const resumeFile = fileInputRef.current?.files?.[0];

    if (!jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    if (!resumeFile && !selfDescription.trim()) {
      alert("Please upload your resume or enter your self-description.");
      return;
    }

    const data = await generateReport({
      jobDescription,
      selfDescription,
      resumeFile,
    });

    // ChatGPT
    console.log("Generated report:", data);

    if (!data?._id) {
      console.error("Report ID missing:", data);
      alert("Interview report generate hua, but report ID nahi mili.");
      return;
    }
    //

    navigate(`/interview/${data._id}`);
  };

  if (loading) {
    return (
      <main className="loading-screen">
        <h1>Loading your interview plan...</h1>
      </main>
    );
  }

  return (
    <main className="home-page">
      <div className="home-container">
        {/* Hero */}
        <section className="home-hero">
          <p className="home-eyebrow">
            <span className="sparkle">✦</span>
            AI-POWERED INTERVIEW PREPARATION
          </p>

          <h1>
            Create Your Custom <span>Interview Plan</span>
          </h1>

          <p className="home-subtitle">
            Let our AI analyze the job requirements and your unique profile to
            build a winning strategy.
          </p>
        </section>

        {/* Main Form */}
        <section className="interview-panel">
          {/* Job Description */}
          <div className="panel-card job-card">
            <div className="panel-header">
              <div className="title-wrapper">
                <span className="title-icon">▣</span>

                <span className="panel-title">Target Job Description</span>

                <span className="required-badge">REQUIRED</span>
              </div>
            </div>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              name="jobDescription"
              id="jobDescription"
              placeholder={`Paste the full job description here...

e.g. Senior Frontend Engineer at Google requires
proficiency in React, TypeScript, and large-scale
design...`}
            />

            <div className="character-count">0 / 5000 chars</div>
          </div>

          {/* Profile */}
          <div className="panel-card profile-card">
            <div className="panel-header">
              <div className="title-wrapper">
                <span className="title-icon">♙</span>

                <span className="panel-title">Your Profile</span>
              </div>
            </div>

            {/* Resume */}
            <div className="resume-section">
              <div className="resume-header">
                <label htmlFor="resume">Upload Resume</label>

                <span className="best-results">BEST RESULTS</span>
              </div>

              <label htmlFor="resume" className="upload-dropzone">
                <span className="upload-icon">⇧</span>

                <strong>Click to upload or drag & drop</strong>

                <small>PDF or DOCX (Max 5MB)</small>
              </label>

              <input
                ref={fileInputRef}
                hidden
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
              />
            </div>

            {/* OR */}
            <div className="or-divider">
              <span>OR</span>
            </div>

            {/* Self Description */}
            <div className="input-group">
              <label htmlFor="selfDescription">Quick Self-Description</label>

              <textarea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                name="selfDescription"
                id="selfDescription"
                placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
              />
            </div>

            {/* Hint */}
            <div className="profile-hint">
              <span>●</span>

              <p>
                Either a <strong>Resume</strong> or a{" "}
                <strong>Self Description</strong> is required to generate a
                personalized plan.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom */}
        <section className="home-bottom">
          <p className="generation-info">
            AI-Powered Strategy Generation
            <span>•</span>
            Approx 30s
          </p>

          <button className="generate-button" onClick={handleGenerateReport}>
            ✦ Generate My Interview Strategy
          </button>
        </section>

        {/* Recent Reports List */}
        {reports.length > 0 && (
          <section className="recent-reports">
            <h2>My Recent Interview Plans</h2>

            <ul className="reports-list">
              {reports.map((report) => (
                <li
                  key={report._id}
                  className="report-item"
                  onClick={() => navigate(`/interview/${report._id}`)}
                >
                  <h3>{report.title || "Untitled Report"}</h3>
                  <p className="report-meta">
                    Generated on {new Date(report.createdAt).toLocaleString()}
                  </p>
                  <p
                    className={`match-score ${report.matchScore >= 70 ? "high" : report.matchScore >= 50 ? "medium" : "low"}`}
                  >
                    Match Score: {report.matchScore}%
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer */}
        <footer className="home-footer">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Help Center</span>
        </footer>
      </div>
    </main>
  );
};

export default Home;
