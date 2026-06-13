export const platformPages = {
  drafting: {
    path: '/drafting',
    title: 'AI Legal Drafting',
    subtitle:
      'Generate first drafts in seconds — demand letters, summaries, memos, contracts, and legal correspondence without starting from a blank page.',
    intro:
      'HermesAI helps Canadian legal teams reduce repetitive drafting work while keeping lawyers in control of every edit and final output.',
    highlights: [
      {
        title: 'Clause and template generation',
        text: 'Create structured first drafts for common legal documents using firm-aligned templates and clause libraries.',
      },
      {
        title: 'Context-aware drafting',
        text: 'Draft with awareness of uploaded firm documents, precedents, and matter context — not generic web content.',
      },
      {
        title: 'Editable AI-assisted outputs',
        text: 'Review, revise, and approve every draft. AI accelerates the work; your team owns the result.',
      },
      {
        title: 'Grounded in your documents',
        text: 'Outputs can reference uploaded firm materials so drafting stays consistent with how your practice actually works.',
      },
    ],
    outcomes: [
      'Reduce time spent on repetitive drafting',
      'Move from blank page to workable first draft faster',
      'Keep drafting inside one secure Canadian workspace',
    ],
  },
  research: {
    path: '/research',
    title: 'CanLII-Powered Legal Research',
    subtitle:
      'Ask legal questions in plain English and retrieve relevant Canadian case law through integrated CanLII research workflows.',
    intro:
      'Stop switching between research tools and your workspace. HermesAI brings Canadian legal research closer to where drafting and case work already happen.',
    highlights: [
      {
        title: 'Integrated CanLII workflows',
        text: 'Research Canadian case law directly inside your platform instead of bouncing between tabs and tools.',
      },
      {
        title: 'AI summaries of case law',
        text: 'Quickly understand decisions, key holdings, and relevant facts without reading every page from scratch.',
      },
      {
        title: 'Citation extraction',
        text: 'Pull out citations and supporting references to speed up memo prep and case analysis.',
      },
      {
        title: 'Natural language research',
        text: 'Ask questions the way lawyers think — then retrieve cases and summaries that match your query.',
      },
    ],
    outcomes: [
      'Find relevant cases and summarize decisions faster',
      'Spend less time searching and more time practicing law',
      'Keep research tied to Canadian legal sources',
    ],
  },
  vault: {
    path: '/vault',
    title: 'Context-Aware AI Vault',
    subtitle:
      'Upload firm precedents, contracts, memos, and client files so AI responses are grounded in your own knowledge base.',
    intro:
      'Most legal AI tools fail because they lack firm-specific context. HermesAI builds a secure document vault that turns your internal knowledge into institutional memory.',
    highlights: [
      {
        title: 'Secure document vault',
        text: 'Store precedents, contracts, memos, and client files in a controlled environment built for legal workflows.',
      },
      {
        title: 'Context-aware AI',
        text: 'Get answers and drafts informed by your firm\'s documents — not unrelated public data.',
      },
      {
        title: 'Retrieval-augmented generation',
        text: 'Use RAG-style workflows to reduce hallucinations and improve consistency across matters and teams.',
      },
      {
        title: 'Firm knowledge system',
        text: 'Preserve how your firm drafts, reasons, and organizes work so knowledge doesn\'t disappear in inboxes.',
      },
    ],
    outcomes: [
      'Improve consistency across matters and lawyers',
      'Use internal precedents instead of generic outputs',
      'Build institutional memory inside your firm',
    ],
  },
  security: {
    path: '/security',
    title: 'Security & Canadian Compliance',
    subtitle:
      'Built for Canadian legal data security — with infrastructure designed for confidentiality, control, and Canadian data residency.',
    intro:
      'For law firms, security is not a secondary feature. HermesAI is built with a security-first architecture designed with legal confidentiality in mind.',
    highlights: [
      {
        title: 'Canadian data residency',
        text: 'Data stored in Canada with databases and infrastructure designed for Canadian compliance expectations.',
      },
      {
        title: 'Secure authentication',
        text: 'Professional login and session management designed for secure access to sensitive legal work.',
      },
      {
        title: 'Encrypted document storage',
        text: 'Encrypted storage, secure transmission, and controlled access permissions for firm documents.',
      },
      {
        title: 'Modern secure infrastructure',
        text: 'Built on secure modern infrastructure powered by Supabase — without overclaiming compliance or guarantees.',
      },
    ],
    outcomes: [
      'Security-first architecture for legal teams',
      'Designed with legal confidentiality in mind',
      'Canadian hosting and controlled document access',
    ],
  },
};

export const platformNavItems = [
  { to: platformPages.drafting.path, label: 'AI Legal Drafting' },
  { to: platformPages.research.path, label: 'CanLII Research' },
  { to: platformPages.vault.path, label: 'Context-Aware Vault' },
  { to: platformPages.security.path, label: 'Security & Compliance' },
];

export const platformPaths = platformNavItems.map(({ to }) => to);
