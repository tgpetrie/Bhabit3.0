import { useState } from "react";
import "./App.css";

function App() {
  const [section, setSection] = useState("home");

  return (
    <div className="bhabit-content">
      <nav style={{ marginBottom: "2rem" }}>
        <button onClick={() => setSection("home")}>Home</button>
        <button onClick={() => setSection("about")}>About</button>
        <button onClick={() => setSection("smart")}>Smart Contracts</button>
        <button onClick={() => setSection("tokenomics")}>Tokenomics</button>
        <button onClick={() => setSection("challenges")}>Challenges</button>
        <button onClick={() => setSection("born")}>Born Vault</button>
        <button onClick={() => setSection("roadmap")}>Roadmap</button>
        <button onClick={() => setSection("join")}>Join</button>
      </nav>
      {section === "home" && (
        <>
          <h1>BHABIT (BBIT)</h1>
          <h2>Profits Buy Impulse</h2>
          <p>
            <a href="#whitepaper">Read the Whitepaper</a>
          </p>
        </>
      )}
      {section === "about" && (
        <>
          <h2>About BHABIT</h2>
          <p>
            BHABIT is a decentralized chaos economy — a cultural force disguised as a
            crypto token. Built for the underbanked and the overbrave, it rewards raw
            impulse, rebellion, and the creative anarchy of youth. It’s not a meme.
            It’s a movement. From Mexico City to the world, BHABIT gives people a way
            to burn their path into the future.
          </p>
          <p>
            With integrations like Flexa for instant stablecoin transactions and Anvil
            for lending, BHABIT becomes more than speculative. It becomes usable.
            Spend, stake, vote, or burn — just don’t sit still.
          </p>
        </>
      )}
      {section === "smart" && (
        <>
          <h2>Smart Contracts</h2>
          <h3>Token Contract:</h3>
          <ul>
            <li>ERC-20</li>
            <li>13 trillion fixed supply</li>
            <li>Deflationary burn system through vaults and rewards</li>
          </ul>
          <h3>Staking Contract:</h3>
          <ul>
            <li>Stake to earn</li>
            <li>Auto-adjusted rewards</li>
            <li>Optional lock-up tiers</li>
          </ul>
          <h3>DAO Governance Contract:</h3>
          <ul>
            <li>One BHABIT = one vote</li>
            <li>Proposals for emissions, partnerships, and challenges</li>
            <li>On-chain voting portal (coming soon)</li>
          </ul>
        </>
      )}
      {section === "tokenomics" && (
        <>
          <h2>Tokenomics</h2>
          <p>
            <strong>Total Supply:</strong> 13,000,000,000,000 BBIT
            <br />
            <strong>Initial Distribution:</strong>
          </p>
          <ul>
            <li>40% Public Liquidity</li>
            <li>25% Community Engagement Vault</li>
            <li>20% Born Vault Reserve</li>
            <li>10% Staking Rewards</li>
            <li>5% Core Contributors</li>
          </ul>
          <p>
            <strong>Emission &amp; Burn:</strong>
          </p>
          <ul>
            <li>Vault participation burns BBIT</li>
            <li>Community voting rewards BBIT</li>
            <li>Tiered user rewards based on held + burned BBIT</li>
          </ul>
        </>
      )}
      {section === "challenges" && (
        <>
          <h2>Challenges &amp; Engagement</h2>
          <p>
            BHABIT challenges are high-stakes, community-powered prompts where users
            vote on stories, photos, or real-life acts. They’re anonymous. They’re
            raw. And they earn you BBIT — if the community says so.
          </p>
          <ul>
            <li>Submit anonymously</li>
            <li>Vote on weekly vice-themed prompts</li>
            <li>Earn or burn BHABIT based on peer rating</li>
          </ul>
        </>
      )}
      {section === "born" && (
        <>
          <h2>The Born Vault</h2>
          <p>
            Inspired by myths, bets, and chaos.
            <br />
            The Born Vault is a ritual. A high-risk, high-reward burn event where
            participants destroy BBIT for a shot at unlocking a massive communal vault.
          </p>
          <ul>
            <li>Mythic lore meets token game theory</li>
            <li>The fewer who burn, the more one wins</li>
            <li>Transparent chain logic governs odds</li>
          </ul>
        </>
      )}
      {section === "roadmap" && (
        <>
          <h2>Roadmap (Updated Q2 2025 Onward)</h2>
          <h3>Q2 2025</h3>
          <ul>
            <li>Smart contract deployment</li>
            <li>Flexa integration testing</li>
            <li>Final whitepaper release</li>
            <li>CBMo4ers live data platform launched</li>
          </ul>
          <h3>Q3 2025</h3>
          <ul>
            <li>Launch Born Vault v1</li>
            <li>Open DAO proposals for vault cycles</li>
            <li>Activate staking rewards</li>
            <li>Community challenge v1: graffiti voting + stories</li>
          </ul>
          <h3>Q4 2025</h3>
          <ul>
            <li>Local activations in Mexico City</li>
            <li>Merch drops tied to burned BBIT tiers</li>
            <li>Anvil lending UX goes live</li>
            <li>DAO-based treasury grants</li>
          </ul>
          <h3>2026</h3>
          <ul>
            <li>Regional expansion</li>
            <li>Off-grid markets onboarding (LatAm, Asia)</li>
            <li>Real-world burner events</li>
            <li>Evolution into full BHABIT OS</li>
          </ul>
        </>
      )}
      {section === "join" && (
        <>
          <h2>Join the Movement</h2>
          <p>
            <strong>Buy with USDC / DAI via Flexa (coming soon)</strong>
            <br />
            <strong>Vote. Burn. Earn.</strong>
            <br />
            Follow BHABIT across your vices.
          </p>
          <ul>
            <li>Instagram</li>
            <li>X</li>
            <li>Telegram</li>
            <li>Website / Whitepaper</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
