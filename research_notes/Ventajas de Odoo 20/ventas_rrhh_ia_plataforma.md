# Odoo 20 (Sept 2026): what's new in sales, marketing, services, HR, AI and the platform compared with Odoo 19

Primary source: the official Odoo 20 release notes at https://www.odoo.com/odoo-20-release-notes (header "Odoo 20 Release Notes, September 2026"). I downloaded the full page and read the relevant sections. Feature names below are Odoo's own headings, quoted exactly. Where an entry says "(available from 19.0)" or "(available from 18.0)", Odoo marks the feature as backported, so it is not exclusive to 20. Secondary sources are labelled.

Release context: Fabien Pinckaers presented Odoo 20 at the Odoo Experience 2026 open keynote in Brussels on 24 Sept 2026. The event ran 24–26 Sept — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75); [Macopedia (secondary)](https://macopedia.com/en/blog/news/odoo-experience-2026-brussels)

## Which features are new in Odoo 20 for each area? (exact Odoo names)

### Takeaway
Odoo 20 is a broad release of incremental changes, not a rewrite. The biggest changes in the areas covered here are:
- AI agents that can act on records.
- Field Service merged into Planning.
- Work entries removed from Payroll.
- Offline mode.
- A drag-and-drop Marketing Automation "Workflow builder".
- Many CRM, Sales and Website improvements.

The official page has no SMS Marketing or Surveys section, even though both appear in its app menu. Its only Subscriptions entry is "Loyalty programs".

### Cited Findings

**CRM** — all from [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Lead distribution": salespeople's auto-assignment rules can be set to "Always in rotation," "In rotation with a limit," or "Out of rotation."
- "Lead generation": "now uses the Dun & Bradstreet database of companies instead of Clearbit, providing better worldwide coverage and increased data quality". Generate Leads also suggests more ways to generate leads.
- "Pipeline switcher": a dropdown switches between teams' pipelines.
- "Upsells from lead": a lead shows the customer's existing subscriptions. Upsell and renewal quotations can be created from them and are linked to the opportunity automatically.
- "Hidden address info": address details are hidden on leads to push users to create a contact.
- Related items in other apps: Project "Projects from opportunities". General "Multiple partner identifiers" (DUNS and country IDs, validated). Contacts "contact enrichment" and "hierarchical view".

**Sales** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Dashboard": a Sales dashboard at the top of the quotation and order lists, with quick-filter buttons.
- Commissions:
  - "Payment-based commissions": commissions are calculated on the amount paid.
  - "Manager commissions": individual achievements and targets roll up into managers' and split commissions.
- "Description-only sales order lines": lines no longer need a product. A new "Mandatory Product" setting enforces one.
- "Editable margins": editing the margin on a line recomputes the price.
- "Editable product variant price".
- Pricing rules:
  - "Periodic pricing": pricelist rules, including surcharges, by period or day of the week.
  - "Price rules per packaging type".
  - "Fixed Price pricelists": attribute extra prices now apply on top of Fixed Price rules.
  - "Pricelist report improvements".
- "Quotation sections":
  - Updating a section's quantity or unit updates all its products.
  - Sections can have multi-line descriptions.
  - Sections can be saved as templates.
- "Quotation templates":
  - A template can be picked when creating the order.
  - New subsections and the options "Hide Price" and "Hide Composition".
  - Products can be added from the product catalog.
  - A "Save as template" action on any order.
- "Charge overages": prepaid-service overages are charged in the invoicing wizard.
- "Fixed prepayment amounts".
- "Mark orders as fully invoiced".
- "Loyalty point expiration".
- "Single-use discount codes".
- "Services & Material": fixed-price and cost-based re-invoicing.
- "Ship orders without Inventory".
- "Sales order line numbering".
- "Product images" on orders and PDFs.
- "Sales order portal page" (redesigned).
- "Stacked fields on sales order lines".
- "Sales order creation from purchase orders".
- Marketplace integrations "Lazada" and "TikTok", both marked "(available from 19.0)", so they are backported.
- General: a "Tax included/excluded on orders and invoices" switch on sales orders, purchase orders and invoices.

**Subscriptions** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- The Subscriptions section has a single entry: "Loyalty programs: Create loyalty rules and rewards for subscriptions."
- Subscription-related changes in other apps:
  - Rental "Simplified and unified pricelists": "Sales, Subscription, and Rental prices have all been unified in a single 'Prices' tab using the standard pricelist engine."
  - CRM "Upsells from lead".
  - eCommerce "Donations": recurring donations through subscriptions.
  - Planning "Field Service: customer equipment": maintenance-contract coverage through Subscriptions.

**Email Marketing** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Click tracking": shows which recipients clicked which links.
- "Conditional content": blocks shown per recipient based on conditions.
- "Dynamic mailing lists": recipients are calculated when the mailing is processed.
- "Employee/supplier mailings".
- "Favorite blocks".
- "Full-screen editing".
- "Link tracking": can be disabled in the HTML editor.
- "Mailing template library".
- "New fonts", with a fallback system.
- "New templates and blocks".
- "Product and event snippets".
- "Social media accounts".
- "UTM reference": UTM data now maps to a new "Reference" field instead of creating sources on the fly.
- "Contact management".

**Marketing Automation** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Workflow builder": "A drag-and-drop workflow builder has been added, offering a more visual way to create journeys."
- "AI-assisted campaign creation".
- "Event-based triggers": page visits, list subscriptions and more.
- "New triggers and actions":
  - Triggers by event, date, anniversary, webhook or on demand.
  - New actions "Collect new activity" and "Wait for a value".
- "Webhook integration": adds participants in real time.
- "Mailing template library".

**SMS / WhatsApp / Social / Marketing Card / Live Chat** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- SMS (in General, "Text messages"): "Schedule text messages and insert dynamic placeholders in SMS templates." There is no separate SMS Marketing section.
- WhatsApp:
  - "Default recipients on templates".
  - "Interactive message templates".
  - "Named parameters in templates".
  - "Number blocking".
  - "Simplified authentication process".
- WhatsApp in other apps:
  - eCommerce "WhatsApp abandoned cart follow-up".
  - Website "WhatsApp widget snippet".
  - Planning "Send shifts via WhatsApp".
  - Point of Sale "WhatsApp and SMS self-order receipt".
- Social Marketing:
  - "AI assistant".
  - "Facebook and Instagram stories".
  - "Personal LinkedIn account".
  - "Platform-specific post scheduling".
  - "Schedule first comment".
  - "Add mentions in social media posts".
  - "Image display order".
- Live Chat "Connect social media messaging": "Connect Messenger and Instagram DMs directly to live chat teams so they can reply from Odoo."
- Marketing Card: "Event app integration" (a "Send cards" button), "Language support" and "Default target URLs".

**Website** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "AI Website Assistant". In Odoo's words, it "can help you vibe code your website by choosing and editing snippets, adding images from Unsplash or generating them, retrieving content on the web". It can also:
  - Create new webpages.
  - Draw inspiration from other websites.
  - Use database records such as products or events.
  - Add interactive elements: counters, toggles, tabs, animations.
  - Create or edit webforms.
  - Edit menus.
- "AI-generated content indicator" in the editor.
- "Website configuration wizard": an improved industry list with synonym matching, plus "AI-powered choices for positioning (e.g., luxury versus eco-conscious)".
- "llms.txt": "Create an llms.txt file in the website settings to help large language models (LLMs) better understand and use website content."
- "Structured data": "now added to webpages' HTML by default to improve SEO and create Google Rich Results."
- "SEO": "Mobile performance has been improved via adaptive image sizing (srcset)", and duplicate content on paginated pages is prevented.
- Tracking and analytics:
  - "Google Tag Manager (GTM)": a single identifier field covers GA or GTM.
  - "Visitor tracking": efficiency improved.
  - "Link tracker: QR codes".
- Editor and layout:
  - "Website editor UI/UX".
  - "Sidebar revamp".
  - "Mega menu".
  - "Block preview for mobile devices".
  - "Age verification popup".
  - "Countdown snippets".
  - "Animated number building block".
  - "Dynamic carousels".
  - "Vertical video format".
  - "Customizable portal cards".
  - "Partners page".
  - "Redirections".
- Themes: "Several new themes have been added".

**eCommerce** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "AI-assisted product editing": "Ask the AI assistant to generate product images or to change a product name, price, or description from the Shop page."
- "Automated cross-sell suggestions": generates accessory, optional and alternative products.
- "Automated review requests".
- "Return management": returns from the customer portal.
- "Preferred delivery date".
- "Minimum product quantity".
- "Stock-based product publishing".
- "Simplified inventory management": "without installing the Inventory app".
- "Taxes included/excluded price display": set at pricelist level, so B2C and B2B can share one site.
- "Range filter for attribute values".
- "Ribbon filters": "On Sale" and "In Stock".
- "Products grid building block".
- "Loyalty progress bar".
- "Donations": recurring donations through subscriptions.
- "Email gift card directly to recipient".
- "Order dashboard".
- "Pricelist selector" on all pages.
- "Google Analytics events" (GA4 compliance).
- "WhatsApp abandoned cart follow-up".
- "Withdrawal requests".
- "Standalone categories".
- "Prevent sales by category".
- "Mondial Relay handled via Sendcloud": the standalone module was removed.

**Project** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Assign project roles".
- "Assign tasks to portal users".
- "Collaborators separated from followers".
- "Printable task schedule" (from the Gantt view).
- "Projects from opportunities".
- "Task tracking in user portal".
- "Mobile: improved task header design".
- "Profitability report": the project dashboard report was REMOVED. It is replaced by new dedicated budget and actual/projected margin reports.

**Timesheets** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "ActivityWatch integration": "Automatically track your device activity and turn it into timesheets while keeping your data private."
- "Log timesheets from anywhere": a timer in the top menu.
- Timesheet assistant rules:
  - "Timesheet assistant: sharing rules".
  - "Timesheet assistant: side activities".
  - "Timesheet assistant: time thresholds".
- Dashboards: "Billing targets vs billable time" in the Timesheets dashboard.

**Helpdesk** (three entries) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Filter unanswered tickets".
- "Reminder email before auto-closing tickets".
- "Similar ticket detection": "Detect similar helpdesk tickets using AI to provide teams with suggested answers."
- The 20.0 docs also list an "AI in support workflows" page — [Odoo 20.0 AI docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai.html)

**Planning (now including Field Service)** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Field Service merged into Planning": "The Field Service app has been discontinued. Its features are now integrated into the Planning app."
- New Field Service features inside Planning:
  - "Field Service: auto plan" (uses customer location).
  - "Field Service: customer equipment".
  - "Field Service: customer ratings".
  - "Field Service: intervention confirmation email".
  - "Field Service: live map" (technician locations).
  - "Field Service: map view".
  - "Field Service: product barcodes".
  - "Field Service: report" (shows Studio fields).
  - "Field Service: routing preferences" ("ordered mode" or "optimized mode", the shortest path).
  - "Field Service: track customer history".
  - "Field Service: travel fees" (distance-based or fixed).
  - "Field Service: website form".
  - "Field Service: worksheets" (templates now use property fields instead of Studio fields).
- Planning features:
  - "Gantt view: travel times" (Mapbox).
  - "Link shifts to tasks".
  - "Multiple resource assignment".
  - "Priority shifts" (Auto Plan schedules higher priority first).
  - "Schedule shifts from side panel".
  - "Send shifts via WhatsApp".
  - "Employee-specific materials".

**Appointments** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Accessory products for appointments".
- "Appointment rescheduling".
- "Booking capacity control".
- "Maximum capacity override".
- "Customer feedback".
- "Default party size" (two guests).
- "Performance improvements": "optimized resource and date availability calculations, have made every part of the booking process faster" (no figures).

**HR: Employees** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Employee directory": in multi-company databases, all users can see the employees of all companies.
- "Salary simulation" from the employee profile.
- "Remote Work": the module is merged into the Employee app.
- "Single-signer HR documents".
- "Variable working schedule".
- Documents: "Employee documents" folder restructure, with payslips in a dedicated folder. The Employees–Documents integration is now enabled by default.

**HR: Recruitment / Referrals** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Improved integration" between applicants, talent pool and job positions, with "more accurate talent-to-job matching".
- "Job form visibility conditions".
- "Matching score filter".
- "View talents from job position".
- Referrals: "Contact outreach tracking".

**HR: Payroll** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Work entries removal": "Work entries and the Planning-Payroll integration have been removed. Work entry types and time off types have been merged." This is a major structural change.
- "Pay run workflow": a step-by-step process.
- "Dashboard" (revamped around warnings).
- "Chatter on pay runs".
- "Net to gross simulation".
- "Salary indexation" (by percentage and/or fixed amount).
- "Salary rules": now allowed in multiple categories and structures.
- "Payslip sending options" (on confirmation, on payment, or manually).
- "Payslip UX".
- "Test print pay runs".
- "Time entry exports" (standard format).
- "Working schedules" (time per day without start and end times).
- "Employee type per company or branch".
- "Contract date modification" (blocked if existing payslips are affected).
- "Driver assignment" (Fleet sync).
- Expenses: "Expense limits per job position", "Salary rules for expense products" and "Consolidated expenses report".

**HR: Time Off** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Calendar day vs working day deductions".
- "Minimum amount for time-off requests".
- "Overview: all employees".
- "Prevent app use" (a new "No" user right).
- "Public holidays": the "Public Holiday" time type is on by default for all localizations, and holidays can be loaded for the year by country.

**HR: Appraisals** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Bulk actions".
- "External 360 feedbacks": "Send 360 feedback requests to any contact, not just employees".
- "Next appraisal date" (editable by managers).
- "Parent goal progression".
- "Smart template selection" (by department).

**HR: Attendances** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes) (secondary summary of the same page via WebFetch)
- Automatic check-out time.
- eSSL and Mantra biometric integration.
- Overtime analysis report.
- Photo at check-in.
- Public holiday overtime rules.
- Single check-in mode.

**Discuss** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Call transcripts": "Record Discuss calls and get summaries of what was said."
- "Polls".
- "Channel categories".
- "Favorite channels".
- "Mark notifications as unread".
- "'On a call' status" (integrated with the Phone app).
- General chatter changes:
  - "Pin messages in the chatter".
  - "Chatter filter" (conversations or tracked changes).
  - "CC email recipients".

**Phone (VoIP)** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Call flow designer" (PBX features: extensions, call menus, time- and location-specific steps).
- "Call transfer to another device".
- "Simultaneous calling".
- "Choose outgoing number".
- "Floating widget".
- "Auto-fill and auto-log".
- "Linphone" (provisioned by QR code).
- "Push notifications".

**Studio** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- "Report editor": "A new user interface has been introduced for the report editor". It warns when an element is shared with other reports.
- "Automation rules: activity plans".
- "Form view customization" (reorder buttons, smart buttons and tabs).
- "Kanban stage customization".
- "List view column width" (min and max).
- "Many2Many fields in PDF reports".
- "Report translations".
- "User-friendly technical names".
- "Warning for past or future dates".
- General: the Gantt "Scheduling" option can be enabled through Studio.

**Other productivity apps** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- Sign:
  - "Automated signature requests" (from automated actions).
  - "Identity verification via itsme®" and "Qualified Electronic Signature via itsme®" ("in over 30 European countries"; QES has "legal equivalence of a handwritten signature under eIDAS").
  - "Non-latin alphabets" ("over 40 new countries").
  - "Record updates" (Sign fields write back to records).
  - "Mobile and touchscreen support".
- Dashboards: "Private dashboards", "Favorite filters", "Fiscal year date filter" and "Region selector for geo charts".
- Documents: "Rename files with AI", "Multi-file document request", "Access right management" (user groups) and "Markdown previews and thumbnails".
- Spreadsheet (selected): "Calculated columns", "Regex formulas", "Spill range operator", "Lock sheets", "Bubble charts", "Calendar charts", "Disable automatic recalculation" and "Reduced JSON file size".
- ESG: "Assign emission factors with AI".

### Inferences
- In this scope, the most disruptive changes for existing Odoo 19 customers are:
  - Field Service is discontinued as an app and merged into Planning.
  - Payroll work entries are removed and merged with time off types.
  - The Project profitability report is removed.
  - Record rules are replaced by domains on access rights.
  - Tracking values are removed in favor of on-the-fly tracking messages.
  - Remote Work is merged into Employees.
- These affect upgrade effort and customizations.
- Several apps can now run without Inventory: eCommerce "Simplified inventory management", Sales "Ship orders without Inventory", and POS. This makes it easier to sell to small businesses that don't need full stock.

### Gaps
- The official page has no SMS Marketing or Surveys sections, although both are listed in its app menu. I found no Odoo 20 SMS Marketing or Surveys changes apart from the General "Text messages" item.
- Subscriptions has only one entry ("Loyalty programs"). I found no other subscription-specific changes.
- I did not check the eLearning, Events, Knowledge, Inventory, Manufacturing, Accounting or POS sections in depth because they are outside this scope. They are on the same page.

## What exactly are Odoo 20's AI capabilities (agents, LLM providers, which apps), and which are Enterprise-only?

### Takeaway
Odoo 20 moves the AI app from assistive to agentic. Agents can create and update records. Automated and scheduled actions can call them, and they can update themselves. They accept files and voice, and they show live progress. A built-in MCP server lets external agents such as Claude Code connect.

All AI features now consume IAP credits. Installing the AI app on the Standard plan triggers an upsell to the Custom plan.

The official sources I could read do not name which LLM providers Odoo 20 uses. The 20.0 "AI API keys" doc page is under construction.

### Cited Findings
- **Agentic AI, quoted from the "AI" section** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - "IAP credits required: All AI features now need credits, which can be bought via IAP."
  - "Agentic automation":
    - "Agents can now update themselves to best serve their use cases."
    - "Agents can be summoned by automated and scheduled actions."
    - "Check automation chats to see how agents handled them, and ask for changes based on the errors faced."
    - "Agents get avatars based on their assigned role."
- **Agent capabilities** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - "AI agents: create records" ("including by uploading a file of instructions like a PDF").
  - "AI agents: update records".
  - "AI agents: ask questions about a file" (while previewing it).
  - "AI agents: send files".
  - "AI agents: image generation" ("images and enriched buttons for websites and mailings").
  - "AI agents: filter by time period" (when building views).
  - "AI agents: reprocess sources".
  - "AI agents: feedback": "specific, live updates on what they are doing, instead of a generic 'AI is thinking' message".
- **Interaction and controls** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - "Interactive agent responses" (buttons for questions, permission requests and suggestions).
  - "Voice interaction" (dictate requests).
  - "AI chat request options" (a + menu).
  - "Default prompts" (with context and dynamic values).
  - "Model-bound agents".
  - "Preview cards in live chat".
  - "Tool call limit confirmation".
  - "Stored conversations": "stored for up to 30 days after the last message was sent".
  - "Topics renamed to skills": topics, "collections of instructions and tools that define how an AI agent behaves within a specific context", are now called "skills".
- **MCP** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - The release note heading is "Connect Odoo to anything: Connect to your database via MCP (model context protocol)."
- **MCP server details** — [Odoo 20.0 docs: AI MCP server](https://www.odoo.com/documentation/20.0/applications/productivity/ai/mcp_server.html)
  - Odoo acts as a remote MCP server. External agents read and modify data through exposed server actions (tools).
  - "OAuth is the recommended method of authentication". OAuth is for internal users only. Portal users need an API key, and the API-key route requires Node.js on the client.
  - Admins approve clients under Settings ‣ Integrations ‣ MCP OAuth, either through CIMD or Dynamic Client Registration.
  - Example clients: Claude Code, Antigravity and Codex. Any MCP-compatible agent works.
- **The 20.0 AI documentation** — [Odoo 20.0 AI docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai.html)
  - The overview defines agents (with a System Prompt), skills, sources, AI fields ("generate field values from information on the current record") and AI server actions (AI "choose the appropriate tool to run").
  - The AI app opens from the AI icon or with Ctrl+K.
  - Subpages:
    - AI API keys.
    - AI agents.
    - AI default prompts.
    - AI document sort.
    - AI fields.
    - Generate images with AI.
    - AI live chat.
    - AI server actions.
    - AI in email templates.
    - AI voice transcription.
    - Write and improve text with AI.
    - AI in support workflows.
    - AI MCP server (with "Available MCP tools").
- **Plan requirement** — [Odoo 20.0 AI docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai.html)
  - "Installing the AI app in an Odoo database on the Standard pricing plan automatically triggers an upsell" to the Custom plan.
  - "AI usage consumes IAP credits."
  - Secondary claim: "Agentic AI is tied to the Custom plan", and the Custom plan price rose 20–31% — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75)
- **LLM providers** — [Odoo 20.0 AI API keys doc](https://www.odoo.com/documentation/20.0/applications/productivity/ai/apikeys.html); [Odoo 20.0 AI docs](https://www.odoo.com/documentation/20.0/applications/productivity/ai.html)
  - The 20.0 "AI API keys" page is "under construction" and names no providers.
  - The 20.0 AI overview says built-in requests go through Odoo's IAP service.
  - Baseline from Odoo 19 (not 20): the 19.0 docs say the AI app supports Gemini and OpenAI (ChatGPT) API keys — [Odoo 19.0 AI API keys](https://www.odoo.com/documentation/19.0/applications/productivity/ai/apikeys.html) (seen in a search snippet only; not fetched).
- **AI built into apps in Odoo 20** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - Website "AI Website Assistant" ("vibe code your website") and the "AI-generated content indicator".
  - The Website configuration wizard's AI positioning choices.
  - eCommerce "AI-assisted product editing".
  - Marketing Automation "AI-assisted campaign creation".
  - Social Marketing "AI assistant".
  - Helpdesk "Similar ticket detection" (AI-suggested answers).
  - Documents "Rename files with AI".
  - Discuss "Call transcripts" (summaries).
  - ESG "Assign emission factors with AI".
  - Live chat preview cards for records that agents mention.
  - Website "llms.txt" (for LLM consumption, not an AI feature itself).
- **Secondary only, not in the official text I read:** accounting AI that predicts bill lines and sends unpaid-invoice reminders — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75)

### Inferences
- Odoo 19 introduced the AI app (agents, topics, sources, AI fields, AI server actions, with OpenAI and Gemini keys; this is my recollection, not verified here). Odoo 20's additions are therefore autonomy: automation-triggered and self-updating agents, record creation and update, MCP, voice and files.
- The "Topics renamed to skills" entry confirms that the concept existed before 20.
- Requiring IAP credits for "all AI features" suggests that AI usage, including built-in features, is now metered. Whether bring-your-own API keys still bypass credits is unclear.
- Because the AI app forces a Custom-plan upsell, AI is in practice tied to Enterprise or the Custom plan. Odoo does not state this explicitly in the text I read.

### Gaps
- Which LLM providers and models Odoo 20 uses, and whether customers can still bring their own OpenAI or Gemini keys: the 20.0 API keys doc is under construction. Not verified.
- Whether any AI feature is available in Community: no official statement found. I also found no official Enterprise-versus-Community breakdown for the AI features.
- IAP credit pricing per AI request: not found.
- I did not retrieve the full "Available MCP tools" list.

## What UX/performance claims did Odoo make for version 20, with numbers if any?

### Takeaway
The official release notes make no quantified speed or performance claims for Odoo 20. Performance statements are qualitative: Appointments booking is "faster", calendar sync is "significantly faster", Website mobile performance is better through srcset, and visitor tracking is more efficient.

The UX changes are concrete:
- Offline mode.
- Mobile command palette, bottom sheets and a new login screen.
- Material Symbols icons.
- Multi-record drag and drop.
- Incremental "+=" edits on duration fields.
- Redesigned dialogs.
- Archive offered when a record can't be deleted.

A "Frost" redesign with dark mode is reported only by secondary sources and does not appear in the official release notes.

### Cited Findings
- **General UX entries** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - "Offline mode": "Create, edit, archive, unarchive, and delete records while being offline. Execute previously run searches while working offline."
  - "Mobile":
    - "Swipe down on the main dashboard to open the command palette on mobile."
    - The date picker opens in a bottom sheet.
    - Touchscreen forms are improved.
    - "The new mobile login screen supports secure authentication."
  - "Tablets: bottom sheets".
  - "File sharing on mobiles": share files from a phone to create bills, expenses, tasks, leads, to-dos and time off.
  - "Material Symbols": "Font Awesome icons have been replaced by Material Symbols icons."
  - "Multi-record drag and drop" in list and Kanban views.
  - "Incremental edits on duration fields": "if the duration is 10h, typing '+=2' updates the duration to 12h".
  - "Dialog design" (improved).
  - "Record deletion": archive is offered if a record can't be deleted.
  - "Decimal separator": a dot or a comma is accepted regardless of locale.
  - "Link to current search".
  - "List view: expand/collapse groups" (ALT + click).
  - Search: "relative date range navigation" and "relative date range tooltip".
  - "Favorited searches" keep their visible columns.
  - "Map view: unlocated records".
  - "Download attachments in bulk".
  - "Activities": an activity can be assigned to a person or a role.
  - "Calendar view side panel".
  - Gantt view: row and column selection, start and end buffers, and scheduling from the side panel.
  - "Translation":
    - The "Translation Mode" module with Weblate.
    - Multi-language import and export.
  - "My Subscription page" (plan, IAP services, database management).
  - "Simplified access rights": "removing record rules and adding a domain directly at the access right level".
- **Technical/framework entries** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - "Mail: in-body tracking": "Tracking values have been removed; the tracking message is now generated on the fly". Admins who need tracking values can install a dedicated module.
  - "Many-to-one field improvements": "now synced with the backend, and adding/removing values has been improved, even with large lists."
  - "Push notifications": "no longer handled by Firebase but rather by in-house Odoo push tools."
  - "Track source of postings" (mail.mail).
  - "Tracking user group changes".
- **Qualitative performance claims** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - Appointments: "Various performance improvements, including optimized resource and date availability calculations, have made every part of the booking process faster."
  - Calendar: "synchronization with Google Calendar and Microsoft Outlook is now significantly faster and more reliable."
  - Website SEO: "Mobile performance has been improved via adaptive image sizing (srcset)".
  - Website "Visitor tracking": "The efficiency of the visitor tracking system has been improved."
  - Spreadsheet: "Reduced JSON file size".
- **The only numbers in the UX scope** — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
  - Agent conversations are stored "up to 30 days".
  - itsme® signing works in "over 30 European countries".
  - Non-Latin alphabets in Sign cover "over 40 new countries".
- **Number of changes (secondary, conflicting):** — [Braintec (secondary)](https://braintec.com/en/news/insights/269/odoo-20-release-notes-all-the-new-features); [iVenture (secondary)](https://iventureteam.com/odoo-20-release-notes/)
  - One partner counts about 400 changes across 40+ modules.
  - Another counts 585 changes across 52 apps and areas.
  - The WebSearch summary did not attribute each figure to a specific site, so treat both as unverified.
- **"Frost" redesign and dark mode (secondary, unverified):**
  - A recap says the keynote showed "a redesigned interface (codename Frost) with dark mode" — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75)
  - A pre-release blog describes "Frost" icons and dark mode as a stored preference with a System option — [Octura Solutions (secondary, pre-release)](https://octurasolutions.com/resources/odoo-20-frost-redesign-and-dark-mode)
  - The official release notes contain neither "Frost" nor "dark mode" (I searched the full page text) — [Odoo 20 Release Notes](https://www.odoo.com/odoo-20-release-notes)
- **Keynote:** no speed or performance figures for Odoo 20 were found in recaps — [Solvve recap (secondary)](https://solvve.odoo.com/blog/articles-4/odoo-experience-2026-recap-75)

### Inferences
- The platform changes most relevant to businesses are:
  - Offline mode (field and mobile users).
  - Firebase-free push notifications (less dependence on Google).
  - Simplified access rights.
  - Removed tracking values, which matters for custom modules that read `mail.tracking.value`.
- The mobile and touch changes (bottom sheets, command palette, Sign touchscreen support) point to a mobile-first push without a dedicated native-app announcement.

### Gaps
- There are no official quantified performance or speed figures. Neither the release notes nor the keynote recaps I read give any, so any "X times faster" claim should be treated as unverified.
- Framework details: the release notes say nothing about OWL or ORM versions, Python or PostgreSQL requirements, or developer-facing API changes. The developer docs or changelog at odoo.com/documentation/20.0/developer were not checked.
- Dark mode and "Frost" are unconfirmed by official Odoo sources.
- I did not access the keynote video or transcript directly.
