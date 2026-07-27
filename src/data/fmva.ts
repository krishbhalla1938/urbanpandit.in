import type { Course, Topic } from '../types';

// Topic-by-topic build of the FMVA syllabus. Module ids fmva-stmts / fmva-model
// / fmva-dcf / fmva-comps are kept so their Deep Dive sets in extras.ts merge.

const excelFoundations: Topic[] = [
  {
    id: 'fmva-excel-fundamentals',
    title: 'Excel Fundamentals',
    reels: [
      {
        kind: 'concept',
        title: 'Excel Fundamentals',
        body: [
          'Excel is the core tool of financial modelling: cells, references, and formulas.',
          'Relative references (A1) shift when copied; absolute references ($A$1) stay fixed.',
          'Core functions: SUM, IF, and cell formatting to keep models readable.',
        ],
        tip: 'Lock references with $ (F4) to stop formulas breaking when you copy them.',
      },
    ],
    mcqs: [
      { q: 'An absolute cell reference looks like:', options: ['A1', '$A$1', 'A:A', '1A'], answer: 1, explanation: '$A$1 fixes both column and row when copied.' },
      { q: 'A relative reference (A1) when copied down:', options: ['Stays fixed', 'Shifts with the copy', 'Errors out', 'Becomes text'], answer: 1, explanation: 'Relative references adjust as you copy.', tricky: true },
      { q: 'Which function adds a range?', options: ['IF', 'SUM', 'VLOOKUP', 'LEFT'], answer: 1, explanation: 'SUM totals a range of cells.' },
      { q: 'The keyboard shortcut to toggle reference locking is:', options: ['F1', 'F4', 'F9', 'F12'], answer: 1, explanation: 'F4 cycles through absolute/relative locking.', tricky: true },
    ],
  },
  {
    id: 'fmva-advanced-excel',
    title: 'Advanced Excel',
    reels: [
      {
        kind: 'list',
        title: 'Advanced Excel',
        body: [
          'Lookup functions: VLOOKUP / XLOOKUP / INDEX-MATCH pull data across tables.',
          'Logical and aggregation: IF, SUMIF/SUMIFS, COUNTIF, and nested logic.',
          'Data tables, named ranges and keyboard shortcuts speed up modelling.',
        ],
        tip: 'INDEX-MATCH (or XLOOKUP) is more robust than VLOOKUP — it can look left and won’t break on inserted columns.',
      },
    ],
    mcqs: [
      { q: 'Which is more flexible than VLOOKUP?', options: ['SUM', 'INDEX-MATCH / XLOOKUP', 'LEFT', 'ROUND'], answer: 1, explanation: 'INDEX-MATCH/XLOOKUP can look left and resist column inserts.', tricky: true },
      { q: 'SUMIFS lets you sum based on:', options: ['No criteria', 'Multiple criteria', 'Only one cell', 'Text length'], answer: 1, explanation: 'SUMIFS sums with multiple conditions.' },
      { q: 'A data table in Excel is used for:', options: ['Formatting', 'Sensitivity analysis', 'Charting only', 'Printing'], answer: 1, explanation: 'Data tables flex inputs for sensitivity analysis.', tricky: true },
      { q: 'Named ranges make formulas:', options: ['Slower', 'More readable/robust', 'Incorrect', 'Hidden'], answer: 1, explanation: 'Named ranges improve clarity and reduce errors.' },
    ],
  },
  {
    id: 'fmva-power-query',
    title: 'Power Query',
    reels: [
      {
        kind: 'concept',
        title: 'Power Query',
        body: [
          'Power Query is Excel’s tool for extracting, transforming and loading (ETL) data from many sources.',
          'It records repeatable steps to clean and reshape messy data automatically.',
          'Great for connecting to files, databases and the web and refreshing on demand.',
        ],
      },
    ],
    mcqs: [
      { q: 'Power Query is primarily for:', options: ['Charting', 'Extracting and transforming data (ETL)', 'Writing macros', 'Printing'], answer: 1, explanation: 'Power Query handles data ingestion and cleaning.' },
      { q: 'Power Query steps are:', options: ['One-off manual edits', 'Repeatable and refreshable', 'Not saved', 'Random'], answer: 1, explanation: 'Its transformations are recorded and re-runnable.', tricky: true },
      { q: 'Power Query can connect to:', options: ['Only the current sheet', 'Files, databases and the web', 'Nothing external', 'Only PDFs'], answer: 1, explanation: 'It pulls from many external sources.' },
      { q: 'Power Query is most useful when data is:', options: ['Already perfect', 'Messy and needs cleaning', 'Absent', 'A single number'], answer: 1, explanation: 'It shines at reshaping messy, repetitive data.' },
    ],
  },
  {
    id: 'fmva-power-pivot',
    title: 'Power Pivot',
    reels: [
      {
        kind: 'concept',
        title: 'Power Pivot',
        body: [
          'Power Pivot is Excel’s in-memory data model for large datasets and relationships between tables.',
          'It uses DAX formulas to build powerful measures beyond ordinary PivotTables.',
          'Ideal for building analytical dashboards on millions of rows.',
        ],
      },
    ],
    mcqs: [
      { q: 'Power Pivot’s formula language is:', options: ['VBA', 'DAX', 'SQL only', 'Python'], answer: 1, explanation: 'Power Pivot uses DAX (Data Analysis Expressions).', tricky: true },
      { q: 'Power Pivot is designed for:', options: ['Small single tables', 'Large datasets and table relationships', 'Only charts', 'Only text'], answer: 1, explanation: 'It handles large, related data models efficiently.' },
      { q: 'Power Pivot builds on the concept of a:', options: ['Single flat table', 'Data model with relationships', 'Word document', 'Slide deck'], answer: 1, explanation: 'It links multiple tables in a data model.' },
      { q: 'Compared to a normal PivotTable, Power Pivot handles:', options: ['Fewer rows', 'Far more rows and measures', 'Only text', 'No calculations'], answer: 1, explanation: 'Its in-memory engine scales to millions of rows.', tricky: true },
    ],
  },
  {
    id: 'fmva-financial-charts',
    title: 'Financial Charts',
    reels: [
      {
        kind: 'list',
        title: 'Financial Charts',
        body: [
          'Charts turn model outputs into clear visuals: line (trends), bar/column (comparisons), waterfall (bridges).',
          'A waterfall chart shows how a starting value moves to an ending value via increments.',
          'Good charts are simple, labelled and free of clutter.',
        ],
      },
    ],
    mcqs: [
      { q: 'A waterfall chart is best for showing:', options: ['A single value', 'How a value bridges from start to end', 'Correlation', 'Geographic data'], answer: 1, explanation: 'Waterfalls show incremental contributions to a change.', tricky: true },
      { q: 'A line chart is best for:', options: ['Trends over time', 'Market share slices', 'A single number', 'A bridge'], answer: 0, explanation: 'Line charts display trends over time.' },
      { q: 'Good financial charts should be:', options: ['Cluttered', 'Simple and clearly labelled', '3-D and shaded', 'Unlabelled'], answer: 1, explanation: 'Clarity beats decoration in finance charts.' },
      { q: 'To compare categories, use a:', options: ['Pie only', 'Bar/column chart', 'Scatter only', 'Gauge'], answer: 1, explanation: 'Bar/column charts compare discrete categories well.' },
    ],
  },
  {
    id: 'fmva-dashboard-design',
    title: 'Dashboard Design',
    reels: [
      {
        kind: 'concept',
        title: 'Dashboard Design',
        body: [
          'A dashboard summarises key metrics and outputs in one interactive view.',
          'Good design highlights the most important KPIs, uses consistent formatting and adds interactivity (slicers, drop-downs).',
          'It turns a complex model into decisions stakeholders can act on.',
        ],
      },
    ],
    mcqs: [
      { q: 'A dashboard’s job is to:', options: ['Hide data', 'Summarise key metrics for decisions', 'Store raw data only', 'Replace the model'], answer: 1, explanation: 'Dashboards surface the KPIs that drive decisions.' },
      { q: 'Interactivity in a dashboard comes from tools like:', options: ['Static text', 'Slicers and drop-downs', 'Merged cells only', 'Comments'], answer: 1, explanation: 'Slicers/drop-downs let users filter views.', tricky: true },
      { q: 'A good dashboard emphasises:', options: ['Every number equally', 'The most important KPIs', 'Only colours', 'Raw formulas'], answer: 1, explanation: 'Prioritising key metrics aids comprehension.' },
      { q: 'Consistent formatting on a dashboard:', options: ['Confuses users', 'Improves readability', 'Is irrelevant', 'Slows Excel'], answer: 1, explanation: 'Consistency makes dashboards easier to read.' },
    ],
  },
];

