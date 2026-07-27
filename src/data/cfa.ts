import type { Course, Topic } from '../types';

// Topic-by-topic build of the CFA Investment Foundations syllabus. Module ids
// cfa-industry / cfa-tools / cfa-instruments / cfa-structure are kept so their
// Deep Dive sets in extras.ts merge.

const ethicsSystem: Topic[] = [
  {
    id: 'cfa-ethics',
    title: 'Ethics',
    reels: [
      {
        kind: 'concept',
        title: 'Ethics',
        body: [
          'Ethics are moral principles guiding behaviour; the investment industry runs on trust, so ethics are foundational.',
          'A framework for ethical decisions: identify the issue and stakeholders, consider alternatives, act, and reflect.',
          'Legal and ethical are not the same — professionals follow the stricter standard.',
        ],
      },
    ],
    mcqs: [
      { q: 'Ethics are best defined as:', options: ['The same as laws', 'Moral principles guiding behaviour', 'Accounting rules', 'Tax rules'], answer: 1, explanation: 'Ethics are moral standards, distinct from (and often above) law.' },
      { q: 'When law is less strict than ethics, follow:', options: ['The law', 'The stricter (ethical) standard', 'Neither', 'Whichever is cheaper'], answer: 1, explanation: 'Professionals adhere to the higher standard.', tricky: true },
      { q: 'The investment industry depends heavily on:', options: ['Trust', 'Secrecy', 'Leverage', 'Luck'], answer: 0, explanation: 'Clients entrust money, so trust is central.' },
      { q: 'The first step in ethical decision-making is to:', options: ['Act at once', 'Identify the issue and stakeholders', 'Ignore it', 'Ask a competitor'], answer: 1, explanation: 'Understand the issue and who is affected first.' },
    ],
  },
  {
    id: 'cfa-professional-standards',
    title: 'Professional Standards',
    reels: [
      {
        kind: 'concept',
        title: 'Professional Standards',
        body: [
          'CFA Institute’s Code of Ethics and Standards of Professional Conduct set a global benchmark.',
          'Core duties: integrity, competence, diligence, putting clients first, and avoiding/disclosing conflicts.',
          'Prohibited: insider trading, misrepresentation and market manipulation.',
        ],
      },
    ],
    mcqs: [
      { q: 'The global benchmark for professional conduct is the:', options: ['IFRS', 'CFA Institute Code and Standards', 'Basel Accord', 'SEC rulebook'], answer: 1, explanation: 'CFA Institute’s Code and Standards are the benchmark.' },
      { q: 'A conflict of interest must be:', options: ['Concealed', 'Disclosed and managed', 'Exploited', 'Ignored'], answer: 1, explanation: 'Disclose conflicts and prioritise the client.', tricky: true },
      { q: 'Which is prohibited conduct?', options: ['Disclosing fees', 'Insider trading', 'Diligence', 'Diversification'], answer: 1, explanation: 'Trading on material non-public information is prohibited.' },
      { q: 'A duty to keep client information private is:', options: ['Optional', 'Confidentiality', 'Front-running', 'Arbitrage'], answer: 1, explanation: 'Confidentiality is a core professional duty.' },
    ],
  },
  {
    id: 'cfa-financial-system',
    title: 'Financial System',
    reels: [
      {
        kind: 'concept',
        title: 'The Financial System',
        body: [
          'The financial system channels funds from savers to users of capital.',
          'It performs saving/borrowing, risk transfer, price discovery and liquidity provision.',
          'Intermediaries, markets and infrastructure make it work.',
        ],
      },
    ],
    mcqs: [
      { q: 'The financial system connects:', options: ['Only banks', 'Savers with users of capital', 'Only governments', 'Only traders'], answer: 1, explanation: 'It channels capital from savers to those who need it.' },
      { q: 'Which is a function of the financial system?', options: ['Printing goods', 'Price discovery', 'Setting tax law', 'Manufacturing'], answer: 1, explanation: 'Price discovery is a core function.', tricky: true },
      { q: 'A financial intermediary is, for example, a:', options: ['Bank', 'Factory', 'School', 'Farm'], answer: 0, explanation: 'Banks and asset managers are intermediaries.' },
      { q: 'The system provides liquidity, meaning:', options: ['Guaranteed profit', 'The ability to convert assets to cash', 'Tax exemption', 'Fixed prices'], answer: 1, explanation: 'Liquidity lets participants buy/sell readily.' },
    ],
  },
  {
    id: 'cfa-financial-markets',
    title: 'Financial Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Financial Markets',
        body: [
          'Markets are where financial instruments are traded — money markets (short-term) and capital markets (long-term).',
          'Primary markets issue new securities; secondary markets trade existing ones.',
          'Efficient markets reflect available information in prices.',
        ],
      },
    ],
    mcqs: [
      { q: 'New securities are issued in the:', options: ['Secondary market', 'Primary market', 'Money market only', 'FX market'], answer: 1, explanation: 'Primary markets handle new issuance.' },
      { q: 'Short-term instruments trade in the:', options: ['Capital market', 'Money market', 'Equity market', 'Derivatives market'], answer: 1, explanation: 'Money markets deal in short-term instruments.', tricky: true },
      { q: 'The secondary market provides:', options: ['New capital to issuers', 'Liquidity and price discovery', 'Guaranteed returns', 'Tax breaks'], answer: 1, explanation: 'It lets investors trade and sets prices.' },
      { q: 'An efficient market reflects:', options: ['No information', 'Available information in prices', 'Only past prices', 'Only insider tips'], answer: 1, explanation: 'Efficiency means prices incorporate available information.' },
    ],
  },
  {
    id: 'cfa-financial-instruments',
    title: 'Financial Instruments',
    reels: [
      {
        kind: 'list',
        title: 'Financial Instruments',
        body: [
          'Equity: ownership. Fixed income: debt paying interest. Derivatives: value from an underlying.',
          'Pooled vehicles (funds, ETFs) and alternatives (real estate, commodities) broaden choice.',
          'Each instrument has a distinct risk, return and liquidity profile.',
        ],
      },
    ],
    mcqs: [
      { q: 'Equity is a(n):', options: ['Loan', 'Ownership claim', 'Derivative', 'Currency'], answer: 1, explanation: 'Equity represents ownership.' },
      { q: 'Fixed income is fundamentally:', options: ['Ownership', 'Debt paying interest', 'A derivative', 'A commodity'], answer: 1, explanation: 'Bonds are debt instruments.' },
      { q: 'A derivative’s value comes from:', options: ['A central bank', 'An underlying asset', 'A dividend', 'The auditor'], answer: 1, explanation: 'Derivatives derive value from an underlying.', tricky: true },
      { q: 'An ETF is a:', options: ['Single bond', 'Pooled fund traded on an exchange', 'Currency', 'Commodity'], answer: 1, explanation: 'ETFs are exchange-traded pooled vehicles.' },
    ],
  },
];

