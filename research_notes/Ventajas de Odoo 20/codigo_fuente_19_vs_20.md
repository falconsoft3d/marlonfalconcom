# Odoo 19 vs Odoo 20: ground-truth changes evidenced by the local source code

Method and scope (read-only comparison, nothing was installed, run against a DB or modified):
- Base path for every citation below: `/Users/marlonfalcon/Documents/odoo/`. Citations are local file paths, e.g. [odoo-20/odoo/odoo/release.py].
- Odoo 19 sources: `odoo-19/odoo` (Community, `version_info = (19, 0, 0, FINAL, 0, '')`) and `odoo-19/enterprise` — both present [odoo-19/odoo/odoo/release.py:15].
- Odoo 20 sources: `odoo-20/odoo` (Community, `version_info = (20, 0, 0, FINAL, 0, '')`) and `odoo-20/enterprise` — both present [odoo-20/odoo/odoo/release.py:15].
- Module inventory was built by parsing every `__manifest__.py` with `ast.literal_eval`; models/fields were diffed by AST-parsing all non-test `.py` files of each module (classes with `_name`/`_inherit`, assignments `x = fields.*(...)`, label taken from `string=`).
- Git: `odoo-19/odoo` and `odoo-19/enterprise` have a broken `.git` ("fatal: bad object HEAD"), so no Odoo 19 history. `odoo-20/odoo` is a shallow clone of branch 20.0 (`heads/20.0-507-g7d8d985d0`, 508 commits, oldest 2026-09-17, newest 2026-10-27 "[FIX] mail: show thread preview of message to non-member"); `odoo-20/enterprise` is shallow (50 commits, oldest 2026-10-07, newest 2026-11-15). Git history therefore only covers post-release stabilisation, not the full 19→20 development cycle.

Headline counts (from manifests):
- Community: 598 modules in 19 → 648 in 20; 90 new, 40 gone.
- Enterprise: 720 modules in 19 → 904 in 20; 246 new, 62 gone.
- Across both editions: 333 technical names are new, 99 technical names disappeared. Three modules moved from Community to Enterprise: `l10n_tr_nilvera`, `l10n_tr_nilvera_edispatch`, `l10n_tr_nilvera_einvoice` (present in odoo-19/odoo/addons, now in odoo-20/enterprise). None moved Enterprise→Community.

## Which addon modules exist in 20 but not in 19 (Community and Enterprise)?

### Takeaway
Odoo 20 adds 336 module directories (90 CE + 246 EE). The business-visible additions cluster around: (1) a much larger agentic AI layer in Enterprise (≈38 new `ai_*` modules incl. an MCP server and a new `ai_agentic` "AI" application); (2) a new "Field Service" application rebuilt on Planning (`planning_field_service*`, replacing `industry_fsm*`); (3) new IoT stack "Obox" (new application) plus Web Serial devices; (4) new marketplace connectors (TikTok Shop, Lazada) and shipping apps (FedEx certified, ShipStation); (5) many POS integrations (Mollie, SumUp, Cashdro, Cashmatic, DPO Pay, Safaricom, Bancontact Pay/Wero, GoFood/GrabFood platform orders); (6) a new in-house PDF engine "Paper Muncher"; and (7) a large wave of localizations (payroll for ~14 new countries, Intrastat for ~12 EU countries, new e-invoicing for France PDP, Poland KSeF FA(3), Croatia, Pakistan, Ivory Coast, Dominican Republic, Finland, Greece e-invoo).

### Cited Findings
New applications (`'application': True`) in Odoo 20 that were not applications in 19 (app list diffed across both editions):
- `ai_agentic` — "AI", summary "A powerful suite of AI tools and agents integrated directly into your Odoo environment", depends `attachment_indexation`, `ai`, `base_automation`, `iap_paid_service: True` [odoo-20/enterprise/ai_agentic/__manifest__.py]. It replaces the 19 application `ai_app` ("AI", also an application) which no longer exists [odoo-19/enterprise/ai_app/__manifest__.py].
- `planning_field_service` — "Field Service", category Human Resources/Planning, summary "Plan intervention in planning", depends `planning`, `web_map`, `base_geolocalize`, `portal_rating` [odoo-20/enterprise/planning_field_service/__manifest__.py]. Replaces the 19 application `industry_fsm` ("Field Service", Services/Field Service) [odoo-19/enterprise/industry_fsm/__manifest__.py].
- `obox` — "Obox - Odoo IoT management", Administration/IoT: "management of your Odoo IoT Boxes (Obox) inside Odoo … manage your Obox devices, their certificates, and their connections to your Odoo databases"; depends `bus`, `web`, `printer` [odoo-20/enterprise/obox/__manifest__.py].
- `sale_tiktok` — "TikTok Shop Connector", "Import TikTok Shop orders and sync deliveries" [odoo-20/enterprise/sale_tiktok/__manifest__.py].
- `sale_lazada` — "Lazada Connector", "Import Lazada orders and sync deliveries" [odoo-20/enterprise/sale_lazada/__manifest__.py].
- `delivery_fedex_certified` — "Fedex Shipping" [odoo-20/enterprise/delivery_fedex_certified/__manifest__.py]; `delivery_shipstation` — "ShipStation Shipping" [odoo-20/enterprise/delivery_shipstation/__manifest__.py].
- Full application list 19 vs 20 differs only by: −`ai_app`, −`industry_fsm`, −`delivery_fedex_rest` (still present as a module but no longer flagged app — inference from list diff), +`ai_agentic`, +`delivery_fedex_certified`, +`delivery_shipstation`, +`obox`, +`planning_field_service`, +`sale_lazada`, +`sale_tiktok` (computed from all manifests).

