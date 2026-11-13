import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { services } from "./services";
import { contact } from "./config";
import "./styles.css";
const Arrow = () => <span className="arrow-icon" aria-hidden="true" />;
function FlowGraphic() {
  return (
    <div
      className="flow-graphic"
      aria-label="Disconnected tools connected into one automated workflow"
      role="img"
    >
      <div className="orbital orbit-one" />
      <div className="orbital orbit-two" />
      <div className="flow-line line-one" />
      <div className="flow-line line-two" />
      <div className="flow-line line-three" />
      <div className="system-node node-one">
        <span>⌘</span> YOUR TOOLS
      </div>
      <div className="system-node node-two">
        <span>◇</span> YOUR DATA
      </div>
      <div className="core">
        <div className="core-mark">f</div>
        <small>FLOW ENGINE</small>
        <i />
      </div>
      <div className="system-node node-three">
        <span>↗</span> NEXT ACTION
      </div>
      <div className="graphic-status">
        <i /> CONNECTED. AUTOMATED. IN SYNC.
      </div>
      <span className="coord">SYSTEM / 001</span>
    </div>
  );
}
function ServiceCard({ card, index }) {
  return (
    <article className="service-card">
      <div className="card-top">
        <span className="tiny-square" />
        <span className="card-index">0{index + 1}</span>
      </div>
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <details>
        <summary>
          Explore outcomes <span>+</span>
        </summary>
        <ul>
          {card.outcomes.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}
function App() {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const channels = [
    ["Email", contact.email ? "mailto:" + contact.email : ""],
    [
      "Telegram",
      contact.telegram
        ? "https://t.me/" + contact.telegram.replace(/^@/, "")
        : "",
    ],
    [
      "WhatsApp",
      contact.whatsapp
        ? "https://wa.me/" + contact.whatsapp.replace(/\D/g, "")
        : "",
    ],
  ].filter((x) => x[1]);
  async function copyBrief() {
    const brief =
      "Hi FlowAutomation! I need help with: \nCurrent workflow or challenge: \nDesired outcome: \nTimeline: ";
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
      alert(brief);
    }
  }
  return (
    <>
      <header>
        <a className="brand" href="#" aria-label="FlowAutomation home">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="FlowAutomation"
            className="brand-image"
          />
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>
        <nav className={menu ? "is-open" : ""}>
          <a onClick={() => setMenu(false)} href="#services">
            What we do
          </a>
          <a onClick={() => setMenu(false)} href="#approach">
            How we work
          </a>
          <a className="nav-cta" onClick={() => setMenu(false)} href="#contact">
            Let's talk <Arrow />
          </a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <i /> SYSTEMS THAT MOVE BUSINESS FORWARD
            </div>
            <h1>
              Less friction.
              <br />
              More <em>flow.</em>
            </h1>
            <p>
              Turn disconnected tools and manual work into software that works
              together. Built around your business. Ready for what’s next.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Discuss your project <Arrow />
              </a>
              <a className="text-link" href="#services">
                Explore our services <span>↓</span>
              </a>
            </div>
            <div className="hero-note">
              <span>01 — CONNECT</span>
              <span>02 — AUTOMATE</span>
              <span>03 — GROW</span>
            </div>
          </div>
          <FlowGraphic />
        </section>
        <div className="capability-strip">
          <span>BUILT FOR YOUR WORKFLOW</span>
          <span>Automation</span>
          <b>✳</b>
          <span>Integrations</span>
          <b>✳</b>
          <span>Engineering</span>
          <b>✳</b>
          <span>Security</span>
        </div>
        <section id="services" className="services section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">[ WHAT WE DO ]</div>
              <h2>
                Complex challenges.
                <br />
                <span>Practical systems.</span>
              </h2>
            </div>
            <p>
              From the first integration to a custom platform.
              <br />
              The right tools, connected in the right way.
            </p>
          </div>
          {services.map((s) => (
            <div className="service-group" id={s.anchor} key={s.anchor}>
              <div className="group-heading">
                <div className="group-label">
                  <span>{s.id.trim()}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.description}</p>
              </div>
              <div className={"cards count-" + s.cards.length}>
                {s.cards.map((c, i) => (
                  <ServiceCard card={c} index={i} key={c.title} />
                ))}
              </div>
            </div>
          ))}
        </section>
        <section id="approach" className="approach section">
          <div className="eyebrow">[ HOW WE WORK ]</div>
          <div className="approach-top">
            <h2>
              A clear path.
              <br />
              <span>From idea to impact.</span>
            </h2>
            <p>
              Start with the problem. Build what matters.
              <br />
              Keep improving as your business evolves.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Understand",
                "Map your workflow, identify the friction, and define what success looks like.",
              ],
              [
                "02",
                "Build & connect",
                "Create a focused solution and connect it to the tools you already use.",
              ],
              [
                "03",
                "Launch & refine",
                "Test the details, deploy the system, and agree on the next improvements.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n} /</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact section">
          <div className="eyebrow">
            <i /> LET’S BUILD SOMETHING USEFUL
          </div>
          <h2>
            Your next step.
            <br />
            <em>Let’s make it flow.</em>
          </h2>
          <div className="contact-bottom">
            <p>
              Have an idea to build—or a workflow to fix?
              <br />
              Tell us what you need. We’ll start there.
            </p>
            <div className="contact-actions">
              {channels.length ? (
                channels.map(([label, url]) => (
                  <a key={label} className="button primary" href={url}>
                    {label} <Arrow />
                  </a>
                ))
              ) : (
                <>
                  <button className="button primary" onClick={copyBrief}>
                    {copied ? "Project brief copied ✓" : "Copy a project brief"}{" "}
                    <Arrow />
                  </button>
                  <small className="setup-note">
                    Contact channels will be available soon.
                  </small>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#" aria-label="FlowAutomation home">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="FlowAutomation"
            className="brand-image"
          />
        </a>
        <span>© {new Date().getFullYear()} FlowAutomation</span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
