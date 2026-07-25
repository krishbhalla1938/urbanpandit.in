import type { Course } from '../types';

export const bmc: Course = {
  id: 'bmc',
  title: 'Bloomberg Market Concepts',
  shortTitle: 'Bloomberg BMC',
  provider: 'Bloomberg for Education',
  accent: '#3b6ea5',
  glyph: '📈',
  tagline:
    'Bloomberg’s self-paced e-learning course covering economics, currencies, fixed income and equities through the lens of the Terminal.',
  overview: [
    'Bloomberg Market Concepts (BMC) is a self-paced, ~8–10 hour online course from Bloomberg for Education that introduces the language and analysis of the financial markets.',
    'It is built around four core modules — Economic Indicators, Currencies, Fixed Income and Equities — and uses interviews with market experts, real Bloomberg data, and 70+ Terminal functions.',
    'Completing all modules and the embedded assessments earns a Bloomberg-issued certificate, widely used to demonstrate market literacy on a résumé.',
  ],
  examPattern: {
    format: 'Self-paced e-learning with embedded assessment questions',
    duration: '~8–10 hours total; complete at your own pace',
    questions: '~120 questions embedded across the four modules',
    passing: 'Complete all modules and answer the embedded questions to earn the certificate',
    validity: 'Certificate does not expire',
    fee: 'Free for students via participating universities; paid for individuals',
    negativeMarking: 'None',
  },
  sources: [
    { name: 'Bloomberg Market Concepts — official course page', url: 'https://portal.bloombergforeducation.com/bmc' },
    { name: 'Bloomberg for Education', url: 'https://bloombergforeducation.com/' },
    { name: 'Bloomberg Professional Services — Terminal', url: 'https://www.bloomberg.com/professional/' },
  ],
  modules: [
    {
      id: 'bmc-econ',
      title: 'Economic Indicators',
      summary:
        'How the health of an economy is measured — GDP, the business cycle, inflation and the indicators that move markets.',
      topics: [
        {
          id: 'bmc-econ-t',
          title: 'Economic Indicators',
          reels: [
            {
              kind: 'concept',
              title: 'The primacy of GDP',
              subtitle: 'Why one number anchors all of macro',
              body: [
                'Gross Domestic Product (GDP) is the total market value of all final goods and services produced within a country in a period. It is the single broadest gauge of economic activity.',
                'Investors watch GDP because corporate earnings, interest rates and currency values ultimately track the growth of the economy that produces them.',
                'GDP can be measured three equivalent ways — by output (production), by expenditure, and by income — and they should, in theory, all equal the same total.',
              ],
              formula: 'GDP (expenditure) = C + I + G + (X − M)',
              keyTerms: [
                { term: 'C', def: 'Consumption — household spending, the largest component in most economies.' },
                { term: 'I', def: 'Investment — business capital spending and inventories.' },
                { term: 'G', def: 'Government spending on goods and services.' },
                { term: 'X − M', def: 'Net exports — exports minus imports.' },
              ],
            },
            {
              kind: 'insight',
              title: 'Nominal vs real, and the business cycle',
              body: [
                'Nominal GDP is measured at current prices; real GDP strips out inflation so you can compare volumes across time. Markets care about real growth.',
                'Economies move through a business cycle: expansion → peak → contraction (recession) → trough → recovery.',
                'A common rule of thumb defines a recession as two consecutive quarters of falling real GDP, though official bodies use broader criteria.',
              ],
              tip: 'BMC stresses that GDP is released with a lag and is revised — so markets lean on timelier "indicators" to forecast it.',
            },
            {
              kind: 'list',
              title: 'The indicators that forecast growth',
              subtitle: 'Leading, coincident and lagging',
              body: [
                'Leading indicators move before the economy: PMI surveys, building permits, new orders, yield curve, stock prices.',
                'Coincident indicators move with the economy: industrial production, retail sales, employment.',
                'Lagging indicators confirm a trend after the fact: unemployment rate, CPI inflation, corporate profits.',
                'Inflation (CPI/PCE) matters because it drives central-bank policy — the single biggest force on asset prices.',
              ],
              tip: 'PMI above 50 signals expansion in that sector; below 50 signals contraction.',
            },
          ],
          mcqs: [
            {
              q: 'GDP measured by the expenditure approach equals:',
              options: ['C + I + G + (X − M)', 'C + I − G + (X + M)', 'Wages + Rent + Interest + Profit', 'C + S + T'],
              answer: 0,
              explanation: 'The expenditure approach sums Consumption, Investment, Government spending and Net exports (Exports − Imports).',
            },
            {
              q: 'The difference between nominal and real GDP is that real GDP:',
              options: ['Uses current market prices', 'Is adjusted for inflation', 'Excludes government spending', 'Includes only exports'],
              answer: 1,
              explanation: 'Real GDP is measured in constant prices, removing the effect of inflation so growth reflects changes in output volume.',
            },
            {
              q: 'A widely used rule-of-thumb definition of a recession is:',
              options: ['One quarter of falling GDP', 'Two consecutive quarters of falling real GDP', 'A single month of rising unemployment', 'Any fall in the stock market'],
              answer: 1,
              explanation: 'Two consecutive quarters of declining real GDP is the common shorthand, though official arbiters use a broader set of indicators.',
            },
            {
              q: 'Which is a LEADING economic indicator?',
              options: ['Unemployment rate', 'CPI inflation', 'Purchasing Managers’ Index (PMI)', 'Corporate profits'],
              answer: 2,
              explanation: 'PMI survey data tends to turn before the broader economy, making it a leading indicator. The others are lagging.',
            },
            {
              q: 'A PMI reading of 47 indicates that the sector is:',
              options: ['Expanding', 'Contracting', 'At full employment', 'In hyperinflation'],
              answer: 1,
              explanation: 'A PMI below 50 signals contraction; above 50 signals expansion. 47 is below 50.',
            },
            {
              q: 'The largest component of GDP in most developed economies is:',
              options: ['Government spending', 'Net exports', 'Consumption', 'Investment'],
              answer: 2,
              explanation: 'Household consumption typically makes up the largest share of GDP in developed economies.',
            },
            {
              q: 'Which sequence correctly orders the business cycle?',
              options: ['Peak → expansion → trough → contraction', 'Expansion → peak → contraction → trough', 'Trough → peak → expansion → contraction', 'Contraction → expansion → peak → trough'],
              answer: 1,
              explanation: 'The cycle runs expansion → peak → contraction → trough, then recovery back into expansion.',
            },
            {
              q: 'Rising CPI primarily matters to markets because it influences:',
              options: ['The number of listed companies', 'Central-bank interest-rate policy', 'The size of the labour force', 'Corporate dividend dates'],
              answer: 1,
              explanation: 'Inflation drives central-bank policy; expected rate changes then flow through to bonds, currencies and equities.',
            },
            {
              q: 'GDP data is generally regarded by traders as:',
              options: ['Instant and never revised', 'Timely and leading', 'Released with a lag and subject to revision', 'Irrelevant to markets'],
              answer: 2,
              explanation: 'GDP is backward-looking, published with a lag and frequently revised, so markets rely on timelier indicators to anticipate it.',
            },
            {
              q: 'The three equivalent ways of measuring GDP are output, expenditure and:',
              options: ['Income', 'Inflation', 'Interest', 'Inventory'],
              answer: 0,
              explanation: 'GDP can be measured by output (production), expenditure, or income — all three should sum to the same total.',
            },
          ],
        },
      ],
    },
    {
      id: 'bmc-fx',
      title: 'Currencies',
      summary:
        'How the world’s largest market works — exchange-rate mechanics, what drives currency value, and the role of central banks.',
      topics: [
        {
          id: 'bmc-fx-t',
          title: 'Currencies',
          reels: [
            {
              kind: 'concept',
              title: 'Currency market mechanics',
              body: [
                'The foreign-exchange (FX) market is the largest and most liquid market in the world, trading trillions of dollars a day, 24 hours across global sessions.',
                'Prices are always quoted as a pair, e.g. EUR/USD. The first currency is the base; the second is the quote. EUR/USD = 1.10 means one euro buys 1.10 US dollars.',
                'Most trading is over-the-counter between banks rather than on a central exchange.',
              ],
              keyTerms: [
                { term: 'Base currency', def: 'The first currency in a pair — the one being priced.' },
                { term: 'Quote currency', def: 'The second currency — the price of one unit of the base.' },
                { term: 'Appreciation', def: 'A currency gaining value relative to another.' },
              ],
            },
            {
              kind: 'insight',
              title: 'What drives a currency’s value',
              body: [
                'Interest-rate differentials: capital flows toward currencies offering higher real yields, pushing them up.',
                'Inflation: higher relative inflation erodes purchasing power and tends to weaken a currency over time (purchasing power parity).',
                'Trade and current-account balances, political stability, and risk sentiment (safe-haven flows to USD, JPY, CHF) also move rates.',
              ],
              tip: 'The "carry trade" borrows a low-yield currency to invest in a high-yield one — profitable until volatility spikes.',
            },
            {
              kind: 'list',
              title: 'Central banks and the real world',
              body: [
                'Central banks influence currencies mainly by setting policy interest rates and, at times, by direct intervention in FX markets.',
                'A fixed (pegged) regime ties a currency to another; a floating regime lets the market set the rate; many run managed floats.',
                'Currency moves feed back into the real economy: a weaker currency boosts exporters but raises the cost of imports and can import inflation.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'In the quote EUR/USD = 1.10, the euro is the:',
              options: ['Quote currency', 'Base currency', 'Cross rate', 'Reserve currency'],
              answer: 1,
              explanation: 'The first currency in a pair is the base; 1.10 is how many US dollars (the quote currency) one euro buys.',
            },
            {
              q: 'The FX market is best described as:',
              options: ['A single centralized exchange', 'The largest, most liquid market, largely OTC', 'Open only during New York hours', 'Smaller than the equity market'],
              answer: 1,
              explanation: 'FX is the world’s largest and most liquid market, trading around the clock and predominantly over-the-counter.',
            },
            {
              q: 'All else equal, a rise in a country’s real interest rates tends to make its currency:',
              options: ['Weaker', 'Stronger', 'Unchanged', 'Fixed'],
              answer: 1,
              explanation: 'Higher real yields attract capital inflows, increasing demand for the currency and pushing it up.',
            },
            {
              q: 'Purchasing Power Parity implies that a country with persistently higher inflation will see its currency:',
              options: ['Appreciate', 'Depreciate', 'Stay pegged', 'Become a safe haven'],
              answer: 1,
              explanation: 'Higher relative inflation erodes purchasing power, so PPP predicts the currency depreciates over time.',
            },
            {
              q: 'A "carry trade" typically involves:',
              options: ['Borrowing a high-yield currency to buy a low-yield one', 'Borrowing a low-yield currency to invest in a high-yield one', 'Only trading pegged currencies', 'Avoiding interest-rate differences'],
              answer: 1,
              explanation: 'The carry trade funds in a low-yielding currency and invests in a higher-yielding one to earn the rate differential.',
            },
            {
              q: 'Which currencies are traditionally considered safe havens?',
              options: ['USD, JPY, CHF', 'ZAR, TRY, BRL', 'INR, IDR, PHP', 'RUB, ARS, NGN'],
              answer: 0,
              explanation: 'The US dollar, Japanese yen and Swiss franc are classic safe-haven currencies that attract flows during risk-off episodes.',
            },
            {
              q: 'A currency whose value is allowed to be set entirely by supply and demand operates under a:',
              options: ['Fixed peg', 'Currency board', 'Floating regime', 'Gold standard'],
              answer: 2,
              explanation: 'Under a floating regime the market sets the exchange rate, unlike a fixed peg or currency board.',
            },
            {
              q: 'A weaker domestic currency generally:',
              options: ['Helps importers and hurts exporters', 'Helps exporters and raises import costs', 'Has no economic effect', 'Always lowers inflation'],
              answer: 1,
              explanation: 'A weaker currency makes exports cheaper abroad (helping exporters) but raises the cost of imports, which can import inflation.',
            },
            {
              q: 'Central banks most directly influence their currency by:',
              options: ['Setting corporate tax rates', 'Setting policy interest rates and intervening', 'Issuing equity', 'Fixing stock prices'],
              answer: 1,
              explanation: 'Policy rates (and occasional direct FX intervention) are central banks’ main levers over the exchange rate.',
            },
            {
              q: 'If USD/JPY moves from 150 to 155, the US dollar has:',
              options: ['Depreciated against the yen', 'Appreciated against the yen', 'Been pegged', 'Left the float'],
              answer: 1,
              explanation: 'A higher USD/JPY means one dollar now buys more yen, so the dollar has appreciated against the yen.',
            },
          ],
        },
      ],
    },
    {
      id: 'bmc-fi',
      title: 'Fixed Income',
      summary:
        'The bond market — how bonds are valued, the role of central bankers, and why the yield curve is a master signal.',
      topics: [
        {
          id: 'bmc-fi-t',
          title: 'Fixed Income',
          reels: [
            {
              kind: 'concept',
              title: 'The roots of the bond market',
              body: [
                'A bond is a loan: the issuer borrows money and promises to pay periodic coupons and return the face (par) value at maturity.',
                'The bond market is far larger than the equity market and is dominated by governments and corporations raising debt.',
                'A bond’s price and its yield move inversely — when price rises, yield falls, and vice versa.',
              ],
              keyTerms: [
                { term: 'Coupon', def: 'The periodic interest payment, usually fixed as a % of face value.' },
                { term: 'Yield to maturity', def: 'The total return if the bond is held to maturity, expressed as an annual rate.' },
                { term: 'Par value', def: 'The face amount repaid at maturity, typically 100.' },
              ],
            },
            {
              kind: 'insight',
              title: 'What drives bond prices',
              subtitle: 'Rates, inflation and credit risk',
              body: [
                'Interest rates: when market rates rise, existing bonds with lower fixed coupons become less attractive, so their prices fall.',
                'Inflation erodes the real value of fixed coupons, pushing yields up.',
                'Credit risk: the less creditworthy the issuer, the higher the yield investors demand — the "credit spread" over risk-free government bonds.',
                'Duration measures a bond’s price sensitivity to rate changes: longer duration = bigger price swings.',
              ],
              tip: 'Central banks set short-term rates; the market sets long-term rates based on growth and inflation expectations.',
            },
            {
              kind: 'list',
              title: 'The yield curve — a master signal',
              body: [
                'The yield curve plots yields across maturities for the same issuer (e.g. government bonds).',
                'Normal (upward-sloping): longer bonds yield more — the healthy default when growth is expected.',
                'Flat: little difference across maturities — uncertainty about the outlook.',
                'Inverted (downward-sloping): short yields exceed long yields — historically a reliable recession warning.',
              ],
              tip: 'An inverted yield curve has preceded most modern US recessions — BMC highlights it as the market’s recession radar.',
            },
          ],
          mcqs: [
            {
              q: 'A bond is fundamentally:',
              options: ['An ownership stake in a company', 'A loan to the issuer', 'A currency pair', 'A commodity future'],
              answer: 1,
              explanation: 'A bond represents debt — the investor lends to the issuer in exchange for coupons and repayment of par at maturity.',
            },
            {
              q: 'Bond prices and yields have what relationship?',
              options: ['Directly proportional', 'Inversely related', 'Unrelated', 'Equal at all times'],
              answer: 1,
              explanation: 'Price and yield move inversely: as price rises, yield falls, and vice versa.',
            },
            {
              q: 'When market interest rates rise, the price of an existing fixed-coupon bond will:',
              options: ['Rise', 'Fall', 'Stay the same', 'Double'],
              answer: 1,
              explanation: 'Existing bonds’ fixed coupons look less attractive versus new higher-yielding bonds, so their prices fall.',
            },
            {
              q: 'The extra yield a corporate bond pays over a comparable government bond is called the:',
              options: ['Coupon', 'Credit spread', 'Par value', 'Duration'],
              answer: 1,
              explanation: 'The credit spread compensates investors for the issuer’s higher default risk relative to the risk-free government bond.',
            },
            {
              q: 'Duration measures a bond’s:',
              options: ['Time to the next coupon', 'Sensitivity of price to interest-rate changes', 'Credit rating', 'Currency of issue'],
              answer: 1,
              explanation: 'Duration quantifies how much a bond’s price moves for a given change in yields; longer duration means larger swings.',
            },
            {
              q: 'An inverted yield curve is widely watched because it has historically:',
              options: ['Predicted stock-market rallies', 'Preceded recessions', 'Signalled higher dividends', 'Indicated currency pegs'],
              answer: 1,
              explanation: 'When short-term yields exceed long-term yields, it has been a reliable leading signal of recession.',
            },
            {
              q: 'Yield to maturity (YTM) is:',
              options: ['Only the coupon rate', 'The total annualised return if held to maturity', 'The par value', 'The issue price'],
              answer: 1,
              explanation: 'YTM captures coupons plus any gain or loss to par, expressed as a single annual return assuming the bond is held to maturity.',
            },
            {
              q: 'Short-term interest rates are set primarily by:',
              options: ['Corporations', 'Central banks', 'Rating agencies', 'Stock exchanges'],
              answer: 1,
              explanation: 'Central banks set the short end of the curve through policy rates; the long end reflects market expectations.',
            },
            {
              q: 'Compared with the equity market, the global bond market is:',
              options: ['Much smaller', 'Roughly the same size', 'Larger', 'Non-existent'],
              answer: 2,
              explanation: 'The global bond market is larger than the global equity market, dominated by government and corporate debt.',
            },
            {
              q: 'A "normal" yield curve slopes:',
              options: ['Downward', 'Upward', 'Perfectly flat', 'Vertically'],
              answer: 1,
              explanation: 'A normal yield curve slopes upward — longer maturities yield more, reflecting expected growth and term premium.',
            },
          ],
        },
      ],
    },
    {
      id: 'bmc-eq',
      title: 'Equities',
      summary:
        'The stock market — the nature of equities, how analysts value them (absolute and relative), and how risk is measured.',
      topics: [
        {
          id: 'bmc-eq-t',
          title: 'Equities',
          reels: [
            {
              kind: 'concept',
              title: 'The nature of equities',
              body: [
                'A share of stock is a fractional ownership claim on a company’s assets and future profits.',
                'Shareholders can earn returns two ways: capital gains (the price rising) and dividends (a share of profits paid out).',
                'Equities sit at the bottom of the capital structure — paid after debt — so they carry more risk but higher potential return.',
              ],
              keyTerms: [
                { term: 'Dividend', def: 'A cash distribution of profits to shareholders.' },
                { term: 'Market cap', def: 'Share price × shares outstanding — the market value of equity.' },
                { term: 'EPS', def: 'Earnings per share — net profit divided by shares outstanding.' },
              ],
            },
            {
              kind: 'formula',
              title: 'Valuing equities: absolute vs relative',
              subtitle: 'Two schools of the same question',
              body: [
                'Absolute valuation estimates intrinsic value from a company’s own cash flows, e.g. a Discounted Cash Flow (DCF) or Dividend Discount Model.',
                'Relative valuation compares a company to peers using multiples such as P/E, EV/EBITDA and P/B.',
                'A low P/E may mean a stock is cheap — or that the market expects weak growth. Multiples must be read in context.',
              ],
              formula: 'P/E = Price per share ÷ Earnings per share (EPS)',
              tip: 'BMC frames the core tension: is a stock cheap on fundamentals, or cheap for a reason?',
            },
            {
              kind: 'list',
              title: 'Risk in equities',
              body: [
                'Systematic (market) risk affects all stocks and cannot be diversified away — measured by beta.',
                'Unsystematic (specific) risk is company-specific and can be reduced by diversification.',
                'Beta > 1 means the stock is more volatile than the market; beta < 1 means less volatile.',
                'The equity risk premium is the extra return investors demand for holding stocks over risk-free bonds.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'A share of common stock represents:',
              options: ['A loan to the company', 'Fractional ownership of the company', 'A fixed coupon claim', 'A currency position'],
              answer: 1,
              explanation: 'Equity is ownership — a shareholder owns a fractional claim on the company’s assets and profits.',
            },
            {
              q: 'In a company’s capital structure, equity holders are paid:',
              options: ['Before all debt holders', 'After debt holders', 'At the same time as bondholders', 'Never'],
              answer: 1,
              explanation: 'Equity is the most junior claim — paid only after creditors, which is why it carries higher risk.',
            },
            {
              q: 'Market capitalisation equals:',
              options: ['Share price × shares outstanding', 'Revenue × profit margin', 'Assets − liabilities', 'EPS × dividend'],
              answer: 0,
              explanation: 'Market cap is the share price multiplied by the number of shares outstanding.',
            },
            {
              q: 'The P/E ratio is calculated as:',
              options: ['Price ÷ EPS', 'EPS ÷ Price', 'Price × Dividend', 'Revenue ÷ Price'],
              answer: 0,
              explanation: 'Price-to-Earnings = market price per share divided by earnings per share.',
            },
            {
              q: 'A Discounted Cash Flow (DCF) is an example of:',
              options: ['Relative valuation', 'Absolute (intrinsic) valuation', 'Technical analysis', 'Credit analysis'],
              answer: 1,
              explanation: 'A DCF estimates intrinsic value from a firm’s own projected cash flows — an absolute valuation method.',
            },
            {
              q: 'EV/EBITDA and P/B are examples of:',
              options: ['Absolute valuation', 'Relative valuation multiples', 'Interest-rate models', 'Currency measures'],
              answer: 1,
              explanation: 'These are relative-valuation multiples used to compare a company against its peers.',
            },
            {
              q: 'Risk that affects the entire market and cannot be diversified away is:',
              options: ['Unsystematic risk', 'Systematic (market) risk', 'Credit risk', 'Liquidity risk'],
              answer: 1,
              explanation: 'Systematic risk is market-wide and undiversifiable; it is captured by beta.',
            },
            {
              q: 'A stock with a beta of 1.5 is expected to be:',
              options: ['Less volatile than the market', 'As volatile as the market', 'More volatile than the market', 'Risk-free'],
              answer: 2,
              explanation: 'Beta above 1 means the stock tends to move more than the market — higher volatility.',
            },
            {
              q: 'The equity risk premium is:',
              options: ['The dividend yield', 'The extra return demanded for holding stocks over risk-free bonds', 'The P/E ratio', 'The coupon on a bond'],
              answer: 1,
              explanation: 'It is the additional expected return investors require to hold equities rather than risk-free assets.',
            },
            {
              q: 'A very low P/E ratio could indicate that a stock is cheap OR that:',
              options: ['The company pays no tax', 'The market expects weak future growth', 'It is a government bond', 'Its beta is zero'],
              answer: 1,
              explanation: 'A low multiple may reflect genuine value or the market pricing in poor growth prospects — context matters.',
            },
          ],
        },
      ],
    },
  ],
};