Selected notable new Community modules:
- `base_report_paper_muncher` — "Report Engine: Paper Muncher": "implementation of the odoo's in house rendering engine called Paper Muncher" (https://odoo.github.io/paper-muncher/) [odoo-20/odoo/addons/base_report_paper_muncher/__manifest__.py]; and `base_report_wkhtmltox` — "Report Engine: wkhtmltopdf/wkhtmltoimage", auto_install [odoo-20/odoo/addons/base_report_wkhtmltox/__manifest__.py] (wkhtmltopdf becomes a pluggable engine module).
- `purchase_alternative` (+ `_sale`, `_stock`) — "compare product lines across RFQs and decide to order specific products from different vendors … create a call for tender by adding alternative requests for quotation" [odoo-20/odoo/addons/purchase_alternative/__manifest__.py].
- `crm_sale_project` — "Project Generation from Opportunities" [odoo-20/odoo/addons/crm_sale_project/__manifest__.py]; `sale_project_margin` — "Sales Margins in Projects"; `website_sale_project`.
- `cloud_storage_migration` — "Migrate local attachments to cloud storage" [odoo-20/odoo/addons/cloud_storage_migration/__manifest__.py].
- `iot_webserial` — "Interface with serial devices directly via the browser using Web Serial" [odoo-20/odoo/addons/iot_webserial/__manifest__.py]; `printer` — "Base module to manage external printers (e.g. ePOS, ZPL)" [odoo-20/odoo/addons/printer/__manifest__.py].
- `website_partnership` — "Publish your partners on your website" [odoo-20/odoo/addons/website_partnership/__manifest__.py]; `website_address_autocomplete` [odoo-20/odoo/addons/website_address_autocomplete/__manifest__.py].
- `mail_tracking` (+ `_mass_mailing`, `_sms`) — "Technical tracking of discussion and message-related data" [odoo-20/odoo/addons/mail_tracking/__manifest__.py].
- `populate` — "Generate synthetic data for an Odoo database … Used for performance testing." [odoo-20/odoo/addons/populate/__manifest__.py].
- POS: `pos_mollie`, `pos_sumup`, `pos_cashdro`, `pos_cashmatic`, `pos_dpopay`, `pos_safaricom`, `pos_bancontact_pay` (Bancontact Pay & Wero QR), `pos_edi_ubl`, `pos_stock`, `pos_sale_stock`, `pos_self_order_event`, `pos_self_order_sms`, `pos_partner_autocomplete` [odoo-20/odoo/addons/<module>/__manifest__.py].
- Payments: `payment_payu` (India), `payment_toss_payments` (South Korea), `payment_ecpay` (Taiwan) [odoo-20/odoo/addons/payment_*/__manifest__.py].
- `l10n_eu_account_vies` — "VAT VIES Validation" (online VIES check; depends `account`) [odoo-20/odoo/addons/l10n_eu_account_vies/__manifest__.py].

Selected notable new Enterprise modules:
- AI (all OEEL): `ai_mcp` — "AI MCP Server": Odoo exposes an MCP server at `<odoo-url>/mcp`, authenticated with a user API key whose scope is "MCP"; also ships OAuth client/consent views [odoo-20/enterprise/ai_mcp/__manifest__.py]. Per-app agent bridges: `ai_sale`, `ai_sale_margin`, `ai_sale_stock`, `ai_purchase`, `ai_stock`, `ai_project`, `ai_helpdesk`, `ai_calendar`, `ai_mass_mailing`, `ai_product`, `ai_esg`, `ai_account_reports` ("AI-assisted accounting report analysis and audit review"), `ai_timesheet_grid`, `ai_social`, `ai_html_builder`, `ai_portal`, `ai_cloud_storage`, `ai_marketing_automation*` ("Automatically create campaigns from livechat"), many `ai_website_*_livechat` preview-card bridges [odoo-20/enterprise/ai_*/__manifest__.py].
- Field Service family: `planning_field_service_*` (hr_attendance, repair, sale_stock, sale_subscription, sale_timesheet, sale_timesheet_barcodes, sale_worksheet, sms, stock, stock_subscription, worksheet), `website_planning_field_service` ("Collect intervention requests via an online form"), `helpdesk_planning_field_service*` [odoo-20/enterprise/planning_field_service*/__manifest__.py].
- Obox IoT family: `obox_android`, `obox_mrp`, `obox_point_of_sale(_android)`, `obox_pos_mobile`, `obox_pos_self_order(_android)`, `obox_quality(_android)`, `obox_quality_control(_android)`; `mrp_iot` ("Extend Manufacturing operations using IoT devices"); `quality_control_iot_webserial` [odoo-20/enterprise/obox*/__manifest__.py].
- POS: `pos_platform_order` (+ `_gofood`, `_grabfood`), `pos_self_order_urban_piper`, `pos_planning`, `pos_sale_commission`, `pos_hr_mobile_nfc` ("Identify employees on the POS with their NFC badge"), `pos_mobile_android`, `pos_enterprise_sms_whatsapp`, `pos_stock_enterprise` [odoo-20/enterprise/pos_*/__manifest__.py].
- HR/attendance: `hr_attendance_biometric_integration` ("Shared biometric attendance inbox and processor"), `hr_attendance_zkteco` (ZKTeco BioTime 8.5/9.0 API), `hr_attendance_essl`, `hr_attendance_mantra` [odoo-20/enterprise/hr_attendance_*/__manifest__.py].
- Pricing/retail: `pricer` + `stock_pricer` — "Display and change your products information on electronic Pricer tags" [odoo-20/enterprise/pricer/__manifest__.py].
- Accounting: `account_direct_debit` ("Manage Direct Debit Mandates"), `account_loans_extract` (OCR of loan documents), `account_reports_spreadsheet`, `account_accountant_payment_interco` [odoo-20/enterprise/account_*/__manifest__.py].
- Others: `maintenance_enterprise`, `whatsapp_crm`, `whatsapp_sign`, `whatsapp_planning`, `whatsapp_identifiers` ("Mandatory Support for WhatsApp Business-Scoped User IDs (BSUID)"), `frontdesk_sms`/`frontdesk_whatsapp`, `voip_sale`, `voip_project`, `data_merge_product`, `website_generator_blog`, `website_sale_enterprise`, `documents_hr_*`, `sale_subscription_loyalty`, `sale_renting_loyalty`, `purchase_quality_control` [odoo-20/enterprise/<module>/__manifest__.py].

Complete lists (generated from the manifests; `[path]` is the manifest cited):

#### New in Odoo 20 Community — non-localization (45)

- `account_payment_custom` — "Payment Custom / Account Payment" — cat: Accounting/Payment Custom — application: no — auto_install — Bridge between payment_custom and account_payment. [odoo-20/odoo/addons/account_payment_custom/__manifest__.py]
- `account_payment_interco` — "Intercompany Payment - Account" — cat: Accounting/Accounting — application: no — Enable Intercompany payments to reconcile with their invoices on post. [odoo-20/odoo/addons/account_payment_interco/__manifest__.py]
- `base_report_paper_muncher` — "Report Engine: Paper Muncher" — cat: Hidden/Tools — application: no — Paper Muncher Engine [odoo-20/odoo/addons/base_report_paper_muncher/__manifest__.py]
- `base_report_wkhtmltox` — "Report Engine: wkhtmltopdf/wkhtmltoimage" — cat: Hidden/Tools — application: no — auto_install — wkhtmltopdf rendering engine [odoo-20/odoo/addons/base_report_wkhtmltox/__manifest__.py]
- `cloud_storage_migration` — "Cloud Storage Migration" — cat: Technical Settings — application: no — Migrate local attachments to cloud storage [odoo-20/odoo/addons/cloud_storage_migration/__manifest__.py]
- `crm_sale_project` — "CRM - Project" — cat: Sales/CRM — application: no — auto_install — Project Generation from Opportunities [odoo-20/odoo/addons/crm_sale_project/__manifest__.py]
- `fleet_maintenance` — "Maintenance - Fleet" — cat: Human Resources — application: no — auto_install — Integrates Fleet and Maintenance [odoo-20/odoo/addons/fleet_maintenance/__manifest__.py]
- `hr_address_extended` — "HR Address Extended" — cat: Human Resources/Employees — application: no — Centralize employee information [odoo-20/odoo/addons/hr_address_extended/__manifest__.py]
- `hr_calendar_google` — "HR Calendar with Google Calendar" — cat: Human Resources/Remote Work — application: no — auto_install [odoo-20/odoo/addons/hr_calendar_google/__manifest__.py]
- `iot_webserial` — "Web Serial IoT devices" — cat: Administration/IoT — application: no — Interface with serial devices directly via the browser using Web Serial. [odoo-20/odoo/addons/iot_webserial/__manifest__.py]
- `mail_tracking` — "Discuss Tracking" — cat: Productivity/Discuss — application: no — Technical tracking of discussion and message-related data [odoo-20/odoo/addons/mail_tracking/__manifest__.py]
- `mail_tracking_mass_mailing` — "Mass Mailing Tracking" — cat: Productivity/Discuss — application: no — auto_install — Track source of messages by mass mailing [odoo-20/odoo/addons/mail_tracking_mass_mailing/__manifest__.py]
- `mail_tracking_sms` — "SMS Message Tracking" — cat: Productivity/Discuss — application: no — auto_install — Track source of messages by sms [odoo-20/odoo/addons/mail_tracking_sms/__manifest__.py]
- `marketing_card_event` — "Marketing Card For Events" — cat: Marketing/Marketing Card — application: no — auto_install — Generate dynamic shareable cards for entities linked to events. [odoo-20/odoo/addons/marketing_card_event/__manifest__.py]
- `mrp_delivery` — "Delivery and MRP Management" — cat: Shipping Connectors — application: no — auto_install — Carrier with kits [odoo-20/odoo/addons/mrp_delivery/__manifest__.py]
- `mysubscription` — "My Subscription" — cat: Sales — application: no — auto_install — Backend Subscription App [odoo-20/odoo/addons/mysubscription/__manifest__.py]
- `payment_ecpay` — "Payment Provider: ECPay" — cat: Accounting/Payment Providers — application: no — A payment provider covering the Taiwanese market. [odoo-20/odoo/addons/payment_ecpay/__manifest__.py]
- `payment_payu` — "Payment Provider: PayU" — cat: Accounting/Payment Providers — application: no — A payment provider covering India. [odoo-20/odoo/addons/payment_payu/__manifest__.py]
- `payment_toss_payments` — "Payment Provider: Toss Payments" — cat: Accounting/Payment Providers — application: no — A payment provider covering the South Korea market [odoo-20/odoo/addons/payment_toss_payments/__manifest__.py]
- `populate` — "Populate" — cat: Hidden/Tools — application: no — Generate synthetic data for an Odoo database [odoo-20/odoo/addons/populate/__manifest__.py]
- `portal_discuss` — "Portal Discuss" — cat: Services — application: no — auto_install — Bridge module adding Discuss access from portal. [odoo-20/odoo/addons/portal_discuss/__manifest__.py]
- `pos_bancontact_pay` — "POS Bancontact Pay & Wero" — cat: Sales/Point of Sale — application: no — Accept Bancontact Pay and Wero QR code payments in POS (Payconiq). [odoo-20/odoo/addons/pos_bancontact_pay/__manifest__.py]
- `pos_cashdro` — "POS Cashdro Cash Machines" — cat: Sales/Point of Sale — application: no — Integrate your POS with a Cashdro automatic cash payment device [odoo-20/odoo/addons/pos_cashdro/__manifest__.py]
- `pos_cashmatic` — "POS Cashmatic Cash Machines" — cat: Sales/Point of Sale — application: no — Integrate your POS with a cash matic automatic cash payment device [odoo-20/odoo/addons/pos_cashmatic/__manifest__.py]
- `pos_dpopay` — "PoS DPO Pay" — cat: Sales/Point of Sale — application: no — Integrate your POS with DPO payment terminal. [odoo-20/odoo/addons/pos_dpopay/__manifest__.py]
- `pos_edi_ubl` — "Point of Sale UBL" — cat: Sales/Point of Sale — application: no — UBL in the Point of Sale [odoo-20/odoo/addons/pos_edi_ubl/__manifest__.py]
- `pos_mollie` — "POS Mollie" — cat: Sales/Point of Sale — application: no — Integrate your POS with a Mollie payment terminal [odoo-20/odoo/addons/pos_mollie/__manifest__.py]
- `pos_partner_autocomplete` — "POS Partner Autocomplete" — cat: Sales/Point of Sale — application: no — auto_install — Link module between Partner Autocomplete and Point of Sale [odoo-20/odoo/addons/pos_partner_autocomplete/__manifest__.py]
- `pos_safaricom` — "POS Safaricom" — cat: Sales/Point of Sale — application: no — Integrate your POS with the Safaricom Payment Provider [odoo-20/odoo/addons/pos_safaricom/__manifest__.py]
- `pos_sale_delivery` — "POS - Sales Delivery" — cat: Hidden — application: no — auto_install — Link module between Point of Sale and Delivery [odoo-20/odoo/addons/pos_sale_delivery/__manifest__.py]
- `pos_sale_stock` — "POS - Sales Stock" — cat: Sales/Point of Sale — application: no — auto_install — Link module between PoS Stock and Sales [odoo-20/odoo/addons/pos_sale_stock/__manifest__.py]
- `pos_self_order_bancontact_pay` — "POS Self Order Bancontact Pay & Wero" — cat: Sales/Point of Sale — application: no — auto_install — Accept Bancontact Pay and Wero QR code payments in a kiosk (Payconiq). [odoo-20/odoo/addons/pos_self_order_bancontact_pay/__manifest__.py]
- `pos_self_order_event` — "POS Self Order - Event" — cat: Sales/Point Of Sale — application: no — auto_install — Link module between PoS Self Order and PoS Event [odoo-20/odoo/addons/pos_self_order_event/__manifest__.py]
- `pos_self_order_sms` — "POS Self Order SMS" — cat: Sales/Point Of Sale — application: no — auto_install — Integrates POS Self Order with SMS to send customers order confirmation via SMS. [odoo-20/odoo/addons/pos_self_order_sms/__manifest__.py]
- `pos_stock` — "PoS - Stock" — cat: Sales/Point of Sale — application: no — auto_install — Stock integration for PoS [odoo-20/odoo/addons/pos_stock/__manifest__.py]
- `pos_sumup` — "POS SumUp" — cat: Sales/Point of Sale — application: no — Integrate your POS with a SumUp payment terminal [odoo-20/odoo/addons/pos_sumup/__manifest__.py]
- `printer` — "Printer" — cat: (none) — application: no — Base module to manage external printers (e.g. ePOS, ZPL) [odoo-20/odoo/addons/printer/__manifest__.py]
- `purchase_alternative` — "Purchase Alternative" — cat: Supply Chain/Purchase — application: no — This module allows you to manage your Purchase Alternative. =========================================================== It helps users compa [odoo-20/odoo/addons/purchase_alternative/__manifest__.py]
- `purchase_alternative_sale` — "Purchase Alternative Sale" — cat: Supply Chain/Purchase — application: no — auto_install — Bridge module for Purchase Alternative and Sales. [odoo-20/odoo/addons/purchase_alternative_sale/__manifest__.py]
- `purchase_alternative_stock` — "Purchase Alternative Stock" — cat: Supply Chain/Purchase — application: no — auto_install [odoo-20/odoo/addons/purchase_alternative_stock/__manifest__.py]
- `sale_project_margin` — "Sales Margins in Projects" — cat: Sales/Sales — application: no — auto_install — Bridge module between Sales Margin and Project [odoo-20/odoo/addons/sale_project_margin/__manifest__.py]
- `website_address_autocomplete` — "Website Address Autocomplete" — cat: Website/Website — application: no — auto_install — Assist your users with automatic completion & suggestions when filling their address [odoo-20/odoo/addons/website_address_autocomplete/__manifest__.py]
- `website_mass_mailing_event` — "Mass mailing on website events" — cat: Marketing/Email Marketing/Website — application: no — auto_install — Add pre-filled snippets in mass_mailing with an event snapshot [odoo-20/odoo/addons/website_mass_mailing_event/__manifest__.py]
- `website_partnership` — "Website Partnership" — cat: Website/Website — application: no — Publish your partners on your website [odoo-20/odoo/addons/website_partnership/__manifest__.py]
- `website_sale_project` — "Website Sale - Project" — cat: Website/Website — application: no — auto_install — Bridge module between website_sale and project [odoo-20/odoo/addons/website_sale_project/__manifest__.py]

#### New in Odoo 20 Community — localization (l10n_*) (42)

- `l10n_ae_ubl_pint` — "United Arab Emirates - UBL PINT" — cat: Accounting/Localizations/EDI — application: no — The UBL PINT e-invoicing format for UAE is based on the Peppol International (PINT) model for Billing. It also registers the PINT AE documen [odoo-20/odoo/addons/l10n_ae_ubl_pint/__manifest__.py]
- `l10n_be_pos` — "BE POS Localization" — cat: Sales/Point of Sale — application: no — auto_install — Link module between point_of_sale and l10n_be [odoo-20/odoo/addons/l10n_be_pos/__manifest__.py]
- `l10n_bh_pos` — "Bahrain - Point of Sale" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Bahrain POS Localization =========================================================== [odoo-20/odoo/addons/l10n_bh_pos/__manifest__.py]
- `l10n_dk_fik` — "Denmark - FIK Number" — cat: Accounting/Localizations — application: no — auto_install — Use FIK Number as Payment reference [odoo-20/odoo/addons/l10n_dk_fik/__manifest__.py]
- `l10n_eg_edi_pos` — "Egypt E-Receipts (POS)" — cat: Accounting/Localizations/EDI — application: no — auto_install — Submit POS receipts to the Egyptian Tax Authority [odoo-20/odoo/addons/l10n_eg_edi_pos/__manifest__.py]
- `l10n_es_website_sale` — "Spain - ECommerce" — cat: Accounting/Localizations/Website — application: no [odoo-20/odoo/addons/l10n_es_website_sale/__manifest__.py]
- `l10n_es_website_sale_id_type` — "Spain - eCommerce ID Types" — cat: Accounting/Localizations/Website — application: no — auto_install — Let customers pick the type of their identification document at checkout [odoo-20/odoo/addons/l10n_es_website_sale_id_type/__manifest__.py]
- `l10n_eu_account_vies` — "VAT VIES Validation" — cat: Accounting/Accounting — application: no — VAT validation for Partner's VAT numbers. ========================================= After installing this module, values entered in the VAT  [odoo-20/odoo/addons/l10n_eu_account_vies/__manifest__.py]
- `l10n_fr_payment` — "France - Worldline Payment Branding" — cat: (none) — application: no — auto_install — Applies CAWL/Worldline branding rules for French companies. [odoo-20/odoo/addons/l10n_fr_payment/__manifest__.py]
- `l10n_fr_pdp` — "France - E-Invoicing (Approved Platform)" — cat: Accounting/Localizations/EDI — application: no — auto_install — - Support for the mandatory electronic invoicing in France - Send and receive documents via the Odoo Approved Platform [odoo-20/odoo/addons/l10n_fr_pdp/__manifest__.py]
- `l10n_fr_pdp_penalty_rate` — "France - PDP Late Payment Penalty Rate" — cat: Accounting/Localizations/EDI — application: no — auto_install — Adds the mandatory late payment penalty information to French invoices. [odoo-20/odoo/addons/l10n_fr_pdp_penalty_rate/__manifest__.py]
- `l10n_fr_pdp_pos` — "France - E-reporting for POS" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Flux 10 e-reporting for POS [odoo-20/odoo/addons/l10n_fr_pdp_pos/__manifest__.py]
- `l10n_ge` — "Georgia - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — Georgian accounting localization package [odoo-20/odoo/addons/l10n_ge/__manifest__.py]
- `l10n_gf` — "Guyana - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — This is the base module to manage the accounting chart for Guiana. [odoo-20/odoo/addons/l10n_gf/__manifest__.py]
- `l10n_gp` — "Guadeloupe - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — This is the base module to manage the accounting chart for Guadeloupe. [odoo-20/odoo/addons/l10n_gp/__manifest__.py]
- `l10n_gr_edi_delivery_note` — "Greece - myDATA Delivery Note" — cat: Accounting/Localizations — application: no — auto_install — Transmit Greece myDATA EDI for Delivery Notes [odoo-20/odoo/addons/l10n_gr_edi_delivery_note/__manifest__.py]
- `l10n_gr_edi_e_invoo` — "Greece - myDATA E-invoicing through e-invoo" — cat: Accounting/Localizations/EDI — application: no — auto_install [odoo-20/odoo/addons/l10n_gr_edi_e_invoo/__manifest__.py]
- `l10n_gr_edi_e_invoo_bridge` — "Greece - myDATA E-invoicing through e-invoo (direct API)" — cat: Accounting/Localizations/EDI — application: no — auto_install [odoo-20/odoo/addons/l10n_gr_edi_e_invoo_bridge/__manifest__.py]
- `l10n_hr_edi` — "Croatia - e-invoicing" — cat: Accounting/Localizations/Reporting — application: no — e-invoicing for Croatia [odoo-20/odoo/addons/l10n_hr_edi/__manifest__.py]
- `l10n_id_pos_self_order_qris` — "Indonesia - POS Self Order QRIS" — cat: Sales/Point of Sale — application: no — auto_install — Accept QRIS QR code payments in a kiosk. [odoo-20/odoo/addons/l10n_id_pos_self_order_qris/__manifest__.py]
- `l10n_in_boe` — "Indian - Bill Of Entry" — cat: Accounting/Localizations — application: no — - Adds Bill of Entry (BOE) support for the Indian localization. - This Allows users to record import BOE details, link stock receipts, creat [odoo-20/odoo/addons/l10n_in_boe/__manifest__.py]
- `l10n_jo_edi_pos` — "Jordan Accounting EDI for POS" — cat: Accounting/Localizations/EDI — application: no — auto_install — Jordan Accounting EDI for POS ============================= Provides electronic invoicing for Jordan in the POS. [odoo-20/odoo/addons/l10n_jo_edi_pos/__manifest__.py]
- `l10n_kr_sale` — "Republic of Korea - Sales" — cat: Accounting/Localizations/Sale — application: no — auto_install — Bridge module between the Korean localization and Sales, exposing the proof of issuance (발행 증빙) on sales orders and propagating it to the in [odoo-20/odoo/addons/l10n_kr_sale/__manifest__.py]
- `l10n_la` — "Laos - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — Chart of accounts, VAT taxes and monthly VAT return for Laos [odoo-20/odoo/addons/l10n_la/__manifest__.py]
- `l10n_mk` — "North Macedonia - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — Chart Of Account and Taxes for North Macedonia. [odoo-20/odoo/addons/l10n_mk/__manifest__.py]
- `l10n_mm` — "Myanmar - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — Chart Of Account and Taxes for Myanmar. [odoo-20/odoo/addons/l10n_mm/__manifest__.py]
- `l10n_mq` — "Martinique - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — This is the base module to manage the accounting chart for Martinique. [odoo-20/odoo/addons/l10n_mq/__manifest__.py]
- `l10n_mr` — "Mauritania - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — Mauritania basic package that contains the chart of accounts, the taxes, tax reports, etc. [odoo-20/odoo/addons/l10n_mr/__manifest__.py]
- `l10n_ph_invoice` — "Philippines - Discount Privileges on Invoice" — cat: Accounting/Localizations — application: no — Apply Philippine SC/PWD discount privileges on customer invoices and credit notes. [odoo-20/odoo/addons/l10n_ph_invoice/__manifest__.py]
- `l10n_ph_sale` — "Philippines - Discount Privileges on Sale Orders" — cat: Accounting/Localizations — application: no — Apply Philippine SC/PWD discount privileges on quotations and sale orders. [odoo-20/odoo/addons/l10n_ph_sale/__manifest__.py]
- `l10n_pk_edi` — "Pakistan - E-invoicing" — cat: Accounting/Localizations/EDI — application: no — Electronic Invoicing for Pakistan FBR(v1.12) [odoo-20/odoo/addons/l10n_pk_edi/__manifest__.py]
- `l10n_pk_edi_pos` — "Pakistan - Point of Sale" — cat: Accounting/Localizations/Point of Sale — application: no — This module brings the technical requirement for the Pakistan regulation. Install this if you are using the Point of Sale app in Pakistan. [odoo-20/odoo/addons/l10n_pk_edi_pos/__manifest__.py]
- `l10n_pl_edi` — "Polish E-Invoicing FA(3)" — cat: Accounting/Localizations — application: no — auto_install — Support for FA(3) electronic invoices in Poland via KSeF [odoo-20/odoo/addons/l10n_pl_edi/__manifest__.py]
- `l10n_pl_edi_jst` — "Polish E-Invoicing FA(3) LGU support" — cat: Accounting/Localizations — application: no — auto_install — Support for Local Government Unit (LGU) in the FA(3) format [odoo-20/odoo/addons/l10n_pl_edi_jst/__manifest__.py]
- `l10n_re` — "Reunion - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — This is the base module to manage the accounting chart for Réunion. [odoo-20/odoo/addons/l10n_re/__manifest__.py]
- `l10n_tw_edi_ecpay_pos` — "Taiwan - E-invoicing Pos" — cat: Point of sale/Localizations/EDI — application: no — auto_install — ECpay E-invoice bridge module for POS [odoo-20/odoo/addons/l10n_tw_edi_ecpay_pos/__manifest__.py]
- `l10n_tw_edi_ecpay_sale` — "Taiwan - E-invoicing Sales" — cat: Website Sale/Localizations/EDI — application: no — auto_install — ECPay E-invoice bridge module for Sales [odoo-20/odoo/addons/l10n_tw_edi_ecpay_sale/__manifest__.py]
- `l10n_tw_edi_ecpay_website_sale` — "Taiwan - E-invoicing Ecommerce" — cat: Website Sale/Localizations/EDI — application: no — auto_install — ECpay E-invoice bridge module for Ecommerce [odoo-20/odoo/addons/l10n_tw_edi_ecpay_website_sale/__manifest__.py]
- `l10n_uz` — "Uzbekistan - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — Uzbekistan Accounting: Chart of Account. ======================================== Uzbekistan accounting chart and localization. [odoo-20/odoo/addons/l10n_uz/__manifest__.py]
- `l10n_vn_edi_viettel_pos` — "Vietnam - POS E-invoicing" — cat: Accounting/Localizations/EDI — application: no — auto_install — POS E-invoicing using SInvoice by Viettel [odoo-20/odoo/addons/l10n_vn_edi_viettel_pos/__manifest__.py]
- `l10n_vn_edi_viettel_stock` — "Vietnam - Delivery E-invoicing" — cat: Accounting/Localizations/EDI — application: no — auto_install — Delivery E-invoicing using SInvoice by Viettel [odoo-20/odoo/addons/l10n_vn_edi_viettel_stock/__manifest__.py]
- `l10n_yt` — "Mayotte - Accounting" — cat: Accounting/Localizations/Account Charts — application: no — auto_install — This is the base module to manage the accounting chart for Mayotte. [odoo-20/odoo/addons/l10n_yt/__manifest__.py]

#### New in Odoo 20 Community — test modules (3)

- `test_populate` — "Odoo Populate Tests" — cat: Hidden/Tests — application: no — Test module for Odoo's Populate [odoo-20/odoo/addons/test_populate/__manifest__.py]
- `test_translation_mode` — "Translation Mode" — cat: Hidden — application: no — In-context and interactive translation mode to streamline the module translation process using Weblate [odoo-20/odoo/addons/test_translation_mode/__manifest__.py]
- `test_utm` — "UTM Tests" — cat: Hidden — application: no — UTM Tests: tests specific to the UTM module [odoo-20/odoo/addons/test_utm/__manifest__.py]

#### Present in Odoo 19 Community but absent from Odoo 20 Community (40)

- `account_peppol_advanced_fields` — "[DEPRECATED] Account Peppol Advanced Fields" — cat: Accounting/Accounting [odoo-19/odoo/addons/account_peppol_advanced_fields/__manifest__.py]
- `base_iban` — "IBAN Bank Accounts" — cat: Accounting/Accounting [odoo-19/odoo/addons/base_iban/__manifest__.py]
- `base_vat` — "VAT Number Validation" — cat: Accounting/Accounting [odoo-19/odoo/addons/base_vat/__manifest__.py]
- `delivery_mondialrelay` — "delivery_mondialrelay" — cat: Shipping Connectors [odoo-19/odoo/addons/delivery_mondialrelay/__manifest__.py]
- `delivery_stock_picking_batch` — "Delivery Stock Picking Batch" — cat: Supply Chain/Inventory [odoo-19/odoo/addons/delivery_stock_picking_batch/__manifest__.py]
- `hr_homeworking` — "Remote Work" — cat: Human Resources/Remote Work [odoo-19/odoo/addons/hr_homeworking/__manifest__.py]
- `hr_homeworking_calendar` — "Remote Work with calendar" — cat: Human Resources/Remote Work [odoo-19/odoo/addons/hr_homeworking_calendar/__manifest__.py]
- `hr_hourly_cost` — "Employee Hourly Wage" — cat: Services/Employee Hourly Cost [odoo-19/odoo/addons/hr_hourly_cost/__manifest__.py]
- `hr_org_chart` — "HR Org Chart" — cat: Human Resources [odoo-19/odoo/addons/hr_org_chart/__manifest__.py]
- `hr_work_entry_holidays` — "Time Off in Payslips" — cat: Human Resources/Payroll [odoo-19/odoo/addons/hr_work_entry_holidays/__manifest__.py]
- `iot_base` — "IoT Base" — cat: Hidden [odoo-19/odoo/addons/iot_base/__manifest__.py]
- `iot_box_image` — "IoT Box Image Build Tools" — cat: Hidden/Tools [odoo-19/odoo/addons/iot_box_image/__manifest__.py]
- `l10n_cn_city` — "China - City Data" — cat: Accounting/Localizations [odoo-19/odoo/addons/l10n_cn_city/__manifest__.py]
- `l10n_dk_nemhandel` — "Denmark EDI - Nemhandel" — cat: Accounting/Localizations/EDI [odoo-19/odoo/addons/l10n_dk_nemhandel/__manifest__.py]
- `l10n_dk_oioubl` — "Denmark - E-invoicing" — cat: Accounting/Localizations/EDI [odoo-19/odoo/addons/l10n_dk_oioubl/__manifest__.py]
- `l10n_ec_stock` — "Ecuador - Stock" — cat: Accounting/Localizations [odoo-19/odoo/addons/l10n_ec_stock/__manifest__.py]
- `l10n_fr_hr_work_entry_holidays` — "France - Work Entries Time Off" — cat: None [odoo-19/odoo/addons/l10n_fr_hr_work_entry_holidays/__manifest__.py]
- `l10n_latam_base` — "LATAM Localization Base" — cat: Accounting/Localizations [odoo-19/odoo/addons/l10n_latam_base/__manifest__.py]
- `l10n_ro_edi_stock_batch` — "Romania - E-Transport Batch Pickings" — cat: Accounting/Localizations/EDI [odoo-19/odoo/addons/l10n_ro_edi_stock_batch/__manifest__.py]
- `l10n_sa_withholding_tax` — "Saudi Arabia - Withholding Tax" — cat: Accounting/Localizations/Account Charts [odoo-19/odoo/addons/l10n_sa_withholding_tax/__manifest__.py]
- `l10n_tr_nilvera` — "Türkiye - Nilvera" — cat: Accounting/Accounting — NOTE: still exists in Odoo 20 Enterprise [odoo-19/odoo/addons/l10n_tr_nilvera/__manifest__.py]
- `l10n_tr_nilvera_edispatch` — "Türkiye - e-Irsaliye (e-Dispatch)" — cat: Accounting/Localizations — NOTE: still exists in Odoo 20 Enterprise [odoo-19/odoo/addons/l10n_tr_nilvera_edispatch/__manifest__.py]
- `l10n_tr_nilvera_einvoice` — "Türkiye - Nilvera E-Invoice" — cat: Accounting/Accounting — NOTE: still exists in Odoo 20 Enterprise [odoo-19/odoo/addons/l10n_tr_nilvera_einvoice/__manifest__.py]
- `l10n_tr_nilvera_einvoice_extended` — "Türkiye - Nilvera E-Invoice Extended" — cat: Accounting/Accounting [odoo-19/odoo/addons/l10n_tr_nilvera_einvoice_extended/__manifest__.py]
- `l10n_uy_pos` — "Uruguayan - Point of Sale" — cat: Accounting/Localizations/Point of Sale [odoo-19/odoo/addons/l10n_uy_pos/__manifest__.py]
- `mrp_subcontracting_repair` — "MRP Subcontracting Repair" — cat: Supply Chain/Repair [odoo-19/odoo/addons/mrp_subcontracting_repair/__manifest__.py]
- `pos_restaurant_adyen` — "POS Restaurant Adyen" — cat: Point of Sale [odoo-19/odoo/addons/pos_restaurant_adyen/__manifest__.py]
- `pos_restaurant_stripe` — "POS Restaurant Stripe" — cat: Point of Sale [odoo-19/odoo/addons/pos_restaurant_stripe/__manifest__.py]
- `pos_self_order_adyen` — "POS Self Order Adyen" — cat: Sales/Point Of Sale [odoo-19/odoo/addons/pos_self_order_adyen/__manifest__.py]
- `pos_self_order_stripe` — "POS Self Order Stripe" — cat: Sales/Point Of Sale [odoo-19/odoo/addons/pos_self_order_stripe/__manifest__.py]
- `purchase_requisition_sale` — "Purchase Requisition Sale" — cat: Supply Chain/Purchase [odoo-19/odoo/addons/purchase_requisition_sale/__manifest__.py]
- `stock_picking_batch` — "Warehouse Management: Batch Transfer" — cat: Supply Chain/Inventory [odoo-19/odoo/addons/stock_picking_batch/__manifest__.py]
- `transifex` — "Transifex integration" — cat: Hidden/Tools [odoo-19/odoo/addons/transifex/__manifest__.py]
- `website_sale_autocomplete` — "Google places autocompletion" — cat: Website/Website [odoo-19/odoo/addons/website_sale_autocomplete/__manifest__.py]
- `website_sale_collect_wishlist` — "Collect & Wishlist" — cat: Website/Website [odoo-19/odoo/addons/website_sale_collect_wishlist/__manifest__.py]
- `website_sale_comparison` — "Product Comparison" — cat: Website/Website [odoo-19/odoo/addons/website_sale_comparison/__manifest__.py]
- `website_sale_comparison_wishlist` — "Product Availability Notifications" — cat: Website/Website [odoo-19/odoo/addons/website_sale_comparison_wishlist/__manifest__.py]
- `website_sale_mondialrelay` — "eCommerce Mondialrelay Delivery" — cat: Website/Website [odoo-19/odoo/addons/website_sale_mondialrelay/__manifest__.py]
- `website_sale_stock_wishlist` — "Product Availability Notifications" — cat: Website/Website [odoo-19/odoo/addons/website_sale_stock_wishlist/__manifest__.py]
- `website_sale_wishlist` — "Shopper's Wishlist" — cat: Website/Website [odoo-19/odoo/addons/website_sale_wishlist/__manifest__.py]

#### New in Odoo 20 Enterprise — non-localization (143)

- `account_accountant_payment_interco` — "Intercompany Payment - Accountant" — cat: Accounting/Accounting — application: no — Allow to have Inter company payment in the bank reconciliation widget [odoo-20/enterprise/account_accountant_payment_interco/__manifest__.py]
- `account_direct_debit` — "Direct Debit Mandate" — cat: Hidden — application: no — Manage Direct Debit Mandates [odoo-20/enterprise/account_direct_debit/__manifest__.py]
- `account_loans_extract` — "Account Loans Extract" — cat: Accounting/Accounting — application: no — auto_install — Extract data from loan scans to fill them automatically [odoo-20/enterprise/account_loans_extract/__manifest__.py]
- `account_reports_spreadsheet` — "Spreadsheet Accounting Reports" — cat: Accounting — application: no — auto_install — Spreadsheet integration with Accounting Reports [odoo-20/enterprise/account_reports_spreadsheet/__manifest__.py]
- `ai_account_reports` — "AI Accounting Reports" — cat: Hidden — application: no — auto_install — AI-assisted accounting report analysis and audit review [odoo-20/enterprise/ai_account_reports/__manifest__.py]
- `ai_agentic` — "AI" — cat: Hidden — application: YES — A powerful suite of AI tools and agents integrated directly into your Odoo environment [odoo-20/enterprise/ai_agentic/__manifest__.py]
- `ai_agentic_documents` — "AI Agentic Documents" — cat: Hidden — application: no — auto_install — Bridge module between AI Agentic and Documents. [odoo-20/enterprise/ai_agentic_documents/__manifest__.py]
- `ai_agentic_knowledge` — "AI Agentic Knowledge" — cat: Hidden — application: no — auto_install — Bridge module between AI Agentic and Knowledge. [odoo-20/enterprise/ai_agentic_knowledge/__manifest__.py]
- `ai_calendar` — "AI Calendar" — cat: AI — application: no — auto_install — Augment Calendar with AI Agents. [odoo-20/enterprise/ai_calendar/__manifest__.py]
- `ai_cloud_storage` — "AI Cloud Storage" — cat: Hidden — application: no — auto_install — AI Cloud Storage [odoo-20/enterprise/ai_cloud_storage/__manifest__.py]
- `ai_documents_fleet` — "AI Documents Fleet" — cat: Hidden — application: no — auto_install — AI Documents Fleet [odoo-20/enterprise/ai_documents_fleet/__manifest__.py]
- `ai_esg` — "AI - ESG" — cat: Hidden — application: no — auto_install — AI integration with ESG [odoo-20/enterprise/ai_esg/__manifest__.py]
- `ai_helpdesk` — "AI Helpdesk" — cat: AI — application: no — auto_install — Augment Helpdesk with AI Agents. [odoo-20/enterprise/ai_helpdesk/__manifest__.py]
- `ai_hr_recruitment_integration_website_livechat` — "AI HR Recruitment Integration Website Livechat" — cat: Hidden — application: no — auto_install — AI HR Recruitment Integration Website preview cards for website livechat [odoo-20/enterprise/ai_hr_recruitment_integration_website_livechat/__manifest__.py]
- `ai_html_builder` — "AI HTML Builder" — cat: AI — application: no — auto_install — AI HTML Builder [odoo-20/enterprise/ai_html_builder/__manifest__.py]
- `ai_marketing_automation` — "AI Marketing Automation" — cat: Hidden — application: no — auto_install — Automatically create campaigns from livechat. [odoo-20/enterprise/ai_marketing_automation/__manifest__.py]
- `ai_marketing_automation_crm` — "AI Marketing Automation CRM" — cat: Hidden — application: no — auto_install — Add CRM rules to the AI generator context [odoo-20/enterprise/ai_marketing_automation_crm/__manifest__.py]
- `ai_marketing_automation_loyalty` — "AI Marketing Automation Loyalty" — cat: Hidden — application: no — auto_install — Add coupon rules to the AI generator context [odoo-20/enterprise/ai_marketing_automation_loyalty/__manifest__.py]
- `ai_marketing_automation_sms` — "AI Marketing Automation SMS" — cat: Hidden — application: no — auto_install — Add SMS rules to the AI generator context [odoo-20/enterprise/ai_marketing_automation_sms/__manifest__.py]
- `ai_marketing_automation_website_sale` — "AI Marketing Automation Website Sale" — cat: Hidden — application: no — auto_install — Add eCommerce rules to the AI generator context [odoo-20/enterprise/ai_marketing_automation_website_sale/__manifest__.py]
- `ai_marketing_automation_whatsapp` — "AI Marketing Automation WhatsApp" — cat: Hidden — application: no — auto_install — Add WhatsApp rules to the AI generator context [odoo-20/enterprise/ai_marketing_automation_whatsapp/__manifest__.py]
- `ai_mass_mailing` — "AI Mass Mailing" — cat: AI — application: no — auto_install — Augment Mass Mailing with AI Agents. [odoo-20/enterprise/ai_mass_mailing/__manifest__.py]
- `ai_mcp` — "AI MCP Server" — cat: Technical — application: no — auto_install — Connect Odoo to any external server via the MCP [odoo-20/enterprise/ai_mcp/__manifest__.py]
- `ai_portal` — "AI Portal" — cat: Hidden/Tools — application: no — auto_install — Portal integration for AI services [odoo-20/enterprise/ai_portal/__manifest__.py]
- `ai_product` — "AI Product" — cat: AI — application: no — auto_install — AI Product [odoo-20/enterprise/ai_product/__manifest__.py]
- `ai_project` — "AI Project" — cat: AI — application: no — auto_install — Augment Project with AI Agents. [odoo-20/enterprise/ai_project/__manifest__.py]
- `ai_purchase` — "AI Purchase" — cat: AI — application: no — auto_install — Augment Purchase with AI Agents. [odoo-20/enterprise/ai_purchase/__manifest__.py]
- `ai_sale` — "AI Sale" — cat: AI — application: no — auto_install — Augment Sales with AI Agents. [odoo-20/enterprise/ai_sale/__manifest__.py]
- `ai_sale_margin` — "AI Sale Margin" — cat: AI — application: no — auto_install — Augment Sales with AI Agents. [odoo-20/enterprise/ai_sale_margin/__manifest__.py]
- `ai_sale_stock` — "AI Sale Stock" — cat: AI — application: no — auto_install — Augment Sale Stock with AI Agents. [odoo-20/enterprise/ai_sale_stock/__manifest__.py]
- `ai_social` — "Social AI" — cat: Marketing/Social Marketing — application: no — auto_install — Write social post using AI. [odoo-20/enterprise/ai_social/__manifest__.py]
- `ai_stock` — "AI Stock" — cat: AI — application: no — auto_install — Augment Stock with AI Agents. [odoo-20/enterprise/ai_stock/__manifest__.py]
- `ai_timesheet_grid` — "Timesheets - AI" — cat: Services/Timesheets — application: no — auto_install — Extend the Timesheet Assistant with AI-powered features [odoo-20/enterprise/ai_timesheet_grid/__manifest__.py]
- `ai_website_appointment_livechat` — "AI Website Appointment Livechat" — cat: Hidden — application: no — auto_install — AI Website Appointment preview cards for website livechat [odoo-20/enterprise/ai_website_appointment_livechat/__manifest__.py]
- `ai_website_appointment_sale` — "AI Website Appointment Sale" — cat: Hidden — application: no — auto_install — AI Website Appointment Sale [odoo-20/enterprise/ai_website_appointment_sale/__manifest__.py]
- `ai_website_blog_livechat` — "AI Website Blog Livechat" — cat: AI — application: no — auto_install — AI Website Blog preview cards for website livechat [odoo-20/enterprise/ai_website_blog_livechat/__manifest__.py]
- `ai_website_event_livechat` — "AI Website Event Livechat" — cat: Hidden — application: no — auto_install — AI Website Event preview cards for website livechat [odoo-20/enterprise/ai_website_event_livechat/__manifest__.py]
- `ai_website_helpdesk` — "AI Website Helpdesk" — cat: Hidden — application: no — auto_install — AI website helpdesk [odoo-20/enterprise/ai_website_helpdesk/__manifest__.py]
- `ai_website_sale` — "AI Website Sale" — cat: AI — application: no — auto_install — AI Website Sale [odoo-20/enterprise/ai_website_sale/__manifest__.py]
- `ai_website_sale_livechat` — "AI Website Sale Livechat" — cat: Hidden — application: no — auto_install — AI Website Sale preview cards for website livechat [odoo-20/enterprise/ai_website_sale_livechat/__manifest__.py]
- `ai_website_sale_slides` — "AI Website Sale Slides" — cat: Hidden — application: no — auto_install — AI Website Sale Slides Integration [odoo-20/enterprise/ai_website_sale_slides/__manifest__.py]
- `ai_website_slides_livechat` — "AI Website Slides Livechat" — cat: Hidden — application: no — auto_install — AI Website Slides preview cards for website livechat [odoo-20/enterprise/ai_website_slides_livechat/__manifest__.py]
- `data_merge_product` — "Product Deduplication" — cat: Productivity/Data Cleaning — application: no — auto_install — Find duplicate records and merge them [odoo-20/enterprise/data_merge_product/__manifest__.py]
- `databases_auth` — "Databases SaaS autoconnect" — cat: Services/Databases — application: no — Allow your user to be automatically connected to a SaaS database [odoo-20/enterprise/databases_auth/__manifest__.py]
- `delivery_fedex_certified` — "Fedex Shipping" — cat: Shipping Connectors — application: YES — Send your shippings through Fedex and track them online. This version of the FedEx connector iscompatible with the FedEx REST API available  [odoo-20/enterprise/delivery_fedex_certified/__manifest__.py]
- `delivery_shipstation` — "ShipStation Shipping" — cat: Shipping Connectors — application: YES — Send your parcels through ShipStation and track them online [odoo-20/enterprise/delivery_shipstation/__manifest__.py]
- `documents_hr_recruitment` — "Documents - Recruitment" — cat: Productivity/Documents — application: no — auto_install — Recruitment resumés and letters from documents [odoo-20/enterprise/documents_hr_recruitment/__manifest__.py]
- `documents_hr_recruitment_sign` — "Documents HR Recruitment Sign" — cat: Productivity/Documents — application: no — auto_install — Sign documents attached to Recruitment folders [odoo-20/enterprise/documents_hr_recruitment_sign/__manifest__.py]
- `documents_hr_sign` — "Documents - Contract - Signature" — cat: Productivity/Documents — application: no — auto_install — Manage employee documents requiring signature [odoo-20/enterprise/documents_hr_sign/__manifest__.py]
- `documents_hr_skills` — "Documents - Certificates" — cat: Productivity/Documents — application: no — auto_install — Hr Skills Certificates in Documents [odoo-20/enterprise/documents_hr_skills/__manifest__.py]
- `documents_l10n_mx_hr_payroll_account_edi` — "Documents - Mexican Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Attach Mexican payroll CFDI XML to payslips emails [odoo-20/enterprise/documents_l10n_mx_hr_payroll_account_edi/__manifest__.py]
- `documents_l10n_ph_hr_payroll` — "Documents - Philippines Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Store payroll declarations in the Document app [odoo-20/enterprise/documents_l10n_ph_hr_payroll/__manifest__.py]
- `documents_spreadsheet_sign` — "Spreadsheet Sign" — cat: (none) — application: no — auto_install — Spreadsheet integration for Sign templates [odoo-20/enterprise/documents_spreadsheet_sign/__manifest__.py]
- `frontdesk_partnership` — "Frontdesk Partnership" — cat: Human Resources/Frontdesk — application: no — auto_install — Use grades to filter the validity at a frontdesk [odoo-20/enterprise/frontdesk_partnership/__manifest__.py]
- `frontdesk_sms` — "Frontdesk - SMS" — cat: Human Resources/Frontdesk — application: no — auto_install — Send SMS notifications for visitor check-ins [odoo-20/enterprise/frontdesk_sms/__manifest__.py]
- `frontdesk_whatsapp` — "Frontdesk - WhatsApp" — cat: Human Resources/Frontdesk — application: no — auto_install — Send WhatsApp notifications for visitor check-ins [odoo-20/enterprise/frontdesk_whatsapp/__manifest__.py]
- `helpdesk_planning_field_service` — "Helpdesk Field Service" — cat: Services/Helpdesk — application: no — auto_install — Allow generating intervention from ticket [odoo-20/enterprise/helpdesk_planning_field_service/__manifest__.py]
- `helpdesk_planning_field_service_sale_timesheet` — "Helpdesk - Field Service - Sale" — cat: Services/Helpdesk — application: no — auto_install — Project, Helpdesk, FSM, Timesheet and Sale Orders [odoo-20/enterprise/helpdesk_planning_field_service_sale_timesheet/__manifest__.py]
- `helpdesk_timesheet_calendar` — "Timesheets Calendar Helpdesk" — cat: Services/Timesheets — application: no — auto_install — Assign calendar event suggestions linked to a Helpdesk ticket to its project [odoo-20/enterprise/helpdesk_timesheet_calendar/__manifest__.py]
- `hr_attendance_biometric_integration` — "Biometric Attendances" — cat: Human Resources/Attendances — application: no — Shared biometric attendance inbox and processor [odoo-20/enterprise/hr_attendance_biometric_integration/__manifest__.py]
- `hr_attendance_essl` — "Biometric Attendances - eSSL" — cat: Human Resources/Attendances — application: no — eSSL biometric attendances [odoo-20/enterprise/hr_attendance_essl/__manifest__.py]
- `hr_attendance_mantra` — "Biometric Attendances - Mantra" — cat: Human Resources/Attendances — application: no — Mantra biometric attendances [odoo-20/enterprise/hr_attendance_mantra/__manifest__.py]
- `hr_attendance_pos_hr_mobile_nfc` — "Attendances NFC Badges in Mobile" — cat: Human Resources/Attendances — application: no — auto_install — NFC badge enrolment in Mobile [odoo-20/enterprise/hr_attendance_pos_hr_mobile_nfc/__manifest__.py]
- `hr_attendance_zkteco` — "Attendances ZKTeco BioTime" — cat: Human Resources — application: no — Integrate ZKTeco BioPro with attendances app via BioTime 8.5 & 9.0 API [odoo-20/enterprise/hr_attendance_zkteco/__manifest__.py]
- `maintenance_enterprise` — "Enterprise Maintenance" — cat: Supply Chain/Maintenance — application: no — auto_install — Advanced features for Maintenance [odoo-20/enterprise/maintenance_enterprise/__manifest__.py]
- `marketing_automation_loyalty` — "Coupons & Loyalty" — cat: Loyalty in Marketing Automation — application: no — auto_install — Use discounts, gift cards, eWallets and loyalty programs in your sales channels [odoo-20/enterprise/marketing_automation_loyalty/__manifest__.py]
- `marketing_automation_website` — "Website Marketing Automation" — cat: Marketing/Marketing Automation — application: no — auto_install — Marketing Automation Overrides for Website [odoo-20/enterprise/marketing_automation_website/__manifest__.py]
- `mrp_iot` — "IoT for Manufacturing" — cat: Supply Chain/Internet of Things (IoT) — application: no — auto_install — Extend Manufacturing operations using IoT devices [odoo-20/enterprise/mrp_iot/__manifest__.py]
- `obox` — "Obox - Odoo IoT management" — cat: Administration/IoT — application: YES — This module provides management of your Odoo IoT Boxes (Obox) inside Odoo. Obox are Odoo IoT Boxes, hardware devices that can be used to con [odoo-20/enterprise/obox/__manifest__.py]
- `obox_android` — "Obox - Android" — cat: Hidden — application: no — auto_install — Support of the Obox running in the Odoo Android app. [odoo-20/enterprise/obox_android/__manifest__.py]
- `obox_mrp` — "Manufacturing & Obox" — cat: Supply Chain/Internet of Things (IoT) — application: no — auto_install — Extend Manufacturing operations using Obox devices [odoo-20/enterprise/obox_mrp/__manifest__.py]
- `obox_point_of_sale` — "PoS & Obox" — cat: Administration/IoT — application: no — auto_install — Link between Obox and Point of Sale [odoo-20/enterprise/obox_point_of_sale/__manifest__.py]
- `obox_point_of_sale_android` — "PoS & Obox Android" — cat: Hidden — application: no — auto_install — Point of Sale support for Obox in the Odoo Android app [odoo-20/enterprise/obox_point_of_sale_android/__manifest__.py]
- `obox_pos_mobile` — "PoS & Obox Mobile" — cat: Hidden — application: no — auto_install — Obox support of the Point of Sale in the Odoo Mobile App [odoo-20/enterprise/obox_pos_mobile/__manifest__.py]
- `obox_pos_self_order` — "PoS Self Order & Obox" — cat: Administration/IoT — application: no — auto_install — Link between Obox and PoS self order [odoo-20/enterprise/obox_pos_self_order/__manifest__.py]
- `obox_pos_self_order_android` — "PoS Self Order & Obox Android" — cat: Hidden — application: no — auto_install — Obox Kiosk support in the Odoo Android app [odoo-20/enterprise/obox_pos_self_order_android/__manifest__.py]
- `obox_quality` — "Quality Steps & Obox" — cat: Supply Chain/Obox — application: no — auto_install — Quality steps and Obox devices [odoo-20/enterprise/obox_quality/__manifest__.py]
- `obox_quality_android` — "Quality Steps & Obox Android" — cat: Hidden — application: no — auto_install — Quality steps using devices connected to the Obox running in the Odoo Android app [odoo-20/enterprise/obox_quality_android/__manifest__.py]
- `obox_quality_control` — "Quality Control & Obox" — cat: Supply Chain/Obox — application: no — auto_install — Control the quality of your products with Obox devices [odoo-20/enterprise/obox_quality_control/__manifest__.py]
- `obox_quality_control_android` — "Quality Control & Obox Android" — cat: Hidden — application: no — auto_install — Quality control using devices connected to the Obox running in the Odoo Android app [odoo-20/enterprise/obox_quality_control_android/__manifest__.py]
- `planning_field_service` — "Field Service" — cat: Human Resources/Planning — application: YES — Plan intervention in planning [odoo-20/enterprise/planning_field_service/__manifest__.py]
- `planning_field_service_hr_attendance` — "Field Service - Attendance" — cat: Services/Field Service — application: no — auto_install — Technical Bridge [odoo-20/enterprise/planning_field_service_hr_attendance/__manifest__.py]
- `planning_field_service_repair` — "Field Service Repair" — cat: Services/Field Service — application: no — auto_install — Allow user without repair right to access field serivce stock.picking [odoo-20/enterprise/planning_field_service_repair/__manifest__.py]
- `planning_field_service_sale_stock` — "Field Service Stock" — cat: Human Resources/Planning — application: no — auto_install — Validate stock moves for product added on sales orders through an intervention planned [odoo-20/enterprise/planning_field_service_sale_stock/__manifest__.py]
- `planning_field_service_sale_subscription` — "Field Service - Sale Subscription" — cat: Services/Field Service — application: no — auto_install — Technical Bridge [odoo-20/enterprise/planning_field_service_sale_subscription/__manifest__.py]
- `planning_field_service_sale_timesheet` — "Field Service - Sale - Timesheet" — cat: Human Resources/Planning — application: no — auto_install — Plan intervention and invoice your time and materials to your customers [odoo-20/enterprise/planning_field_service_sale_timesheet/__manifest__.py]
- `planning_field_service_sale_timesheet_barcodes` — "Field Service - Barcode" — cat: Human Resources/Planning — application: no — auto_install — Scan barcodes to add products to interventions [odoo-20/enterprise/planning_field_service_sale_timesheet_barcodes/__manifest__.py]
- `planning_field_service_sale_worksheet` — "Field Service Reports - Sale" — cat: Services/Field Service — application: no — auto_install — Create Reports for Field service technicians [odoo-20/enterprise/planning_field_service_sale_worksheet/__manifest__.py]
- `planning_field_service_sms` — "Field Service - SMS" — cat: Human Resources/Planning — application: no — auto_install — Send text messages to notify the status of the intervention [odoo-20/enterprise/planning_field_service_sms/__manifest__.py]
- `planning_field_service_stock` — "Field Service - Stock" — cat: Human Resources/Planning — application: no — auto_install — Plan intervention and track serial numbers for shifts [odoo-20/enterprise/planning_field_service_stock/__manifest__.py]
- `planning_field_service_stock_subscription` — "Field Service Stock Subscription" — cat: Human Resources/Planning — application: no — auto_install — Manage maintenance contracts with subscriptions [odoo-20/enterprise/planning_field_service_stock_subscription/__manifest__.py]
- `planning_field_service_worksheet` — "Field Service Reports" — cat: Services/Field Service — application: no — auto_install — Create Reports for Field service technicians [odoo-20/enterprise/planning_field_service_worksheet/__manifest__.py]
- `planning_sale_subscription` — "Planning Sale Subscription" — cat: Services/sales/subscriptions — application: no — auto_install — Planning Sales Subscriptions [odoo-20/enterprise/planning_sale_subscription/__manifest__.py]
- `pos_enterprise_sms_whatsapp` — "POS Enterprise SMS Whatsapp" — cat: Sales/Point of Sale — application: no — auto_install — This module enables communication via WhatsApp and SMS in the preparation display [odoo-20/enterprise/pos_enterprise_sms_whatsapp/__manifest__.py]
- `pos_hr_mobile_nfc` — "POS NFC Badges in Mobile" — cat: Hidden — application: no — Identify employees on the POS with their NFC badge [odoo-20/enterprise/pos_hr_mobile_nfc/__manifest__.py]
- `pos_mobile_android` — "Point of Sale Mobile Android" — cat: Hidden — application: no — auto_install — Odoo Android app features for the Point of Sale [odoo-20/enterprise/pos_mobile_android/__manifest__.py]
- `pos_planning` — "PoS - Planning" — cat: Sales/Point of Sale — application: no — auto_install — Link module between Point of Sale and Planning [odoo-20/enterprise/pos_planning/__manifest__.py]
- `pos_platform_order` — "Point of Sale - Platform Order Integration" — cat: Sales/Point of Sale — application: no — This module integrates the Odoo Point of Sale with various ordering platforms. [odoo-20/enterprise/pos_platform_order/__manifest__.py]
- `pos_platform_order_gofood` — "Platform Order Provider: GoFood" — cat: Sales/Point of Sale — application: no — This module integrates with GoFood to receive and manage orders. [odoo-20/enterprise/pos_platform_order_gofood/__manifest__.py]
- `pos_platform_order_grabfood` — "Platform Order Provider: GrabFood" — cat: Sales/Point of Sale — application: no — This module integrates with GrabFood to receive and manage orders. [odoo-20/enterprise/pos_platform_order_grabfood/__manifest__.py]
- `pos_sale_commission` — "Sale Commission: Point of Sale" — cat: Sales/Commission — application: no — auto_install — Manage your salespersons' commissions [odoo-20/enterprise/pos_sale_commission/__manifest__.py]
- `pos_sale_planning` — "Point of Sale Sale Planning" — cat: Point of Sale — application: no — auto_install — Link between PoS and Sale Planning. [odoo-20/enterprise/pos_sale_planning/__manifest__.py]
- `pos_sale_purchase_stock_inter_company_rules` — "Inter Company Module for Pos & Sale/Purchase Orders (with Inventory link)" — cat: Productivity — application: no — auto_install — Intercompany SO/PO with Pos [odoo-20/enterprise/pos_sale_purchase_stock_inter_company_rules/__manifest__.py]
- `pos_sale_renting_planning` — "Point of Sale Sale Renting Planning" — cat: Point of Sale — application: no — auto_install — Link between PoS Sale planning and Sale Renting Planning. [odoo-20/enterprise/pos_sale_renting_planning/__manifest__.py]
- `pos_self_order_mobile` — "POS Self Order Mobile" — cat: Hidden — application: no — auto_install — Odoo Mobile POS Self Order module [odoo-20/enterprise/pos_self_order_mobile/__manifest__.py]
- `pos_self_order_urban_piper` — "PoS Self Order UrbanPiper" — cat: Sales/Point of Sale — application: no — auto_install — This module integrates PoS Self-Order and Restaurant modules with UrbanPiper, extending order management capabilities for orders received th [odoo-20/enterprise/pos_self_order_urban_piper/__manifest__.py]
- `pos_stock_enterprise` — "PoS Stock enterprise" — cat: Sales/Point of Sale — application: no — auto_install — Stock integration for advanced PoS features [odoo-20/enterprise/pos_stock_enterprise/__manifest__.py]
- `pricer` — "Pricer" — cat: Sales/Sales — application: no — Display and change your products information on electronic Pricer tags [odoo-20/enterprise/pricer/__manifest__.py]
- `project_enterprise_hr_todo` — "Project Enterprise HR To-Do" — cat: Services/Project — application: no — auto_install — Bridge module for project_enterprise_hr and project_todo [odoo-20/enterprise/project_enterprise_hr_todo/__manifest__.py]
- `project_timesheet_forecast_field_service_sale` — "Project Forecast - Field Service - Sale" — cat: Human Resources/Planning — application: no — auto_install — Add project and task to your interventions [odoo-20/enterprise/project_timesheet_forecast_field_service_sale/__manifest__.py]
- `purchase_quality_control` — "Purchase Quality" — cat: Supply Chain/Quality — application: no — auto_install — Bridge module between Purchase and Quality [odoo-20/enterprise/purchase_quality_control/__manifest__.py]
- `quality_control_iot_webserial` — "Web Serial devices for Quality Control" — cat: Supply Chain/Internet of Things (IoT) — application: no — auto_install — Control the quality of your products with serial devices [odoo-20/enterprise/quality_control_iot_webserial/__manifest__.py]
- `sale_lazada` — "Lazada Connector" — cat: Sales/Sales — application: YES — Import Lazada orders and sync deliveries [odoo-20/enterprise/sale_lazada/__manifest__.py]
- `sale_project_enterprise` — "Sale Project Enterprise" — cat: Sales/Sales — application: no — auto_install [odoo-20/enterprise/sale_project_enterprise/__manifest__.py]
- `sale_renting_intrastat` — "Rental Intrastat" — cat: Accounting/Accounting — application: no — auto_install — Bridge module between rental and intrastat. [odoo-20/enterprise/sale_renting_intrastat/__manifest__.py]
- `sale_renting_loyalty` — "Rental & Loyalty" — cat: Sales/Sales — application: no — auto_install — Bridge between the Rental app & Loyalty [odoo-20/enterprise/sale_renting_loyalty/__manifest__.py]
- `sale_renting_pdf_quote_builder` — "Rental & Sales PDF Quotation Builder" — cat: Sales/Sales — application: no — auto_install — Bridge between Rental & Sales PDF Quotation Builder [odoo-20/enterprise/sale_renting_pdf_quote_builder/__manifest__.py]
- `sale_subscription_loyalty` — "Sale Subscriptions Loyalty" — cat: Sales/Subscriptions — application: no — auto_install — Loyalty points and rewards for subscription renewals [odoo-20/enterprise/sale_subscription_loyalty/__manifest__.py]
- `sale_tiktok` — "TikTok Shop Connector" — cat: Sales/Sales — application: YES — Import TikTok Shop orders and sync deliveries [odoo-20/enterprise/sale_tiktok/__manifest__.py]
- `spreadsheet_dashboard_hr_appraisal` — "Spreadsheet dashboard for Employee" — cat: Productivity/Dashboard — application: no — auto_install — Spreadsheet [odoo-20/enterprise/spreadsheet_dashboard_hr_appraisal/__manifest__.py]
- `spreadsheet_dashboard_sale_timesheet_enterprise` — "Spreadsheet dashboard for timesheets" — cat: Productivity/Dashboard — application: no — auto_install — Analyze billing targets vs actual billable time in timesheets (Spreadsheet) dashboard [odoo-20/enterprise/spreadsheet_dashboard_sale_timesheet_enterprise/__manifest__.py]
- `spreadsheet_dashboard_voip` — "Spreadsheet dashboard for Phone" — cat: Productivity/Dashboard — application: no — auto_install — Spreadsheet [odoo-20/enterprise/spreadsheet_dashboard_voip/__manifest__.py]
- `spreadsheet_edition_account` — "Spreadsheet edition account" — cat: Productivity/Dashboard — application: no — auto_install — Enable fiscal year global filter in spreadsheet edition [odoo-20/enterprise/spreadsheet_edition_account/__manifest__.py]
- `stock_barcode_barcodelookup_product_expiry` — "Barcode Expiry - Barcode Lookup" — cat: Inventory/Inventory — application: no — auto_install [odoo-20/enterprise/stock_barcode_barcodelookup_product_expiry/__manifest__.py]
- `stock_barcode_fleet` — "Stock Barcode Fleet" — cat: (none) — application: no — auto_install — Bridge module for stock_barcode and stock_fleet [odoo-20/enterprise/stock_barcode_fleet/__manifest__.py]
- `stock_intrastat_pos` — "Stock Intrastat POS" — cat: Supply Chain/Inventory — application: no — auto_install — A bridge module that add the POS stock management in intrastat reports. [odoo-20/enterprise/stock_intrastat_pos/__manifest__.py]
- `stock_intrastat_purchase_stock` — "Stock Intrastat Purchase Stock" — cat: Supply Chain/Inventory — application: no — auto_install — A bridge module that add the purchase stock management in intrastat reports. [odoo-20/enterprise/stock_intrastat_purchase_stock/__manifest__.py]
- `stock_intrastat_sale_stock` — "Stock Intrastat Sale Stock" — cat: Supply Chain/Inventory — application: no — auto_install — A bridge module that add the sale stock management in intrastat reports. [odoo-20/enterprise/stock_intrastat_sale_stock/__manifest__.py]
- `stock_pricer` — "Pricer for Inventory" — cat: Supply Chain/Inventory — application: no — auto_install — Display and change your products information on electronic Pricer tags [odoo-20/enterprise/stock_pricer/__manifest__.py]
- `timesheet_grid_calendar` — "Timesheets Calendar" — cat: Services/Timesheets — application: no — auto_install — Add Calendar Events to Timesheets Assistant [odoo-20/enterprise/timesheet_grid_calendar/__manifest__.py]
- `timesheet_grid_hr_attendance` — "Timesheets Grid / Attendance" — cat: Hidden — application: no — auto_install — Bridge module between Timesheets Grid and Attendance [odoo-20/enterprise/timesheet_grid_hr_attendance/__manifest__.py]
- `voip_cloud_storage_google` — "VoIP Cloud Storage" — cat: Hidden — application: no — Bridge between VoIP and Cloud Storage [odoo-20/enterprise/voip_cloud_storage_google/__manifest__.py]
- `voip_project` — "Phone - Project" — cat: Services/Project — application: no — auto_install — Phone integration with Project module. [odoo-20/enterprise/voip_project/__manifest__.py]
- `voip_sale` — "Phone - Sales" — cat: Services/Sales — application: no — auto_install — Phone integration with Sales module. [odoo-20/enterprise/voip_sale/__manifest__.py]
- `website_generator_blog` — "Website Generator Blog" — cat: Website/Website — application: no — auto_install — Import blogs from a pre-existing website [odoo-20/enterprise/website_generator_blog/__manifest__.py]
- `website_planning_field_service` — "Website Planning Field Service" — cat: Human Resources/Planning — application: no — auto_install — Collect intervention requests via an online form [odoo-20/enterprise/website_planning_field_service/__manifest__.py]
- `website_sale_collect_renting` — "eCommerce Rental with Click and Collect" — cat: Website/Website — application: no — auto_install — Click and Collect for rental products on the eCommerce website. [odoo-20/enterprise/website_sale_collect_renting/__manifest__.py]
- `website_sale_enterprise` — "Website Sale Enterprise" — cat: Website/Website — application: no — auto_install — Advanced Features for eCommerce [odoo-20/enterprise/website_sale_enterprise/__manifest__.py]
- `whatsapp_crm` — "WhatsApp CRM" — cat: WhatsApp — application: no — auto_install — Continue WhatsApp conversations directly from CRM leads [odoo-20/enterprise/whatsapp_crm/__manifest__.py]
- `whatsapp_identifiers` — "WhatsApp Identifiers" — cat: Marketing/WhatsApp — application: no — auto_install — Mandatory Support for WhatsApp Business-Scoped User IDs (BSUID) [odoo-20/enterprise/whatsapp_identifiers/__manifest__.py]
- `whatsapp_planning` — "WhatsApp Planning" — cat: WhatsApp — application: no — auto_install — This module Integrates Planning with WhatsApp [odoo-20/enterprise/whatsapp_planning/__manifest__.py]
- `whatsapp_pos_self_order` — "WhatsApp PoS Self Order" — cat: WhatsApp — application: no — auto_install — Integrates POS Self Order with WhatsApp to send customers order confirmation and receipt. [odoo-20/enterprise/whatsapp_pos_self_order/__manifest__.py]
- `whatsapp_sign` — "WhatsApp-Sign" — cat: WhatsApp — application: no — auto_install — This module enables users to send signature requests via WhatsApp in Odoo Sign [odoo-20/enterprise/whatsapp_sign/__manifest__.py]

#### New in Odoo 20 Enterprise — localization (l10n_*) (99)

- `l10n_ae_faf` — "United Arab Emirates - FTA VAT Audit" — cat: (none) — application: no — Accounting reports: - FTA VAT Audit [odoo-20/enterprise/l10n_ae_faf/__manifest__.py]
- `l10n_ae_hr_contract_salary` — "Salary Configurator (United Arab Emirates)" — cat: Human Resources — application: no — auto_install — Salary Package Configurator [odoo-20/enterprise/l10n_ae_hr_contract_salary/__manifest__.py]
- `l10n_at_intrastat` — "Austrian Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Generates Intrastat PDF report for declaration based on invoices. [odoo-20/enterprise/l10n_at_intrastat/__manifest__.py]
- `l10n_be_hr_payroll_belcotaxonweb_2` — "Belgian Payroll - Belcotax-on-web 2.0" — cat: Human Resources/Payroll — application: no — auto_install — Export the 281 forms as JSON Lines files and check their withholding taxes per employee [odoo-20/enterprise/l10n_be_hr_payroll_belcotaxonweb_2/__manifest__.py]
- `l10n_be_hr_payroll_expense` — "Belgian Payroll - Mobility Budget Expenses" — cat: Human Resources/Payroll — application: no — auto_install — Mobility budget management for Belgian payroll expenses [odoo-20/enterprise/l10n_be_hr_payroll_expense/__manifest__.py]
- `l10n_be_hr_payroll_sign` — "Belgian Payroll - Sign" — cat: Human Resources/Employees — application: no — auto_install — Sign extension for Belgian Payroll documents [odoo-20/enterprise/l10n_be_hr_payroll_sign/__manifest__.py]
- `l10n_be_pos_blackbox` — "Belgian Registered Cash Register (v2)" — cat: Sales/Point of Sale — application: no — Implements the registered cash system, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox/__manifest__.py]
- `l10n_be_pos_blackbox_hr` — "Belgian Registered Cash Register HR Extension" — cat: Sales/Point of Sale — application: no — auto_install — Implements the registered cash system HR extension, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox_hr/__manifest__.py]
- `l10n_be_pos_blackbox_loyalty` — "Belgian Registered Cash Register Loyalty Extension" — cat: Sales/Point of Sale — application: no — auto_install — Implements the registered cash system loyalty extension, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox_loyalty/__manifest__.py]
- `l10n_be_pos_blackbox_self_order` — "Belgian Registered Cash Register Self-Order Extension" — cat: Sales/Point of Sale — application: no — auto_install — Implements the registered cash system self-order extension, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox_self_order/__manifest__.py]
- `l10n_be_pos_blackbox_settle_due` — "Belgian Registered Cash Register Settle Due Extension" — cat: Sales/Point of Sale — application: no — auto_install — Implements the registered cash system settle due extension, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox_settle_due/__manifest__.py]
- `l10n_be_pos_blackbox_urban_piper` — "Belgian Registered Cash Register Urban Piper Extension" — cat: Sales/Point of Sale — application: no — auto_install — Implements the registered cash system Urban Piper extension, adhering to guidelines by FPS Finance. [odoo-20/enterprise/l10n_be_pos_blackbox_urban_piper/__manifest__.py]
- `l10n_be_reports_vat_comment` — "Belgium - Accounting Reports VAT Comment" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Extension for accounting returns in Belgium [odoo-20/enterprise/l10n_be_reports_vat_comment/__manifest__.py]
- `l10n_be_saft` — "Belgian Standard Audit File for Tax" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Belgian SAF-T is a standard file format for exporting various types of accounting transactional data using the XML format. The SAF-T Financi [odoo-20/enterprise/l10n_be_saft/__manifest__.py]
- `l10n_bg_intrastat` — "Bulgarian Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Bulgaria - Intrastat Report [odoo-20/enterprise/l10n_bg_intrastat/__manifest__.py]
- `l10n_bg_saft` — "Bulgarian Standard Audit File for Tax" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Bulgarian SAF-T is standard file format for exporting various types of accounting transactional data using the XML format. [odoo-20/enterprise/l10n_bg_saft/__manifest__.py]
- `l10n_br_edi_extract` — "Brazil - NFS-e Bill OCR" — cat: Accounting/Localizations — application: no — auto_install — OCR support for NFS-e Vendor Bills for Brazil Localization [odoo-20/enterprise/l10n_br_edi_extract/__manifest__.py]
- `l10n_ch_hr_payroll_elm_transmission_5_3` — "Swissdec Certified Payroll ELM 5.3" — cat: Human Resources/Payroll — application: no — auto_install — This module extends the certification to ELM 5.1 and ELM 5.3 adds various quality of life improvements, such as: - Possibility to attribute  [odoo-20/enterprise/l10n_ch_hr_payroll_elm_transmission_5_3/__manifest__.py]
- `l10n_ci_edi` — "Ivory Coast - E-Invoicing (FNE)" — cat: Accounting/Localizations/EDI — application: no — auto_install — Ivory Coast Facture Normalisée Electronique (FNE) Integration [odoo-20/enterprise/l10n_ci_edi/__manifest__.py]
- `l10n_cl_edi_stock_reform` — "Chile - E-Invoicing Delivery Guide (Res. 154)" — cat: Accounting/Localizations/EDI — application: no — auto_install — Transport data required on the electronic delivery guide by SII Res. Ex. N° 154 de 2025. [odoo-20/enterprise/l10n_cl_edi_stock_reform/__manifest__.py]
- `l10n_cl_reports_f29` — "Chile - Accounting Reports - F29" — cat: Accounting/Localizations/Reporting — application: no — auto_install — F29 Accounting reports for Chile [odoo-20/enterprise/l10n_cl_reports_f29/__manifest__.py]
- `l10n_co_edi_pos` — "Electronic invoicing for POS in Colombia" — cat: Accounting/Localizations/EDI — application: no — Colombian Localization for POS and EDI documents [odoo-20/enterprise/l10n_co_edi_pos/__manifest__.py]
- `l10n_din5008_planning_field_service` — "DIN 5008 - Field Service" — cat: Accounting/Localizations — application: no — auto_install [odoo-20/enterprise/l10n_din5008_planning_field_service/__manifest__.py]
- `l10n_do_edi` — "Dominican Republic - Accounting EDI" — cat: Accounting/Localizations/EDI — application: no — Accounting EDI for Dominican Republic [odoo-20/enterprise/l10n_do_edi/__manifest__.py]
- `l10n_eg_hr_contract_salary` — "Salary Configurator (Egypt)" — cat: Human Resources — application: no — auto_install — Salary Package Configurator [odoo-20/enterprise/l10n_eg_hr_contract_salary/__manifest__.py]
- `l10n_eg_iot` — "Egypt - Internet Of Things" — cat: Administration/IoT — application: no — auto_install [odoo-20/enterprise/l10n_eg_iot/__manifest__.py]
- `l10n_es_intrastat` — "Spain - Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Spain - Intrastat Report [odoo-20/enterprise/l10n_es_intrastat/__manifest__.py]
- `l10n_es_reports_pos` — "Spain - Accounting Reports Libro IVA PoS" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Point of Sale support for the Spanish VAT record books (Libros Registro de IVA). [odoo-20/enterprise/l10n_es_reports_pos/__manifest__.py]
- `l10n_fi_edi` — "Finland - Accounting EDI" — cat: Accounting/Localizations/EDI — application: no — auto_install — Accounting EDI for Finland [odoo-20/enterprise/l10n_fi_edi/__manifest__.py]
- `l10n_fi_intrastat` — "Finnish Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Generates Intrastat CSV report for declaration based on invoices for Finland. [odoo-20/enterprise/l10n_fi_intrastat/__manifest__.py]
- `l10n_fr_account_loans` — "France - Loans Management" — cat: Accounting/Localizations — application: no — auto_install — France specific features for managing loans. [odoo-20/enterprise/l10n_fr_account_loans/__manifest__.py]
- `l10n_fr_reports_accountant_knowledge` — "France - Accountant Knowledge" — cat: Accounting/Localizations — application: no — auto_install — French Annual Report template for the Knowledge app [odoo-20/enterprise/l10n_fr_reports_accountant_knowledge/__manifest__.py]
- `l10n_ge_hr_payroll` — "Georgia - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Georgia Payroll Rules ===================== - Funded pension (Law on Funded Pensions of 2018): 2% employee and 2% employer of the taxable sa [odoo-20/enterprise/l10n_ge_hr_payroll/__manifest__.py]
- `l10n_ge_hr_payroll_account` — "Georgia - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Georgia Payroll Rules ========================================= Salary journal and default accounts of the Georgian char [odoo-20/enterprise/l10n_ge_hr_payroll_account/__manifest__.py]
- `l10n_gr_intrastat` — "Greece Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — Generates Intrastat PDF report for declaration based on invoices for Greece. [odoo-20/enterprise/l10n_gr_intrastat/__manifest__.py]
- `l10n_gt_edi_pos` — "Guatemalan Accounting EDI for POS" — cat: Accounting/Localizations/EDI — application: no — auto_install — Extends the Point of Sale module to comply with Guatemalan electronic invoicing regulations (FEL). [odoo-20/enterprise/l10n_gt_edi_pos/__manifest__.py]
- `l10n_gt_reports` — "Guatemala - Accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Libro de Ventas and Libro de Compras (VAT books) for Guatemala [odoo-20/enterprise/l10n_gt_reports/__manifest__.py]
- `l10n_hk_autopay` — "Hong Kong - AutoPay" — cat: (none) — application: no — Export payments as AutoPay files [odoo-20/enterprise/l10n_hk_autopay/__manifest__.py]
- `l10n_hk_payment_autopay` — "AutoPay Payments" — cat: Accounting/Accounting — application: no — auto_install — Export payments as AutoPay files [odoo-20/enterprise/l10n_hk_payment_autopay/__manifest__.py]
- `l10n_hu_intrastat` — "Hungarian Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Hungary - Intrastat report [odoo-20/enterprise/l10n_hu_intrastat/__manifest__.py]
- `l10n_hu_reports_a60` — "Hungary - A60 accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — A60 accounting reports for Hungary [odoo-20/enterprise/l10n_hu_reports_a60/__manifest__.py]
- `l10n_id_reports` — "Indonesia - Accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Accounting reports for Indonesia [odoo-20/enterprise/l10n_id_reports/__manifest__.py]
- `l10n_in_hr_contract_salary` — "Salary Configurator (India)" — cat: Human Resources — application: no — auto_install — Salary Configuration [odoo-20/enterprise/l10n_in_hr_contract_salary/__manifest__.py]
- `l10n_iq_hr_payroll` — "Iraq - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Iraqi Payroll and Tax Rules ======================================== - Social Insurance computation. - End of Service benefit and Provisions [odoo-20/enterprise/l10n_iq_hr_payroll/__manifest__.py]
- `l10n_iq_hr_payroll_account` — "Iraq - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Iraqi Payroll Rules ============================================ [odoo-20/enterprise/l10n_iq_hr_payroll_account/__manifest__.py]
- `l10n_it_cbi` — "Italy - CBI Credit Transfer" — cat: Accounting/Localizations — application: no — auto_install — Generates CBI XML files for SEPA Credit Transfers in Italy. [odoo-20/enterprise/l10n_it_cbi/__manifest__.py]
- `l10n_it_intrastat` — "Italian Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Generates Intrastat PDF report for declaration based on invoices. [odoo-20/enterprise/l10n_it_intrastat/__manifest__.py]
- `l10n_it_pos_fiskaly` — "Italy - Point of Sale Sign IT" — cat: Accounting/Localizations/Point of Sale — application: no — Software fiscalization for the Italian Point of Sale [odoo-20/enterprise/l10n_it_pos_fiskaly/__manifest__.py]
- `l10n_it_pos_fiskaly_edi` — "Italy - Point of Sale Sign IT - E-invoicing" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Codice Fiscale of the company with fiskaly SIGN IT [odoo-20/enterprise/l10n_it_pos_fiskaly_edi/__manifest__.py]
- `l10n_it_pos_fiskaly_loyalty` — "Italy - Point of Sale Sign IT - Loyalty" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Gift cards, eWallets and loyalty rewards with fiskaly SIGN IT [odoo-20/enterprise/l10n_it_pos_fiskaly_loyalty/__manifest__.py]
- `l10n_it_pos_fiskaly_sale` — "Italy - Point of Sale Sign IT - Sale" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Down payments and settled sale orders with fiskaly SIGN IT [odoo-20/enterprise/l10n_it_pos_fiskaly_sale/__manifest__.py]
- `l10n_it_pos_fiskaly_self_order` — "Italy - Point of Sale Sign IT - Self Order" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Self orders and kiosks with fiskaly SIGN IT [odoo-20/enterprise/l10n_it_pos_fiskaly_self_order/__manifest__.py]
- `l10n_kw_hr_payroll` — "Kuwait - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Kuwait Payroll & Localization ============================= - Basic setup for Kuwait payroll (Company, Employees, Schedule). - **Social Insu [odoo-20/enterprise/l10n_kw_hr_payroll/__manifest__.py]
- `l10n_kw_hr_payroll_account` — "Kuwait - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Kuwait Payroll Rules ============================================ [odoo-20/enterprise/l10n_kw_hr_payroll_account/__manifest__.py]
- `l10n_la_reports` — "Laos - Accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Financial statements and VAT return type for Laos [odoo-20/enterprise/l10n_la_reports/__manifest__.py]
- `l10n_latam_invoice_document_inter_company_rules` — "LATAM Document - Intercompany Rules" — cat: Accounting/Localizations — application: no — auto_install — LATAM invoice documents with intercompany rules [odoo-20/enterprise/l10n_latam_invoice_document_inter_company_rules/__manifest__.py]
- `l10n_lb_hr_payroll` — "Lebanon - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Lebanon Payroll Rules ===================== - National Social Security Fund: sickness and maternity (3% employee, 8% employer) and family al [odoo-20/enterprise/l10n_lb_hr_payroll/__manifest__.py]
- `l10n_lb_hr_payroll_account` — "Lebanon - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Lebanon Payroll Rules ========================================= Salary journal and default accounts of the Lebanese char [odoo-20/enterprise/l10n_lb_hr_payroll_account/__manifest__.py]
- `l10n_lv_tax_report` — "Latvia - Tax Report" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Tax Report - Including attachments - XML Export [odoo-20/enterprise/l10n_lv_tax_report/__manifest__.py]
- `l10n_mk_reports` — "North Macedonia - Accounting Reports" — cat: (none) — application: no — auto_install — Accounting reports for North Macedonia ============================================ - Balance Sheet - Profit and Loss Statement [odoo-20/enterprise/l10n_mk_reports/__manifest__.py]
- `l10n_mr_reports` — "Mauritania - Accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Mauritania accounting reports. ==================================================== -Profit and Loss -Balance Sheet [odoo-20/enterprise/l10n_mr_reports/__manifest__.py]
- `l10n_mt_intrastat` — "Malta Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — Intrastat for Malta [odoo-20/enterprise/l10n_mt_intrastat/__manifest__.py]
- `l10n_no_saft_import` — "Norway SAF-T Import" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Norwegian SAF-T is standard file format for exporting various types of accounting transactional data using the XML format. This module allow [odoo-20/enterprise/l10n_no_saft_import/__manifest__.py]
- `l10n_om_hr_payroll` — "Oman - Payroll Localization" — cat: Human Resources/Payroll — application: no — auto_install — Setup for Oman payroll localization based on Oman Labor Law. [odoo-20/enterprise/l10n_om_hr_payroll/__manifest__.py]
- `l10n_om_hr_payroll_account` — "Oman - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Oman Payroll Rules ============================================ [odoo-20/enterprise/l10n_om_hr_payroll_account/__manifest__.py]
- `l10n_pe_edi_withholding` — "Peru - Withholding Documents" — cat: Accounting/Localizations — application: no [odoo-20/enterprise/l10n_pe_edi_withholding/__manifest__.py]
- `l10n_pe_reports_lib` — "Peru - Inventory and Balance Reports" — cat: Accounting/Localizations/Reporting — application: no — 5th and 6th Set Financial Reports. Inventory and Balance 3.1-3.7, 3.11-3.18, 3.20,3.24 and 3.25 [odoo-20/enterprise/l10n_pe_reports_lib/__manifest__.py]
- `l10n_pe_reports_stock_landed_costs` — "Peru - Stock Reports Landed Costs" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Bridge module to include landed costs as separate lines in the Peruvian Kardex PLE 13.1 report (operation type 26). [odoo-20/enterprise/l10n_pe_reports_stock_landed_costs/__manifest__.py]
- `l10n_ph_hr_payroll` — "Philippines - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Philippines Payroll Rules. ========================== [odoo-20/enterprise/l10n_ph_hr_payroll/__manifest__.py]
- `l10n_ph_hr_payroll_account` — "Philippines - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Philippines Payroll Rules ============================================= [odoo-20/enterprise/l10n_ph_hr_payroll_account/__manifest__.py]
- `l10n_ph_reports_asset` — "Philippines - Accounting Asset Report" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Fixed Asset Listing report for the Philippines [odoo-20/enterprise/l10n_ph_reports_asset/__manifest__.py]
- `l10n_ph_reports_stock` — "Philippines - Accounting Inventory Report" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Inventory Accounting report for the Philippines [odoo-20/enterprise/l10n_ph_reports_stock/__manifest__.py]
- `l10n_pl_intrastat` — "Polish Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Generates Intrastat PDF report for declaration based on invoices. [odoo-20/enterprise/l10n_pl_intrastat/__manifest__.py]
- `l10n_pt_intrastat` — "Portuguese Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Generates Intrastat PDF report for declaration based on invoices. [odoo-20/enterprise/l10n_pt_intrastat/__manifest__.py]
- `l10n_ro_reports_d300` — "Romania - D300 VAT Report" — cat: (none) — application: no — auto_install — D300 VAT declaration export for Romania (ANAF). [odoo-20/enterprise/l10n_ro_reports_d300/__manifest__.py]
- `l10n_ro_reports_d390` — "Romania - EC Sales List D390 Report" — cat: Accounting/Localizations/Reporting — application: no — This module supports the generation of Declarația 390 Report for Romanian EC Sales List. [odoo-20/enterprise/l10n_ro_reports_d390/__manifest__.py]
- `l10n_ro_saft_stock` — "Romanian SAF-T Export (Stocks)" — cat: Accounting/Localizations/Reporting — application: no — auto_install — This module enables generating the D.406 declaration for stocks from within Odoo. The D.406 declaration is an XML file in the SAF-T format w [odoo-20/enterprise/l10n_ro_saft_stock/__manifest__.py]
- `l10n_rs_intrastat` — "Serbia Intrastat Declaration" — cat: Accounting/Localizations/Reporting — application: no — Generates Intrastat report for declaration Based on invoices. Adds the possibility to specify the origin country of goods and the partner VA [odoo-20/enterprise/l10n_rs_intrastat/__manifest__.py]
- `l10n_sa_hr_contract_salary` — "Salary Configurator (Saudi Arabia)" — cat: Human Resources — application: no — auto_install — Salary Package Configurator [odoo-20/enterprise/l10n_sa_hr_contract_salary/__manifest__.py]
- `l10n_sa_hr_payroll_attendance` — "Saudi Arabia Payroll - Attendance" — cat: Human Resources/Employees — application: no — auto_install — Manage late attendance for your employees for saudi arabia payroll [odoo-20/enterprise/l10n_sa_hr_payroll_attendance/__manifest__.py]
- `l10n_sa_hr_payroll_gosi` — "Saudi Arabia - Payroll with GOSI Integration" — cat: Human Resources/Payroll — application: no — auto_install — Saudi Arabia Payroll Integration with GOSI =========================================================== - Fetches & updates GOSI contribution [odoo-20/enterprise/l10n_sa_hr_payroll_gosi/__manifest__.py]
- `l10n_se_intrastat` — "Sweden - Intrastat" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Intrastat for Sweden ===================== [odoo-20/enterprise/l10n_se_intrastat/__manifest__.py]
- `l10n_sk_reports` — "Slovakia - Accounting Reports" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Accounting reports for Slovakia ===================================== This module includes accounting reports for Slovakia, including: - Bal [odoo-20/enterprise/l10n_sk_reports/__manifest__.py]
- `l10n_tr_currency_live_rate` — "Türkiye - Live Currency Exchange Rate (Buying/Selling)" — cat: Accounting/Localizations — application: no — Fetch and apply the buying/selling exchange rates published by the TCMB [odoo-20/enterprise/l10n_tr_currency_live_rate/__manifest__.py]
- `l10n_tr_nilvera` — "Türkiye - Nilvera" — cat: Accounting/Accounting — application: no — Base module containing core functionalities required by other Nilvera modules. [odoo-20/enterprise/l10n_tr_nilvera/__manifest__.py]
- `l10n_tr_nilvera_edispatch` — "Türkiye - e-Irsaliye (e-Dispatch)" — cat: Accounting/Localizations — application: no — Allows the users to create the UBL 1.2.1 e-Dispatch file [odoo-20/enterprise/l10n_tr_nilvera_edispatch/__manifest__.py]
- `l10n_tr_nilvera_edispatch_quality` — "Türkiye - e-Irsaliye Receipt Response" — cat: Accounting/Localizations — application: no — auto_install — Answer a received e-Dispatch with a Unit Count quality check [odoo-20/enterprise/l10n_tr_nilvera_edispatch_quality/__manifest__.py]
- `l10n_tr_nilvera_einvoice` — "Türkiye - Nilvera E-Invoice" — cat: Accounting/Accounting — application: no — auto_install — For sending and receiving electronic invoices to Nilvera. Features include: - Support for invoice scenarios: Basic, Export, and Public Secto [odoo-20/enterprise/l10n_tr_nilvera_einvoice/__manifest__.py]
- `l10n_tr_nilvera_einvoice_subscription_sale` — "Türkiye - Nilvera E-Invoice Subscriptions" — cat: Accounting/Accounting — application: no — auto_install — For handling subscription products on invoices in Nilvera E-Invoicing flow. [odoo-20/enterprise/l10n_tr_nilvera_einvoice_subscription_sale/__manifest__.py]
- `l10n_us_reports_avatax` — "United States - Accounting Reports (AvaTax)" — cat: Accounting/Localizations/Reporting — application: no — auto_install — Report AvaTax exempt / non-taxable amounts into the US tax report columns [odoo-20/enterprise/l10n_us_reports_avatax/__manifest__.py]
- `l10n_uy_edi_pos` — "Uruguay - Electronic Invoicing for POS" — cat: Accounting/Localizations/Point of Sale — application: no — auto_install — Uruguayan electronic invoicing (CFE via Uruware) for the Point of Sale. Orders whose customer is identified with a RUT are invoiced through  [odoo-20/enterprise/l10n_uy_edi_pos/__manifest__.py]
- `l10n_uy_edi_stock` — "Uruguay - E-Remitos" — cat: Accounting/Localizations/EDI — application: no — Enhances stock picking operations with compliant electronic delivery guides (e-Remitos) for Uruguay. This module integrates with the EDI sys [odoo-20/enterprise/l10n_uy_edi_stock/__manifest__.py]
- `l10n_uz_hr_payroll` — "Uzbekistan - Payroll" — cat: Human Resources/Payroll — application: no — auto_install [odoo-20/enterprise/l10n_uz_hr_payroll/__manifest__.py]
- `l10n_uz_hr_payroll_account` — "Uzbekistan - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Uzbekistan Payroll Rules ============================================ [odoo-20/enterprise/l10n_uz_hr_payroll_account/__manifest__.py]
- `l10n_uz_reports` — "Uzbekistan - Accounting Reports" — cat: (none) — application: no — auto_install — Accounting reports for Uzbekistan ============================================ - Balance Sheet - Profit and Loss Statement [odoo-20/enterprise/l10n_uz_reports/__manifest__.py]
- `l10n_vn_hr_payroll` — "Vietnam - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — Vietnamese Payroll Rules ======================== - Compulsory social, health and unemployment insurance (employee and employer shares), wit [odoo-20/enterprise/l10n_vn_hr_payroll/__manifest__.py]
- `l10n_vn_hr_payroll_account` — "Vietnam - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for Vietnamese Payroll Rules ============================================ Salary journal and default accounts of the Vietnam [odoo-20/enterprise/l10n_vn_hr_payroll_account/__manifest__.py]
- `l10n_za_hr_payroll` — "South Africa - Payroll" — cat: Human Resources/Payroll — application: no — auto_install — South Africa Payroll Rules. ============================ * Employee Details * Employee Contracts * Allowances/Deductions * Allow to configur [odoo-20/enterprise/l10n_za_hr_payroll/__manifest__.py]
- `l10n_za_hr_payroll_account` — "South Africa - Payroll with Accounting" — cat: Human Resources — application: no — auto_install — Accounting Data for South African Payroll Rules ================================================ [odoo-20/enterprise/l10n_za_hr_payroll_account/__manifest__.py]

