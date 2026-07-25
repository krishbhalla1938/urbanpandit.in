import type { Course } from '../types';

export const ncfm: Course = {
  id: 'ncfm',
  title: 'NCFM Certification',
  shortTitle: 'NCFM',
  provider: 'NSE Academy',
  accent: '#b5632a',
  glyph: '🪙',
  tagline:
    'NSE Academy’s Certification in Financial Markets — the online-tested modules covering India’s capital markets, trading, derivatives and analysis.',
  overview: [
    'NCFM (NSE Academy Certification in Financial Markets) is an online certification programme run by NSE Academy, a subsidiary of the National Stock Exchange of India.',
    'It offers a wide range of modules across Foundation, Intermediate and Advanced levels — from market overviews to capital-market dealing, derivatives, and technical/fundamental analysis.',
    'This course distils the most widely taken modules: the Indian securities-market overview, the Capital Market (Dealers) Module, the Derivatives Market, and analysis methods used to research securities.',
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
      title: 'Indian Securities Market — Overview',
      summary:
        'Primary vs secondary markets, the key products, and the institutions that make up India’s market ecosystem.',
      topics: [
        {
          id: 'ncfm-overview-t',
          title: 'Indian Securities Market — Overview',
          reels: [
            {
              kind: 'concept',
              title: 'Primary and secondary markets',
              body: [
                'The primary market is where securities are issued for the first time — e.g. an Initial Public Offering (IPO) raises fresh capital for the issuer.',
                'The secondary market is where already-issued securities trade between investors — the stock exchange. The issuer gets no new money here.',
                'Together they let companies raise capital and give investors liquidity to buy and sell.',
              ],
              keyTerms: [
                { term: 'IPO', def: 'Initial Public Offering — a company’s first sale of shares to the public.' },
                { term: 'Secondary market', def: 'Where existing securities are traded among investors, e.g. NSE/BSE.' },
              ],
            },
            {
              kind: 'list',
              title: 'The market ecosystem',
              body: [
                'SEBI regulates the securities market; stock exchanges (NSE, BSE) provide the trading platform.',
                'Depositories (NSDL, CDSL) hold securities in demat form; Depository Participants are their interface with investors.',
                'Clearing corporations guarantee settlement; brokers/trading members give investors market access.',
                'Products include equity shares, bonds/debentures, mutual funds, ETFs and derivatives.',
              ],
            },
            {
              kind: 'insight',
              title: 'Indices and dematerialisation',
              body: [
                'A market index (e.g. NIFTY 50) tracks a basket of stocks to represent overall market movement.',
                'The NIFTY 50 is NSE’s flagship index of 50 large, liquid Indian companies across sectors.',
                'Dematerialisation converts physical share certificates into electronic form, making trading faster and safer.',
              ],
              tip: 'Trades in India settle on a T+1 rolling basis for equities — a frequently tested fact.',
            },
          ],
          mcqs: [
            {
              q: 'An IPO takes place in the:',
              options: ['Secondary market', 'Primary market', 'Derivatives market', 'Money market'],
              answer: 1,
              explanation: 'An IPO is a first-time issue of securities, which occurs in the primary market.',
            },
            {
              q: 'In the secondary market, the issuing company receives:',
              options: ['Fresh capital', 'No new money — trades are between investors', 'A dividend', 'A coupon'],
              answer: 1,
              explanation: 'Secondary-market trades occur between investors; the issuer gets no new funds.',
            },
            {
              q: 'The flagship index of the NSE is the:',
              options: ['SENSEX', 'NIFTY 50', 'Dow Jones', 'FTSE 100'],
              answer: 1,
              explanation: 'NIFTY 50 is NSE’s benchmark index of 50 large, liquid companies.',
            },
            {
              q: 'Dematerialisation refers to:',
              options: ['Converting electronic shares to paper', 'Converting physical certificates into electronic form', 'Issuing new shares', 'Paying dividends'],
              answer: 1,
              explanation: 'Demat converts physical share certificates into electronic holdings in a depository.',
            },
            {
              q: 'Securities in India are held electronically by:',
              options: ['SEBI', 'NSDL and CDSL', 'The RBI', 'AMFI'],
              answer: 1,
              explanation: 'NSDL and CDSL are the two depositories holding securities in demat form.',
            },
            {
              q: 'Equity trades in India currently settle on a rolling basis of:',
              options: ['T+5', 'T+3', 'T+1', 'Same day only'],
              answer: 2,
              explanation: 'Indian equity markets follow a T+1 rolling settlement cycle.',
            },
            {
              q: 'The regulator of the Indian securities market is:',
              options: ['RBI', 'SEBI', 'NSE', 'IRDAI'],
              answer: 1,
              explanation: 'SEBI regulates securities markets; NSE and BSE are exchanges it oversees.',
            },
            {
              q: 'A market index is used to:',
              options: ['Guarantee returns', 'Represent overall market movement via a basket of stocks', 'Set interest rates', 'Issue new shares'],
              answer: 1,
              explanation: 'An index tracks a representative basket to indicate broad market direction.',
            },
            {
              q: 'Which of these is a primary-market activity?',
              options: ['Buying shares on NSE from another investor', 'Subscribing to a company’s IPO', 'Selling shares intraday', 'Trading NIFTY futures'],
              answer: 1,
              explanation: 'Subscribing to an IPO is a primary-market activity — capital goes to the issuer.',
            },
            {
              q: 'A Depository Participant (DP) acts as the interface between the investor and the:',
              options: ['Stock exchange', 'Depository', 'Clearing bank', 'Registrar'],
              answer: 1,
              explanation: 'A DP is an agent of the depository (NSDL/CDSL) serving the investor.',
            },
          ],
        },
      ],
    },
    {
      id: 'ncfm-capital',
      title: 'Capital Market (Dealers) Module',
      summary:
        'The trading mechanism, order types, market participants, and clearing and settlement of cash-market trades.',
      topics: [
        {
          id: 'ncfm-capital-t',
          title: 'Capital Market (Dealers) Module',
          reels: [
            {
              kind: 'concept',
              title: 'The trading mechanism',
              body: [
                'NSE runs a fully automated, screen-based, order-driven trading system (NEAT). Orders are matched by price-time priority.',
                'A trading member (broker) enters orders on behalf of clients; the best-priced order gets matched first, and at equal price the earliest order wins.',
                'Market participants include trading members, investors, and market makers.',
              ],
              keyTerms: [
                { term: 'Order-driven market', def: 'Prices set by buy/sell orders in the book, matched by price-time priority.' },
                { term: 'Price-time priority', def: 'Best price matched first; among equal prices, the earliest order is filled first.' },
              ],
            },
            {
              kind: 'list',
              title: 'Order types',
              body: [
                'Market order: executes immediately at the best available price.',
                'Limit order: executes only at a specified price or better.',
                'Stop-loss order: triggers once the market reaches a trigger price, to limit losses.',
                'Orders also carry time conditions (Day, IOC) and quantity conditions.',
              ],
              tip: 'A limit order controls price but not certainty of execution; a market order controls execution but not price.',
            },
            {
              kind: 'insight',
              title: 'Clearing and settlement',
              body: [
                'After trading, the clearing corporation (NSE Clearing) determines obligations via netting and guarantees settlement as central counterparty.',
                'Funds and securities are exchanged on the settlement day (T+1). A Settlement Guarantee Fund backstops defaults.',
                'Margins (initial/VaR, mark-to-market) are collected to manage risk before settlement.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'NSE’s trading system matches orders based on:',
              options: ['Broker size', 'Price-time priority', 'Alphabetical order', 'Random selection'],
              answer: 1,
              explanation: 'Orders are matched by best price first; among equal prices, the earliest entered wins.',
            },
            {
              q: 'A market order is executed:',
              options: ['Only at a set price', 'Immediately at the best available price', 'At the closing price', 'Never'],
              answer: 1,
              explanation: 'A market order fills immediately at the best available price, prioritising execution.',
            },
            {
              q: 'A limit order guarantees:',
              options: ['Immediate execution', 'A price at least as good as specified, but not execution', 'The closing price', 'A dividend'],
              answer: 1,
              explanation: 'A limit order executes only at the limit price or better; it may not execute at all.',
            },
            {
              q: 'A stop-loss order is designed to:',
              options: ['Maximise leverage', 'Limit losses by triggering at a set price', 'Pay dividends', 'Issue new shares'],
              answer: 1,
              explanation: 'A stop-loss triggers a trade once a trigger price is reached, capping potential losses.',
            },
            {
              q: 'The entity that acts as central counterparty and guarantees settlement is the:',
              options: ['Depository', 'Clearing corporation', 'SEBI', 'Broker'],
              answer: 1,
              explanation: 'The clearing corporation nets obligations and guarantees settlement as central counterparty.',
            },
            {
              q: 'NSE’s screen-based trading system is known as:',
              options: ['NEAT', 'BOLT', 'SWIFT', 'RTGS'],
              answer: 0,
              explanation: 'NEAT (National Exchange for Automated Trading) is NSE’s trading system; BOLT is BSE’s.',
            },
            {
              q: 'An order-driven market means prices are determined by:',
              options: ['Market makers only', 'Buy and sell orders in the order book', 'The regulator', 'The clearing bank'],
              answer: 1,
              explanation: 'In an order-driven market the order book’s bids and offers set prices.',
            },
            {
              q: 'Margins collected before settlement primarily serve to:',
              options: ['Increase broker profit', 'Manage counterparty and market risk', 'Pay dividends', 'Reduce taxes'],
              answer: 1,
              explanation: 'Margins (VaR, MTM) cushion against price moves and default risk before settlement.',
            },
            {
              q: 'Netting in clearing means:',
              options: ['Each trade settled individually', 'Offsetting obligations to a single net amount per member', 'Cancelling all trades', 'Doubling obligations'],
              answer: 1,
              explanation: 'Netting offsets a member’s buys and sells into a single net payable/receivable.',
            },
            {
              q: 'A Settlement Guarantee Fund exists to:',
              options: ['Pay bonuses', 'Backstop settlement in case of member default', 'Fund IPOs', 'Set interest rates'],
              answer: 1,
              explanation: 'The SGF ensures settlement is completed even if a member defaults.',
            },
          ],
        },
      ],
    },
    {
      id: 'ncfm-deriv',
      title: 'Derivatives Market (Dealers) Module',
      summary:
        'Futures and options on the NSE — contract specs, payoffs, margining and settlement in the F&O segment.',
      topics: [
        {
          id: 'ncfm-deriv-t',
          title: 'Derivatives Market (Dealers) Module',
          reels: [
            {
              kind: 'concept',
              title: 'Futures on the NSE',
              body: [
                'A futures contract is a standardised agreement to buy or sell an underlying at a set price on a future date, traded on the exchange.',
                'Index futures (e.g. NIFTY) and stock futures are the main equity futures. Each has a defined lot size and expiry.',
                'The futures price typically trades near spot plus cost of carry; the gap is the “basis”.',
              ],
              formula: 'Futures ≈ Spot × (1 + r)^t − dividends',
              keyTerms: [
                { term: 'Basis', def: 'The difference between the futures price and the spot price.' },
                { term: 'Cost of carry', def: 'Financing cost of holding the underlying until expiry, net of income.' },
              ],
            },
            {
              kind: 'list',
              title: 'Options on the NSE',
              body: [
                'A call is the right to buy; a put is the right to sell, at the strike price by/at expiry.',
                'Indian index options are European-style (exercisable only at expiry); many are cash-settled.',
                'Option value = intrinsic value + time value; time value decays as expiry approaches (theta).',
                'Buyers pay premium and have limited loss; writers receive premium and post margins.',
              ],
              tip: 'Moneyness: a call is ITM when spot > strike; a put is ITM when spot < strike.',
            },
            {
              kind: 'insight',
              title: 'Margining and settlement',
              body: [
                'F&O positions require SPAN (initial) margin plus exposure margin, marked-to-market daily.',
                'Index derivatives settle in cash; single-stock F&O in India settle by physical delivery on expiry.',
                'The clearing corporation is the central counterparty guaranteeing every derivative trade.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'A futures contract is:',
              options: ['A customised OTC agreement', 'A standardised exchange-traded agreement', 'An ownership stake', 'A bond'],
              answer: 1,
              explanation: 'Futures are standardised and exchange-traded, unlike customised OTC forwards.',
            },
            {
              q: 'The difference between the futures price and the spot price is the:',
              options: ['Premium', 'Basis', 'Strike', 'Coupon'],
              answer: 1,
              explanation: 'The basis is futures price minus spot price, reflecting cost of carry.',
            },
            {
              q: 'Indian index options are generally:',
              options: ['American-style', 'European-style, exercisable only at expiry', 'Never exercised', 'Physically settled in the index'],
              answer: 1,
              explanation: 'NSE index options are European-style and cash-settled.',
            },
            {
              q: 'A put option is In-the-Money when:',
              options: ['Spot > strike', 'Spot < strike', 'Spot = strike', 'The premium is zero'],
              answer: 1,
              explanation: 'A put profits when the underlying falls, so it is ITM when spot is below the strike.',
            },
            {
              q: 'An option’s value is made up of intrinsic value plus:',
              options: ['Coupon value', 'Time value', 'Par value', 'Basis'],
              answer: 1,
              explanation: 'Option value = intrinsic value + time value; time value erodes toward expiry.',
            },
            {
              q: 'The decay of an option’s time value as expiry approaches is measured by:',
              options: ['Delta', 'Theta', 'Vega', 'Rho'],
              answer: 1,
              explanation: 'Theta measures how much value an option loses per day due to time decay.',
            },
            {
              q: 'Single-stock F&O in India are settled by:',
              options: ['Cash only', 'Physical delivery on expiry', 'No settlement', 'Delivery of index units'],
              answer: 1,
              explanation: 'Stock derivatives are physically settled at expiry; index derivatives are cash-settled.',
            },
            {
              q: 'The initial margin for F&O positions is based on the:',
              options: ['Broker’s discretion', 'SPAN margining system', 'Dividend yield', 'Face value'],
              answer: 1,
              explanation: 'SPAN computes initial margin from portfolio risk; exposure margin is added on top.',
            },
            {
              q: 'The maximum loss for an option buyer is:',
              options: ['Unlimited', 'The premium paid', 'The strike price', 'The lot size'],
              answer: 1,
              explanation: 'An option buyer’s loss is capped at the premium; writers face larger risk.',
            },
            {
              q: 'Who guarantees performance of every derivative trade on the exchange?',
              options: ['The broker', 'The clearing corporation', 'SEBI', 'The depository'],
              answer: 1,
              explanation: 'The clearing corporation is the central counterparty guaranteeing settlement.',
            },
          ],
        },
      ],
    },
    {
      id: 'ncfm-analysis',
      title: 'Fundamental & Technical Analysis',
      summary:
        'The two research approaches used to value and time securities — company fundamentals versus price/chart signals.',
      topics: [
        {
          id: 'ncfm-analysis-t',
          title: 'Fundamental & Technical Analysis',
          reels: [
            {
              kind: 'concept',
              title: 'Fundamental analysis',
              body: [
                'Fundamental analysis estimates a security’s intrinsic value from economic, industry and company factors — the “E-I-C” top-down approach.',
                'It studies financial statements and ratios (P/E, ROE, debt-to-equity, EPS growth) to judge whether a stock is under- or over-valued.',
                'The aim is to buy securities trading below intrinsic value and avoid those above it.',
              ],
              keyTerms: [
                { term: 'Intrinsic value', def: 'The “true” value of a security based on fundamentals.' },
                { term: 'EPS', def: 'Earnings per share — net profit divided by shares outstanding.' },
              ],
            },
            {
              kind: 'list',
              title: 'Technical analysis',
              body: [
                'Technical analysis studies price and volume charts to forecast future moves, assuming price reflects all information and moves in trends.',
                'Tools include support/resistance, moving averages, trendlines, and momentum indicators like RSI and MACD.',
                'Chart patterns (head-and-shoulders, double top/bottom) are used to anticipate reversals or continuations.',
              ],
              tip: 'RSI above 70 is often read as overbought; below 30 as oversold.',
            },
            {
              kind: 'insight',
              title: 'Two lenses, one decision',
              body: [
                'Fundamental analysis answers “what to buy” (value); technical analysis answers “when to buy” (timing).',
                'Many practitioners combine both — fundamentals to select, technicals to time entries and exits.',
                'The Efficient Market Hypothesis challenges both, arguing prices already reflect available information.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'Fundamental analysis primarily seeks to determine a security’s:',
              options: ['Chart pattern', 'Intrinsic value', 'Trading volume', 'Beta only'],
              answer: 1,
              explanation: 'Fundamental analysis estimates intrinsic value from economic, industry and company data.',
            },
            {
              q: 'The E-I-C top-down approach analyses the economy, industry and:',
              options: ['Interest rates', 'Company', 'Index', 'Currency'],
              answer: 1,
              explanation: 'E-I-C stands for Economy, Industry and Company analysis.',
            },
            {
              q: 'Technical analysis is based mainly on:',
              options: ['Financial statements', 'Price and volume data', 'Dividend policy', 'Tax rates'],
              answer: 1,
              explanation: 'Technical analysis studies historical price and volume to forecast future moves.',
            },
            {
              q: 'An RSI reading above 70 typically signals a stock is:',
              options: ['Oversold', 'Overbought', 'Fairly valued', 'Delisted'],
              answer: 1,
              explanation: 'RSI over 70 is commonly interpreted as overbought; under 30 as oversold.',
            },
            {
              q: 'A price level where buying interest tends to halt a decline is called:',
              options: ['Resistance', 'Support', 'A moving average', 'A dividend'],
              answer: 1,
              explanation: 'Support is a level where demand tends to stop prices falling further.',
            },
            {
              q: 'Moving averages are used in technical analysis to:',
              options: ['Compute taxes', 'Smooth price data and identify trends', 'Value bonds', 'Set margins'],
              answer: 1,
              explanation: 'Moving averages smooth noise to reveal the underlying trend direction.',
            },
            {
              q: 'Which ratio is a fundamental-analysis valuation measure?',
              options: ['RSI', 'P/E ratio', 'MACD', 'Bollinger Band'],
              answer: 1,
              explanation: 'P/E is a fundamental valuation ratio; RSI, MACD and Bollinger Bands are technical tools.',
            },
            {
              q: 'A “head-and-shoulders” is a:',
              options: ['Valuation ratio', 'Chart reversal pattern', 'Type of bond', 'Margin rule'],
              answer: 1,
              explanation: 'It is a technical chart pattern often signalling a trend reversal.',
            },
            {
              q: 'Broadly, fundamental analysis helps decide “what to buy” while technicals help decide:',
              options: ['Who to buy from', 'When to buy', 'The tax rate', 'The dividend'],
              answer: 1,
              explanation: 'Fundamentals address value (what); technicals address timing (when).',
            },
            {
              q: 'The Efficient Market Hypothesis argues that prices:',
              options: ['Are always wrong', 'Already reflect available information', 'Ignore all news', 'Are set by regulators'],
              answer: 1,
              explanation: 'EMH holds that prices incorporate available information, challenging both analysis styles.',
            },
          ],
        },
      ],
    },
  ],
};
