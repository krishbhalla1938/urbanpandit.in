import type { Course, Topic } from '../types';

// Topic-by-topic build of Financial Accounting Fundamentals. Module ids
// acc-basics / acc-cycle / acc-statements / acc-analysis are kept so their Deep
// Dive sets in extras.ts merge.

const foundations: Topic[] = [
  {
    id: 'acc-intro',
    title: 'Introduction to Accounting',
    reels: [
      {
        kind: 'concept',
        title: 'Introduction to Accounting',
        body: [
          'Accounting is the process of recording, classifying, summarising and reporting financial transactions.',
          'Financial accounting serves external users (investors, lenders); management accounting serves internal managers.',
          'Its output is the financial statements.',
        ],
      },
    ],
    mcqs: [
      { q: 'Accounting records, classifies, summarises and:', options: ['Ignores', 'Reports transactions', 'Hides', 'Audits only'], answer: 1, explanation: 'The end product is reported financial information.' },
      { q: 'Financial accounting mainly serves:', options: ['Internal managers', 'External users', 'Only the tax office', 'Only auditors'], answer: 1, explanation: 'It reports to external stakeholders.', tricky: true },
      { q: 'The output of financial accounting is the:', options: ['Budget', 'Financial statements', 'Sales pitch', 'Org chart'], answer: 1, explanation: 'It produces the financial statements.' },
      { q: 'Management accounting is for:', options: ['External users', 'Internal decision-makers', 'Regulators only', 'Tax only'], answer: 1, explanation: 'Management accounting supports internal decisions.' },
    ],
  },
  {
    id: 'acc-principles',
    title: 'Accounting Principles',
    reels: [
      {
        kind: 'concept',
        title: 'Accounting Principles',
        body: [
          'Principles are the rules governing how transactions are recorded, ensuring consistency and comparability.',
          'GAAP and IFRS are the main frameworks.',
          'They make statements reliable and comparable across firms and time.',
        ],
      },
    ],
    mcqs: [
      { q: 'Accounting principles ensure:', options: ['Secrecy', 'Consistency and comparability', 'Higher taxes', 'Random reporting'], answer: 1, explanation: 'They standardise how transactions are recorded.' },
      { q: 'A major global framework is:', options: ['CAPM', 'IFRS', 'RSI', 'PMLA'], answer: 1, explanation: 'IFRS (and GAAP) are the main frameworks.', tricky: true },
      { q: 'Principles make statements:', options: ['Unreliable', 'Reliable and comparable', 'Optional', 'Secret'], answer: 1, explanation: 'They improve reliability and comparability.' },
      { q: 'US accounting standards are known as:', options: ['GAAP', 'RSI', 'STT', 'DAX'], answer: 0, explanation: 'US GAAP is the American framework.' },
    ],
  },
  {
    id: 'acc-concepts',
    title: 'Concepts & Conventions',
    reels: [
      {
        kind: 'list',
        title: 'Concepts & Conventions',
        body: [
          'Business entity: the firm is separate from its owner. Going concern: it will continue operating.',
          'Money measurement, cost, dual aspect, accrual, matching, consistency and prudence.',
          'These underpin how and when items are recorded.',
        ],
        tip: 'Prudence: don’t anticipate profits, but provide for likely losses.',
      },
    ],
    mcqs: [
      { q: 'The business entity concept says the firm is:', options: ['The same as the owner', 'Separate from the owner', 'Owned by the state', 'Tax-free'], answer: 1, explanation: 'The entity is distinct from its owners.' },
      { q: 'Going concern assumes the business will:', options: ['Close soon', 'Continue operating', 'Be sold at once', 'Pay no tax'], answer: 1, explanation: 'It presumes continued operation.' },
      { q: 'Prudence requires:', options: ['Anticipating profits', 'Providing for likely losses, not unrealised gains', 'Ignoring losses', 'Overstating assets'], answer: 1, explanation: 'Prudence is conservative recognition.', tricky: true },
      { q: 'The dual aspect concept underlies:', options: ['Single entry', 'Double-entry bookkeeping', 'Cash only', 'No records'], answer: 1, explanation: 'Every debit has an equal credit.' },
    ],
  },
  {
    id: 'acc-equation',
    title: 'Accounting Equation',
    reels: [
      {
        kind: 'formula',
        title: 'The Accounting Equation',
        body: [
          'Assets = Liabilities + Owner’s Equity holds after every transaction.',
          'Every transaction keeps the equation balanced via equal debit and credit effects.',
          'Owner’s equity = assets − liabilities.',
        ],
        formula: 'Assets = Liabilities + Owner’s Equity',
      },
    ],
    mcqs: [
      { q: 'The accounting equation is:', options: ['Assets = Liabilities − Equity', 'Assets = Liabilities + Equity', 'Equity = Assets + Liabilities', 'Assets + Equity = Liabilities'], answer: 1, explanation: 'Assets = Liabilities + Owner’s Equity.' },
      { q: 'Owner’s equity equals:', options: ['Assets + liabilities', 'Assets − liabilities', 'Liabilities − assets', 'Revenue − expenses'], answer: 1, explanation: 'Equity is the residual: assets − liabilities.' },
      { q: 'If assets are ₹90,000 and liabilities ₹40,000, equity is:', options: ['₹130,000', '₹50,000', '₹40,000', '₹90,000'], answer: 1, explanation: '90,000 − 40,000 = ₹50,000.', tricky: true },
      { q: 'Every transaction keeps the equation:', options: ['Unbalanced', 'Balanced', 'Zero', 'Negative'], answer: 1, explanation: 'Equal debits and credits maintain balance.' },
    ],
  },
  {
    id: 'acc-capital-revenue',
    title: 'Capital & Revenue',
    reels: [
      {
        kind: 'concept',
        title: 'Capital & Revenue Items',
        body: [
          'Capital expenditure benefits future periods and is capitalised as an asset (e.g. buying machinery).',
          'Revenue expenditure is consumed in the current period and expensed (e.g. rent, repairs).',
          'Misclassifying them distorts profit and the balance sheet.',
        ],
      },
    ],
    mcqs: [
      { q: 'Buying machinery is:', options: ['Revenue expenditure', 'Capital expenditure', 'A liability', 'A drawing'], answer: 1, explanation: 'It benefits future periods — capitalised as an asset.' },
      { q: 'Repainting the office is:', options: ['Capital expenditure', 'Revenue expenditure', 'A liability', 'A drawing'], answer: 1, explanation: 'Routine maintenance is a current expense.', tricky: true },
      { q: 'Capital expenditure appears on the:', options: ['Income statement as expense', 'Balance sheet as an asset', 'Cash book only', 'Nowhere'], answer: 1, explanation: 'It is capitalised on the balance sheet, then depreciated.' },
      { q: 'Misclassifying capital as revenue would:', options: ['Have no effect', 'Understate profit this period', 'Overstate assets forever', 'Raise tax to zero'], answer: 1, explanation: 'Expensing a capital item understates current profit.', tricky: true },
    ],
  },
  {
    id: 'acc-accrual',
    title: 'Accrual Accounting',
    reels: [
      {
        kind: 'concept',
        title: 'Accrual Accounting',
        body: [
          'Accrual accounting records revenue when earned and expenses when incurred — not when cash moves.',
          'It gives a truer picture of performance than cash accounting.',
          'It creates items like receivables, payables, accruals and prepayments.',
        ],
      },
    ],
    mcqs: [
      { q: 'Under accrual accounting, revenue is recorded when:', options: ['Cash is received', 'It is earned', 'The year ends', 'Invoiced and paid'], answer: 1, explanation: 'Revenue is recognised when earned.' },
      { q: 'An expense is recorded when:', options: ['Paid in cash', 'Incurred', 'Budgeted', 'Approved'], answer: 1, explanation: 'Expenses are recognised when incurred.', tricky: true },
      { q: 'Accrual accounting gives a ______ picture than cash accounting.', options: ['Worse', 'Truer', 'Identical', 'Random'], answer: 1, explanation: 'It matches revenues and costs to the right period.' },
      { q: 'Accruals create items such as:', options: ['Only cash', 'Receivables and payables', 'Only equity', 'Only tax'], answer: 1, explanation: 'Receivables, payables, accruals and prepayments arise.' },
    ],
  },
];