#### New in Odoo 20 Enterprise — test modules (4)

- `test_ai` — "Test AI" — cat: Hidden/Tests — application: no — This module is intended to test the AI module. [odoo-20/enterprise/test_ai/__manifest__.py]
- `test_documents_full` — "Documents Testing Module" — cat: Hidden/Tests — application: no — Documents Testing Module [odoo-20/enterprise/test_documents_full/__manifest__.py]
- `test_l10n_ph_hr_payroll_account` — "Test Philippines Payroll" — cat: Human Resources — application: no — Test Philippines Payroll [odoo-20/enterprise/test_l10n_ph_hr_payroll_account/__manifest__.py]
- `test_lint_enterprise` — "test-lint-enterprise" — cat: Hidden/Tests — application: no — auto_install — Enterprise extension of the standard Odoo linters. [odoo-20/enterprise/test_lint_enterprise/__manifest__.py]

#### Present in Odoo 19 Enterprise but absent from Odoo 20 Enterprise (62)

- `account_accountant_batch_payment` — "Account Batch Payment Reconciliation" — cat: Accounting [odoo-19/enterprise/account_accountant_batch_payment/__manifest__.py]
- `account_winbooks_import` — "Account Winbooks Import" — cat: Accounting/Accounting [odoo-19/enterprise/account_winbooks_import/__manifest__.py]
- `ai_app` — "AI" — cat: Hidden [odoo-19/enterprise/ai_app/__manifest__.py]
- `documents_fsm` — "Documents - FSM" — cat: Productivity/Documents [odoo-19/enterprise/documents_fsm/__manifest__.py]
- `esg_project` — "ESG Project" — cat: None [odoo-19/enterprise/esg_project/__manifest__.py]
- `helpdesk_fsm` — "Helpdesk FSM" — cat: Services/Helpdesk [odoo-19/enterprise/helpdesk_fsm/__manifest__.py]
- `helpdesk_fsm_report` — "Helpdesk FSM Reports" — cat: Services/Helpdesk [odoo-19/enterprise/helpdesk_fsm_report/__manifest__.py]
- `helpdesk_fsm_sale` — "Helpdesk FSM - Sale" — cat: Services/Helpdesk [odoo-19/enterprise/helpdesk_fsm_sale/__manifest__.py]
- `hr_contract_salary_holidays` — "Salary Configurator - Holidays" — cat: Human Resources [odoo-19/enterprise/hr_contract_salary_holidays/__manifest__.py]
- `hr_contract_salary_payroll` — "Salary Configurator - Payroll" — cat: Human Resources [odoo-19/enterprise/hr_contract_salary_payroll/__manifest__.py]
- `hr_payroll_holidays` — "Time Off in Payslips" — cat: Human Resources/Payroll [odoo-19/enterprise/hr_payroll_holidays/__manifest__.py]
- `hr_payroll_planning` — "Payroll - Planning" — cat: Human Resources/Employees [odoo-19/enterprise/hr_payroll_planning/__manifest__.py]
- `hr_payroll_sale_commission` — "Commission in Payslips" — cat: Human Resources/Payroll [odoo-19/enterprise/hr_payroll_sale_commission/__manifest__.py]
- `hr_work_entry_attendance` — "Work Entries - Attendance" — cat: Human Resources/Employees [odoo-19/enterprise/hr_work_entry_attendance/__manifest__.py]
- `hr_work_entry_enterprise` — "Work Entries - Enterprise" — cat: Human Resources/Employees [odoo-19/enterprise/hr_work_entry_enterprise/__manifest__.py]
- `hr_work_entry_holidays_enterprise` — "Time Off in Payslips Enterprise" — cat: Human Resources/Payroll [odoo-19/enterprise/hr_work_entry_holidays_enterprise/__manifest__.py]
- `hr_work_entry_planning` — "Work Entries - Planning" — cat: Human Resources/Employees [odoo-19/enterprise/hr_work_entry_planning/__manifest__.py]
- `hr_work_entry_planning_attendance` — "Attendances - Planning" — cat: Human Resources/Employees [odoo-19/enterprise/hr_work_entry_planning_attendance/__manifest__.py]
- `industry_fsm` — "Field Service" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm/__manifest__.py]
- `industry_fsm_repair` — "Field Service Repair" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_repair/__manifest__.py]
- `industry_fsm_report` — "Field Service Reports" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_report/__manifest__.py]
- `industry_fsm_sale` — "Field Service - Sale" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_sale/__manifest__.py]
- `industry_fsm_sale_report` — "Field Service Reports - Sale" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_sale_report/__manifest__.py]
- `industry_fsm_sale_subscription` — "Field Service - Sale Subscription" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_sale_subscription/__manifest__.py]
- `industry_fsm_sms` — "FSM - SMS" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_sms/__manifest__.py]
- `industry_fsm_stock` — "Field Service Stock" — cat: Services/Field Service [odoo-19/enterprise/industry_fsm_stock/__manifest__.py]
- `l10n_ar_reports_simple` — "Argentinean Accounting IVA Simple Export" — cat: Accounting/Localizations/Reporting [odoo-19/enterprise/l10n_ar_reports_simple/__manifest__.py]
- `l10n_be_hr_payroll_acerta` — "Belgium - Payroll - Export to Acerta" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_acerta/__manifest__.py]
- `l10n_be_hr_payroll_dimona` — "Belgium - Payroll - Dimona" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_dimona/__manifest__.py]
- `l10n_be_hr_payroll_dimona_auto` — "Belgium - Payroll - Dimona - Automation" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_dimona_auto/__manifest__.py]
- `l10n_be_hr_payroll_fleet` — "Belgium - Payroll - Fleet" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_fleet/__manifest__.py]
- `l10n_be_hr_payroll_group_s` — "Belgium - Payroll - Export to Group S" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_group_s/__manifest__.py]
- `l10n_be_hr_payroll_partena` — "Belgium - Payroll - Export to Partena" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_partena/__manifest__.py]
- `l10n_be_hr_payroll_prisma` — "Belgium - Payroll - Export to Prisma" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_prisma/__manifest__.py]
- `l10n_be_hr_payroll_sd_worx` — "Belgium - Payroll - Export to SD Worx" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_sd_worx/__manifest__.py]
- `l10n_be_hr_payroll_ucm` — "Belgium - Payroll - Export to UCM" — cat: Human Resources [odoo-19/enterprise/l10n_be_hr_payroll_ucm/__manifest__.py]
- `l10n_co_dian` — "Electronic invoicing for Colombia with DIAN" — cat: Accounting/Localizations/EDI [odoo-19/enterprise/l10n_co_dian/__manifest__.py]
- `l10n_co_edi_mandate` — "Mandate invoicing for Colombia" — cat: Accounting/Localizations/EDI [odoo-19/enterprise/l10n_co_edi_mandate/__manifest__.py]
- `l10n_din5008_industry_fsm` — "DIN 5008 - Field Service" — cat: Accounting/Localizations [odoo-19/enterprise/l10n_din5008_industry_fsm/__manifest__.py]
- `l10n_es_reports_2024` — "Spain - Accounting Reports (2024 Update)" — cat: Accounting/Localization [odoo-19/enterprise/l10n_es_reports_2024/__manifest__.py]
- `l10n_fr_hr_payroll` — "French Payroll" — cat: Human Resources/Payroll [odoo-19/enterprise/l10n_fr_hr_payroll/__manifest__.py]
- `l10n_fr_hr_payroll_account` — "France - Payroll with Accounting" — cat: Human Resources [odoo-19/enterprise/l10n_fr_hr_payroll_account/__manifest__.py]
- `l10n_it_hr_payroll_sd_worx` — "Italy - Payroll - Export to SD Worx" — cat: Human Resources [odoo-19/enterprise/l10n_it_hr_payroll_sd_worx/__manifest__.py]
- `l10n_mx_hr_payroll_account_edi` — "Mexico - Payroll CFDI" — cat: Human Resources/Payroll [odoo-19/enterprise/l10n_mx_hr_payroll_account_edi/__manifest__.py]
- `l10n_mx_reports_closing` — "Mexico - Month 13 Trial Balance" — cat: Accounting/Localizations/Reporting [odoo-19/enterprise/l10n_mx_reports_closing/__manifest__.py]
- `l10n_mx_xml_polizas` — "Odoo Mexican XML Polizas Export" — cat: Accounting/Localizations/Reporting [odoo-19/enterprise/l10n_mx_xml_polizas/__manifest__.py]
- `l10n_pk_reports` — "Pakistan - Accounting Reports" — cat: Accounting/Localizations/Reporting [odoo-19/enterprise/l10n_pk_reports/__manifest__.py]
- `l10n_se_returns` — "Sweden - Accounting Returns" — cat: Accounting/Localizations/Reporting [odoo-19/enterprise/l10n_se_returns/__manifest__.py]
- `l10n_us_hr_payroll_adp` — "United States - Payroll - Export to ADP" — cat: Human Resources [odoo-19/enterprise/l10n_us_hr_payroll_adp/__manifest__.py]
- `mrp_workorder_expiry` — "MRP II - Expiry" — cat: Supply Chain/Manufacturing [odoo-19/enterprise/mrp_workorder_expiry/__manifest__.py]
- `mrp_workorder_iot` — "IoT features for Work Order" — cat: Supply Chain/Manufacturing [odoo-19/enterprise/mrp_workorder_iot/__manifest__.py]
- `pos_blackbox_be` — "Belgian Registered Cash Register" — cat: Sales/Point of Sale [odoo-19/enterprise/pos_blackbox_be/__manifest__.py]
- `pos_iot_ingenico` — "PoS IoT Ingenico" — cat: Sales/Point of Sale [odoo-19/enterprise/pos_iot_ingenico/__manifest__.py]
- `pos_restaurant_urban_piper` — "POS Restaurant Urban Piper" — cat: Sales/Point of Sale [odoo-19/enterprise/pos_restaurant_urban_piper/__manifest__.py]
- `pos_urban_piper_enhancements` — "Point of Sale - UrbanPiper Enhancements" — cat: Sales/Point of Sale [odoo-19/enterprise/pos_urban_piper_enhancements/__manifest__.py]
- `pos_urban_piper_ubereats` — "POS UrbanPiper - Uber Eats" — cat: Sales/Point of Sale [odoo-19/enterprise/pos_urban_piper_ubereats/__manifest__.py]
- `quality_control_picking_batch` — "Quality - Batch Transfer" — cat: Supply Chain/Quality [odoo-19/enterprise/quality_control_picking_batch/__manifest__.py]
- `quality_mrp_workorder_iot` — "MRP features for Quality Control with IoT" — cat: Supply Chain/Quality [odoo-19/enterprise/quality_mrp_workorder_iot/__manifest__.py]
- `stock_barcode_picking_batch` — "Barcode for Batch Transfer" — cat: Supply Chain/Inventory [odoo-19/enterprise/stock_barcode_picking_batch/__manifest__.py]
- `stock_barcode_quality_control_picking_batch` — "Barcode/Quality/Batch Transfer bridge module" — cat: Supply Chain/Inventory [odoo-19/enterprise/stock_barcode_quality_control_picking_batch/__manifest__.py]
- `test_website_sale_full` — "Website Sale Full Tests" — cat: Hidden [odoo-19/enterprise/test_website_sale_full/__manifest__.py]
- `voip_onsip` — "Phone - OnSIP" — cat: Productivity/Phone [odoo-19/enterprise/voip_onsip/__manifest__.py]

