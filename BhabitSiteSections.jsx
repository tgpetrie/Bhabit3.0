
// Navigation Bar with Smooth Scrolling
export const NavBar = () => (
  <nav className="fixed top-0 w-full bg-black text-white shadow z-50 flex justify-center space-x-6 py-4 text-sm sm:text-base">
    <a href="#about" className="hover:text-purple-400">About</a>
    <a href="#tokenomics" className="hover:text-orange-400">Tokenomics</a>
    <a href="#contracts" className="hover:text-blue-400">Contracts</a>
    <a href="#challenges" className="hover:text-purple-400">Challenges</a>
    <a href="#vault" className="hover:text-orange-400">Vault</a>
    <a href="#roadmap" className="hover:text-blue-400">Roadmap</a>
    <a href="#join" className="hover:text-purple-400">Join</a>
  </nav>
);

export const HeroSection = () => (
  <section className="bg-black text-white text-center py-20 px-4 mt-16">
    <h1 className="text-4xl sm:text-6xl font-bold">BHABIT (BBIT)</h1>
    <p className="text-xl sm:text-2xl mt-4 text-purple-400">Profits Buy Impulse</p>
    <a href="#whitepaper" className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow">Read the Whitepaper</a>
  </section>
);

export const AboutSection = () => (
  <section id="about" className="bg-zinc-950 text-gray-100 px-6 py-16">
    <h2 className="text-3xl font-bold text-purple-400 mb-4">About BHABIT</h2>
    <p className="max-w-3xl mx-auto">
      BHABIT is a decentralized chaos economy — a cultural force disguised as a crypto token.
      Built for the underbanked and the overbrave, it rewards raw impulse, rebellion, and the creative anarchy of youth.
      With integrations like Flexa for stablecoin payments and Anvil for lending, BHABIT offers real-world functionality for chaotic communities. Spend, stake, vote, or burn — just don’t sit still.
    </p>
  </section>
);

export const SmartContractsSection = () => (
  <section id="contracts" className="bg-black text-white px-6 py-16">
    <h2 className="text-3xl font-bold text-blue-400 mb-4">Smart Contracts</h2>
    <ul className="list-disc pl-6 max-w-2xl mx-auto space-y-4">
      <li><strong>Token:</strong> ERC-20 | 13 trillion total supply | Burnable</li>
      <li><strong>Staking:</strong> Time-based lock-ups | Tiered rewards</li>
      <li><strong>DAO:</strong> One BBIT = One Vote | Proposals + On-chain governance</li>
    </ul>
  </section>
);

export const TokenomicsSection = () => (
  <section id="tokenomics" className="bg-zinc-900 text-gray-100 px-6 py-16">
    <h2 className="text-3xl font-bold text-orange-400 mb-4">Tokenomics</h2>
    <p className="max-w-3xl mx-auto mb-4">BHABIT is capped at 13 trillion BBIT. The economy is burn-fueled, vault-structured, and rewards those who act.</p>
    <ul className="list-disc pl-6 max-w-2xl mx-auto space-y-2">
      <li>40% — Public Launch + Liquidity</li>
      <li>25% — Community Engagement Vault</li>
      <li>20% — Born Vault Reserve</li>
      <li>10% — Staking Rewards</li>
      <li>5% — Core Contributors</li>
    </ul>
  </section>
);

export const ChallengeSection = () => (
  <section id="challenges" className="bg-black text-white px-6 py-16">
    <h2 className="text-3xl font-bold text-purple-500 mb-4">Community Challenges</h2>
    <p className="max-w-3xl mx-auto">
      Submit anonymously. Vote on real, raw content. Each week, users respond to a vice-themed challenge — graffiti, confessions, stories, dares. Earn BBIT or burn depending on the crowd.
    </p>
  </section>
);

export const BornVaultSection = () => (
  <section id="vault" className="bg-zinc-950 text-gray-100 px-6 py-16">
    <h2 className="text-3xl font-bold text-orange-500 mb-4">The Born Vault</h2>
    <p className="max-w-3xl mx-auto">
      A ritual, not a raffle. Users burn BBIT to enter. The fewer who burn, the higher the reward. Modeled after parlay odds and chaos theory. Inspired by Maradona and the Camorra.
    </p>
  </section>
);

export const RoadmapSection = () => (
  <section id="roadmap" className="bg-black text-white px-6 py-16">
    <h2 className="text-3xl font-bold text-blue-400 mb-4">Roadmap (Starting Q2 2025)</h2>
    <ul className="list-disc pl-6 max-w-2xl mx-auto space-y-2">
      <li><strong>Q2 2025:</strong> Contract Launch | Flexa Integration | Final Whitepaper | CBMo4ers App</li>
      <li><strong>Q3 2025:</strong> Vault v1 | DAO Voting Portal | Tiered Staking | Challenge Launch</li>
      <li><strong>Q4 2025:</strong> Mexico City Activations | Merch Rewards | Anvil Lending UX | Treasury Grants</li>
      <li><strong>2026:</strong> Global Expansion | Burner Vault Events | BHABIT OS Dev</li>
    </ul>
  </section>
);

export const JoinSection = () => (
  <section id="join" className="bg-zinc-900 text-gray-100 px-6 py-16 text-center">
    <h2 className="text-3xl font-bold text-purple-400 mb-4">Join the Movement</h2>
    <p className="max-w-xl mx-auto mb-6">BHABIT will be available on Flexa with USDC/DAI. Get involved. Burn. Earn. Vote. Join us where it’s messy.</p>
    <div className="space-x-4">
      <a href="#" className="inline-block bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white">Telegram</a>
      <a href="#" className="inline-block bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded text-white">X (Twitter)</a>
      <a href="#" className="inline-block bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white">Instagram</a>
    </div>
  </section>
);