const tools: Topic[] = [
  {
    id: 'cfa-risk-return',
    title: 'Risk & Return',
    reels: [
      {
        kind: 'concept',
        title: 'Risk & Return',
        body: [
          'Return is the gain/loss on an investment; risk is the uncertainty around that return.',
          'The risk–return trade-off: higher expected return generally requires taking more risk.',
          'Total return combines income (coupons/dividends) and capital gain/loss.',
        ],
      },
    ],
    mcqs: [
      { q: 'Higher expected return generally requires:', options: ['Less risk', 'More risk', 'No risk', 'A guarantee'], answer: 1, explanation: 'The risk–return trade-off links reward to risk.' },
      { q: 'Total return includes income and:', options: ['Only fees', 'Capital gain/loss', 'Only tax', 'Only inflation'], answer: 1, explanation: 'Total return = income + capital gain/loss.', tricky: true },
      { q: 'Risk is best described as:', options: ['Guaranteed loss', 'Uncertainty around returns', 'Fees', 'A coupon'], answer: 1, explanation: 'Risk is the uncertainty of outcomes.' },
      { q: 'A risk-free asset offers:', options: ['The highest return', 'A certain (low) return', 'No return ever', 'Unlimited return'], answer: 1, explanation: 'Risk-free assets pay a low, near-certain return.' },
    ],
  },
  {
    id: 'cfa-tvm',
    title: 'Time Value of Money',
    reels: [
      {
        kind: 'formula',
        title: 'Time Value of Money',
        body: [
          'A sum today is worth more than the same sum later because it can earn a return.',
          'Future value compounds a present sum forward; present value discounts a future sum back.',
          'Compounding earns interest on interest.',
        ],
        formula: 'FV = PV × (1 + r)ⁿ ;  PV = FV ÷ (1 + r)ⁿ',
      },
    ],
    mcqs: [
      { q: 'A rupee today is worth ______ a rupee next year.', options: ['Less than', 'More than', 'The same as', 'Nothing versus'], answer: 1, explanation: 'It can be invested to earn a return.' },
      { q: '₹100 at 10% for 2 years compounds to:', options: ['₹120', '₹121', '₹110', '₹100'], answer: 1, explanation: '100 × 1.1² = ₹121.', tricky: true },
      { q: 'Present value ______ a future amount.', options: ['Compounds', 'Discounts', 'Ignores', 'Doubles'], answer: 1, explanation: 'PV discounts future cash flows to today.' },
      { q: 'Compounding means interest is earned on:', options: ['Only principal', 'Principal plus accumulated interest', 'Nothing', 'Fees'], answer: 1, explanation: 'Interest earns interest under compounding.' },
    ],
  },
  {
    id: 'cfa-dcf',
    title: 'Discounted Cash Flow',
    reels: [
      {
        kind: 'formula',
        title: 'Discounted Cash Flow',
        body: [
          'DCF values an asset as the present value of its expected future cash flows.',
          'The discount rate reflects the riskiness of those cash flows.',
          'It underlies bond, equity and project valuation.',
        ],
        formula: 'Value = Σ CFₜ ÷ (1 + r)ᵗ',
      },
    ],
    mcqs: [
      { q: 'A DCF values an asset as the:', options: ['Sum of past prices', 'Present value of future cash flows', 'Book value', 'Par value'], answer: 1, explanation: 'DCF discounts expected future cash flows.' },
      { q: 'The discount rate reflects the:', options: ['Coupon', 'Riskiness of the cash flows', 'Tax rate only', 'Share count'], answer: 1, explanation: 'Riskier cash flows use higher discount rates.', tricky: true },
      { q: 'A higher discount rate gives a ______ value.', options: ['Higher', 'Lower', 'Unchanged', 'Zero'], answer: 1, explanation: 'Higher discounting reduces present value.' },
      { q: 'DCF is used to value:', options: ['Only bonds', 'Bonds, equities and projects', 'Only currencies', 'Nothing'], answer: 1, explanation: 'DCF is a general valuation tool.' },
    ],
  },
  {
    id: 'cfa-probability',
    title: 'Probability',
    reels: [
      {
        kind: 'concept',
        title: 'Probability',
        body: [
          'Probability quantifies the likelihood of an event, between 0 and 1.',
          'Expected value weights each outcome by its probability.',
          'It underpins risk assessment and decision-making under uncertainty.',
        ],
        formula: 'Expected value = Σ (probability × outcome)',
      },
    ],
    mcqs: [
      { q: 'A probability can range between:', options: ['−1 and 1', '0 and 1', '0 and 100 always', '1 and 10'], answer: 1, explanation: 'Probabilities lie between 0 and 1.' },
      { q: 'Expected value weights outcomes by their:', options: ['Size only', 'Probability', 'Tax', 'Age'], answer: 1, explanation: 'EV = Σ probability × outcome.', tricky: true },
      { q: 'A probability of 0 means the event is:', options: ['Certain', 'Impossible', 'Likely', 'Random'], answer: 1, explanation: '0 means it cannot happen.' },
      { q: 'Probability helps with decisions under:', options: ['Certainty', 'Uncertainty', 'No information', 'Fixed outcomes'], answer: 1, explanation: 'It frames choices amid uncertainty.' },
    ],
  },
  {
    id: 'cfa-statistics',
    title: 'Statistics',
    reels: [
      {
        kind: 'list',
        title: 'Statistics',
        body: [
          'Mean, median and mode describe central tendency; standard deviation describes dispersion (risk).',
          'Correlation (−1 to +1) measures how two variables move together.',
          'A normal distribution places ~68% of outcomes within one standard deviation.',
        ],
      },
    ],
    mcqs: [
      { q: 'Standard deviation measures:', options: ['Central tendency', 'Dispersion (spread/risk)', 'Correlation', 'Return only'], answer: 1, explanation: 'It quantifies dispersion around the mean.' },
      { q: 'Correlation ranges from:', options: ['0 to 1', '−1 to +1', '−100 to 100', '1 to 10'], answer: 1, explanation: 'Correlation is bounded −1 to +1.', tricky: true },
      { q: 'In a normal distribution, ~68% of outcomes fall within:', options: ['±0.5 SD', '±1 SD', '±3 SD', '±5 SD'], answer: 1, explanation: 'About 68% lie within one standard deviation.', tricky: true },
      { q: 'The most common value in a dataset is the:', options: ['Mean', 'Median', 'Mode', 'Range'], answer: 2, explanation: 'The mode is the most frequent value.' },
    ],
  },
  {
    id: 'cfa-economics',
    title: 'Economics',
    reels: [
      {
        kind: 'concept',
        title: 'Economics',
        body: [
          'Economics studies how societies allocate scarce resources.',
          'Microeconomics looks at individual markets; macroeconomics at the whole economy.',
          'Prices coordinate supply and demand.',
        ],
      },
    ],
    mcqs: [
      { q: 'Economics fundamentally deals with:', options: ['Unlimited resources', 'Allocating scarce resources', 'Only money', 'Only taxes'], answer: 1, explanation: 'Scarcity drives economic choices.' },
      { q: 'Prices act to:', options: ['Coordinate supply and demand', 'Fix output', 'Eliminate trade', 'Set taxes'], answer: 0, explanation: 'Prices balance supply and demand.', tricky: true },
      { q: 'The study of the whole economy is:', options: ['Microeconomics', 'Macroeconomics', 'Accounting', 'Statistics'], answer: 1, explanation: 'Macro looks at aggregate output, inflation, etc.' },
      { q: 'Individual market behaviour is studied in:', options: ['Macroeconomics', 'Microeconomics', 'Ethics', 'Probability'], answer: 1, explanation: 'Micro examines individual decisions and markets.' },
    ],
  },
  {
    id: 'cfa-microeconomics',
    title: 'Microeconomics',
    reels: [
      {
        kind: 'concept',
        title: 'Microeconomics',
        body: [
          'Microeconomics studies consumers, firms and how prices form in individual markets.',
          'Demand slopes down, supply slopes up; equilibrium is where they meet.',
          'Elasticity measures how quantity responds to price changes.',
        ],
      },
    ],
    mcqs: [
      { q: 'Market equilibrium is where:', options: ['Supply is zero', 'Supply meets demand', 'Prices are fixed', 'Demand is infinite'], answer: 1, explanation: 'Equilibrium is the supply–demand intersection.' },
      { q: 'Demand for a necessity is typically:', options: ['Highly elastic', 'Inelastic', 'Infinite', 'Negative'], answer: 1, explanation: 'Necessities show inelastic demand.', tricky: true },
      { q: 'A demand curve usually slopes:', options: ['Downward', 'Upward', 'Flat', 'Vertical always'], answer: 0, explanation: 'Higher prices reduce quantity demanded.' },
      { q: 'Elasticity measures the response of quantity to:', options: ['Time', 'Price changes', 'Colour', 'Tax season'], answer: 1, explanation: 'Elasticity is quantity sensitivity to price.' },
    ],
  },
  {
    id: 'cfa-macroeconomics',
    title: 'Macroeconomics',
    reels: [
      {
        kind: 'concept',
        title: 'Macroeconomics',
        body: [
          'Macroeconomics studies aggregates: GDP, inflation, unemployment and the business cycle.',
          'Monetary policy (central banks) and fiscal policy (governments) steer the economy.',
          'Macro conditions shape asset returns broadly.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which is a macroeconomic variable?', options: ['One firm’s price', 'GDP', 'A single stock', 'A coupon'], answer: 1, explanation: 'GDP is an economy-wide aggregate.' },
      { q: 'Monetary policy is run by the:', options: ['Government treasury', 'Central bank', 'Companies', 'Exchange'], answer: 1, explanation: 'Central banks conduct monetary policy.' },
      { q: 'Fiscal policy uses:', options: ['Interest rates', 'Taxes and government spending', 'QE', 'Reserve requirements'], answer: 1, explanation: 'Fiscal policy = taxation and spending.', tricky: true },
      { q: 'Macro conditions affect:', options: ['No assets', 'Asset returns broadly', 'Only bonds', 'Only cash'], answer: 1, explanation: 'The macro backdrop moves markets broadly.' },
    ],
  },
];

const financeAnalysis: Topic[] = [
  {
    id: 'cfa-financial-statements',
    title: 'Financial Statements',
    reels: [
      {
        kind: 'list',
        title: 'Financial Statements',
        body: [
          'The income statement, balance sheet and cash-flow statement report performance, position and cash.',
          'Prepared under standards (IFRS/GAAP) for comparability.',
          'Notes and disclosures add essential context.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which shows position at a point in time?', options: ['Income statement', 'Balance sheet', 'Cash-flow statement', 'Notes'], answer: 1, explanation: 'The balance sheet is a snapshot.' },
      { q: 'Statements are prepared under:', options: ['No rules', 'IFRS or GAAP', 'CAPM', 'PMLA'], answer: 1, explanation: 'Standards ensure comparability.', tricky: true },
      { q: 'Performance over a period is shown by the:', options: ['Balance sheet', 'Income statement', 'Cash-flow statement', 'AGM'], answer: 1, explanation: 'The income statement covers a period.' },
      { q: 'The notes to accounts provide:', options: ['Nothing useful', 'Essential context and detail', 'Only the logo', 'Share prices'], answer: 1, explanation: 'Disclosures add vital context.' },
    ],
  },
  {
    id: 'cfa-ratio-analysis',
    title: 'Ratio Analysis',
    reels: [
      {
        kind: 'list',
        title: 'Ratio Analysis',
        body: [
          'Ratios interpret statements: liquidity, profitability, solvency and efficiency.',
          'Examples: current ratio, net margin, ROE, debt-to-equity, asset turnover.',
          'Compare to peers and over time for meaning.',
        ],
      },
    ],
    mcqs: [
      { q: 'The current ratio measures:', options: ['Profitability', 'Liquidity', 'Leverage', 'Growth'], answer: 1, explanation: 'It gauges short-term liquidity.' },
      { q: 'ROE = net income ÷:', options: ['Assets', 'Equity', 'Revenue', 'Debt'], answer: 1, explanation: 'Return on equity divides profit by equity.', tricky: true },
      { q: 'Debt-to-equity measures:', options: ['Liquidity', 'Leverage', 'Margin', 'Turnover'], answer: 1, explanation: 'It gauges financial leverage.' },
      { q: 'Ratios are meaningful when:', options: ['Viewed alone', 'Compared to peers/history', 'Rounded', 'Ignored'], answer: 1, explanation: 'Comparison gives context.' },
    ],
  },
  {
    id: 'cfa-corporate-finance',
    title: 'Corporate Finance',
    reels: [
      {
        kind: 'concept',
        title: 'Corporate Finance',
        body: [
          'Corporate finance concerns how firms raise capital and invest it to create value.',
          'Key decisions: investment (what projects), financing (debt vs equity) and dividends.',
          'The goal is to maximise long-term shareholder value.',
        ],
      },
    ],
    mcqs: [
      { q: 'The overarching goal of corporate finance is to:', options: ['Minimise sales', 'Maximise long-term shareholder value', 'Avoid all debt', 'Pay maximum tax'], answer: 1, explanation: 'Value creation for owners is the aim.' },
      { q: 'The three core decisions are investment, financing and:', options: ['Marketing', 'Dividends', 'Hiring', 'Auditing'], answer: 1, explanation: 'Investment, financing and dividend decisions.', tricky: true },
      { q: 'The financing decision concerns:', options: ['Which projects to pick', 'The mix of debt and equity', 'Marketing spend', 'Office location'], answer: 1, explanation: 'Financing = the capital structure mix.' },
      { q: 'The investment decision is about:', options: ['Debt vs equity', 'Which projects/assets to fund', 'Dividend size', 'Tax filing'], answer: 1, explanation: 'It chooses value-adding projects.' },
    ],
  },
  {
    id: 'cfa-capital-budgeting',
    title: 'Capital Budgeting',
    reels: [
      {
        kind: 'formula',
        title: 'Capital Budgeting',
        body: [
          'Capital budgeting evaluates long-term investment projects.',
          'Net Present Value (NPV) discounts a project’s cash flows; accept if NPV > 0.',
          'The Internal Rate of Return (IRR) is the discount rate where NPV = 0.',
        ],
        formula: 'NPV = Σ CFₜ ÷ (1 + r)ᵗ − Initial investment',
      },
    ],
    mcqs: [
      { q: 'A project should be accepted if its NPV is:', options: ['Negative', 'Greater than zero', 'Zero always', 'Unknown'], answer: 1, explanation: 'Positive NPV adds value.' },
      { q: 'IRR is the discount rate at which NPV equals:', options: ['The investment', 'Zero', 'Revenue', 'Infinity'], answer: 1, explanation: 'IRR sets NPV to zero.', tricky: true },
      { q: 'NPV uses the concept of:', options: ['Time value of money', 'Beta only', 'Book value', 'Par'], answer: 0, explanation: 'It discounts future cash flows to today.' },
      { q: 'Between two projects, generally prefer the one with:', options: ['Lower NPV', 'Higher NPV', 'Negative NPV', 'No cash flows'], answer: 1, explanation: 'Higher NPV creates more value (all else equal).' },
    ],
  },
  {
    id: 'cfa-cost-of-capital',
    title: 'Cost of Capital',
    reels: [
      {
        kind: 'formula',
        title: 'Cost of Capital',
        body: [
          'The cost of capital is the return investors require to fund a firm.',
          'WACC blends the after-tax cost of debt and the cost of equity by their weights.',
          'Projects should earn more than the cost of capital to add value.',
        ],
        formula: 'WACC = (E/V)·Re + (D/V)·Rd·(1 − tax)',
      },
    ],
    mcqs: [
      { q: 'WACC blends the cost of equity and the:', options: ['Coupon', 'After-tax cost of debt', 'Dividend', 'Tax refund'], answer: 1, explanation: 'WACC weights equity and after-tax debt costs.' },
      { q: 'Debt’s cost is taken after-tax because interest is:', options: ['Tax-free income', 'Tax-deductible', 'Not paid', 'A dividend'], answer: 1, explanation: 'Interest deductibility creates a tax shield.', tricky: true },
      { q: 'A project adds value if its return exceeds the:', options: ['Coupon', 'Cost of capital', 'Dividend', 'Tax rate'], answer: 1, explanation: 'Earning above WACC creates value.' },
      { q: 'The cost of equity is often estimated with:', options: ['CAPM', 'The current ratio', 'RSI', 'Duration'], answer: 0, explanation: 'CAPM: Rf + β × equity risk premium.' },
    ],
  },
];

const portfolioInvestments: Topic[] = [
  {
    id: 'cfa-portfolio-management',
    title: 'Portfolio Management',
    reels: [
      {
        kind: 'concept',
        title: 'Portfolio Management',
        body: [
          'Portfolio management builds and maintains a mix of investments to meet a client’s objectives and constraints.',
          'The process: plan (IPS), execute (build the portfolio), and monitor/rebalance.',
          'It focuses on the portfolio as a whole, not individual securities in isolation.',
        ],
      },
    ],
    mcqs: [
      { q: 'Portfolio management focuses on:', options: ['One stock at a time', 'The portfolio as a whole', 'Only bonds', 'Only cash'], answer: 1, explanation: 'It manages the overall mix, not isolated picks.' },
      { q: 'The document capturing objectives and constraints is the:', options: ['DRHP', 'IPS', 'NAV', 'ISIN'], answer: 1, explanation: 'The Investment Policy Statement guides decisions.', tricky: true },
      { q: 'Rebalancing means:', options: ['Never trading', 'Restoring target weights', 'Doubling risk', 'Selling everything'], answer: 1, explanation: 'Rebalancing returns the portfolio to target allocation.' },
      { q: 'The portfolio process begins with:', options: ['Executing trades', 'Planning (the IPS)', 'Selling', 'Monitoring only'], answer: 1, explanation: 'Planning via the IPS comes first.' },
    ],
  },
  {
    id: 'cfa-diversification',
    title: 'Diversification',
    reels: [
      {
        kind: 'concept',
        title: 'Diversification',
        body: [
          'Diversification combines assets that don’t move together to reduce risk for a given return.',
          'It reduces unsystematic (specific) risk but not systematic (market) risk.',
          'The benefit is greatest when correlations are low or negative.',
        ],
      },
    ],
    mcqs: [
      { q: 'Diversification reduces:', options: ['Systematic risk', 'Unsystematic (specific) risk', 'All risk to zero', 'Returns'], answer: 1, explanation: 'It cuts company-specific risk.' },
      { q: 'Diversification works best with correlations that are:', options: ['+1', 'Low or negative', 'Exactly 0.9', '+2'], answer: 1, explanation: 'Low/negative correlation maximises the benefit.', tricky: true },
      { q: 'Diversification cannot remove:', options: ['Specific risk', 'Systematic (market) risk', 'Any risk', 'Sector risk'], answer: 1, explanation: 'Market-wide risk remains.' },
      { q: 'Two perfectly correlated assets provide diversification benefit of:', options: ['Large', 'None', 'Infinite', 'Negative'], answer: 1, explanation: 'Correlation +1 gives no diversification.', tricky: true },
    ],
  },
  {
    id: 'cfa-asset-allocation',
    title: 'Asset Allocation',
    reels: [
      {
        kind: 'concept',
        title: 'Asset Allocation',
        body: [
          'Asset allocation divides a portfolio across asset classes (equity, debt, cash, alternatives).',
          'It is the dominant driver of long-term portfolio outcomes.',
          'Strategic allocation sets long-run weights; tactical makes short-term tilts.',
        ],
      },
    ],
    mcqs: [
      { q: 'Asset allocation spreads capital across:', options: ['One stock', 'Asset classes', 'Sectors only', 'One fund'], answer: 1, explanation: 'It divides across asset classes.' },
      { q: 'Asset allocation is the ______ driver of long-term returns.', options: ['Smallest', 'Biggest', 'Only', 'Irrelevant'], answer: 1, explanation: 'It dominates long-run outcomes.', tricky: true },
      { q: 'Long-run target weights come from ______ allocation.', options: ['Tactical', 'Strategic', 'Random', 'Reverse'], answer: 1, explanation: 'Strategic sets the long-term mix.', tricky: true },
      { q: 'A more risk-averse investor holds ______ equity.', options: ['More', 'Less', 'Only', 'Unlimited'], answer: 1, explanation: 'Lower risk tolerance → smaller equity weight.' },
    ],
  },
  {
    id: 'cfa-equity-investments',
    title: 'Equity Investments',
    reels: [
      {
        kind: 'concept',
        title: 'Equity Investments',
        body: [
          'Equities represent ownership; returns come from price gains and dividends.',
          'They are the most junior claim — higher risk, higher potential return.',
          'They can be held directly or via funds and ETFs.',
        ],
      },
    ],
    mcqs: [
      { q: 'Equity returns come from dividends and:', options: ['Coupons', 'Price appreciation', 'Interest', 'Tax refunds'], answer: 1, explanation: 'Capital gains plus dividends.' },
      { q: 'Equity is the ______ claim on a company.', options: ['Most senior', 'Most junior (residual)', 'Only', 'Government'], answer: 1, explanation: 'Equity is paid last, after creditors.', tricky: true },
      { q: 'Equities can be accessed via:', options: ['Only direct shares', 'Direct shares, funds and ETFs', 'Only bonds', 'Only cash'], answer: 1, explanation: 'Funds and ETFs give diversified equity exposure.' },
      { q: 'Compared to bonds, equities generally have:', options: ['Lower risk and return', 'Higher risk and potential return', 'No risk', 'Fixed coupons'], answer: 1, explanation: 'Equity carries more risk and upside than debt.' },
    ],
  },
  {
    id: 'cfa-fixed-income',
    title: 'Fixed Income',
    reels: [
      {
        kind: 'concept',
        title: 'Fixed Income',
        body: [
          'Fixed-income securities are debt that pays interest and returns principal at maturity.',
          'They rank ahead of equity and typically carry lower risk and return.',
          'Prices move inversely with interest rates.',
        ],
      },
    ],
    mcqs: [
      { q: 'Fixed income is fundamentally:', options: ['Ownership', 'Debt paying interest', 'A derivative', 'A currency'], answer: 1, explanation: 'Bonds are debt instruments.' },
      { q: 'Bond prices move ______ with interest rates.', options: ['Directly', 'Inversely', 'Randomly', 'Not at all'], answer: 1, explanation: 'Price and yield are inversely related.', tricky: true },
      { q: 'Fixed income ranks ______ equity in a wind-up.', options: ['Below', 'Above (senior)', 'Equal to', 'After'], answer: 1, explanation: 'Debt is senior to equity.' },
      { q: 'Relative to equities, bonds usually have:', options: ['Higher risk', 'Lower risk and return', 'No maturity', 'Voting rights'], answer: 1, explanation: 'Debt is typically lower risk/return than equity.' },
    ],
  },
  {
    id: 'cfa-alternatives',
    title: 'Alternative Investments',
    reels: [
      {
        kind: 'list',
        title: 'Alternative Investments',
        body: [
          'Alternatives include real estate, commodities, private equity, hedge funds and infrastructure.',
          'They can diversify a portfolio and hedge inflation, but are often less liquid with higher fees.',
          'They tend to be less correlated with stocks and bonds.',
        ],
      },
    ],
    mcqs: [
      { q: 'Which is an alternative investment?', options: ['A government bond', 'Private equity', 'A blue-chip stock', 'A savings account'], answer: 1, explanation: 'PE, real estate, hedge funds and commodities are alternatives.' },
      { q: 'Alternatives are often:', options: ['Highly liquid and cheap', 'Less liquid with higher fees', 'Risk-free', 'Government-backed'], answer: 1, explanation: 'They trade less easily and cost more.', tricky: true },
      { q: 'A benefit of alternatives is:', options: ['Guaranteed returns', 'Diversification / low correlation', 'Zero fees', 'No risk'], answer: 1, explanation: 'Low correlation can diversify a portfolio.' },
      { q: 'Commodities can serve as a hedge against:', options: ['Deflation only', 'Inflation', 'Dividends', 'Coupons'], answer: 1, explanation: 'Commodities often hedge inflation.' },
    ],
  },
  {
    id: 'cfa-derivatives',
    title: 'Derivatives',
    reels: [
      {
        kind: 'concept',
        title: 'Derivatives',
        body: [
          'A derivative’s value derives from an underlying asset; main types are forwards, futures, options and swaps.',
          'They are used to hedge risk, gain exposure efficiently, or speculate.',
          'Options give a right; forwards/futures create an obligation.',
        ],
      },
    ],
    mcqs: [
      { q: 'A derivative derives value from:', options: ['A central bank', 'An underlying asset', 'A dividend', 'The auditor'], answer: 1, explanation: 'Its value depends on an underlying.' },
      { q: 'An option gives the buyer:', options: ['An obligation', 'A right, not obligation', 'A coupon', 'Ownership'], answer: 1, explanation: 'Options confer a right without obligation.', tricky: true },
      { q: 'Derivatives are used to:', options: ['Only speculate', 'Hedge, gain exposure or speculate', 'Pay dividends', 'Issue equity'], answer: 1, explanation: 'They serve hedging, exposure and speculation.' },
      { q: 'A swap exchanges:', options: ['Ownership', 'Streams of cash flows', 'Currencies at spot only', 'Nothing'], answer: 1, explanation: 'Swaps exchange cash flows over time.' },
    ],
  },
];

const riskThemes: Topic[] = [
  {
    id: 'cfa-risk-management',
    title: 'Risk Management',
    reels: [
      {
        kind: 'list',
        title: 'Risk Management',
        body: [
          'Risk management identifies, measures and controls the risks a portfolio or firm faces.',
          'Risk types: market, credit, liquidity and operational.',
          'Tools include diversification, hedging, limits and insurance.',
        ],
      },
    ],
    mcqs: [
      { q: 'The risk of a counterparty defaulting is:', options: ['Market risk', 'Credit risk', 'Liquidity risk', 'Operational risk'], answer: 1, explanation: 'Credit risk is default risk.' },
      { q: 'Risk from failed processes or systems is:', options: ['Market risk', 'Operational risk', 'Credit risk', 'Currency risk'], answer: 1, explanation: 'Operational risk arises from internal failures.', tricky: true },
      { q: 'A tool to manage risk is:', options: ['Ignoring it', 'Diversification and hedging', 'Adding leverage', 'Guessing'], answer: 1, explanation: 'Diversification, hedging, limits and insurance manage risk.' },
      { q: 'Risk management first requires:', options: ['Selling everything', 'Identifying and measuring risks', 'Maximising risk', 'Nothing'], answer: 1, explanation: 'You must identify and measure before controlling.' },
    ],
  },
  {
    id: 'cfa-behavioral-finance',
    title: 'Behavioral Finance',
    reels: [
      {
        kind: 'concept',
        title: 'Behavioral Finance',
        body: [
          'Behavioral finance studies how psychology causes investors to deviate from rational decisions.',
          'Common biases: overconfidence, loss aversion, herding and anchoring.',
          'Awareness of biases helps investors make better decisions.',
        ],
      },
    ],
    mcqs: [
      { q: 'Behavioral finance studies the effect of ______ on decisions.', options: ['Taxes', 'Psychology/biases', 'Interest rates only', 'Currencies'], answer: 1, explanation: 'It examines psychological influences on choices.' },
      { q: 'Feeling losses more than equivalent gains is:', options: ['Herding', 'Loss aversion', 'Anchoring', 'Overconfidence'], answer: 1, explanation: 'Loss aversion weights losses more heavily.', tricky: true },
      { q: 'Following the crowd is:', options: ['Anchoring', 'Herding', 'Diversification', 'Hedging'], answer: 1, explanation: 'Herding is copying others’ actions.' },
      { q: 'Over-relying on an initial figure is:', options: ['Anchoring', 'Loss aversion', 'Herding', 'Arbitrage'], answer: 0, explanation: 'Anchoring fixates on a reference point.', tricky: true },
    ],
  },
  {
    id: 'cfa-esg',
    title: 'ESG Investing',
    reels: [
      {
        kind: 'concept',
        title: 'ESG Investing',
        body: [
          'ESG investing incorporates Environmental, Social and Governance factors into analysis and decisions.',
          'It aims to manage long-term risks and align investments with values.',
          'Approaches include screening, integration and impact investing.',
        ],
      },
    ],
    mcqs: [
      { q: 'ESG stands for Environmental, Social and:', options: ['Growth', 'Governance', 'Gains', 'Global'], answer: 1, explanation: 'ESG = Environmental, Social, Governance.' },
      { q: 'ESG factors are used to:', options: ['Guarantee returns', 'Manage long-term risks and align values', 'Avoid all tax', 'Time the market'], answer: 1, explanation: 'ESG addresses long-term risk and values.', tricky: true },
      { q: 'Excluding certain sectors is an ESG approach called:', options: ['Screening', 'Hedging', 'Arbitrage', 'Anchoring'], answer: 0, explanation: 'Negative screening excludes undesirable holdings.' },
      { q: 'Governance in ESG covers:', options: ['Carbon only', 'Board structure, ethics and controls', 'Only labour', 'Only pollution'], answer: 1, explanation: 'Governance covers how a company is run and controlled.' },
    ],
  },
];

export const cfa: Course = {
  id: 'cfa-if',
  title: 'CFA Investment Foundations',
  shortTitle: 'CFA Foundations',
  provider: 'CFA Institute',
  accent: '#6470b4',
  glyph: '🎓',
  tagline:
    'CFA Institute’s free certificate covering the essentials of the global investment industry — ethics, tools, instruments, portfolios and risk.',
  overview: [
    'The CFA Institute Investment Foundations® Certificate is a free, entry-level programme covering the fundamentals of the investment industry.',
    'It suits anyone working with the industry — operations, compliance, marketing, IT — not just front-office analysts, and needs no finance background.',
    'This course breaks the syllabus into every topic across ethics, quantitative and economic tools, financial analysis and corporate finance, portfolios and investments, and risk and modern themes.',
  ],
  examPattern: {
    format: 'Online, multiple-choice final assessment',
    duration: '~2–3 hours; self-paced study of the modules beforehand',
    questions: '~100 multiple-choice questions in the final assessment',
    passing: 'Approximately 70% (standard set by CFA Institute); certificate on passing',
    validity: 'Certificate does not expire',
    fee: 'Free (programme and assessment offered at no cost)',
    negativeMarking: 'None',
  },
  sources: [
    { name: 'CFA Institute — Investment Foundations Certificate', url: 'https://www.cfainstitute.org/programs/investment-foundations' },
    { name: 'CFA Institute', url: 'https://www.cfainstitute.org/' },
    { name: 'CFA Institute — Code of Ethics & Standards', url: 'https://www.cfainstitute.org/insights/professional-learning/code-of-ethics-standards-of-conduct-guidance' },
  ],
  modules: [
    {
      id: 'cfa-industry',
      title: 'Ethics & the Financial System',
      summary:
        'The ethical foundation and how the system works — ethics, professional standards, markets and instruments.',
      topics: ethicsSystem,
    },
    {
      id: 'cfa-tools',
      title: 'Quantitative & Economic Tools',
      summary:
        'The analytical toolkit — risk & return, time value of money, DCF, probability, statistics and economics.',
      topics: tools,
    },
    {
      id: 'cfa-finance',
      title: 'Financial Analysis & Corporate Finance',
      summary:
        'Reading statements and firm decisions — ratios, corporate finance, capital budgeting and cost of capital.',
      topics: financeAnalysis,
    },
    {
      id: 'cfa-instruments',
      title: 'Portfolio & Investments',
      summary:
        'Building portfolios — management, diversification, allocation, and equity, fixed income, alternatives and derivatives.',
      topics: portfolioInvestments,
    },
    {
      id: 'cfa-structure',
      title: 'Risk & Modern Themes',
      summary:
        'Managing risk and today’s themes — risk management, behavioral finance and ESG investing.',
      topics: riskThemes,
    },
  ],
};