### Inferences
- `delivery_fedex_rest` still exists in 20 with the same name "Fedex Shipping" but is no longer flagged `application`, while the new `delivery_fedex_certified` is [odoo-20/enterprise/delivery_fedex_rest/__manifest__.py; odoo-20/enterprise/delivery_fedex_certified/__manifest__.py:8] — inference: FedEx integration is being migrated to a new "certified" connector.
- The AI offer moves from "a few AI features" (20 `ai*` modules in 19 EE) to a pervasive agent layer (58 in 20 EE, counted by name prefix/suffix), with an MCP endpoint making Odoo usable as a tool server for external AI clients.
- Note: there are zero `ai*` modules in Community in either version; all AI is Enterprise (OEEL-1).

### Gaps
- Manifests do not say whether modules are SaaS-only, paid, or in beta; release notes are needed for that.
- Category strings are as written by Odoo (some new modules have no category, shown as "(none)").

## Which modules were removed or renamed?

### Takeaway
Most "removed" modules were merged into a parent module or replaced by a renamed successor, not dropped. Clear patterns: Field Service `industry_fsm*` → `planning_field_service*`; `ai_app` → `ai_agentic`; `stock_picking_batch` merged into `stock`; the wishlist/comparison/stock-notification eCommerce add-ons merged into `website_sale`; `base_vat`/`base_iban` merged into `base` (with online VIES split out to `l10n_eu_account_vies`); `hr_homeworking`, `hr_hourly_cost`, `hr_org_chart` merged into `hr`; Belgian POS blackbox `pos_blackbox_be` → `l10n_be_pos_blackbox*`; many `hr_work_entry_*`/`hr_payroll_*` bridges consolidated; Belgian payroll exporters (Acerta, Partena, SD Worx, Group S, Prisma, UCM, Dimona) and `l10n_fr_hr_payroll` are gone.

