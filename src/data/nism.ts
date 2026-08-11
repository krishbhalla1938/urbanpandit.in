import type { Course, Topic } from '../types';

// Topic-by-topic build of the NISM syllabus across its seven segments. Module
// ids nism-framework / nism-mf / nism-deriv are kept so their "Deep Dive &
// Exam Traps" sets in extras.ts still merge.

const foundation: Topic[] = [
  {
    id: 'nism-indian-markets',
    title: 'Indian Financial Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Indian Financial Markets',
        body: [
          'India’s financial system channels savings to productive uses through money markets (short-term) and capital markets (long-term).',
          'The capital market has a primary segment (new issues) and a secondary segment (exchange trading).',
          'Key institutions: SEBI (regulator), NSE/BSE (exchanges), NSDL/CDSL (depositories) and clearing corporations.',
        ],
      },
    ],
    mcqs: [
      { q: 'Long-term funds are raised in the:', options: ['Money market', 'Capital market', 'Forex market', 'Commodity spot'], answer: 1, explanation: 'The capital market handles long-term securities like shares and bonds.' },
      { q: 'New securities are issued in the:', options: ['Secondary market', 'Primary market', 'Money market', 'Repo market'], answer: 1, explanation: 'The primary market is where fresh securities are issued.' },
      { q: 'Which pair are Indian depositories?', options: ['NSE and BSE', 'NSDL and CDSL', 'SEBI and RBI', 'AMFI and IRDAI'], answer: 1, explanation: 'NSDL and CDSL hold securities in demat form.' },
      { q: 'Very short-term instruments trade in the:', options: ['Capital market', 'Money market', 'Equity market', 'Derivatives market'], answer: 1, explanation: 'The money market deals in short-term (≤1 year) instruments.', tricky: true },
    ],
  },
  {
    id: 'nism-sebi-regs',
    title: 'SEBI Regulations',
    reels: [
      {
        kind: 'concept',
        title: 'SEBI & Its Regulations',
        body: [
          'SEBI, established under the SEBI Act 1992, protects investors and regulates and develops the securities market.',
          'It has quasi-legislative (rule-making), quasi-executive (enforcement) and quasi-judicial (adjudication) powers.',
          'Appeals against SEBI orders go to the Securities Appellate Tribunal (SAT).',
        ],
      },
    ],
    mcqs: [
      { q: 'SEBI was established under the:', options: ['Companies Act 2013', 'SEBI Act 1992', 'RBI Act 1934', 'SCRA 1956'], answer: 1, explanation: 'SEBI became a statutory regulator under the SEBI Act, 1992.' },
      { q: 'Appeals against SEBI orders are first heard by the:', options: ['High Court', 'SAT', 'RBI', 'NCLT'], answer: 1, explanation: 'The Securities Appellate Tribunal hears appeals against SEBI.', tricky: true },
      { q: 'SEBI making regulations is a ______ function.', options: ['Quasi-judicial', 'Quasi-legislative', 'Quasi-executive', 'Advisory'], answer: 1, explanation: 'Rule-making is quasi-legislative.', tricky: true },
      { q: 'SEBI’s core objective is:', options: ['Maximising taxes', 'Investor protection and market regulation/development', 'Setting share prices', 'Printing money'], answer: 1, explanation: 'SEBI protects investors and regulates/develops the market.' },
    ],
  },
  {
    id: 'nism-participants',
    title: 'Market Participants',
    reels: [
      {
        kind: 'list',
        title: 'Market Participants',
        body: [
          'Issuers raise capital; investors (retail and institutional) provide it.',
          'Intermediaries: stockbrokers, merchant bankers, depository participants, RTAs, custodians and mutual funds.',
          'Regulators (SEBI, RBI) and market infrastructure (exchanges, depositories, clearing corporations) support the system.',
        ],
      },
    ],
    mcqs: [
      { q: 'A stockbroker acts as a(n):', options: ['Regulator', 'Intermediary between investor and exchange', 'Depository', 'Issuer'], answer: 1, explanation: 'Brokers are intermediaries giving investors market access.' },
      { q: 'A Foreign Portfolio Investor (FPI) is a type of:', options: ['Regulator', 'Institutional investor', 'Depository', 'Exchange'], answer: 1, explanation: 'FPIs are institutional investors from abroad.', tricky: true },
      { q: 'A merchant banker primarily helps with:', options: ['Trade settlement', 'Managing new issues (IPOs)', 'Holding demat accounts', 'Setting policy rates'], answer: 1, explanation: 'Merchant bankers manage capital-raising like IPOs.' },
      { q: 'Which is market infrastructure, not an investor?', options: ['A mutual fund', 'A clearing corporation', 'A pension fund', 'An FPI'], answer: 1, explanation: 'Clearing corporations are infrastructure institutions.' },
    ],
  },
  {
    id: 'nism-products',
    title: 'Financial Products',
    reels: [
      {
        kind: 'list',
        title: 'Financial Products',
        body: [
          'Equity: ownership shares. Debt: bonds/debentures paying interest.',
          'Hybrids: convertibles, preference shares. Derivatives: futures and options.',
          'Pooled vehicles: mutual funds and ETFs. Each has a distinct risk–return profile.',
        ],
      },
    ],
    mcqs: [
      { q: 'A debenture is a type of:', options: ['Equity', 'Debt instrument', 'Derivative', 'Currency'], answer: 1, explanation: 'A debenture is a debt security paying interest.' },
      { q: 'Which product gives ownership and voting rights?', options: ['Bond', 'Equity share', 'Debenture', 'T-bill'], answer: 1, explanation: 'Equity shares confer ownership and usually voting rights.' },
      { q: 'A convertible security is a:', options: ['Pure equity', 'Hybrid (debt with equity option)', 'Money-market instrument', 'Commodity'], answer: 1, explanation: 'Convertibles blend debt with an equity conversion option.', tricky: true },
      { q: 'A mutual fund is a:', options: ['Single stock', 'Pooled investment vehicle', 'Government bond', 'Derivative'], answer: 1, explanation: 'A mutual fund pools money into a managed portfolio.' },
    ],
  },
  {
    id: 'nism-investor-protection',
    title: 'Investor Protection',
    reels: [
      {
        kind: 'concept',
        title: 'Investor Protection',
        body: [
          'SEBI mandates disclosures, fair practices and grievance mechanisms to protect investors.',
          'SCORES is SEBI’s online complaint-redressal system.',
          'Investor Protection Funds compensate investors in cases like broker default.',
        ],
      },
    ],
    mcqs: [
      { q: 'SEBI’s online grievance-redressal platform is:', options: ['SCORES', 'SWIFT', 'RTGS', 'NEAT'], answer: 0, explanation: 'SCORES handles investor complaints against intermediaries.', tricky: true },
      { q: 'An Investor Protection Fund is used to:', options: ['Pay dividends', 'Compensate investors in defaults', 'Fund IPOs', 'Set rates'], answer: 1, explanation: 'It compensates eligible investors, e.g. on broker default.' },
      { q: 'Mandatory disclosures aim to:', options: ['Hide information', 'Give investors information to decide', 'Raise taxes', 'Fix prices'], answer: 1, explanation: 'Disclosure ensures informed investment decisions.' },
      { q: 'Investor protection is a core mandate of:', options: ['SEBI', 'The stock exchange only', 'AMFI only', 'The company'], answer: 0, explanation: 'Protecting investors is central to SEBI’s role.' },
    ],
  },
  {
    id: 'nism-ethics-foundation',
    title: 'Ethics',
    reels: [
      {
        kind: 'concept',
        title: 'Ethics in the Markets',
        body: [
          'Ethics require honesty, fairness, diligence and putting clients’ interests first.',
          'Prohibited conduct includes insider trading, front-running and market manipulation.',
          'Intermediaries must follow SEBI codes of conduct and disclose conflicts of interest.',
        ],
      },
    ],
    mcqs: [
      { q: 'Trading on unpublished price-sensitive information is:', options: ['Allowed', 'Insider trading (prohibited)', 'A fiduciary duty', 'Required disclosure'], answer: 1, explanation: 'Insider trading on UPSI is illegal and unethical.' },
      { q: 'Trading ahead of a client’s known order is:', options: ['Best execution', 'Front-running (prohibited)', 'Hedging', 'Arbitrage'], answer: 1, explanation: 'Front-running is a prohibited unfair practice.', tricky: true },
      { q: 'A conflict of interest should be:', options: ['Hidden', 'Disclosed and managed for the client', 'Exploited', 'Ignored'], answer: 1, explanation: 'Conflicts must be disclosed and managed in the client’s favour.' },
      { q: 'Ethical conduct requires putting first the interests of:', options: ['The broker', 'The client', 'The exchange', 'The regulator'], answer: 1, explanation: 'Client interests come first.' },
    ],
  },
  {
    id: 'nism-kyc',
    title: 'KYC',
    reels: [
      {
        kind: 'concept',
        title: 'Know Your Customer',
        body: [
          'KYC verifies a client’s identity and address before they can transact.',
          'It requires proof of identity (e.g. PAN, Aadhaar) and address, plus in-person or e-verification.',
          'KYC prevents fraud and is the first line of defence in anti-money-laundering.',
        ],
      },
    ],
    mcqs: [
      { q: 'KYC stands for:', options: ['Know Your Customer', 'Keep Your Cash', 'Know Your Coupon', 'Key Yield Curve'], answer: 0, explanation: 'KYC = Know Your Customer.' },
      { q: 'A mandatory KYC document for investing in India is:', options: ['Passport photo only', 'PAN', 'Voter slip only', 'Nothing'], answer: 1, explanation: 'PAN is essential for securities-market KYC.' },
      { q: 'KYC is the first line of defence against:', options: ['Market risk', 'Money laundering / fraud', 'Interest-rate risk', 'Currency risk'], answer: 1, explanation: 'Verifying identity underpins AML controls.', tricky: true },
      { q: 'KYC must be completed:', options: ['After trading', 'Before a client can transact', 'Only for large trades', 'Never'], answer: 1, explanation: 'KYC precedes account opening and transacting.' },
    ],
  },
  {
    id: 'nism-aml',
    title: 'AML',
    reels: [
      {
        kind: 'concept',
        title: 'Anti-Money Laundering',
        body: [
          'AML rules (under the PMLA) prevent the financial system being used to launder illicit money.',
          'Intermediaries must monitor transactions, keep records and report suspicious activity.',
          'The three stages of laundering are placement, layering and integration.',
        ],
        tip: 'Suspicious Transaction Reports (STRs) are filed with the FIU-IND.',
      },
    ],
    mcqs: [
      { q: 'AML in India is governed primarily by the:', options: ['SEBI Act', 'Prevention of Money Laundering Act (PMLA)', 'Companies Act', 'RBI Act'], answer: 1, explanation: 'The PMLA is the core AML law.', tricky: true },
      { q: 'The three stages of money laundering are placement, layering and:', options: ['Integration', 'Inflation', 'Indexation', 'Issuance'], answer: 0, explanation: 'Placement → layering → integration.', tricky: true },
      { q: 'Intermediaries must report:', options: ['All profits', 'Suspicious transactions', 'Every trade to police', 'Nothing'], answer: 1, explanation: 'Suspicious transactions are reported (STRs).' },
      { q: 'AML controls begin with:', options: ['Ignoring identity', 'Robust KYC', 'Higher fees', 'Faster trades'], answer: 1, explanation: 'KYC underpins AML monitoring.' },
    ],
  },
  {
    id: 'nism-risk-profiling',
    title: 'Risk Profiling',
    reels: [
      {
        kind: 'concept',
        title: 'Risk Profiling',
        body: [
          'Risk profiling assesses a client’s risk tolerance (willingness) and risk capacity (ability) to bear losses.',
          'It combines financial situation, goals, time horizon and psychological comfort with risk.',
          'Recommendations must suit the client’s profile — the basis of suitability.',
        ],
      },
    ],
    mcqs: [
      { q: 'Risk profiling assesses a client’s risk tolerance and:', options: ['Tax rate', 'Risk capacity', 'Broker fee', 'Coupon'], answer: 1, explanation: 'It weighs willingness (tolerance) and ability (capacity) to take risk.', tricky: true },
      { q: 'A longer time horizon generally allows:', options: ['Less risk', 'More risk-taking', 'No equities', 'Only cash'], answer: 1, explanation: 'Longer horizons can tolerate more short-term volatility.' },
      { q: 'Matching products to a client’s profile is called:', options: ['Arbitrage', 'Suitability', 'Front-running', 'Hedging'], answer: 1, explanation: 'Suitability aligns recommendations with the profile.' },
      { q: 'Risk capacity refers to a client’s ______ to bear losses.', options: ['Willingness', 'Financial ability', 'Age only', 'Nationality'], answer: 1, explanation: 'Capacity is the financial ability to absorb losses.' },
    ],
  },
];