const recording: Topic[] = [
  {
    id: 'acc-journal',
    title: 'Journal',
    reels: [
      {
        kind: 'concept',
        title: 'The Journal',
        body: [
          'The journal is the book of original entry where transactions are first recorded chronologically.',
          'Each entry debits one or more accounts and credits others by equal amounts.',
          'It includes a narration explaining the transaction.',
        ],
        tip: 'DEAD CLIC: Debits = Expenses, Assets, Drawings; Credits = Liabilities, Income, Capital.',
      },
    ],
    mcqs: [
      { q: 'The journal is the book of:', options: ['Final entry', 'Original entry', 'Trial balance', 'Final accounts'], answer: 1, explanation: 'Transactions are first recorded in the journal.' },
      { q: 'In every journal entry, debits equal:', options: ['Credits', 'Assets', 'Revenue', 'Zero'], answer: 0, explanation: 'Debits must equal credits.' },
      { q: 'An increase in an asset is a:', options: ['Credit', 'Debit', 'Contra', 'Drawing'], answer: 1, explanation: 'Assets increase with a debit.', tricky: true },
      { q: 'Income increases with a:', options: ['Debit', 'Credit', 'Contra', 'Reversal'], answer: 1, explanation: 'Income (and liabilities, capital) increase with a credit.', tricky: true },
    ],
  },
  {
    id: 'acc-ledger',
    title: 'Ledger',
    reels: [
      {
        kind: 'concept',
        title: 'The Ledger',
        body: [
          'The ledger contains individual accounts to which journal entries are posted.',
          'Each account (a “T-account”) gathers all activity and shows a running balance.',
          'It is the source for preparing the trial balance.',
        ],
      },
    ],
    mcqs: [
      { q: 'Posting means transferring entries from the journal to the:', options: ['Ledger', 'Bank', 'Cash box', 'Auditor'], answer: 0, explanation: 'Journal entries are posted to ledger accounts.' },
      { q: 'A ledger account is often called a:', options: ['P&L', 'T-account', 'Trial balance', 'Voucher'], answer: 1, explanation: 'Its shape gives the “T-account” nickname.', tricky: true },
      { q: 'The ledger is the source for the:', options: ['Journal', 'Trial balance', 'Invoice', 'Budget'], answer: 1, explanation: 'Balances feed the trial balance.' },
      { q: 'Each ledger account shows a:', options: ['Random number', 'Running balance of that account', 'The tax rate', 'The share price'], answer: 1, explanation: 'It gathers activity and shows the balance.' },
    ],
  },
  {
    id: 'acc-trial-balance',
    title: 'Trial Balance',
    reels: [
      {
        kind: 'concept',
        title: 'The Trial Balance',
        body: [
          'A trial balance lists all ledger balances; total debits should equal total credits.',
          'It checks arithmetical accuracy before preparing final accounts.',
          'Agreement does not prove there are no errors (omission, principle, compensating).',
        ],
      },
    ],
    mcqs: [
      { q: 'In a trial balance, total debits should equal:', options: ['Total assets', 'Total credits', 'Net profit', 'Revenue'], answer: 1, explanation: 'Debits must equal credits.' },
      { q: 'The trial balance checks:', options: ['Cash only', 'Arithmetical accuracy', 'Tax', 'Share price'], answer: 1, explanation: 'It verifies the books add up.' },
      { q: 'Which error does a trial balance NOT catch?', options: ['One-sided posting', 'Complete omission', 'Wrong total on one side', 'Missing credit'], answer: 1, explanation: 'A fully omitted entry still balances.', tricky: true },
      { q: 'A balanced trial balance proves:', options: ['No errors at all', 'Only arithmetical accuracy', 'Profit is correct', 'Cash is counted'], answer: 1, explanation: 'Some error types can still exist.', tricky: true },
    ],
  },
  {
    id: 'acc-cash-book',
    title: 'Cash Book',
    reels: [
      {
        kind: 'concept',
        title: 'The Cash Book',
        body: [
          'The cash book records all cash and bank receipts and payments.',
          'It is both a journal and a ledger for cash/bank.',
          'A contra entry moves money between cash and bank within the business.',
        ],
      },
    ],
    mcqs: [
      { q: 'The cash book records:', options: ['Only credit sales', 'Cash and bank receipts and payments', 'Only depreciation', 'Only tax'], answer: 1, explanation: 'It tracks cash and bank movements.' },
      { q: 'A contra entry involves:', options: ['Two external parties', 'Both cash and bank of the same business', 'Only sales', 'A supplier and customer'], answer: 1, explanation: 'E.g. depositing cash into the bank.', tricky: true },
      { q: 'The cash book acts as:', options: ['Only a journal', 'Both a journal and a ledger for cash', 'Only a ledger', 'A budget'], answer: 1, explanation: 'It serves both roles for cash/bank.', tricky: true },
      { q: 'A petty cash book handles:', options: ['Large payments', 'Small routine expenses', 'Only receipts', 'Only bank'], answer: 1, explanation: 'Petty cash covers small day-to-day expenses.' },
    ],
  },
  {
    id: 'acc-subsidiary-books',
    title: 'Subsidiary Books',
    reels: [
      {
        kind: 'list',
        title: 'Subsidiary Books',
        body: [
          'Subsidiary books record specific transaction types to reduce journal clutter.',
          'Examples: purchases book, sales book, returns inward/outward books, cash book, bills books.',
          'Totals are posted periodically to the ledger.',
        ],
      },
    ],
    mcqs: [
      { q: 'Credit purchases of goods are recorded in the:', options: ['Sales book', 'Purchases book', 'Cash book', 'Journal proper'], answer: 1, explanation: 'The purchases book records credit purchases of goods.' },
      { q: 'Goods returned by a customer go in the:', options: ['Purchases returns book', 'Sales returns (returns inward) book', 'Cash book', 'Journal proper'], answer: 1, explanation: 'Customer returns are “returns inward”.', tricky: true },
      { q: 'Subsidiary books help by:', options: ['Adding clutter', 'Reducing journal clutter', 'Removing accuracy', 'Hiding data'], answer: 1, explanation: 'They organise similar transactions separately.' },
      { q: 'Totals from subsidiary books are posted to the:', options: ['Budget', 'Ledger', 'Invoice', 'Bank only'], answer: 1, explanation: 'Periodic totals go to the ledger.' },
    ],
  },
  {
    id: 'acc-brs',
    title: 'Bank Reconciliation',
    reels: [
      {
        kind: 'concept',
        title: 'Bank Reconciliation Statement',
        body: [
          'A BRS reconciles the cash-book bank balance with the bank statement balance.',
          'Differences arise from timing items: unpresented cheques, deposits in transit, bank charges and direct credits.',
          'It ensures records are accurate and detects errors or fraud.',
        ],
      },
    ],
    mcqs: [
      { q: 'A BRS reconciles the cash book with the:', options: ['Trial balance', 'Bank statement', 'P&L', 'Budget'], answer: 1, explanation: 'It matches the firm’s and bank’s balances.' },
      { q: 'An unpresented cheque is one that is:', options: ['Deposited and cleared', 'Issued but not yet cleared by the bank', 'Cancelled', 'A bank charge'], answer: 1, explanation: 'Issued but not yet debited by the bank.', tricky: true },
      { q: 'BRS differences are mainly due to:', options: ['Fraud always', 'Timing items', 'Tax', 'Dividends'], answer: 1, explanation: 'Timing of entries in the two records differs.' },
      { q: 'A benefit of a BRS is:', options: ['Hiding errors', 'Detecting errors and fraud', 'Raising taxes', 'Increasing sales'], answer: 1, explanation: 'It surfaces discrepancies.' },
    ],
  },
  {
    id: 'acc-rectification',
    title: 'Rectification of Errors',
    reels: [
      {
        kind: 'list',
        title: 'Rectification of Errors',
        body: [
          'Errors include omission, commission, principle and compensating errors.',
          'Errors of principle and complete omission do not unbalance the trial balance.',
          'A suspense account temporarily holds a difference until located.',
        ],
      },
    ],
    mcqs: [
      { q: 'Recording machinery as “repairs” is an error of:', options: ['Omission', 'Principle', 'Commission', 'Original entry'], answer: 1, explanation: 'Wrong class of account = error of principle.', tricky: true },
      { q: 'A suspense account is used to:', options: ['Record profit', 'Hold a difference until an error is found', 'Pay dividends', 'Store inventory'], answer: 1, explanation: 'It parks a trial-balance difference temporarily.' },
      { q: 'Which error keeps the trial balance in agreement?', options: ['One-sided posting', 'Error of principle', 'Wrong addition on one side', 'Missing debit'], answer: 1, explanation: 'It affects both sides equally.', tricky: true },
      { q: 'Two errors cancelling out are:', options: ['Errors of principle', 'Compensating errors', 'Errors of omission', 'Casting errors'], answer: 1, explanation: 'Compensating errors offset each other.' },
    ],
  },
  {
    id: 'acc-bills',
    title: 'Bills of Exchange',
    reels: [
      {
        kind: 'concept',
        title: 'Bills of Exchange',
        body: [
          'A bill of exchange is a written, unconditional order to pay a sum on a future date.',
          'The drawer orders the drawee to pay the payee; once accepted it becomes binding.',
          'Bills can be discounted with a bank for early cash.',
        ],
      },
    ],
    mcqs: [
      { q: 'A bill of exchange is an order to:', options: ['Deliver goods', 'Pay a sum on a future date', 'Issue shares', 'File tax'], answer: 1, explanation: 'It is an unconditional written order to pay.' },
      { q: 'The party who draws the bill is the:', options: ['Drawee', 'Drawer', 'Payee', 'Banker'], answer: 1, explanation: 'The drawer creates and orders payment.', tricky: true },
      { q: '“Discounting” a bill means:', options: ['Cancelling it', 'Getting early cash from a bank for a fee', 'Paying tax', 'Issuing shares'], answer: 1, explanation: 'The bank advances cash less a discount.', tricky: true },
      { q: 'A bill becomes binding once it is:', options: ['Drawn', 'Accepted by the drawee', 'Filed', 'Photocopied'], answer: 1, explanation: 'Acceptance by the drawee makes it binding.' },
    ],
  },
];