### Cited Findings
Evidence of merges/renames (successor located in 20):
- Batch transfers: `stock.picking.batch` model now lives in `stock` [odoo-20/odoo/addons/stock/models/stock_picking_batch.py]; the settings toggle changed from `module_stock_picking_batch` (install a module) to `group_stock_picking_batch` "Batch, Wave & Cluster Transfers" (a group in `stock`) [odoo-20/odoo/addons/stock/models/res_config_settings.py]; wizards `stock.picking.to.batch` and `stock.add.to.wave` are in `stock/wizard/` [odoo-20/odoo/addons/stock/wizard/stock_picking_to_batch.py, stock_add_to_wave.py]. Removed with it: `stock_picking_batch`, `delivery_stock_picking_batch`, `stock_barcode_picking_batch`, `stock_barcode_quality_control_picking_batch`, `quality_control_picking_batch`, `l10n_ro_edi_stock_batch`.
- eCommerce: `product.wishlist` [odoo-20/odoo/addons/website_sale/models/product_wishlist.py], `product.attribute.category` (product comparison) [odoo-20/odoo/addons/website_sale/models/product_attribute_category.py], `product.stock.notification` [odoo-20/odoo/addons/website_sale/models/product_stock_notification.py] and wishlist controller [odoo-20/odoo/addons/website_sale/controllers/wishlist.py] are in `website_sale`. Removed: `website_sale_wishlist`, `website_sale_comparison`, `website_sale_comparison_wishlist`, `website_sale_stock_wishlist`, `website_sale_collect_wishlist`.
- VAT/IBAN: `base_vat` and `base_iban` removed; `l10n_es` 19 depended on both, 20 no longer does [odoo-19/odoo/addons/l10n_es/__manifest__.py vs odoo-20/odoo/addons/l10n_es/__manifest__.py]. VAT check functions (`check_vat_<country>`) are now in base `res.partner` [odoo-20/odoo/odoo/addons/base/models/res_partner.py:1511]; `res.partner.bank` (IBAN) moved into base [odoo-20/odoo/odoo/addons/base/models/res_partner_bank.py:18,27]; online VIES validation is the new opt-in `l10n_eu_account_vies`, exposed in Accounting settings as `module_l10n_eu_account_vies` "VAT number validation with VIES" [odoo-20/odoo/addons/account/models/res_config_settings.py].
- HR: weekly work-location fields (`monday_location_id` … `sunday_location_id`, `exceptional_location_id`) and model `hr.employee.location` are in `hr` [odoo-20/odoo/addons/hr/models/hr_employee.py:368; odoo-20/odoo/addons/hr/models/hr_employee_location.py] (formerly `hr_homeworking`); `hourly_cost` "Hourly Cost" is in `hr` [odoo-20/odoo/addons/hr/models/hr_employee.py:279] (formerly `hr_hourly_cost`); org-chart widget is in `hr` [odoo-20/odoo/addons/hr/static/src/fields/hr_org_chart.js] (formerly `hr_org_chart`).
- Field Service: 19 `industry_fsm`, `industry_fsm_repair`, `_report`, `_sale`, `_sale_report`, `_sale_subscription`, `_sms`, `_stock`, `helpdesk_fsm*`, `documents_fsm`, `l10n_din5008_industry_fsm` are gone; 20 has `planning_field_service` + `_repair`, `_worksheet`, `_sale_timesheet`, `_sale_worksheet`, `_sale_subscription`, `_sms`, `_stock`, `helpdesk_planning_field_service*`, `l10n_din5008_planning_field_service` [odoo-20/enterprise/planning_field_service*/__manifest__.py]. The app moved from category "Services/Field Service" (depends on project) to "Human Resources/Planning" with `planning` as base dependency [odoo-20/enterprise/planning_field_service/__manifest__.py].
- AI: `ai_app` ("AI", application) removed; `ai_agentic` ("AI", application) added [odoo-19/enterprise/ai_app/__manifest__.py; odoo-20/enterprise/ai_agentic/__manifest__.py]. In base `ai` module, model `ai.topic` was replaced by `ai.skill` (identical `_description` text "…leverages instructions and tools to direct Odoo AI…") [odoo-20/enterprise/ai/models/ai_skill.py:8].
- Belgian POS fiscal box: `pos_blackbox_be` ("Belgian Registered Cash Register") removed; `l10n_be_pos_blackbox` ("Belgian Registered Cash Register (v2)") + `_hr`, `_loyalty`, `_self_order`, `_settle_due`, `_urban_piper` added [odoo-20/enterprise/l10n_be_pos_blackbox/__manifest__.py].
- IoT: `iot_base` and `iot_box_image` (CE) removed; `mrp_workorder_iot`, `quality_mrp_workorder_iot`, `pos_iot_ingenico` (EE) removed; new `obox*`, `mrp_iot`, `iot_webserial`, `printer` [manifests above].
- UrbanPiper/food delivery: `pos_restaurant_urban_piper`, `pos_urban_piper_enhancements`, `pos_urban_piper_ubereats` removed; `pos_self_order_urban_piper` and generic `pos_platform_order` (+GoFood, GrabFood) added [odoo-20/enterprise/pos_platform_order/__manifest__.py].
- POS payment bridges `pos_restaurant_adyen`, `pos_restaurant_stripe`, `pos_self_order_adyen`, `pos_self_order_stripe` removed (CE) [odoo-19/odoo/addons/<module>/__manifest__.py].
- Payroll/work entries (EE): removed `hr_payroll_holidays`, `hr_payroll_planning`, `hr_payroll_sale_commission`, `hr_work_entry_attendance`, `hr_work_entry_enterprise`, `hr_work_entry_holidays_enterprise`, `hr_work_entry_planning`, `hr_work_entry_planning_attendance`, `hr_contract_salary_holidays`, `hr_contract_salary_payroll`; (CE) `hr_work_entry_holidays`, `l10n_fr_hr_work_entry_holidays`. `hr_work_entry` in 20 contains `hr_version.py` [odoo-20/odoo/addons/hr_work_entry/models/hr_version.py].
- Removed EE payroll localizations/exports: `l10n_fr_hr_payroll`, `l10n_fr_hr_payroll_account`, `l10n_be_hr_payroll_acerta`, `_dimona`, `_dimona_auto`, `_fleet`, `_group_s`, `_partena`, `_prisma`, `_sd_worx`, `_ucm`, `l10n_it_hr_payroll_sd_worx`, `l10n_us_hr_payroll_adp`, `l10n_mx_hr_payroll_account_edi` (a `documents_l10n_mx_hr_payroll_account_edi` bridge is new) [odoo-19/enterprise/<module>/__manifest__.py].
- Other removals: `transifex`, `delivery_mondialrelay`/`website_sale_mondialrelay`, `l10n_latam_base`, `l10n_cn_city`, `l10n_dk_nemhandel`, `l10n_dk_oioubl`, `l10n_ec_stock`, `l10n_sa_withholding_tax`, `l10n_uy_pos` (CE; `l10n_uy_edi_pos` new in EE), `mrp_subcontracting_repair`, `purchase_requisition_sale` (CE); `account_accountant_batch_payment`, `account_winbooks_import`, `esg_project`, `l10n_co_dian`, `l10n_co_edi_mandate`, `l10n_es_reports_2024`, `l10n_mx_reports_closing`, `l10n_mx_xml_polizas`, `l10n_pk_reports`, `l10n_se_returns`, `l10n_ar_reports_simple`, `mrp_workorder_expiry`, `voip_onsip` (EE). `account_peppol_advanced_fields` was already marked "[DEPRECATED]" in 19 [odoo-19/odoo/addons/account_peppol_advanced_fields/__manifest__.py].
- Turkish Nilvera e-invoicing moved from Community to Enterprise (`l10n_tr_nilvera`, `_edispatch`, `_einvoice`), with new EE extensions `l10n_tr_nilvera_edispatch_quality`, `l10n_tr_nilvera_einvoice_subscription_sale`, `l10n_tr_currency_live_rate` [odoo-20/enterprise/l10n_tr_nilvera/__manifest__.py].