const equityMarkets: Topic[] = [
  {
    id: 'nism-equity-shares',
    title: 'Equity Shares',
    reels: [
      {
        kind: 'concept',
        title: 'Equity Shares',
        body: [
          'An equity share is a unit of ownership in a company, with a residual claim on profits and assets.',
          'Shareholders may receive dividends and usually have voting rights.',
          'They rank last in a wind-up — highest risk, highest potential reward.',
        ],
      },
    ],
    mcqs: [
      { q: 'An equity share represents:', options: ['A loan', 'Ownership in a company', 'A currency', 'A bond'], answer: 1, explanation: 'Equity is ownership with a residual claim.' },
      { q: 'In a wind-up, equity holders are paid:', options: ['First', 'Last, after creditors', 'Before bonds', 'Equally with debt'], answer: 1, explanation: 'Equity is the residual, most junior claim.', tricky: true },
      { q: 'Ordinary shareholders typically have:', options: ['Fixed interest', 'Voting rights and variable dividends', 'A guaranteed return', 'No ownership'], answer: 1, explanation: 'They vote and receive dividends that vary with profit.' },
      { q: 'Equity is described as ______ risk, ______ potential return.', options: ['Low; low', 'High; high', 'Zero; high', 'High; zero'], answer: 1, explanation: 'Equity carries higher risk and higher potential return.' },
    ],
  },
  {
    id: 'nism-ipo-process',
    title: 'IPO Process',
    reels: [
      {
        kind: 'list',
        title: 'IPO Process',
        body: [
          'A company files a draft offer document (DRHP) with SEBI and appoints merchant bankers.',
          'Pricing is via book-building (a price band and investor bids) or fixed price.',
          'Investors apply via ASBA (funds blocked, not debited), then shares are allotted and listed.',
        ],
      },
    ],
    mcqs: [
      { q: 'An IPO offer document filed with SEBI is the:', options: ['DRHP', 'NAV', 'PMLA', 'ISIN'], answer: 0, explanation: 'The Draft Red Herring Prospectus (DRHP) is filed with SEBI.', tricky: true },
      { q: 'Under ASBA, application money is:', options: ['Debited at once', 'Blocked until allotment', 'Non-refundable', 'Sent to promoters'], answer: 1, explanation: 'ASBA blocks funds in the bank until allotment.' },
      { q: 'Book-building discovers the IPO price via:', options: ['A fixed price', 'Investor bids in a band', 'A lottery', 'SEBI decree'], answer: 1, explanation: 'The price is set from demand within a band.' },
      { q: 'An IPO occurs in the:', options: ['Secondary market', 'Primary market', 'Money market', 'FX market'], answer: 1, explanation: 'IPOs are primary-market issues.' },
    ],
  },
  {
    id: 'nism-rights-issue',
    title: 'Rights Issue',
    reels: [
      {
        kind: 'concept',
        title: 'Rights Issue',
        body: [
          'A rights issue offers new shares to existing shareholders in proportion to their holdings, usually at a discount.',
          'Shareholders can exercise, sell (renounce) or let the rights lapse.',
          'It raises fresh capital while giving existing owners first refusal.',
        ],
      },
    ],
    mcqs: [
      { q: 'A rights issue offers new shares first to:', options: ['The public', 'Existing shareholders pro-rata', 'Institutions only', 'Employees'], answer: 1, explanation: 'Rights go to existing holders in proportion to their stake.' },
      { q: 'Rights shares are usually offered at a:', options: ['Premium', 'Discount to market', 'Random price', 'Par only'], answer: 1, explanation: 'Rights are typically priced below market to encourage take-up.', tricky: true },
      { q: 'A shareholder who sells their rights is said to:', options: ['Renounce', 'Exercise', 'Lapse', 'Default'], answer: 0, explanation: 'Selling rights to another investor is renunciation.', tricky: true },
      { q: 'A rights issue is used to:', options: ['Return capital', 'Raise fresh capital', 'Pay a dividend', 'Buy back shares'], answer: 1, explanation: 'It raises new equity capital.' },
    ],
  },
  {
    id: 'nism-bonus-issue',
    title: 'Bonus Issue',
    reels: [
      {
        kind: 'concept',
        title: 'Bonus Issue',
        body: [
          'A bonus issue gives existing shareholders additional free shares from the company’s reserves.',
          'No cash is raised; reserves are capitalised into share capital.',
          'The share price adjusts down proportionally, so total value is unchanged.',
        ],
      },
    ],
    mcqs: [
      { q: 'A bonus issue is funded from:', options: ['New cash from investors', 'The company’s reserves', 'A bank loan', 'A rights issue'], answer: 1, explanation: 'Reserves are capitalised into free shares.' },
      { q: 'After a 1:1 bonus, the share price roughly:', options: ['Doubles', 'Halves', 'Is unchanged', 'Goes to zero'], answer: 1, explanation: 'Twice the shares → about half the price; value unchanged.', tricky: true },
      { q: 'A bonus issue raises new capital for the company:', options: ['Yes', 'No', 'Only sometimes', 'Only for banks'], answer: 1, explanation: 'No new money is raised — it is an accounting reclassification.', tricky: true },
      { q: 'Bonus shares are given to:', options: ['New investors', 'Existing shareholders free', 'Employees only', 'The government'], answer: 1, explanation: 'Existing holders receive free additional shares.' },
    ],
  },
  {
    id: 'nism-buyback',
    title: 'Buyback',
    reels: [
      {
        kind: 'concept',
        title: 'Share Buyback',
        body: [
          'A buyback is when a company repurchases its own shares, returning cash to shareholders.',
          'It reduces the number of shares outstanding, often boosting EPS.',
          'Methods include tender offer and open-market purchases.',
        ],
      },
    ],
    mcqs: [
      { q: 'A buyback:', options: ['Issues new shares', 'Repurchases the company’s own shares', 'Pays interest', 'Raises debt'], answer: 1, explanation: 'The company buys back its own shares.' },
      { q: 'A buyback typically ______ shares outstanding.', options: ['Increases', 'Reduces', 'Doubles', 'Fixes'], answer: 1, explanation: 'Repurchased shares reduce the count outstanding.' },
      { q: 'By reducing share count, a buyback often ______ EPS.', options: ['Lowers', 'Raises', 'Zeroes', 'Ignores'], answer: 1, explanation: 'Fewer shares raise earnings per share, all else equal.', tricky: true },
      { q: 'A common buyback method is a:', options: ['Rights issue', 'Tender offer', 'Bonus issue', 'DRHP'], answer: 1, explanation: 'Tender offers and open-market purchases are buyback routes.' },
    ],
  },
  {
    id: 'nism-corporate-actions',
    title: 'Corporate Actions',
    reels: [
      {
        kind: 'list',
        title: 'Corporate Actions',
        body: [
          'Corporate actions are events initiated by a company that affect its shares: dividends, splits, bonuses, rights and buybacks.',
          'The record date determines which shareholders are eligible; on the ex-date the benefit no longer transfers to the buyer.',
          'Prices are adjusted for actions like splits and bonuses.',
        ],
        tip: 'Buy on the ex-date and you miss the benefit — the seller keeps it.',
      },
    ],
    mcqs: [
      { q: 'The date that decides eligibility for a corporate action is the:', options: ['Ex-date', 'Record date', 'Listing date', 'Maturity date'], answer: 1, explanation: 'The record date fixes the eligible shareholders.' },
      { q: 'A buyer of shares ON the ex-dividend date:', options: ['Receives the dividend', 'Does not receive the dividend', 'Gets double dividend', 'Pays the dividend'], answer: 1, explanation: 'On/after the ex-date the buyer is not entitled to the declared dividend.', tricky: true },
      { q: 'A stock split is a corporate action that:', options: ['Raises cash', 'Increases share count and lowers price proportionally', 'Repays debt', 'Pays interest'], answer: 1, explanation: 'Splits raise the number of shares and cut the price.' },
      { q: 'Which is NOT a corporate action?', options: ['Dividend', 'Bonus issue', 'Stock split', 'A broker’s commission'], answer: 3, explanation: 'A brokerage fee is not a company-initiated corporate action.' },
    ],
  },
  {
    id: 'nism-market-indices',
    title: 'Market Indices',
    reels: [
      {
        kind: 'concept',
        title: 'Market Indices',
        body: [
          'An index tracks a basket of stocks to represent the market (e.g. NIFTY 50, SENSEX).',
          'NIFTY 50 is free-float market-capitalisation weighted.',
          'Indices serve as benchmarks and underlie index funds, ETFs and derivatives.',
        ],
      },
    ],
    mcqs: [
      { q: 'NIFTY 50 is weighted by:', options: ['Share price', 'Free-float market cap', 'Equal weight', 'Dividend'], answer: 1, explanation: 'NIFTY uses free-float market-cap weighting.', tricky: true },
      { q: 'The BSE benchmark index is the:', options: ['NIFTY 50', 'SENSEX', 'FTSE 100', 'Dow'], answer: 1, explanation: 'SENSEX is the BSE’s benchmark of 30 stocks.' },
      { q: 'Indices are used as:', options: ['Tax tools', 'Benchmarks and derivative underlyings', 'Currency pegs', 'Coupons'], answer: 1, explanation: 'They benchmark performance and underlie index products.' },
      { q: 'A rise in an index reflects:', options: ['One stock', 'The weighted rise of its constituents', 'Only bonds', 'Currency moves'], answer: 1, explanation: 'The index moves with its weighted constituents.' },
    ],
  },
  {
    id: 'nism-trading-process',
    title: 'Trading Process',
    reels: [
      {
        kind: 'list',
        title: 'Trading Process',
        body: [
          'Orders are placed through a broker onto the exchange’s electronic order book.',
          'Matching follows price-time priority: best price first, then earliest order.',
          'Order types include market, limit and stop-loss orders.',
        ],
      },
    ],
    mcqs: [
      { q: 'Exchange orders are matched by:', options: ['Broker size', 'Price-time priority', 'Alphabetical order', 'Random'], answer: 1, explanation: 'Best price first; ties broken by time.' },
      { q: 'A limit order executes:', options: ['At any price', 'Only at the limit price or better', 'At the close only', 'Never'], answer: 1, explanation: 'Limit orders control price but not certainty of execution.' },
      { q: 'A market order prioritises:', options: ['Price', 'Immediate execution', 'The auction', 'Zero slippage'], answer: 1, explanation: 'Market orders fill immediately at the best price.', tricky: true },
      { q: 'A stop-loss order is used to:', options: ['Maximise leverage', 'Limit losses at a trigger price', 'Pay dividends', 'Issue shares'], answer: 1, explanation: 'It triggers a trade once a set price is reached to cap losses.' },
    ],
  },
  {
    id: 'nism-clearing-settlement',
    title: 'Clearing & Settlement',
    reels: [
      {
        kind: 'concept',
        title: 'Clearing & Settlement',
        body: [
          'After trading, the clearing corporation nets obligations and guarantees settlement as central counterparty.',
          'Indian equities settle on a T+1 rolling basis; funds and securities are exchanged on settlement day.',
          'A Settlement Guarantee Fund backstops member defaults.',
        ],
      },
    ],
    mcqs: [
      { q: 'Indian equities settle on a rolling cycle of:', options: ['T+5', 'T+3', 'T+1', 'Same day'], answer: 2, explanation: 'Equity settlement is T+1.', tricky: true },
      { q: 'The central counterparty guaranteeing settlement is the:', options: ['Depository', 'Clearing corporation', 'Broker', 'SEBI'], answer: 1, explanation: 'The clearing corporation guarantees trades.' },
      { q: 'Netting reduces obligations to:', options: ['Each trade individually', 'A single net amount per member', 'Zero always', 'Double'], answer: 1, explanation: 'Netting offsets buys and sells to a net figure.' },
      { q: 'A Settlement Guarantee Fund exists to:', options: ['Pay dividends', 'Cover member defaults', 'Fund IPOs', 'Set rates'], answer: 1, explanation: 'The SGF ensures settlement despite a default.' },
    ],
  },
];

