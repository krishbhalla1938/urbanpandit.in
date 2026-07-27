import type { Course, Topic } from '../types';

// Each listed sub-topic is its own reel + MCQ set. Module ids are kept stable
// (bmc-econ / bmc-fx / bmc-fi / bmc-eq) so the "Deep Dive & Exam Traps" tricky
// sets in extras.ts and the module tests continue to layer on top.

const economicIndicators: Topic[] = [
  {
    id: 'bmc-gdp',
    title: 'GDP',
    reels: [
      {
        kind: 'concept',
        title: 'Gross Domestic Product',
        subtitle: 'The broadest gauge of an economy',
        body: [
          'GDP is the total market value of all final goods and services produced within a country in a given period.',
          'It is measured three equivalent ways — output, expenditure and income — which should all sum to the same total.',
          'Nominal GDP uses current prices; real GDP strips out inflation so growth reflects real output.',
        ],
        formula: 'GDP = C + I + G + (X − M)',
        tip: 'Markets watch real GDP growth, released with a lag and revised — so timelier indicators forecast it.',
      },
    ],
    mcqs: [
      { q: 'GDP measures the value of production that is:', options: ['Owned by citizens anywhere', 'Produced within a country’s borders', 'Only exported', 'Only government output'], answer: 1, explanation: 'GDP counts output produced within a country’s geographic borders, regardless of ownership.' },
      { q: 'The expenditure formula for GDP is:', options: ['C + I + G + (X − M)', 'Wages + Profit', 'C − I − G', 'X + M'], answer: 0, explanation: 'GDP = Consumption + Investment + Government spending + Net exports (X − M).' },
      { q: 'Real GDP differs from nominal GDP because it is adjusted for:', options: ['Taxes', 'Inflation', 'Exports', 'Population'], answer: 1, explanation: 'Real GDP is measured in constant prices, removing inflation.' },
      { q: 'If nominal GDP rises 7% and inflation is 3%, real growth is about:', options: ['10%', '4%', '21%', '−4%'], answer: 1, explanation: 'Real ≈ nominal − inflation = 7% − 3% = 4%.', tricky: true },
    ],
  },
  {
    id: 'bmc-gnp',
    title: 'GNP',
    reels: [
      {
        kind: 'concept',
        title: 'Gross National Product',
        body: [
          'GNP measures output produced by a country’s residents and firms, wherever in the world that production occurs.',
          'It equals GDP plus net income earned abroad (income residents earn overseas minus income foreigners earn domestically).',
          'GDP is location-based; GNP (now often called GNI) is ownership-based.',
        ],
        formula: 'GNP = GDP + Net factor income from abroad',
      },
    ],
    mcqs: [
      { q: 'The key difference between GDP and GNP is that GNP is based on:', options: ['Location of production', 'Ownership/residency of producers', 'Only exports', 'Government output'], answer: 1, explanation: 'GNP counts output of a nation’s residents worldwide; GDP counts output within borders.' },
      { q: 'GNP equals GDP plus:', options: ['Net exports', 'Net factor income from abroad', 'Government spending', 'Depreciation'], answer: 1, explanation: 'GNP = GDP + net income residents earn abroad − income foreigners earn domestically.' },
      { q: 'A country with many citizens working abroad and sending income home will tend to have GNP:', options: ['Lower than GDP', 'Higher than GDP', 'Equal to GDP', 'Zero'], answer: 1, explanation: 'Net inflows of foreign income raise GNP above GDP.', tricky: true },
      { q: 'GNP is today often reported as:', options: ['GNI (Gross National Income)', 'CPI', 'PMI', 'M2'], answer: 0, explanation: 'Modern accounts usually call it Gross National Income (GNI).' },
    ],
  },
  {
    id: 'bmc-inflation',
    title: 'Inflation',
    reels: [
      {
        kind: 'concept',
        title: 'Inflation',
        body: [
          'Inflation is a sustained rise in the general price level, eroding the purchasing power of money.',
          'Demand-pull inflation comes from excess demand; cost-push inflation comes from rising input costs.',
          'Central banks typically target a low, stable rate (often around 2%).',
        ],
        tip: 'Core inflation excludes volatile food and energy to reveal the underlying trend.',
      },
    ],
    mcqs: [
      { q: 'Inflation is best defined as:', options: ['A one-off price rise', 'A sustained increase in the general price level', 'A fall in output', 'A rise in unemployment'], answer: 1, explanation: 'Inflation is a persistent, broad rise in prices that erodes purchasing power.' },
      { q: 'Inflation caused by excess aggregate demand is called:', options: ['Cost-push', 'Demand-pull', 'Deflation', 'Stagflation'], answer: 1, explanation: 'Demand-pull inflation arises when demand outstrips supply.' },
      { q: 'Most central banks target inflation of roughly:', options: ['0%', '2%', '10%', '20%'], answer: 1, explanation: 'A ~2% target is common for price stability.' },
      { q: 'High inflation combined with stagnant growth is known as:', options: ['Deflation', 'Stagflation', 'Disinflation', 'Reflation'], answer: 1, explanation: 'Stagflation pairs high inflation with weak growth — a policy dilemma.', tricky: true },
    ],
  },
  {
    id: 'bmc-cpi',
    title: 'CPI',
    reels: [
      {
        kind: 'concept',
        title: 'Consumer Price Index',
        body: [
          'CPI tracks the average change in prices paid by consumers for a fixed basket of goods and services.',
          'It is the most widely watched inflation gauge and often underpins wage and pension indexation.',
          'Headline CPI includes everything; core CPI excludes food and energy.',
        ],
        formula: 'Inflation rate = (CPIₙ − CPIₙ₋₁) ÷ CPIₙ₋₁ × 100',
      },
    ],
    mcqs: [
      { q: 'CPI measures price changes faced by:', options: ['Producers', 'Consumers', 'Exporters', 'Governments'], answer: 1, explanation: 'CPI tracks the prices consumers pay for a representative basket.' },
      { q: 'Core CPI excludes:', options: ['Rent and services', 'Food and energy', 'All imports', 'Housing'], answer: 1, explanation: 'Core CPI strips out volatile food and energy prices.' },
      { q: 'If CPI rises from 200 to 210, inflation is:', options: ['10%', '5%', '2%', '21%'], answer: 1, explanation: '(210 − 200) ÷ 200 = 5%.', tricky: true },
      { q: 'CPI is commonly used to:', options: ['Set share prices', 'Index wages, pensions and benefits', 'Value bonds directly', 'Measure GDP'], answer: 1, explanation: 'CPI often drives cost-of-living adjustments.' },
    ],
  },
  {
    id: 'bmc-ppi',
    title: 'PPI',
    reels: [
      {
        kind: 'concept',
        title: 'Producer Price Index',
        body: [
          'PPI measures the average change in selling prices received by domestic producers for their output.',
          'Because it captures costs earlier in the supply chain, PPI can be a leading indicator of consumer (CPI) inflation.',
          'It is measured from the seller’s perspective, unlike CPI’s buyer perspective.',
        ],
      },
    ],
    mcqs: [
      { q: 'PPI measures prices from the perspective of:', options: ['Consumers', 'Producers/sellers', 'Importers', 'Governments'], answer: 1, explanation: 'PPI captures prices received by producers, earlier in the chain.' },
      { q: 'PPI is often watched as a ______ indicator of CPI.', options: ['Lagging', 'Leading', 'Coincident', 'Unrelated'], answer: 1, explanation: 'Producer price rises can feed through to consumer prices later.', tricky: true },
      { q: 'Unlike CPI, PPI reflects:', options: ['Retail prices', 'Wholesale/producer selling prices', 'Import tariffs only', 'Wages'], answer: 1, explanation: 'PPI is based on producers’ selling prices, not retail prices.' },
      { q: 'A sharp rise in PPI may signal future:', options: ['Falling CPI', 'Rising CPI', 'Lower GDP only', 'Currency peg'], answer: 1, explanation: 'Higher input/producer prices often precede higher consumer inflation.' },
    ],
  },
  {
    id: 'bmc-deflation',
    title: 'Deflation',
    reels: [
      {
        kind: 'concept',
        title: 'Deflation',
        body: [
          'Deflation is a sustained fall in the general price level — negative inflation.',
          'It raises the real value of debt and can cause consumers to delay purchases, deepening downturns.',
          'Disinflation (slowing inflation that is still positive) is different from deflation.',
        ],
        tip: 'Deflation can be more dangerous than mild inflation because of the debt–spending spiral.',
      },
    ],
    mcqs: [
      { q: 'Deflation is:', options: ['Rising prices', 'A sustained fall in the general price level', 'Slowing but positive inflation', 'A currency devaluation'], answer: 1, explanation: 'Deflation is a persistent decline in prices (negative inflation).' },
      { q: 'Deflation affects debt by:', options: ['Lowering its real value', 'Raising its real value', 'Cancelling it', 'No effect'], answer: 1, explanation: 'Falling prices increase the real burden of fixed nominal debt.', tricky: true },
      { q: 'A slowdown in inflation that remains positive is called:', options: ['Deflation', 'Disinflation', 'Stagflation', 'Reflation'], answer: 1, explanation: 'Disinflation is falling inflation that is still above zero.', tricky: true },
      { q: 'A common consumer response to expected deflation is to:', options: ['Buy immediately', 'Delay purchases', 'Borrow heavily', 'Ignore prices'], answer: 1, explanation: 'Expecting lower future prices, buyers postpone spending, worsening slumps.' },
    ],
  },
  {
    id: 'bmc-interest-rates',
    title: 'Interest Rates',
    reels: [
      {
        kind: 'concept',
        title: 'Interest Rates',
        body: [
          'An interest rate is the cost of borrowing money, or the reward for saving, expressed as a percentage.',
          'The nominal rate is the stated rate; the real rate is nominal minus inflation.',
          'Central banks set a benchmark policy rate that ripples through the whole economy.',
        ],
        formula: 'Real rate ≈ Nominal rate − Inflation',
      },
    ],
    mcqs: [
      { q: 'The real interest rate equals the nominal rate minus:', options: ['Taxes', 'Inflation', 'Growth', 'The exchange rate'], answer: 1, explanation: 'Real rate ≈ nominal rate − inflation.' },
      { q: 'Higher interest rates generally:', options: ['Encourage borrowing and spending', 'Discourage borrowing and cool demand', 'Have no effect', 'Always raise inflation'], answer: 1, explanation: 'Higher rates raise borrowing costs, cooling demand and inflation.' },
      { q: 'The benchmark rate that anchors an economy’s rates is set by the:', options: ['Government treasury', 'Central bank', 'Stock exchange', 'Commercial banks alone'], answer: 1, explanation: 'Central banks set the policy rate that guides other rates.' },
      { q: 'If the nominal rate is 6% and inflation is 8%, the real rate is:', options: ['+14%', '−2%', '+2%', '0%'], answer: 1, explanation: '6% − 8% = −2%, a negative real rate.', tricky: true },
    ],
  },
  {
    id: 'bmc-central-banks',
    title: 'Central Banks',
    reels: [
      {
        kind: 'concept',
        title: 'Central Banks',
        body: [
          'A central bank manages a nation’s currency, money supply and interest rates, aiming for price stability and (often) full employment.',
          'Examples: the Federal Reserve (US), ECB (Eurozone), RBI (India), Bank of England.',
          'It also acts as lender of last resort and regulates parts of the banking system.',
        ],
      },
    ],
    mcqs: [
      { q: 'A central bank’s primary goal is usually:', options: ['Maximising tax revenue', 'Price stability (and often employment)', 'Running companies', 'Setting share prices'], answer: 1, explanation: 'Central banks target price stability, frequently alongside employment.' },
      { q: 'The US central bank is the:', options: ['ECB', 'Federal Reserve', 'RBI', 'IMF'], answer: 1, explanation: 'The Federal Reserve is the US central bank.' },
      { q: '“Lender of last resort” describes a central bank:', options: ['Lending to failing firms', 'Providing emergency liquidity to the banking system', 'Issuing shares', 'Paying dividends'], answer: 1, explanation: 'It supplies liquidity to banks in crises to prevent collapse.', tricky: true },
      { q: 'Which is India’s central bank?', options: ['SEBI', 'RBI', 'NSE', 'AMFI'], answer: 1, explanation: 'The Reserve Bank of India (RBI) is India’s central bank.' },
    ],
  },
  {
    id: 'bmc-monetary-policy',
    title: 'Monetary Policy',
    reels: [
      {
        kind: 'concept',
        title: 'Monetary Policy',
        body: [
          'Monetary policy is the central bank’s use of interest rates and the money supply to manage the economy.',
          'Expansionary policy cuts rates / adds money to boost growth; contractionary policy raises rates to fight inflation.',
          'Tools include the policy rate, open-market operations, reserve requirements and quantitative easing.',
        ],
        tip: 'Quantitative easing (QE) buys assets to inject money when rates are already near zero.',
      },
    ],
    mcqs: [
      { q: 'Monetary policy is conducted by the:', options: ['Government', 'Central bank', 'Stock exchange', 'Companies'], answer: 1, explanation: 'The central bank sets rates and manages the money supply.' },
      { q: 'To fight high inflation, a central bank would:', options: ['Cut rates', 'Raise rates', 'Launch QE', 'Lower reserve requirements'], answer: 1, explanation: 'Raising rates is contractionary, cooling inflation.' },
      { q: 'Which is a monetary-policy tool?', options: ['Income tax', 'Open-market operations', 'Government spending', 'Tariffs'], answer: 1, explanation: 'Open-market operations (buying/selling securities) are monetary tools.' },
      { q: 'Quantitative easing involves the central bank:', options: ['Selling assets', 'Buying assets to inject money', 'Raising taxes', 'Cutting spending'], answer: 1, explanation: 'QE purchases assets to expand the money supply and lower long-term yields.', tricky: true },
    ],
  },
  {
    id: 'bmc-fiscal-policy',
    title: 'Fiscal Policy',
    reels: [
      {
        kind: 'concept',
        title: 'Fiscal Policy',
        body: [
          'Fiscal policy is the government’s use of taxation and public spending to influence the economy.',
          'Expansionary fiscal policy cuts taxes or raises spending to stimulate demand; contractionary does the reverse.',
          'A budget deficit means spending exceeds revenue; a surplus is the opposite.',
        ],
      },
    ],
    mcqs: [
      { q: 'Fiscal policy is controlled by the:', options: ['Central bank', 'Government', 'Stock exchange', 'IMF'], answer: 1, explanation: 'Governments set taxation and spending — that is fiscal policy.' },
      { q: 'Expansionary fiscal policy involves:', options: ['Higher taxes, lower spending', 'Lower taxes and/or higher spending', 'Raising interest rates', 'Selling bonds to shrink money'], answer: 1, explanation: 'Cutting taxes or raising spending stimulates demand.' },
      { q: 'A budget deficit occurs when:', options: ['Revenue exceeds spending', 'Spending exceeds revenue', 'The budget balances', 'Taxes are zero'], answer: 1, explanation: 'A deficit means the government spends more than it collects.' },
      { q: 'Which is a fiscal — not monetary — tool?', options: ['Policy interest rate', 'Government infrastructure spending', 'Quantitative easing', 'Reserve requirements'], answer: 1, explanation: 'Spending and taxation are fiscal; rates and QE are monetary.', tricky: true },
    ],
  },
  {
    id: 'bmc-employment-data',
    title: 'Employment Data',
    reels: [
      {
        kind: 'concept',
        title: 'Employment Data',
        body: [
          'Employment reports (e.g. US non-farm payrolls) show how many jobs an economy is adding or losing.',
          'Strong job growth signals a healthy economy but can stoke inflation and rate hikes.',
          'Key releases move currencies, bonds and equities sharply.',
        ],
        tip: 'US Non-Farm Payrolls (NFP), released monthly, is one of the most market-moving data points.',
      },
    ],
    mcqs: [
      { q: 'Non-farm payrolls measure:', options: ['Farm output', 'Jobs added/lost excluding farming', 'Inflation', 'Exports'], answer: 1, explanation: 'NFP counts jobs added or lost outside the farm sector.' },
      { q: 'Stronger-than-expected job growth may lead central banks to:', options: ['Cut rates', 'Consider raising rates', 'Ignore it', 'Devalue the currency'], answer: 1, explanation: 'A hot labour market can raise inflation risk, prompting tighter policy.', tricky: true },
      { q: 'Employment data is watched because jobs drive:', options: ['Only government revenue', 'Consumer income and spending', 'Only exports', 'Share buybacks'], answer: 1, explanation: 'Employment underpins household income and consumption.' },
      { q: 'Which release is especially market-moving?', options: ['Annual census', 'Monthly non-farm payrolls', 'Decadal survey', 'Company AGMs'], answer: 1, explanation: 'Monthly NFP is a headline, high-impact indicator.' },
    ],
  },
  {
    id: 'bmc-unemployment',
    title: 'Unemployment Rate',
    reels: [
      {
        kind: 'concept',
        title: 'Unemployment Rate',
        body: [
          'The unemployment rate is the share of the labour force that is jobless but actively seeking work.',
          'Types: frictional (between jobs), structural (skills mismatch) and cyclical (downturn-driven).',
          'It is a lagging indicator — it tends to turn after the economy does.',
        ],
        formula: 'Unemployment rate = Unemployed ÷ Labour force × 100',
      },
    ],
    mcqs: [
      { q: 'The unemployment rate is the unemployed divided by the:', options: ['Total population', 'Labour force', 'Number of firms', 'GDP'], answer: 1, explanation: 'It is unemployed persons as a share of the labour force.' },
      { q: 'Which unemployment type rises most in a recession?', options: ['Frictional', 'Structural', 'Cyclical', 'Seasonal'], answer: 2, explanation: 'Cyclical unemployment moves with the business cycle.', tricky: true },
      { q: 'The unemployment rate is generally a ______ indicator.', options: ['Leading', 'Lagging', 'Coincident-only', 'Random'], answer: 1, explanation: 'It tends to turn after the broader economy.' },
      { q: 'Someone not actively seeking work is:', options: ['Counted as unemployed', 'Not counted in the labour force', 'Always employed', 'A frictional case'], answer: 1, explanation: 'Only those actively seeking work count as unemployed/in the labour force.' },
    ],
  },
  {
    id: 'bmc-pmi',
    title: 'PMI',
    reels: [
      {
        kind: 'concept',
        title: 'Purchasing Managers’ Index',
        body: [
          'PMI is a survey of purchasing managers gauging activity in manufacturing or services.',
          'A reading above 50 signals expansion; below 50 signals contraction.',
          'Because it is timely and forward-looking, PMI is a leading indicator.',
        ],
        tip: 'The 50 level is the key threshold — memorise “above 50 = growth”.',
      },
    ],
    mcqs: [
      { q: 'A PMI of 53 indicates the sector is:', options: ['Contracting', 'Expanding', 'In recession', 'Deflating'], answer: 1, explanation: 'Above 50 signals expansion.' },
      { q: 'PMI is best classified as a ______ indicator.', options: ['Lagging', 'Leading', 'Coincident-only', 'Unrelated'], answer: 1, explanation: 'Survey-based PMI tends to move ahead of the economy.' },
      { q: 'A PMI reading of 48 means activity is:', options: ['Expanding', 'Contracting', 'At full employment', 'Flat by definition'], answer: 1, explanation: 'Below 50 signals contraction.', tricky: true },
      { q: 'PMI surveys ask about metrics like:', options: ['Tax rates', 'New orders, output and employment', 'Share prices', 'Dividend policy'], answer: 1, explanation: 'PMI components include new orders, output, employment, deliveries and inventories.' },
    ],
  },
  {
    id: 'bmc-consumer-confidence',
    title: 'Consumer Confidence',
    reels: [
      {
        kind: 'concept',
        title: 'Consumer Confidence',
        body: [
          'Consumer confidence surveys measure how optimistic households feel about the economy and their finances.',
          'Higher confidence tends to precede more spending; falling confidence can foreshadow a slowdown.',
          'It is a sentiment-based leading indicator of consumption.',
        ],
      },
    ],
    mcqs: [
      { q: 'Consumer confidence primarily gauges:', options: ['Producer costs', 'Household optimism about the economy', 'Bond yields', 'Trade balances'], answer: 1, explanation: 'It captures how positive consumers feel, influencing spending.' },
      { q: 'Rising consumer confidence tends to precede:', options: ['Lower spending', 'Higher spending', 'Deflation', 'Currency pegs'], answer: 1, explanation: 'Confident consumers usually spend more.' },
      { q: 'Consumer confidence is best described as a:', options: ['Lagging hard-data series', 'Leading sentiment indicator', 'Coincident tax measure', 'Random number'], answer: 1, explanation: 'It is a forward-looking sentiment indicator.', tricky: true },
      { q: 'A sharp drop in confidence may warn of:', options: ['A spending slowdown', 'A guaranteed boom', 'Higher exports', 'A stock split'], answer: 0, explanation: 'Falling confidence can foreshadow weaker consumption.' },
    ],
  },
  {
    id: 'bmc-retail-sales',
    title: 'Retail Sales',
    reels: [
      {
        kind: 'concept',
        title: 'Retail Sales',
        body: [
          'Retail sales measure total receipts at stores that sell goods to consumers.',
          'As consumption is the largest slice of GDP, retail sales are a timely read on the economy’s core engine.',
          'Strong sales suggest healthy demand; weak sales hint at a slowdown.',
        ],
      },
    ],
    mcqs: [
      { q: 'Retail sales are important because consumption is:', options: ['A tiny part of GDP', 'The largest component of GDP', 'Only exports', 'Government spending'], answer: 1, explanation: 'Consumer spending is the biggest driver of GDP in most economies.' },
      { q: 'Retail sales data is valued for being:', options: ['Very delayed', 'Timely and monthly', 'Released once a decade', 'Unrelated to demand'], answer: 1, explanation: 'It is a frequent, timely gauge of consumer demand.' },
      { q: 'Falling retail sales typically signal:', options: ['Strengthening demand', 'Weakening consumer demand', 'Higher exports', 'A currency peg'], answer: 1, explanation: 'Declining sales point to softer consumption.', tricky: true },
      { q: 'Retail sales are usually reported:', options: ['Annually', 'Monthly', 'Every decade', 'Never'], answer: 1, explanation: 'Retail sales are a monthly release.' },
    ],
  },
  {
    id: 'bmc-housing-data',
    title: 'Housing Data',
    reels: [
      {
        kind: 'concept',
        title: 'Housing Data',
        body: [
          'Housing indicators include building permits, housing starts, new/existing home sales and house prices.',
          'Permits and starts are leading indicators — they signal future construction activity and confidence.',
          'Housing is rate-sensitive, so it reacts quickly to changes in interest rates.',
        ],
        tip: 'Building permits lead housing starts, which lead construction activity.',
      },
    ],
    mcqs: [
      { q: 'Which housing metric is a leading indicator?', options: ['Building permits', 'Last year’s completed homes', 'Historic prices only', 'Property taxes'], answer: 0, explanation: 'Permits precede starts and construction, making them leading.', tricky: true },
      { q: 'Housing activity is especially sensitive to:', options: ['Interest rates', 'Exchange-rate pegs', 'Dividend policy', 'Corporate tax only'], answer: 0, explanation: 'Mortgage-driven housing reacts strongly to interest rates.' },
      { q: '“Housing starts” measures:', options: ['Homes demolished', 'New residential construction begun', 'Home prices', 'Mortgages repaid'], answer: 1, explanation: 'Housing starts count newly begun residential construction.' },
      { q: 'Rising interest rates tend to make housing activity:', options: ['Increase', 'Slow down', 'Unchanged', 'Tax-free'], answer: 1, explanation: 'Higher mortgage costs typically cool housing demand.' },
    ],
  },
  {
    id: 'bmc-trade-balance',
    title: 'Trade Balance',
    reels: [
      {
        kind: 'concept',
        title: 'Trade Balance',
        body: [
          'The trade balance is the difference between a country’s exports and imports of goods and services.',
          'A surplus means exports exceed imports; a deficit means imports exceed exports.',
          'Persistent trade imbalances influence currency values and the current account.',
        ],
        formula: 'Trade balance = Exports − Imports',
      },
    ],
    mcqs: [
      { q: 'A trade surplus means:', options: ['Imports exceed exports', 'Exports exceed imports', 'Trade is balanced', 'No trade'], answer: 1, explanation: 'A surplus arises when exports are greater than imports.' },
      { q: 'The trade balance is calculated as:', options: ['Imports − Exports', 'Exports − Imports', 'Exports + Imports', 'GDP − Imports'], answer: 1, explanation: 'Trade balance = exports minus imports.' },
      { q: 'A large, persistent trade deficit tends to put a currency under:', options: ['Upward pressure', 'Downward pressure', 'A peg', 'No pressure'], answer: 1, explanation: 'A deficit supplies more of the currency abroad, pressuring it down.', tricky: true },
      { q: 'The trade balance is a component of the:', options: ['Capital account only', 'Current account', 'Money supply', 'CPI'], answer: 1, explanation: 'Goods and services trade sits within the current account.' },
    ],
  },
  {
    id: 'bmc-current-account',
    title: 'Current Account',
    reels: [
      {
        kind: 'concept',
        title: 'Current Account',
        body: [
          'The current account records a country’s trade in goods and services, plus net income and net transfers with the world.',
          'A deficit means the country is a net borrower from abroad; a surplus means a net lender.',
          'It is broader than the trade balance, adding income (dividends, interest) and transfers (remittances, aid).',
        ],
      },
    ],
    mcqs: [
      { q: 'The current account is broader than the trade balance because it adds:', options: ['Only exports', 'Net income and net transfers', 'Government spending', 'The money supply'], answer: 1, explanation: 'It adds primary income and transfers to goods and services trade.' },
      { q: 'A current-account deficit means a country is a net:', options: ['Lender to the world', 'Borrower from the world', 'Exporter only', 'Saver'], answer: 1, explanation: 'A deficit is financed by borrowing/capital inflows from abroad.', tricky: true },
      { q: 'Remittances sent home by workers abroad appear in the current account as:', options: ['Exports', 'Transfers', 'Capital', 'Reserves'], answer: 1, explanation: 'Remittances are current transfers.' },
      { q: 'The current account and capital/financial account should broadly:', options: ['Both be positive always', 'Offset each other in the balance of payments', 'Be unrelated', 'Equal GDP'], answer: 1, explanation: 'In the balance of payments, the accounts offset (a deficit is financed by inflows).', tricky: true },
    ],
  },
  {
    id: 'bmc-yield-curve-econ',
    title: 'Yield Curve',
    reels: [
      {
        kind: 'concept',
        title: 'The Yield Curve',
        body: [
          'The yield curve plots government bond yields across maturities, from short to long.',
          'Normal (upward-sloping) reflects expected growth; flat signals uncertainty; inverted (short > long) warns of recession.',
          'It is one of the market’s most closely watched leading signals.',
        ],
        tip: 'An inverted yield curve has preceded most modern US recessions.',
      },
    ],
    mcqs: [
      { q: 'A normal yield curve slopes:', options: ['Downward', 'Upward', 'Flat', 'Vertical'], answer: 1, explanation: 'Longer maturities usually yield more — an upward slope.' },
      { q: 'An inverted yield curve occurs when:', options: ['Long yields exceed short yields', 'Short yields exceed long yields', 'All yields are equal', 'Yields are zero'], answer: 1, explanation: 'Inversion means short-term yields are above long-term yields.' },
      { q: 'An inverted curve is watched as a signal of:', options: ['A boom', 'A possible recession', 'Higher dividends', 'A currency peg'], answer: 1, explanation: 'Inversion has historically preceded recessions.', tricky: true },
      { q: 'The yield curve plots yields against:', options: ['Credit rating', 'Maturity', 'Currency', 'Coupon frequency'], answer: 1, explanation: 'It maps yield across different maturities for one issuer.' },
    ],
  },
  {
    id: 'bmc-business-cycle',
    title: 'Business Cycle',
    reels: [
      {
        kind: 'concept',
        title: 'The Business Cycle',
        body: [
          'Economies move through phases: expansion → peak → contraction (recession) → trough → recovery.',
          'Different sectors lead or lag the cycle; cyclicals swing with it, defensives are steadier.',
          'Policymakers use monetary and fiscal tools to smooth the cycle.',
        ],
      },
    ],
    mcqs: [
      { q: 'The correct order of the business cycle is:', options: ['Peak → trough → expansion', 'Expansion → peak → contraction → trough', 'Trough → peak → recovery → expansion', 'Contraction → expansion → peak'], answer: 1, explanation: 'Expansion → peak → contraction → trough, then recovery.' },
      { q: 'A recession is the ______ phase.', options: ['Expansion', 'Contraction', 'Peak', 'Recovery'], answer: 1, explanation: 'Recession is the contraction phase of falling activity.' },
      { q: 'Cyclical sectors (e.g. autos) tend to:', options: ['Be steady through the cycle', 'Swing sharply with the cycle', 'Ignore the economy', 'Only fall'], answer: 1, explanation: 'Cyclicals amplify the economy’s ups and downs.', tricky: true },
      { q: 'Policymakers try to ______ the business cycle.', options: ['Amplify', 'Smooth', 'Ignore', 'Reverse permanently'], answer: 1, explanation: 'Monetary and fiscal policy aim to moderate cyclical swings.' },
    ],
  },
  {
    id: 'bmc-economic-calendar',
    title: 'Economic Calendar',
    reels: [
      {
        kind: 'concept',
        title: 'The Economic Calendar',
        body: [
          'An economic calendar lists scheduled data releases (GDP, CPI, payrolls, central-bank meetings) with dates and consensus forecasts.',
          'Markets move on the surprise — the gap between the actual figure and the consensus forecast.',
          'High-impact events can cause sharp volatility across asset classes.',
        ],
        tip: 'It’s the “surprise” versus consensus that moves markets, not the raw number.',
      },
    ],
    mcqs: [
      { q: 'An economic calendar shows:', options: ['Company AGMs only', 'Scheduled data releases and forecasts', 'Share prices', 'Tax returns'], answer: 1, explanation: 'It lists upcoming macro releases with consensus estimates.' },
      { q: 'Markets typically move most on:', options: ['The raw number alone', 'The surprise vs consensus forecast', 'The colour of the report', 'The release time only'], answer: 1, explanation: 'The deviation from expectations drives the reaction.', tricky: true },
      { q: 'A “high-impact” calendar event is likely to cause:', options: ['No movement', 'Sharp volatility', 'A guaranteed rally', 'A stock split'], answer: 1, explanation: 'Major releases can trigger large moves across markets.' },
      { q: 'Central-bank rate decisions appear on the calendar because they:', options: ['Are irrelevant', 'Strongly move markets', 'Only affect farmers', 'Are secret'], answer: 1, explanation: 'Policy decisions are among the most market-moving scheduled events.' },
    ],
  },
];

