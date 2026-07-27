import type { Course, Topic } from '../types';

// Topic-by-topic build of the NCFM syllabus. Module ids ncfm-overview /
// ncfm-capital / ncfm-analysis / ncfm-deriv are kept so their Deep Dive sets
// in extras.ts merge.

const marketsProducts: Topic[] = [
  {
    id: 'ncfm-financial-markets',
    title: 'Financial Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Financial Markets',
        body: [
          'Financial markets channel savings to investment, letting entities raise capital and investors trade.',
          'They split into money markets (short-term) and capital markets (long-term).',
          'SEBI regulates India’s securities markets; NSE and BSE are the main exchanges.',
        ],
      },
    ],
    mcqs: [
      { q: 'Financial markets primarily:', options: ['Print money', 'Channel savings to investment', 'Set tax law', 'Manufacture goods'], answer: 1, explanation: 'They connect savers and users of capital.' },
      { q: 'Long-term funds are raised in the:', options: ['Money market', 'Capital market', 'FX market', 'Spot only'], answer: 1, explanation: 'Capital markets handle long-term securities.', tricky: true },
      { q: 'India’s securities-market regulator is:', options: ['RBI', 'SEBI', 'IRDAI', 'AMFI'], answer: 1, explanation: 'SEBI regulates the securities markets.' },
      { q: 'The two main Indian stock exchanges are:', options: ['NSE and BSE', 'NSDL and CDSL', 'SEBI and RBI', 'MCX and NCDEX only'], answer: 0, explanation: 'NSE and BSE are the primary equity exchanges.' },
    ],
  },
  {
    id: 'ncfm-primary-market',
    title: 'Primary Market',
    reels: [
      {
        kind: 'concept',
        title: 'Primary Market',
        body: [
          'The primary market is where securities are issued for the first time, raising fresh capital for the issuer.',
          'Routes include IPOs, FPOs, rights issues and private placements.',
          'Pricing is via book-building (a band) or a fixed price; investors apply through ASBA.',
        ],
      },
    ],
    mcqs: [
      { q: 'The primary market is where securities are:', options: ['Traded between investors', 'Issued for the first time', 'Delisted', 'Only lent'], answer: 1, explanation: 'It handles first-time issuance, raising capital.' },
      { q: 'A first public issue of shares is an:', options: ['FPO', 'IPO', 'OFS', 'ETF'], answer: 1, explanation: 'The first issue is an IPO.' },
      { q: 'Under ASBA, application money is:', options: ['Debited at once', 'Blocked until allotment', 'Non-refundable', 'Paid to promoters'], answer: 1, explanation: 'ASBA blocks funds until allotment.', tricky: true },
      { q: 'The issuer receives fresh capital in the:', options: ['Secondary market', 'Primary market', 'Money market only', 'FX market'], answer: 1, explanation: 'Primary-market issuance funds the issuer.' },
    ],
  },
  {
    id: 'ncfm-secondary-market',
    title: 'Secondary Market',
    reels: [
      {
        kind: 'concept',
        title: 'Secondary Market',
        body: [
          'The secondary market is where already-issued securities trade between investors on exchanges.',
          'The issuer gets no new money; it provides liquidity and price discovery.',
          'Trades settle on a T+1 rolling basis in Indian equities.',
        ],
      },
    ],
    mcqs: [
      { q: 'In the secondary market, the issuer receives:', options: ['Fresh capital', 'No new money', 'A dividend', 'A coupon'], answer: 1, explanation: 'Trades are between investors; the issuer gets nothing.', tricky: true },
      { q: 'Indian equities settle on:', options: ['T+5', 'T+3', 'T+1', 'Same day'], answer: 2, explanation: 'Equity settlement is T+1.' },
      { q: 'The secondary market provides:', options: ['Only new issuance', 'Liquidity and price discovery', 'Guaranteed returns', 'Tax exemption'], answer: 1, explanation: 'It lets investors trade and sets prices.' },
      { q: 'An example of the secondary market is:', options: ['An IPO', 'Trading shares on NSE', 'A rights issue', 'A private placement'], answer: 1, explanation: 'Exchange trading of listed shares is secondary.' },
    ],
  },
  {
    id: 'ncfm-equity-markets',
    title: 'Equity Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Equity Markets',
        body: [
          'Equity markets trade ownership shares of listed companies.',
          'Returns come from price appreciation and dividends; equity is the most junior claim.',
          'Indices like NIFTY 50 track the broad market.',
        ],
      },
    ],
    mcqs: [
      { q: 'A share represents:', options: ['A loan', 'Ownership in a company', 'A currency', 'A bond'], answer: 1, explanation: 'Equity is ownership.' },
      { q: 'Equity returns come from dividends and:', options: ['Coupons', 'Price appreciation', 'Interest', 'Tax refunds'], answer: 1, explanation: 'Capital gains plus dividends.' },
      { q: 'The NSE benchmark index is:', options: ['SENSEX', 'NIFTY 50', 'Dow', 'FTSE'], answer: 1, explanation: 'NIFTY 50 is NSE’s benchmark.', tricky: true },
      { q: 'Equity holders have a ______ claim.', options: ['Senior', 'Residual (junior)', 'Fixed', 'Guaranteed'], answer: 1, explanation: 'Equity ranks last, after creditors.' },
    ],
  },
  {
    id: 'ncfm-debt-markets',
    title: 'Debt Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Debt Markets',
        body: [
          'Debt markets trade bonds and debentures issued by governments and companies.',
          'G-secs are the risk-free benchmark; corporate bonds pay a credit spread above them.',
          'Prices move inversely with interest rates.',
        ],
      },
    ],
    mcqs: [
      { q: 'Government securities are considered:', options: ['High-risk', 'Virtually risk-free', 'Equity', 'Currency'], answer: 1, explanation: 'Sovereign bonds carry minimal default risk.' },
      { q: 'Corporate bonds pay more than G-secs due to:', options: ['Lower risk', 'Credit risk (spread)', 'Tax breaks', 'Shorter maturity'], answer: 1, explanation: 'The credit spread compensates for default risk.', tricky: true },
      { q: 'Bond prices move ______ with interest rates.', options: ['Directly', 'Inversely', 'Randomly', 'Not at all'], answer: 1, explanation: 'Price and yield are inversely related.' },
      { q: 'A debenture is a type of:', options: ['Equity', 'Debt', 'Derivative', 'Currency'], answer: 1, explanation: 'Debentures are debt instruments.' },
    ],
  },
  {
    id: 'ncfm-money-markets',
    title: 'Money Markets',
    reels: [
      {
        kind: 'list',
        title: 'Money Markets',
        body: [
          'Money markets trade short-term debt (≤1 year): T-bills, commercial paper, certificates of deposit and call money.',
          'They are prized for safety and liquidity.',
          'The RBI uses money-market operations to manage short-term liquidity.',
        ],
      },
    ],
    mcqs: [
      { q: 'Money-market instruments mature within:', options: ['1 year', '5 years', '10 years', '30 years'], answer: 0, explanation: 'They are short-term (≤1 year).' },
      { q: 'Which is a money-market instrument?', options: ['A 10-year bond', 'A Treasury bill', 'A share', 'A perpetual'], answer: 1, explanation: 'T-bills are money-market instruments.' },
      { q: 'Money markets are valued for:', options: ['High returns', 'Safety and liquidity', 'Voting rights', 'Ownership'], answer: 1, explanation: 'They prioritise safety and liquidity.', tricky: true },
      { q: 'Certificates of Deposit are issued by:', options: ['Companies', 'Banks', 'Governments', 'Individuals'], answer: 1, explanation: 'Banks issue CDs; companies issue commercial paper.' },
    ],
  },
  {
    id: 'ncfm-commodity-markets',
    title: 'Commodity Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Commodity Markets',
        body: [
          'Commodity markets trade physical goods and their derivatives — metals, energy and agricultural products.',
          'In India, MCX and NCDEX are major commodity exchanges, regulated by SEBI.',
          'Commodities can hedge inflation and diversify portfolios.',
        ],
      },
    ],
    mcqs: [
      { q: 'An Indian commodity exchange is:', options: ['NSDL', 'MCX', 'CDSL', 'AMFI'], answer: 1, explanation: 'MCX (and NCDEX) are commodity exchanges.', tricky: true },
      { q: 'Commodity markets trade:', options: ['Only shares', 'Physical goods and their derivatives', 'Only bonds', 'Only currencies'], answer: 1, explanation: 'Metals, energy and agri products and their derivatives.' },
      { q: 'Commodities can hedge:', options: ['Deflation only', 'Inflation', 'Dividends', 'Coupons'], answer: 1, explanation: 'Commodities often hedge inflation.' },
      { q: 'Commodity markets in India are regulated by:', options: ['RBI', 'SEBI', 'IRDAI', 'AMFI'], answer: 1, explanation: 'SEBI regulates commodity derivatives.' },
    ],
  },
  {
    id: 'ncfm-currency-markets',
    title: 'Currency Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Currency Markets',
        body: [
          'Currency markets trade foreign exchange and currency derivatives.',
          'In India, exchange-traded currency derivatives are available on NSE/BSE, regulated by SEBI and RBI.',
          'They are used to hedge or speculate on exchange-rate moves.',
        ],
      },
    ],
    mcqs: [
      { q: 'Currency markets trade:', options: ['Only shares', 'Foreign exchange and FX derivatives', 'Only bonds', 'Only commodities'], answer: 1, explanation: 'They deal in currencies and their derivatives.' },
      { q: 'Indian exchange-traded currency derivatives are overseen by:', options: ['Only AMFI', 'SEBI and RBI', 'IRDAI', 'MCX only'], answer: 1, explanation: 'SEBI and RBI jointly oversee currency derivatives.', tricky: true },
      { q: 'Currency derivatives are used to:', options: ['Pay dividends', 'Hedge or speculate on FX', 'Issue equity', 'Set tax'], answer: 1, explanation: 'They manage or take on exchange-rate exposure.' },
      { q: 'A currency is always quoted:', options: ['Alone', 'As a pair', 'In shares', 'In coupons'], answer: 1, explanation: 'FX is quoted in currency pairs.' },
    ],
  },
];