const derivatives: Topic[] = [
  {
    id: 'nism-futures',
    title: 'Futures',
    reels: [
      {
        kind: 'concept',
        title: 'Futures',
        body: [
          'A futures contract is a standardised, exchange-traded agreement to buy/sell an underlying at a set price on a future date.',
          'It carries an obligation for both parties and is marked-to-market daily.',
          'Futures require margin, giving leverage.',
        ],
        formula: 'Futures ≈ Spot × (1 + r)^t − dividends',
      },
    ],
    mcqs: [
      { q: 'A futures contract is:', options: ['Customised OTC', 'Standardised and exchange-traded', 'An ownership stake', 'A bond'], answer: 1, explanation: 'Futures are standardised and cleared on an exchange.' },
      { q: 'Futures require ______ compared with buying the underlying outright.', options: ['More capital', 'Only margin (leverage)', 'No capital', 'The same capital'], answer: 1, explanation: 'Margin provides leverage.', tricky: true },
      { q: 'Daily profit/loss on futures is settled via:', options: ['Physical delivery', 'Mark-to-market', 'Dividends', 'Coupons'], answer: 1, explanation: 'MTM adjusts margins daily.' },
      { q: 'Both parties to a future have:', options: ['A right, no obligation', 'An obligation to transact', 'No commitment', 'Voting rights'], answer: 1, explanation: 'Unlike options, futures obligate both sides.' },
    ],
  },
  {
    id: 'nism-options',
    title: 'Options',
    reels: [
      {
        kind: 'formula',
        title: 'Options',
        body: [
          'An option gives the buyer the right, not the obligation, to buy (call) or sell (put) at a strike price.',
          'The buyer pays a premium; loss is capped at the premium. The writer receives it and takes on risk.',
          'Value = intrinsic value + time value.',
        ],
        formula: 'Call payoff = max(0, Spot − Strike) − Premium',
      },
    ],
    mcqs: [
      { q: 'A call option gives the right to:', options: ['Sell at the strike', 'Buy at the strike', 'Receive a coupon', 'Vote'], answer: 1, explanation: 'A call is the right to buy at the strike.' },
      { q: 'An option buyer’s maximum loss is:', options: ['Unlimited', 'The premium', 'The strike', 'The lot size'], answer: 1, explanation: 'Buyers can lose at most the premium.' },
      { q: 'A call is In-the-Money when:', options: ['Spot > strike', 'Spot < strike', 'Premium = 0', 'At expiry only'], answer: 0, explanation: 'A call has intrinsic value when spot exceeds strike.', tricky: true },
      { q: 'Option value equals intrinsic value plus:', options: ['Coupon value', 'Time value', 'Par value', 'Basis'], answer: 1, explanation: 'Time value decays as expiry approaches.' },
    ],
  },
  {
    id: 'nism-swaps',
    title: 'Swaps',
    reels: [
      {
        kind: 'concept',
        title: 'Swaps',
        body: [
          'A swap is an OTC agreement to exchange cash flows over time.',
          'An interest-rate swap exchanges fixed for floating payments; a currency swap exchanges cash flows in different currencies.',
          'Swaps are used to manage interest-rate or currency exposure.',
        ],
      },
    ],
    mcqs: [
      { q: 'A swap exchanges:', options: ['Shares for bonds', 'Streams of cash flows over time', 'Currencies at spot only', 'Nothing'], answer: 1, explanation: 'Swaps exchange cash flows across time.' },
      { q: 'An interest-rate swap typically exchanges:', options: ['Fixed for floating payments', 'Equity for debt', 'Cash for gold', 'Spot for spot'], answer: 0, explanation: 'A plain-vanilla IRS swaps fixed for floating interest.', tricky: true },
      { q: 'Swaps are usually traded:', options: ['On an exchange', 'Over-the-counter (OTC)', 'Only by governments', 'In cash markets'], answer: 1, explanation: 'Swaps are customised OTC contracts.' },
      { q: 'A currency swap manages exposure to:', options: ['Interest rates only', 'Foreign exchange', 'Equity prices', 'Commodities'], answer: 1, explanation: 'Currency swaps exchange cash flows in different currencies to manage FX risk.' },
    ],
  },
  {
    id: 'nism-forwards',
    title: 'Forwards',
    reels: [
      {
        kind: 'concept',
        title: 'Forwards',
        body: [
          'A forward is a customised OTC contract to buy/sell an asset at a set price on a future date.',
          'Unlike futures, forwards are not standardised or exchange-guaranteed, so they carry counterparty risk.',
          'They are settled at maturity, not marked-to-market daily.',
        ],
      },
    ],
    mcqs: [
      { q: 'A forward differs from a future by being:', options: ['Standardised', 'Customised and OTC', 'Exchange-guaranteed', 'Marked-to-market daily'], answer: 1, explanation: 'Forwards are bespoke OTC contracts.' },
      { q: 'A key risk of forwards not present in futures is:', options: ['Interest-rate risk', 'Counterparty (default) risk', 'Currency risk only', 'No risk'], answer: 1, explanation: 'Forwards lack a clearing guarantee, so counterparty risk exists.', tricky: true },
      { q: 'Forwards are settled:', options: ['Daily via MTM', 'At maturity', 'Never', 'Weekly'], answer: 1, explanation: 'Forwards settle at maturity, not daily.' },
      { q: 'Forwards are mainly used to:', options: ['Speculate only', 'Lock a future price / hedge', 'Pay dividends', 'Issue equity'], answer: 1, explanation: 'They fix a future transaction price, often to hedge.' },
    ],
  },
  {
    id: 'nism-margin',
    title: 'Margin',
    reels: [
      {
        kind: 'concept',
        title: 'Margin',
        body: [
          'Margin is collateral posted to cover potential losses on a derivative position.',
          'Initial (SPAN) margin is required to open; exposure/extreme-loss margin is added on top.',
          'Margins are recalculated as prices move, protecting against default.',
        ],
      },
    ],
    mcqs: [
      { q: 'Margin is:', options: ['A profit', 'Collateral against potential losses', 'A dividend', 'A coupon'], answer: 1, explanation: 'Margin is collateral to cover adverse moves.' },
      { q: 'The initial margin in Indian F&O is computed by:', options: ['The broker’s guess', 'The SPAN system', 'Dividend yield', 'Face value'], answer: 1, explanation: 'SPAN calculates portfolio-based initial margin.', tricky: true },
      { q: 'Margins mainly protect against:', options: ['Inflation', 'Counterparty default / adverse moves', 'Currency pegs', 'Tax'], answer: 1, explanation: 'They cushion against losses and default risk.' },
      { q: 'As prices move against a position, margin requirements:', options: ['Fall', 'May rise (top-up needed)', 'Vanish', 'Stay fixed forever'], answer: 1, explanation: 'Adverse moves can trigger margin calls.' },
    ],
  },
  {
    id: 'nism-mtm',
    title: 'Mark-to-Market',
    reels: [
      {
        kind: 'concept',
        title: 'Mark-to-Market',
        body: [
          'Mark-to-market (MTM) revalues open positions at current prices, settling daily profit/loss.',
          'Gains are credited and losses debited from the margin account each day.',
          'It prevents losses from accumulating unrecognised.',
        ],
      },
    ],
    mcqs: [
      { q: 'Mark-to-market settles profit/loss:', options: ['At maturity only', 'Daily', 'Never', 'Weekly'], answer: 1, explanation: 'MTM settles gains/losses each day.' },
      { q: 'An MTM loss on a futures position is:', options: ['Ignored', 'Debited from the margin account', 'Added to equity', 'Paid as dividend'], answer: 1, explanation: 'Daily losses reduce the margin balance.', tricky: true },
      { q: 'MTM prevents:', options: ['Any trading', 'Losses accumulating unrecognised', 'Price discovery', 'Settlement'], answer: 1, explanation: 'Daily settlement stops hidden loss build-up.' },
      { q: 'MTM applies mainly to:', options: ['Savings accounts', 'Open derivative positions', 'Fixed deposits', 'Physical gold'], answer: 1, explanation: 'Open futures/short-option positions are marked daily.' },
    ],
  },
  {
    id: 'nism-greeks',
    title: 'Greeks',
    reels: [
      {
        kind: 'list',
        title: 'The Option Greeks',
        body: [
          'Delta: sensitivity to the underlying’s price. Gamma: the change in delta.',
          'Theta: time decay. Vega: sensitivity to volatility. Rho: sensitivity to interest rates.',
          'The Greeks help traders understand and hedge option risk.',
        ],
        tip: 'Theta works against option buyers — value erodes as expiry nears.',
      },
    ],
    mcqs: [
      { q: 'Which Greek measures time decay?', options: ['Delta', 'Theta', 'Vega', 'Rho'], answer: 1, explanation: 'Theta captures the loss of value over time.', tricky: true },
      { q: 'Delta measures sensitivity to the:', options: ['Volatility', 'Underlying’s price', 'Interest rate', 'Time'], answer: 1, explanation: 'Delta is the option’s sensitivity to the underlying price.' },
      { q: 'Vega measures sensitivity to:', options: ['Price', 'Volatility', 'Rates', 'Time'], answer: 1, explanation: 'Vega reflects the effect of changing volatility.', tricky: true },
      { q: 'A deep in-the-money call has a delta near:', options: ['0', '0.5', '1', '−1'], answer: 2, explanation: 'Deep ITM calls behave like the underlying (delta → 1).' },
    ],
  },
  {
    id: 'nism-hedging',
    title: 'Hedging',
    reels: [
      {
        kind: 'concept',
        title: 'Hedging',
        body: [
          'Hedging uses derivatives to offset the risk of an existing position.',
          'A protective put insures a long stock holding; index futures can hedge a portfolio.',
          'Hedging reduces risk but usually gives up some potential gain.',
        ],
      },
    ],
    mcqs: [
      { q: 'Hedging is used to:', options: ['Increase risk', 'Reduce an existing risk', 'Maximise leverage', 'Avoid tax'], answer: 1, explanation: 'Hedging offsets risk with a derivative.' },
      { q: 'A protective put hedges:', options: ['A short position', 'A long stock holding against downside', 'Nothing', 'Only bonds'], answer: 1, explanation: 'Buying a put insures owned stock against a fall.', tricky: true },
      { q: 'To hedge a diversified equity portfolio, one can sell:', options: ['Single stock only', 'Index futures', 'Bonds', 'Currency spot'], answer: 1, explanation: 'Index futures hedge broad market exposure.' },
      { q: 'Hedging generally trades away:', options: ['Risk', 'Some potential upside', 'Liquidity', 'Nothing'], answer: 1, explanation: 'Reducing risk usually caps some gains.' },
    ],
  },
  {
    id: 'nism-speculation',
    title: 'Speculation',
    reels: [
      {
        kind: 'concept',
        title: 'Speculation',
        body: [
          'Speculation takes on risk to profit from an expected price move, without an underlying exposure to hedge.',
          'Derivatives’ leverage magnifies both gains and losses for speculators.',
          'Speculators add liquidity but bear higher risk.',
        ],
      },
    ],
    mcqs: [
      { q: 'Speculation aims to:', options: ['Reduce risk', 'Profit from expected price moves', 'Guarantee returns', 'Avoid markets'], answer: 1, explanation: 'Speculators take risk to profit from price views.' },
      { q: 'Leverage in derivatives magnifies:', options: ['Only gains', 'Both gains and losses', 'Only losses', 'Neither'], answer: 1, explanation: 'Leverage amplifies outcomes in both directions.', tricky: true },
      { q: 'Speculators contribute ______ to markets.', options: ['Illiquidity', 'Liquidity', 'Regulation', 'Dividends'], answer: 1, explanation: 'By taking the other side, speculators add liquidity.' },
      { q: 'A speculator differs from a hedger in that they:', options: ['Own the underlying to protect', 'Have no offsetting exposure', 'Never trade', 'Only use cash'], answer: 1, explanation: 'Speculators take directional risk without an underlying to hedge.' },
    ],
  },
  {
    id: 'nism-arbitrage',
    title: 'Arbitrage',
    reels: [
      {
        kind: 'concept',
        title: 'Arbitrage',
        body: [
          'Arbitrage exploits price differences for the same asset in different markets to earn a near risk-free profit.',
          'Example: cash-and-carry arbitrage between spot and futures.',
          'Arbitrage activity helps keep prices aligned and markets efficient.',
        ],
      },
    ],
    mcqs: [
      { q: 'Arbitrage seeks to profit from:', options: ['A directional bet', 'Price differences for the same asset', 'Dividends only', 'Interest'], answer: 1, explanation: 'It exploits mispricings between markets.' },
      { q: 'Arbitrage profit is ideally:', options: ['High risk', 'Near risk-free', 'Guaranteed loss', 'Random'], answer: 1, explanation: 'Classic arbitrage locks in a near risk-free gain.', tricky: true },
      { q: 'Cash-and-carry arbitrage links:', options: ['Two currencies', 'Spot and futures', 'Two bonds', 'Equity and debt'], answer: 1, explanation: 'It exploits the spot–futures basis.', tricky: true },
      { q: 'Arbitrage helps make markets more:', options: ['Volatile', 'Efficient (aligned prices)', 'Illiquid', 'Opaque'], answer: 1, explanation: 'Arbitrage corrects mispricings, improving efficiency.' },
    ],
  },
  {
    id: 'nism-option-strategies',
    title: 'Option Strategies',
    reels: [
      {
        kind: 'list',
        title: 'Option Strategies',
        body: [
          'Covered call: own stock and sell a call — earns premium, caps upside.',
          'Protective put: own stock and buy a put — insures the downside.',
          'Straddle: buy a call and put at the same strike — profits from a big move either way.',
          'Spreads (bull/bear) cap both cost and payoff.',
        ],
      },
    ],
    mcqs: [
      { q: 'A covered call involves:', options: ['Buying a call only', 'Owning stock and selling a call', 'Buying two puts', 'Shorting stock'], answer: 1, explanation: 'It earns premium on owned stock but caps upside.' },
      { q: 'A long straddle profits when the underlying:', options: ['Stays flat', 'Makes a large move either way', 'Only rises slowly', 'Pays a dividend'], answer: 1, explanation: 'A straddle gains from a big move in either direction.', tricky: true },
      { q: 'A protective put is used to:', options: ['Earn premium', 'Insure a long stock position', 'Increase leverage', 'Speculate on a crash for pure profit'], answer: 1, explanation: 'It limits downside on owned stock.' },
      { q: 'A bull call spread:', options: ['Has unlimited profit', 'Caps both cost and profit', 'Removes all risk', 'Is a naked short'], answer: 1, explanation: 'Buying a lower and selling a higher call caps cost and payoff.', tricky: true },
    ],
  },
];