const currencies: Topic[] = [
  {
    id: 'bmc-fx-market',
    title: 'Foreign Exchange Market',
    reels: [
      {
        kind: 'concept',
        title: 'The FX Market',
        body: [
          'The foreign-exchange market is where currencies are traded — the largest, most liquid market in the world, trading trillions of dollars a day.',
          'It runs 24 hours across global sessions (Sydney → Tokyo → London → New York).',
          'Most trading is over-the-counter between banks, not on a central exchange.',
        ],
      },
    ],
    mcqs: [
      { q: 'The FX market is:', options: ['A small centralised exchange', 'The largest, most liquid market, mostly OTC', 'Open only in London', 'Smaller than equities'], answer: 1, explanation: 'FX is the world’s largest, most liquid market, trading around the clock OTC.' },
      { q: 'FX trading takes place:', options: ['Once a day', '24 hours across global sessions', 'Only weekends', 'Only at expiry'], answer: 1, explanation: 'Currency trading follows the sun through global financial centres.' },
      { q: 'Most FX trading is:', options: ['On a central exchange', 'Over-the-counter between banks', 'Government-run', 'In physical cash'], answer: 1, explanation: 'The interbank FX market is predominantly OTC.', tricky: true },
      { q: 'The main participants in FX include:', options: ['Only tourists', 'Banks, corporations, funds and central banks', 'Only governments', 'Only retail apps'], answer: 1, explanation: 'Banks, corporates, institutional investors and central banks dominate FX.' },
    ],
  },
  {
    id: 'bmc-currency-pairs',
    title: 'Currency Pairs',
    reels: [
      {
        kind: 'concept',
        title: 'Currency Pairs',
        body: [
          'Currencies are always quoted in pairs, e.g. EUR/USD, because trading one currency means buying it with another.',
          'Majors involve the USD (EUR/USD, USD/JPY); crosses exclude the USD (EUR/GBP).',
          'The quote shows how much of the second currency one unit of the first is worth.',
        ],
      },
    ],
    mcqs: [
      { q: 'Currencies are quoted in pairs because:', options: ['It is tradition only', 'Buying one currency means selling another', 'Regulators require three', 'Prices are random'], answer: 1, explanation: 'A currency’s value is always relative to another.' },
      { q: 'A “major” pair always includes the:', options: ['Euro', 'US dollar', 'Yen', 'Pound'], answer: 1, explanation: 'Majors involve the USD against other large currencies.' },
      { q: 'EUR/GBP is an example of a:', options: ['Major', 'Cross (no USD)', 'Peg', 'Commodity'], answer: 1, explanation: 'Pairs without the USD are called crosses.', tricky: true },
      { q: 'In EUR/USD = 1.10, 1.10 is:', options: ['Euros per dollar', 'Dollars per euro', 'A percentage', 'A coupon'], answer: 1, explanation: 'It shows how many dollars one euro buys.' },
    ],
  },
  {
    id: 'bmc-base-quote',
    title: 'Base & Quote Currency',
    reels: [
      {
        kind: 'concept',
        title: 'Base & Quote Currency',
        body: [
          'In a pair, the first currency is the base and the second is the quote (or counter) currency.',
          'The price is how many units of the quote currency equal one unit of the base.',
          'Buying the pair means buying the base and selling the quote.',
        ],
      },
    ],
    mcqs: [
      { q: 'In GBP/USD, the base currency is:', options: ['USD', 'GBP', 'EUR', 'JPY'], answer: 1, explanation: 'The first currency (GBP) is the base.' },
      { q: 'The quote currency is the:', options: ['First currency', 'Second currency, the price of one base unit', 'Cross rate', 'Reserve'], answer: 1, explanation: 'The second currency prices one unit of the base.' },
      { q: 'Buying EUR/USD means:', options: ['Selling euros, buying dollars', 'Buying euros, selling dollars', 'Buying both', 'Selling both'], answer: 1, explanation: 'Going long the pair buys the base (EUR) and sells the quote (USD).', tricky: true },
      { q: 'If USD/JPY = 150, one dollar equals:', options: ['150 yen', '1/150 yen', '150 dollars', '15 yen'], answer: 0, explanation: 'USD is the base, so one dollar buys 150 yen.' },
    ],
  },
  {
    id: 'bmc-spot-market',
    title: 'Spot Market',
    reels: [
      {
        kind: 'concept',
        title: 'The Spot Market',
        body: [
          'The spot market trades currencies for immediate delivery at the current market rate (the spot rate).',
          'Settlement is typically two business days (T+2) for most pairs.',
          'It is the reference point from which forwards and other FX derivatives are priced.',
        ],
      },
    ],
    mcqs: [
      { q: 'The spot rate is for:', options: ['Delivery in one year', 'Immediate (near-term) delivery', 'No delivery', 'Delivery in 5 years'], answer: 1, explanation: 'Spot is for immediate exchange at today’s rate.' },
      { q: 'Standard spot FX settlement is usually:', options: ['Same day', 'T+2 business days', 'T+30', 'Never'], answer: 1, explanation: 'Most spot FX settles two business days after the trade.', tricky: true },
      { q: 'The spot rate serves as the basis for pricing:', options: ['Only equities', 'Forwards and FX derivatives', 'Corporate tax', 'Dividends'], answer: 1, explanation: 'Forwards are derived from spot plus the interest-rate differential.' },
      { q: 'A spot transaction locks in:', options: ['A future rate', 'Today’s exchange rate', 'A coupon', 'A dividend'], answer: 1, explanation: 'Spot trades exchange at the current market rate.' },
    ],
  },
  {
    id: 'bmc-forward-market',
    title: 'Forward Market',
    reels: [
      {
        kind: 'concept',
        title: 'The Forward Market',
        body: [
          'A forward contract locks in an exchange rate today for delivery on a future date.',
          'The forward rate reflects the spot rate adjusted for the interest-rate differential between the two currencies.',
          'Forwards are used to hedge future currency exposure.',
        ],
        formula: 'Forward ≈ Spot × (1 + r_quote) ÷ (1 + r_base)',
      },
    ],
    mcqs: [
      { q: 'A currency forward locks in a rate for:', options: ['Immediate delivery', 'A future date', 'No delivery', 'The past'], answer: 1, explanation: 'Forwards fix today a rate for future exchange.' },
      { q: 'The forward rate is driven by the spot rate and the:', options: ['Dividend yield', 'Interest-rate differential', 'Stock index', 'Tax rate'], answer: 1, explanation: 'Covered interest parity links forwards to the rate differential.' },
      { q: 'The higher-interest-rate currency typically trades at a forward:', options: ['Premium', 'Discount', 'Par', 'Peg'], answer: 1, explanation: 'It trades at a forward discount, offsetting its rate advantage.', tricky: true },
      { q: 'Forwards are mainly used to:', options: ['Speculate only', 'Hedge future FX exposure', 'Pay dividends', 'Issue shares'], answer: 1, explanation: 'Companies hedge known future currency needs with forwards.' },
    ],
  },
  {
    id: 'bmc-fx-swaps',
    title: 'FX Swaps',
    reels: [
      {
        kind: 'concept',
        title: 'FX Swaps',
        body: [
          'An FX swap combines a spot transaction with a simultaneous forward in the opposite direction.',
          'It is used to roll over or shift the delivery date of a currency position, or to manage short-term liquidity.',
          'The swap points reflect the interest-rate differential between the two currencies.',
        ],
      },
    ],
    mcqs: [
      { q: 'An FX swap combines:', options: ['Two spot trades', 'A spot and an offsetting forward', 'Two options', 'A bond and a stock'], answer: 1, explanation: 'It pairs a spot leg with a forward leg in the opposite direction.' },
      { q: 'FX swaps are commonly used to:', options: ['Pay dividends', 'Manage short-term liquidity / roll positions', 'Value equities', 'Set tax rates'], answer: 1, explanation: 'They shift delivery dates and manage funding.' },
      { q: 'Swap points reflect the:', options: ['Dividend yield', 'Interest-rate differential', 'Share price', 'Credit rating'], answer: 1, explanation: 'The forward leg differs from spot by the rate differential.', tricky: true },
      { q: 'An FX swap is different from a currency option because it:', options: ['Gives a right, not obligation', 'Is a firm two-legged agreement', 'Never settles', 'Involves equities'], answer: 1, explanation: 'A swap is a binding pair of exchanges, not an optional right.' },
    ],
  },
  {
    id: 'bmc-cross-rates',
    title: 'Cross Rates',
    reels: [
      {
        kind: 'concept',
        title: 'Cross Rates',
        body: [
          'A cross rate is an exchange rate between two currencies that does not involve the US dollar.',
          'It is derived from each currency’s rate against the USD.',
          'Example: EUR/GBP can be computed from EUR/USD and GBP/USD.',
        ],
        formula: 'EUR/GBP = (EUR/USD) ÷ (GBP/USD)',
      },
    ],
    mcqs: [
      { q: 'A cross rate excludes the:', options: ['Euro', 'US dollar', 'Yen', 'Pound'], answer: 1, explanation: 'Cross rates are between two non-USD currencies.' },
      { q: 'Cross rates are typically derived from each currency’s rate against the:', options: ['Gold price', 'US dollar', 'Local index', 'Central bank rate'], answer: 1, explanation: 'They are computed via the two USD pairs.', tricky: true },
      { q: 'If EUR/USD = 1.10 and GBP/USD = 1.25, EUR/GBP ≈:', options: ['1.375', '0.88', '1.15', '2.35'], answer: 1, explanation: '1.10 ÷ 1.25 = 0.88.', tricky: true },
      { q: 'EUR/JPY is an example of a:', options: ['Major', 'Cross rate', 'Peg', 'Commodity'], answer: 1, explanation: 'It excludes the USD, so it is a cross.' },
    ],
  },
  {
    id: 'bmc-exchange-systems',
    title: 'Exchange Rate Systems',
    reels: [
      {
        kind: 'list',
        title: 'Exchange Rate Systems',
        body: [
          'Floating: the market sets the rate through supply and demand (e.g. USD, EUR).',
          'Fixed/pegged: the rate is tied to another currency or basket, defended by the central bank.',
          'Managed float: mostly market-driven but with occasional central-bank intervention.',
        ],
      },
    ],
    mcqs: [
      { q: 'Under a floating system, the exchange rate is set by:', options: ['The central bank alone', 'Market supply and demand', 'The government treasury', 'The IMF'], answer: 1, explanation: 'Floating rates are determined by the market.' },
      { q: 'A pegged currency is:', options: ['Free to move', 'Tied to another currency/basket', 'Always rising', 'Not traded'], answer: 1, explanation: 'A peg fixes the rate to a reference, defended by reserves.' },
      { q: 'A “managed float” means:', options: ['Purely fixed', 'Mostly market-driven with occasional intervention', 'No trading', 'Gold-backed'], answer: 1, explanation: 'The market leads, but the central bank intervenes at times.', tricky: true },
      { q: 'Defending a peg can fail when a country runs out of:', options: ['Shares', 'Foreign-exchange reserves', 'Bonds', 'Employees'], answer: 1, explanation: 'A peg collapses when reserves to defend it are exhausted.' },
    ],
  },
  {
    id: 'bmc-appreciation',
    title: 'Appreciation & Depreciation',
    reels: [
      {
        kind: 'concept',
        title: 'Appreciation & Depreciation',
        body: [
          'Appreciation is a currency gaining value versus another; depreciation is losing value.',
          'A stronger currency makes imports cheaper but exports less competitive.',
          'For a floating currency these are market-driven; for a peg, official revaluation/devaluation.',
        ],
      },
    ],
    mcqs: [
      { q: 'If EUR/USD rises from 1.05 to 1.10, the euro has:', options: ['Depreciated', 'Appreciated', 'Been pegged', 'Stayed flat'], answer: 1, explanation: 'A higher EUR/USD means the euro buys more dollars — appreciation.' },
      { q: 'A stronger domestic currency tends to make exports:', options: ['Cheaper abroad', 'Less competitive abroad', 'Tax-free', 'Unaffected'], answer: 1, explanation: 'A strong currency raises the foreign price of exports.', tricky: true },
      { q: 'If USD/INR rises from 83 to 85, the rupee has:', options: ['Appreciated', 'Depreciated', 'Been revalued up', 'Pegged'], answer: 1, explanation: 'More rupees per dollar means the rupee weakened.', tricky: true },
      { q: 'An official increase in a pegged currency’s value is a:', options: ['Depreciation', 'Revaluation', 'Default', 'Coupon'], answer: 1, explanation: 'Raising a peg is a revaluation; lowering it is a devaluation.' },
    ],
  },
  {
    id: 'bmc-ppp',
    title: 'Purchasing Power Parity',
    reels: [
      {
        kind: 'concept',
        title: 'Purchasing Power Parity',
        body: [
          'PPP says exchange rates should adjust so that identical goods cost the same across countries.',
          'A country with higher inflation should see its currency depreciate over time.',
          'PPP is a long-run anchor; short-run rates deviate due to flows and sentiment.',
        ],
        tip: 'The Economist’s “Big Mac Index” is a famous, light-hearted PPP gauge.',
      },
    ],
    mcqs: [
      { q: 'PPP implies a country with persistently higher inflation will see its currency:', options: ['Appreciate', 'Depreciate', 'Stay pegged', 'Vanish'], answer: 1, explanation: 'Higher inflation erodes purchasing power, so PPP predicts depreciation.' },
      { q: 'PPP is most useful over the:', options: ['Next minute', 'Long run', 'Trading session', 'Options expiry'], answer: 1, explanation: 'PPP is a long-run anchor, not a short-term predictor.', tricky: true },
      { q: 'The Big Mac Index is a playful measure of:', options: ['Interest rates', 'Purchasing power parity', 'GDP', 'Unemployment'], answer: 1, explanation: 'It compares burger prices to gauge currency mis-pricing under PPP.' },
      { q: 'PPP is based on the “law of one price” for:', options: ['Bonds', 'Identical goods across countries', 'Shares', 'Labour'], answer: 1, explanation: 'Identical goods should cost the same everywhere once converted.' },
    ],
  },
  {
    id: 'bmc-irp',
    title: 'Interest Rate Parity',
    reels: [
      {
        kind: 'concept',
        title: 'Interest Rate Parity',
        body: [
          'Interest rate parity links spot and forward rates to the interest-rate differential between two currencies.',
          'It ensures there is no risk-free arbitrage from borrowing in one currency to invest in another (covered).',
          'The currency with the higher interest rate trades at a forward discount.',
        ],
      },
    ],
    mcqs: [
      { q: 'Interest rate parity links the forward rate to the:', options: ['Dividend yield', 'Interest-rate differential', 'Share price', 'Tax rate'], answer: 1, explanation: 'The forward premium/discount reflects the rate gap.' },
      { q: 'Under covered interest parity there is no:', options: ['Risk-free arbitrage profit', 'Trading', 'Spot rate', 'Central bank'], answer: 0, explanation: 'IRP removes risk-free arbitrage between currencies.', tricky: true },
      { q: 'The higher-yielding currency trades at a forward:', options: ['Premium', 'Discount', 'Par', 'Peg'], answer: 1, explanation: 'Its forward discount offsets the extra interest — no free lunch.', tricky: true },
      { q: 'IRP connects the money markets of two countries via the:', options: ['Equity market', 'FX forward market', 'Commodity market', 'Tax code'], answer: 1, explanation: 'Forwards tie the two interest rates together.' },
    ],
  },
  {
    id: 'bmc-carry-trade',
    title: 'Carry Trade',
    reels: [
      {
        kind: 'concept',
        title: 'The Carry Trade',
        body: [
          'A carry trade borrows in a low-interest-rate currency and invests in a higher-yielding one to pocket the difference.',
          'It profits in calm markets but can unwind violently when volatility spikes.',
          'Classic funding currencies have been the JPY and CHF.',
        ],
        tip: 'The carry trade’s risk is a sudden reversal — “picking up pennies in front of a steamroller.”',
      },
    ],
    mcqs: [
      { q: 'A carry trade borrows in a ______ currency and invests in a ______ one.', options: ['High-yield; low-yield', 'Low-yield; high-yield', 'Pegged; floating', 'Rising; falling'], answer: 1, explanation: 'It funds cheaply and invests where yields are higher.' },
      { q: 'The carry trade is most vulnerable to:', options: ['Low volatility', 'A sudden spike in volatility / risk-off', 'Stable rates', 'High liquidity'], answer: 1, explanation: 'Volatility spikes trigger sharp unwinds.', tricky: true },
      { q: 'A classic funding currency has been the:', options: ['USD', 'Japanese yen', 'Brazilian real', 'Indian rupee'], answer: 1, explanation: 'Low-yielding JPY (and CHF) have funded carry trades.' },
      { q: 'The carry trade earns primarily from the:', options: ['Interest-rate differential', 'Dividend yield', 'Capital gains only', 'Tax refund'], answer: 0, explanation: 'Its core return is the interest differential (plus any FX move).' },
    ],
  },
  {
    id: 'bmc-fx-risks',
    title: 'FX Risks',
    reels: [
      {
        kind: 'list',
        title: 'FX Risks',
        body: [
          'Transaction risk: the rate moves between agreeing and settling a foreign-currency deal.',
          'Translation risk: converting foreign subsidiaries’ financials into the home currency.',
          'Economic risk: long-run competitiveness shifts from currency moves.',
        ],
      },
    ],
    mcqs: [
      { q: 'The risk that a rate moves between agreeing and settling a deal is:', options: ['Translation risk', 'Transaction risk', 'Economic risk', 'Credit risk'], answer: 1, explanation: 'Transaction risk affects specific cross-currency transactions.' },
      { q: 'Converting an overseas subsidiary’s accounts creates:', options: ['Transaction risk', 'Translation risk', 'Liquidity risk', 'Coupon risk'], answer: 1, explanation: 'Translation risk arises from consolidating foreign financials.', tricky: true },
      { q: 'Long-run competitiveness eroded by a strong currency is:', options: ['Economic (operating) risk', 'Transaction risk', 'Settlement risk', 'None'], answer: 0, explanation: 'Economic risk reflects lasting competitive effects of FX moves.' },
      { q: 'A common way to manage FX risk is to:', options: ['Ignore it', 'Hedge with forwards or options', 'Only use cash', 'Raise dividends'], answer: 1, explanation: 'Hedging instruments reduce currency exposure.' },
    ],
  },
  {
    id: 'bmc-fx-hedging',
    title: 'Hedging',
    reels: [
      {
        kind: 'concept',
        title: 'Hedging FX Exposure',
        body: [
          'Hedging reduces or removes the risk of adverse currency moves on a known future exposure.',
          'Tools include forwards (lock a rate), options (a right with capped downside) and natural hedging (matching currency inflows and outflows).',
          'Hedging trades away upside in exchange for certainty.',
        ],
      },
    ],
    mcqs: [
      { q: 'Hedging aims to:', options: ['Maximise speculation', 'Reduce risk from adverse currency moves', 'Increase leverage', 'Avoid tax'], answer: 1, explanation: 'Hedging protects against unfavourable FX movements.' },
      { q: 'An option hedge differs from a forward because it:', options: ['Locks a rate with an obligation', 'Provides protection while keeping upside (for a premium)', 'Never settles', 'Involves equities'], answer: 1, explanation: 'Options cap downside but retain upside, at the cost of the premium.', tricky: true },
      { q: '“Natural hedging” means:', options: ['Using forests', 'Matching currency inflows and outflows', 'Buying gold', 'Ignoring risk'], answer: 1, explanation: 'Offsetting revenues and costs in the same currency reduces exposure.' },
      { q: 'A hedge generally trades away ______ for certainty.', options: ['Risk', 'Potential upside', 'Liquidity', 'Nothing'], answer: 1, explanation: 'Locking a rate removes both downside and upside.' },
    ],
  },
  {
    id: 'bmc-cb-intervention',
    title: 'Central Bank Intervention',
    reels: [
      {
        kind: 'concept',
        title: 'Central Bank Intervention',
        body: [
          'Central banks sometimes buy or sell their currency to influence its value or curb excessive volatility.',
          'To weaken its currency a bank sells it (buying foreign reserves); to strengthen it, it buys its own currency using reserves.',
          'Interest-rate policy is the more powerful, indirect lever.',
        ],
      },
    ],
    mcqs: [
      { q: 'To strengthen its own currency, a central bank would:', options: ['Sell its currency', 'Buy its currency using reserves', 'Print more of it', 'Cut rates'], answer: 1, explanation: 'Buying its own currency (selling reserves) supports its value.', tricky: true },
      { q: 'To weaken its currency, a central bank:', options: ['Sells its currency / buys reserves', 'Buys its currency', 'Raises rates sharply', 'Issues equity'], answer: 0, explanation: 'Selling its own currency and accumulating reserves pushes it down.' },
      { q: 'Defending a currency by buying it depletes:', options: ['Shares', 'Foreign-exchange reserves', 'Bonds issued', 'Employees'], answer: 1, explanation: 'It spends reserves, which can run out.' },
      { q: 'The most powerful lever over a currency is usually:', options: ['Press releases', 'Interest-rate policy', 'Social media', 'Tax policy'], answer: 1, explanation: 'Rate policy is the dominant, if indirect, influence on a currency.' },
    ],
  },
];