const statements: Topic[] = [
  {
    id: 'acc-financial-statements',
    title: 'Financial Statements',
    reels: [
      {
        kind: 'list',
        title: 'Financial Statements',
        body: [
          'The final accounts comprise the trading account, profit & loss account and balance sheet (plus cash-flow statement).',
          'They show gross profit, net profit and financial position.',
          'They are prepared from the trial balance with adjustments.',
        ],
      },
    ],
    mcqs: [
      { q: 'Final accounts are prepared from the:', options: ['Journal only', 'Trial balance (with adjustments)', 'Bank statement', 'Budget'], answer: 1, explanation: 'The trial balance plus adjustments feed final accounts.' },
      { q: 'Gross profit is found in the:', options: ['Balance sheet', 'Trading account', 'Cash-flow statement', 'Notes'], answer: 1, explanation: 'The trading account computes gross profit.', tricky: true },
      { q: 'Financial position is shown by the:', options: ['P&L', 'Balance sheet', 'Trading account', 'Journal'], answer: 1, explanation: 'The balance sheet shows position.' },
      { q: 'The statements show performance and:', options: ['Only cash', 'Financial position', 'Only tax', 'Only sales'], answer: 1, explanation: 'They cover performance and position.' },
    ],
  },
  {
    id: 'acc-trading-account',
    title: 'Trading Account',
    reels: [
      {
        kind: 'formula',
        title: 'Trading Account',
        body: [
          'The trading account computes gross profit from buying and selling goods.',
          'Gross profit = net sales − cost of goods sold (opening stock + purchases − closing stock).',
          'Closing stock appears on the credit side and later in the balance sheet.',
        ],
        formula: 'Gross profit = Net sales − COGS',
      },
    ],
    mcqs: [
      { q: 'The trading account computes:', options: ['Net profit', 'Gross profit', 'Financial position', 'Cash flow'], answer: 1, explanation: 'It derives gross profit.' },
      { q: 'COGS = opening stock + purchases −:', options: ['Sales', 'Closing stock', 'Tax', 'Wages'], answer: 1, explanation: 'Subtract closing stock to get COGS.', tricky: true },
      { q: 'Closing stock given as an adjustment appears in:', options: ['Only the balance sheet', 'Trading account and balance sheet', 'Only the trading account', 'Neither'], answer: 1, explanation: 'It is credited to trading and shown as a current asset.', tricky: true },
      { q: 'Net sales of ₹500 and COGS of ₹300 give gross profit of:', options: ['₹800', '₹200', '₹300', '₹500'], answer: 1, explanation: '500 − 300 = ₹200.' },
    ],
  },
  {
    id: 'acc-pl-account',
    title: 'Profit & Loss Account',
    reels: [
      {
        kind: 'formula',
        title: 'Profit & Loss Account',
        body: [
          'The P&L account computes net profit by deducting operating expenses, interest and tax from gross profit.',
          'It adds other incomes and subtracts indirect expenses.',
          'Net profit is transferred to the owner’s capital / retained earnings.',
        ],
        formula: 'Net profit = Gross profit + Other income − Expenses',
      },
    ],
    mcqs: [
      { q: 'The P&L account computes:', options: ['Gross profit', 'Net profit', 'Financial position', 'Cash flow'], answer: 1, explanation: 'It derives net profit.' },
      { q: 'Net profit is transferred to:', options: ['Current liabilities', 'Owner’s capital / retained earnings', 'Fixed assets', 'Inventory'], answer: 1, explanation: 'Profit increases owner’s equity.', tricky: true },
      { q: 'Gross profit ₹200, expenses ₹120, net profit is:', options: ['₹320', '₹80', '₹120', '₹200'], answer: 1, explanation: '200 − 120 = ₹80.', tricky: true },
      { q: 'A net loss will ______ owner’s capital.', options: ['Increase', 'Decrease', 'Not affect', 'Double'], answer: 1, explanation: 'Losses reduce capital.' },
    ],
  },
  {
    id: 'acc-balance-sheet',
    title: 'Balance Sheet',
    reels: [
      {
        kind: 'formula',
        title: 'Balance Sheet',
        body: [
          'The balance sheet lists assets, liabilities and capital at a point in time.',
          'It must balance: Assets = Liabilities + Capital.',
          'Assets and liabilities are shown as current and non-current.',
        ],
        formula: 'Assets = Liabilities + Capital',
      },
    ],
    mcqs: [
      { q: 'The balance sheet shows position:', options: ['Over a period', 'At a point in time', 'Only cash', 'Only future'], answer: 1, explanation: 'It is a point-in-time snapshot.' },
      { q: 'Which is a current asset?', options: ['Machinery', 'Land', 'Debtors (receivables)', 'Goodwill'], answer: 2, explanation: 'Receivables convert to cash within a year.', tricky: true },
      { q: 'Outstanding expenses are shown as a:', options: ['Current asset', 'Current liability', 'Income', 'Capital'], answer: 1, explanation: 'They are owed — a current liability.' },
      { q: 'The balance sheet must:', options: ['Never balance', 'Always balance', 'Show only assets', 'Ignore capital'], answer: 1, explanation: 'Assets = liabilities + capital always.' },
    ],
  },
  {
    id: 'acc-cash-flow',
    title: 'Cash Flow Statement',
    reels: [
      {
        kind: 'list',
        title: 'Cash Flow Statement',
        body: [
          'It reconciles profit to cash across Operating, Investing and Financing activities.',
          'Non-cash items like depreciation are added back in operating activities.',
          'A profitable firm can still fail without cash — liquidity matters.',
        ],
      },
    ],
    mcqs: [
      { q: 'The cash-flow statement’s three sections are Operating, Investing and:', options: ['Trading', 'Financing', 'Tax', 'Audit'], answer: 1, explanation: 'Operating, Investing, Financing.' },
      { q: 'Depreciation in the cash-flow statement is:', options: ['A cash outflow', 'Added back (non-cash)', 'Ignored', 'A financing item'], answer: 1, explanation: 'It is non-cash, so added back.', tricky: true },
      { q: 'Buying a fixed asset is under:', options: ['Operating', 'Investing', 'Financing', 'Revenue'], answer: 1, explanation: 'Capex is an investing outflow.' },
      { q: 'A profitable business can fail if it lacks:', options: ['Profit', 'Cash (liquidity)', 'Assets', 'Sales'], answer: 1, explanation: 'Without cash it cannot meet obligations.', tricky: true },
    ],
  },
];