const mutualFunds: Topic[] = [
  {
    id: 'nism-mf-types',
    title: 'Types of Mutual Funds',
    reels: [
      {
        kind: 'list',
        title: 'Types of Mutual Funds',
        body: [
          'By structure: open-ended (buy/redeem anytime), close-ended (fixed tenure), interval funds.',
          'By asset class: equity, debt, hybrid, and solution-oriented funds.',
          'Equity sub-types include large-cap, mid-cap, small-cap, ELSS (tax-saver) and index funds.',
        ],
      },
    ],
    mcqs: [
      { q: 'An open-ended fund lets investors:', options: ['Trade only at maturity', 'Buy and redeem units anytime at NAV', 'Never redeem', 'Buy only at NFO'], answer: 1, explanation: 'Open-ended funds continuously issue and redeem units.' },
      { q: 'ELSS funds are:', options: ['Debt funds', 'Tax-saving equity funds with a 3-year lock-in', 'Money-market funds', 'Gold funds'], answer: 1, explanation: 'ELSS are equity tax-savers under Section 80C.', tricky: true },
      { q: 'A close-ended scheme provides liquidity via:', options: ['Continuous redemption', 'Listing on an exchange', 'Guaranteed buyback', 'Daily SIPs'], answer: 1, explanation: 'Close-ended units are traded on the exchange.', tricky: true },
      { q: 'A hybrid fund invests in:', options: ['Only equity', 'A mix of asset classes (e.g. equity + debt)', 'Only gold', 'Only cash'], answer: 1, explanation: 'Hybrids blend asset classes.' },
    ],
  },
  {
    id: 'nism-nav',
    title: 'NAV',
    reels: [
      {
        kind: 'formula',
        title: 'Net Asset Value',
        body: [
          'NAV is the per-unit value of a mutual-fund scheme, computed each business day.',
          'Investors buy and redeem at NAV, adjusted for any exit load.',
          'A higher NAV is not “expensive” — it just reflects the scheme’s per-unit value.',
        ],
        formula: 'NAV = (Assets − Liabilities) ÷ Units outstanding',
      },
    ],
    mcqs: [
      { q: 'NAV per unit equals:', options: ['(Assets − Liabilities) ÷ Units', 'Assets ÷ Liabilities', 'Units × Face value', 'Return ÷ TER'], answer: 0, explanation: 'NAV = (assets − liabilities) ÷ units outstanding.' },
      { q: 'A scheme with ₹100cr assets, ₹2cr liabilities and 4cr units has NAV:', options: ['₹25.00', '₹24.50', '₹25.50', '₹2.00'], answer: 1, explanation: '(100 − 2) ÷ 4 = ₹24.50.', tricky: true },
      { q: 'A higher NAV means the fund is:', options: ['More expensive/worse value', 'Just a higher per-unit value (not worse)', 'Guaranteed to fall', 'Risk-free'], answer: 1, explanation: 'NAV level alone says nothing about future returns.', tricky: true },
      { q: 'NAV is computed:', options: ['Once a year', 'Every business day', 'Only at NFO', 'Hourly'], answer: 1, explanation: 'NAV is calculated and published daily.' },
    ],
  },
  {
    id: 'nism-sip',
    title: 'SIP',
    reels: [
      {
        kind: 'concept',
        title: 'Systematic Investment Plan',
        body: [
          'A SIP invests a fixed amount at regular intervals (e.g. monthly).',
          'It achieves rupee-cost averaging — buying more units when NAV is low, fewer when high.',
          'It instils discipline but does not guarantee returns.',
        ],
      },
    ],
    mcqs: [
      { q: 'A SIP invests:', options: ['A lump sum once', 'A fixed amount at regular intervals', 'A random amount', 'Only at market highs'], answer: 1, explanation: 'SIPs invest fixed sums periodically.' },
      { q: 'A SIP buys MORE units when NAV is:', options: ['High', 'Low', 'Fixed', 'At a peak'], answer: 1, explanation: 'A fixed sum buys more units at lower NAVs — rupee-cost averaging.', tricky: true },
      { q: 'A SIP primarily provides:', options: ['Guaranteed returns', 'Cost averaging and discipline', 'Zero risk', 'Tax exemption'], answer: 1, explanation: 'SIPs average cost and build discipline, not guarantees.' },
      { q: 'Rupee-cost averaging reduces the impact of:', options: ['Taxes', 'Market timing / volatility', 'Expense ratio', 'KYC'], answer: 1, explanation: 'Regular investing smooths out entry-price volatility.' },
    ],
  },
  {
    id: 'nism-stp',
    title: 'STP',
    reels: [
      {
        kind: 'concept',
        title: 'Systematic Transfer Plan',
        body: [
          'An STP moves a fixed amount periodically from one scheme to another (e.g. debt to equity).',
          'It is used to phase a lump sum into equities gradually, reducing timing risk.',
          'The source is often a liquid/debt fund parking the lump sum.',
        ],
      },
    ],
    mcqs: [
      { q: 'An STP transfers money:', options: ['Out of the fund house', 'Periodically from one scheme to another', 'To your bank only', 'To the government'], answer: 1, explanation: 'STP shifts funds between schemes of the same AMC.', tricky: true },
      { q: 'A common STP use is to move from:', options: ['Equity to cash suddenly', 'A debt/liquid fund into equity gradually', 'One bank to another', 'Gold to silver'], answer: 1, explanation: 'STPs phase a lump sum from debt into equity.' },
      { q: 'An STP helps reduce:', options: ['Expense ratio', 'Market-timing risk', 'KYC steps', 'Taxes to zero'], answer: 1, explanation: 'Gradual transfer averages the entry into equities.' },
      { q: 'The source scheme in an STP is often a:', options: ['Small-cap fund', 'Liquid/debt fund', 'Sector fund', 'ELSS'], answer: 1, explanation: 'A liquid or debt fund typically parks the lump sum.' },
    ],
  },
  {
    id: 'nism-swp',
    title: 'SWP',
    reels: [
      {
        kind: 'concept',
        title: 'Systematic Withdrawal Plan',
        body: [
          'An SWP withdraws a fixed amount periodically from a fund, providing a regular income stream.',
          'It is popular with retirees drawing down their corpus.',
          'Units are redeemed to fund each withdrawal, so the corpus can rise or fall depending on returns.',
        ],
      },
    ],
    mcqs: [
      { q: 'An SWP provides:', options: ['Regular investments', 'Regular withdrawals/income', 'Free shares', 'A loan'], answer: 1, explanation: 'SWP pays out a fixed amount periodically.', tricky: true },
      { q: 'SWP is especially popular with:', options: ['Day traders', 'Retirees needing income', 'IPO investors', 'Arbitrageurs'], answer: 1, explanation: 'Retirees use SWPs for a steady drawdown.' },
      { q: 'Each SWP withdrawal is funded by:', options: ['New deposits', 'Redeeming units', 'A dividend guarantee', 'Borrowing'], answer: 1, explanation: 'Units are redeemed to pay each withdrawal.' },
      { q: 'An SWP is essentially the opposite of a:', options: ['SIP', 'Buyback', 'Rights issue', 'DRHP'], answer: 0, explanation: 'SIP invests regularly; SWP withdraws regularly.', tricky: true },
    ],
  },
  {
    id: 'nism-riskometer',
    title: 'Riskometer',
    reels: [
      {
        kind: 'concept',
        title: 'The Riskometer',
        body: [
          'SEBI mandates a Riskometer on scheme documents, showing the risk level from Low to Very High.',
          'It helps investors quickly gauge a scheme’s risk before investing.',
          'The level is reviewed and can change as the portfolio changes.',
        ],
      },
    ],
    mcqs: [
      { q: 'The Riskometer displays a scheme’s:', options: ['Return guarantee', 'Risk level (Low to Very High)', 'NAV history', 'Fund manager’s name'], answer: 1, explanation: 'It signals the risk category of the scheme.' },
      { q: 'The Riskometer is mandated by:', options: ['AMFI only', 'SEBI', 'The RBI', 'The exchange'], answer: 1, explanation: 'SEBI requires the Riskometer on scheme documents.', tricky: true },
      { q: 'The highest level on the Riskometer is:', options: ['High', 'Very High', 'Extreme', 'Critical'], answer: 1, explanation: 'The scale tops out at “Very High”.' },
      { q: 'The Riskometer level can:', options: ['Never change', 'Change as the portfolio changes', 'Only rise', 'Be ignored'], answer: 1, explanation: 'It is reviewed and updated with portfolio changes.' },
    ],
  },
  {
    id: 'nism-expense-ratio',
    title: 'Expense Ratio',
    reels: [
      {
        kind: 'concept',
        title: 'Expense Ratio',
        body: [
          'The Total Expense Ratio (TER) is the annual cost of running a fund, as a percentage of assets.',
          'SEBI caps TER on a slab basis — larger funds face lower caps.',
          'Direct plans have a lower TER (no distributor commission) than Regular plans.',
        ],
      },
    ],
    mcqs: [
      { q: 'The expense ratio is:', options: ['A one-off entry fee', 'The annual cost of running the fund', 'The exit load', 'The NAV'], answer: 1, explanation: 'TER is the yearly operating cost as a % of assets.' },
      { q: 'A higher expense ratio ______ investor returns.', options: ['Raises', 'Lowers', 'Doesn’t affect', 'Doubles'], answer: 1, explanation: 'Expenses are deducted from the fund, cutting returns.' },
      { q: 'Direct plans have a ______ TER than Regular plans.', options: ['Higher', 'Lower', 'Identical', 'Zero'], answer: 1, explanation: 'Direct plans exclude distributor commission, so lower TER.', tricky: true },
      { q: 'TER is capped by:', options: ['The AMC', 'SEBI on a slab basis', 'The distributor', 'The investor'], answer: 1, explanation: 'SEBI sets slab-based maximum TERs.' },
    ],
  },
  {
    id: 'nism-fund-selection',
    title: 'Fund Selection',
    reels: [
      {
        kind: 'list',
        title: 'Selecting a Fund',
        body: [
          'Match the fund category to your goal, horizon and risk profile.',
          'Consider consistency of returns, risk-adjusted performance, expense ratio and the fund house’s track record.',
          'Past returns don’t guarantee future results — process and consistency matter more than a single year.',
        ],
      },
    ],
    mcqs: [
      { q: 'Fund selection should start with matching the fund to your:', options: ['Neighbour’s choice', 'Goal, horizon and risk profile', 'The highest 1-year return', 'The lowest NAV'], answer: 1, explanation: 'Suitability to goals and risk comes first.' },
      { q: 'A lower NAV means a fund is a better buy:', options: ['True', 'False — NAV level is irrelevant to value', 'Only for equity', 'Only for debt'], answer: 1, explanation: 'NAV level doesn’t indicate value or future return.', tricky: true },
      { q: 'Which is a sound selection factor?', options: ['Consistency and risk-adjusted returns', 'Only last month’s return', 'The fund’s logo', 'The NAV being round'], answer: 0, explanation: 'Consistency and risk-adjusted performance matter.' },
      { q: 'Past performance:', options: ['Guarantees future returns', 'Does not guarantee future results', 'Is irrelevant entirely', 'Sets the NAV'], answer: 1, explanation: 'Past returns are not a guarantee of the future.' },
    ],
  },
  {
    id: 'nism-mf-taxation',
    title: 'Taxation',
    reels: [
      {
        kind: 'concept',
        title: 'Mutual Fund Taxation',
        body: [
          'Taxation depends on fund type (equity vs debt) and holding period.',
          'Equity funds held over 12 months attract long-term capital gains; shorter is short-term.',
          'Dividends (IDCW) are taxed in the investor’s hands at their slab rate.',
        ],
        tip: 'The equity vs debt classification (and holding period) drives the tax outcome — always check current rules.',
      },
    ],
    mcqs: [
      { q: 'Equity fund gains are “long-term” after a holding period of:', options: ['1 month', 'More than 12 months', '24 months', '36 months'], answer: 1, explanation: 'Equity-fund units held over 12 months are long-term.', tricky: true },
      { q: 'Mutual-fund taxation depends on:', options: ['Only the NAV', 'Fund type and holding period', 'The distributor', 'The Riskometer'], answer: 1, explanation: 'Equity vs debt and holding period determine tax.' },
      { q: 'Dividends (IDCW) from funds are taxed:', options: ['Tax-free always', 'In the investor’s hands at slab rate', 'Only for NRIs', 'At 0.1%'], answer: 1, explanation: 'IDCW is taxable in the investor’s hands.' },
      { q: 'Short-term vs long-term classification hinges on the:', options: ['Fund logo', 'Holding period', 'NAV level', 'Broker'], answer: 1, explanation: 'The holding period sets short- vs long-term treatment.' },
    ],
  },
  {
    id: 'nism-performance-measures',
    title: 'Performance Measures',
    reels: [
      {
        kind: 'list',
        title: 'Performance Measures',
        body: [
          'Returns should be judged against a benchmark and on a risk-adjusted basis.',
          'Sharpe ratio = excess return per unit of total risk; higher is better.',
          'Alpha is return above the benchmark; beta measures market sensitivity.',
        ],
        formula: 'Sharpe = (Return − Risk-free) ÷ Std deviation',
      },
    ],
    mcqs: [
      { q: 'The Sharpe ratio measures return per unit of:', options: ['Tax', 'Total risk (volatility)', 'Fees', 'Assets'], answer: 1, explanation: 'Sharpe = excess return ÷ standard deviation.', tricky: true },
      { q: 'Alpha represents return:', options: ['Below the risk-free rate', 'Above the benchmark', 'From dividends only', 'From fees'], answer: 1, explanation: 'Alpha is out-performance versus the benchmark.', tricky: true },
      { q: 'Fund performance should be judged:', options: ['In isolation', 'Against a benchmark and risk-adjusted', 'By NAV alone', 'By logo'], answer: 1, explanation: 'Context (benchmark, risk) is essential.' },
      { q: 'A higher Sharpe ratio indicates:', options: ['Worse risk-adjusted return', 'Better risk-adjusted return', 'Higher fees', 'More tax'], answer: 1, explanation: 'Higher Sharpe means more return per unit of risk.' },
    ],
  },
];