### Inferences
- `website_sale_autocomplete` ("Google places autocompletion") → `website_address_autocomplete` looks like a rename/generalisation (inference from names; not verified in code).
- `l10n_es_reports_2024` (Spain - Accounting Reports 2024 Update) was presumably folded into `l10n_es_reports` (inference; `l10n_es_reports` 20 ships mod111/115/130/303/347/349/390 data files [odoo-20/enterprise/l10n_es_reports/data/]).
- Merged modules matter for migrations: databases with e.g. `stock_picking_batch` or `website_sale_wishlist` installed will need Odoo's upgrade service to map them (inference; no upgrade-mapping file is present in the community source tree).

### Gaps
- No machine-readable rename map (e.g. `merged_modules`) exists in these source trees; Odoo keeps it in its upgrade service. Renames above are inferred from matching models/names.
- The fate of `l10n_co_dian`, `l10n_pk_reports`, `l10n_se_returns`, `l10n_mx_xml_polizas` (merged vs dropped) was not verified.

## For key apps, what notable new models/fields/features appear?

### Takeaway
Field-level diffs show business-visible changes in every key app: Accounting gains an account hierarchy via `parent_id` (replacing `account.group`), a multi-state "Review" status on entries, stock valuation reporting moved into `account`, payment tolerance, report snapshots/fiscal periods; Inventory absorbs batch/wave/cluster transfers, min-max suggestions based on daily demand, scrap-as-move; MRP adds continuous production, BoM/MO notes, packages; Sales adds incoterms on customers, delivery status/date, section quantities, deferred revenue, "Services & Materials", line numbers; Project adds roles, time-per-stage report and "rotting" stages; HR adds departure model, employee types, built-in remote-work locations; eCommerce absorbs wishlist/comparison and adds withdrawal (right of withdrawal) requests, rating e-mails, out-of-stock messaging; POS adds preparation orders, product snoozing, service fees, multi-currency payments, daily auto-closing. Enterprise AI gains sessions, tools, skills, sub-agent delegation, web search/"think longer". The frontend framework moves to Owl 3.

