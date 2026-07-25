import type { Course } from '../types';

export const fmva: Course = {
  id: 'fmva',
  title: 'Financial Modeling & Valuation Analyst',
  shortTitle: 'FMVA',
  provider: 'Corporate Finance Institute (CFI)',
  accent: '#2f6f6f',
  glyph: '📊',
  tagline:
    'CFI’s professional certification in building three-statement models and valuing companies with DCF, comparables and precedent transactions.',
  overview: [
    'The Financial Modeling & Valuation Analyst (FMVA)® certification from the Corporate Finance Institute trains analysts to build integrated financial models and value businesses.',
    'It spans accounting and finance fundamentals, Excel best practice, three-statement modelling, DCF valuation, comparable-company and precedent-transaction analysis, and presenting results.',
    'This course distils the core FMVA skill set into reels: read the statements, link them into a live model, then value the company two ways and pressure-test the answer.',
  ],
  examPattern: {
    format: 'Online course library with a graded assessment per course; final certification on completion',
    duration: 'Self-paced; ~100–200+ hours across core and elective courses',
    questions: 'Course quizzes and a final assessment (typically ~70% to pass each)',
    passing: 'Complete required core + elective courses and pass assessments to earn FMVA®',
    validity: 'Certification does not expire; CFI offers continuing education',
    fee: 'Subscription-based (annual CFI membership)',
    negativeMarking: 'None',
  },
  sources: [
    { name: 'CFI — FMVA Program', url: 'https://corporatefinanceinstitute.com/certifications/financial-modeling-valuation-analyst-fmva-program/' },
    { name: 'CFI — Free Resources & Guides', url: 'https://corporatefinanceinstitute.com/resources/' },
    { name: 'Corporate Finance Institute', url: 'https://corporatefinanceinstitute.com/' },
  ],
  modules: [
    {
      id: 'fmva-stmts',
      title: 'The Three Financial Statements',
      summary:
        'The income statement, balance sheet and cash-flow statement — what they show and exactly how they connect.',
      topics: [
        {
          id: 'fmva-stmts-t',
          title: 'The Three Financial Statements',
          reels: [
            {
              kind: 'concept',
              title: 'The three statements at a glance',
              body: [
                'The Income Statement shows performance over a period: revenue down to net income (the “bottom line”).',
                'The Balance Sheet is a snapshot at a point in time: Assets = Liabilities + Shareholders’ Equity.',
                'The Cash Flow Statement reconciles net income to actual cash, split into Operating, Investing and Financing activities.',
              ],
              formula: 'Assets = Liabilities + Shareholders’ Equity',
              keyTerms: [
                { term: 'Net income', def: 'Profit after all expenses, interest and tax — the income-statement bottom line.' },
                { term: 'Working capital', def: 'Current assets minus current liabilities — cash tied up in operations.' },
              ],
            },
            {
              kind: 'insight',
              title: 'How the statements link',
              subtitle: 'The heart of the model',
              body: [
                'Net income from the income statement flows to the top of the cash-flow statement and into retained earnings on the balance sheet.',
                'The ending cash balance on the cash-flow statement becomes the cash line on the balance sheet.',
                'Depreciation is a non-cash expense on the income statement that is added back in cash from operations and reduces PP&E on the balance sheet.',
              ],
              tip: 'If the balance sheet doesn’t balance, the error is almost always a broken link between the three statements.',
            },
            {
              kind: 'list',
              title: 'Accrual accounting & key margins',
              body: [
                'Accrual accounting records revenue when earned and expenses when incurred — not when cash moves.',
                'Gross margin = Gross profit ÷ Revenue; Operating margin = Operating income (EBIT) ÷ Revenue.',
                'EBITDA = Earnings before interest, tax, depreciation and amortisation — a proxy for operating cash generation.',
                'Depreciation spreads the cost of a tangible asset over its useful life; amortisation does the same for intangibles.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'The fundamental accounting equation is:',
              options: ['Assets = Liabilities − Equity', 'Assets = Liabilities + Shareholders’ Equity', 'Equity = Assets + Liabilities', 'Revenue = Assets − Liabilities'],
              answer: 1,
              explanation: 'The balance sheet always balances: Assets = Liabilities + Shareholders’ Equity.',
            },
            {
              q: 'Which statement reports performance over a period of time?',
              options: ['Balance sheet', 'Income statement', 'Statement of retained earnings only', 'None'],
              answer: 1,
              explanation: 'The income statement covers a period; the balance sheet is a point-in-time snapshot.',
            },
            {
              q: 'Net income primarily flows into which balance-sheet line?',
              options: ['Accounts payable', 'Retained earnings', 'Goodwill', 'Deferred revenue'],
              answer: 1,
              explanation: 'Net income (less dividends) increases retained earnings within shareholders’ equity.',
            },
            {
              q: 'The cash-flow statement is divided into which three sections?',
              options: ['Gross, operating, net', 'Operating, investing, financing', 'Current, non-current, equity', 'Direct, indirect, hybrid'],
              answer: 1,
              explanation: 'Cash flows are classified as Operating, Investing and Financing activities.',
            },
            {
              q: 'Depreciation on the income statement is:',
              options: ['A cash outflow', 'A non-cash expense added back in operating cash flow', 'A financing activity', 'Part of revenue'],
              answer: 1,
              explanation: 'Depreciation reduces net income but uses no cash, so it is added back in cash from operations.',
            },
            {
              q: 'EBITDA stands for earnings before:',
              options: ['Interest, tax, dividends and assets', 'Interest, tax, depreciation and amortisation', 'Equity, taxes, debt and amortisation', 'Income, transfers, deductions, allowances'],
              answer: 1,
              explanation: 'EBITDA = Earnings Before Interest, Taxes, Depreciation and Amortisation.',
            },
            {
              q: 'Under accrual accounting, revenue is recognised when it is:',
              options: ['Received in cash', 'Earned', 'Invoiced and paid', 'Deposited in the bank'],
              answer: 1,
              explanation: 'Accrual accounting records revenue when earned, regardless of when cash is received.',
            },
            {
              q: 'Working capital is defined as:',
              options: ['Total assets − total liabilities', 'Current assets − current liabilities', 'Cash + inventory', 'Revenue − expenses'],
              answer: 1,
              explanation: 'Working capital = current assets minus current liabilities.',
            },
            {
              q: 'The ending cash balance on the cash-flow statement links to which line on the balance sheet?',
              options: ['Retained earnings', 'Cash and cash equivalents', 'Long-term debt', 'Goodwill'],
              answer: 1,
              explanation: 'The cash-flow statement’s ending cash becomes the cash line on the balance sheet.',
            },
            {
              q: 'Operating margin is calculated as:',
              options: ['Net income ÷ Revenue', 'EBIT ÷ Revenue', 'Gross profit ÷ Assets', 'EBITDA ÷ Equity'],
              answer: 1,
              explanation: 'Operating margin = operating income (EBIT) divided by revenue.',
            },
          ],
        },
      ],
    },
    {
      id: 'fmva-model',
      title: 'Building the 3-Statement Model',
      summary:
        'Assumptions, forecasting drivers, linking the statements in Excel and best-practice model design.',
      topics: [
        {
          id: 'fmva-model-t',
          title: 'Building the 3-Statement Model',
          reels: [
            {
              kind: 'concept',
              title: 'From history to forecast',
              body: [
                'A three-statement model starts with historical financials, then projects them forward using explicit assumptions (drivers).',
                'Revenue is usually driven by growth rate or price × volume; costs are often modelled as a % of revenue.',
                'The forecast flows through all three statements so the model stays internally consistent.',
              ],
              keyTerms: [
                { term: 'Driver', def: 'An assumption (e.g. growth %, margin) that powers a forecast line.' },
                { term: 'Hardcode vs formula', def: 'Inputs are hardcoded (often blue); calculations are formulas (black) — a CFI convention.' },
              ],
            },
            {
              kind: 'list',
              title: 'Model best practice',
              body: [
                'Separate inputs, calculations and outputs; never bury a hardcoded number inside a formula.',
                'Colour-code: blue for inputs, black for formulas, green for links to other sheets.',
                'Build the debt schedule and interest, then let it feed the income statement; use a “circularity switch” to manage the interest–cash loop.',
                'Keep one consistent time axis and check that the balance sheet balances every period.',
              ],
              tip: 'The plug that makes the model balance is usually cash (revolver) or a financing line — never force the balance sheet.',
            },
            {
              kind: 'insight',
              title: 'Free cash flow — the modelling payoff',
              subtitle: 'What valuation ultimately needs',
              body: [
                'Unlevered Free Cash Flow (FCFF) is the cash available to all capital providers before financing.',
                'It is what a DCF discounts, so a clean three-statement model is the foundation of valuation.',
                'FCFF starts from operating profit, taxes it, adds back non-cash charges, and subtracts capex and the change in working capital.',
              ],
              formula: 'FCFF = EBIT × (1 − tax) + D&A − CapEx − Δ Working Capital',
            },
          ],
          mcqs: [
            {
              q: 'A three-statement model typically begins with:',
              options: ['A DCF', 'Historical financial statements', 'The share price', 'A dividend forecast'],
              answer: 1,
              explanation: 'Models start from historical financials, then forecast forward using assumptions.',
            },
            {
              q: 'In CFI’s colour convention, hardcoded input numbers are usually coloured:',
              options: ['Black', 'Blue', 'Red', 'Green'],
              answer: 1,
              explanation: 'Blue denotes inputs/hardcodes, black denotes formulas, and green denotes links to other sheets.',
            },
            {
              q: 'Revenue in a model is commonly forecast using:',
              options: ['A random number', 'A growth rate or price × volume', 'The tax rate', 'Depreciation'],
              answer: 1,
              explanation: 'Revenue drivers are typically a growth rate or a price-times-volume build-up.',
            },
            {
              q: 'Unlevered free cash flow (FCFF) is the cash available to:',
              options: ['Equity holders only', 'All capital providers before financing', 'Bondholders only', 'The government'],
              answer: 1,
              explanation: 'FCFF is pre-financing cash available to all providers of capital — debt and equity.',
            },
            {
              q: 'FCFF is calculated as:',
              options: ['Net income + dividends', 'EBIT×(1−tax) + D&A − CapEx − ΔWC', 'Revenue − COGS', 'EBITDA − interest'],
              answer: 1,
              explanation: 'Start from taxed EBIT, add back non-cash D&A, then subtract capex and the increase in working capital.',
            },
            {
              q: 'The circular reference in a model usually arises from the link between:',
              options: ['Revenue and COGS', 'Interest expense and cash/debt', 'Depreciation and PP&E', 'Tax and equity'],
              answer: 1,
              explanation: 'Interest depends on debt, which depends on cash, which depends on interest — a circularity managed with a switch.',
            },
            {
              q: 'A best-practice model should:',
              options: ['Bury inputs inside formulas', 'Separate inputs, calculations and outputs', 'Use one giant formula', 'Avoid checks'],
              answer: 1,
              explanation: 'Good structure keeps inputs, calculations and outputs separate and auditable.',
            },
            {
              q: 'If a model’s balance sheet does not balance, the correct response is to:',
              options: ['Hardcode a plug to force it', 'Find the broken link between statements', 'Delete the cash line', 'Ignore it'],
              answer: 1,
              explanation: 'A non-balancing sheet signals a linking error; you fix the link rather than forcing a plug.',
            },
            {
              q: 'Costs are frequently forecast as:',
              options: ['A fixed dollar amount forever', 'A percentage of revenue', 'Equal to depreciation', 'The interest rate'],
              answer: 1,
              explanation: 'Modelling costs as a % of revenue keeps them scaling with the business.',
            },
            {
              q: 'The output that valuation ultimately draws from the model is:',
              options: ['The share count', 'Free cash flow', 'The tax rate', 'The colour coding'],
              answer: 1,
              explanation: 'A DCF discounts the free cash flows produced by the three-statement model.',
            },
          ],
        },
      ],
    },
    {
      id: 'fmva-dcf',
      title: 'DCF & Intrinsic Valuation',
      summary:
        'Discounting free cash flows, the WACC, terminal value and moving from enterprise value to share price.',
      topics: [
        {
          id: 'fmva-dcf-t',
          title: 'DCF & Intrinsic Valuation',
          reels: [
            {
              kind: 'concept',
              title: 'The time value of money',
              body: [
                'A rupee today is worth more than a rupee tomorrow because it can be invested. Valuation discounts future cash flows back to today.',
                'A DCF sums the present value of forecast free cash flows plus a terminal value for everything beyond the forecast.',
                'The discount rate reflects the riskiness of the cash flows — for FCFF, that rate is the WACC.',
              ],
              formula: 'PV = CF ÷ (1 + r)^n',
            },
            {
              kind: 'formula',
              title: 'WACC and terminal value',
              body: [
                'WACC blends the cost of equity and after-tax cost of debt, weighted by their market-value proportions.',
                'Cost of equity is usually estimated with CAPM: risk-free rate + beta × equity risk premium.',
                'Terminal value captures value beyond the forecast — via the Gordon growth (perpetuity) method or an exit multiple.',
              ],
              formula: 'WACC = (E/V)·Re + (D/V)·Rd·(1 − tax) ;  TV = FCF₍ₙ₊₁₎ ÷ (WACC − g)',
              tip: 'Terminal value often drives most of a DCF’s output — small changes in g or WACC move the answer a lot.',
            },
            {
              kind: 'insight',
              title: 'Enterprise value to equity value',
              body: [
                'Discounting FCFF at WACC gives Enterprise Value (the value of the whole operating business).',
                'To get Equity Value: subtract net debt (and other claims) from Enterprise Value.',
                'Divide equity value by diluted shares outstanding to get the intrinsic value per share.',
              ],
              formula: 'Equity Value = Enterprise Value − Net Debt ;  Value per share = Equity Value ÷ Diluted shares',
            },
          ],
          mcqs: [
            {
              q: 'The core principle behind a DCF is that:',
              options: ['Cash today is worth less than cash tomorrow', 'Cash today is worth more than the same cash in the future', 'All cash flows are worth the same', 'Only terminal value matters'],
              answer: 1,
              explanation: 'The time value of money: a rupee today can be invested, so future cash flows are discounted.',
            },
            {
              q: 'Unlevered free cash flow (FCFF) should be discounted at the:',
              options: ['Cost of equity', 'Risk-free rate', 'WACC', 'Coupon rate'],
              answer: 2,
              explanation: 'FCFF is available to all capital providers, so it is discounted at the blended WACC.',
            },
            {
              q: 'The cost of equity is commonly estimated using:',
              options: ['The dividend yield only', 'CAPM: Rf + β × equity risk premium', 'The P/E ratio', 'The current ratio'],
              answer: 1,
              explanation: 'CAPM estimates cost of equity as the risk-free rate plus beta times the equity risk premium.',
            },
            {
              q: 'In the WACC formula, the cost of debt is multiplied by (1 − tax) because:',
              options: ['Debt is risk-free', 'Interest is tax-deductible', 'Equity is cheaper', 'Dividends are deductible'],
              answer: 1,
              explanation: 'Interest expense reduces taxable income, giving debt a “tax shield,” so we use the after-tax cost.',
            },
            {
              q: 'The Gordon growth terminal value equals FCF₍ₙ₊₁₎ divided by:',
              options: ['(WACC + g)', '(WACC − g)', '(g − WACC)', 'WACC × g'],
              answer: 1,
              explanation: 'The perpetuity-growth terminal value = next-year FCF ÷ (WACC − g).',
            },
            {
              q: 'Discounting FCFF at WACC produces:',
              options: ['Equity value', 'Enterprise value', 'Net income', 'Book value'],
              answer: 1,
              explanation: 'FCFF discounted at WACC gives the enterprise value of the operating business.',
            },
            {
              q: 'To move from enterprise value to equity value, you:',
              options: ['Add net debt', 'Subtract net debt', 'Add revenue', 'Subtract taxes'],
              answer: 1,
              explanation: 'Equity value = enterprise value − net debt (and other non-equity claims).',
            },
            {
              q: 'Intrinsic value per share equals equity value divided by:',
              options: ['Revenue', 'Diluted shares outstanding', 'EBITDA', 'Total assets'],
              answer: 1,
              explanation: 'Per-share value = equity value divided by the diluted share count.',
            },
            {
              q: 'Terminal value in a DCF represents:',
              options: ['Value only in year 1', 'Value of cash flows beyond the explicit forecast', 'The share price today', 'Total debt'],
              answer: 1,
              explanation: 'Terminal value captures all cash flows after the explicit forecast horizon.',
            },
            {
              q: 'A higher WACC, all else equal, produces a DCF value that is:',
              options: ['Higher', 'Lower', 'Unchanged', 'Always zero'],
              answer: 1,
              explanation: 'A higher discount rate reduces the present value of future cash flows, lowering the valuation.',
            },
          ],
        },
      ],
    },
    {
      id: 'fmva-comps',
      title: 'Relative Valuation & Sensitivity',
      summary:
        'Comparable companies, precedent transactions, valuation multiples and stress-testing the answer.',
      topics: [
        {
          id: 'fmva-comps-t',
          title: 'Relative Valuation & Sensitivity',
          reels: [
            {
              kind: 'concept',
              title: 'Comps and precedent transactions',
              body: [
                'Comparable Company Analysis (“trading comps”) values a business off the multiples of similar listed peers.',
                'Precedent Transaction Analysis uses multiples paid in past M&A deals — which usually include a control premium.',
                'Both are “relative” methods: they price a company by what the market pays for similar ones, rather than intrinsic cash flows.',
              ],
              keyTerms: [
                { term: 'Control premium', def: 'Extra amount an acquirer pays for control, making deal multiples higher than trading comps.' },
                { term: 'Peer set', def: 'The group of comparable companies chosen by size, sector and growth.' },
              ],
            },
            {
              kind: 'list',
              title: 'The multiples that matter',
              body: [
                'EV/EBITDA and EV/EBIT are capital-structure-neutral (they use enterprise value).',
                'P/E is equity-based and affected by leverage and tax; useful but not comparable across different capital structures.',
                'EV/Revenue is used for early-stage or loss-making firms with no meaningful earnings.',
                'Always match the numerator to the denominator: equity value with equity metrics, enterprise value with pre-financing metrics.',
              ],
              tip: 'A common trap: pairing enterprise value with net income (an equity figure) — never do it.',
            },
            {
              kind: 'insight',
              title: 'Sensitivity and the football field',
              body: [
                'No single method is “right.” Analysts triangulate DCF, comps and precedent transactions into a valuation range.',
                'A sensitivity (data) table shows how value changes as key assumptions (WACC, growth, margins) vary.',
                'A “football field” chart displays each method’s range side by side to frame a defensible valuation.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'Comparable Company Analysis values a business based on:',
              options: ['Its own discounted cash flows', 'The trading multiples of similar listed peers', 'Its book value only', 'Its dividend history'],
              answer: 1,
              explanation: 'Trading comps apply the market multiples of similar public companies to the target.',
            },
            {
              q: 'Precedent transaction multiples are usually higher than trading comps because they include a:',
              options: ['Liquidity discount', 'Control premium', 'Tax shield', 'Terminal value'],
              answer: 1,
              explanation: 'Acquirers pay a control premium in M&A, so deal multiples exceed public trading multiples.',
            },
            {
              q: 'Which multiple is capital-structure neutral?',
              options: ['P/E', 'EV/EBITDA', 'Price-to-book', 'Dividend yield'],
              answer: 1,
              explanation: 'EV/EBITDA uses enterprise value and pre-interest earnings, so it is neutral to how the firm is financed.',
            },
            {
              q: 'For an early-stage, loss-making company, the most useful multiple is often:',
              options: ['P/E', 'EV/Revenue', 'EV/EBIT', 'PEG'],
              answer: 1,
              explanation: 'With no meaningful earnings, EV/Revenue is commonly used until profitability arrives.',
            },
            {
              q: 'A valuation mistake to avoid is pairing enterprise value with:',
              options: ['EBITDA', 'EBIT', 'Revenue', 'Net income'],
              answer: 3,
              explanation: 'Net income is an equity (post-financing) figure; it must be paired with equity value, not enterprise value.',
            },
            {
              q: 'The P/E ratio is:',
              options: ['Enterprise-value based', 'Equity based', 'Debt based', 'Cash based'],
              answer: 1,
              explanation: 'P/E uses share price (equity) over EPS, so it is an equity-value multiple.',
            },
            {
              q: 'A “football field” chart is used to:',
              options: ['Forecast revenue', 'Display valuation ranges from multiple methods side by side', 'Track share price intraday', 'Compute WACC'],
              answer: 1,
              explanation: 'It visually compares the value ranges from DCF, comps and precedent transactions.',
            },
            {
              q: 'A data (sensitivity) table primarily shows how output changes as you vary:',
              options: ['The company name', 'Key assumptions like WACC and growth', 'The fiscal year label', 'The currency symbol'],
              answer: 1,
              explanation: 'Sensitivity tables flex key drivers to show the range of possible valuations.',
            },
            {
              q: 'Selecting a peer set should be based on:',
              options: ['Alphabetical order', 'Similar sector, size and growth profile', 'Share price alone', 'Ticker length'],
              answer: 1,
              explanation: 'Good comparables share industry, size, and growth/margin characteristics with the target.',
            },
            {
              q: 'Best practice in valuation is to:',
              options: ['Rely on a single method', 'Triangulate several methods into a range', 'Use only the highest value', 'Ignore the DCF'],
              answer: 1,
              explanation: 'Analysts cross-check DCF, comps and precedents to produce a defensible valuation range.',
            },
          ],
        },
      ],
    },
  ],
};