const investmentAdviser: Topic[] = [
  {
    id: 'nism-financial-planning',
    title: 'Financial Planning',
    reels: [
      {
        kind: 'concept',
        title: 'Financial Planning',
        body: [
          'Financial planning is a structured process of meeting life goals through proper money management.',
          'Steps: gather data, set goals, analyse, recommend, implement and review.',
          'It covers cash flow, investments, insurance, tax and retirement.',
        ],
      },
    ],
    mcqs: [
      { q: 'Financial planning aims to:', options: ['Maximise trading', 'Meet life goals via money management', 'Avoid all tax', 'Time the market'], answer: 1, explanation: 'It aligns finances with life goals.' },
      { q: 'The financial-planning process ends with:', options: ['A one-off sale', 'Ongoing review and revision', 'No follow-up', 'Only tax filing'], answer: 1, explanation: 'Plans are reviewed and updated over time.', tricky: true },
      { q: 'Financial planning covers all of these EXCEPT:', options: ['Insurance', 'Retirement', 'Tax', 'A guaranteed doubling of money'], answer: 3, explanation: 'No credible plan guarantees doubling money.' },
      { q: 'The first step is typically to:', options: ['Recommend products', 'Gather client data and goals', 'Sell insurance', 'File taxes'], answer: 1, explanation: 'Data-gathering and goal-setting come first.' },
    ],
  },
  {
    id: 'nism-asset-allocation',
    title: 'Asset Allocation',
    reels: [
      {
        kind: 'concept',
        title: 'Asset Allocation',
        body: [
          'Asset allocation divides a portfolio across asset classes (equity, debt, cash, gold) based on goals and risk.',
          'It is the biggest driver of long-term portfolio outcomes.',
          'Strategic allocation sets long-run weights; tactical allocation makes short-term shifts.',
        ],
      },
    ],
    mcqs: [
      { q: 'Asset allocation divides a portfolio across:', options: ['Only stocks', 'Asset classes (equity, debt, etc.)', 'Sectors only', 'One fund'], answer: 1, explanation: 'It spreads capital across asset classes.' },
      { q: 'Asset allocation is considered the ______ driver of long-term returns.', options: ['Smallest', 'Biggest', 'Only', 'Irrelevant'], answer: 1, explanation: 'Allocation dominates long-run outcomes.', tricky: true },
      { q: 'Long-run target weights are set by ______ allocation.', options: ['Tactical', 'Strategic', 'Random', 'Reverse'], answer: 1, explanation: 'Strategic allocation sets the long-term mix.', tricky: true },
      { q: 'A more risk-averse investor would hold ______ equity.', options: ['More', 'Less', 'Only', 'No debt and more'], answer: 1, explanation: 'Lower risk tolerance means a smaller equity weight.' },
    ],
  },
  {
    id: 'nism-retirement-planning',
    title: 'Retirement Planning',
    reels: [
      {
        kind: 'concept',
        title: 'Retirement Planning',
        body: [
          'Retirement planning estimates the corpus needed to fund post-work life and builds toward it.',
          'It accounts for inflation, life expectancy and the withdrawal rate.',
          'Starting early harnesses compounding, dramatically reducing the required monthly saving.',
        ],
      },
    ],
    mcqs: [
      { q: 'A key input in retirement planning is:', options: ['Yesterday’s NAV', 'Inflation and life expectancy', 'The broker’s fee', 'The Riskometer only'], answer: 1, explanation: 'Inflation and longevity shape the corpus needed.' },
      { q: 'Starting retirement saving early primarily helps via:', options: ['Higher fees', 'Compounding', 'Lower taxes only', 'Market timing'], answer: 1, explanation: 'Early starts let compounding do more of the work.', tricky: true },
      { q: 'The retirement corpus must account for:', options: ['Only today’s expenses', 'Future inflation-adjusted expenses', 'No expenses', 'Broker commissions'], answer: 1, explanation: 'Future costs rise with inflation.' },
      { q: 'A higher withdrawal rate in retirement:', options: ['Extends the corpus', 'Risks depleting the corpus faster', 'Has no effect', 'Guarantees income'], answer: 1, explanation: 'Drawing more quickly can exhaust savings sooner.' },
    ],
  },
  {
    id: 'nism-insurance-planning',
    title: 'Insurance Planning',
    reels: [
      {
        kind: 'concept',
        title: 'Insurance Planning',
        body: [
          'Insurance protects against financial loss from risks like death, illness or disability.',
          'Term life insurance offers pure protection at low cost; it is usually the efficient choice for cover.',
          'Insurance should be treated as protection, not primarily as an investment.',
        ],
      },
    ],
    mcqs: [
      { q: 'The primary purpose of insurance is:', options: ['Investment returns', 'Protection against financial loss', 'Tax evasion', 'Trading'], answer: 1, explanation: 'Insurance is fundamentally about risk protection.' },
      { q: 'The most cost-efficient pure life cover is usually:', options: ['Endowment', 'Term insurance', 'ULIP', 'Money-back'], answer: 1, explanation: 'Term plans give the most cover per rupee.', tricky: true },
      { q: 'Insurance should be viewed primarily as:', options: ['An investment', 'Protection', 'A trading tool', 'A tax scheme'], answer: 1, explanation: 'Its core role is protection, not returns.' },
      { q: 'A person with dependents needs life cover that is:', options: ['Minimal', 'Adequate to replace income/meet needs', 'Zero', 'Only for tax'], answer: 1, explanation: 'Cover should meet dependents’ needs and liabilities.' },
    ],
  },
  {
    id: 'nism-goal-planning',
    title: 'Goal Planning',
    reels: [
      {
        kind: 'concept',
        title: 'Goal Planning',
        body: [
          'Goal planning attaches money targets and time horizons to specific life goals (house, education, retirement).',
          'Goals are prioritised and matched to suitable investments by horizon and risk.',
          'Short-term goals favour safer assets; long-term goals can take more equity risk.',
        ],
      },
    ],
    mcqs: [
      { q: 'Goal planning links investments to:', options: ['Random targets', 'Specific goals with amounts and horizons', 'Only tax', 'Broker targets'], answer: 1, explanation: 'Each goal gets an amount and time horizon.' },
      { q: 'A short-term goal (1–2 years) should favour:', options: ['Small-cap equity', 'Safer, liquid assets', 'Only crypto', 'Leverage'], answer: 1, explanation: 'Short horizons need capital safety.', tricky: true },
      { q: 'A long-term goal can afford:', options: ['No risk at all', 'More equity exposure', 'Only cash', 'Only gold'], answer: 1, explanation: 'Longer horizons can ride out equity volatility.' },
      { q: 'Goals should be:', options: ['Vague', 'Prioritised and matched to investments', 'Ignored', 'All identical'], answer: 1, explanation: 'Prioritising and matching to horizon/risk is key.' },
    ],
  },
  {
    id: 'nism-tax-planning',
    title: 'Tax Planning',
    reels: [
      {
        kind: 'concept',
        title: 'Tax Planning',
        body: [
          'Tax planning legally arranges finances to minimise tax within the law (not evasion).',
          'It uses deductions and exemptions such as Section 80C (e.g. ELSS, PPF, insurance).',
          'It should support, not distort, the overall financial plan.',
        ],
      },
    ],
    mcqs: [
      { q: 'Legitimate tax planning is:', options: ['Illegal evasion', 'Legal minimisation within the law', 'Hiding income', 'Never allowed'], answer: 1, explanation: 'Planning is lawful; evasion is not.', tricky: true },
      { q: 'ELSS gives a deduction under:', options: ['Section 24', 'Section 80C', 'Section 10', 'Section 44'], answer: 1, explanation: 'ELSS qualifies for the 80C deduction.' },
      { q: 'Tax planning should:', options: ['Override all goals', 'Support the overall financial plan', 'Ignore risk', 'Maximise churn'], answer: 1, explanation: 'Tax should fit the plan, not distort it.' },
      { q: 'Choosing a poor investment only for tax benefit is:', options: ['Ideal', 'A common mistake', 'Required', 'Risk-free'], answer: 1, explanation: 'Tax tail should not wag the investment dog.' },
    ],
  },
  {
    id: 'nism-client-profiling',
    title: 'Client Profiling',
    reels: [
      {
        kind: 'concept',
        title: 'Client Profiling',
        body: [
          'Client profiling gathers financial data, goals, risk tolerance and constraints to build suitable advice.',
          'It underpins suitability — recommendations must fit the profile.',
          'Profiles are reviewed as circumstances change.',
        ],
      },
    ],
    mcqs: [
      { q: 'Client profiling captures goals, constraints and:', options: ['The NAV', 'Risk tolerance', 'The broker’s fee', 'The index level'], answer: 1, explanation: 'Risk tolerance is central to the profile.' },
      { q: 'Profiling is the basis for:', options: ['Front-running', 'Suitable advice (suitability)', 'Insider trading', 'Arbitrage'], answer: 1, explanation: 'Suitability flows from the client profile.', tricky: true },
      { q: 'A client’s profile should be:', options: ['Fixed forever', 'Reviewed as circumstances change', 'Ignored', 'Shared publicly'], answer: 1, explanation: 'Profiles are updated over time.' },
      { q: 'Recommending an unsuitable product breaches:', options: ['Nothing', 'The suitability principle', 'A tax rule', 'A trading limit'], answer: 1, explanation: 'Advice must suit the client’s profile.' },
    ],
  },
  {
    id: 'nism-ia-ethics',
    title: 'Ethics',
    reels: [
      {
        kind: 'concept',
        title: 'Adviser Ethics',
        body: [
          'A registered investment adviser owes a fiduciary duty to act in the client’s best interest.',
          'Advisers must disclose conflicts, avoid mis-selling and separate advice from distribution where required.',
          'Fees and any commissions must be transparent.',
        ],
      },
    ],
    mcqs: [
      { q: 'An investment adviser owes clients a:', options: ['Sales target', 'Fiduciary duty', 'Trading quota', 'Commission first'], answer: 1, explanation: 'RIAs must act in the client’s best interest.', tricky: true },
      { q: 'Conflicts of interest must be:', options: ['Hidden', 'Disclosed', 'Exploited', 'Ignored'], answer: 1, explanation: 'Advisers must disclose conflicts.' },
      { q: 'Mis-selling means:', options: ['Selling suitable products', 'Selling unsuitable products to earn commission', 'Full disclosure', 'Fee transparency'], answer: 1, explanation: 'Mis-selling pushes unsuitable products for gain.' },
      { q: 'Adviser fees should be:', options: ['Hidden', 'Transparent', 'Unlimited', 'Paid in secret'], answer: 1, explanation: 'Fees and commissions must be transparent.' },
    ],
  },
];

