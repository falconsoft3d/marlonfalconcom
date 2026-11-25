# Odoo 20: what is new in operations apps (Inventory, Barcode, Purchase, MRP, Quality, Maintenance, PLM, Field Service, Rental, POS, Repairs, shipping)

Research date: 2026-11-25. Main source: the official release notes page, https://www.odoo.com/odoo-20-release-notes (abbreviated **[RN20]** below). Feature names in **bold** are the exact entry titles from that page. Partner blogs are marked as secondary.

Context:
- Fabien Pinckaers presented Odoo 20 at Odoo Experience 2026 (Brussels Expo). The event page lists the opening keynote on 24 September 2026. — [Odoo Experience 2026 event](https://www.odoo.com/event/odoo-experience-2026-9099) (reached via search snippet; secondary LinkedIn posts say the same)
- Cybrosys (secondary) says Odoo 20 "was released in September 2026" and that its page is based on the official release notes. — [Cybrosys](https://www.cybrosys.com/odoo/odoo-20-features/)
- [RN20] marks a few features as already "available from 19.0". In operations these are **GoFood delivery integration** and **GrabFood delivery integration** (POS). Elsewhere: ECPay, Lazada, TikTok, plus two items marked "available from 18.0". Every other item is presented as new in 20. — [RN20](https://www.odoo.com/odoo-20-release-notes)

---

## Question 1: Which features are new in Odoo 20 in each app (exact release-note names)?

### Takeaway
[RN20] has a long list for every operations app. The biggest changes are:
- the standalone **Field Service app is discontinued** and merged into **Planning**;
- Manufacturing gets the most change: **Continuous production**, **Split manufacturing orders**, a single **Produce button**, flexible consumption by default, new work-order Kanban and Gantt views, and a redesigned MO Kanban;
- Inventory gets **Suggested stock levels for reordering rules**, a **Stock aging report**, **Inventory at a past date**, **Intercompany flows**, **Simplified returns** and a **ShipStation shipping connector**;
- POS can now run with **Simplified inventory management**, without installing the Inventory app.

### Cited Findings

#### Inventory (all from [RN20](https://www.odoo.com/odoo-20-release-notes))
- **Allocation report**: "The allocation flow has been improved", with a new report design. Iventureteam (secondary) says allocation can now be done from the forecast report. — [RN20](https://www.odoo.com/odoo-20-release-notes); [iventureteam](https://iventureteam.com/odoo-20-release-notes/inventory/)
- **CMR document**: download a CMR road-transport document, prefilled from the transfer. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Company-specific customer lead times**: customer lead times can differ by company. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Intercompany flows**: routes can resupply one company from another, and linked orders update across companies. Iventureteam (secondary) adds that a sales order can ship from another company's warehouse. — [RN20](https://www.odoo.com/odoo-20-release-notes); [iventureteam](https://iventureteam.com/odoo-20-release-notes/inventory/)
- **Inventory at a past date**: a date picker in the stock report shows inventory at a past moment, keeping the filters. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Landed costs for specific products**: "Landed costs can be added to individual products of a transfer." — [RN20](https://www.odoo.com/odoo-20-release-notes); [Cybrosys](https://www.cybrosys.com/odoo/odoo-20-features/)
- **Location-specific push routes**: push routes depend on the destination location (example in the notes: WH/Input/A versus WH/Input/B). — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Picking notifications**: subscribe to notifications on a transfer's status. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Preview Barcode instructions in operation type**: preview the operator's Barcode instructions from the operation type. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Product packaging barcodes**: packaging barcodes are easier to manage from the product form. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Product replenishment**: "The "Order" and "Order to max" buttons have been consolidated into a single "Order" button in the replenishment dashboard." Advance reordering sets the quantity to the maximum minus the forecast. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Inventory valuation adjustments**: cost adjustments are listed in a "Valuation Adjustments" menu, in debug mode. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Simplified returns**: "The return wizard has been removed, and the returns process has been simplified." — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Stock aging report**: available from the "Moves Analysis" pivot view. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Suggested stock levels for reordering rules**: "Minimum and maximum stock levels for reordering rules are now suggested based on demand history." Coverage goals and order frequency are also taken into account. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Traceability Report**: "improved to display upstream and downstream lot/serial numbers in a single report". Final lot locations are highlighted and intermediate ones are dimmed. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Variant-specific HS codes** and **Variant-specific packagings**: HS codes and packagings can be set per product variant. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Vendor purchase reference**: shown on receipts to help identify the vendor. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **ZPL location barcodes**: location barcode labels are available in ZPL format. — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Shipping items listed under Inventory (**ShipStation**, **Sendcloud** entries) are covered in the shipping section below.

#### Barcode ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Backorders**: "Choose whether or not to create a backorder from the Barcode app."
- **Barcode product creation**: "Scan a product's barcode to create products via Barcode Lookup throughout the app."
- **Batch receipts**: "Batches are suggested when receiving products from the same vendor but with multiple expected receipts."
- **Bulk lot/serial number generation**: "Generate lots or serial numbers in bulk."
- **Fixed button positions**: "Barcode buttons now stay in the same position on the screen, regardless of the entered quantity." The stated goal is "to improve usability and reduce errors."
- **Inventory count**: "click the pen to manually enter the total counted quantity for a selected product."
- **Light users**: "Restrict light users' access to just the Barcode module."
- **Manual entry**: "Manually enter a lot number and the related quantity when scanning it is not possible."
- **Manufacturing operations**: "Improvements have been made for manufacturing, including removing irrelevant settings." This also covers fixes to component lot/serial handling and by-product editing.
- **Mobile: user login button**: "The user login button has been added to the mobile view."
- **Packages: pre-encoded contents**: "Packages and their contents communicated by the vendor can now be pre-encoded in the Inventory app."
- **Packages: untracked goods**: untracked goods "are included in the contents of the package when it gets scanned in Barcode."
- The single **Produce button** (see Manufacturing) also applies in Barcode.

#### Purchase ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Alternatives comparison**: improved so that choosing the best option is "simpler for users."
- **Default Incoterm per vendor**: the vendor's Incoterm is set automatically on its quotations and orders.
- **End-customer address in portal**: the end customer's address is shown on purchase orders in the vendor portal.
- **Expected arrival date**: the arrival date can be edited while the vendor's original date is kept, so on-time delivery rates stay accurate.
- **Product unit cost versus purchase unit cost**: the cost per product unit is shown next to the cost per purchase unit.
- **Purchase agreement structure**: sections and notes can be added to purchase agreements and blanket orders.
- **Recompute Expected Arrival when deadline is in the past**: recalculates arrival dates "with a single click."
- **Total amounts on purchase order sections**: sections and subsections can show totals.
- **Vendor quality rate**: shows a vendor's quality performance, calculated from quality checks. This links Purchase to Quality.

#### Manufacturing (MRP) ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Backorder planning**: backorders of planned productions are planned automatically.
- **Bill of materials**: BoMs can be compared by quantities, the "Status" and "Availability" columns are merged, there is an extra costs field, and components can be managed from the form.
- **Component replacement**: the "Used In" smart button shows the BoM component lines.
- **Continuous production**: "Produced quantities can now be recorded on work orders." With continuous production enabled on a BoM, later operations can start once some quantities are ready.
- **Draft versus confirmed manufacturing orders**: procurement can create MOs as draft or confirmed.
- **Flexible consumption**: "The flexible consumption setting on bills of materials has been removed." All MOs now use flexible consumption by default.
- **Generate lots and serials when closing manufacturing orders**: lots and serials are always generated when the MO is closed.
- **Lot/serial number transfers**: the smart button shows delivery move lines, for more precise recalls.
- **Manufacturing order Kanban view**: "The manufacturing order Kanban view has been redesigned." Cards are grouped by scheduled week and show component status, work center, deadline and remaining time.
- **Manufacturing orders planned ASAP**: MOs are planned as soon as possible by default.
- **MO cost**: shows the provisional cost while the MO is in progress and the real cost once it is done.
- **Produce button**: "The separate "Produce" and "Produce All" buttons have been replaced by a single "Produce" button" in Manufacturing, Shop Floor and Barcode.
- **Put in pack from MO**: finished products go into the specified destination package.
- **Reset MO to draft**: validated or cancelled MOs can be reset to draft.
- **Shop Floor demo sheet**: "Download a Shop Floor demo sheet to quickly test the app's barcode capabilities."
- **Split manufacturing orders**: "Split ongoing manufacturing orders to produce the remaining amount later."
- **Subcontracting MO**: component status and the MO overview are available for subcontracting.
- **Subcontracting reception valuation**: when no PO is linked, the subcontractor cost comes from the vendor pricelist.
- **To Replenish filter**: added to the MO Overview.
- **Traceability report expiration dates**: expiration dates are added to the traceability report.
- **Visualize and confirm work orders**: work orders, including draft ones, can be confirmed from the Gantt view.
- **Work and manufacturing order reporting**: reporting is improved, with updated key metrics.
- **Work order views**: "Visualize and adapt work order planning with the new work order Kanban view"; "The new Gantt view allows the planning of work orders using drag-and-drop", with color coding and a per-employee view; completed work orders are shown in the Gantt view by default.
- **Work center overview**: quick links to work orders and maintenance planning.
- **Work orders in blocked work centers**: work orders can be processed in blocked work centers.
- **Shop Floor** section of [RN20]:
  - **HTML note field**: "The note field on manufacturing orders is now an HTML field in the Manufacturing backend and in Shop Floor…"
  - **Instruction updates**: "When updating instructions, the current instruction is now pre-filled, making small adjustments easier."
  - **Work center barcode**: "Scan a work center's barcode to select it."

#### Quality ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Bypass quality checks**: "Quality admin users can validate inventory transfers without performing quality checks."
- **Failure location**: set a "Failure Location" on a failed quality check.
- Related: **Vendor quality rate** in Purchase (above).

#### Maintenance ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Maintenance requests: Gantt views**: dedicated Gantt views for equipment and work-center maintenance requests.
- **Maintenance teams on stages**: maintenance stages can be customized per team.
- **UX improvements**: includes a new "Status" widget.
- Related: **Work center overview** in MRP links to maintenance planning.

#### PLM ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **BoM comparison**: compare BoMs to see changes "more easily."
- **Optional ECO version update**: updating the version is optional when an ECO is applied.
- **Product updates**: new products can be introduced "more easily" when an ECO is applied, with version tracking.
- **Universal ECO report**: one report of all BoM changes, including cost comparisons.

#### Field Service, now inside Planning ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Field Service merged into Planning**: "The Field Service app has been discontinued. Its features are now integrated into the Planning app." This is the only entry in the Field Service section of [RN20].
- New items in the Planning section with a "Field Service:" prefix:
  - **Field Service: auto plan**: "Customer locations are taken into account for automatic shift planning."
  - **Field Service: customer equipment**: "Track whether customer equipment is covered by a maintenance contract via Subscriptions." and "Access documentation for the equipment installed at the customer's location directly from shifts."
  - **Field Service: customer ratings**: "Track customer satisfaction for onsite interventions."
  - **Field Service: intervention confirmation email**: choose whether customers automatically get a confirmation email when a shift is published.
  - **Field Service: live map**: "Track technicians' locations on a live map."
  - **Field Service: map view**: "View both shift locations and technician availability in the map view."
  - **Field Service: product barcodes**: "Add products to a shift by scanning their barcodes."
  - **Field Service: report**: "Studio fields are shown on the field service report."
  - **Field Service: routing preferences**: map routing lets users choose "between an ordered mode and an optimized mode…"
  - **Field Service: track customer history**: "Track customer equipment and intervention history."
  - **Field Service: travel fees**: "Invoice customers for distance-based travel fees or a fixed travel-time fee."
  - **Field Service: website form**: "Collect service requests through a website form rather than letting customers book services directly."
  - **Field Service: worksheets**: "Worksheet templates now use property fields instead of Studio fields." and "Add worksheets to shift templates."
- Other Planning items that support field work:
  - **Employee-specific materials**: assign materials to employees; their material is added automatically when they are assigned to a shift.
  - **Gantt view: travel times**: travel times shown in the Gantt view through Mapbox.
  - **Link shifts to tasks**
  - **Multiple resource assignment**
  - **Priority shifts**: higher-priority shifts are scheduled first by Auto Plan.
  - **Schedule shifts from side panel**: drag and drop from the side panel into the calendar or Gantt view.
  - **Send shifts via WhatsApp**
- The official 20.0 documentation says: "Field Service allows on-site interventions to be scheduled directly in the Planning app." It is turned on in "Planning ‣ Configuration ‣ Settings, enable Field Service". Interventions are shifts, created from Planning, sales orders or helpdesk tickets. Shifts have an "Under warranty" option that sets materials and services to zero price. — [Odoo docs 20.0, Field service](https://www.odoo.com/documentation/20.0/applications/services/planning/field_service.html)
- Secondary, technical: the old `industry_fsm` modules are gone from 20.0 Enterprise and replaced by a new `planning_field_service` module plus `planning_field_service_*` extensions (maps, worksheets, reports, stock). Code that extends `project.task` for FSM must move to `planning.slot`. Iventureteam says its claim that the official upgrade migrates data from tasks to shifts is "not verified". — [iventureteam Field Service](https://iventureteam.com/odoo-20-release-notes/field-service/); [Octura Solutions, downsides](https://octurasolutions.com/resources/odoo-20-downsides-what-to-check-before-you-upgrade)
- Secondary: Octura warns that scripts or deployments listing `industry_fsm` will see Odoo log "invalid module names, ignored" and carry on. It also says it is unclear "how existing interventions and worksheets convert." — [Octura Solutions](https://octurasolutions.com/resources/odoo-20-downsides-what-to-check-before-you-upgrade)

#### Rental ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Automatic price update**: changing the pricelist or the rental period updates the prices on existing order lines.
- **Rental order creation**: adding a rental product to a sales order adds a "Rental period" field.
- **Rental orders dashboard**: a summary of rental activity with status filters.
- **Simplified and unified pricelists**: Sales, Subscription and Rental prices are grouped in one "Prices" tab.
- **Strikethrough pricing**: the original price is shown crossed out next to the discounted rental price.
- **Working schedules**: "Unavailability days" are replaced by working schedules.

#### Point of Sale, shop and restaurant ([RN20](https://www.odoo.com/odoo-20-release-notes))
[RN20] has no separate Restaurant section. Restaurant items sit under Point of Sale.
- **Base unit price on product label**: the reference price is shown on labels.
- **Booking Kanban and pivot views**: dedicated views for bookings (restaurant/appointments).
- **Convert order lines into a combo** (restaurant): "The POS now recommends converting order lines into combos when possible to simplify menu orders for big tables."
- **Employee access levels**: "Employee access levels have been renamed, and a new, highly restrictive "Supervised" access level has been added."
- **End of session**: "At the end of the session, a global sale is generated to simplify the accounting entries and remove the miscellaneous entries."
- **Expired product notification**: warns the user when an expired product is selected.
- **GoFood delivery integration** (Indonesia) and **GrabFood delivery integration** (several Southeast Asian countries): marked "available from 19.0", so not new to 20.
- **Label printing**: "Any label printer can now be connected directly via USB proxy."
- **Mercado Pago terminal**: QR payments, refunds and cancellations on the terminal, including for Chilean companies.
- **Multiple currencies**: "Multiple currencies can now be supported at checkout in the same point of sale."
- **Order search**: search by invoice or receipt number.
- **Print preparation tickets per product** (restaurant): a "Split per product" option prints one ticket per product.
- **Printer management**: "Set up multiple printers linked to your point of sale, and then select on which printer to print…"
- **Receipt printing**: the paper size can be set in developer mode.
- **Reorganizing products in POS interface**: drag and drop products.
- **Self-ordering**:
  - "Customers using self-ordering can leave notes at checkout; these are visible on the kitchen display."
  - "Optional products are displayed when ordering from a mobile device or a kiosk."
  - "Generate and print an order-specific QR code, allowing customers to scan it to place their order and pay after their meal."
- **Service fees**: "Add a service fee for Point of Sale orders and self-orders via presets, and display the amount on invoices."
- **Simplified inventory management**: "Point of Sale can now work with simplified inventory management, without installing the Inventory app." It keeps one on-hand quantity per product and needs no transfers.
- **Simplified receipts**: print subtotals and taxes without the order lines.
- **Snooze products**: "Make products temporarily unavailable on the POS or self-ordering menu by snoozing them."
- **Static QR code payment**: payment with a static UPI QR code.
- **UrbanPiper integration**: settings managed from POS, supports several delivery platforms.
- **WhatsApp and SMS self-order receipt**: self-order receipts sent by WhatsApp or SMS.
- POS localization items, listed under Localizations in [RN20]:
  - Ecuador: blocks sales above the legal limit when the default "Consumidor Final" customer is used.
  - Egypt: receipts sent to the ETA as e-receipts.
  - Indonesia: QRIS on kiosk.
  - Malaysia: MyInvois self-service e-invoicing.
  - Pakistan: real-time FBR reporting.
  - Peru: SUNAT-compliant thermal printing.
  - Saudi Arabia: down payments.
  - Uruguay: electronic invoicing.
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Secondary: Octura says the Ingenico PoS driver and the Belgian POS blackbox modules are removed in 20, that "the Android Point of Sale needs Android devices", and that "The new Obox needs its own hardware". — [Octura Solutions](https://octurasolutions.com/resources/odoo-20-downsides-what-to-check-before-you-upgrade)

#### Repairs ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **Invoice creation**: invoices can be created directly from a repair order. Cybrosys adds "when no quotation is needed". — [RN20](https://www.odoo.com/odoo-20-release-notes); [Cybrosys](https://www.cybrosys.com/odoo/odoo-20-features/)
- **Repair order status**: "The "Under Repair" status has been removed." — [RN20](https://www.odoo.com/odoo-20-release-notes)
- **Repair-related services**: services can be added to repair orders. — [RN20](https://www.odoo.com/odoo-20-release-notes)

#### Logistics and shipping connectors ([RN20](https://www.odoo.com/odoo-20-release-notes))
- **ShipStation shipping connector** (listed under Inventory): "An integration with shipping and fulfillment platform ShipStation has been added." It calculates shipping costs and retrieves labels and tracking numbers in Odoo.
- **Sendcloud: pickup points**: "Pickup points proposed by Sendcloud carriers can now be selected directly from a sales order or a transfer."
- **Sendcloud: package reference**: Odoo's package reference is sent to Sendcloud and printed on labels for supported carriers.
- Sendcloud label format: "Choose the format for Sendcloud shipping labels: PDF, ZPL, or PNG."
- Envia, Brazil: "NF-e information is shared when using Correios and creating shipping labels with Envia." This is in the Brazil localization.
- **Mondial Relay handled via Sendcloud** (eCommerce): "The Mondial Relay pickup point module for eCommerce has been removed." Mondial Relay remains available through Sendcloud.
- **Ship orders without Inventory** (Sales): "Send shipping confirmation emails and manage order fulfillment of sales orders without the Inventory app."
- **Preferred delivery date** (eCommerce): "Allow customers to select a preferred delivery date."
- **CMR document** and **Variant-specific HS codes** (Inventory, above) help with road transport and customs documents.
- POS delivery aggregators: **UrbanPiper integration** is new in 20. **GoFood** and **GrabFood** are marked "available from 19.0".

### Inferences
- Odoo 20 is a consolidation release for operations:
  - it removes settings and steps: the return wizard, the flexible-consumption setting, the "Under Repair" status, "Produce All", "Order to max", and Rental "Unavailability days";
  - it adds planning views: work-order Kanban and Gantt, a redesigned MO Kanban, and Maintenance Gantt views.
- Three changes lower the entry barrier for small businesses because they no longer require the Inventory app: **Simplified inventory management** in POS, **Ship orders without Inventory** in Sales, and the stock option in POS. This is likely relevant for retail and restaurant SMBs.
- The Field Service merge is the main change affecting migrations. Companies on FSM in 19 have to retrain users (interventions become "shifts" in Planning) and rewrite custom code built on `industry_fsm`.
- Documentation pages for Field Service inside Planning also exist for saas-19.2, saas-19.3 and saas-19.4 (seen in search results). So the merge probably shipped first in Odoo Online SaaS 19.x versions, and on-premise and Odoo.sh users get it with 20.0. This is an inference from search-result URLs and was not confirmed in content.

### Gaps
- I could not confirm which specific features first appeared in SaaS 19.1 to 19.4. [RN20] flags only a few items as "available from 19.0".
- I did not find official Odoo Experience 2026 talk recordings or transcripts for each operations app.
- The official 20.0 documentation was only partly checked (the Field Service page). Map and routing details on that page were cut off when fetched.

---

## Question 2: What does Odoo claim about productivity gains or UX changes (fewer clicks, new views, mobile/barcode flows)?

### Takeaway
[RN20] gives no quantified productivity numbers (no "X% faster" and no click counts) for these apps. The claims are qualitative: "simplified", "more easily", "with a single click", "to improve usability and reduce errors". The concrete UX changes are new Kanban and Gantt views, merged buttons, removed wizards and statuses, and improvements to Barcode, Shop Floor and mobile flows.

### Cited Findings
- The only explicit Barcode UX rationale: fixed button positions are meant "to improve usability and reduce errors." — [RN20](https://www.odoo.com/odoo-20-release-notes)
- One-click claim: **Recompute Expected Arrival when deadline is in the past** works "with a single click" (Purchase). — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Fewer buttons and steps:
  - a single "Produce" button replaces "Produce" and "Produce All" in Manufacturing, Shop Floor and Barcode;
  - a single "Order" button replaces "Order" and "Order to max" in replenishment;
  - the return wizard is removed;
  - the "Under Repair" status is removed;
  - the flexible-consumption setting is removed.
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- New or redesigned views:
  - work-order Kanban view and drag-and-drop Gantt view;
  - redesigned MO Kanban, grouped by scheduled week;
  - confirming work orders from the Gantt view;
  - Gantt views for maintenance requests;
  - a Rental orders dashboard;
  - Booking Kanban and pivot views in POS;
  - a Stock aging report reached from the Moves Analysis pivot;
  - a unified upstream and downstream Traceability Report.
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Mobile and barcode flows:
  - Barcode: user login button in the mobile view, manual lot entry, pen icon to enter counted quantities, backorder choice, batch suggestions for receipts, bulk lot/serial generation, product creation via Barcode Lookup, Light users limited to Barcode;
  - Shop Floor: work-center barcode scanning and pre-filled instruction updates;
  - Planning (Field Service): product barcode scanning on shifts and a live technician map;
  - POS self-ordering: optional products on mobile and kiosk.
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Qualitative wording also includes:
  - Purchase: "simpler for users" for Alternatives comparison;
  - PLM: BoM comparison and new products in ECOs "more easily";
  - POS: combos to "simplify menu orders for big tables", and End of session "to simplify the accounting entries and remove the miscellaneous entries";
  - Shop Floor: pre-filled instructions make "small adjustments easier".
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Secondary: Cybrosys also notes that the release notes make no quantified productivity claims; the benefits are described qualitatively. — [Cybrosys](https://www.cybrosys.com/odoo/odoo-20-features/)
- Forecasting and automation:
  - **Suggested stock levels for reordering rules**: min and max levels from demand history, coverage and order frequency;
  - MOs planned ASAP by default;
  - automatic backorder planning;
  - Auto Plan that takes customer locations and shift priorities into account.
  [RN20] does not label any of these as "AI" features. — [RN20](https://www.odoo.com/odoo-20-release-notes)

### Inferences
- The release-wide marketing focus of Odoo 20 is AI. Secondary sources say "All AI features now need credits, which can be bought via IAP" ([RN20](https://www.odoo.com/odoo-20-release-notes), General/AI section). The operations changes, however, are mostly incremental UX and planning work, not AI agents built into Inventory or MRP. Any AI story for operations would come from cross-app AI features covered by other researchers.
- "Fewer clicks" is a fair description of the merged buttons and removed wizards, but Odoo does not put a number on it. Avoid quoting any percentage.

### Gaps
- I found no official Odoo figure (clicks saved, time saved, percentages) for any operations app in 20.
- I did not find the Odoo Experience 2026 operations talks (for example Inventory, MRP or POS "what's new" sessions) or their claims. Only the opening keynote date was confirmed.

---

## Question 3: Any changes in Community vs Enterprise availability for these apps in 20?

### Takeaway
[RN20] does not say which operations features are Community or Enterprise. The one confirmed availability change is that the **Field Service app is discontinued** and folded into **Planning**. Secondary sources describe this as Enterprise-only (`planning_field_service` in the Enterprise branch). Edition tags for the other operations apps were not found in any official Odoo 20 source.

### Cited Findings
- None of the operations sections in [RN20] separate Community from Enterprise. The only edition statement on the page is outside operations: "The Nilvera e-Invoicing integration is now only available with Odoo Enterprise" (Turkey). — [RN20](https://www.odoo.com/odoo-20-release-notes)
- "The Field Service app has been discontinued. Its features are now integrated into the Planning app." — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Secondary: Iventureteam labels the Field Service change Enterprise-only and says Field Service is not available in Community in 20. This is the site's own label, not a quote from Odoo. — [iventureteam](https://iventureteam.com/odoo-20-release-notes/field-service/)
- Secondary: Octura describes the Field Service removal as "gone from the 20.0 Enterprise branch". It analysed only Enterprise builds and says nothing about Community. — [Octura Solutions](https://octurasolutions.com/resources/odoo-20-downsides-what-to-check-before-you-upgrade)
- The Odoo editions page lists these apps in its Community/Enterprise comparison: Inventory (with Barcode), Manufacturing (with shop floor and scheduling), PLM, Purchase, Maintenance, Quality, Planning, Rental and Point of Sale. The page as fetched did not keep the edition markers. It does not mention a version and says "Odoo Community is the core upon which Odoo Enterprise is built". — [Odoo Editions](https://www.odoo.com/page/editions)
- Indirect availability changes (dropping the Inventory dependency):
  - POS **Simplified inventory management** works "without installing the Inventory app";
  - Sales **Ship orders without Inventory**.
  — [RN20](https://www.odoo.com/odoo-20-release-notes)
- Modules removed:
  - Mondial Relay pickup-point module for eCommerce (moved to Sendcloud). — [RN20](https://www.odoo.com/odoo-20-release-notes)
  - Ingenico PoS driver and Belgian POS blackbox modules (secondary). — [Octura Solutions](https://octurasolutions.com/resources/odoo-20-downsides-what-to-check-before-you-upgrade)
- Pricing: secondary LinkedIn coverage of the launch mentions "a global revision to its pricing structure, including more granular licensing options". This was not checked on an official page. — search snippet via [Odoo Experience 2026 coverage](https://www.odoo.com/event/odoo-experience-2026-9099) (unverified; LinkedIn posts)

### Inferences
- From Odoo 17, 18 and 19 (not verified for 20):
  - Inventory, Purchase, MRP, Maintenance, POS (including restaurant) and Repairs have been Community apps;
  - Barcode, Quality, PLM, Shop Floor, Planning, Field Service, Rental and most carrier connectors have been Enterprise.
  - Nothing in [RN20] suggests a change, but this cannot be confirmed from official 20 sources. The report should flag it as prior-version knowledge.
- Since Planning has been Enterprise, folding Field Service into Planning keeps it Enterprise-only. Users get Field Service by enabling a setting in Planning instead of installing a separate app, which may change how licensing and app counts work under the revised pricing (unverified).

### Gaps
- I found no official Odoo 20 edition matrix with per-app or per-feature Community/Enterprise markers. The editions page text came without markers.
- The revised Odoo 20 pricing and licensing ("more granular licensing options") was not checked on an official odoo.com page.
- I could not confirm whether ShipStation and the Sendcloud features are Enterprise-only in 20.