const adjustmentsRatios: Topic[] = [
  {
    id: 'acc-depreciation',
    title: 'Depreciation',
    reels: [
      {
        kind: 'formula',
        title: 'Depreciation',
        body: [
          'Depreciation spreads a fixed asset’s cost over its useful life, matching cost to benefit.',
          'Straight-line charges an equal amount yearly; reducing-balance charges a fixed % of the falling book value.',
          'It is a non-cash expense that lowers profit and the asset’s carrying value.',
        ],
        formula: 'Straight-line = (Cost − Residual) ÷ Useful life',
      },
    ],
    mcqs: [
      { q: 'Depreciation is:', options: ['A cash outflow', 'A non-cash expense allocating cost over life', 'An increase in value', 'Revenue'], answer: 1, explanation: 'It spreads cost over the asset’s life; no cash moves.' },
      { q: 'Reducing-balance depreciation in early years is ______ than straight-line.', options: ['Lower', 'Higher', 'The same', 'Zero'], answer: 1, explanation: 'WDV front-loads the charge.', tricky: true },
      { q: 'An asset costing ₹100,000 at 20% reducing balance: year-2 depreciation is:', options: ['₹20,000', '₹16,000', '₹18,000', '₹10,000'], answer: 1, explanation: 'Yr1 20,000 (WDV 80,000); Yr2 20% of 80,000 = ₹16,000.', tricky: true },
      { q: 'Over an asset’s full life, both methods give:', options: ['Different total depreciation', 'The same total, different timing', 'No depreciation', 'Higher for SLM'], answer: 1, explanation: 'Total = cost − residual under both.' },
    ],
  },
  {
    id: 'acc-inventory-valuation',
    title: 'Inventory Valuation',
    reels: [
      {
        kind: 'concept',
        title: 'Inventory Valuation',
        body: [
          'Inventory is valued at the lower of cost and net realisable value (prudence).',
          'Cost-flow methods: FIFO (first-in, first-out) and weighted average.',
          'In rising prices, FIFO gives higher profit and higher closing inventory than average.',
        ],
      },
    ],
    mcqs: [
      { q: 'Inventory is valued at the lower of cost and:', options: ['Market cap', 'Net realisable value', 'Face value', 'Par'], answer: 1, explanation: 'Prudence: lower of cost and NRV.', tricky: true },
      { q: 'In rising prices, FIFO gives ______ profit than weighted average.', options: ['Lower', 'Higher', 'Identical', 'Zero'], answer: 1, explanation: 'FIFO expenses older cheaper stock, raising profit.', tricky: true },
      { q: 'FIFO stands for:', options: ['First-in, first-out', 'Fixed-in, fixed-out', 'Final-in, first-out', 'First-in, final-out'], answer: 0, explanation: 'First-in, first-out.' },
      { q: 'Valuing inventory below cost when NRV is lower reflects:', options: ['Optimism', 'Prudence/conservatism', 'Matching only', 'Consistency only'], answer: 1, explanation: 'Prudence provides for likely losses.' },
    ],
  },
  {
    id: 'acc-provisions-reserves',
    title: 'Provision & Reserves',
    reels: [
      {
        kind: 'concept',
        title: 'Provisions & Reserves',
        body: [
          'A provision is a charge against profit for a known/likely liability or loss (e.g. doubtful debts).',
          'A reserve is an appropriation of profit set aside for strengthening the business.',
          'Provisions are required by prudence; reserves are discretionary.',
        ],
      },
    ],
    mcqs: [
      { q: 'A provision is a:', options: ['Distribution of profit', 'Charge against profit for a likely loss', 'Type of dividend', 'A share issue'], answer: 1, explanation: 'Provisions charge profit for known/likely losses.', tricky: true },
      { q: 'A reserve is:', options: ['A charge against profit', 'An appropriation of profit', 'A liability to outsiders', 'A cash account'], answer: 1, explanation: 'Reserves set aside profit for the business.', tricky: true },
      { q: 'Provision for doubtful debts follows the concept of:', options: ['Going concern', 'Prudence', 'Consistency', 'Money measurement'], answer: 1, explanation: 'Prudence requires providing for probable losses.' },
      { q: 'Creating a provision ______ reported profit.', options: ['Increases', 'Reduces', 'Doesn’t affect', 'Doubles'], answer: 1, explanation: 'A provision is an expense against profit.' },
    ],
  },
  {
    id: 'acc-working-capital',
    title: 'Working Capital',
    reels: [
      {
        kind: 'formula',
        title: 'Working Capital',
        body: [
          'Working capital = current assets − current liabilities; it is the cash tied up in day-to-day operations.',
          'Positive working capital means short-term assets exceed short-term obligations.',
          'Managing it well keeps a business liquid.',
        ],
        formula: 'Working capital = Current assets − Current liabilities',
      },
    ],
    mcqs: [
      { q: 'Working capital equals:', options: ['Assets − liabilities', 'Current assets − current liabilities', 'Cash + inventory', 'Revenue − cost'], answer: 1, explanation: 'Current assets minus current liabilities.' },
      { q: 'Positive working capital means:', options: ['Current liabilities exceed current assets', 'Current assets exceed current liabilities', 'No assets', 'No liabilities'], answer: 1, explanation: 'Short-term assets exceed short-term obligations.', tricky: true },
      { q: 'Good working-capital management keeps a business:', options: ['Illiquid', 'Liquid', 'Loss-making', 'Untaxed'], answer: 1, explanation: 'It ensures the firm can meet short-term needs.' },
      { q: 'Rising receivables ______ working capital.', options: ['Reduce', 'Increase', 'Eliminate', 'Fix'], answer: 1, explanation: 'Receivables are a current asset, raising working capital.' },
    ],
  },
  {
    id: 'acc-ratio-analysis',
    title: 'Ratio Analysis',
    reels: [
      {
        kind: 'list',
        title: 'Ratio Analysis',
        body: [
          'Ratios interpret the statements: liquidity (current, quick), profitability (margins, ROE), solvency (debt-to-equity).',
          'Efficiency ratios include inventory turnover and receivable days.',
          'Compare to peers and over time for meaning.',
        ],
        formula: 'Current ratio = Current assets ÷ Current liabilities',
      },
    ],
    mcqs: [
      { q: 'The current ratio measures:', options: ['Profitability', 'Short-term liquidity', 'Leverage', 'Growth'], answer: 1, explanation: 'Current assets ÷ current liabilities.' },
      { q: 'The quick ratio excludes:', options: ['Cash', 'Inventory', 'Receivables', 'Payables'], answer: 1, explanation: 'It strips out inventory.', tricky: true },
      { q: 'ROE relates net profit to:', options: ['Assets', 'Equity', 'Revenue', 'Debt'], answer: 1, explanation: 'ROE = net profit ÷ equity.' },
      { q: 'A debt-to-equity of 2 means debt is:', options: ['Half of equity', 'Twice equity', 'Zero', 'Equal to equity'], answer: 1, explanation: 'D/E of 2 = debt twice equity.', tricky: true },
    ],
  },
];