const tradingOps: Topic[] = [
  {
    id: 'ncfm-trading-mechanism',
    title: 'Trading Mechanism',
    reels: [
      {
        kind: 'concept',
        title: 'Trading Mechanism',
        body: [
          'NSE runs an automated, screen-based, order-driven system (NEAT) matching orders by price-time priority.',
          'Best-priced orders match first; among equal prices, the earliest wins.',
          'Trading members enter orders on behalf of clients.',
        ],
      },
    ],
    mcqs: [
      { q: 'NSE matches orders by:', options: ['Broker size', 'Price-time priority', 'Alphabetical order', 'Random'], answer: 1, explanation: 'Best price first, then earliest order.' },
      { q: 'NSE’s trading system is called:', options: ['NEAT', 'BOLT', 'SWIFT', 'RTGS'], answer: 0, explanation: 'NEAT is NSE’s trading system.', tricky: true },
      { q: 'An order-driven market sets prices via:', options: ['Market makers only', 'The order book', 'The regulator', 'The clearing bank'], answer: 1, explanation: 'Bids and offers in the book set prices.' },
      { q: 'Client orders are entered by:', options: ['The depository', 'A trading member (broker)', 'SEBI', 'The RBI'], answer: 1, explanation: 'Brokers place client orders on the exchange.' },
    ],
  },
  {
    id: 'ncfm-order-types',
    title: 'Order Types',
    reels: [
      {
        kind: 'list',
        title: 'Order Types',
        body: [
          'Market order: fills immediately at the best price. Limit order: only at a set price or better.',
          'Stop-loss order: triggers at a set price to limit losses.',
          'Time conditions include Day and IOC (Immediate-or-Cancel).',
        ],
      },
    ],
    mcqs: [
      { q: 'A market order prioritises:', options: ['Price', 'Immediate execution', 'The close', 'Zero slippage'], answer: 1, explanation: 'It fills at once at the best available price.' },
      { q: 'A limit order executes:', options: ['At any price', 'Only at the limit or better', 'At the close only', 'Never'], answer: 1, explanation: 'It controls price, not certainty of execution.', tricky: true },
      { q: 'A stop-loss order is used to:', options: ['Maximise leverage', 'Limit losses at a trigger price', 'Pay dividends', 'Issue shares'], answer: 1, explanation: 'It triggers a trade to cap losses.' },
      { q: 'IOC stands for:', options: ['Immediate-or-Cancel', 'Interest-on-Capital', 'Index-of-Companies', 'Issue-on-Call'], answer: 0, explanation: 'IOC = Immediate-or-Cancel.', tricky: true },
    ],
  },
  {
    id: 'ncfm-market-participants',
    title: 'Market Participants',
    reels: [
      {
        kind: 'list',
        title: 'Market Participants',
        body: [
          'Participants: retail and institutional investors, trading members (brokers), and market makers.',
          'Institutional investors include mutual funds, insurers, pension funds and FPIs.',
          'Regulators and infrastructure (exchanges, depositories, clearing corps) support the market.',
        ],
      },
    ],
    mcqs: [
      { q: 'A trading member is a:', options: ['Regulator', 'Broker giving market access', 'Depository', 'Issuer'], answer: 1, explanation: 'Brokers are trading members.' },
      { q: 'An FPI is a type of:', options: ['Regulator', 'Institutional investor', 'Exchange', 'Depository'], answer: 1, explanation: 'Foreign Portfolio Investors are institutional investors.', tricky: true },
      { q: 'A market maker provides:', options: ['Regulation', 'Continuous two-way quotes/liquidity', 'Tax advice', 'Custody'], answer: 1, explanation: 'Market makers quote bids and offers, adding liquidity.' },
      { q: 'Which is infrastructure, not an investor?', options: ['A mutual fund', 'A clearing corporation', 'A pension fund', 'An FPI'], answer: 1, explanation: 'Clearing corporations are market infrastructure.' },
    ],
  },
  {
    id: 'ncfm-clearing-settlement',
    title: 'Clearing & Settlement',
    reels: [
      {
        kind: 'concept',
        title: 'Clearing & Settlement',
        body: [
          'The clearing corporation nets obligations and guarantees settlement as central counterparty.',
          'Funds and securities are exchanged on the settlement day (T+1 for equities).',
          'A Settlement Guarantee Fund backstops member defaults.',
        ],
      },
    ],
    mcqs: [
      { q: 'The central counterparty guaranteeing trades is the:', options: ['Depository', 'Clearing corporation', 'Broker', 'SEBI'], answer: 1, explanation: 'It guarantees settlement.' },
      { q: 'Netting reduces obligations to:', options: ['Each trade individually', 'A net amount per member', 'Zero always', 'Double'], answer: 1, explanation: 'Netting offsets buys and sells.', tricky: true },
      { q: 'Indian equities settle on:', options: ['T+5', 'T+3', 'T+1', 'Same day'], answer: 2, explanation: 'Equity settlement is T+1.' },
      { q: 'The Settlement Guarantee Fund covers:', options: ['Dividends', 'Member defaults', 'IPO costs', 'Taxes'], answer: 1, explanation: 'It ensures settlement despite a default.' },
    ],
  },
  {
    id: 'ncfm-depositories',
    title: 'Depositories',
    reels: [
      {
        kind: 'concept',
        title: 'Depositories',
        body: [
          'Depositories (NSDL and CDSL) hold securities in electronic (demat) form.',
          'They enable safe, fast transfer of securities and reduce paper-related risks.',
          'Depository Participants are their interface with investors.',
        ],
      },
    ],
    mcqs: [
      { q: 'India’s two depositories are:', options: ['NSE and BSE', 'NSDL and CDSL', 'SEBI and RBI', 'MCX and NCDEX'], answer: 1, explanation: 'NSDL and CDSL hold securities in demat form.' },
      { q: 'A Depository Participant is an agent of the:', options: ['Exchange', 'Depository', 'Clearing bank', 'Registrar'], answer: 1, explanation: 'A DP interfaces investors with the depository.', tricky: true },
      { q: 'Depositories hold securities in:', options: ['Paper form', 'Electronic (demat) form', 'Gold', 'Cash'], answer: 1, explanation: 'Holdings are dematerialised.' },
      { q: 'Dematerialisation reduces:', options: ['Market risk', 'Paper-related risks (theft, forgery)', 'Interest-rate risk', 'Currency risk'], answer: 1, explanation: 'Electronic holding removes paper risks.' },
    ],
  },
  {
    id: 'ncfm-demat-accounts',
    title: 'Demat Accounts',
    reels: [
      {
        kind: 'concept',
        title: 'Demat Accounts',
        body: [
          'A demat account holds an investor’s securities electronically with a depository (via a DP).',
          'It is linked to a trading account and bank account for seamless investing.',
          'It replaced physical share certificates, making transfers instant and safe.',
        ],
      },
    ],
    mcqs: [
      { q: 'A demat account holds securities in:', options: ['Paper form', 'Electronic form', 'Cash', 'Gold'], answer: 1, explanation: 'Demat = electronic securities holding.' },
      { q: 'A demat account is opened through a:', options: ['Depository Participant', 'The RBI', 'SEBI directly', 'A merchant banker'], answer: 0, explanation: 'A DP opens and maintains the demat account.', tricky: true },
      { q: 'To trade shares you typically need a demat and a:', options: ['Trading account', 'Fixed deposit', 'Insurance policy', 'PPF account'], answer: 0, explanation: 'A trading account is linked to the demat account.' },
      { q: 'Demat accounts replaced:', options: ['Bank accounts', 'Physical share certificates', 'PAN cards', 'Cheques'], answer: 1, explanation: 'They replaced paper certificates.' },
    ],
  },
  {
    id: 'ncfm-risk-management',
    title: 'Risk Management',
    reels: [
      {
        kind: 'concept',
        title: 'Risk Management (Markets)',
        body: [
          'Exchanges manage risk through margins, position limits and price bands / circuit breakers.',
          'Margins (VaR, ELM, MTM) cushion against adverse price moves before settlement.',
          'Circuit breakers halt trading after sharp index moves.',
        ],
      },
    ],
    mcqs: [
      { q: 'Margins are collected to manage:', options: ['Broker profit', 'Counterparty/market risk', 'Dividends', 'Taxes'], answer: 1, explanation: 'Margins cushion against adverse moves and default.' },
      { q: 'A circuit breaker:', options: ['Increases volatility', 'Halts trading after a sharp move', 'Guarantees prices', 'Pays dividends'], answer: 1, explanation: 'It pauses trading to cool the market.', tricky: true },
      { q: 'Mark-to-market margin covers:', options: ['Daily losses on open positions', 'Broker bonuses', 'IPO costs', 'Dividends'], answer: 0, explanation: 'MTM covers daily adverse price moves.' },
      { q: 'A price band limits:', options: ['The number of brokers', 'How far a price can move in a session', 'Dividends', 'Taxes'], answer: 1, explanation: 'Price bands cap intraday moves for a security.' },
    ],
  },
];