const statements: Topic[] = [
  {
    id: 'fmva-financial-statements',
    title: 'Financial Statements',
    reels: [
      {
        kind: 'concept',
        title: 'The Financial Statements',
        body: [
          'The three core statements are the income statement, balance sheet and cash-flow statement.',
          'Together they show profitability, financial position and cash generation.',
          'They are linked — the output of one feeds the others.',
        ],
      },
    ],
    mcqs: [
      { q: 'The three core financial statements are the income statement, cash-flow statement and:', options: ['Tax return', 'Balance sheet', 'Order book', 'Prospectus'], answer: 1, explanation: 'Income statement, balance sheet and cash-flow statement.' },
      { q: 'The statements are:', options: ['Independent', 'Linked, feeding each other', 'Identical', 'Unrelated'], answer: 1, explanation: 'They interconnect — the model’s backbone.', tricky: true },
      { q: 'Profitability is shown by the:', options: ['Balance sheet', 'Income statement', 'Cash-flow statement', 'Notes'], answer: 1, explanation: 'The income statement shows profit.' },
      { q: 'Cash generation is shown by the:', options: ['Income statement', 'Cash-flow statement', 'Balance sheet', 'AGM'], answer: 1, explanation: 'The cash-flow statement tracks actual cash.' },
    ],
  },
  {
    id: 'fmva-income-statement',
    title: 'Income Statement',
    reels: [
      {
        kind: 'formula',
        title: 'Income Statement',
        body: [
          'The income statement runs from revenue down to net income over a period.',
          'Key lines: revenue − COGS = gross profit; − operating expenses = operating income (EBIT); − interest and tax = net income.',
          'Margins at each level reveal profitability.',
        ],
        formula: 'Net income = Revenue − COGS − OpEx − Interest − Tax',
      },
    ],
    mcqs: [
      { q: 'Gross profit equals revenue minus:', options: ['All expenses', 'Cost of goods sold', 'Tax', 'Interest'], answer: 1, explanation: 'Gross profit = revenue − COGS.' },
      { q: 'Operating income is also called:', options: ['EBIT', 'EBITDA', 'Net income', 'Gross profit'], answer: 0, explanation: 'Operating income = EBIT (earnings before interest and tax).', tricky: true },
      { q: 'The income statement covers:', options: ['A point in time', 'A period of time', 'Only cash', 'Only assets'], answer: 1, explanation: 'It reports performance over a period.' },
      { q: 'Net income is the:', options: ['Top line', 'Bottom line after all costs and tax', 'Same as revenue', 'Same as EBITDA'], answer: 1, explanation: 'Net income is the final profit after everything.' },
    ],
  },
  {
    id: 'fmva-balance-sheet',
    title: 'Balance Sheet',
    reels: [
      {
        kind: 'formula',
        title: 'Balance Sheet',
        body: [
          'The balance sheet is a snapshot of assets, liabilities and equity at a point in time.',
          'It must always balance: Assets = Liabilities + Equity.',
          'Assets and liabilities split into current (≤1 year) and non-current.',
        ],
        formula: 'Assets = Liabilities + Shareholders’ Equity',
      },
    ],
    mcqs: [
      { q: 'The balance sheet always satisfies:', options: ['Assets = Liabilities − Equity', 'Assets = Liabilities + Equity', 'Equity = Assets + Liabilities', 'Revenue = Assets'], answer: 1, explanation: 'The accounting equation must hold.' },
      { q: 'The balance sheet shows position:', options: ['Over a period', 'At a point in time', 'Only in cash', 'Only future'], answer: 1, explanation: 'It is a point-in-time snapshot.' },
      { q: 'Inventory is a:', options: ['Non-current asset', 'Current asset', 'Liability', 'Equity item'], answer: 1, explanation: 'Inventory is a current asset.', tricky: true },
      { q: 'Retained earnings sit within:', options: ['Liabilities', 'Shareholders’ equity', 'Current assets', 'Revenue'], answer: 1, explanation: 'Retained earnings are part of equity.' },
    ],
  },
  {
    id: 'fmva-cash-flow-statement',
    title: 'Cash Flow Statement',
    reels: [
      {
        kind: 'list',
        title: 'Cash Flow Statement',
        body: [
          'It reconciles net income to actual cash in three sections: Operating, Investing, Financing.',
          'Operating: core trading cash; Investing: capex and asset sales; Financing: debt, equity and dividends.',
          'Non-cash items like depreciation are added back in operating cash flow.',
        ],
      },
    ],
    mcqs: [
      { q: 'The cash-flow statement’s three sections are Operating, Investing and:', options: ['Trading', 'Financing', 'Tax', 'Audit'], answer: 1, explanation: 'Operating, Investing, Financing.' },
      { q: 'Depreciation on the cash-flow statement is:', options: ['A cash outflow', 'Added back (non-cash)', 'Ignored', 'A financing item'], answer: 1, explanation: 'It is non-cash, so added back in operating cash flow.', tricky: true },
      { q: 'Buying equipment appears under:', options: ['Operating', 'Investing', 'Financing', 'Revenue'], answer: 1, explanation: 'Capex is an investing outflow.' },
      { q: 'Raising a loan appears under:', options: ['Operating', 'Investing', 'Financing', 'Gross profit'], answer: 2, explanation: 'Debt/equity/dividends are financing activities.' },
    ],
  },
  {
    id: 'fmva-three-statement-model',
    title: 'Three Statement Model',
    reels: [
      {
        kind: 'concept',
        title: 'The Three Statement Model',
        body: [
          'A 3-statement model links the income statement, balance sheet and cash-flow statement into one dynamic file.',
          'Net income flows to retained earnings and to the top of the cash-flow statement; ending cash returns to the balance sheet.',
          'If it doesn’t balance, a link is broken.',
        ],
      },
    ],
    mcqs: [
      { q: 'In a 3-statement model, net income flows to:', options: ['Only revenue', 'Retained earnings and the cash-flow statement', 'Inventory', 'Goodwill'], answer: 1, explanation: 'Net income links equity and the cash-flow statement.', tricky: true },
      { q: 'Ending cash on the cash-flow statement links to the:', options: ['Income statement', 'Cash line on the balance sheet', 'Revenue', 'Tax line'], answer: 1, explanation: 'The two cash figures must tie.' },
      { q: 'A model that won’t balance usually has:', options: ['Too many tabs', 'A broken link between statements', 'Too few formulas', 'No inputs'], answer: 1, explanation: 'Non-balancing signals a linking error.' },
      { q: 'The 3-statement model is the foundation for:', options: ['Only charts', 'Valuation (e.g. DCF)', 'Payroll', 'Tax filing'], answer: 1, explanation: 'It feeds free cash flow into valuation.' },
    ],
  },
  {
    id: 'fmva-financial-ratios',
    title: 'Financial Ratios',
    reels: [
      {
        kind: 'list',
        title: 'Financial Ratios',
        body: [
          'Liquidity: current and quick ratios. Profitability: gross/operating/net margins, ROE, ROA.',
          'Leverage: debt-to-equity, interest coverage. Efficiency: asset turnover, inventory days.',
          'Ratios are best judged versus peers and over time.',
        ],
      },
    ],
    mcqs: [
      { q: 'ROE equals net income divided by:', options: ['Assets', 'Equity', 'Revenue', 'Debt'], answer: 1, explanation: 'ROE = net income ÷ equity.' },
      { q: 'The interest coverage ratio measures ability to:', options: ['Pay dividends', 'Cover interest from operating profit', 'Grow sales', 'Reduce tax'], answer: 1, explanation: 'It is EBIT ÷ interest expense.', tricky: true },
      { q: 'The quick ratio excludes:', options: ['Cash', 'Inventory', 'Receivables', 'Payables'], answer: 1, explanation: 'Quick ratio strips out inventory.' },
      { q: 'Ratios are most useful:', options: ['In isolation', 'Compared to peers and history', 'Rounded', 'Ignored'], answer: 1, explanation: 'Context gives ratios meaning.' },
    ],
  },
];