const researchAnalyst: Topic[] = [
  {
    id: 'nism-industry-analysis',
    title: 'Industry Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Industry Analysis',
        body: [
          'Industry analysis assesses the attractiveness and dynamics of the sector a company operates in.',
          'Porter’s Five Forces examines rivalry, new entrants, substitutes, and buyer and supplier power.',
          'It sets the context for company-level analysis.',
        ],
      },
    ],
    mcqs: [
      { q: 'A framework for industry analysis is:', options: ['DuPont', 'Porter’s Five Forces', 'CAPM', 'Black-Scholes'], answer: 1, explanation: 'Porter’s Five Forces analyses industry competitive dynamics.', tricky: true },
      { q: 'Which is one of Porter’s Five Forces?', options: ['Threat of new entrants', 'Dividend yield', 'Beta', 'Duration'], answer: 0, explanation: 'New entrants is one of the five forces.' },
      { q: 'Industry analysis sets the context for:', options: ['Currency trading', 'Company-level analysis', 'Tax filing', 'Settlement'], answer: 1, explanation: 'It frames the sector before analysing a firm.' },
      { q: 'Strong buyer power in an industry tends to:', options: ['Raise profitability', 'Pressure prices and margins', 'Have no effect', 'Guarantee growth'], answer: 1, explanation: 'Powerful buyers squeeze prices and margins.' },
    ],
  },
  {
    id: 'nism-economic-analysis',
    title: 'Economic Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Economic Analysis',
        body: [
          'Economic (macro) analysis examines growth, inflation, interest rates and policy that affect all companies.',
          'It is the top of the top-down “E-I-C” approach: Economy → Industry → Company.',
          'Macro trends shape earnings, valuations and sector rotation.',
        ],
      },
    ],
    mcqs: [
      { q: 'In the E-I-C approach, E stands for:', options: ['Equity', 'Economy', 'Earnings', 'Exchange'], answer: 1, explanation: 'E-I-C = Economy, Industry, Company.' },
      { q: 'Economic analysis studies factors like:', options: ['A single stock’s chart', 'Growth, inflation and rates', 'One firm’s dividend', 'Order types'], answer: 1, explanation: 'It covers economy-wide drivers.', tricky: true },
      { q: 'Rising interest rates generally:', options: ['Boost all valuations', 'Pressure valuations (higher discount rate)', 'Have no effect', 'Only help banks'], answer: 1, explanation: 'Higher rates raise discount rates, pressuring valuations.' },
      { q: 'The top-down approach starts with the:', options: ['Company', 'Economy', 'Chart', 'Broker'], answer: 1, explanation: 'Top-down begins at the macro (economy) level.' },
    ],
  },
  {
    id: 'nism-company-analysis',
    title: 'Company Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Company Analysis',
        body: [
          'Company analysis examines the business model, competitive position, management and financials.',
          'Qualitative factors (moat, management) complement quantitative ones (growth, margins, returns).',
          'It leads to a view on intrinsic value versus market price.',
        ],
      },
    ],
    mcqs: [
      { q: 'Company analysis combines:', options: ['Only charts', 'Qualitative and quantitative factors', 'Only macro data', 'Only order types'], answer: 1, explanation: 'It weighs business quality and financial metrics.' },
      { q: 'A durable competitive advantage is often called a:', options: ['Moat', 'Coupon', 'Basis', 'Peg'], answer: 0, explanation: 'A “moat” protects a company’s returns.', tricky: true },
      { q: 'Company analysis ultimately compares intrinsic value with:', options: ['The coupon', 'The market price', 'The tax rate', 'The NAV'], answer: 1, explanation: 'It judges whether the stock is under/over-valued.' },
      { q: 'Management quality is a ______ factor.', options: ['Quantitative', 'Qualitative', 'Technical', 'Macro'], answer: 1, explanation: 'Management is a qualitative consideration.' },
    ],
  },
  {
    id: 'nism-financial-statements',
    title: 'Financial Statements',
    reels: [
      {
        kind: 'list',
        title: 'Financial Statements',
        body: [
          'The three statements are the income statement, balance sheet and cash-flow statement.',
          'They reveal profitability, financial position and cash generation.',
          'Analysts read them together — profit is an opinion, cash is a fact.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which statement shows financial position at a point in time?', options: ['Income statement', 'Balance sheet', 'Cash-flow statement', 'Notes'], answer: 1, explanation: 'The balance sheet is a snapshot of position.' },
      { q: 'The income statement reports:', options: ['Position at a date', 'Performance over a period', 'Only cash', 'Only assets'], answer: 1, explanation: 'It shows revenues and expenses over a period.' },
      { q: 'The cash-flow statement reconciles profit to:', options: ['Revenue', 'Actual cash', 'Assets', 'Equity'], answer: 1, explanation: 'It bridges accrual profit to cash movements.', tricky: true },
      { q: 'Analysts value cash-flow data because:', options: ['Profit can be manipulated; cash is harder to fake', 'Cash is irrelevant', 'It sets the NAV', 'It is optional'], answer: 0, explanation: 'Cash is a fact, profit an opinion.' },
    ],
  },
  {
    id: 'nism-ratio-analysis',
    title: 'Ratio Analysis',
    reels: [
      {
        kind: 'list',
        title: 'Ratio Analysis',
        body: [
          'Ratios interpret financial statements: liquidity (current ratio), profitability (net margin, ROE), leverage (debt-to-equity).',
          'Efficiency ratios (inventory turnover, receivable days) show how well assets are used.',
          'Ratios are most useful compared to peers and over time.',
        ],
      },
    ],
    mcqs: [
      { q: 'The current ratio measures:', options: ['Profitability', 'Short-term liquidity', 'Leverage', 'Growth'], answer: 1, explanation: 'Current assets ÷ current liabilities gauges liquidity.' },
      { q: 'ROE relates net income to:', options: ['Assets', 'Equity', 'Revenue', 'Debt'], answer: 1, explanation: 'ROE = net income ÷ equity.', tricky: true },
      { q: 'Debt-to-equity measures:', options: ['Liquidity', 'Leverage', 'Margin', 'Turnover'], answer: 1, explanation: 'D/E gauges financial leverage.' },
      { q: 'Ratios are most meaningful when:', options: ['Viewed alone', 'Compared to peers and history', 'Ignored', 'Rounded'], answer: 1, explanation: 'Comparison gives ratios context.' },
    ],
  },
  {
    id: 'nism-valuation',
    title: 'Valuation',
    reels: [
      {
        kind: 'concept',
        title: 'Valuation',
        body: [
          'Valuation estimates what a company is worth. Absolute methods (DCF, DDM) use its own cash flows.',
          'Relative methods use multiples like P/E, P/B and EV/EBITDA versus peers.',
          'Analysts triangulate methods into a value range.',
        ],
      },
    ],
    mcqs: [
      { q: 'A DCF is an example of:', options: ['Relative valuation', 'Absolute valuation', 'Technical analysis', 'Ratio analysis'], answer: 1, explanation: 'A DCF derives value from a firm’s own cash flows.' },
      { q: 'P/E and EV/EBITDA are:', options: ['Absolute methods', 'Relative multiples', 'Chart patterns', 'Macro tools'], answer: 1, explanation: 'They value a firm relative to peers.', tricky: true },
      { q: 'The Dividend Discount Model is least suited to:', options: ['Stable dividend payers', 'Firms paying no dividends', 'Utilities', 'Banks'], answer: 1, explanation: 'With no dividends, the DDM has no cash flows to discount.', tricky: true },
      { q: 'Best practice is to:', options: ['Use one method', 'Triangulate several into a range', 'Use the highest value', 'Ignore the DCF'], answer: 1, explanation: 'Cross-checking methods gives a defensible range.' },
    ],
  },
  {
    id: 'nism-report-writing',
    title: 'Report Writing',
    reels: [
      {
        kind: 'concept',
        title: 'Research Report Writing',
        body: [
          'A research report presents a recommendation (buy/hold/sell), a target price and the supporting rationale.',
          'It should be clear, balanced, and disclose assumptions, risks and conflicts of interest.',
          'SEBI requires research analysts to make specific disclosures.',
        ],
      },
    ],
    mcqs: [
      { q: 'A research report’s recommendation is typically:', options: ['Buy / Hold / Sell', 'Only Buy', 'A tax filing', 'A trade confirmation'], answer: 0, explanation: 'Reports give a buy/hold/sell view with a target.' },
      { q: 'A good report must disclose:', options: ['Nothing', 'Assumptions, risks and conflicts of interest', 'Only the target', 'The analyst’s salary'], answer: 1, explanation: 'Transparency on assumptions, risks and conflicts is required.', tricky: true },
      { q: 'Research analysts’ disclosures are mandated by:', options: ['AMFI', 'SEBI', 'The RBI', 'The exchange only'], answer: 1, explanation: 'SEBI’s RA regulations require disclosures.' },
      { q: 'A report should be:', options: ['One-sided', 'Clear and balanced', 'Vague', 'Undated'], answer: 1, explanation: 'Balance and clarity are hallmarks of quality research.' },
    ],
  },
  {
    id: 'nism-ra-compliance',
    title: 'Compliance',
    reels: [
      {
        kind: 'concept',
        title: 'Research Analyst Compliance',
        body: [
          'Registered research analysts must follow SEBI (Research Analysts) Regulations.',
          'Rules cover disclosures, managing conflicts, restrictions on personal trading around reports, and record-keeping.',
          'Independence and objectivity are central.',
        ],
      },
    ],
    mcqs: [
      { q: 'Research analysts in India are regulated by:', options: ['AMFI', 'SEBI', 'The RBI', 'IRDAI'], answer: 1, explanation: 'The SEBI (Research Analysts) Regulations apply.' },
      { q: 'Trading personally to benefit from one’s own recommendation is:', options: ['Encouraged', 'A conflict that is restricted/prohibited', 'Required', 'Tax-free'], answer: 1, explanation: 'Personal trading around reports is restricted to protect integrity.', tricky: true },
      { q: 'A core value for analysts is:', options: ['Dependence on issuers', 'Independence and objectivity', 'Maximising commissions', 'Secrecy'], answer: 1, explanation: 'Objectivity underpins credible research.' },
      { q: 'Compliance requires analysts to keep:', options: ['No records', 'Proper records of research and disclosures', 'Only verbal notes', 'Client passwords'], answer: 1, explanation: 'Record-keeping is a compliance requirement.' },
    ],
  },
];