const fixedIncome: Topic[] = [
  {
    id: 'bmc-bond-basics',
    title: 'Bond Basics',
    reels: [
      {
        kind: 'concept',
        title: 'Bond Basics',
        body: [
          'A bond is a loan: the issuer borrows money and promises periodic coupons plus repayment of the face (par) value at maturity.',
          'Issuers include governments, agencies and corporations.',
          'Bonds rank ahead of equity — a senior claim if the issuer fails.',
        ],
        keyTerms: [
          { term: 'Par value', def: 'The face amount repaid at maturity, typically 100 or 1,000.' },
          { term: 'Maturity', def: 'The date the principal is repaid.' },
        ],
      },
    ],
    mcqs: [
      { q: 'A bond represents:', options: ['Ownership in a firm', 'A loan to the issuer', 'A currency', 'A commodity'], answer: 1, explanation: 'A bond is debt — the holder lends to the issuer.' },
      { q: 'At maturity, a bondholder receives:', options: ['Shares', 'The face (par) value', 'A dividend', 'Nothing'], answer: 1, explanation: 'The principal (par) is repaid at maturity.' },
      { q: 'Relative to equity, a bond is a:', options: ['Junior claim', 'Senior claim', 'Equal claim', 'Voting claim'], answer: 1, explanation: 'Debt ranks ahead of equity in a wind-up.', tricky: true },
      { q: 'Which is NOT a typical bond issuer?', options: ['Government', 'Corporation', 'Agency', 'An individual consumer'], answer: 3, explanation: 'Bonds are issued by governments, agencies and corporations, not individuals.' },
    ],
  },
  {
    id: 'bmc-bond-pricing',
    title: 'Bond Pricing',
    reels: [
      {
        kind: 'concept',
        title: 'Bond Pricing',
        body: [
          'A bond’s price is the present value of its future coupons and principal, discounted at the market yield.',
          'Price and yield move inversely: when yields rise, prices fall.',
          'A bond priced above par trades at a premium; below par, at a discount.',
        ],
        formula: 'Price = Σ Coupon ÷ (1 + y)ᵗ + Par ÷ (1 + y)ⁿ',
      },
    ],
    mcqs: [
      { q: 'A bond’s price is the present value of its:', options: ['Dividends', 'Future coupons and principal', 'Share price', 'Tax bill'], answer: 1, explanation: 'Discounting the cash flows at the market yield gives the price.' },
      { q: 'When market yields rise, bond prices:', options: ['Rise', 'Fall', 'Stay flat', 'Double'], answer: 1, explanation: 'Price and yield are inversely related.' },
      { q: 'A bond priced at 105 is trading at a:', options: ['Discount', 'Premium', 'Par', 'Default'], answer: 1, explanation: 'Above par (100) is a premium.', tricky: true },
      { q: 'A bond priced below par has a coupon ______ the market yield.', options: ['Above', 'Below', 'Equal to', 'Unrelated to'], answer: 1, explanation: 'A discount bond’s coupon is below the market yield.', tricky: true },
    ],
  },
  {
    id: 'bmc-bond-yield',
    title: 'Bond Yield',
    reels: [
      {
        kind: 'concept',
        title: 'Bond Yield',
        body: [
          'Yield is the return an investor earns on a bond, expressed as an annual percentage.',
          'Current yield = annual coupon ÷ current price; it ignores capital gain/loss to maturity.',
          'Yield rises when price falls, and vice versa.',
        ],
        formula: 'Current yield = Annual coupon ÷ Price',
      },
    ],
    mcqs: [
      { q: 'Current yield equals the annual coupon divided by the:', options: ['Par value', 'Current price', 'Yield to maturity', 'Coupon rate'], answer: 1, explanation: 'Current yield = coupon ÷ current market price.' },
      { q: 'Current yield ignores:', options: ['The coupon', 'Capital gain/loss to maturity', 'The price', 'The issuer'], answer: 1, explanation: 'It omits the pull-to-par gain or loss captured by YTM.', tricky: true },
      { q: 'If price falls, yield:', options: ['Falls', 'Rises', 'Is unchanged', 'Turns negative'], answer: 1, explanation: 'Yield and price move inversely.' },
      { q: 'A ₹1,000 par bond with a ₹60 coupon priced at ₹1,200 has a current yield of:', options: ['6%', '5%', '7.2%', '4%'], answer: 1, explanation: '60 ÷ 1,200 = 5%.', tricky: true },
    ],
  },
  {
    id: 'bmc-coupon-rate',
    title: 'Coupon Rate',
    reels: [
      {
        kind: 'concept',
        title: 'Coupon Rate',
        body: [
          'The coupon rate is the fixed annual interest a bond pays, expressed as a percentage of par.',
          'A 5% coupon on ₹1,000 par pays ₹50 a year, regardless of the bond’s market price.',
          'Zero-coupon bonds pay no coupon and are issued at a discount to par.',
        ],
      },
    ],
    mcqs: [
      { q: 'The coupon rate is a percentage of:', options: ['Market price', 'Par (face) value', 'Yield', 'GDP'], answer: 1, explanation: 'Coupons are fixed as a % of par, not price.' },
      { q: 'A 6% coupon on ₹1,000 par pays annually:', options: ['₹6', '₹60', '₹600', '₹16'], answer: 1, explanation: '6% × 1,000 = ₹60.' },
      { q: 'A zero-coupon bond:', options: ['Pays a high coupon', 'Pays no coupon and is issued at a discount', 'Pays dividends', 'Has no maturity'], answer: 1, explanation: 'Zeros pay nothing until maturity and are sold below par.', tricky: true },
      { q: 'The coupon payment changes when the bond’s market price changes:', options: ['True', 'False — it is fixed to par', 'Only for zeros', 'Only in default'], answer: 1, explanation: 'Coupons are fixed to par; price changes affect yield, not the coupon.', tricky: true },
    ],
  },
  {
    id: 'bmc-ytm',
    title: 'Yield to Maturity',
    reels: [
      {
        kind: 'concept',
        title: 'Yield to Maturity',
        body: [
          'YTM is the total annualised return if a bond is bought today and held to maturity, assuming coupons are reinvested.',
          'It captures both coupon income and any gain/loss from buying above or below par.',
          'At par, YTM equals the coupon rate; above par, YTM < coupon; below par, YTM > coupon.',
        ],
      },
    ],
    mcqs: [
      { q: 'YTM assumes the bond is:', options: ['Sold tomorrow', 'Held to maturity', 'Never bought', 'Converted to equity'], answer: 1, explanation: 'YTM is the return to maturity, assuming reinvested coupons.' },
      { q: 'For a bond priced above par, YTM is:', options: ['Above the coupon', 'Below the coupon', 'Equal to the coupon', 'Zero'], answer: 1, explanation: 'A premium bond’s YTM is below its coupon rate.', tricky: true },
      { q: 'At par, YTM equals the:', options: ['Duration', 'Coupon rate', 'Credit spread', 'Convexity'], answer: 1, explanation: 'At par the market yield equals the coupon.' },
      { q: 'YTM captures coupon income plus:', options: ['Dividends', 'Any gain/loss to par', 'Exchange-rate moves', 'Tax refunds'], answer: 1, explanation: 'It includes the pull-to-par capital gain or loss.' },
    ],
  },
  {
    id: 'bmc-duration',
    title: 'Duration',
    reels: [
      {
        kind: 'formula',
        title: 'Duration',
        body: [
          'Duration measures a bond’s price sensitivity to a change in interest rates.',
          'A duration of 7 implies roughly a 7% price fall if yields rise 1%.',
          'Longer maturity and lower coupon both increase duration.',
        ],
        formula: 'ΔPrice ≈ −Duration × ΔYield',
      },
    ],
    mcqs: [
      { q: 'Duration measures sensitivity of price to:', options: ['Credit rating', 'Interest-rate changes', 'Currency', 'Dividends'], answer: 1, explanation: 'Duration quantifies interest-rate price risk.' },
      { q: 'A bond with duration 5 falls about how much if yields rise 1%?', options: ['0.5%', '1%', '5%', '50%'], answer: 2, explanation: '≈ −5 × 1% = −5%.', tricky: true },
      { q: 'Which increases duration?', options: ['Higher coupon', 'Longer maturity', 'Shorter maturity', 'Higher yield'], answer: 1, explanation: 'Longer maturity (and lower coupon) raises duration.', tricky: true },
      { q: 'A zero-coupon bond’s duration equals its:', options: ['Coupon', 'Time to maturity', 'Yield', 'Half its maturity'], answer: 1, explanation: 'With no coupons, duration equals maturity.' },
    ],
  },
  {
    id: 'bmc-convexity',
    title: 'Convexity',
    reels: [
      {
        kind: 'concept',
        title: 'Convexity',
        body: [
          'Convexity corrects duration’s straight-line estimate for large yield changes.',
          'Positive convexity means a bond gains more when yields fall than it loses when yields rise by the same amount.',
          'The price–yield relationship is curved, not linear.',
        ],
      },
    ],
    mcqs: [
      { q: 'Convexity refines the estimate given by:', options: ['The coupon', 'Duration', 'The credit rating', 'The currency'], answer: 1, explanation: 'Convexity is the second-order correction to duration.' },
      { q: 'Positive convexity means a bond:', options: ['Loses more on rallies', 'Gains more when yields fall than it loses when they rise', 'Never changes', 'Is risk-free'], answer: 1, explanation: 'The curved price–yield line favours the holder.', tricky: true },
      { q: 'Duration alone assumes the price–yield relationship is:', options: ['Curved', 'Linear', 'Vertical', 'Random'], answer: 1, explanation: 'Duration is a linear approximation; convexity adds the curve.', tricky: true },
      { q: 'Convexity matters most for:', options: ['Tiny yield changes', 'Large yield changes', 'Zero changes', 'Equity prices'], answer: 1, explanation: 'The convexity adjustment grows with the size of the yield move.' },
    ],
  },
  {
    id: 'bmc-govt-bonds',
    title: 'Government Bonds',
    reels: [
      {
        kind: 'concept',
        title: 'Government Bonds',
        body: [
          'Government bonds are debt issued by national governments (e.g. US Treasuries, Indian G-secs, UK Gilts).',
          'Bonds of stable governments are treated as the “risk-free” benchmark for their currency.',
          'Their yields set the reference from which other bonds are priced via a credit spread.',
        ],
      },
    ],
    mcqs: [
      { q: 'US government bonds are called:', options: ['Gilts', 'Treasuries', 'Bunds', 'G-secs'], answer: 1, explanation: 'US government bonds are Treasuries; Gilts (UK), Bunds (Germany), G-secs (India).' },
      { q: 'Stable government bonds serve as the:', options: ['Riskiest asset', 'Risk-free benchmark', 'Equity index', 'Currency peg'], answer: 1, explanation: 'They anchor the risk-free rate for their currency.' },
      { q: 'Other bonds are priced off government yields plus a:', options: ['Dividend', 'Credit spread', 'Coupon', 'Tax'], answer: 1, explanation: 'The credit spread compensates for extra default risk.', tricky: true },
      { q: 'Indian government bonds are known as:', options: ['Treasuries', 'G-secs', 'Gilts', 'Bunds'], answer: 1, explanation: 'India’s government securities are “G-secs”.' },
    ],
  },
  {
    id: 'bmc-corp-bonds',
    title: 'Corporate Bonds',
    reels: [
      {
        kind: 'concept',
        title: 'Corporate Bonds',
        body: [
          'Corporate bonds are debt issued by companies to raise capital.',
          'They yield more than government bonds to compensate for higher default (credit) risk — the credit spread.',
          'They range from high-grade (investment grade) to high-yield (junk).',
        ],
      },
    ],
    mcqs: [
      { q: 'Corporate bonds yield more than government bonds because of:', options: ['Lower risk', 'Higher default (credit) risk', 'Tax breaks', 'Shorter maturity always'], answer: 1, explanation: 'The extra yield (credit spread) compensates for default risk.' },
      { q: 'The extra yield over a government bond is the:', options: ['Coupon', 'Credit spread', 'Duration', 'Par'], answer: 1, explanation: 'The credit spread is the compensation for credit risk.' },
      { q: 'A “high-yield” corporate bond is also called:', options: ['Investment grade', 'Junk', 'Risk-free', 'Sovereign'], answer: 1, explanation: 'Below investment grade bonds are high-yield or “junk”.', tricky: true },
      { q: 'Companies issue bonds primarily to:', options: ['Pay dividends', 'Raise capital / borrow', 'Buy their own shares only', 'Avoid all risk'], answer: 1, explanation: 'Bonds are a way for firms to borrow money.' },
    ],
  },
  {
    id: 'bmc-credit-ratings',
    title: 'Credit Ratings',
    reels: [
      {
        kind: 'list',
        title: 'Credit Ratings',
        body: [
          'Agencies (Moody’s, S&P, Fitch) rate the creditworthiness of issuers and bonds.',
          'Investment grade runs AAA down to BBB−/Baa3; below that is high-yield (junk).',
          'Lower ratings mean higher perceived default risk and thus higher yields.',
        ],
        tip: 'The investment-grade boundary is BBB−/Baa3 — a classic exam fact.',
      },
    ],
    mcqs: [
      { q: 'The highest credit rating is:', options: ['BBB', 'AAA', 'CCC', 'D'], answer: 1, explanation: 'AAA (Aaa) is the top rating.' },
      { q: 'The lowest investment-grade rating is:', options: ['AA', 'BBB− / Baa3', 'BB+', 'CCC'], answer: 1, explanation: 'BBB−/Baa3 is the investment-grade floor.', tricky: true },
      { q: 'A lower credit rating implies:', options: ['Lower yield', 'Higher yield', 'No yield', 'A currency peg'], answer: 1, explanation: 'More risk demands more yield.' },
      { q: 'Which is a major rating agency?', options: ['NSE', 'S&P Global Ratings', 'SEBI', 'IMF'], answer: 1, explanation: 'S&P, Moody’s and Fitch are the big three rating agencies.' },
    ],
  },
  {
    id: 'bmc-linkers',
    title: 'Inflation-linked Bonds',
    reels: [
      {
        kind: 'concept',
        title: 'Inflation-linked Bonds',
        body: [
          'Inflation-linked bonds (e.g. US TIPS) adjust their principal (and hence coupons) with an inflation index.',
          'They protect the investor’s real purchasing power.',
          'Their yield is a real yield; the gap versus nominal bonds reflects expected inflation (the breakeven).',
        ],
      },
    ],
    mcqs: [
      { q: 'Inflation-linked bonds protect against:', options: ['Default', 'Loss of purchasing power from inflation', 'Currency moves', 'Interest-rate risk entirely'], answer: 1, explanation: 'Their principal rises with inflation, preserving real value.' },
      { q: 'US inflation-linked bonds are called:', options: ['Gilts', 'TIPS', 'Bunds', 'G-secs'], answer: 1, explanation: 'Treasury Inflation-Protected Securities (TIPS).' },
      { q: 'The yield on a linker is a ______ yield.', options: ['Nominal', 'Real', 'Coupon', 'Dividend'], answer: 1, explanation: 'Linkers quote a real (inflation-adjusted) yield.', tricky: true },
      { q: 'The gap between nominal and linker yields reflects expected:', options: ['Growth', 'Inflation (breakeven)', 'Default', 'Dividends'], answer: 1, explanation: 'That breakeven is the market’s inflation expectation.', tricky: true },
    ],
  },
  {
    id: 'bmc-money-market',
    title: 'Money Market Instruments',
    reels: [
      {
        kind: 'list',
        title: 'Money Market Instruments',
        body: [
          'Money-market instruments are short-term debt, usually maturing within a year.',
          'Examples: Treasury bills, commercial paper, certificates of deposit and repos.',
          'They are prized for safety and liquidity, offering modest returns.',
        ],
      },
    ],
    mcqs: [
      { q: 'Money-market instruments are:', options: ['Long-term equity', 'Short-term debt (≤1 year)', 'Perpetual bonds', 'Commodities'], answer: 1, explanation: 'They are short-term, typically maturing within a year.' },
      { q: 'Which is a money-market instrument?', options: ['A 30-year bond', 'A Treasury bill', 'A common share', 'A perpetual'], answer: 1, explanation: 'T-bills are classic money-market instruments.' },
      { q: 'Money-market instruments are valued mainly for:', options: ['High returns', 'Safety and liquidity', 'Voting rights', 'Tax breaks'], answer: 1, explanation: 'They prioritise capital safety and liquidity over yield.', tricky: true },
      { q: 'Commercial paper is issued by:', options: ['Governments only', 'Corporations for short-term funding', 'Central banks only', 'Individuals'], answer: 1, explanation: 'CP is short-term unsecured corporate debt.' },
    ],
  },
  {
    id: 'bmc-yield-curve-analysis',
    title: 'Yield Curve Analysis',
    reels: [
      {
        kind: 'list',
        title: 'Yield Curve Analysis',
        body: [
          'The shape of the curve reveals market expectations for growth, inflation and rates.',
          'Steepening (long yields rising faster) often signals recovery/inflation expectations; flattening signals slowdown.',
          'Inversion (short above long) is a classic recession warning.',
        ],
      },
    ],
    mcqs: [
      { q: 'A steepening curve often signals expectations of:', options: ['Recession only', 'Recovery / higher inflation', 'A currency peg', 'Default'], answer: 1, explanation: 'Rising long yields typically reflect growth/inflation expectations.', tricky: true },
      { q: 'A flattening curve suggests:', options: ['Booming growth', 'A slowdown / uncertainty', 'Guaranteed rally', 'Deflation only'], answer: 1, explanation: 'Flattening often accompanies a cooling outlook.' },
      { q: 'Curve inversion is a signal of possible:', options: ['Expansion', 'Recession', 'Higher dividends', 'Currency strength'], answer: 1, explanation: 'Inversion has preceded most modern recessions.' },
      { q: 'The yield curve reflects the market’s expectations for:', options: ['Only today’s rate', 'Future growth, inflation and rates', 'Company earnings', 'Tax policy'], answer: 1, explanation: 'Its shape embeds expectations across horizons.' },
    ],
  },
  {
    id: 'bmc-ir-risk',
    title: 'Interest Rate Risk',
    reels: [
      {
        kind: 'concept',
        title: 'Interest Rate Risk',
        body: [
          'Interest-rate risk is the danger that rising rates reduce a bond’s price.',
          'Longer-duration bonds carry more interest-rate risk.',
          'It can be managed by shortening duration or using interest-rate derivatives.',
        ],
      },
    ],
    mcqs: [
      { q: 'Interest-rate risk is the risk that:', options: ['The issuer defaults', 'Rising rates lower bond prices', 'Currency moves', 'Coupons are cut'], answer: 1, explanation: 'It is price risk from changing interest rates.' },
      { q: 'Which bond has the most interest-rate risk?', options: ['Short, high-coupon', 'Long, low-coupon', 'Short, low-coupon', 'Floating-rate'], answer: 1, explanation: 'Long maturity and low coupon maximise duration and rate risk.', tricky: true },
      { q: 'To reduce interest-rate risk, an investor can:', options: ['Extend duration', 'Shorten duration', 'Add leverage', 'Ignore it'], answer: 1, explanation: 'Shorter duration lowers sensitivity to rate moves.' },
      { q: 'A floating-rate note has ______ interest-rate risk than a fixed bond.', options: ['More', 'Less', 'The same', 'Infinite'], answer: 1, explanation: 'Its coupon resets, so its price is less rate-sensitive.', tricky: true },
    ],
  },
  {
    id: 'bmc-credit-risk',
    title: 'Credit Risk',
    reels: [
      {
        kind: 'concept',
        title: 'Credit Risk',
        body: [
          'Credit risk is the danger that the issuer fails to pay coupons or principal (default).',
          'It is compensated by the credit spread over risk-free government bonds.',
          'A widening spread signals rising perceived default risk.',
        ],
      },
    ],
    mcqs: [
      { q: 'Credit risk is the risk of:', options: ['Rising rates', 'Issuer default', 'Currency moves', 'Inflation'], answer: 1, explanation: 'Credit risk is the risk the issuer fails to pay.' },
      { q: 'Credit risk is compensated by the:', options: ['Coupon only', 'Credit spread over government bonds', 'Duration', 'Dividend'], answer: 1, explanation: 'The spread rewards investors for bearing default risk.' },
      { q: 'A widening credit spread indicates:', options: ['Falling default risk', 'Rising perceived default risk', 'Lower rates only', 'A stronger currency'], answer: 1, explanation: 'Wider spreads mean the market is pricing more credit risk.', tricky: true },
      { q: 'Government bonds of stable countries are considered to have:', options: ['High credit risk', 'Minimal (near risk-free) credit risk', 'No interest-rate risk', 'No maturity'], answer: 1, explanation: 'They anchor the risk-free rate with minimal default risk.' },
    ],
  },
];