### Cited Findings
Core framework / platform:
- Owl upgraded from `2.8.1` to `3.0.0-alpha.50` (bundled library) [odoo-19/odoo/addons/web/static/lib/owl/owl.js; odoo-20/odoo/addons/web/static/lib/owl/owl.js].
- Access control: new model `ir.access` (`_description = "Access"`, CRUD-combination selection, per-group operations) in base, and `base/models/ir_rule.py` no longer exists [odoo-20/odoo/odoo/addons/base/models/ir_access.py:66]; modules now ship `security/ir.access.csv` instead of `security/ir.model.access.csv` (e.g. [odoo-20/odoo/addons/l10n_es_edi_sii/security/ir.access.csv]; [odoo-20/enterprise/ai_agentic/__manifest__.py] data list). Inference: ACLs and record rules are unified into one model.
- `pytz` no longer imported anywhere in odoo-20 core/addons (0 files) vs 16 files in odoo-19 core (`odoo/odoo`); `pytz` dropped and `tzdata` added (Windows only) in requirements [odoo-20/odoo/requirements.txt] — inference: migration to stdlib `zoneinfo`.
- `xlwt` removed from requirements [odoo-19/odoo/requirements.txt vs odoo-20/odoo/requirements.txt].
- New `skills/` folder in the Community repo: "a set of useful Skills for agentic development with Odoo" (odoo-git, odoo-guidelines, odoo-review, odoo-security, odoo-web-guidelines) meant to be copied into `.claude/skills/` or `.agents/skills/` [odoo-20/odoo/skills/README.md].
- New PDF engine module `base_report_paper_muncher`; wkhtmltopdf isolated in `base_report_wkhtmltox` (auto-install) [manifests cited above].

Accounting (`account`):
- `account.group` model removed; `account.account.parent_id` "Parent Account" added [odoo-20/odoo/addons/account/models/account_account.py:134] — account hierarchy by parent rather than code-prefix groups.
- `account.move.review_state` "Review" with values No Review / To Review / Reviewed / Supervised / Anomaly, tracked; replaces 19 boolean `checked` "Reviewed" [odoo-20/odoo/addons/account/models/account_move.py:59-64,319].
- Stock valuation in accounting: new `account.stock.valuation.report` "Stock Valuation" [odoo-20/odoo/addons/account/report/account_stock_valuation_report.py]; new `res.company.account_stock_valuation_id`, `account_stock_journal_id`, `account.account.account_stock_variation_id`, `account_stock_expense_id`, `account.move.inventory_closing` "Inventory Closing" [odoo-20/odoo/addons/account/models/company.py, account_account.py, account_move.py].
- Multi-company consolidation: new mixin `res.currency.rate.consolidation.mixin` "Enable multi company consolidation" and `account.move.line.consolidation_balance/debit/credit` [odoo-20/odoo/addons/account/models/res_currency_rate_consolidation_mixin.py; account_move_line.py].
- Aged/at-date analysis: `account.move.line.residual_at_date`, `residual_currency_at_date`, `open_on` "Unreconciled On" [odoo-20/odoo/addons/account/models/account_move_line.py].
- `account.move.line.deductible_percentage` "Professional Expense Deductibility Percentage" (replaces `deductible_amount`) [same file].
- `account.reconcile.model.payment_tolerance` "Payment Tolerance" [odoo-20/odoo/addons/account/models/account_reconcile_model.py].
- `account.report` new: `enable_snapshots`, `use_fiscal_periods` "Fiscal Periods", `filter_line_comparison`, `groupby`/`user_groupby` [odoo-20/odoo/addons/account/models/account_report.py].
- Cash rounding scoped by `currency_ids`, `partner_category_ids`, `payment_method_line_ids`, `company_id` [odoo-20/odoo/addons/account/models/account_cash_rounding.py].
- `res.company.account_credit_limit` "Default Credit Limit"; payment `return_partner_bank_id` "Returns Bank Account" [odoo-20/odoo/addons/account/models/company.py; account_payment.py].
- New settings toggles: `module_account_avatax` "AvaTax", `module_account_loan_extract` "Loans Digitization", `module_l10n_eu_account_vies` [odoo-20/odoo/addons/account/models/res_config_settings.py]. Many new `*_active` booleans on accounts/journals/products/settings (inference: UI to toggle which accounts are shown/used).
- Tax groups lost `tax_payable_account_id`, `tax_receivable_account_id`, `advance_tax_payment_account_id` (removed fields) and `res.config.settings.module_account_reports` "Dynamic Reports" removed (field diff).

Inventory (`stock`):
- Batch, wave & cluster transfers built-in: `stock.picking.type` auto-batching options (`auto_batch`, `batch_group_by_partner/destination/src_loc/dest_loc`, `batch_max_lines`, `batch_max_pickings`, `wave_group_by_product/category/location/date`, `batch_properties_definition`) [odoo-20/odoo/addons/stock/models/stock_picking_type.py — fields found by diff].
- Replenishment: new wizard `stock.orderpoint.suggest` "Stock Orderpoint Min-Max Suggestion"; `stock.warehouse.orderpoint.daily_demand` "Daily Demand", `min_max_based_on` "Based on", `qty_to_order_to_max` "To Order to Reach Max" [odoo-20/odoo/addons/stock/wizard/stock_orderpoint_suggest.py; stock/models/stock_orderpoint.py].
- New `stock.allocation.report` "Stock Allocation Report" and picking-type `auto_show_allocation_report` "Show Allocation"; 19 `report.stock.report_reception` and `auto_show_reception_report` removed [odoo-20/odoo/addons/stock/report/stock_allocation_report.py].
- Scrap model `stock.scrap` removed; scrapping now on moves: `stock.move.is_scrap`, `scrap_reason_tag_ids` "Scrap Reason", `should_replenish_scrapped`; `stock.lot.is_scrap` [odoo-20/odoo/addons/stock/models/stock_move.py:139,203].
- Return wizard `stock.return.picking` removed; `stock.picking.show_return` "Show return button" added [field diff, odoo-20/odoo/addons/stock/models/stock_picking.py].
- Label wizards for locations, packages and operation types (`stock.location.label.layout`, `stock.package.label.layout`, `stock.picking.type.label.layout`) [odoo-20/odoo/addons/stock/wizard/].
- `stock.quantity.history` ("Inventory at Date") removed; `stock.zero.demand.confirmation` added; `stock.put.in.pack.package_capacity` "Package Size"; `product.template.store_by` "Tracking" [field diff].