const standardsControls: Topic[] = [
  {
    id: 'acc-gst',
    title: 'GST Basics',
    reels: [
      {
        kind: 'concept',
        title: 'GST Basics',
        body: [
          'GST (Goods and Services Tax) is a destination-based indirect tax on the supply of goods and services in India.',
          'It replaced many earlier indirect taxes with a unified system (CGST, SGST, IGST).',
          'Input tax credit lets businesses offset GST paid on inputs against GST collected.',
        ],
      },
    ],
    mcqs: [
      { q: 'GST is a(n):', options: ['Direct tax on income', 'Indirect tax on supply of goods/services', 'Wealth tax', 'Capital-gains tax'], answer: 1, explanation: 'GST is an indirect tax on supply.' },
      { q: 'Input Tax Credit lets a business:', options: ['Avoid all tax', 'Offset GST paid on inputs against GST collected', 'Double its tax', 'Ignore GST'], answer: 1, explanation: 'ITC prevents tax cascading.', tricky: true },
      { q: 'GST is a ______ tax.', options: ['Origin-based', 'Destination-based', 'Random', 'One-time'], answer: 1, explanation: 'GST is destination-based.', tricky: true },
      { q: 'Interstate supply attracts:', options: ['CGST only', 'IGST', 'No tax', 'Only SGST'], answer: 1, explanation: 'IGST applies to interstate supplies.' },
    ],
  },
  {
    id: 'acc-tds',
    title: 'TDS Basics',
    reels: [
      {
        kind: 'concept',
        title: 'TDS Basics',
        body: [
          'TDS (Tax Deducted at Source) collects income tax at the point income is paid.',
          'The payer deducts a percentage and deposits it with the government on the payee’s behalf.',
          'It ensures steady tax collection and is credited against the payee’s final tax.',
        ],
      },
    ],
    mcqs: [
      { q: 'TDS is deducted:', options: ['At year-end only', 'At the source when income is paid', 'Never', 'By the payee'], answer: 1, explanation: 'Tax is deducted at the point of payment.' },
      { q: 'Who deducts TDS?', options: ['The payee', 'The payer', 'The bank only', 'The auditor'], answer: 1, explanation: 'The payer deducts and deposits it.', tricky: true },
      { q: 'TDS is credited against the payee’s:', options: ['GST', 'Final income-tax liability', 'Salary only', 'Dividend'], answer: 1, explanation: 'It is adjusted against final tax due.' },
      { q: 'A purpose of TDS is:', options: ['To double tax', 'Steady tax collection at source', 'To avoid tax', 'To raise GST'], answer: 1, explanation: 'It spreads and secures collection.' },
    ],
  },
  {
    id: 'acc-internal-controls',
    title: 'Internal Controls',
    reels: [
      {
        kind: 'concept',
        title: 'Internal Controls',
        body: [
          'Internal controls are processes to safeguard assets, ensure accurate records and prevent fraud.',
          'Examples: segregation of duties, authorisation, reconciliations and audits.',
          'They give management and stakeholders confidence in the numbers.',
        ],
      },
    ],
    mcqs: [
      { q: 'Internal controls aim to:', options: ['Increase fraud', 'Safeguard assets and ensure accurate records', 'Raise taxes', 'Hide errors'], answer: 1, explanation: 'They protect assets and reliability.' },
      { q: 'Segregation of duties means:', options: ['One person does everything', 'Splitting tasks so no one controls a whole process', 'No records', 'Only managers work'], answer: 1, explanation: 'It reduces fraud/error risk.', tricky: true },
      { q: 'A reconciliation is an internal control that:', options: ['Hides differences', 'Matches records to detect errors', 'Raises tax', 'Issues shares'], answer: 1, explanation: 'Reconciliations surface discrepancies.' },
      { q: 'Strong controls increase confidence in the:', options: ['Weather', 'Financial numbers', 'Share price only', 'Tax refund'], answer: 1, explanation: 'They make the reported figures trustworthy.' },
    ],
  },
  {
    id: 'acc-accounting-standards',
    title: 'Accounting Standards',
    reels: [
      {
        kind: 'concept',
        title: 'Accounting Standards',
        body: [
          'Accounting standards are authoritative rules on how to record and present transactions.',
          'They promote consistency, comparability and transparency.',
          'In India, standards are issued by the ICAI and notified by the government.',
        ],
      },
    ],
    mcqs: [
      { q: 'Accounting standards promote:', options: ['Secrecy', 'Consistency and comparability', 'Higher tax', 'Random reporting'], answer: 1, explanation: 'They standardise recording and presentation.' },
      { q: 'In India, accounting standards are issued by the:', options: ['RBI', 'ICAI', 'SEBI', 'IRDAI'], answer: 1, explanation: 'The ICAI issues standards.', tricky: true },
      { q: 'Standards make statements:', options: ['Less reliable', 'More comparable and transparent', 'Optional', 'Secret'], answer: 1, explanation: 'They improve comparability and transparency.' },
      { q: 'Accounting standards are:', options: ['Optional suggestions', 'Authoritative rules', 'Marketing tips', 'Tax forms'], answer: 1, explanation: 'They are binding rules for preparation.' },
    ],
  },
  {
    id: 'acc-ifrs',
    title: 'IFRS Basics',
    reels: [
      {
        kind: 'concept',
        title: 'IFRS Basics',
        body: [
          'IFRS (International Financial Reporting Standards) are global standards issued by the IFRS Foundation/IASB.',
          'They aim for a single set of high-quality, comparable standards used worldwide.',
          'Many countries have adopted or converged with IFRS.',
        ],
      },
    ],
    mcqs: [
      { q: 'IFRS are issued by the:', options: ['FASB', 'IFRS Foundation / IASB', 'SEBI', 'ICAI'], answer: 1, explanation: 'The IASB (under the IFRS Foundation) issues IFRS.', tricky: true },
      { q: 'IFRS aim to provide:', options: ['Different rules per firm', 'A single global set of standards', 'No standards', 'Only tax rules'], answer: 1, explanation: 'A common global framework for comparability.' },
      { q: 'IFRS improve:', options: ['Secrecy', 'Cross-border comparability', 'Tax evasion', 'Volatility'], answer: 1, explanation: 'Global comparability is a key goal.' },
      { q: 'US GAAP differs from IFRS as the:', options: ['Same thing', 'US national framework', 'A tax code', 'An index'], answer: 1, explanation: 'US GAAP is the American standard; IFRS is international.' },
    ],
  },
  {
    id: 'acc-ind-as',
    title: 'Ind AS Basics',
    reels: [
      {
        kind: 'concept',
        title: 'Ind AS Basics',
        body: [
          'Ind AS are India’s accounting standards, converged with IFRS.',
          'They apply to specified companies based on size and listing status.',
          'They bring Indian reporting closer to global practice.',
        ],
      },
    ],
    mcqs: [
      { q: 'Ind AS are:', options: ['US standards', 'India’s IFRS-converged standards', 'Tax rules', 'A stock index'], answer: 1, explanation: 'Ind AS are India’s IFRS-aligned standards.', tricky: true },
      { q: 'Ind AS apply to:', options: ['Every tiny business', 'Specified companies by size/listing', 'Only banks', 'Only startups'], answer: 1, explanation: 'Applicability depends on size and listing.', tricky: true },
      { q: 'Ind AS are converged with:', options: ['US GAAP', 'IFRS', 'Nothing', 'Tax law'], answer: 1, explanation: 'They are aligned with IFRS.' },
      { q: 'Ind AS bring Indian reporting closer to:', options: ['Local-only practice', 'Global practice', 'No standards', 'Tax filing'], answer: 1, explanation: 'They align India with international norms.' },
    ],
  },
  {
    id: 'acc-ethics',
    title: 'Ethics in Accounting',
    reels: [
      {
        kind: 'concept',
        title: 'Ethics in Accounting',
        body: [
          'Accountants must act with integrity, objectivity and professional competence.',
          'They must not misrepresent figures, and must maintain confidentiality and independence.',
          'Ethical failures (e.g. fraudulent reporting) destroy trust and can be criminal.',
        ],
      },
    ],
    mcqs: [
      { q: 'A core accounting ethic is:', options: ['Misrepresentation', 'Integrity and objectivity', 'Secrecy for gain', 'Bias'], answer: 1, explanation: 'Integrity and objectivity are fundamental.' },
      { q: 'Deliberately misstating accounts is:', options: ['Acceptable', 'Fraud (unethical and often illegal)', 'Required', 'Tax-free'], answer: 1, explanation: 'Fraudulent reporting is unethical and illegal.', tricky: true },
      { q: 'An auditor must maintain:', options: ['Dependence on the client', 'Independence and objectivity', 'Bias toward management', 'Secret side deals'], answer: 1, explanation: 'Independence underpins credible audits.' },
      { q: 'Ethical accounting protects:', options: ['Only the accountant', 'Trust in financial information', 'Tax evasion', 'Share ramping'], answer: 1, explanation: 'It preserves stakeholder trust.' },
    ],
  },
  {
    id: 'acc-computerized',
    title: 'Computerized Accounting',
    reels: [
      {
        kind: 'concept',
        title: 'Computerized Accounting',
        body: [
          'Computerised accounting uses software (e.g. Tally, ERP systems) to record and process transactions.',
          'It improves speed, accuracy and reporting, and reduces manual errors.',
          'Controls, backups and access rights protect data integrity.',
        ],
      },
    ],
    mcqs: [
      { q: 'Computerised accounting improves:', options: ['Only cost', 'Speed, accuracy and reporting', 'Nothing', 'Only tax'], answer: 1, explanation: 'Software boosts efficiency and accuracy.' },
      { q: 'A common Indian accounting software is:', options: ['Tally', 'RSI', 'SWIFT', 'NEAT'], answer: 0, explanation: 'Tally is widely used in India.', tricky: true },
      { q: 'Data integrity in computerised systems is protected by:', options: ['Ignoring backups', 'Controls, backups and access rights', 'Sharing passwords', 'No security'], answer: 1, explanation: 'Controls, backups and access management protect data.' },
      { q: 'Computerised accounting reduces:', options: ['Speed', 'Manual errors', 'Accuracy', 'Reporting'], answer: 1, explanation: 'Automation cuts manual mistakes.' },
    ],
  },
];