const debtMarket: Topic[] = [
  {
    id: 'nism-gsec',
    title: 'Government Securities',
    reels: [
      {
        kind: 'concept',
        title: 'Government Securities (G-secs)',
        body: [
          'G-secs are debt instruments issued by the government to fund its borrowing.',
          'They are considered virtually risk-free (sovereign) and set the benchmark yield.',
          'In India they are issued via RBI auctions.',
        ],
      },
    ],
    mcqs: [
      { q: 'G-secs are issued by the:', options: ['Companies', 'Government', 'Stock exchange', 'Mutual funds'], answer: 1, explanation: 'Government securities fund government borrowing.' },
      { q: 'G-secs are regarded as:', options: ['High-risk', 'Virtually risk-free (sovereign)', 'Equity', 'Currency'], answer: 1, explanation: 'Sovereign bonds carry minimal default risk.' },
      { q: 'In India, G-secs are auctioned by the:', options: ['SEBI', 'RBI', 'NSE', 'AMFI'], answer: 1, explanation: 'The RBI conducts G-sec auctions.', tricky: true },
      { q: 'G-sec yields serve as the:', options: ['Benchmark/risk-free rate', 'Equity index', 'Currency peg', 'Coupon of stocks'], answer: 0, explanation: 'They anchor the risk-free benchmark.' },
    ],
  },
  {
    id: 'nism-debt-corp-bonds',
    title: 'Corporate Bonds',
    reels: [
      {
        kind: 'concept',
        title: 'Corporate Bonds',
        body: [
          'Corporate bonds are debt issued by companies, paying more than G-secs to compensate for credit risk.',
          'The extra yield is the credit spread; ratings gauge default risk.',
          'They can be secured or unsecured.',
        ],
      },
    ],
    mcqs: [
      { q: 'Corporate bonds yield more than G-secs because of:', options: ['Lower risk', 'Credit (default) risk', 'Tax breaks', 'Shorter maturity always'], answer: 1, explanation: 'The credit spread compensates for default risk.' },
      { q: 'The extra yield over a G-sec is the:', options: ['Coupon', 'Credit spread', 'Duration', 'Par'], answer: 1, explanation: 'Credit spread rewards credit risk.', tricky: true },
      { q: 'Credit ratings gauge a bond’s:', options: ['Liquidity only', 'Default risk', 'Currency', 'Coupon frequency'], answer: 1, explanation: 'Ratings assess default likelihood.' },
      { q: 'A secured bond is backed by:', options: ['Nothing', 'Specific collateral', 'Equity', 'A dividend'], answer: 1, explanation: 'Secured bonds pledge collateral.' },
    ],
  },
  {
    id: 'nism-tbills',
    title: 'Treasury Bills',
    reels: [
      {
        kind: 'concept',
        title: 'Treasury Bills',
        body: [
          'T-bills are short-term government securities maturing within a year (91, 182 or 364 days in India).',
          'They pay no coupon and are issued at a discount, redeemed at par.',
          'They are among the safest, most liquid instruments.',
        ],
      },
    ],
    mcqs: [
      { q: 'Treasury bills mature within:', options: ['1 year', '5 years', '10 years', '30 years'], answer: 0, explanation: 'T-bills are short-term (≤1 year).' },
      { q: 'T-bills pay interest by:', options: ['A regular coupon', 'Being issued at a discount to par', 'A dividend', 'Nothing'], answer: 1, explanation: 'Zero-coupon T-bills are bought at a discount, redeemed at par.', tricky: true },
      { q: 'Indian T-bill tenors include:', options: ['91, 182, 364 days', '2, 5, 10 years', 'Perpetual', '30 days only'], answer: 0, explanation: 'T-bills are issued in 91, 182 and 364-day tenors.', tricky: true },
      { q: 'T-bills are prized for:', options: ['High yield', 'Safety and liquidity', 'Voting rights', 'Ownership'], answer: 1, explanation: 'They are very safe and liquid.' },
    ],
  },
  {
    id: 'nism-commercial-paper',
    title: 'Commercial Paper',
    reels: [
      {
        kind: 'concept',
        title: 'Commercial Paper',
        body: [
          'Commercial paper (CP) is short-term unsecured debt issued by corporations to meet working-capital needs.',
          'It is issued at a discount to face value, like a zero-coupon instrument.',
          'Only financially strong companies can issue CP at attractive rates.',
        ],
      },
    ],
    mcqs: [
      { q: 'Commercial paper is issued by:', options: ['The government', 'Corporations', 'The RBI', 'Individuals'], answer: 1, explanation: 'CP is short-term corporate borrowing.' },
      { q: 'Commercial paper is:', options: ['Secured long-term debt', 'Short-term unsecured debt', 'Equity', 'A derivative'], answer: 1, explanation: 'CP is unsecured, short-term corporate debt.', tricky: true },
      { q: 'CP is typically issued at:', options: ['A premium', 'A discount to face value', 'Par with high coupon', 'Random prices'], answer: 1, explanation: 'Like a zero, CP is discounted.' },
      { q: 'CP is generally accessible only to:', options: ['Weak firms', 'Financially strong companies', 'Individuals', 'Governments'], answer: 1, explanation: 'Strong credit quality is needed to issue CP well.' },
    ],
  },
  {
    id: 'nism-cds',
    title: 'Certificates of Deposit',
    reels: [
      {
        kind: 'concept',
        title: 'Certificates of Deposit',
        body: [
          'A certificate of deposit (CD) is a short-term negotiable instrument issued by banks against deposits.',
          'It is issued at a discount and is tradable in the money market.',
          'CDs help banks raise short-term funds.',
        ],
      },
    ],
    mcqs: [
      { q: 'Certificates of Deposit are issued by:', options: ['Corporations', 'Banks', 'The government', 'Mutual funds'], answer: 1, explanation: 'Banks issue CDs to raise short-term funds.', tricky: true },
      { q: 'CDs are a ______ instrument.', options: ['Long-term equity', 'Short-term money-market', 'Perpetual', 'Derivative'], answer: 1, explanation: 'CDs are short-term money-market instruments.' },
      { q: 'CDs are typically issued at:', options: ['A premium', 'A discount', 'A fixed high coupon', 'Par with dividend'], answer: 1, explanation: 'Like other money-market paper, CDs are discounted.' },
      { q: 'Commercial paper is to corporations as a CD is to:', options: ['Governments', 'Banks', 'Individuals', 'Exchanges'], answer: 1, explanation: 'CP is issued by companies; CDs by banks.', tricky: true },
    ],
  },
  {
    id: 'nism-debt-yield-curve',
    title: 'Yield Curve',
    reels: [
      {
        kind: 'concept',
        title: 'The Yield Curve (Debt)',
        body: [
          'The yield curve plots yields across maturities for the same class of debt.',
          'Its shape reflects expectations for rates, growth and inflation.',
          'It is used to price bonds and gauge the economic outlook.',
        ],
      },
    ],
    mcqs: [
      { q: 'The yield curve plots yield against:', options: ['Credit rating', 'Maturity', 'Currency', 'Coupon frequency'], answer: 1, explanation: 'It maps yield across maturities.' },
      { q: 'An inverted curve (short > long) can signal:', options: ['A boom', 'A possible recession', 'Higher dividends', 'A peg'], answer: 1, explanation: 'Inversion has preceded recessions.', tricky: true },
      { q: 'A normal yield curve slopes:', options: ['Downward', 'Upward', 'Flat', 'Vertical'], answer: 1, explanation: 'Longer maturities usually yield more.' },
      { q: 'The curve is used to:', options: ['Price bonds and read the outlook', 'Set corporate tax', 'Issue equity', 'Pay dividends'], answer: 0, explanation: 'It informs bond pricing and the economic view.' },
    ],
  },
  {
    id: 'nism-debt-bond-pricing',
    title: 'Bond Pricing',
    reels: [
      {
        kind: 'formula',
        title: 'Bond Pricing',
        body: [
          'A bond’s price is the present value of its coupons and principal, discounted at the market yield.',
          'Price and yield move inversely; longer duration means more price sensitivity.',
          'Above par = premium (coupon > yield); below par = discount (coupon < yield).',
        ],
        formula: 'Price = Σ Coupon ÷ (1 + y)ᵗ + Par ÷ (1 + y)ⁿ',
      },
    ],
    mcqs: [
      { q: 'A bond’s price is the present value of its:', options: ['Dividends', 'Coupons and principal', 'Share price', 'Tax'], answer: 1, explanation: 'Discount the cash flows at the market yield.' },
      { q: 'When yields rise, bond prices:', options: ['Rise', 'Fall', 'Stay flat', 'Double'], answer: 1, explanation: 'Price and yield are inversely related.' },
      { q: 'A bond priced above par has a coupon ______ the market yield.', options: ['Below', 'Above', 'Equal to', 'Unrelated to'], answer: 1, explanation: 'Premium bonds carry coupons above the market yield.', tricky: true },
      { q: 'Greater duration means:', options: ['Less price sensitivity', 'More price sensitivity to yields', 'No sensitivity', 'Higher coupon'], answer: 1, explanation: 'Longer duration amplifies price moves.' },
    ],
  },
];