const forecasting: Topic[] = [
  {
    id: 'fmva-forecasting',
    title: 'Forecasting',
    reels: [
      {
        kind: 'concept',
        title: 'Forecasting',
        body: [
          'Forecasting projects a company’s financials forward using explicit, documented assumptions (drivers).',
          'It starts from historical trends and adjusts for expected changes.',
          'Assumptions should be reasonable, transparent and easy to flex.',
        ],
      },
    ],
    mcqs: [
      { q: 'Forecasting is driven by:', options: ['Random guesses', 'Documented assumptions/drivers', 'Only last year’s number', 'Share price'], answer: 1, explanation: 'Explicit drivers power the projection.' },
      { q: 'A good forecast starts from:', options: ['Nothing', 'Historical trends', 'The share price', 'The tax code'], answer: 1, explanation: 'History anchors the forward projection.' },
      { q: 'Assumptions in a model should be:', options: ['Hidden in formulas', 'Transparent and easy to flex', 'Fixed forever', 'Undocumented'], answer: 1, explanation: 'Clear, adjustable inputs are best practice.', tricky: true },
      { q: 'Forecasting produces the inputs for:', options: ['Payroll', 'Free cash flow and valuation', 'Tax audits', 'Charting only'], answer: 1, explanation: 'Forecasts feed free cash flow and valuation.' },
    ],
  },
  {
    id: 'fmva-revenue-forecasting',
    title: 'Revenue Forecasting',
    reels: [
      {
        kind: 'concept',
        title: 'Revenue Forecasting',
        body: [
          'Revenue is often the most important driver. Common methods: growth-rate, or price × volume build-up.',
          'Bottom-up (units × price) is more granular; top-down (market × share) is quicker.',
          'Revenue assumptions cascade through the whole model.',
        ],
      },
    ],
    mcqs: [
      { q: 'A common revenue build is:', options: ['Random', 'Price × volume', 'Depreciation-based', 'Tax-based'], answer: 1, explanation: 'Price × volume is a bottom-up revenue build.' },
      { q: 'A top-down revenue forecast uses:', options: ['Units × price', 'Market size × market share', 'Depreciation', 'Interest'], answer: 1, explanation: 'Top-down applies a share to total market size.', tricky: true },
      { q: 'Revenue assumptions:', options: ['Affect only revenue', 'Cascade through the whole model', 'Are irrelevant', 'Only affect tax'], answer: 1, explanation: 'Revenue drives costs, working capital and more.' },
      { q: 'The bottom-up method is:', options: ['Less granular', 'More granular (units × price)', 'Always wrong', 'Only for startups'], answer: 1, explanation: 'Bottom-up is detailed and driver-based.' },
    ],
  },
  {
    id: 'fmva-cost-forecasting',
    title: 'Cost Forecasting',
    reels: [
      {
        kind: 'concept',
        title: 'Cost Forecasting',
        body: [
          'Costs are often modelled as a percentage of revenue (variable) or as fixed amounts.',
          'Separating fixed and variable costs improves accuracy as volumes change.',
          'Cost assumptions determine margins and profitability.',
        ],
      },
    ],
    mcqs: [
      { q: 'Variable costs are often modelled as:', options: ['A fixed amount forever', 'A percentage of revenue', 'Equal to tax', 'The interest rate'], answer: 1, explanation: 'Variable costs scale with revenue.' },
      { q: 'Separating fixed and variable costs helps when:', options: ['Nothing changes', 'Volumes change', 'Only for tax', 'Never'], answer: 1, explanation: 'It captures how costs behave as activity changes.', tricky: true },
      { q: 'Cost assumptions directly determine:', options: ['Share count', 'Margins and profit', 'The ticker', 'The currency'], answer: 1, explanation: 'Costs set the profitability of the forecast.' },
      { q: 'A fixed cost:', options: ['Scales with revenue', 'Stays broadly constant regardless of volume', 'Is always zero', 'Equals depreciation'], answer: 1, explanation: 'Fixed costs don’t move with volume in the short run.' },
    ],
  },
  {
    id: 'fmva-working-capital',
    title: 'Working Capital',
    reels: [
      {
        kind: 'formula',
        title: 'Working Capital',
        body: [
          'Working capital = current assets − current liabilities; it is cash tied up in operations.',
          'Rising receivables and inventory consume cash; rising payables free up cash.',
          'It is often forecast using days ratios (DSO, DIO, DPO).',
        ],
        formula: 'Working capital = Current assets − Current liabilities',
      },
    ],
    mcqs: [
      { q: 'Working capital equals:', options: ['Assets − liabilities', 'Current assets − current liabilities', 'Cash + inventory', 'Revenue − cost'], answer: 1, explanation: 'It is current assets minus current liabilities.' },
      { q: 'An increase in inventory is a ______ of cash.', options: ['Source', 'Use', 'Neither', 'Financing source'], answer: 1, explanation: 'Building inventory ties up cash.', tricky: true },
      { q: 'An increase in accounts payable is a ______ of cash.', options: ['Use', 'Source', 'Neither', 'Investing use'], answer: 1, explanation: 'Paying suppliers later conserves cash.', tricky: true },
      { q: 'Working capital is often forecast using:', options: ['Random numbers', 'Days ratios (DSO/DIO/DPO)', 'Share price', 'Beta'], answer: 1, explanation: 'Days-based ratios drive working-capital forecasts.' },
    ],
  },
  {
    id: 'fmva-depreciation',
    title: 'Depreciation',
    reels: [
      {
        kind: 'concept',
        title: 'Depreciation',
        body: [
          'Depreciation spreads the cost of a fixed asset over its useful life.',
          'It is a non-cash expense: it lowers profit but is added back in operating cash flow, and it reduces PP&E.',
          'It also creates a tax shield (depreciation × tax rate).',
        ],
        formula: 'Straight-line = (Cost − Residual) ÷ Useful life',
      },
    ],
    mcqs: [
      { q: 'Depreciation is:', options: ['A cash outflow', 'A non-cash expense', 'Revenue', 'A financing item'], answer: 1, explanation: 'It reduces profit but uses no cash.' },
      { q: 'A ₹1,000 depreciation charge at 25% tax saves tax of:', options: ['₹0', '₹250', '₹750', '₹1,000'], answer: 1, explanation: 'Tax shield = 1,000 × 25% = ₹250.', tricky: true },
      { q: 'Depreciation reduces which balance-sheet item?', options: ['Cash', 'PP&E (net)', 'Revenue', 'Equity directly'], answer: 1, explanation: 'It lowers the carrying value of PP&E.' },
      { q: 'In the cash-flow statement, depreciation is:', options: ['Subtracted', 'Added back in operating activities', 'A financing inflow', 'Ignored'], answer: 1, explanation: 'It is added back because it is non-cash.', tricky: true },
    ],
  },
  {
    id: 'fmva-capex',
    title: 'Capital Expenditure',
    reels: [
      {
        kind: 'concept',
        title: 'Capital Expenditure',
        body: [
          'Capital expenditure (CapEx) is spending on long-term assets like property, plant and equipment.',
          'It appears as an investing outflow and is capitalised on the balance sheet, then depreciated.',
          'It is often forecast as a percentage of revenue or tied to a capacity plan.',
        ],
      },
    ],
    mcqs: [
      { q: 'CapEx is spending on:', options: ['Day-to-day expenses', 'Long-term assets (PP&E)', 'Dividends', 'Interest'], answer: 1, explanation: 'CapEx buys long-term productive assets.' },
      { q: 'CapEx appears in the cash-flow statement under:', options: ['Operating', 'Investing', 'Financing', 'Revenue'], answer: 1, explanation: 'CapEx is an investing outflow.' },
      { q: 'After purchase, CapEx is:', options: ['Expensed immediately', 'Capitalised then depreciated', 'Ignored', 'A dividend'], answer: 1, explanation: 'It is capitalised and depreciated over its life.', tricky: true },
      { q: 'CapEx is often forecast as:', options: ['A percentage of revenue', 'Beta', 'The tax rate', 'The share price'], answer: 0, explanation: 'A % of revenue (or a capacity plan) is common.' },
    ],
  },
  {
    id: 'fmva-debt-schedule',
    title: 'Debt Schedule',
    reels: [
      {
        kind: 'concept',
        title: 'Debt Schedule',
        body: [
          'A debt schedule tracks opening balance, drawdowns, repayments and interest for each facility.',
          'Interest expense feeds the income statement; the ending balance feeds the balance sheet.',
          'It often creates the interest–cash circularity, managed with a switch.',
        ],
      },
    ],
    mcqs: [
      { q: 'A debt schedule tracks balances, repayments and:', options: ['Dividends', 'Interest', 'Revenue', 'Inventory'], answer: 1, explanation: 'It computes interest and the ending debt balance.' },
      { q: 'Interest expense from the schedule feeds the:', options: ['Balance sheet only', 'Income statement', 'Notes only', 'Nothing'], answer: 1, explanation: 'Interest hits the income statement.' },
      { q: 'The debt schedule often causes a:', options: ['Broken chart', 'Circular reference (interest ↔ cash)', 'Tax error', 'Currency issue'], answer: 1, explanation: 'Interest depends on debt/cash, which depends on interest.', tricky: true },
      { q: 'A revolver in the schedule is used to:', options: ['Pay dividends', 'Plug cash shortfalls/surpluses', 'Raise equity', 'Depreciate assets'], answer: 1, explanation: 'The revolver balances the model’s cash.' },
    ],
  },
  {
    id: 'fmva-budgeting',
    title: 'Budgeting',
    reels: [
      {
        kind: 'concept',
        title: 'Budgeting',
        body: [
          'A budget is a detailed financial plan for a future period, setting targets for revenue, costs and cash.',
          'It supports control: actuals are compared to budget (variance analysis).',
          'Budgets are usually built bottom-up from departments and rolled up.',
        ],
      },
    ],
    mcqs: [
      { q: 'A budget is a:', options: ['Historical report', 'Forward financial plan/target', 'Tax return', 'Share certificate'], answer: 1, explanation: 'A budget sets forward targets.' },
      { q: 'Comparing actuals to budget is called:', options: ['Valuation', 'Variance analysis', 'Hedging', 'Arbitrage'], answer: 1, explanation: 'Variance analysis measures actual vs planned.', tricky: true },
      { q: 'Budgets are often built:', options: ['Top-down only', 'Bottom-up and rolled up', 'Randomly', 'By the auditor'], answer: 1, explanation: 'Departmental bottom-up budgets are consolidated.' },
      { q: 'Budgeting primarily supports:', options: ['Speculation', 'Planning and control', 'Front-running', 'Arbitrage'], answer: 1, explanation: 'It enables financial planning and control.' },
    ],
  },
  {
    id: 'fmva-forecasting-models',
    title: 'Forecasting Models',
    reels: [
      {
        kind: 'list',
        title: 'Forecasting Models',
        body: [
          'Approaches include straight-line/growth, driver-based, and regression/statistical models.',
          'Driver-based models tie outputs to operational drivers (units, prices, headcount).',
          'The best model balances accuracy with simplicity and transparency.',
        ],
      },
    ],
    mcqs: [
      { q: 'A driver-based model ties forecasts to:', options: ['Random inputs', 'Operational drivers (units, prices)', 'The share price', 'The auditor'], answer: 1, explanation: 'It links outputs to real business drivers.', tricky: true },
      { q: 'A regression forecast uses:', options: ['Statistical relationships in data', 'Only intuition', 'The tax code', 'Chart colours'], answer: 0, explanation: 'Regression fits relationships to historical data.' },
      { q: 'The best model balances accuracy with:', options: ['Complexity', 'Simplicity and transparency', 'Secrecy', 'Length'], answer: 1, explanation: 'Usable models are transparent, not needlessly complex.' },
      { q: 'A simple growth model projects a line at a:', options: ['Constant growth rate', 'Random rate', 'Zero rate always', 'Negative rate always'], answer: 0, explanation: 'It applies a steady growth assumption.' },
    ],
  },
];

