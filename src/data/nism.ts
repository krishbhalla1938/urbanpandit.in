import type { Course } from '../types';

export const nism: Course = {
  id: 'nism',
  title: 'NISM Certifications',
  shortTitle: 'NISM',
  provider: 'NISM · SEBI',
  accent: '#1f7a5a',
  glyph: '🏛️',
  tagline:
    'The SEBI-mandated certifications for India’s securities-market professionals — regulatory framework plus the flagship Mutual Fund, Equity Derivatives and market-foundation modules.',
  overview: [
    'The National Institute of Securities Markets (NISM) is a public trust established by SEBI, the securities-market regulator of India, to build market expertise.',
    'NISM Certification Examinations are mandatory for many roles — mutual-fund distributors, derivatives dealers, research analysts, investment advisers, depository participants and more — under SEBI regulations.',
    'This course covers the shared regulatory framework and the three most-taken exams: Series V-A (Mutual Fund Distributors), Series VIII (Equity Derivatives) and the Securities Markets Foundation.',
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
      title: 'NISM & the Regulatory Framework',
      summary:
        'Who regulates India’s markets, why NISM certification is mandatory, and the SEBI structure every module builds on.',
      topics: [
        {
          id: 'nism-framework-t',
          title: 'NISM & the Regulatory Framework',
          reels: [
            {
              kind: 'concept',
              title: 'SEBI, NISM and mandatory certification',
              body: [
                'SEBI (Securities and Exchange Board of India), established under the SEBI Act 1992, is the statutory regulator that protects investors and develops and regulates the securities market.',
                'NISM was set up by SEBI in 2006 as a public trust to develop market professionals through education, certification and research.',
                'Under SEBI’s Certification of Associated Persons Regulations, people in specified roles must pass the relevant NISM exam to be legally allowed to operate.',
              ],
              keyTerms: [
                { term: 'SEBI', def: 'The securities-market regulator of India, created by the SEBI Act, 1992.' },
                { term: 'NISM', def: 'National Institute of Securities Markets — SEBI’s educational and certification arm.' },
                { term: 'Associated person', def: 'An individual in a role that SEBI requires to hold a certification.' },
              ],
            },
            {
              kind: 'list',
              title: 'The main NISM certification series',
              body: [
                'Series V-A: Mutual Fund Distributors — for anyone selling or distributing mutual funds.',
                'Series VIII: Equity Derivatives — for dealers/traders in the equity F&O segment.',
                'Series X-A / X-B: Investment Adviser (Levels 1 & 2).',
                'Series XV: Research Analyst. Series VI: Depository Operations. Series VII: Securities Operations & Risk Management (SORM).',
              ],
              tip: 'Certificates are generally valid for 3 years and can be renewed via a CPE programme before expiry.',
            },
            {
              kind: 'insight',
              title: 'Key market institutions',
              body: [
                'Stock exchanges (NSE, BSE) provide the trading platform; SEBI regulates them.',
                'Depositories (NSDL, CDSL) hold securities in dematerialised (electronic) form; Depository Participants are their agents.',
                'Clearing corporations (e.g. NSE Clearing) guarantee settlement and manage counterparty risk.',
                'AMFI is the industry body for mutual funds; the ARN is the registration number a distributor needs.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'SEBI was established as a statutory body under which Act?',
              options: ['Companies Act 2013', 'SEBI Act 1992', 'RBI Act 1934', 'Securities Contracts (Regulation) Act 1956'],
              answer: 1,
              explanation: 'SEBI became a statutory regulator under the SEBI Act, 1992.',
            },
            {
              q: 'NISM was established by:',
              options: ['The Reserve Bank of India', 'SEBI', 'The Ministry of Corporate Affairs', 'The Bombay Stock Exchange'],
              answer: 1,
              explanation: 'NISM is a public trust set up by SEBI in 2006 to develop securities-market professionals.',
            },
            {
              q: 'Which NISM series is mandatory for a mutual-fund distributor?',
              options: ['Series VIII', 'Series V-A', 'Series XV', 'Series VI'],
              answer: 1,
              explanation: 'Series V-A (Mutual Fund Distributors Certification) is required to distribute mutual funds.',
            },
            {
              q: 'Securities in India are held in electronic form by:',
              options: ['Stock exchanges', 'Depositories (NSDL and CDSL)', 'AMCs', 'Clearing members only'],
              answer: 1,
              explanation: 'NSDL and CDSL are the two depositories that hold securities in dematerialised form.',
            },
            {
              q: 'A NISM certificate is typically valid for:',
              options: ['1 year', '3 years', '5 years', 'Lifetime'],
              answer: 1,
              explanation: 'Most NISM certifications are valid for 3 years and can be renewed via a CPE programme.',
            },
            {
              q: 'The primary objective of SEBI is to:',
              options: ['Maximise government revenue', 'Protect investors and regulate/develop the securities market', 'Set interest rates', 'Print currency'],
              answer: 1,
              explanation: 'SEBI’s mandate is investor protection and the regulation and development of the securities market.',
            },
            {
              q: 'The registration number a mutual-fund distributor obtains from AMFI is the:',
              options: ['PAN', 'ARN', 'DIN', 'CIN'],
              answer: 1,
              explanation: 'The AMFI Registration Number (ARN) is required to distribute mutual funds after passing Series V-A.',
            },
            {
              q: 'Which body guarantees settlement and manages counterparty risk on an exchange?',
              options: ['SEBI', 'The clearing corporation', 'The depository', 'AMFI'],
              answer: 1,
              explanation: 'The clearing corporation acts as central counterparty, guaranteeing settlement of trades.',
            },
            {
              q: 'NISM Series XV certifies which role?',
              options: ['Research Analyst', 'Mutual Fund Distributor', 'Depository Operations', 'Equity Derivatives'],
              answer: 0,
              explanation: 'Series XV is the Research Analyst Certification.',
            },
            {
              q: 'A “Depository Participant” acts as an agent of the:',
              options: ['Stock exchange', 'Depository', 'Reserve Bank', 'Mutual fund'],
              answer: 1,
              explanation: 'A DP is an intermediary that provides depository services to investors on behalf of NSDL/CDSL.',
            },
          ],
        },
      ],
    },
    {
      id: 'nism-mf',
      title: 'Series V-A — Mutual Fund Distributors',
      summary:
        'Mutual-fund structure, NAV, scheme types, taxation and the fair-selling practices that dominate India’s most-taken exam.',
      topics: [
        {
          id: 'nism-mf-t',
          title: 'Mutual Fund Distributors',
          reels: [
            {
              kind: 'concept',
              title: 'How a mutual fund is built',
              body: [
                'A mutual fund pools money from many investors and invests it, per a stated objective, in a professionally managed portfolio.',
                'India’s three-tier structure: the Sponsor sets it up; the Trustees safeguard investor interest; the Asset Management Company (AMC) manages the money.',
                'The fund is constituted as a Trust and regulated under SEBI (Mutual Funds) Regulations, 1996.',
              ],
              keyTerms: [
                { term: 'AMC', def: 'Asset Management Company — the entity that manages the scheme’s investments for a fee.' },
                { term: 'Trustee', def: 'Holds the fund’s assets in trust and oversees the AMC on investors’ behalf.' },
                { term: 'Custodian', def: 'Holds the fund’s securities in safekeeping.' },
              ],
            },
            {
              kind: 'formula',
              title: 'NAV — the price of a unit',
              body: [
                'Net Asset Value is the per-unit market value of the scheme, computed and published every business day.',
                'Investors buy and redeem at NAV (adjusted for any exit load); mutual funds in India are no-entry-load.',
                'Expense ratio is the annual cost of running the fund, capped by SEBI and deducted from returns.',
              ],
              formula: 'NAV = (Total assets − Total liabilities) ÷ Number of outstanding units',
              tip: 'Higher expense ratios directly reduce investor returns — a favourite exam point.',
            },
            {
              kind: 'list',
              title: 'Scheme types, SIPs and taxation',
              body: [
                'By structure: open-ended (buy/sell anytime), close-ended (fixed tenure), interval funds.',
                'By asset class: equity, debt, hybrid, and solution-oriented; ELSS equity funds give a Section 80C tax deduction with a 3-year lock-in.',
                'A Systematic Investment Plan (SIP) invests a fixed sum periodically, averaging cost over time (rupee-cost averaging).',
                'Equity funds held >12 months attract long-term capital-gains tax; debt-fund taxation depends on prevailing rules.',
              ],
              tip: 'Distributors must follow SEBI/AMFI fair-practice and KYC norms and disclose commissions.',
            },
          ],
          mcqs: [
            {
              q: 'In India’s mutual-fund structure, the day-to-day investment decisions are made by the:',
              options: ['Sponsor', 'Trustees', 'Asset Management Company (AMC)', 'Custodian'],
              answer: 2,
              explanation: 'The AMC manages the scheme’s portfolio; trustees oversee it and the sponsor sets it up.',
            },
            {
              q: 'Net Asset Value (NAV) is calculated as:',
              options: ['(Assets − Liabilities) ÷ Units outstanding', 'Assets ÷ Liabilities', 'Units × Face value', 'Total return ÷ Expense ratio'],
              answer: 0,
              explanation: 'NAV per unit = (total assets − total liabilities) divided by the number of outstanding units.',
            },
            {
              q: 'A mutual fund in India is legally constituted as a:',
              options: ['Company', 'Partnership', 'Trust', 'Cooperative'],
              answer: 2,
              explanation: 'Indian mutual funds are set up as trusts under the SEBI (Mutual Funds) Regulations, 1996.',
            },
            {
              q: 'ELSS funds offer a tax deduction under Section 80C and carry a lock-in of:',
              options: ['1 year', '3 years', '5 years', 'No lock-in'],
              answer: 1,
              explanation: 'Equity Linked Savings Schemes have a 3-year lock-in — the shortest among 80C options.',
            },
            {
              q: 'An open-ended scheme allows investors to:',
              options: ['Buy and redeem units on an ongoing basis at NAV', 'Trade only at maturity', 'Never redeem', 'Buy only during the NFO'],
              answer: 0,
              explanation: 'Open-ended funds continuously issue and redeem units at NAV-linked prices.',
            },
            {
              q: 'A Systematic Investment Plan (SIP) primarily helps investors by:',
              options: ['Guaranteeing returns', 'Averaging purchase cost over time', 'Eliminating all risk', 'Avoiding taxation'],
              answer: 1,
              explanation: 'SIPs invest fixed amounts periodically, achieving rupee-cost averaging — not guaranteed returns.',
            },
            {
              q: 'The annual cost of managing a fund, deducted from returns, is the:',
              options: ['Exit load', 'Expense ratio', 'Entry load', 'NAV'],
              answer: 1,
              explanation: 'The expense ratio is the yearly operating cost as a % of assets, capped by SEBI.',
            },
            {
              q: 'Mutual funds in India currently charge:',
              options: ['Both entry and exit loads', 'No entry load (exit load may apply)', 'Only entry loads', 'A fixed 5% load'],
              answer: 1,
              explanation: 'SEBI abolished entry loads; an exit load may apply if units are redeemed early.',
            },
            {
              q: 'Who holds the securities of a mutual fund in safekeeping?',
              options: ['The distributor', 'The custodian', 'The registrar', 'The sponsor'],
              answer: 1,
              explanation: 'The custodian holds the fund’s securities; the RTA handles investor records and transactions.',
            },
            {
              q: 'Long-term capital gains treatment for an equity mutual fund generally applies after a holding period of:',
              options: ['1 month', 'More than 12 months', '24 months', '36 months'],
              answer: 1,
              explanation: 'For equity-oriented funds, gains on units held more than 12 months are treated as long-term.',
            },
          ],
        },
      ],
    },
    {
      id: 'nism-deriv',
      title: 'Series VIII — Equity Derivatives',
      summary:
        'Futures and options mechanics, payoffs, margins and settlement — the core of the equity F&O certification.',
      topics: [
        {
          id: 'nism-deriv-t',
          title: 'Equity Derivatives',
          reels: [
            {
              kind: 'concept',
              title: 'Forwards, futures and the derivative idea',
              body: [
                'A derivative’s value is derived from an underlying asset — a stock, index, currency or commodity.',
                'A forward is a customised OTC contract to buy/sell later at an agreed price. A future is its standardised, exchange-traded cousin, guaranteed by the clearing corporation.',
                'Derivatives are used for hedging (reducing risk), speculation (taking a view) and arbitrage (exploiting price differences).',
              ],
              keyTerms: [
                { term: 'Underlying', def: 'The asset a derivative’s value is based on.' },
                { term: 'Lot size', def: 'The fixed quantity of the underlying per derivative contract.' },
                { term: 'Expiry', def: 'The date a contract settles; Indian equity F&O expiries are standardised.' },
              ],
            },
            {
              kind: 'formula',
              title: 'Options — the right, not the obligation',
              subtitle: 'Calls, puts and payoffs',
              body: [
                'A Call gives the buyer the right (not obligation) to BUY the underlying at the strike price; a Put gives the right to SELL.',
                'The buyer pays a premium; the seller (writer) receives it and takes on the obligation.',
                'Buyer’s loss is capped at the premium; the option writer’s risk can be much larger, so writers post margins.',
              ],
              formula: 'Call payoff at expiry = max(0, Spot − Strike) − Premium',
              tip: 'An option is In-the-Money (ITM) when exercising it is profitable ignoring premium; OTM when it is not.',
            },
            {
              kind: 'list',
              title: 'Margins and settlement',
              body: [
                'Futures and short options require margins: Initial (SPAN) margin plus Exposure/Extreme-loss margin, marked-to-market daily.',
                'Mark-to-market (MTM) settles daily profit/loss by adjusting margin accounts.',
                'Indian equity derivatives are settled — most stock F&O now settle by physical delivery on expiry; index F&O settle in cash.',
                'The clearing corporation is the central counterparty, guaranteeing performance of every trade.',
              ],
              tip: 'Series VIII applies 25% negative marking — guessing is penalised, so eliminate wrong options first.',
            },
          ],
          mcqs: [
            {
              q: 'The value of a derivative is:',
              options: ['Fixed by SEBI', 'Derived from an underlying asset', 'Always equal to its premium', 'Independent of the market'],
              answer: 1,
              explanation: 'A derivative derives its value from an underlying such as a stock, index or currency.',
            },
            {
              q: 'The key difference between a forward and a futures contract is that a future is:',
              options: ['Customised and OTC', 'Standardised and exchange-traded', 'Never settled', 'Always physically delivered'],
              answer: 1,
              explanation: 'Futures are standardised, exchange-traded and cleared; forwards are customised OTC contracts.',
            },
            {
              q: 'A call option gives its buyer the right to:',
              options: ['Sell the underlying at the strike', 'Buy the underlying at the strike', 'Receive a fixed coupon', 'Vote at the AGM'],
              answer: 1,
              explanation: 'A call is the right (not obligation) to buy the underlying at the strike price.',
            },
            {
              q: 'The maximum loss for the buyer of an option is:',
              options: ['Unlimited', 'The premium paid', 'The strike price', 'The lot size'],
              answer: 1,
              explanation: 'An option buyer can lose at most the premium paid; the writer bears larger risk.',
            },
            {
              q: 'Using derivatives to reduce an existing risk is called:',
              options: ['Speculation', 'Hedging', 'Arbitrage', 'Writing'],
              answer: 1,
              explanation: 'Hedging uses derivatives to offset or reduce risk in an existing position.',
            },
            {
              q: 'Daily settlement of profit and loss on a futures position is called:',
              options: ['Physical settlement', 'Mark-to-market (MTM)', 'Novation', 'Rollover'],
              answer: 1,
              explanation: 'MTM adjusts margin accounts each day for gains and losses on open positions.',
            },
            {
              q: 'A call option is “In-the-Money” when the:',
              options: ['Spot price is above the strike', 'Spot price is below the strike', 'Premium is zero', 'Contract has expired'],
              answer: 0,
              explanation: 'For a call, ITM means spot > strike, so exercising has intrinsic value.',
            },
            {
              q: 'The party that receives the premium and takes on the obligation is the:',
              options: ['Option buyer', 'Option writer (seller)', 'Clearing corporation', 'Exchange'],
              answer: 1,
              explanation: 'The writer sells the option, collects the premium and is obligated if the buyer exercises.',
            },
            {
              q: 'Who acts as the central counterparty guaranteeing derivative trades?',
              options: ['SEBI', 'The clearing corporation', 'The depository', 'The AMC'],
              answer: 1,
              explanation: 'The clearing corporation guarantees settlement, becoming the buyer to every seller and vice versa.',
            },
            {
              q: 'Index futures and options in India are settled by:',
              options: ['Physical delivery of the index', 'Cash settlement', 'Delivery of gold', 'No settlement'],
              answer: 1,
              explanation: 'Index derivatives are cash-settled because an index cannot be physically delivered.',
            },
          ],
        },
      ],
    },
  ],
};
