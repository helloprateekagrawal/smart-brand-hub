import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Section = ({ children }: { children: React.ReactNode }) => (
  <section className="space-y-4 text-foreground/80 leading-relaxed">{children}</section>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-primary mt-12 mb-4">{children}</h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">{children}</h3>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-6 space-y-2 marker:text-primary">{children}</ul>
);

const OL = ({ children }: { children: React.ReactNode }) => (
  <ol className="list-decimal pl-6 space-y-2 marker:text-primary marker:font-semibold">{children}</ol>
);

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-3">
            Privacy Policy &amp; Trust Center
          </h1>
          <p className="text-lg text-foreground/70 font-medium">
            Silver Suits AI Private Limited
          </p>
        </header>

        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <p>
            At Silver Suits AI, we design contextual, autonomous AI Agents for the Banking, Financial Services, and Insurance (BFSI) sectors. We recognize that handling financial data requires the highest standards of security, privacy, and regulatory compliance.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, store, share, and protect personal and transactional information in strict compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and applicable financial regulatory frameworks.
          </p>
        </div>

        <Separator className="my-10" />

        <Section>
          <H2>1. Scope &amp; Legal Roles</H2>
          <p>This policy governs personal data processed by Silver Suits AI across our workforce and enterprise platforms. Under the DPDP Act, 2023, our legal role depends on the data source:</p>
          <UL>
            <li><strong>Employee &amp; Contractor Data:</strong> Silver Suits AI acts as the <strong>Data Fiduciary (Controller)</strong> for data relating to our team members, contractors, and corporate invitees.</li>
            <li><strong>Enterprise Client &amp; Customer Data:</strong> When our financial AI agents interact with end-users of banking, insurance, or financial institutions, <strong>Silver Suits AI acts strictly as a Data Processor</strong>. The respective financial institution acts as the <strong>Data Fiduciary (Controller)</strong>.</li>
          </UL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>2. Categories of Data We Process</H2>
          <H3>2.1 Enterprise Support &amp; Customer Data</H3>
          <p>To execute automated financial workflows, our AI Agents process the minimum necessary data, including:</p>
          <UL>
            <li><strong>Identifiers:</strong> Name, mobile number, or account references (typically fetched on-demand via secure API integrations with the client).</li>
            <li><strong>Interaction Content:</strong> Conversation logs, text transcripts, voice recordings, and user selections.</li>
            <li><strong>Technical &amp; System Metadata:</strong> Timestamps, agent execution flows, tool-invocation parameters, IP addresses, and device signatures.</li>
          </UL>
          <H3>2.2 Employee &amp; Contractor Data</H3>
          <p>For workforce management, we collect standard operational identifiers, including name, corporate device IDs, tax identifiers, bank details for payroll processing, and occupational health configurations.</p>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>3. Purpose and Legal Basis for Processing</H2>
          <p>We process data under valid legal bases including explicit consent, contractual performance, or specified legitimate uses (such as fraud prevention or financial compliance):</p>
          <UL>
            <li><strong>Service Fulfillment:</strong> Delivering voice or text automation workflows (e.g., balance updates, claim processing, or live routing).</li>
            <li><strong>AI Governance &amp; Safety:</strong> Monitoring tool execution parameters to prevent algorithmic bias, prompt injection risks, and unauthorized anomalies within financial model pipelines.</li>
            <li><strong>Compliance &amp; Auditing:</strong> To fulfill explicit statutory accounting, corporate security, or tax-related mandates.</li>
          </UL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>4. Your Rights as a Data Principal</H2>
          <p>
            In accordance with the DPDP Act, 2023, individuals retain robust rights over their personal data.{" "}
            <em className="block mt-3 p-3 bg-muted rounded-md not-italic text-sm border-l-4 border-primary">
              Note: For end-customer data, rights should be exercised through your primary financial provider (the Data Fiduciary), who will instruct us to execute the downstream action.
            </em>
          </p>
          <UL>
            <li><strong>Right to Information &amp; Access:</strong> Request a summary of the personal data undergoing processing and its purpose.</li>
            <li><strong>Right to Correction &amp; Completion:</strong> Request immediate rectification of inaccurate or outdated financial/personal records used by our AI execution loops.</li>
            <li><strong>Right to Erasure:</strong> Request permanent deletion of records from active application databases, LLM context windows, and backup archives, subject to regulatory retention mandates.</li>
            <li><strong>Right to Nominate:</strong> Nominate an individual to exercise data rights on your behalf in the event of death or incapacity.</li>
            <li><strong>Right to Grievance Redressal:</strong> File immediate complaints regarding data processing discrepancies.</li>
          </UL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>5. Multi-Channel Grievance Redressal Framework</H2>
          <p>
            If you wish to exercise any of your rights or raise a privacy-related concern, you can directly reach out to our designated <strong>Grievance Officer / Data Protection Officer (DPO)</strong> through our fully operational channels:
          </p>
          <UL>
            <li>
              🌐 <strong>Online Grievance Webform:</strong> File a structured tracking request at{" "}
              <a href="https://forms.gle/kQJJTAaAtEeoaCas5" target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
                Privacy Grievance Portal
              </a>.
            </li>
            <li>
              📧 <strong>By Email:</strong> Reach our DPO directly at{" "}
              <a href="mailto:pavan@silversuits.ai" className="text-primary font-medium underline underline-offset-4 hover:opacity-80">
                pavan@silversuits.ai
              </a>.
            </li>
            <li>
              🏢 <strong>Physical Address:</strong> Silver Suits AI Private Limited, 235 Binnamangala, 2nd Floor, C/O PROWORKS 13TH CROSS, HOYASALA NAGAR 02ND STG, Indiranagar (Bangalore), Bangalore North, Bangalore – 560038, Karnataka.
            </li>
          </UL>
          <H3>Process, Authentication, &amp; Timelines:</H3>
          <OL>
            <li><strong>Acknowledgment:</strong> All incoming grievances will be formally acknowledged within <strong>48 hours</strong>.</li>
            <li><strong>Identity Authentication:</strong> For financial security, we verify identities via automated account verification or an out-of-band One-Time Password (OTP) before exposing profile logs.</li>
            <li><strong>Statutory Timeline:</strong> Valid requests are triaged immediately, aiming for internal resolution within 30 days, and strictly capped at a maximum of <strong>90 days</strong> as mandated by law.</li>
          </OL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>6. Cross-Border Transfers &amp; Local Residency</H2>
          <UL>
            <li><strong>Default Framework:</strong> Data is securely hosted on premium cloud infrastructure. Any cross-border transmission uses strict Standard Contractual Clauses (SCCs) and encryption methods approved under the DPDP Act.</li>
            <li><strong>In-Country Residency Option:</strong> For BFSI clients bound by local central banking or insurance mandates, Silver Suits AI supports deployment options restricted exclusively to localized regions, ensuring backups and metadata never leave Indian soil.</li>
          </UL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>7. Technical and Organizational Security Measures (TOMs)</H2>
          <p>Our layered defense protocols protect critical financial logic:</p>
          <UL>
            <li><strong>Advanced Encryption:</strong> Utilizing AES-256 for data-at-rest and TLS 1.3 for data-in-transit. High-risk PII handles application-level envelope encryption (AES-GCM).</li>
            <li><strong>System Isolation &amp; Access Controls:</strong> Identity access management runs on Single Sign-On (SSO), mandatory Multi-Factor Authentication (MFA), and strict role-based isolation (RBAC).</li>
            <li><strong>Breach Protocol:</strong> In case of an unexpected data vulnerability, Silver Suits AI maintains structured playbooks to immediately alert the <strong>Data Protection Board of India (DPBI)</strong> and impacted entities as legally required.</li>
          </UL>
        </Section>

        <Separator className="my-10" />

        <Section>
          <H2>8. Data Retention Policy</H2>
          <UL>
            <li><strong>Customer Interaction Logs:</strong> Maintained strictly for the duration of the enterprise contract term, or configured entirely according to the specific client's data life-cycle guidelines.</li>
            <li><strong>Security Auditing Logs:</strong> Operational access logs are held for 12 months; forensic legal holds can extend up to 7 years.</li>
            <li><strong>Workforce Records:</strong> Maintained for 7 years post-termination to satisfy statutory labor and tax frameworks.</li>
          </UL>
          <p>Upon expiry of the retention window, data is automatically purged or subjected to irreversible anonymization.</p>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