const intrinsicValuation: Topic[] = [
  {
    id: 'fmva-dcf-valuation',
    title: 'DCF Valuation',
    reels: [
      {
        kind: 'formula',
        title: 'DCF Valuation',
        body: [
          'A DCF values a business as the present value of its forecast free cash flows plus a terminal value.',
          'Unlevered FCF (FCFF) is discounted at WACC to give enterprise value.',
          'Subtract net debt to reach equity value, then divide by shares for value per share.',
        ],
        formula: 'EV = Σ FCFFₜ ÷ (1+WACC)ᵗ + TV ÷ (1+WACC)ⁿ',
      },
    ],
    mcqs: [
      { q: 'A DCF discounts FCFF at the:', options: ['Cost of equity', 'WACC', 'Risk-free rate', 'Coupon'], answer: 1, explanation: 'FCFF is pre-financing, so it is discounted at WACC.' },
      { q: 'Discounting FCFF at WACC gives:', options: ['Equity value', 'Enterprise value', 'Net income', 'Book value'], answer: 1, explanation: 'It yields enterprise value.', tricky: true },
      { q: 'Terminal value captures:', options: ['Year 1 only', 'Cash flows beyond the forecast', 'Debt', 'Tax'], answer: 1, explanation: 'TV covers value past the explicit horizon.' },
      { q: 'To get equity value from enterprise value:', options: ['Add net debt', 'Subtract net debt', 'Add revenue', 'Do nothing'], answer: 1, explanation: 'Equity value = EV − net debt.', tricky: true },
    ],
  },
  {
    id: 'fmva-sensitivity',
    title: 'Sensitivity Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Sensitivity Analysis',
        body: [
          'Sensitivity analysis flexes one or two key assumptions to see how the output (e.g. value) changes.',
          'Excel data tables produce one- and two-variable sensitivity grids.',
          'It reveals which assumptions matter most and the range of outcomes.',
        ],
      },
    ],
    mcqs: [
      { q: 'Sensitivity analysis typically flexes:', options: ['Everything at once', 'One or two key inputs', 'Nothing', 'Only the output'], answer: 1, explanation: 'It varies one or two drivers to see the effect.', tricky: true },
      { q: 'In Excel, sensitivity grids are built with:', options: ['Charts', 'Data tables', 'Comments', 'Headers'], answer: 1, explanation: 'Data tables flex inputs automatically.' },
      { q: 'Sensitivity analysis reveals:', options: ['The exact future', 'Which assumptions drive the result', 'The tax code', 'The share count'], answer: 1, explanation: 'It highlights the most influential inputs.' },
      { q: 'A DCF is most sensitive to:', options: ['The company name', 'WACC and terminal growth', 'The tab colour', 'The fiscal year label'], answer: 1, explanation: 'Small WACC/g changes move the value a lot.' },
    ],
  },
  {
    id: 'fmva-scenario',
    title: 'Scenario Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Scenario Analysis',
        body: [
          'Scenario analysis flexes several assumptions together into coherent states — typically base, bull and bear.',
          'Unlike sensitivity (one input), scenarios move a whole set at once.',
          'It frames a realistic range of outcomes for decision-making.',
        ],
      },
    ],
    mcqs: [
      { q: 'Scenario analysis flexes:', options: ['One input only', 'A whole set of inputs together', 'No inputs', 'Only the output'], answer: 1, explanation: 'Scenarios move many assumptions coherently.', tricky: true },
      { q: 'Typical scenarios are base, bull and:', options: ['Bear', 'Neutral only', 'Random', 'Fixed'], answer: 0, explanation: 'Base/bull/bear is the classic trio.' },
      { q: 'Scenario differs from sensitivity because it:', options: ['Uses one variable', 'Bundles multiple assumptions into states', 'Ignores assumptions', 'Is the same'], answer: 1, explanation: 'Sensitivity flexes one/two; scenarios bundle many.', tricky: true },
      { q: 'Scenario analysis helps decision-makers see:', options: ['A single point', 'A range of plausible outcomes', 'Only the past', 'The tax rate'], answer: 1, explanation: 'It maps a realistic outcome range.' },
    ],
  },
  {
    id: 'fmva-business-valuation',
    title: 'Business Valuation',
    reels: [
      {
        kind: 'concept',
        title: 'Business Valuation',
        body: [
          'Business valuation estimates what an entire company is worth, blending intrinsic (DCF) and relative (multiples) methods.',
          'Analysts triangulate methods into a defensible value range rather than a single point.',
          'Context — growth, risk, comparables — shapes the final judgment.',
        ],
      },
    ],
    mcqs: [
      { q: 'Best-practice valuation:', options: ['Uses one method', 'Triangulates several into a range', 'Uses the highest value', 'Ignores the DCF'], answer: 1, explanation: 'Cross-checking methods gives a defensible range.' },
      { q: 'Intrinsic valuation is represented by the:', options: ['Comps', 'DCF', 'Precedents', 'P/B only'], answer: 1, explanation: 'The DCF is the intrinsic (absolute) approach.', tricky: true },
      { q: 'A valuation result is best expressed as:', options: ['A single exact number', 'A range', 'A guess', 'A coupon'], answer: 1, explanation: 'Ranges reflect the uncertainty in assumptions.' },
      { q: 'Relative valuation relies on:', options: ['A company’s own cash flows', 'Peer multiples', 'The tax code', 'Beta only'], answer: 1, explanation: 'Relative methods use comparable multiples.' },
    ],
  },
  {
    id: 'fmva-startup-valuation',
    title: 'Startup Valuation',
    reels: [
      {
        kind: 'concept',
        title: 'Startup Valuation',
        body: [
          'Early-stage startups often lack profits, so traditional P/E fails; EV/Revenue or forward metrics are used.',
          'Methods include the Venture Capital method, scorecard, and discounted future value with high discount rates.',
          'Valuations rely heavily on growth assumptions and are highly uncertain.',
        ],
      },
    ],
    mcqs: [
      { q: 'A loss-making startup is best valued on:', options: ['P/E', 'EV/Revenue or forward metrics', 'Dividend yield', 'Book value only'], answer: 1, explanation: 'With no earnings, revenue-based multiples are used.', tricky: true },
      { q: 'Startup discount rates are typically:', options: ['Very low', 'Very high (reflecting risk)', 'Zero', 'Negative'], answer: 1, explanation: 'High risk demands high discount rates.', tricky: true },
      { q: 'The VC method values a startup based on:', options: ['Current profit', 'An expected exit value discounted back', 'Book value', 'Coupons'], answer: 1, explanation: 'It discounts a projected exit value at a high rate.' },
      { q: 'Startup valuations are:', options: ['Highly certain', 'Highly uncertain and assumption-driven', 'Fixed by law', 'Risk-free'], answer: 1, explanation: 'They hinge on uncertain growth assumptions.' },
    ],
  },
];

