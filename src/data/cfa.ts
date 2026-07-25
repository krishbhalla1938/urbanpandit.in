import type { Course } from '../types';

export const cfa: Course = {
  id: 'cfa-if',
  title: 'CFA Investment Foundations',
  shortTitle: 'CFA Foundations',
  provider: 'CFA Institute',
  accent: '#3a4db0',
  glyph: '🎓',
  tagline:
    'CFA Institute’s free certificate covering the essentials of the global investment industry — ethics, instruments, structure and client service.',
  overview: [
    'The CFA Institute Investment Foundations® Certificate (formerly Claritas) is a free, entry-level programme covering the fundamentals of the investment industry.',
    'It is designed for anyone who works with the industry — operations, HR, compliance, marketing, IT — not just front-office analysts, and needs no finance background.',
    'The syllabus spans seven modules across roughly twenty chapters: the industry overview, ethics and regulation, economics and analytical tools, investment instruments, industry structure, serving client needs, and industry controls.',
  ],
  examPattern: {
    format: 'Online, multiple-choice final assessment (proctored/online)',
    duration: '~2–3 hours; self-paced study of the seven modules beforehand',
    questions: '~100 multiple-choice questions in the final assessment',
    passing: 'Approximately 70% (a passing standard set by CFA Institute); certificate on passing',
    validity: 'Certificate does not expire',
    fee: 'Free (the programme and assessment are offered at no cost)',
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
      title: 'The Investment Industry & Ethics',
      summary:
        'What the industry does, the forces that shape it, and the ethical foundation that underpins trust in finance.',
      topics: [
        {
          id: 'cfa-industry-t',
          title: 'The Investment Industry & Ethics',
          reels: [
            {
              kind: 'concept',
              title: 'What the investment industry does',
              body: [
                'The investment industry connects savers (who have surplus capital) with users of capital (companies and governments who need it).',
                'It performs functions such as channelling savings into investment, price discovery, risk transfer, and providing liquidity.',
                'Participants include investors, financial intermediaries (banks, brokers, asset managers), and issuers of securities.',
              ],
              keyTerms: [
                { term: 'Financial intermediary', def: 'An institution that stands between savers and borrowers, e.g. a bank or asset manager.' },
                { term: 'Liquidity', def: 'The ease of converting an asset into cash without a large loss in value.' },
              ],
            },
            {
              kind: 'insight',
              title: 'Ethics: why trust is the industry’s currency',
              body: [
                'Ethics are moral principles that guide behaviour; the investment industry depends on trust because clients hand over their money.',
                'The CFA Institute Code of Ethics and Standards of Professional Conduct set the global benchmark for ethical behaviour.',
                'A framework for ethical decision-making helps professionals identify conflicts, consider stakeholders, and act with integrity.',
              ],
              tip: 'Foundations stresses distinguishing between what is legal and what is ethical — they are not always the same.',
            },
            {
              kind: 'list',
              title: 'Ethical principles in practice',
              body: [
                'Put client interests first and act with integrity, competence and diligence.',
                'Avoid or disclose conflicts of interest; never use material non-public information (that is insider trading).',
                'Maintain confidentiality and communicate fairly and honestly with clients.',
                'Fiduciary duty is the legal and ethical obligation to act in a client’s best interest.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'The core economic role of the investment industry is to:',
              options: ['Print money', 'Connect savers with users of capital', 'Set tax policy', 'Guarantee profits'],
              answer: 1,
              explanation: 'The industry channels capital from savers to those who need it, aiding investment and growth.',
            },
            {
              q: 'A financial intermediary is best described as an institution that:',
              options: ['Only lends to governments', 'Stands between savers and borrowers', 'Issues currency', 'Audits companies'],
              answer: 1,
              explanation: 'Intermediaries such as banks and asset managers connect providers and users of capital.',
            },
            {
              q: 'Ethics are best defined as:',
              options: ['The same thing as laws', 'Moral principles that guide behaviour', 'Accounting rules', 'Tax regulations'],
              answer: 1,
              explanation: 'Ethics are moral principles guiding conduct; they overlap with but are distinct from laws.',
            },
            {
              q: 'The global benchmark for ethical behaviour in the profession is the:',
              options: ['IFRS standards', 'CFA Institute Code of Ethics and Standards of Professional Conduct', 'Basel Accord', 'SEC rulebook'],
              answer: 1,
              explanation: 'CFA Institute’s Code and Standards are the widely recognised ethical benchmark.',
            },
            {
              q: 'Trading on material non-public information is:',
              options: ['Encouraged', 'Insider trading and prohibited', 'A fiduciary duty', 'Required disclosure'],
              answer: 1,
              explanation: 'Using material non-public information to trade is insider trading, which is unethical and illegal.',
            },
            {
              q: 'A fiduciary duty requires a professional to:',
              options: ['Maximise their own fees', 'Act in the client’s best interest', 'Favour the largest client', 'Avoid all disclosure'],
              answer: 1,
              explanation: 'Fiduciary duty is the obligation to put the client’s interests first.',
            },
            {
              q: 'Something can be legal yet still be:',
              options: ['Always ethical', 'Unethical', 'A fiduciary duty', 'Tax-free'],
              answer: 1,
              explanation: 'Legality and ethics are not identical — an action may be lawful but still unethical.',
            },
            {
              q: 'Liquidity refers to:',
              options: ['A company’s profit', 'How easily an asset converts to cash without large loss', 'The interest rate', 'A type of derivative'],
              answer: 1,
              explanation: 'Liquidity is the ease of turning an asset into cash at little cost.',
            },
            {
              q: 'When a professional faces a conflict of interest, best practice is to:',
              options: ['Ignore it', 'Avoid or disclose it', 'Exploit it quietly', 'Delegate it to the client'],
              answer: 1,
              explanation: 'Conflicts of interest should be avoided where possible and otherwise clearly disclosed.',
            },
            {
              q: 'Price discovery is the process by which:',
              options: ['Taxes are calculated', 'Markets determine the price of an asset through supply and demand', 'Dividends are paid', 'Currencies are printed'],
              answer: 1,
              explanation: 'Price discovery is how buyers and sellers interacting in a market set an asset’s price.',
            },
          ],
        },
      ],
    },
    {
      id: 'cfa-tools',
      title: 'Inputs & Analytical Tools',
      summary:
        'Economics, financial-statement analysis, and the quantitative concepts used to analyse investments.',
      topics: [
        {
          id: 'cfa-tools-t',
          title: 'Inputs & Analytical Tools',
          reels: [
            {
              kind: 'concept',
              title: 'Microeconomics and macroeconomics',
              body: [
                'Microeconomics studies individual decisions — supply, demand and how prices are set in markets.',
                'Macroeconomics studies the whole economy — GDP, inflation, unemployment and monetary/fiscal policy.',
                'Central banks use monetary policy (interest rates, money supply); governments use fiscal policy (tax and spending).',
              ],
              keyTerms: [
                { term: 'Monetary policy', def: 'Central-bank actions on interest rates and money supply to manage the economy.' },
                { term: 'Fiscal policy', def: 'Government taxing and spending decisions that influence the economy.' },
              ],
            },
            {
              kind: 'insight',
              title: 'Reading financial statements',
              body: [
                'The three key statements are the income statement, balance sheet and cash-flow statement.',
                'Ratio analysis interprets them: liquidity (current ratio), profitability (net margin, ROE), and solvency (debt-to-equity).',
                'Financial statements are prepared under standards such as IFRS or local GAAP to make them comparable.',
              ],
              formula: 'Current ratio = Current assets ÷ Current liabilities',
            },
            {
              kind: 'formula',
              title: 'The time value of money & risk',
              body: [
                'Money has a time value: a sum today is worth more than the same sum later because it can earn a return.',
                'Present value discounts future cash flows; future value compounds present sums forward.',
                'Return rewards risk: higher expected return generally comes with higher risk, and diversification reduces risk without sacrificing expected return proportionally.',
              ],
              formula: 'FV = PV × (1 + r)^n',
              tip: 'Compounding means interest earns interest — small rate differences grow hugely over long horizons.',
            },
          ],
          mcqs: [
            {
              q: 'Microeconomics primarily studies:',
              options: ['National GDP', 'Individual markets, supply and demand', 'Government budgets', 'Global trade balances'],
              answer: 1,
              explanation: 'Microeconomics focuses on individual decision-makers, prices, supply and demand.',
            },
            {
              q: 'Monetary policy is conducted by:',
              options: ['The government treasury', 'The central bank', 'Stock exchanges', 'Rating agencies'],
              answer: 1,
              explanation: 'Central banks set interest rates and manage money supply — that is monetary policy.',
            },
            {
              q: 'Fiscal policy refers to:',
              options: ['Interest-rate decisions', 'Government taxing and spending', 'Currency printing', 'Setting exchange rates'],
              answer: 1,
              explanation: 'Fiscal policy is the government’s use of taxation and public spending.',
            },
            {
              q: 'The current ratio measures:',
              options: ['Profitability', 'Short-term liquidity', 'Long-term solvency', 'Market value'],
              answer: 1,
              explanation: 'Current assets ÷ current liabilities gauges the firm’s ability to meet short-term obligations.',
            },
            {
              q: 'Return on Equity (ROE) measures profitability relative to:',
              options: ['Total assets', 'Shareholders’ equity', 'Revenue', 'Liabilities'],
              answer: 1,
              explanation: 'ROE = net income ÷ shareholders’ equity, showing profit generated per unit of equity.',
            },
            {
              q: 'International financial statements are commonly prepared under:',
              options: ['CAPM', 'IFRS or local GAAP', 'WACC', 'The SEBI Act'],
              answer: 1,
              explanation: 'IFRS and national GAAP frameworks standardise financial reporting for comparability.',
            },
            {
              q: 'The time value of money implies that a rupee today is worth:',
              options: ['Less than a rupee next year', 'More than a rupee next year', 'The same as next year', 'Nothing'],
              answer: 1,
              explanation: 'Because it can earn a return, money available now is worth more than the same amount later.',
            },
            {
              q: 'Compounding means that:',
              options: ['Interest is paid only on the principal', 'Interest earns interest over time', 'Returns fall over time', 'Risk disappears'],
              answer: 1,
              explanation: 'Compounding lets accumulated interest itself earn interest, accelerating growth.',
            },
            {
              q: 'Generally, higher expected return is associated with:',
              options: ['Lower risk', 'Higher risk', 'No risk', 'Guaranteed outcomes'],
              answer: 1,
              explanation: 'The risk–return trade-off: greater expected return usually requires accepting greater risk.',
            },
            {
              q: 'Diversification primarily works by:',
              options: ['Guaranteeing profits', 'Reducing risk by combining assets that don’t move together', 'Increasing leverage', 'Removing all return'],
              answer: 1,
              explanation: 'Combining imperfectly correlated assets lowers portfolio risk for a given expected return.',
            },
          ],
        },
      ],
    },
    {
      id: 'cfa-instruments',
      title: 'Investment Instruments',
      summary:
        'Equities, fixed income, derivatives and alternative investments — how each is structured and used.',
      topics: [
        {
          id: 'cfa-instruments-t',
          title: 'Investment Instruments',
          reels: [
            {
              kind: 'list',
              title: 'Equities and fixed income',
              body: [
                'Equity securities represent ownership; returns come from price appreciation and dividends, with residual (last) claim on assets.',
                'Fixed-income securities are debt; they pay interest and return principal, ranking ahead of equity in a wind-up.',
                'Money-market instruments are short-term debt (T-bills, commercial paper) prized for safety and liquidity.',
              ],
              keyTerms: [
                { term: 'Residual claim', def: 'Equity holders are paid last, after all creditors, on liquidation.' },
                { term: 'Coupon', def: 'The periodic interest a bond pays its holder.' },
              ],
            },
            {
              kind: 'concept',
              title: 'Derivatives',
              body: [
                'A derivative’s value derives from an underlying asset. The main types are forwards, futures, options and swaps.',
                'They are used to hedge risk, gain exposure efficiently, or speculate.',
                'Options give a right without obligation; forwards/futures create an obligation to transact at a set price.',
              ],
            },
            {
              kind: 'insight',
              title: 'Alternative investments & pooled vehicles',
              body: [
                'Alternatives include real estate, commodities, private equity, hedge funds and infrastructure — often less liquid and less correlated with stocks and bonds.',
                'Pooled vehicles let investors combine money: mutual funds, ETFs, and index funds provide diversification and professional management.',
                'ETFs trade on exchanges like shares; index funds passively track a benchmark at low cost.',
              ],
              tip: 'Foundations highlights that alternatives can diversify a portfolio but often carry higher fees and lower liquidity.',
            },
          ],
          mcqs: [
            {
              q: 'Equity securities represent:',
              options: ['A loan to the issuer', 'Ownership in a company', 'A fixed interest claim', 'A currency'],
              answer: 1,
              explanation: 'Equity is ownership with a residual claim on assets and earnings.',
            },
            {
              q: 'In a liquidation, equity holders are paid:',
              options: ['First', 'Before bondholders', 'Last, after creditors', 'Equally with creditors'],
              answer: 2,
              explanation: 'Equity is the residual claim — paid only after all creditors are satisfied.',
            },
            {
              q: 'Fixed-income securities are essentially:',
              options: ['Ownership stakes', 'Debt that pays interest and returns principal', 'Derivatives', 'Commodities'],
              answer: 1,
              explanation: 'Bonds are debt instruments paying interest (coupons) and repaying principal at maturity.',
            },
            {
              q: 'Treasury bills and commercial paper are examples of:',
              options: ['Equity', 'Money-market instruments', 'Derivatives', 'Real estate'],
              answer: 1,
              explanation: 'These are short-term debt (money-market) instruments valued for safety and liquidity.',
            },
            {
              q: 'A derivative derives its value from:',
              options: ['A central bank', 'An underlying asset', 'The dividend yield', 'The audit report'],
              answer: 1,
              explanation: 'Derivatives (forwards, futures, options, swaps) derive value from an underlying asset.',
            },
            {
              q: 'An option differs from a forward in that an option:',
              options: ['Creates an obligation to transact', 'Grants a right without obligation', 'Has no premium', 'Cannot be traded'],
              answer: 1,
              explanation: 'Options give the holder a right (not obligation) to transact; forwards create an obligation.',
            },
            {
              q: 'Which is an example of an alternative investment?',
              options: ['A government bond', 'A blue-chip stock', 'Private equity', 'A savings account'],
              answer: 2,
              explanation: 'Private equity, real estate, hedge funds and commodities are alternative investments.',
            },
            {
              q: 'An ETF is best described as a fund that:',
              options: ['Cannot be traded', 'Trades on an exchange like a share', 'Guarantees returns', 'Only holds cash'],
              answer: 1,
              explanation: 'Exchange-traded funds trade intraday on exchanges, unlike traditional mutual funds.',
            },
            {
              q: 'A key benefit of a pooled investment vehicle is:',
              options: ['Guaranteed profit', 'Diversification and professional management', 'Zero fees', 'No risk'],
              answer: 1,
              explanation: 'Pooling money enables diversification and access to professional management.',
            },
            {
              q: 'Compared with stocks and bonds, alternative investments are often:',
              options: ['More liquid and cheaper', 'Less liquid with higher fees', 'Risk-free', 'Always government-backed'],
              answer: 1,
              explanation: 'Alternatives tend to be less liquid and carry higher fees, though they can aid diversification.',
            },
          ],
        },
      ],
    },
    {
      id: 'cfa-structure',
      title: 'Industry Structure, Clients & Controls',
      summary:
        'How the industry is organised, how it serves different clients, and the controls that keep it safe.',
      topics: [
        {
          id: 'cfa-structure-t',
          title: 'Industry Structure, Clients & Controls',
          reels: [
            {
              kind: 'list',
              title: 'How the industry is structured',
              body: [
                'Buy-side firms (asset managers, pension funds, hedge funds) invest money on behalf of clients.',
                'Sell-side firms (brokers, investment banks) create, sell and trade securities and provide research.',
                'Support functions — custody, clearing, settlement, back office — keep transactions running.',
              ],
              keyTerms: [
                { term: 'Buy-side', def: 'Institutions that invest money, e.g. asset managers and pension funds.' },
                { term: 'Sell-side', def: 'Firms that create and sell securities and provide execution and research.' },
              ],
            },
            {
              kind: 'concept',
              title: 'Serving client needs',
              body: [
                'Clients range from individuals (retail) to institutions (pension funds, insurers, endowments).',
                'Understanding a client means assessing their objectives (return needs) and constraints (risk tolerance, time horizon, liquidity, taxes, legal).',
                'An Investment Policy Statement (IPS) documents these to guide portfolio decisions.',
              ],
              tip: 'Foundations frames suitability as matching investments to a client’s objectives and constraints — not just chasing returns.',
            },
            {
              kind: 'insight',
              title: 'Industry controls: risk, compliance and regulation',
              body: [
                'Regulation protects investors, ensures fair and orderly markets, and reduces systemic risk.',
                'Compliance functions make sure firms follow laws and internal policies; risk management identifies and controls exposures.',
                'Performance is measured and reported (e.g. against benchmarks) so clients can judge results fairly.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'Asset managers and pension funds are part of the:',
              options: ['Sell-side', 'Buy-side', 'Regulators', 'Custodians only'],
              answer: 1,
              explanation: 'The buy-side invests money on behalf of clients; the sell-side creates and sells securities.',
            },
            {
              q: 'Investment banks and brokers primarily operate on the:',
              options: ['Buy-side', 'Sell-side', 'Central bank', 'Treasury'],
              answer: 1,
              explanation: 'Sell-side firms create, distribute and trade securities and provide research.',
            },
            {
              q: 'A pension fund is an example of a(n):',
              options: ['Retail client', 'Institutional client', 'Regulator', 'Custodian'],
              answer: 1,
              explanation: 'Pension funds, insurers and endowments are institutional clients.',
            },
            {
              q: 'An Investment Policy Statement (IPS) documents a client’s:',
              options: ['Tax returns', 'Objectives and constraints', 'Bank passwords', 'Trading algorithms'],
              answer: 1,
              explanation: 'The IPS captures return objectives and constraints (risk, horizon, liquidity, tax, legal).',
            },
            {
              q: 'Which is a client constraint rather than an objective?',
              options: ['Target return', 'Time horizon', 'Alpha', 'Benchmark outperformance'],
              answer: 1,
              explanation: 'Constraints include time horizon, liquidity, taxes and legal factors; return is an objective.',
            },
            {
              q: 'The primary purpose of regulation is to:',
              options: ['Guarantee profits', 'Protect investors and ensure fair, orderly markets', 'Set share prices', 'Eliminate all risk'],
              answer: 1,
              explanation: 'Regulation protects investors, promotes fair markets and reduces systemic risk.',
            },
            {
              q: 'The function that ensures a firm follows laws and internal policies is:',
              options: ['Trading', 'Compliance', 'Marketing', 'Custody'],
              answer: 1,
              explanation: 'Compliance monitors adherence to legal requirements and internal rules.',
            },
            {
              q: 'Custody, clearing and settlement are examples of:',
              options: ['Front-office revenue generation', 'Support/back-office functions', 'Regulatory bodies', 'Client objectives'],
              answer: 1,
              explanation: 'These operational functions support and complete transactions behind the scenes.',
            },
            {
              q: 'Suitability means matching investments to a client’s:',
              options: ['Favourite brands', 'Objectives and constraints', 'Nationality', 'Age of account'],
              answer: 1,
              explanation: 'Suitability aligns recommendations with the client’s goals and constraints.',
            },
            {
              q: 'Investment performance is best judged by comparing returns to:',
              options: ['A random number', 'An appropriate benchmark', 'The highest fund available', 'The risk-free rate only'],
              answer: 1,
              explanation: 'Performance is measured against a suitable benchmark to give context to the returns.',
            },
          ],
        },
      ],
    },
  ],
};