export const nism: Course = {
  id: 'nism',
  title: 'NISM Certifications',
  shortTitle: 'NISM',
  provider: 'NISM · SEBI',
  accent: '#5e8a5f',
  glyph: '🏛️',
  tagline:
    'The SEBI-mandated certifications for India’s securities-market professionals — foundation, equity, derivatives, mutual funds, advisory, research and debt.',
  overview: [
    'The National Institute of Securities Markets (NISM) is a public trust established by SEBI, the securities-market regulator of India, to build market expertise.',
    'NISM Certification Examinations are mandatory for many roles — mutual-fund distributors, derivatives dealers, research analysts, investment advisers, depository participants and more — under SEBI regulations.',
    'This course covers the shared foundation and the flagship segments: equity markets, derivatives, mutual funds, investment advisory, research analysis and the debt market.',
  ],
  examPattern: {
    format: 'Computer-based, mostly multiple-choice (some series include case studies)',
    duration: '2 hours (typical)',
    questions: '100 questions of 1 mark each (varies by series; some 60–100)',
    passing: '60% for most series (50% for some, e.g. Series V-A); certificate valid 3 years',
    validity: '3 years (renewable via CPE / re-examination)',
    fee: '≈ ₹1,500 + taxes per attempt (varies by series)',
    negativeMarking: '25% negative marking on some series (e.g. Series VIII); none on others (e.g. V-A)',
  },
  sources: [
    { name: 'NISM — official certifications', url: 'https://www.nism.ac.in/certification/' },
    { name: 'SEBI — Securities and Exchange Board of India', url: 'https://www.sebi.gov.in/' },
    { name: 'NISM Registration Portal', url: 'https://certifications.nism.ac.in/' },
  ],
  modules: [
    {
      id: 'nism-framework',
      title: 'Common Foundation',
      summary:
        'The shared base — Indian markets, SEBI regulation, participants, products, investor protection, ethics, KYC/AML and risk profiling.',
      topics: foundation,
    },
    {
      id: 'nism-equity',
      title: 'Equity Markets',
      summary:
        'Equity shares end to end — IPOs, rights, bonus, buybacks, corporate actions, indices, trading and settlement.',
      topics: equityMarkets,
    },
    {
      id: 'nism-deriv',
      title: 'Derivatives',
      summary:
        'Futures, options, swaps and forwards — margins, MTM, the Greeks, and hedging, speculation and arbitrage.',
      topics: derivatives,
    },
    {
      id: 'nism-mf',
      title: 'Mutual Funds',
      summary:
        'Fund types, NAV, SIP/STP/SWP, the Riskometer, expense ratio, selection, taxation and performance measures.',
      topics: mutualFunds,
    },
    {
      id: 'nism-ia',
      title: 'Investment Adviser',
      summary:
        'Financial planning, asset allocation, retirement, insurance, goals, tax planning, client profiling and ethics.',
      topics: investmentAdviser,
    },
    {
      id: 'nism-ra',
      title: 'Research Analyst',
      summary:
        'Economic, industry and company analysis, financial statements, ratios, valuation, report writing and compliance.',
      topics: researchAnalyst,
    },
    {
      id: 'nism-debt',
      title: 'Debt Market',
      summary:
        'Government securities, corporate bonds, T-bills, commercial paper, CDs, the yield curve and bond pricing.',
      topics: debtMarket,
    },
  ],
};