const advanced: Topic[] = [
  {
    id: 'fmva-comps-analysis',
    title: 'Comparable Company Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Comparable Company Analysis',
        body: [
          'Comps value a business using the trading multiples of similar listed peers.',
          'Pick peers by sector, size and growth; apply their EV/EBITDA, P/E, etc.',
          'It reflects where the market prices similar companies today.',
        ],
      },
    ],
    mcqs: [
      { q: 'Comparable company analysis uses:', options: ['A firm’s own cash flows', 'Trading multiples of listed peers', 'Book value only', 'Coupons'], answer: 1, explanation: 'It applies peers’ market multiples.' },
      { q: 'EV/EBITDA should be paired with:', options: ['Net income', 'Enterprise value', 'Equity value', 'Dividend'], answer: 1, explanation: 'EBITDA is pre-interest, so it pairs with EV.', tricky: true },
      { q: 'Peers should share:', options: ['Alphabetical order', 'Sector, size and growth profile', 'Ticker length', 'Share price'], answer: 1, explanation: 'Comparability requires similar business characteristics.' },
      { q: 'Comps reflect:', options: ['Intrinsic value', 'Current market pricing of peers', 'Historic cost', 'Par value'], answer: 1, explanation: 'They show where the market prices similar firms.' },
    ],
  },
  {
    id: 'fmva-precedents',
    title: 'Precedent Transactions',
    reels: [
      {
        kind: 'concept',
        title: 'Precedent Transactions',
        body: [
          'This method values a company using multiples paid in past M&A deals for similar businesses.',
          'Deal multiples usually exceed trading comps because acquirers pay a control premium.',
          'Data can be dated, so adjust for market conditions at the time of each deal.',
        ],
      },
    ],
    mcqs: [
      { q: 'Precedent transactions use multiples from:', options: ['Daily trading', 'Past M&A deals', 'Bond issues', 'IPOs only'], answer: 1, explanation: 'They use prices paid in actual acquisitions.' },
      { q: 'Deal multiples exceed trading comps due to a:', options: ['Liquidity discount', 'Control premium', 'Tax shield', 'Coupon'], answer: 1, explanation: 'Acquirers pay a premium for control.', tricky: true },
      { q: 'A drawback of precedent data is that it can be:', options: ['Too current', 'Dated / condition-dependent', 'Too precise', 'Risk-free'], answer: 1, explanation: 'Old deals reflect old market conditions.' },
      { q: 'Precedent transactions are a ______ valuation method.', options: ['Intrinsic', 'Relative', 'Technical', 'Macro'], answer: 1, explanation: 'They price via comparable deal multiples.' },
    ],
  },
  {
    id: 'fmva-lbo',
    title: 'LBO Basics',
    reels: [
      {
        kind: 'concept',
        title: 'LBO Basics',
        body: [
          'A leveraged buyout acquires a company using a large amount of debt, with a smaller equity cheque.',
          'The company’s cash flows repay the debt; returns are amplified by leverage.',
          'Private-equity firms use LBOs to target strong internal rates of return (IRR).',
        ],
      },
    ],
    mcqs: [
      { q: 'An LBO acquires a company mainly with:', options: ['Equity only', 'A large amount of debt', 'Government grants', 'Dividends'], answer: 1, explanation: 'LBOs are debt-heavy acquisitions.' },
      { q: 'In an LBO, debt is repaid using the:', options: ['Acquirer’s salary', 'Target’s cash flows', 'New equity issues', 'Dividends received'], answer: 1, explanation: 'The target’s own cash flows service the debt.', tricky: true },
      { q: 'Leverage in an LBO:', options: ['Reduces returns', 'Amplifies equity returns (and risk)', 'Has no effect', 'Removes risk'], answer: 1, explanation: 'Leverage magnifies both returns and risk.' },
      { q: 'LBOs are typically executed by:', options: ['Retail investors', 'Private-equity firms', 'Central banks', 'Rating agencies'], answer: 1, explanation: 'PE firms are the classic LBO sponsors.' },
    ],
  },
  {
    id: 'fmva-ma-modeling',
    title: 'M&A Modeling',
    reels: [
      {
        kind: 'concept',
        title: 'M&A Modeling',
        body: [
          'An M&A model combines the acquirer and target and tests whether a deal adds or dilutes EPS (accretion/dilution).',
          'It accounts for the purchase price, financing mix (cash/debt/stock) and synergies.',
          'A deal is accretive if combined EPS rises, dilutive if it falls.',
        ],
      },
    ],
    mcqs: [
      { q: 'An M&A model tests whether a deal is:', options: ['Legal', 'Accretive or dilutive to EPS', 'Taxable only', 'Liquid'], answer: 1, explanation: 'Accretion/dilution is a core M&A output.', tricky: true },
      { q: 'A deal that raises combined EPS is:', options: ['Dilutive', 'Accretive', 'Neutral by law', 'Illegal'], answer: 1, explanation: 'Higher combined EPS = accretive.' },
      { q: 'Synergies in a deal are:', options: ['Extra costs only', 'Cost savings or revenue gains from combining', 'Taxes', 'Dividends'], answer: 1, explanation: 'Synergies are the added value from combining firms.' },
      { q: 'The financing mix of a deal can be:', options: ['Only cash', 'Cash, debt and/or stock', 'Only dividends', 'Only grants'], answer: 1, explanation: 'Deals use a mix of cash, debt and equity.' },
    ],
  },
  {
    id: 'fmva-real-estate',
    title: 'Real Estate Modeling',
    reels: [
      {
        kind: 'concept',
        title: 'Real Estate Modeling',
        body: [
          'Real-estate models project rental income, operating expenses and financing for a property.',
          'Net Operating Income (NOI) = rental income − operating expenses; value = NOI ÷ cap rate.',
          'Leverage and exit assumptions drive investor returns (IRR, equity multiple).',
        ],
        formula: 'Property value ≈ NOI ÷ Cap rate',
      },
    ],
    mcqs: [
      { q: 'Net Operating Income (NOI) equals rental income minus:', options: ['Financing', 'Operating expenses', 'Tax only', 'Depreciation only'], answer: 1, explanation: 'NOI = rental income − operating expenses (before financing).', tricky: true },
      { q: 'Property value is estimated as NOI divided by the:', options: ['Coupon', 'Cap rate', 'Beta', 'Tax rate'], answer: 1, explanation: 'Value ≈ NOI ÷ capitalisation rate.', tricky: true },
      { q: 'A lower cap rate implies a ______ property value (same NOI).', options: ['Lower', 'Higher', 'Zero', 'Unchanged'], answer: 1, explanation: 'Dividing by a smaller number gives a higher value.' },
      { q: 'Real-estate returns are often measured by:', options: ['P/E', 'IRR and equity multiple', 'RSI', 'Duration'], answer: 1, explanation: 'IRR and equity multiple are standard RE metrics.' },
    ],
  },
  {
    id: 'fmva-project-finance',
    title: 'Project Finance',
    reels: [
      {
        kind: 'concept',
        title: 'Project Finance',
        body: [
          'Project finance funds large infrastructure projects using the project’s own cash flows as security (often non-recourse).',
          'Lenders focus on the project’s ability to service debt (the DSCR), not the sponsor’s balance sheet.',
          'It is common for power plants, roads and other long-life assets.',
        ],
      },
    ],
    mcqs: [
      { q: 'Project finance is typically secured by:', options: ['The sponsor’s whole balance sheet', 'The project’s own cash flows (non-recourse)', 'Personal guarantees only', 'Nothing'], answer: 1, explanation: 'Non-recourse project finance relies on project cash flows.', tricky: true },
      { q: 'Lenders in project finance focus on the:', options: ['Share price', 'Debt Service Coverage Ratio (DSCR)', 'P/E', 'Dividend'], answer: 1, explanation: 'DSCR measures cash available to service debt.', tricky: true },
      { q: 'Project finance is common for:', options: ['Day-trading', 'Infrastructure (power, roads)', 'Retail shops only', 'Currency trading'], answer: 1, explanation: 'It funds large, long-life infrastructure assets.' },
      { q: 'A DSCR below 1.0 means the project:', options: ['Easily covers debt', 'Cannot fully cover its debt service', 'Has no debt', 'Is risk-free'], answer: 1, explanation: 'DSCR < 1 means cash flow is insufficient for debt service.' },
    ],
  },
  {
    id: 'fmva-presentation',
    title: 'Presentation Skills',
    reels: [
      {
        kind: 'concept',
        title: 'Presentation Skills',
        body: [
          'Analysts must communicate findings clearly through decks and dashboards.',
          'Lead with the recommendation, support with evidence, and keep slides clean and focused.',
          'Know your audience and anticipate their questions.',
        ],
      },
    ],
    mcqs: [
      { q: 'A strong analyst presentation should:', options: ['Bury the conclusion', 'Lead with the recommendation', 'Use dense text', 'Avoid data'], answer: 1, explanation: 'Lead with the recommendation, then support it.' },
      { q: 'Slides should be:', options: ['Cluttered', 'Clean and focused', 'All text', 'Unlabelled'], answer: 1, explanation: 'Clarity and focus aid comprehension.' },
      { q: 'Effective communication requires knowing your:', options: ['Competitors only', 'Audience', 'The tax code', 'The ticker'], answer: 1, explanation: 'Tailoring to the audience is essential.', tricky: true },
      { q: 'The goal of a finance presentation is to:', options: ['Show off formulas', 'Drive an informed decision', 'Fill time', 'Hide results'], answer: 1, explanation: 'It should enable a decision.' },
    ],
  },
];

