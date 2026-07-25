import type { Course } from '../types';

export const accounting: Course = {
  id: 'accounting',
  title: 'Financial Accounting Fundamentals',
  shortTitle: 'Financial Accounting',
  provider: 'Core Curriculum',
  accent: '#7a5cc0',
  glyph: '📒',
  tagline:
    'The bedrock of finance — the accounting equation, double-entry bookkeeping, the statements, and the ratios that read them.',
  overview: [
    'Financial accounting is the process of recording, classifying, summarising and reporting a business’s transactions to produce financial statements for external users.',
    'It rests on double-entry bookkeeping and the accounting equation, and follows recognised standards such as GAAP or IFRS so statements are consistent and comparable.',
    'This course builds from the accounting equation through the recording cycle to the three financial statements and the ratios used to interpret them — the foundation every other finance course assumes.',
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
      title: 'Accounting Basics & the Equation',
      summary:
        'What accounting is, who uses it, the core concepts and conventions, and the equation everything balances on.',
      topics: [
        {
          id: 'acc-basics-t',
          title: 'Accounting Basics & the Equation',
          reels: [
            {
              kind: 'concept',
              title: 'The accounting equation',
              body: [
                'Every business is funded by owners (equity) and outsiders (liabilities), and that money is invested in resources (assets).',
                'So at all times: Assets = Liabilities + Owner’s Equity. Every transaction keeps this equation in balance.',
                'This balance is enforced by double-entry bookkeeping: every transaction has equal and opposite debit and credit effects.',
              ],
              formula: 'Assets = Liabilities + Owner’s Equity',
              keyTerms: [
                { term: 'Asset', def: 'A resource owned by the business expected to provide future benefit.' },
                { term: 'Liability', def: 'An obligation the business owes to outsiders.' },
                { term: 'Equity', def: 'The owner’s residual claim: Assets − Liabilities.' },
              ],
            },
            {
              kind: 'list',
              title: 'Concepts and conventions',
              body: [
                'Business entity: the business is separate from its owner.',
                'Going concern: the business is assumed to continue operating.',
                'Accrual: record revenue when earned and expenses when incurred, not when cash moves.',
                'Money measurement, consistency, prudence (conservatism) and matching also govern how we record.',
              ],
              tip: 'The matching concept pairs expenses with the revenues they help generate in the same period.',
            },
            {
              kind: 'insight',
              title: 'Who uses financial accounting',
              body: [
                'Financial accounting serves external users: investors, lenders, suppliers, tax authorities and regulators.',
                'It differs from management accounting, which produces internal reports for managers’ decisions.',
                'Standards like GAAP and IFRS make statements comparable across companies and over time.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'The accounting equation is:',
              options: ['Assets = Liabilities − Equity', 'Assets = Liabilities + Owner’s Equity', 'Equity = Assets + Liabilities', 'Assets + Equity = Liabilities'],
              answer: 1,
              explanation: 'Assets are funded by liabilities plus owner’s equity, so Assets = Liabilities + Equity.',
            },
            {
              q: 'Owner’s equity equals:',
              options: ['Assets + Liabilities', 'Assets − Liabilities', 'Liabilities − Assets', 'Revenue − Expenses'],
              answer: 1,
              explanation: 'Equity is the residual claim: total assets minus total liabilities.',
            },
            {
              q: 'The business entity concept states that:',
              options: ['The business and owner are the same', 'The business is separate from its owner', 'Only cash matters', 'Assets never depreciate'],
              answer: 1,
              explanation: 'The entity concept treats the business as separate from its owners for accounting.',
            },
            {
              q: 'The going-concern assumption presumes the business will:',
              options: ['Close next year', 'Continue operating into the foreseeable future', 'Be sold immediately', 'Pay no tax'],
              answer: 1,
              explanation: 'Going concern assumes continued operation, justifying non-liquidation valuations.',
            },
            {
              q: 'Under accrual accounting, an expense is recorded when:',
              options: ['It is paid in cash', 'It is incurred', 'The year ends', 'The invoice is filed'],
              answer: 1,
              explanation: 'Accrual accounting records expenses when incurred, matching them to related revenue.',
            },
            {
              q: 'Financial accounting mainly serves:',
              options: ['Internal managers only', 'External users like investors and lenders', 'Only the tax office', 'Only auditors'],
              answer: 1,
              explanation: 'Financial accounting reports to external stakeholders; management accounting serves internal managers.',
            },
            {
              q: 'The matching concept requires expenses to be matched with:',
              options: ['The next year’s revenue', 'The revenues they help earn in the same period', 'Cash receipts', 'Dividends'],
              answer: 1,
              explanation: 'Matching pairs expenses with the revenues they generate in the same accounting period.',
            },
            {
              q: 'The convention of prudence (conservatism) means:',
              options: ['Overstate profits', 'Do not anticipate profits but provide for likely losses', 'Ignore losses', 'Record only cash'],
              answer: 1,
              explanation: 'Prudence avoids overstating income/assets and provides for foreseeable losses.',
            },
            {
              q: 'Double-entry bookkeeping means every transaction affects:',
              options: ['One account', 'At least two accounts with equal debits and credits', 'Only assets', 'Only the cash book'],
              answer: 1,
              explanation: 'Every transaction has equal and opposite debit and credit effects across at least two accounts.',
            },
            {
              q: 'IFRS and GAAP exist primarily to:',
              options: ['Increase taxes', 'Make financial statements consistent and comparable', 'Set share prices', 'Replace auditors'],
              answer: 1,
              explanation: 'Accounting standards promote consistency and comparability across entities and periods.',
            },
          ],
        },
      ],
    },
    {
      id: 'acc-cycle',
      title: 'The Recording Cycle',
      summary:
        'Debits and credits, the journal, the ledger, and the trial balance that proves the books.',
      topics: [
        {
          id: 'acc-cycle-t',
          title: 'The Recording Cycle',
          reels: [
            {
              kind: 'concept',
              title: 'Debits, credits and the golden rules',
              body: [
                'Every account is either debited or credited. Debit (Dr) is the left side; credit (Cr) is the right side.',
                'Rules by account type: Assets and Expenses increase with a debit; Liabilities, Equity and Income increase with a credit.',
                'The two sides of every entry must be equal, keeping the accounting equation in balance.',
              ],
              keyTerms: [
                { term: 'Debit', def: 'Left side of an account; increases assets and expenses.' },
                { term: 'Credit', def: 'Right side of an account; increases liabilities, equity and income.' },
              ],
              tip: 'Mnemonic “DEAD CLIC”: Debits = Expenses, Assets, Drawings; Credits = Liabilities, Income, Capital.',
            },
            {
              kind: 'list',
              title: 'From journal to trial balance',
              body: [
                'Journal: the book of original entry where transactions are first recorded chronologically as journal entries.',
                'Ledger: entries are posted to individual accounts (the “T-accounts”) to gather all activity per account.',
                'Trial balance: a list of all ledger balances; total debits must equal total credits.',
                'A balanced trial balance is a check on arithmetic — though it won’t catch every type of error.',
              ],
            },
            {
              kind: 'insight',
              title: 'Errors a trial balance won’t catch',
              body: [
                'Errors of omission: a transaction left out entirely — both sides missing, so it still balances.',
                'Errors of commission / principle: posted to the wrong account of the same nature.',
                'Compensating errors: two mistakes that cancel out.',
                'These slip through, which is why controls and reconciliations matter beyond the trial balance.',
              ],
            },
          ],
          mcqs: [
            {
              q: 'In accounting, a debit is recorded on the:',
              options: ['Right side of an account', 'Left side of an account', 'Bottom of the ledger', 'Trial balance only'],
              answer: 1,
              explanation: 'Debit (Dr) is the left side; credit (Cr) is the right side of an account.',
            },
            {
              q: 'An increase in an asset is recorded as a:',
              options: ['Credit', 'Debit', 'Neither', 'Both'],
              answer: 1,
              explanation: 'Assets increase with a debit and decrease with a credit.',
            },
            {
              q: 'An increase in a liability is recorded as a:',
              options: ['Debit', 'Credit', 'Contra entry', 'Drawing'],
              answer: 1,
              explanation: 'Liabilities, equity and income increase with a credit.',
            },
            {
              q: 'The book of original entry is the:',
              options: ['Ledger', 'Journal', 'Trial balance', 'Balance sheet'],
              answer: 1,
              explanation: 'Transactions are first recorded chronologically in the journal.',
            },
            {
              q: 'Posting refers to transferring entries from the journal to the:',
              options: ['Ledger', 'Bank', 'Cash box', 'Auditor'],
              answer: 0,
              explanation: 'Posting moves journal entries into individual ledger accounts.',
            },
            {
              q: 'In a trial balance, total debits should equal:',
              options: ['Total assets', 'Total credits', 'Net profit', 'Total revenue'],
              answer: 1,
              explanation: 'A trial balance lists ledger balances; total debits must equal total credits.',
            },
            {
              q: 'Which error will NOT be revealed by a trial balance?',
              options: ['A one-sided posting', 'An error of complete omission', 'A wrong total on one side', 'A missing credit'],
              answer: 1,
              explanation: 'If a transaction is omitted entirely, both sides are missing, so the trial balance still balances.',
            },
            {
              q: 'Expenses increase with a:',
              options: ['Credit', 'Debit', 'Contra entry', 'Reversal'],
              answer: 1,
              explanation: 'Expenses (like assets) increase with a debit.',
            },
            {
              q: 'The mnemonic “DEAD CLIC” groups debits as Expenses, Assets and:',
              options: ['Dividends only', 'Drawings', 'Deposits', 'Debentures'],
              answer: 1,
              explanation: 'Debits increase Expenses, Assets and Drawings; credits increase Liabilities, Income, Capital.',
            },
            {
              q: 'Two errors that cancel each other out are called:',
              options: ['Errors of principle', 'Compensating errors', 'Errors of omission', 'Casting errors'],
              answer: 1,
              explanation: 'Compensating errors offset one another, so the trial balance still agrees.',
            },
          ],
        },
      ],
    },
    {
      id: 'acc-statements',
      title: 'The Financial Statements',
      summary:
        'Preparing the income statement, balance sheet and cash-flow statement — and what each reveals.',
      topics: [
        {
          id: 'acc-statements-t',
          title: 'The Financial Statements',
          reels: [
            {
              kind: 'concept',
              title: 'Income statement (P&L)',
              body: [
                'The income statement measures performance over a period: Revenue − Expenses = Net Profit (or Loss).',
                'Gross profit = Revenue − Cost of Goods Sold; Operating profit deducts operating expenses; Net profit deducts interest and tax.',
                'It answers: did the business make money over the period?',
              ],
              formula: 'Net Profit = Revenue − Cost of Goods Sold − Operating Expenses − Interest − Tax',
            },
            {
              kind: 'concept',
              title: 'Balance sheet',
              body: [
                'The balance sheet is a snapshot of financial position at a point in time.',
                'Assets (current and non-current) on one side; liabilities and equity on the other — and they must equal.',
                'It answers: what does the business own and owe right now?',
              ],
              keyTerms: [
                { term: 'Current asset', def: 'Expected to convert to cash within a year (e.g. inventory, receivables).' },
                { term: 'Non-current asset', def: 'Long-term resources like property, plant and equipment.' },
              ],
            },
            {
              kind: 'list',
              title: 'Cash-flow statement',
              body: [
                'Reconciles profit to actual cash, in three sections: Operating, Investing and Financing.',
                'Operating: cash from core trading. Investing: buying/selling long-term assets. Financing: raising/repaying capital and dividends.',
                'A profitable business can still fail if it runs out of cash — hence the statement’s importance.',
              ],
              tip: 'Profit is an opinion (accruals, estimates); cash is a fact. Both statements matter.',
            },
          ],
          mcqs: [
            {
              q: 'The income statement reports:',
              options: ['Position at a point in time', 'Performance over a period', 'Only cash', 'Only assets'],
              answer: 1,
              explanation: 'The income statement (P&L) shows revenues and expenses over a period.',
            },
            {
              q: 'Gross profit equals:',
              options: ['Revenue − all expenses', 'Revenue − Cost of Goods Sold', 'Revenue − tax', 'Assets − liabilities'],
              answer: 1,
              explanation: 'Gross profit = Revenue − Cost of Goods Sold, before operating expenses.',
            },
            {
              q: 'The balance sheet shows the financial position:',
              options: ['Over a full year', 'At a specific point in time', 'Only in cash terms', 'Only for owners'],
              answer: 1,
              explanation: 'The balance sheet is a snapshot at a particular date.',
            },
            {
              q: 'Which is a current asset?',
              options: ['Machinery', 'Land', 'Accounts receivable', 'Goodwill'],
              answer: 2,
              explanation: 'Receivables are expected to convert to cash within a year — a current asset.',
            },
            {
              q: 'The cash-flow statement is divided into operating, investing and:',
              options: ['Trading activities', 'Financing activities', 'Tax activities', 'Audit activities'],
              answer: 1,
              explanation: 'Cash flows are classified as Operating, Investing and Financing.',
            },
            {
              q: 'Buying a new factory building appears under which cash-flow section?',
              options: ['Operating', 'Investing', 'Financing', 'Revenue'],
              answer: 1,
              explanation: 'Purchases of long-term assets are investing activities.',
            },
            {
              q: 'Raising a bank loan appears under which cash-flow section?',
              options: ['Operating', 'Investing', 'Financing', 'Gross profit'],
              answer: 2,
              explanation: 'Raising or repaying capital (loans, equity, dividends) is a financing activity.',
            },
            {
              q: 'Net profit is transferred to which part of the balance sheet?',
              options: ['Current liabilities', 'Owner’s equity (retained earnings)', 'Fixed assets', 'Inventory'],
              answer: 1,
              explanation: 'Retained profit increases owner’s equity on the balance sheet.',
            },
            {
              q: 'A business with strong profit but no cash may fail because:',
              options: ['Profit is irrelevant', 'It cannot meet obligations without cash (liquidity)', 'Balance sheets don’t matter', 'Tax is too low'],
              answer: 1,
              explanation: 'Liquidity matters: without cash to pay bills, even a profitable firm can collapse.',
            },
            {
              q: 'Net profit is calculated after deducting from revenue the cost of goods sold, operating expenses, interest and:',
              options: ['Dividends', 'Tax', 'Drawings', 'Depreciation add-backs'],
              answer: 1,
              explanation: 'Net profit is revenue less COGS, operating expenses, interest and tax.',
            },
          ],
        },
      ],
    },
    {
      id: 'acc-analysis',
      title: 'Adjustments, Depreciation & Ratios',
      summary:
        'Period-end adjustments, depreciation methods, and the ratios that turn statements into insight.',
      topics: [
        {
          id: 'acc-analysis-t',
          title: 'Adjustments, Depreciation & Ratios',
          reels: [
            {
              kind: 'concept',
              title: 'Adjusting entries',
              body: [
                'At period-end, adjustments align the books with the accrual concept before statements are drawn up.',
                'Types include accrued expenses (incurred, not yet paid), prepaid expenses (paid, not yet used), accrued income and unearned income.',
                'They ensure revenues and expenses land in the correct period.',
              ],
              keyTerms: [
                { term: 'Accrued expense', def: 'An expense incurred but not yet paid (a liability).' },
                { term: 'Prepaid expense', def: 'A payment made for a benefit not yet consumed (an asset).' },
              ],
            },
            {
              kind: 'formula',
              title: 'Depreciation',
              body: [
                'Depreciation spreads the cost of a fixed asset over its useful life, matching cost to the periods that benefit.',
                'Straight-line charges an equal amount each year; the reducing-balance (WDV) method charges a fixed % of the falling book value.',
                'Depreciation is a non-cash expense; it reduces profit and the asset’s carrying value but does not move cash.',
              ],
              formula: 'Straight-line = (Cost − Residual value) ÷ Useful life',
            },
            {
              kind: 'list',
              title: 'Ratio analysis',
              body: [
                'Liquidity: Current ratio = Current assets ÷ Current liabilities; Quick ratio excludes inventory.',
                'Profitability: Net margin = Net profit ÷ Revenue; ROE = Net profit ÷ Equity.',
                'Solvency: Debt-to-equity = Total debt ÷ Equity, gauging leverage.',
                'Efficiency: Inventory turnover and receivables days show how well assets are used.',
              ],
              tip: 'A current ratio around 2:1 is a common rule-of-thumb for healthy short-term liquidity.',
            },
          ],
          mcqs: [
            {
              q: 'Adjusting entries are made primarily to:',
              options: ['Increase cash', 'Apply the accrual concept and place items in the right period', 'Avoid tax', 'Balance the cash book'],
              answer: 1,
              explanation: 'Adjustments align revenues and expenses with the correct period under accrual accounting.',
            },
            {
              q: 'A prepaid expense is classified as a(n):',
              options: ['Liability', 'Asset', 'Income', 'Expense only'],
              answer: 1,
              explanation: 'A prepayment is an asset — a future benefit already paid for.',
            },
            {
              q: 'An accrued expense is a(n):',
              options: ['Asset', 'Liability', 'Equity', 'Revenue'],
              answer: 1,
              explanation: 'An expense incurred but unpaid is owed by the business — a liability.',
            },
            {
              q: 'Depreciation is best described as:',
              options: ['A cash payment', 'Allocating an asset’s cost over its useful life', 'An increase in asset value', 'A type of revenue'],
              answer: 1,
              explanation: 'Depreciation spreads a fixed asset’s cost across the periods that benefit from it.',
            },
            {
              q: 'The straight-line depreciation charge equals (Cost − Residual value) divided by:',
              options: ['Cost', 'Useful life', 'Residual value', 'The tax rate'],
              answer: 1,
              explanation: 'Straight-line = (cost − residual value) ÷ useful life, an equal charge each year.',
            },
            {
              q: 'Depreciation affects cash by:',
              options: ['Reducing cash directly', 'Not moving cash — it is a non-cash expense', 'Increasing cash', 'Paying dividends'],
              answer: 1,
              explanation: 'Depreciation is non-cash; it lowers profit and book value but does not move cash.',
            },
            {
              q: 'The current ratio equals:',
              options: ['Current assets ÷ Current liabilities', 'Net profit ÷ Revenue', 'Debt ÷ Equity', 'Assets ÷ Revenue'],
              answer: 0,
              explanation: 'Current ratio = current assets ÷ current liabilities, measuring short-term liquidity.',
            },
            {
              q: 'The quick ratio differs from the current ratio by excluding:',
              options: ['Cash', 'Inventory', 'Receivables', 'Payables'],
              answer: 1,
              explanation: 'The quick (acid-test) ratio excludes inventory, the least liquid current asset.',
            },
            {
              q: 'Return on Equity (ROE) is:',
              options: ['Net profit ÷ Equity', 'Revenue ÷ Assets', 'Debt ÷ Equity', 'Profit ÷ Revenue'],
              answer: 0,
              explanation: 'ROE = net profit ÷ shareholders’ equity, measuring return generated on owners’ funds.',
            },
            {
              q: 'The debt-to-equity ratio measures a firm’s:',
              options: ['Liquidity', 'Leverage / solvency', 'Profit margin', 'Inventory turnover'],
              answer: 1,
              explanation: 'Debt-to-equity gauges financial leverage — how much debt is used relative to equity.',
            },
          ],
        },
      ],
    },
  ],
};