Manufacturing (`mrp`):
- `mrp.bom.continuous` "Continuous Production"; `mrp.bom.note` / `mrp.production.note` "Additional Notes"; `mrp.production.remaining_time`, `packages_count`, `package_history_ids`; `mrp.workorder.cost`, `has_conflicts`, `has_planning_issues`, `properties` + `stock.picking.type.wo_properties_definition` "Workorder Properties"; `stock.picking.type.auto_confirm_production`; `mrp.workcenter.barcode`; new wizard `mrp.finished.product.label.layout` [odoo-20/odoo/addons/mrp/models/*.py, mrp/wizard/mrp_finished_product_label_layout.py].

Sales (`sale`):
- `res.partner.incoterm_id`/`incoterm_location` and `sale.order.incoterm`/`incoterm_location` (Incoterms on SO in `sale` itself); `sale.order.delivery_status`, `delivery_date`, `amount_unpaid` "Amount Remaining", `prepayment_amount`, `invoicing_closed` "Manually Closed For Invoicing", `is_unfulfilled` [odoo-20/odoo/addons/sale/models/sale_order.py].
- Lines: `section_qty`/`section_uom_id` (quantities on sections), `deferred_revenue`, `accrual_move_ids`, `invoice_policy` per line, `qty_delivered_percent`, `scheduled_date`, `mandatory_product` [odoo-20/odoo/addons/sale/models/sale_order_line.py].
- Company/settings: `sale_invoice_policy`, `sale_automatic_invoice` "Automatic Invoicing", `show_sol_numbers` "Line Numbers", `display_product_images_on_so`, `group_services_and_material` "Services & Materials", `sale_order_mandatory_product` [odoo-20/odoo/addons/sale/models/res_company.py; res_config_settings.py].
- Re-invoicing: `product.template.reinvoice_policy` "Re-Invoice Costs" now in `sale`; `account.analytic.line.reinvoice_move_id` [odoo-20/odoo/addons/sale/models/].

CRM (`crm`):
- Wizard `crm.lead2opportunity.partner` (single conversion) removed; mass wizard gains `link_to_matching_customer` [field diff]. `crm.team.member.assignment_rules` "Auto-Assignment Rules" added; `assignment_optout` "Pause assignment", `crm.stage.color`, `crm.team.invoiced/invoiced_target` removed [field diff]. New setting `module_website_partnership` "Partners Website Page" [odoo-20/odoo/addons/crm/models/res_config_settings.py]. New bridge `crm_sale_project` "Project Generation from Opportunities".

Project (`project`):
- New `project.task.stage.report` "Task time spent per stage" [odoo-20/odoo/addons/project/report/project_time_by_stage_report.py]; `project.project.stage.rotting_threshold_days` "Days to rot"; `project.role.user_ids` and `res.users.project_role_ids` "Project Roles"; `project.collaborator.access_mode`; `project.task.project_sharing_portal_user_ids` "Assignable Portal Users"; `project.project.allowed_internal_user_ids` "Team Members" [field diff, odoo-20/odoo/addons/project/models/].

Employees (`hr`):
- New models `hr.employee.departure` "Employee Departure" (departure_date, dismissal_date, reason, "Archive Employee On"), `hr.employee.type` "Employee Type", `hr.employee.location`, wizard `hr.employee.create.version.wizard`; removed `hr.contract.type`, `hr.departure.wizard`, `hr.version.wizard` [odoo-20/odoo/addons/hr/models/hr_employee_departure.py, hr_employee_type.py; wizard/hr_employee_create_version_wizard.py].
- New employee fields: `age`, `birthday_month`, `child_count`/`child_all_count`/`subordinate_ids`, `hourly_cost`, weekly work locations, `user_state`; `hr.version.fixed_term` "Fixed Term" [odoo-20/odoo/addons/hr/models/hr_employee.py, hr_version.py].

eCommerce (`website_sale`):
- `withdrawal.request` "Withdrawal Request" (email, order, message) [odoo-20/odoo/addons/website_sale/models/withdrawal_request.py] — inference: EU right-of-withdrawal button/form.
- Wishlist and product comparison built in (see merges). Stock messaging: `allow_out_of_stock_order`, `available_threshold`, `show_availability`, `out_of_stock_message`, `group_unpublish_out_of_stock` [odoo-20/odoo/addons/website_sale/models/product_template.py; res_config_settings.py].
- Ratings: `website.send_order_rating_emails` "Request ratings", `rating_email_delay` [odoo-20/odoo/addons/website_sale/models/website.py]; abandoned cart `send_abandoned_cart_followup`; `prevent_sale`/`prevent_sale_for(_categories)` "Hide Add To Cart"; `product.template.minimum_quantity`; `suggest_accessory/alternative/optional_products` + `group_automate_suggested_products`; `product.product.variant_image_ids`; `product.pricelist.tax_display`; `delivery.carrier.enable_delivery_estimate` "Estimated Delivery" [field diff, website_sale/models/].
- Model `website.base.unit` removed [field diff].

Point of Sale (`point_of_sale`):
- New `pos.prep.order` / `pos.prep.line` (preparation orders/lines, linked from `pos.order.prep_order_ids`) [odoo-20/odoo/addons/point_of_sale/models/pos_prep_order.py, pos_prep_line.py]; `pos.snooze` "Snoozed records" (temporarily unavailable products) [pos_snooze.py]; `pos.order.receipt` generator [odoo-20/odoo/addons/point_of_sale/receipt/pos_order_receipt.py]; `pos.price.inclusion.wizard`.
- `pos.config.session_closing_mode` "Closing Mode", `session_closing_daily_hour` "Daily Closing Hour", `use_closing_entry_by_product`, `closing_journal_id`, `default_partner_id` "Default Customer", tip presets `tip_percentage_1..3` and `set_tip_after_payment`, custom receipt info (logo/address/phone/email/website), `use_download_invoice`, `preparation_printer_ids`/`receipt_printer_ids` [odoo-20/odoo/addons/point_of_sale/models/pos_config.py].
- `pos.preset.service_fee*` (service fee per preset), `pos.payment.foreign_currency_id`/`amount_currency` and `pos.payment.method.currency_ids` (foreign-currency payments), `pos.payment.qr_code`, `pos.printer.paper_size`/`printer_ip`/`use_cashdrawer`/`use_lna`, `product.combo.is_upsell`, settings `use_kiosk_mode`, `pos_auto_validate_electronic_payment` [field diff, point_of_sale/models/].
- Removed: `pos.close.session.wizard`, `pos.pack.operation.lot` [field diff].

AI (Enterprise `ai` and bridges):
- New in `ai`: `ai.session` / `ai.session.event` (persistent agent sessions with `auto_confirm` of tool calls, `enable_web_search`, `enable_think_longer`, `enable_resources_only`, `show_agent_steps`, `parent_session_id`), `ai.tool`, `ai.skill` (title, instructions, server-action tools flagged `use_in_ai`, native skills), `ai.web.page` + `ai.web.scraper.batch`, `ai.embedding.mixin`, `call.transcription.mixin` [odoo-20/enterprise/ai/models/ai_session.py:84-120; ai_skill.py:8-16; ai_tool.py:56].
- Agents can delegate: `ai.agent.allowed_agent_ids` "Allowed Agents" (relation `ai_agent_delegation_rel`), used to start sub-sessions [odoo-20/enterprise/ai/models/ai_agent.py:80; ai_session.py:280].
- Per-agent `llm_model` field removed [field diff]. Odoo 19 had settings `openai_key`/`google_key` (bring your own key) [odoo-19/enterprise/ai/models/res_config_settings.py:8-27] and `ai/utils/llm_providers.py`; Odoo 20 `ai` has neither, and calls go through `call_odoo_ai_transport` to `{endpoint}/api/odoo_ai/{route}` with an IAP account token [odoo-20/enterprise/ai/utils/ai_utils.py:92-100].
- `ai_knowledge` adds wizard `ai.add.knowledge.articles` [odoo-20/enterprise/ai_knowledge/wizard/ai_add_knowledge_articles.py].

Git log (20.0 branch, post-release only), business-visible [IMP]/[ADD] examples: "[IMP] account: overdue invoices filter", "[IMP] hr_expense: simplify the expense flow", "[IMP] hr_holidays: always deduct deficit allocations", "[IMP] iot_drivers: add network printers detection", "[ADD] l10n_la: add Laos localization", "[ADD] l10n_ae_ubl_pint: add UAE PINT support", "[IMP] l10n_it_edi: add generic buttons for refresh and fetch invoices from SDI" (`git log` in odoo-20/odoo); EE: "[IMP] account_reports: Deferred auditability", "[ADD] l10n_lb_hr_payroll: Lebanon payroll localization" (`git log` in odoo-20/enterprise).

### Inferences
- Strategic consolidation: several features that were separate installable modules in 19 (batch transfers, wishlist, comparison, remote work, hourly cost, org chart, VAT validation, IBAN) become standard in 20, reducing module count for typical installs.
- Inventory valuation seems to be re-architected toward `account` (stock valuation report and stock accounts defined in `account`), though `stock_account` still exists [odoo-20/odoo/addons/stock_account].
- AI in 20 appears to rely on Odoo's own IAP-billed AI service instead of customer-provided OpenAI/Google keys (inference from removed key settings and the IAP transport; a grep for `openai_key|google_key` in odoo-20 only hits `crm_enterprise/tools/business_card_scanner.py` and AI field tests).

### Gaps
- Field diffs are syntactic; a field "removed" may have been moved to another module of the same app. Labels of fields without `string=` are not shown.
- View/JS-only features (e.g. new UI widgets, dashboards) were not systematically diffed; only Python models/fields and manifests.
- Git history for 19 is unavailable and for 20 covers only Sep–Nov 2026, so `[ADD]/[IMP]` subjects cannot enumerate the full 19→20 feature set.

## Spain localization: what changed in l10n_es* modules (Verifactu, SII, TicketBAI, Facturae)?

### Takeaway
Spain gets a structural refactor in 20: VAT regime codes, invoice types (F1/F2/F4/F5/F6/LC and R1-R5 refund reasons) and "special VAT regime" moved from individual EDI modules (Verifactu/TicketBAI) into the base `l10n_es`, shared by SII, TicketBAI, Verifactu and Facturae; SII drops the generic `account_edi` framework for its own `l10n_es_edi_sii.document` model with a journal-dashboard; Verifactu gains a per-issuer model (`l10n_es_edi_verifactu.issuer`) and certificate dependency; Canary Islands charts are merged into the common chart; AEAT models (111/115/130/303/347/349/390) get new "submission" wizards; new modules add Spanish Intrastat, POS VAT books, and eCommerce ID-type selection.

### Cited Findings
Module inventory:
- Community 19: `l10n_es`, `l10n_es_edi_facturae`, `l10n_es_edi_sii`, `l10n_es_edi_tbai`, `l10n_es_edi_tbai_pos`, `l10n_es_edi_verifactu`, `l10n_es_edi_verifactu_pos`, `l10n_es_pos`. Community 20 adds `l10n_es_website_sale` ("Spain - ECommerce", depends `l10n_es`, `website_sale`) and `l10n_es_website_sale_id_type` ("Let customers pick the type of their identification document at checkout", auto-install) [odoo-20/odoo/addons/l10n_es_website_sale/__manifest__.py; odoo-20/odoo/addons/l10n_es_website_sale_id_type/__manifest__.py].
- Enterprise 19: `l10n_es_real_estates`, `l10n_es_reports`, `l10n_es_reports_2024`, `l10n_es_sale_amazon`. Enterprise 20: removes `l10n_es_reports_2024`; adds `l10n_es_intrastat` ("Spain - Intrastat Declaration", depends `account_intrastat`, `l10n_es_reports`, auto-install) and `l10n_es_reports_pos` ("Point of Sale support for the Spanish VAT record books (Libros Registro de IVA)") [odoo-20/enterprise/l10n_es_intrastat/__manifest__.py; odoo-20/enterprise/l10n_es_reports_pos/__manifest__.py].

`l10n_es` (base):
- No longer depends on `base_iban`/`base_vat` [odoo-19 vs odoo-20 l10n_es/__manifest__.py].
- New fields on `account.move`: `l10n_es_invoice_type` (selection F1 Invoice, F2 Simplified Invoice, F4 Summary of Invoices, F5 Importations (DUA), F6 Accounting Vouchers, LC Customs, plus refund reasons R1–R5; help cites Article 80 Law 37/1992), `l10n_es_regime_code` "VAT Regime Code", `l10n_es_regime_code_additional`, `l10n_es_original_invoice_credited`; removed `l10n_es_is_simplified` [odoo-20/odoo/addons/l10n_es/models/account_move.py:19-43,179-189].
- `account.tax.l10n_es_regime_code`, `l10n_es_applicability` "Applicability (Spain)" (moved here from Verifactu) [odoo-20/odoo/addons/l10n_es/models/account_tax.py].
- `res.company.l10n_es_special_vat_regime` with values Cash Basis, Equivalence Surcharge, REAGYP, Simplified [odoo-20/odoo/addons/l10n_es/models/res_company.py:16-20] (19 had `res.company.l10n_es_edi_verifactu_special_vat_regime` in Verifactu — field diff).
- Partner ID documents: `res.partner.l10n_es_passport`, `l10n_es_foreign_id` "Country of residence ID document", `l10n_es_res_cert` "Residence certificate", `l10n_es_other_id` "Other supporting document" [odoo-20/odoo/addons/l10n_es/models/res_partner.py]; git: "[IMP] l10n_es, l10n_es_website_sale: let customers pick ID type at checkout" (2026-09-17).
- Settings now expose `module_l10n_es_edi_sii` "SII", `module_l10n_es_edi_tbai` "TicketBai", `module_l10n_es_edi_verifactu` "Veri*Factu" [odoo-20/odoo/addons/l10n_es/models/res_config_settings.py].
- Chart templates: 19 had separate Canary templates (`template_es_canary_assoc/common/full/pymes`, `template_es_common_mainland`); 20 keeps only `es_assec`, `es_common`, `es_coop_full`, `es_coop_pymes`, `es_full`, `es_pymes`, with a single `account.tax-es_common.csv` (190 lines mention Canary) and logic `_l10n_es_is_canary()` that activates Canary taxes / deactivates mainland ones per company [odoo-20/odoo/addons/l10n_es/models/res_company.py:61-93; odoo-20/odoo/addons/l10n_es/data/template/]. `account.group-es_*.csv` files are gone (consistent with removal of `account.group`).

SII (`l10n_es_edi_sii`):
- No longer depends on `account_edi` and drops `data/account_edi_data.xml` and `models/account_edi_format.py` [odoo-19 vs odoo-20 l10n_es_edi_sii/__manifest__.py and models/].
- New model `l10n_es_edi_sii.document` "SII Document" (state, JSON payload, CSV, XML attachment, response message) and on `account.move`: `l10n_es_edi_sii_state` "Spain SII Status", `l10n_es_edi_sii_document_ids`, `l10n_es_edi_sii_last_document_id`, `l10n_es_edi_sii_error` [odoo-20/odoo/addons/l10n_es_edi_sii/models/l10n_es_edi_sii_document.py; account_move.py].
- Journal dashboard: `account.journal.l10n_es_sii_kanban_state`, `l10n_es_sii_pending_count`, view `account_journal_dashboard_views.xml`; plus new certificate and settings views [odoo-20/odoo/addons/l10n_es_edi_sii/models/account_journal.py; __manifest__.py].
- Git: "[IMP] l10n_es_edi_sii: Avoid Sending to SII from batch send wizard" (2026-10-26).

Veri*Factu (`l10n_es_edi_verifactu`, `_pos`):
- Depends now on `l10n_es` + `certificate` (19: only `l10n_es`) [manifests].
- New model `l10n_es_edi_verifactu.issuer` "Veri*Factu Issuer" holding `chain_sequence_id`, `next_batch_time`, `obligado_partner_id`, `company_id` — replacing 19 company fields `l10n_es_edi_verifactu_chain_sequence_id`, `l10n_es_edi_verifactu_next_batch_time` [odoo-20/odoo/addons/l10n_es_edi_verifactu/models/verifactu_issuer.py; field diff].
- Document gains `obligado_partner_id` "Required to issue", XML attachment and raw JSON [odoo-20/odoo/addons/l10n_es_edi_verifactu/models/verifactu_document.py].
- Removed move/reversal fields `l10n_es_edi_verifactu_clave_regimen`, `_refund_reason`, `_available_clave_regimens`, `_show_cancel_button` (superseded by shared `l10n_es_regime_code`/`l10n_es_invoice_type` in `l10n_es`); POS: `l10n_es_edi_verifactu_refund_reason` → `pos.order.l10n_es_invoice_type` [field diff; odoo-20/odoo/addons/l10n_es_edi_verifactu_pos/models/pos_order.py].
- New: journal dashboard view, settings view, resequence wizard guard (`l10n_es_edi_verifactu_required_in_prod`) [odoo-20/odoo/addons/l10n_es_edi_verifactu/__manifest__.py; wizard/account_resequence.py].

TicketBAI (`l10n_es_edi_tbai`, `_pos`):
- New `account.move.l10n_es_tbai_original_invoice_date` "Original Invoice Date (TicketBAI)"; refund reason fields on move/reversal removed (now `l10n_es_invoice_type`); new `models/account_tax.py`, `const.py`; new tests for recipient ID types and "FechaOperacion" XML [field diff; odoo-20/odoo/addons/l10n_es_edi_tbai/tests/test_tbai_recipient_id_types.py, tests/document_xmls/xml_fecha_operacion.xml].
- Git: "[FIX] l10n_es_edi_tbai: require the refund reason of vendor refunds" (2026-10-30).

Facturae (`l10n_es_edi_facturae`):
- Small change set: new `account.move.l10n_es_original_invoice_credited`; tax template file unified to `account.tax-es_common.csv`; new test fixtures for negative invoices, 2-decimal rounding and withholding [odoo-20/odoo/addons/l10n_es_edi_facturae/tests/data/expected_out_invoice_negative.xml, expected_out_invoice_round_2.xml, expected_out_invoice_withhold.xml].
- Git: "[FIX] l10n_es_edi_sii, l10n_es_edi_tbai, l10n_es_edi_verifactu, l10_es_edi_facturae: preselect certificate scope" (2026-10-28).

AEAT reports (`l10n_es_reports`, EE):
- 11 `l10n_es_reports.aeat.boe.*.export.wizard` models replaced by `l10n_es_reports.mod*.submission.wizard` models plus a generic `l10n_es_reports.modelos.submission.wizard` with `submission_instructions` [odoo-20/enterprise/l10n_es_reports/wizard/aeat_return_submission_wizard.py]. New options include, for 303: "Corrective Self-Assessment", rectification motives, "request to cancel/modify the direct debit"; for 349: `is_period_quarterly` [same file]. `l10n_es_reports` ships `account_return_data.xml` and mod111/115/130/303/347/349/390 XML data [odoo-20/enterprise/l10n_es_reports/data/].
- `l10n_es_real_estates`: new `real_estate_location` selection [odoo-20/enterprise/l10n_es_real_estates/models/real_estate.py].

### Inferences
- The `l10n_es_invoice_type`/`l10n_es_regime_code` centralisation means one set of SII/Verifactu/TBAI classification fields per invoice instead of one per EDI module — simpler for companies that report to more than one system (e.g. SII + Verifactu or TicketBAI).
- "Submission wizard" naming plus `account_return_data.xml` suggests AEAT models are integrated into the Enterprise "tax return" workflow rather than a plain BOE export (inference).
- Verifactu's issuer model with `obligado_partner_id` suggests support for issuing on behalf of a different obligated party / multiple chains (inference).

### Gaps
- No evidence found in code of new AEAT web-service submission (direct filing) for models 303/390 etc.; only wizards and BOE data were checked.
- Facturae FACe/FACeB2B integration was not found among changes (grep not exhaustive).

## Minimum PostgreSQL and Python versions required by Odoo 20 vs 19

### Takeaway
Odoo 20 raises the floors: Python ≥ 3.12 (supported up to 3.14) vs 19's ≥ 3.10 (up to 3.13); PostgreSQL ≥ 16 vs 19's ≥ 13.

### Cited Findings
- Odoo 19: `MIN_PY_VERSION = (3, 10)`, `MAX_PY_VERSION = (3, 13)`, `MIN_PG_VERSION = 13` [odoo-19/odoo/odoo/release.py:39-41].
- Odoo 20: `MIN_PY_VERSION = (3, 12)`, `MAX_PY_VERSION = (3, 14)`, `MIN_PG_VERSION = 16` [odoo-20/odoo/odoo/release.py:39-41].
- `setup.py` uses `python_requires='>=' + MIN_PY_VERSION` in both [odoo-19/odoo/setup.py:70; odoo-20/odoo/setup.py:69].
- The PostgreSQL check emits a warning (not a hard stop): `if result.server_version < MIN_PG_VERSION * 10000: warnings.warn("Postgres version is …, lower than minimum required …")` [odoo-20/odoo/odoo/sql_db.py:721-722; same logic at odoo-19/odoo/odoo/sql_db.py:686-687].
- `requirements.txt` in 20 drops every pin for Python < 3.12 (e.g. Jammy-era `Babel==2.9.1`, `lxml==4.8.0`, `psycopg2==2.9.2/2.9.5`, `Werkzeug==2.0.2/2.2.2`) and adds Python 3.14 ("Resolute") pins: `greenlet==3.3.2`, `lxml==6.0.2`, `Pillow==12.1.1`, `python-stdnum==2.2`, `vobject==0.9.9`; adds `h11==0.16.0`; removes `pytz` and `xlwt`; adds `tzdata` for Windows [odoo-20/odoo/requirements.txt vs odoo-19/odoo/requirements.txt]. `requirements2.txt` exists only in 19 [odoo-19/odoo/requirements2.txt].

### Inferences
- Comments in requirements map versions to distributions: 20 targets Ubuntu Noble (24.04, Python 3.12), Debian Trixie (Python 3.13) and "Resolute" (Ubuntu 26.04, Python 3.14); Ubuntu Jammy (22.04, Python 3.10) is no longer supported.
- PostgreSQL 13–15 servers will still connect but produce a warning; officially they are below minimum.

### Gaps
- No explicit maximum PostgreSQL version is defined in either release.py.