export const accounting: Course = {
  id: 'accounting',
  title: 'Financial Accounting Fundamentals',
  shortTitle: 'Financial Accounting',
  provider: 'Core Curriculum',
  accent: '#7a5cc0',
  glyph: '📒',
  tagline:
    'The bedrock of finance — principles, the recording cycle, the financial statements, adjustments, ratios and standards.',
  overview: [
    'Financial accounting records, classifies, summarises and reports a business’s transactions to produce financial statements for external users.',
    'It rests on double-entry bookkeeping and the accounting equation, and follows standards such as GAAP, IFRS or Ind AS.',
    'This course breaks the subject into every topic, from the accounting equation and the recording cycle to final accounts, ratios, and standards, tax and controls.',
  ],
  examPattern: {
    format: 'Typically objective + numerical questions (varies by institution/exam)',
    duration: '1.5–3 hours depending on the exam',
    questions: 'Multiple-choice plus problem-solving on journals, statements and ratios',
    passing: 'Commonly 40–50% to pass; higher for professional papers',
    validity: 'Foundational knowledge — no expiry',
    fee: 'Varies by institution',
    negativeMarking: 'Depends on the specific exam',
  },
  sources: [
    { name: 'IFRS Foundation — Standards', url: 'https://www.ifrs.org/' },
    { name: 'FASB — US GAAP', url: 'https://www.fasb.org/' },
    { name: 'ICAI — Institute of Chartered Accountants of India', url: 'https://www.icai.org/' },
  ],
  modules: [
    {
      id: 'acc-basics',
      title: 'Foundations',
      summary:
        'The bedrock — what accounting is, principles, concepts & conventions, the accounting equation, capital vs revenue and accrual.',
      topics: foundations,
    },
    {
      id: 'acc-cycle',
      title: 'The Recording Process',
      summary:
        'From transaction to trial balance — journal, ledger, cash book, subsidiary books, BRS, error rectification and bills.',
      topics: recording,
    },
    {
      id: 'acc-statements',
      title: 'Financial Statements',
      summary:
        'Final accounts — trading account, profit & loss account, balance sheet and the cash-flow statement.',
      topics: statements,
    },
    {
      id: 'acc-analysis',
      title: 'Adjustments & Ratios',
      summary:
        'Year-end and interpretation — depreciation, inventory valuation, provisions & reserves, working capital and ratios.',
      topics: adjustmentsRatios,
    },
    {
      id: 'acc-standards',
      title: 'Standards, Tax & Controls',
      summary:
        'The rules and systems — GST, TDS, internal controls, accounting standards, IFRS, Ind AS, ethics and computerised accounting.',
      topics: standardsControls,
    },
  ],
};
