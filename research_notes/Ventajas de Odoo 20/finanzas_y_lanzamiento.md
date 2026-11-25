# Odoo 20: finance apps, Spanish localization and official launch messages

Research date: 2026-11-25. Primary source is the official release notes page (https://www.odoo.com/odoo-20-release-notes), downloaded and read in full as text. Feature names below are the exact headings Odoo uses on that page. "(available from 19.0)" / "(available from 18.0)" is Odoo's own marker that the feature was backported, so it is **not exclusive to Odoo 20**; I flag those items.

## 1. When was Odoo 20 released and what did Odoo officially highlight?

### Takeaway
Odoo 20 was unveiled by Fabien Pinckaers in the opening keynote of Odoo Experience 2026 in Brussels on 24 September 2026; the official release notes are dated "September 2026". The official headline theme is agentic AI (AI agents that create/update records, run from automations, MCP connectivity), with all AI features now billed through IAP credits. Odoo published no quantitative speed benchmarks in the release notes.

### Cited Findings
**Launch facts**
- Official release notes page header reads "Odoo 20 · Release Notes · September 2026"; sections: General, Technical, Industries, Accounting, Localizations, AI, then per-app sections (Documents, Expenses, Sign, Spreadsheet, etc.) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- Odoo Experience 2026: 24-26 September 2026, Brussels Expo; opening keynote 24 Sept, 8:30, by Fabien Pinckaers (founder & CEO), titled "Start your journey on Odoo 20"; event page says the new version "will be released during the event" — [Odoo Experience 2026 event page](https://www.odoo.com/event/odoo-experience-2026-9099) (title/time also reported by [Ruetech](https://www.ruetech.com/en/guides/odoo-20-whats-coming/))
- Odoo 20 "officially presented at the open keynote on September 24, 2026"; regional preview events in the USA, Mexico, Kenya and India earlier in September — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75); same reveal date and preview cities in [Much. Consulting (secondary)](https://muchconsulting.com/blog/odoo-2/odoo-experience-2026-185)
- Odoo turned 20 years old in 2026; Odoo 20 "introduced hundreds of changes across more than 50 apps" (author's wording, not a keynote quote) — [Much. Consulting](https://muchconsulting.com/blog/odoo-2/odoo-experience-2026-185)
- End of standard support reportedly September 2029 (secondary claim citing Odoo docs; not verified by me) — [Nexuro Digital](https://www.nexuro-digital.com/en/blog/the-nexuro-blog-1/odoo-20-the-key-new-features-from-odoo-experience-2026-131)

**Official AI section (exact headings, release notes)** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "IAP credits required": "All AI features now need credits, which can be bought via IAP."
- "Agentic automation": agents can update themselves; "Agents can be summoned by automated and scheduled actions"; automation chats can be reviewed; agents get role-based avatars.
- "AI agents: create records" (including from an uploaded PDF of instructions), "AI agents: update records", "AI agents: ask questions about a file", "AI agents: send files", "AI agents: image generation", "AI agents: filter by time period", "AI agents: reprocess sources", "AI agents: feedback" (live status instead of "AI is thinking").
- "Connect Odoo to anything": "Connect to your database via MCP (model context protocol)."
- "Topics renamed to skills"; "Stored conversations" (up to 30 days after last message); "Tool call limit confirmation"; "Interactive agent responses"; "Model-bound agents"; "Default prompts"; "Voice interaction"; "Preview cards in live chat"; "AI chat request options".
- Finance-specific AI: "AI-powered financial insights" — "Ask the AI assistant for insights into your company's finances based solely on the accounting data in your database." Documents: "Rename files with AI".

**Business/keynote-adjacent numbers (secondary sources only)**
- Attendance "grew by 190%, from 40 thousand to over 116 thousand participants" (across five venues); 950+ sessions (+138%); 770+ exhibitors (+93%); ~€900 million revenue expected in 2026 (+45% YoY), target €1 billion in 2027; ~8,000 employees, target 10,000 by 2027 — attributed by the author to "Odoo's official report published during the event" — [Solvve recap](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75). I did not find the underlying Odoo report.
- Pricing announced alongside the release: first European price change in four years; Custom Plan +20% for new users; existing Custom Plan users capped at +7%/year at renewal; new "Light Users" from €7.90/month depending on country (requires Odoo 20 + new Enterprise agreement); One-App Free and Standard unchanged — [Much. Consulting](https://muchconsulting.com/blog/odoo-2/odoo-experience-2026-185). Solvve instead says Custom plan rose "20–31%" and agentic AI is tied to the Custom plan — [Solvve](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75) (the two secondary sources differ on the range).

**Performance claims**
- Only qualitative statements in the official notes: Accounting "Optimized data entry" — "Encoding is now faster thanks to quick reconciliation model shortcuts and statement transaction batching"; Appointments "Various performance improvements… have made every part of the booking process faster"; Calendar sync "significantly faster and more reliable"; Spreadsheet "Reduced JSON file size". No percentages or benchmarks — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)

### Inferences
- The launch narrative is "AI agents that act" plus consolidation/simplification (removal of account groups, record rules, Field Service app merged into Planning, Employee Expenses menu removed). For a Spanish-language blog, the safe headline facts are: launch 24 Sept 2026 at Odoo Experience, AI agents + MCP, AI billed via IAP credits.
- Any "X% faster" claim for Odoo 20 circulating online is not backed by the official release notes.

### Gaps
- No keynote transcript/video summary with direct Pinckaers quotes was found; keynote numerical claims (attendance, revenue) come only from partner recaps.
- Some partner lists mention "OWL 3.0", native GraphQL, POS Bluetooth printing; [Aarav Solutions](https://www.aaravsolutions.com/odoo-20-release-notes-whats-new-what-it-costs-and-how-to-upgrade/) notes these are not in the release notes. Treat as unconfirmed.
- Official odoo.com pricing page was not checked directly.

## 2. Which accounting / invoicing / expenses / documents / spreadsheet / sign features are new in Odoo 20?

### Takeaway
The official Accounting section lists ~45 items; the biggest structural changes are "Parent accounts" (replace account groups; account codes optional), "Bank consistency" (bank-impacting entries must come from bank transactions), renamed payment statuses ("In Process"→"Paid", "Paid"→"Reconciled"), "Pay bills from Odoo" via PISP, "Bill line prediction", "Matching Rules", "Run Auto Reconciliation", "Split items on invoices", "Simplification of asset models" and "AI-powered financial insights". Expenses now flow as draft bills.

### Cited Findings
All items below: [Odoo 20 Release Notes, Accounting section](https://www.odoo.com/odoo-20-release-notes) unless otherwise noted. Edition (Community/Enterprise) per [iVenture Team's 45-item breakdown (secondary)](https://iventureteam.com/odoo-20-release-notes/accounting/).

**Bank reconciliation**
- "Bank consistency": "All journal entries impacting bank accounts must now originate from bank transactions, preventing manual journal mismatches." Statement validation feedback refined to fix balance inconsistencies.
- "Bank reconciliation summary report": reconciled and unreconciled transactions based on the end date of the selected period (Enterprise).
- "Run Auto Reconciliation": manually retrigger automatic bank reconciliation (Enterprise).
- "Bill/invoice matching rules": configure "Matching Rules" for payment tolerance and matching order in automatic reconciliation.
- "Manual reconciliation": now possible on any account; checkbox "Allow Reconciliation" renamed "Payment Reconciliation".
- "Reconciliation with multiple accounts" (listed by iVenture as Enterprise enhancement) — [iVenture](https://iventureteam.com/odoo-20-release-notes/accounting/)
- "Analytic distribution for write-offs": analytic distribution on write-offs during reconciliation.
- "Optimized data entry": quick reconciliation model shortcuts and statement transaction batching.
- "Bank synchronization: Syncfy": third-party bank sync provider for Latin America (iVenture: not verified in source code). Australia: new open banking via Basiq (localization section).
- "Bank statement attachments" visible in both Accounting and Documents (Documents section).

**Payments**
- "Intuitive payment status": "In Process" → "Paid", "Paid" → "Reconciled"; "Mark as Reconciled" button moved to the action menu "to encourage linking payments with real bank entries".
- "Pay bills from Odoo": "Pay bills (individually or in batches) with a single signature directly from Odoo via the new PISP (payment initiation service providers) interface" (Enterprise).
- "Prevent double payments in the payment wizard": detects pending ("Paid") payments, deducts them from amount due.
- "Conversion rates" displayed when registering foreign-currency payments.
- "Withholding tax on payment improvements": "Amount Due", "Withhold Due", "Net Due"; pay withholding only / payment only / total.
- "PAIN version setting" moved from journal to payment method level (SEPA outgoing payments).
- Online Payments app: "Wire transfers" automatically confirmed from bank transactions; "Pay on Invoice provider"; "Pricelist and amount restriction" for providers.

**Invoicing / bills**
- "Bill line prediction": suggests product, account, tax, analytic distribution and vehicle from bill history and label (iVenture: partly confirmed in code).
- "Improved duplicate detection": red (highly likely duplicates) and yellow (to investigate) warnings — **marked "(available from 19.0)"**, so backported.
- "Split items on invoices" (Enterprise); "Reset to Draft action in list views"; "Download invoice attachments" (zip of PDF/XML); "Invoice email attachments" (from Documents/chatter); "Multiple invoice details" when sending many invoices; "Customer invoice reminders" (manual + automatic) and "Reminder workflow" simplified; "Bill options display".
- "Purchase order matching" improved ("Auto-Complete", match summary, unmatch); "Intercompany purchase order matching".
- "Onboarding improvements": "ease e-invoicing setup and tax configuration".
- "Peppol global location identifiers" (GLN on delivery contacts) — **"(available from 17.0)"**, backported.
- "Taxes in fiscal positions": taxes only allowed in their fiscal positions; default tax removed if not in the invoice's fiscal position even without replacement.

**Chart of accounts, assets, closing, reporting**
- "Parent accounts": "Account groups have been replaced by parent accounts… Account codes are now optional."
- "Simplification of asset models": asset models replaced by depreciation models; config consolidated on asset accounts. "Asset depreciation": rates and float numbers allowed.
- "Cumulative Translation Adjustment (CTA)" line on balance sheet, trial balance, general ledger (Enterprise).
- "Exchange entries": exchange gains/losses consolidated into a single line per invoice.
- "Annual report layout" uses company document layout; "Multi-ledger consolidation" journals now included instead of excluded.
- "Inventory valuation" accrual entries from closing report; "Inventory valuation: COGS update" retroactive; "Valuation without Inventory".
- "Cash journal entry hashing" (security); "Accounting Firms mode settings" more flexible.
- "Professional percentage for receipts" — **"(available from 19.0)"**.
- "Currency exchange rate providers": Saudi Central Bank new; Azerbaijan, Georgia, Kazakhstan, Uzbekistan banks marked "(available from 19.0)". "New currency: Caribbean Guilder" marked "(available from 18.0)".

**Tax reports (localization examples; none for Spain)**
- France: PCG-compliant annual report templates ("plaquettes"); annuaire endpoint detection by SIREN (French e-invoicing). Italy: "causale" and "allegati" on e-invoices. US: redesigned Sales Tax Report. Romania D300 XML; Vietnam 01/GTGT XML; Mexico NIF B-6 balance sheet — [Odoo 20 Release Notes, Localizations](https://www.odoo.com/odoo-20-release-notes)
- Accounting Dashboard shows number of invoices pending e-invoicing with bulk send (listed in a localization entry, not the generic section) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)

**Expenses**
- "Employee Expenses menu item" removed: "Approved expenses now generate draft bills in the default expense journal, allowing accountants to filter, review, and post them alongside standard vendor receipts" (Accounting section).
- Expenses section: "Consolidated expenses report"; "Expense limits per job position" (managers can cap at authorized limit before approval); "Salary rules for expense products".

**Documents**
- "Access right management" (user groups); "Auto-sort fleet documents" by license plate; "Bank statement attachments"; "Branch management" in Accounting–Documents bridge; "Document request upload notification"; "Employee documents" (payslips folder, integration on by default); "Markdown previews and thumbnails"; "Multi-file document request"; "Rename files with AI".

**Spreadsheet**
- "Bubble charts", "Calendar charts", "Calculated columns" in dynamic lists, "Pivot tables" (styling, domain filtering, nested/tabular views), "Named range", "Global filters" (default operators, filters from data source properties), "Regex formulas" (REGEXTEST, REGEXREPLACE), "Disable automatic recalculation" (F9), "Lock sheets", "Charts" (annotations, Data Analysis chart suggestions, pie colors, axis min/max), "Column statistics", "Conditional formatting by date", "Curly brackets" arrays, "Cell value orientation", "Reduced JSON file size".

**Sign**
- "Automated signature requests" (via automated actions, fixed or role-based signers); "Identity verification via itsme®" and "Qualified Electronic Signature via itsme®" in over 30 European countries (QES has handwritten-signature equivalence under eIDAS); "Non-latin alphabets" (Cyrillic, Devanagari, Arabic; 40+ new countries); "Record updates" (Sign fields write back to Odoo records); "Sign templates" (CC recipients, bulk answer export to spreadsheet, replace document without recreating template); "Send signature requests from activities"; "Reorder signers"; "Create new fields on the go"; "Mobile and touchscreen support"; "Improved progress tracking"; "Sign mode options menu"; "Signed PDFs: bookmarks and settings" — **"(available from 18.0)"**.

### Inferences
- Several changes are breaking for existing users/partners (parent accounts replacing account groups, asset model → depreciation model, payment status renames, bank-consistency rule, expenses becoming draft bills, taxes stripped by fiscal position). These are migration talking points, not just "advantages".
- Spain-relevant generic features: PISP bill payment and PAIN/SEPA setting, matching rules, duplicate detection, itsme QES (whether itsme covers Spain was not verified).

### Gaps
- Release notes do not say which banks/countries the PISP "Pay bills from Odoo" interface supports (e.g. whether Spanish banks are covered).
- itsme coverage for Spain specifically not confirmed.
- I did not verify each item against the Odoo 20 source code; iVenture flags "Syncfy" as not verified and "Bill line prediction", "Onboarding improvements", "Optimized data entry", "Reminder workflow" as only partly confirmed.

## 3. What changed in Odoo 20 for Spain (Verifactu, SII, TicketBAI, Facturae, B2B e-invoicing)?

### Takeaway
The official Odoo 20 release notes contain **no Spain entry** in the Localizations section. The 20.0 Spain documentation is essentially the same as 19.0 for Veri*Factu, SII, TicketBAI and Facturae/FACe; differences are module-list changes (consolidated report modules, newly documented Libro IVA PoS, Real Estates/Mod 347 and Amazon connector modules). On the regulatory side, Hacienda announced on 5 Oct 2026 an intended postponement of Verifactu to October 2028 (not yet in the BOE as of the sources), while B2B e-invoicing dates are fixed: 6 Oct 2027 (>€8M turnover) and 6 Oct 2028 (rest).

### Cited Findings
**Odoo 20 for Spain**
- Localizations section lists (among others) Argentina, Armenia, Australia, Azerbaijan, Bahrain, Bangladesh, Belgium, Brazil, Canada, Chile, China, Colombia, …, France, Italy, Mexico, …, United Kingdom, USA, Uruguay, Uzbekistan, Vietnam — **no Spain** entry, and no occurrences of "Veri*Factu", "TicketBAI", "Facturae" (the only "SII" mentions refer to Chile's SII) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes) (full-text search of the page done 2026-11-25)
- iVenture's 45-item accounting analysis also finds no Spain-specific change — [iVenture](https://iventureteam.com/odoo-20-release-notes/accounting/)
- Odoo 20.0 Spain docs list modules: Spain - Accounting (PGCE 2008), Spain - Accounting Reports, Spain - Facturae EDI, Spain - Intrastat Declaration, Spain - Point of Sale + TicketBAI, Spain - Accounting Reports Libro IVA PoS (`l10n_es_reports_pos`), Spain - SII EDI Suministro de Libros, Spain - TicketBAI, Spain - Veri*Factu (`l10n_es_edi_verifactu`), Spain - Veri*Factu for Point of Sale, Spain - Real Estates (`l10n_es_real_estates`, mod 347 real-estate data), Spain - Amazon Connector (`l10n_es_sale_amazon`) — [Odoo 20.0 docs: Spain](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html)
- Diff vs 19.0 docs: 19.0 listed separate "Spain - Accounting Reports (2024 Update)" (`l10n_es_reports_2024`, Rectificación for Modelo 303) and "(2025 Update)" (`l10n_es_reports_2025`, tax return functionalities); 20.0 lists a single "Spain - Accounting Reports" and newly lists Libro IVA PoS, Real Estates, Amazon Connector — [19.0 docs](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/spain.html) vs [20.0 docs](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html). (Docs listing a module does not prove the module is new in 20.)
- Tax reports in 20.0 docs: Mod 111, 115, 130, 303, 347, 349, 390; Libros de IVA exportable as XLSX ("VAT Records Books (XLSX)") — [20.0 docs](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html)
- Veri*Factu in 20.0 docs (same flow as 19.0): Odoo provides a downloadable "declaración responsable"; enable in Accounting/Invoicing settings, upload certificate; test mode by default ("Test Environment"); on Send, JSON record generated and stored as a Veri*Factu document; delayed sends retried by scheduled action due to AEAT waiting periods; Veri*Factu QR on invoice PDF and POS receipts; POS orders send automatically once paid — [20.0 docs](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html); same feature documented for [19.0](https://www.odoo.com/documentation/19.0/applications/finance/fiscal_localizations/spain.html) → **Veri*Factu support predates Odoo 20**.
- Docs state Veri*Factu is "mandatory for most taxpayers in Spain, except for those who use the SII system or are under a regional tax regime (i.e., TicketBai)"; TicketBAI supported for the three Basque regions; FACe via Facturae EDI module — [20.0 docs](https://www.odoo.com/documentation/20.0/applications/finance/fiscal_localizations/spain.html)

**Regulation: Verifactu deadlines**
- Binding dates under Real Decreto-ley 15/2025 (BOE 3 Dec 2025): 1 Jan 2027 for Impuesto sobre Sociedades taxpayers; 1 Jul 2027 for the rest (autónomos etc.) — [SuperContable, 9 Oct 2026](https://www.supercontable.com/boletin/H/articulos/Verifactu_se_aplaza_octubre_2028_incertidumbre_anuncio_sin_norma_con_elecciones.html); [Conversor IAE/CNAE guide](https://www.conversoriaecnae.es/guia/verifactu/plazos-2027)
- Ministerio de Hacienda press note, 5 Oct 2026: "proceder al aplazamiento de las obligaciones pendientes de aplicación del Real Decreto 1007/2023… hasta octubre de 2028, para hacerlas coincidir con la obligatoriedad de la factura electrónica para empresarios y profesionales cuya facturación anual no supere los 8 millones de euros"; later a further change will converge scope/technical aspects "teniendo en cuenta los futuros requisitos de reporte digital derivados de ViDA"; integrity/inalterability requirements kept "en términos sustancialmente equivalentes" — [Hacienda nota informativa (PDF)](https://www.hacienda.gob.es/sgt/gabsehacienda/nota-informativa-verifactu.pdf)
- Status: announced as "previsión de modificación"; not published in BOE as of 9-13 Oct 2026; 2027 dates stay legally binding until a norm is published — [SuperContable](https://www.supercontable.com/boletin/H/articulos/Verifactu_se_aplaza_octubre_2028_incertidumbre_anuncio_sin_norma_con_elecciones.html); similar in [Afiris ("pendiente publicación")](https://www.afiris.es/verifactu-aplazamiento/). Conflict: [Grupo Aseguranza](https://www.grupoaseguranza.com/noticias-de-seguros/gobierno-aplaza-entrada-vigor-verifactu-hasta-octubre-2028) says the Consejo de Ministros approved a Real Decreto-ley — not corroborated by other sources found.

**Regulation: B2B e-invoicing (Ley Crea y Crece development)**
- Orden HAC/1028/2026, de 2 de octubre, published BOE 05/10/2026, in force 06/10/2026, issued under Real Decreto 238/2026, de 25 de marzo (deferred application system). Obligations: **06/10/2027** for businesses with turnover > €8M (issue, send, receive e-invoices and report invoice/payment status); **06/10/2028** for all other businesses/professionals; **06/10/2029** status reporting for individuals and entities under income attribution — [AEAT: Orden HAC/1028/2026](https://sede.agenciatributaria.gob.es/Sede/iva/novedades-iva/novedades-normativa-2026/orden-hac-1028-2026-2-electronica.html); RD 238/2026 on [BOE](https://www.boe.es/eli/es/rd/2026/03/25/238)
- The public e-invoicing solution must be available by 6 Aug 2027 at the latest (one secondary source; not verified on AEAT page) — via search summary of [Finreg360](https://finreg360.com/alerta/factura-electronica-entre-empresarios-y-profesionales-cuenta-atras-para-su-aplicacion-obligatoria/)

### Inferences
- Odoo 20 brings no announced Spain-specific novelty; Spanish advantages of Odoo 20 come from generic accounting changes plus continued Veri*Factu/SII/TicketBAI/Facturae support already present in 19.
- With Verifactu likely moving to Oct 2028 (aligned with B2B e-invoicing for ≤€8M companies) and B2B e-invoicing for >€8M from 6 Oct 2027, Odoo 20 (support to ~2029) would be the version in use when these obligations begin — but Odoo has not announced support for the Spanish public B2B e-invoicing solution or its invoice/payment status reporting.

### Gaps
- No Odoo statement found on support for the Spanish B2B e-invoicing system (Orden HAC/1028/2026 formats, public solution, payment-status reporting) or on Peppol for Spain.
- No Spain-specific SII or TicketBAI changes found for Odoo 20 (release notes silent; docs unchanged).
- Whether Libro IVA PoS, Real Estates and Amazon connector modules are new in 20 or only newly documented could not be confirmed without checking the source code.
- BOE publication of the Verifactu postponement after mid-October 2026 not checked; verify on BOE before publishing.

## 4. Any quantitative claims (speed, automation rates, AI) with their source?

### Takeaway
Official Odoo 20 materials contain essentially no quantitative performance or AI-automation figures; numbers circulating are event/business stats and pricing from partner recaps.

### Cited Findings
- Official numeric items: AI conversations stored "up to 30 days"; itsme in "over 30 European countries"; Sign alphabets "covering over 40 new countries"; GrabFood in eight countries. Speed claims are qualitative only ("Encoding is now faster…", "significantly faster" calendar sync) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- Event numbers: 116K+ participants (+190% from 40K), 950+ sessions, 770+ exhibitors; ~€900M 2026 revenue (+45%), €1B target 2027; ~8,000 employees — [Solvve recap](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75) (attributed to an Odoo report, not seen directly)
- Pricing numbers: Custom +20% new users, max +7%/yr existing, Light Users from €7.90/month — [Much. Consulting](https://muchconsulting.com/blog/odoo-2/odoo-experience-2026-185); "20–31%" per [Solvve](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75)
- "50+ apps" changed — [Much. Consulting](https://muchconsulting.com/blog/odoo-2/odoo-experience-2026-185); [Brainvire](https://www.brainvire.com/insights/odoo-20-new-features/)

### Inferences
- Any blog article should avoid stating speed percentages or automation rates for Odoo 20 unless a new official source appears.

### Gaps
- No official AI accuracy/automation rate (e.g., % of bills auto-encoded, % reconciliation automated) found for Odoo 20.
- No benchmark data (load times, server performance) published by Odoo for 20 was found.