export const fmva: Course = {
  id: 'fmva',
  title: 'Financial Modeling & Valuation Analyst',
  shortTitle: 'FMVA',
  provider: 'Corporate Finance Institute (CFI)',
  accent: '#3f8378',
  glyph: '📊',
  tagline:
    'CFI’s professional certification in building three-statement models and valuing companies with DCF, comparables and precedent transactions.',
  overview: [
    'The Financial Modeling & Valuation Analyst (FMVA)® certification from the Corporate Finance Institute trains analysts to build integrated financial models and value businesses.',
    'It spans Excel and accounting fundamentals, three-statement modelling, forecasting, DCF valuation, comparable-company and precedent-transaction analysis, and presenting results.',
    'This course breaks the FMVA skill set into every topic: master Excel, read and link the statements, forecast the model, then value the company several ways.',
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
      id: 'fmva-excel',
      title: 'Excel & Modelling Foundations',
      summary:
        'The tooling — Excel fundamentals and advanced functions, Power Query, Power Pivot, charts and dashboards.',
      topics: excelFoundations,
    },
    {
      id: 'fmva-stmts',
      title: 'Accounting & the 3 Statements',
      summary:
        'The income statement, balance sheet and cash-flow statement, how they link, and ratio analysis.',
      topics: statements,
    },
    {
      id: 'fmva-model',
      title: 'Forecasting & the Model',
      summary:
        'Driving the model — revenue and cost forecasting, working capital, depreciation, CapEx, debt and budgeting.',
      topics: forecasting,
    },
    {
      id: 'fmva-dcf',
      title: 'Intrinsic Valuation',
      summary:
        'DCF valuation, sensitivity and scenario analysis, and business and startup valuation.',
      topics: intrinsicValuation,
    },
    {
      id: 'fmva-comps',
      title: 'Relative Valuation & Advanced',
      summary:
        'Comparable companies and precedent transactions, plus LBO, M&A, real estate, project finance and presenting.',
      topics: advanced,
    },
  ],
};