const equities: Topic[] = [
  {
    id: 'bmc-equity-markets',
    title: 'Equity Markets',
    reels: [
      {
        kind: 'concept',
        title: 'Equity Markets',
        body: [
          'Equity markets are where shares of companies are issued and traded.',
          'They let companies raise capital and give investors ownership and liquidity.',
          'Primary markets issue new shares; secondary markets trade existing ones.',
        ],
      },
    ],
    mcqs: [
      { q: 'Equity markets allow companies to:', options: ['Borrow via bonds', 'Raise capital by issuing shares', 'Set interest rates', 'Print money'], answer: 1, explanation: 'Equity markets raise capital through share issuance.' },
      { q: 'A share represents:', options: ['A loan', 'Ownership in a company', 'A currency', 'A commodity'], answer: 1, explanation: 'Equity is fractional ownership.' },
      { q: 'New shares are issued in the:', options: ['Secondary market', 'Primary market', 'Money market', 'Forward market'], answer: 1, explanation: 'The primary market handles new issuance (e.g. IPOs).' },
      { q: 'Secondary-market trading provides investors with:', options: ['New capital for the firm', 'Liquidity to buy and sell', 'Guaranteed profit', 'Voting only'], answer: 1, explanation: 'It lets investors trade existing shares, providing liquidity.', tricky: true },
    ],
  },
  {
    id: 'bmc-ipo',
    title: 'IPO',
    reels: [
      {
        kind: 'concept',
        title: 'Initial Public Offering',
        body: [
          'An IPO is a company’s first sale of shares to the public, moving from private to listed.',
          'It raises capital for the company and lets early investors realise value.',
          'Pricing can be via book-building (a price band and bids) or a fixed price.',
        ],
      },
    ],
    mcqs: [
      { q: 'An IPO is a company’s:', options: ['First public share sale', 'Bond issue', 'Buyback', 'Dividend'], answer: 0, explanation: 'An IPO is the first offering of shares to the public.' },
      { q: 'An IPO takes place in the:', options: ['Secondary market', 'Primary market', 'Money market', 'FX market'], answer: 1, explanation: 'New shares are issued in the primary market.' },
      { q: 'Book-building discovers the IPO price via:', options: ['A fixed price', 'Investor bids within a price band', 'A lottery', 'Government decree'], answer: 1, explanation: 'Book-building sets the price from demand within a band.', tricky: true },
      { q: 'An IPO allows early investors to:', options: ['Lose their stake', 'Realise value / exit', 'Avoid tax', 'Vote twice'], answer: 1, explanation: 'Listing provides an exit and price for early holders.' },
    ],
  },
  {
    id: 'bmc-secondary-market',
    title: 'Secondary Market',
    reels: [
      {
        kind: 'concept',
        title: 'Secondary Market',
        body: [
          'The secondary market is where already-issued shares trade between investors, e.g. on a stock exchange.',
          'The issuing company receives no new money here — trades are investor to investor.',
          'It provides price discovery and liquidity.',
        ],
      },
    ],
    mcqs: [
      { q: 'In the secondary market, trades are between:', options: ['Company and investor', 'Investor and investor', 'Two governments', 'Banks only'], answer: 1, explanation: 'Existing shares change hands between investors.' },
      { q: 'The issuing company receives new capital in the secondary market:', options: ['Yes, always', 'No — it gets no new money', 'Only via dividends', 'Only at IPO price'], answer: 1, explanation: 'Secondary trades don’t raise money for the issuer.', tricky: true },
      { q: 'The secondary market provides:', options: ['Only new issuance', 'Price discovery and liquidity', 'Guaranteed returns', 'Tax exemption'], answer: 1, explanation: 'It sets prices and lets investors trade freely.' },
      { q: 'An example of a secondary market is:', options: ['An IPO', 'A stock exchange like NSE', 'A bond issuance', 'A rights issue'], answer: 1, explanation: 'Exchanges host secondary trading of listed shares.' },
    ],
  },
  {
    id: 'bmc-market-cap',
    title: 'Market Capitalization',
    reels: [
      {
        kind: 'formula',
        title: 'Market Capitalization',
        body: [
          'Market cap is the total market value of a company’s equity.',
          'It equals the share price multiplied by the number of shares outstanding.',
          'Companies are grouped by size: large-cap, mid-cap and small-cap.',
        ],
        formula: 'Market cap = Share price × Shares outstanding',
      },
    ],
    mcqs: [
      { q: 'Market cap equals:', options: ['Price × shares outstanding', 'Revenue × margin', 'Assets − liabilities', 'EPS × dividend'], answer: 0, explanation: 'Market cap = share price × shares outstanding.' },
      { q: 'A company with 10m shares at ₹200 has a market cap of:', options: ['₹20m', '₹200m', '₹2bn', '₹2m'], answer: 2, explanation: '10,000,000 × 200 = ₹2,000,000,000 = ₹2bn.', tricky: true },
      { q: 'Very large companies are called:', options: ['Small-cap', 'Large-cap', 'Micro-cap', 'Penny stocks'], answer: 1, explanation: 'Big companies by market value are large-caps.' },
      { q: 'Market cap measures the value of a company’s:', options: ['Debt', 'Equity', 'Revenue', 'Assets'], answer: 1, explanation: 'It is the market value of the equity only.' },
    ],
  },
  {
    id: 'bmc-indices',
    title: 'Stock Indices',
    reels: [
      {
        kind: 'concept',
        title: 'Stock Indices',
        body: [
          'A stock index tracks a basket of shares to represent a market or segment (e.g. S&P 500, NIFTY 50).',
          'Most modern indices are weighted by free-float market capitalisation.',
          'Indices are used as benchmarks and underlie index funds and ETFs.',
        ],
      },
    ],
    mcqs: [
      { q: 'A stock index represents:', options: ['A single stock', 'A basket of stocks / a market', 'A bond', 'A currency'], answer: 1, explanation: 'It tracks a group of shares to gauge the market.' },
      { q: 'Most major indices are weighted by:', options: ['Share price', 'Free-float market capitalisation', 'Equal weights', 'Dividend yield'], answer: 1, explanation: 'Modern indices use free-float market-cap weighting.', tricky: true },
      { q: 'India’s NSE benchmark index is the:', options: ['SENSEX', 'NIFTY 50', 'S&P 500', 'FTSE 100'], answer: 1, explanation: 'NIFTY 50 is NSE’s flagship index.' },
      { q: 'Indices are commonly used as:', options: ['Tax tools', 'Performance benchmarks', 'Currency pegs', 'Coupons'], answer: 1, explanation: 'They benchmark portfolios and back index funds/ETFs.' },
    ],
  },
  {
    id: 'bmc-valuation-ratios',
    title: 'Valuation Ratios',
    reels: [
      {
        kind: 'list',
        title: 'Valuation Ratios',
        body: [
          'Valuation ratios compare a company’s price to a fundamental like earnings, book value or cash flow.',
          'Common ones: P/E, P/B, EV/EBITDA and dividend yield.',
          'They enable relative comparison across companies and against history.',
        ],
      },
    ],
    mcqs: [
      { q: 'Valuation ratios compare price to a:', options: ['Random number', 'Fundamental (earnings, book value, etc.)', 'Currency', 'Coupon'], answer: 1, explanation: 'They relate market price to a fundamental metric.' },
      { q: 'Which is a valuation ratio?', options: ['PMI', 'P/E', 'CPI', 'GDP'], answer: 1, explanation: 'Price-to-Earnings is a core valuation ratio.' },
      { q: 'Valuation multiples are used for:', options: ['Absolute value only', 'Relative comparison', 'Setting coupons', 'Currency pegs'], answer: 1, explanation: 'They enable relative valuation across peers.', tricky: true },
      { q: 'A capital-structure-neutral multiple is:', options: ['P/E', 'EV/EBITDA', 'Dividend yield', 'P/B'], answer: 1, explanation: 'EV/EBITDA uses enterprise value, neutralising leverage.' },
    ],
  },
  {
    id: 'bmc-pe-ratio',
    title: 'PE Ratio',
    reels: [
      {
        kind: 'formula',
        title: 'Price-to-Earnings Ratio',
        body: [
          'The P/E ratio is the share price divided by earnings per share (EPS).',
          'It shows how much investors pay per unit of earnings.',
          'A high P/E can mean high growth expectations — or overvaluation.',
        ],
        formula: 'P/E = Price ÷ EPS',
      },
    ],
    mcqs: [
      { q: 'The P/E ratio is:', options: ['Price ÷ EPS', 'EPS ÷ Price', 'Price × Dividend', 'Revenue ÷ Price'], answer: 0, explanation: 'P/E = price per share ÷ earnings per share.' },
      { q: 'A stock at ₹300 with EPS ₹15 has a P/E of:', options: ['5', '20', '45', '0.05'], answer: 1, explanation: '300 ÷ 15 = 20.', tricky: true },
      { q: 'A high P/E can indicate:', options: ['Guaranteed value', 'High growth expectations or overvaluation', 'Bankruptcy', 'Zero risk'], answer: 1, explanation: 'It reflects growth hopes — or that the stock is pricey.' },
      { q: 'P/E is an ______ valuation measure.', options: ['Enterprise-value', 'Equity', 'Debt', 'Cash'], answer: 1, explanation: 'It uses equity price and EPS, so it is equity-based.', tricky: true },
    ],
  },
  {
    id: 'bmc-pb-ratio',
    title: 'PB Ratio',
    reels: [
      {
        kind: 'formula',
        title: 'Price-to-Book Ratio',
        body: [
          'The P/B ratio compares the share price to the book value per share (net assets).',
          'A P/B below 1 can suggest the market values the firm below its accounting net worth.',
          'It is especially used for banks and asset-heavy businesses.',
        ],
        formula: 'P/B = Price ÷ Book value per share',
      },
    ],
    mcqs: [
      { q: 'The P/B ratio compares price to:', options: ['Earnings', 'Book value per share', 'Revenue', 'Dividends'], answer: 1, explanation: 'P/B = price ÷ book value per share.' },
      { q: 'A P/B below 1 may indicate the stock trades:', options: ['Above net asset value', 'Below its accounting net worth', 'At a fixed peg', 'With no assets'], answer: 1, explanation: 'The market values it below book — possibly cheap or troubled.', tricky: true },
      { q: 'P/B is especially relevant for:', options: ['Software startups', 'Banks and asset-heavy firms', 'Loss-makers only', 'Currencies'], answer: 1, explanation: 'Book value is meaningful for asset-intensive businesses like banks.' },
      { q: 'Book value equals:', options: ['Market cap', 'Assets − liabilities', 'Revenue', 'Price × shares'], answer: 1, explanation: 'Book value is net assets (equity) on the balance sheet.' },
    ],
  },
  {
    id: 'bmc-ev-ebitda',
    title: 'EV/EBITDA',
    reels: [
      {
        kind: 'formula',
        title: 'EV/EBITDA',
        body: [
          'EV/EBITDA compares enterprise value to earnings before interest, tax, depreciation and amortisation.',
          'Because it uses enterprise value and pre-interest earnings, it is neutral to capital structure.',
          'It is widely used to compare firms with different leverage.',
        ],
        formula: 'EV = Market cap + Debt − Cash',
      },
    ],
    mcqs: [
      { q: 'EV/EBITDA is neutral to:', options: ['Revenue', 'Capital structure (leverage)', 'Products', 'Geography'], answer: 1, explanation: 'It uses enterprise value and pre-interest earnings.', tricky: true },
      { q: 'Enterprise value equals market cap plus debt minus:', options: ['Revenue', 'Cash', 'EBITDA', 'Equity'], answer: 1, explanation: 'EV = market cap + debt − cash (and equivalents).' },
      { q: 'EBITDA should be paired with:', options: ['Equity value', 'Enterprise value', 'Net income', 'Dividend'], answer: 1, explanation: 'Pre-interest EBITDA matches enterprise value.', tricky: true },
      { q: 'EV/EBITDA is preferred over P/E when firms differ in:', options: ['Colour', 'Leverage/tax', 'Head office', 'Year-end'], answer: 1, explanation: 'It removes distortions from different capital structures.' },
    ],
  },
  {
    id: 'bmc-dividend-yield',
    title: 'Dividend Yield',
    reels: [
      {
        kind: 'formula',
        title: 'Dividend Yield',
        body: [
          'Dividend yield is the annual dividend per share divided by the share price.',
          'It shows the cash income return from holding the stock.',
          'A very high yield can signal a falling price rather than generosity.',
        ],
        formula: 'Dividend yield = Annual dividend ÷ Price',
      },
    ],
    mcqs: [
      { q: 'Dividend yield equals annual dividend divided by:', options: ['EPS', 'Share price', 'Book value', 'Revenue'], answer: 1, explanation: 'Dividend yield = dividend per share ÷ price.' },
      { q: 'A stock at ₹100 paying ₹4 dividend yields:', options: ['4%', '25%', '0.04%', '40%'], answer: 0, explanation: '4 ÷ 100 = 4%.', tricky: true },
      { q: 'A very high dividend yield may signal:', options: ['Guaranteed safety', 'A falling share price / trouble', 'A stock split', 'Zero risk'], answer: 1, explanation: 'Yield can spike because the price dropped on bad news.', tricky: true },
      { q: 'Dividend yield measures the ______ return.', options: ['Capital gain', 'Income', 'Leverage', 'Tax'], answer: 1, explanation: 'It captures the cash income component of returns.' },
    ],
  },
  {
    id: 'bmc-roe',
    title: 'ROE',
    reels: [
      {
        kind: 'formula',
        title: 'Return on Equity',
        body: [
          'ROE measures net profit as a percentage of shareholders’ equity.',
          'It shows how efficiently a company turns equity into profit.',
          'High, sustainable ROE is a hallmark of quality businesses.',
        ],
        formula: 'ROE = Net income ÷ Shareholders’ equity',
      },
    ],
    mcqs: [
      { q: 'ROE relates net income to:', options: ['Total assets', 'Shareholders’ equity', 'Revenue', 'Debt'], answer: 1, explanation: 'ROE = net income ÷ equity.' },
      { q: 'Net profit ₹40 on equity ₹200 gives ROE of:', options: ['5%', '20%', '40%', '200%'], answer: 1, explanation: '40 ÷ 200 = 20%.', tricky: true },
      { q: 'A high, sustainable ROE usually signals:', options: ['A weak business', 'An efficient, quality business', 'Imminent default', 'A currency peg'], answer: 1, explanation: 'Consistently high ROE marks strong businesses.' },
      { q: 'ROE can be inflated by:', options: ['More equity', 'High leverage (more debt)', 'Lower sales', 'Higher tax'], answer: 1, explanation: 'Leverage boosts ROE but also raises risk — a subtle trap.', tricky: true },
    ],
  },
  {
    id: 'bmc-roa',
    title: 'ROA',
    reels: [
      {
        kind: 'formula',
        title: 'Return on Assets',
        body: [
          'ROA measures net profit as a percentage of total assets.',
          'It shows how efficiently a company uses ALL its assets (funded by debt and equity) to generate profit.',
          'Unlike ROE, it is not flattered by leverage.',
        ],
        formula: 'ROA = Net income ÷ Total assets',
      },
    ],
    mcqs: [
      { q: 'ROA relates net income to:', options: ['Equity', 'Total assets', 'Revenue', 'Dividends'], answer: 1, explanation: 'ROA = net income ÷ total assets.' },
      { q: 'Compared with ROE, ROA is:', options: ['More flattered by debt', 'Not inflated by leverage', 'Always higher', 'Unrelated to profit'], answer: 1, explanation: 'ROA uses total assets, so leverage doesn’t flatter it.', tricky: true },
      { q: 'Net profit ₹30 on assets ₹600 gives ROA of:', options: ['5%', '20%', '2%', '50%'], answer: 0, explanation: '30 ÷ 600 = 5%.', tricky: true },
      { q: 'ROA measures efficiency in using:', options: ['Only equity', 'All assets (debt + equity funded)', 'Only cash', 'Only inventory'], answer: 1, explanation: 'It reflects returns on the whole asset base.' },
    ],
  },
  {
    id: 'bmc-fundamental-analysis',
    title: 'Fundamental Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Fundamental Analysis',
        body: [
          'Fundamental analysis estimates a stock’s intrinsic value from economic, industry and company data.',
          'It studies financial statements, ratios and cash flows to judge under/over-valuation.',
          'Absolute methods (DCF) and relative methods (multiples) are both used.',
        ],
      },
    ],
    mcqs: [
      { q: 'Fundamental analysis seeks a stock’s:', options: ['Chart pattern', 'Intrinsic value', 'Trading volume', 'Beta only'], answer: 1, explanation: 'It estimates intrinsic value from fundamentals.' },
      { q: 'A DCF is an example of ______ valuation.', options: ['Relative', 'Absolute (intrinsic)', 'Technical', 'Sentiment'], answer: 1, explanation: 'A DCF derives value from a firm’s own cash flows.' },
      { q: 'Fundamental analysis primarily answers:', options: ['When to buy', 'What to buy (value)', 'Who to buy from', 'The tax rate'], answer: 1, explanation: 'It addresses value — what is worth owning.', tricky: true },
      { q: 'Which is a fundamental input?', options: ['RSI', 'Earnings and cash flow', 'Moving averages', 'Chart patterns'], answer: 1, explanation: 'Earnings and cash flow are fundamentals, not technicals.' },
    ],
  },
  {
    id: 'bmc-technical-analysis',
    title: 'Technical Analysis',
    reels: [
      {
        kind: 'concept',
        title: 'Technical Analysis',
        body: [
          'Technical analysis studies price and volume charts to forecast future moves.',
          'It assumes price reflects all information and that trends and patterns repeat.',
          'Tools include support/resistance, moving averages, RSI and chart patterns.',
        ],
        tip: 'RSI above 70 is often read as overbought; below 30 as oversold.',
      },
    ],
    mcqs: [
      { q: 'Technical analysis is based on:', options: ['Financial statements', 'Price and volume data', 'Dividend policy', 'Tax rates'], answer: 1, explanation: 'It studies historical price and volume.' },
      { q: 'RSI above 70 typically signals:', options: ['Oversold', 'Overbought', 'Fair value', 'Delisting'], answer: 1, explanation: 'High RSI suggests an overbought condition.', tricky: true },
      { q: 'Technical analysis mainly answers:', options: ['What to buy', 'When to buy (timing)', 'The tax rate', 'The dividend'], answer: 1, explanation: 'Technicals focus on timing entries and exits.' },
      { q: 'A level where buying tends to halt a decline is:', options: ['Resistance', 'Support', 'A moving average', 'A coupon'], answer: 1, explanation: 'Support is where demand tends to stop a fall.' },
    ],
  },
  {
    id: 'bmc-diversification',
    title: 'Portfolio Diversification',
    reels: [
      {
        kind: 'concept',
        title: 'Portfolio Diversification',
        body: [
          'Diversification combines assets that don’t move together to reduce portfolio risk.',
          'It can lower unsystematic (company-specific) risk without proportionally cutting expected return.',
          'It cannot remove systematic (market-wide) risk.',
        ],
        tip: 'Diversification benefit is greatest when correlations are low or negative.',
      },
    ],
    mcqs: [
      { q: 'Diversification primarily reduces:', options: ['Systematic risk', 'Unsystematic (specific) risk', 'All risk to zero', 'Returns'], answer: 1, explanation: 'It cuts company-specific risk, not market-wide risk.' },
      { q: 'Diversification works best when assets are:', options: ['Perfectly correlated', 'Low or negatively correlated', 'Identical', 'The same stock'], answer: 1, explanation: 'Low/negative correlation maximises the benefit.', tricky: true },
      { q: 'Diversification cannot remove:', options: ['Specific risk', 'Systematic (market) risk', 'Any risk', 'Sector risk'], answer: 1, explanation: 'Market-wide risk remains after diversifying.' },
      { q: 'Two perfectly correlated (+1) assets give a diversification benefit of:', options: ['Large', 'None', 'Infinite', 'Negative'], answer: 1, explanation: 'Correlation +1 provides no diversification.', tricky: true },
    ],
  },
  {
    id: 'bmc-equity-risk',
    title: 'Equity Risk',
    reels: [
      {
        kind: 'concept',
        title: 'Equity Risk',
        body: [
          'Equity risk is the risk that a stock’s price falls; equities are the most junior claim, so they bear the most risk.',
          'Systematic risk (measured by beta) is market-wide; unsystematic risk is company-specific.',
          'The equity risk premium is the extra expected return for holding stocks over risk-free bonds.',
        ],
      },
    ],
    mcqs: [
      { q: 'Equities are the ______ claim, so they carry the most risk.', options: ['Most senior', 'Most junior', 'Only', 'Government'], answer: 1, explanation: 'Equity is paid last, after all debt.', tricky: true },
      { q: 'Beta measures a stock’s:', options: ['Dividend', 'Volatility vs the market', 'Coupon', 'Book value'], answer: 1, explanation: 'Beta is systematic risk relative to the market.' },
      { q: 'A beta of 1.4 means the stock is:', options: ['Less volatile than the market', 'More volatile than the market', 'Risk-free', 'A bond'], answer: 1, explanation: 'Beta above 1 means greater volatility than the market.' },
      { q: 'The equity risk premium is the extra return over:', options: ['Dividends', 'Risk-free bonds', 'Cash coupons', 'Inflation only'], answer: 1, explanation: 'It compensates investors for bearing equity risk versus risk-free assets.' },
    ],
  },
];

export const bmc: Course = {
  id: 'bmc',
  title: 'Bloomberg Market Concepts',
  shortTitle: 'Bloomberg BMC',
  provider: 'Bloomberg for Education',
  accent: '#4f7cae',
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
        'How the health of an economy is measured — GDP, inflation, employment, and the indicators that move markets.',
      topics: economicIndicators,
    },
    {
      id: 'bmc-fx',
      title: 'Currencies',
      summary:
        'The world’s largest market — FX mechanics, currency pairs, exchange-rate systems, parity conditions and hedging.',
      topics: currencies,
    },
    {
      id: 'bmc-fi',
      title: 'Fixed Income',
      summary:
        'Bonds end to end — pricing, yield, duration, convexity, credit and the yield curve.',
      topics: fixedIncome,
    },
    {
      id: 'bmc-eq',
      title: 'Equities',
      summary:
        'Shares from IPO to analysis — market cap, indices, valuation ratios, and fundamental vs technical analysis.',
      topics: equities,
    },
  ],
};