const analysisInvesting: Topic[] = [
  {
    id: 'ncfm-technical-analysis',
    title: 'Technical Analysis',
    reels: [
      {
        kind: 'list',
        title: 'Technical Analysis',
        body: [
          'Technical analysis studies price and volume charts to forecast future moves.',
          'Tools: support/resistance, trends, moving averages, RSI and MACD.',
          'It assumes price reflects all information and that trends persist.',
        ],
        tip: 'RSI above 70 = overbought; below 30 = oversold.',
      },
    ],
    mcqs: [
      { q: 'Technical analysis is based on:', options: ['Financial statements', 'Price and volume', 'Dividend policy', 'Tax rates'], answer: 1, explanation: 'It studies historical price/volume.' },
      { q: 'RSI above 70 suggests:', options: ['Oversold', 'Overbought', 'Fair value', 'Delisting'], answer: 1, explanation: 'High RSI = overbought.', tricky: true },
      { q: 'A moving average is used to:', options: ['Compute tax', 'Smooth price and reveal trend', 'Value bonds', 'Set margins'], answer: 1, explanation: 'It smooths noise to show trend.' },
      { q: 'Support is a level where:', options: ['Selling halts a rise', 'Buying tends to halt a decline', 'Trading stops', 'Dividends pay'], answer: 1, explanation: 'Support is where demand stops a fall.' },
    ],
  },
  {
    id: 'ncfm-fundamental-analysis',
    title: 'Fundamental Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Fundamental Analysis',
        body: [
          'Fundamental analysis estimates intrinsic value from economy, industry and company data (E-I-C).',
          'It studies financial statements and ratios to judge under/over-valuation.',
          'Goal: buy below intrinsic value.',
        ],
      },
    ],
    mcqs: [
      { q: 'Fundamental analysis seeks:', options: ['Chart patterns', 'Intrinsic value', 'Volume spikes', 'Beta only'], answer: 1, explanation: 'It estimates intrinsic value from fundamentals.' },
      { q: 'The E-I-C approach analyses economy, industry and:', options: ['Interest rates', 'Company', 'Index', 'Currency'], answer: 1, explanation: 'E-I-C = Economy, Industry, Company.', tricky: true },
      { q: 'Which is a fundamental metric?', options: ['RSI', 'P/E ratio', 'MACD', 'Moving average'], answer: 1, explanation: 'P/E is a fundamental valuation ratio.' },
      { q: 'Fundamental analysis answers:', options: ['When to buy', 'What to buy (value)', 'Who to buy from', 'The tax rate'], answer: 1, explanation: 'It addresses value/what to buy.' },
    ],
  },
  {
    id: 'ncfm-financial-statements',
    title: 'Financial Statements',
    reels: [
      {
        kind: 'list',
        title: 'Financial Statements',
        body: [
          'The income statement, balance sheet and cash-flow statement reveal performance, position and cash.',
          'Analysts read them together to assess a company’s health.',
          'Ratios interpret them for valuation and risk.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which shows position at a point in time?', options: ['Income statement', 'Balance sheet', 'Cash-flow statement', 'Notes'], answer: 1, explanation: 'The balance sheet is a snapshot.' },
      { q: 'The cash-flow statement tracks:', options: ['Only profit', 'Actual cash movements', 'Only assets', 'Dividends only'], answer: 1, explanation: 'It reconciles profit to cash.', tricky: true },
      { q: 'Performance over a period is shown by the:', options: ['Balance sheet', 'Income statement', 'Cash-flow statement', 'AGM'], answer: 1, explanation: 'The income statement covers a period.' },
      { q: 'Ratios are used to:', options: ['Hide data', 'Interpret the statements', 'Set tax', 'Issue shares'], answer: 1, explanation: 'Ratios turn statements into insight.' },
    ],
  },
  {
    id: 'ncfm-investment-analysis',
    title: 'Investment Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Investment Analysis',
        body: [
          'Investment analysis evaluates securities on risk and expected return to inform buy/sell decisions.',
          'It combines fundamental valuation, quantitative measures and market context.',
          'Risk-adjusted return matters more than raw return.',
        ],
      },
    ],
    mcqs: [
      { q: 'Investment analysis weighs return against:', options: ['Only fees', 'Risk', 'Only tax', 'Colour'], answer: 1, explanation: 'It balances expected return and risk.' },
      { q: 'Risk-adjusted return is:', options: ['Irrelevant', 'More meaningful than raw return', 'Always lower', 'A tax measure'], answer: 1, explanation: 'It accounts for the risk taken to earn a return.', tricky: true },
      { q: 'Investment analysis informs:', options: ['Only marketing', 'Buy/sell decisions', 'Payroll', 'Auditing'], answer: 1, explanation: 'It supports investment decisions.' },
      { q: 'A higher expected return usually implies:', options: ['Lower risk', 'Higher risk', 'No risk', 'A guarantee'], answer: 1, explanation: 'The risk–return trade-off.' },
    ],
  },
  {
    id: 'ncfm-portfolio-management',
    title: 'Portfolio Management',
    reels: [
      {
        kind: 'concept',
        title: 'Portfolio Management',
        body: [
          'Portfolio management builds a diversified mix to meet objectives within risk limits.',
          'Diversification reduces unsystematic risk; asset allocation drives long-run returns.',
          'Portfolios are monitored and rebalanced over time.',
        ],
      },
    ],
    mcqs: [
      { q: 'Diversification reduces:', options: ['Systematic risk', 'Unsystematic risk', 'All risk to zero', 'Returns'], answer: 1, explanation: 'It cuts company-specific risk.' },
      { q: 'The biggest driver of long-run portfolio returns is:', options: ['Stock picking', 'Asset allocation', 'Timing', 'Fees'], answer: 1, explanation: 'Allocation dominates long-run outcomes.', tricky: true },
      { q: 'Rebalancing restores:', options: ['Target weights', 'Maximum risk', 'Zero holdings', 'Only cash'], answer: 0, explanation: 'It returns the portfolio to its target mix.' },
      { q: 'Portfolio management focuses on:', options: ['One security', 'The whole portfolio', 'Only bonds', 'Only cash'], answer: 1, explanation: 'It manages the overall mix.' },
    ],
  },
  {
    id: 'ncfm-mutual-funds',
    title: 'Mutual Funds',
    reels: [
      {
        kind: 'concept',
        title: 'Mutual Funds',
        body: [
          'A mutual fund pools money into a professionally managed portfolio, priced daily at NAV.',
          'Types include equity, debt, hybrid and index funds; SIPs invest regularly.',
          'The expense ratio reduces returns; SEBI regulates the industry.',
        ],
        formula: 'NAV = (Assets − Liabilities) ÷ Units',
      },
    ],
    mcqs: [
      { q: 'A mutual fund is priced daily at its:', options: ['Coupon', 'NAV', 'P/E', 'Beta'], answer: 1, explanation: 'NAV is the per-unit value computed daily.' },
      { q: 'A SIP invests:', options: ['A lump sum once', 'A fixed amount regularly', 'Randomly', 'Only at highs'], answer: 1, explanation: 'SIPs invest fixed sums periodically.', tricky: true },
      { q: 'The expense ratio:', options: ['Raises returns', 'Reduces returns', 'Is a dividend', 'Is the NAV'], answer: 1, explanation: 'It is a cost deducted from the fund.' },
      { q: 'Mutual funds in India are regulated by:', options: ['RBI', 'SEBI', 'IRDAI', 'MCX'], answer: 1, explanation: 'SEBI regulates mutual funds.' },
    ],
  },
];

const ncfmDerivatives: Topic[] = [
  {
    id: 'ncfm-derivatives',
    title: 'Derivatives',
    reels: [
      {
        kind: 'concept',
        title: 'Derivatives',
        body: [
          'A derivative’s value derives from an underlying asset — index, stock, commodity or currency.',
          'Main types: forwards, futures, options and swaps.',
          'Uses: hedging, speculation and arbitrage.',
        ],
      },
    ],
    mcqs: [
      { q: 'A derivative derives value from:', options: ['A central bank', 'An underlying asset', 'A dividend', 'The auditor'], answer: 1, explanation: 'Its value depends on an underlying.' },
      { q: 'Which is a derivative?', options: ['A share', 'A futures contract', 'A savings account', 'A demat account'], answer: 1, explanation: 'Futures are derivatives.' },
      { q: 'Derivatives are used for hedging, speculation and:', options: ['Auditing', 'Arbitrage', 'Custody', 'Taxation'], answer: 1, explanation: 'Hedging, speculation, arbitrage.', tricky: true },
      { q: 'Exchange-traded derivatives are guaranteed by the:', options: ['Broker', 'Clearing corporation', 'SEBI', 'Depository'], answer: 1, explanation: 'The clearing corporation is central counterparty.' },
    ],
  },
  {
    id: 'ncfm-futures',
    title: 'Futures',
    reels: [
      {
        kind: 'formula',
        title: 'Futures',
        body: [
          'A futures contract is a standardised, exchange-traded agreement to buy/sell an underlying at a set price on a future date.',
          'It obligates both parties and is marked-to-market daily; it needs margin.',
          'Futures price ≈ spot plus cost of carry.',
        ],
        formula: 'Futures ≈ Spot × (1 + r)^t − dividends',
      },
    ],
    mcqs: [
      { q: 'A futures contract is:', options: ['Customised OTC', 'Standardised and exchange-traded', 'An ownership stake', 'A bond'], answer: 1, explanation: 'Futures are standardised and cleared.' },
      { q: 'Futures need ______ versus buying the underlying outright.', options: ['More capital', 'Only margin (leverage)', 'No capital', 'The same'], answer: 1, explanation: 'Margin provides leverage.', tricky: true },
      { q: 'Daily P&L on futures is settled by:', options: ['Physical delivery', 'Mark-to-market', 'Dividends', 'Coupons'], answer: 1, explanation: 'MTM settles daily.' },
      { q: 'The gap between futures and spot is the:', options: ['Premium', 'Basis', 'Strike', 'Coupon'], answer: 1, explanation: 'The basis reflects cost of carry.', tricky: true },
    ],
  },
  {
    id: 'ncfm-options',
    title: 'Options',
    reels: [
      {
        kind: 'formula',
        title: 'Options',
        body: [
          'An option gives the buyer the right (not obligation) to buy (call) or sell (put) at a strike.',
          'The buyer pays a premium (max loss); the writer takes on risk. Indian index options are European.',
          'Value = intrinsic value + time value.',
        ],
        formula: 'Call payoff = max(0, Spot − Strike) − Premium',
      },
    ],
    mcqs: [
      { q: 'A call gives the right to:', options: ['Sell at the strike', 'Buy at the strike', 'Receive a coupon', 'Vote'], answer: 1, explanation: 'A call is the right to buy.' },
      { q: 'An option buyer’s max loss is:', options: ['Unlimited', 'The premium', 'The strike', 'The lot size'], answer: 1, explanation: 'Buyers risk only the premium.' },
      { q: 'Indian index options are:', options: ['American, physical', 'European, cash-settled', 'American, cash', 'European, physical'], answer: 1, explanation: 'NSE index options are European and cash-settled.', tricky: true },
      { q: 'Option value = intrinsic value plus:', options: ['Coupon value', 'Time value', 'Par value', 'Basis'], answer: 1, explanation: 'Time value decays toward expiry.' },
    ],
  },
  {
    id: 'ncfm-greeks',
    title: 'Greeks',
    reels: [
      {
        kind: 'list',
        title: 'The Option Greeks',
        body: [
          'Delta: sensitivity to the underlying. Gamma: change in delta. Theta: time decay.',
          'Vega: sensitivity to volatility. Rho: sensitivity to interest rates.',
          'The Greeks help measure and hedge option risk.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which Greek measures time decay?', options: ['Delta', 'Theta', 'Vega', 'Rho'], answer: 1, explanation: 'Theta captures time decay.', tricky: true },
      { q: 'Delta measures sensitivity to the:', options: ['Volatility', 'Underlying’s price', 'Rate', 'Time'], answer: 1, explanation: 'Delta is price sensitivity.' },
      { q: 'Vega measures sensitivity to:', options: ['Price', 'Volatility', 'Rates', 'Time'], answer: 1, explanation: 'Vega reflects volatility changes.', tricky: true },
      { q: 'A deep ITM call has delta near:', options: ['0', '0.5', '1', '−1'], answer: 2, explanation: 'It behaves like the underlying (delta → 1).' },
    ],
  },
  {
    id: 'ncfm-option-strategies',
    title: 'Option Strategies',
    reels: [
      {
        kind: 'list',
        title: 'Option Strategies',
        body: [
          'Covered call: own stock, sell a call — income, capped upside.',
          'Protective put: own stock, buy a put — downside insurance.',
          'Straddle: buy call + put at one strike — profits from a big move; spreads cap cost and payoff.',
        ],
      },
    ],
    mcqs: [
      { q: 'A covered call:', options: ['Buys a call only', 'Owns stock and sells a call', 'Buys two puts', 'Shorts stock'], answer: 1, explanation: 'Income on owned stock, capped upside.' },
      { q: 'A long straddle profits from:', options: ['A flat market', 'A big move either way', 'Slow rises only', 'Dividends'], answer: 1, explanation: 'It gains from large moves in either direction.', tricky: true },
      { q: 'A protective put:', options: ['Earns premium', 'Insures a long position', 'Adds leverage', 'Is a naked short'], answer: 1, explanation: 'It caps downside on owned stock.' },
      { q: 'A bull call spread:', options: ['Unlimited profit', 'Caps cost and profit', 'Removes all risk', 'Is a naked short'], answer: 1, explanation: 'Buying lower and selling higher call caps both.', tricky: true },
    ],
  },
  {
    id: 'ncfm-commodity-derivatives',
    title: 'Commodity Derivatives',
    reels: [
      {
        kind: 'concept',
        title: 'Commodity Derivatives',
        body: [
          'Commodity derivatives are futures and options on commodities like gold, crude and agri products.',
          'Traded on exchanges such as MCX and NCDEX, regulated by SEBI.',
          'Used by producers/consumers to hedge and by traders to speculate.',
        ],
      },
    ],
    mcqs: [
      { q: 'Commodity derivatives are traded on:', options: ['NSDL', 'MCX / NCDEX', 'CDSL', 'AMFI'], answer: 1, explanation: 'MCX and NCDEX are commodity exchanges.', tricky: true },
      { q: 'A farmer locking in a crop price is:', options: ['Speculating', 'Hedging', 'Arbitraging', 'Investing in equity'], answer: 1, explanation: 'Locking a price hedges price risk.' },
      { q: 'Commodity derivatives are regulated by:', options: ['RBI', 'SEBI', 'IRDAI', 'AMFI'], answer: 1, explanation: 'SEBI regulates commodity derivatives.' },
      { q: 'Underlyings include:', options: ['Only shares', 'Gold, crude, agri products', 'Only bonds', 'Only currencies'], answer: 1, explanation: 'Metals, energy and agri commodities.' },
    ],
  },
  {
    id: 'ncfm-currency-derivatives',
    title: 'Currency Derivatives',
    reels: [
      {
        kind: 'concept',
        title: 'Currency Derivatives',
        body: [
          'Currency derivatives are futures and options on exchange rates (e.g. USD/INR).',
          'Traded on NSE/BSE and overseen by SEBI and RBI.',
          'Used to hedge or speculate on currency movements.',
        ],
      },
    ],
    mcqs: [
      { q: 'A common Indian currency-derivative underlying is:', options: ['Gold', 'USD/INR', 'NIFTY', 'Crude'], answer: 1, explanation: 'USD/INR is a key currency pair traded.' },
      { q: 'Currency derivatives are overseen by:', options: ['Only AMFI', 'SEBI and RBI', 'IRDAI', 'MCX only'], answer: 1, explanation: 'SEBI and RBI jointly oversee them.', tricky: true },
      { q: 'An importer hedging a future dollar payment is:', options: ['Speculating', 'Hedging FX risk', 'Arbitraging', 'Investing in equity'], answer: 1, explanation: 'Locking the rate hedges currency risk.' },
      { q: 'Currency derivatives derive value from:', options: ['Share prices', 'Exchange rates', 'Commodity prices', 'Coupons'], answer: 1, explanation: 'Their value depends on exchange rates.' },
    ],
  },
];

const regulationEthics: Topic[] = [
  {
    id: 'ncfm-taxation',
    title: 'Taxation',
    reels: [
      {
        kind: 'concept',
        title: 'Taxation of Investments',
        body: [
          'Capital gains tax depends on the asset and holding period (short-term vs long-term).',
          'Equity held over 12 months is long-term; dividends are taxed in the investor’s hands.',
          'Securities Transaction Tax (STT) applies to exchange trades.',
        ],
      },
    ],
    mcqs: [
      { q: 'Equity gains are long-term after a holding period of:', options: ['1 month', 'More than 12 months', '24 months', '36 months'], answer: 1, explanation: 'Equity held over 12 months is long-term.', tricky: true },
      { q: 'STT stands for:', options: ['Short-Term Tax', 'Securities Transaction Tax', 'Standard Trade Tariff', 'State Transfer Tax'], answer: 1, explanation: 'STT is levied on securities transactions.', tricky: true },
      { q: 'Capital-gains classification depends on:', options: ['The logo', 'Asset type and holding period', 'The NAV level', 'The broker'], answer: 1, explanation: 'Holding period and asset type determine tax.' },
      { q: 'Dividends are generally taxed:', options: ['Tax-free always', 'In the investor’s hands', 'Only for NRIs', 'At 0%'], answer: 1, explanation: 'Dividends are taxable for the investor.' },
    ],
  },
  {
    id: 'ncfm-sebi-regs',
    title: 'SEBI Regulations',
    reels: [
      {
        kind: 'concept',
        title: 'SEBI Regulations',
        body: [
          'SEBI regulates and develops the securities market and protects investors.',
          'It frames rules for intermediaries, disclosures and market conduct, and enforces them.',
          'Appeals against SEBI orders go to the Securities Appellate Tribunal (SAT).',
        ],
      },
    ],
    mcqs: [
      { q: 'SEBI’s core role is to:', options: ['Set monetary policy', 'Regulate/develop markets and protect investors', 'Print money', 'Run companies'], answer: 1, explanation: 'SEBI regulates markets and protects investors.' },
      { q: 'Appeals against SEBI go to the:', options: ['High Court first', 'SAT', 'RBI', 'NCLT'], answer: 1, explanation: 'The Securities Appellate Tribunal hears appeals.', tricky: true },
      { q: 'SEBI frames rules for:', options: ['Only banks', 'Intermediaries, disclosures and conduct', 'Only taxes', 'Only insurance'], answer: 1, explanation: 'It governs market intermediaries and conduct.' },
      { q: 'SEBI was established under the:', options: ['Companies Act', 'SEBI Act 1992', 'RBI Act', 'SCRA 1956'], answer: 1, explanation: 'The SEBI Act, 1992.' },
    ],
  },
  {
    id: 'ncfm-investor-protection',
    title: 'Investor Protection',
    reels: [
      {
        kind: 'concept',
        title: 'Investor Protection',
        body: [
          'Investor protection ensures fair treatment through disclosures, grievance redressal and safeguards.',
          'SCORES is SEBI’s online complaint system; Investor Protection Funds cover certain defaults.',
          'Awareness and KYC also protect investors.',
        ],
      },
    ],
    mcqs: [
      { q: 'SEBI’s online complaint platform is:', options: ['SCORES', 'SWIFT', 'NEAT', 'RTGS'], answer: 0, explanation: 'SCORES handles investor grievances.', tricky: true },
      { q: 'An Investor Protection Fund compensates for:', options: ['Market losses', 'Certain defaults (e.g. broker)', 'Taxes', 'Dividends'], answer: 1, explanation: 'It covers eligible investors in defaults.' },
      { q: 'Disclosures protect investors by:', options: ['Hiding information', 'Providing information to decide', 'Raising taxes', 'Fixing prices'], answer: 1, explanation: 'Transparency enables informed choices.' },
      { q: 'Investor protection is a core mandate of:', options: ['SEBI', 'The exchange only', 'AMFI only', 'The issuer'], answer: 0, explanation: 'It is central to SEBI’s role.' },
    ],
  },
  {
    id: 'ncfm-ethics',
    title: 'Ethics',
    reels: [
      {
        kind: 'concept',
        title: 'Ethics in Markets',
        body: [
          'Ethical conduct requires honesty, fairness and putting clients’ interests first.',
          'Insider trading, front-running and manipulation are prohibited.',
          'Intermediaries must follow codes of conduct and disclose conflicts.',
        ],
      },
    ],
    mcqs: [
      { q: 'Trading on unpublished price-sensitive information is:', options: ['Allowed', 'Insider trading (prohibited)', 'A duty', 'Disclosure'], answer: 1, explanation: 'Insider trading is prohibited.' },
      { q: 'Trading ahead of a client’s order is:', options: ['Best execution', 'Front-running (prohibited)', 'Hedging', 'Arbitrage'], answer: 1, explanation: 'Front-running is a prohibited unfair practice.', tricky: true },
      { q: 'Conflicts of interest must be:', options: ['Hidden', 'Disclosed and managed', 'Exploited', 'Ignored'], answer: 1, explanation: 'Disclose and manage conflicts for the client.' },
      { q: 'Ethical conduct puts first the interests of the:', options: ['Broker', 'Client', 'Exchange', 'Regulator'], answer: 1, explanation: 'Client interests come first.' },
    ],
  },
];

export const ncfm: Course = {
  id: 'ncfm',
  title: 'NCFM Certification',
  shortTitle: 'NCFM',
  provider: 'NSE Academy',
  accent: '#c2703f',
  glyph: '🪙',
  tagline:
    'NSE Academy’s Certification in Financial Markets — markets and products, trading and operations, analysis, derivatives, and regulation.',
  overview: [
    'NCFM (NSE Academy Certification in Financial Markets) is an online certification programme run by NSE Academy, a subsidiary of the National Stock Exchange of India.',
    'It offers modules across Foundation, Intermediate and Advanced levels — from market overviews to dealing, derivatives and analysis.',
    'This course breaks the syllabus into every topic across markets and products, trading and operations, analysis and investing, derivatives, and regulation and ethics.',
  ],
  examPattern: {
    format: 'Online, computer-based, objective-type (multiple choice)',
    duration: '2 hours (typical; varies by module)',
    questions: '60–100 questions depending on the module',
    passing: '50–60% depending on the module; certificate valid for 5 years for most modules',
    validity: '5 years for most modules',
    fee: '≈ ₹1,500–₹3,000 per module (varies)',
    negativeMarking: 'Some modules apply negative marking (e.g. 25%); many do not — check the module',
  },
  sources: [
    { name: 'NSE Academy — NCFM Certifications', url: 'https://www.nseindia.com/learn/certification-ncfm' },
    { name: 'NSE India — National Stock Exchange', url: 'https://www.nseindia.com/' },
    { name: 'NSE Academy', url: 'https://www.nseindia.com/learn' },
  ],
  modules: [
    {
      id: 'ncfm-overview',
      title: 'Markets & Products',
      summary:
        'The landscape — financial, primary/secondary, equity, debt, money, commodity and currency markets.',
      topics: marketsProducts,
    },
    {
      id: 'ncfm-capital',
      title: 'Trading & Operations',
      summary:
        'How trading works — mechanism, order types, participants, clearing & settlement, depositories, demat and risk.',
      topics: tradingOps,
    },
    {
      id: 'ncfm-analysis',
      title: 'Analysis & Investing',
      summary:
        'Researching and investing — technical and fundamental analysis, statements, investment analysis, portfolios and funds.',
      topics: analysisInvesting,
    },
    {
      id: 'ncfm-deriv',
      title: 'Derivatives',
      summary:
        'Futures, options and the Greeks, option strategies, and commodity and currency derivatives.',
      topics: ncfmDerivatives,
    },
    {
      id: 'ncfm-reg',
      title: 'Regulation & Ethics',
      summary:
        'The rules of the game — taxation, SEBI regulations, investor protection and ethics.',
      topics: regulationEthics,
    },
  ],
};
