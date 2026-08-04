import type { ServiceMapping } from '../types';

export const ai: ServiceMapping[] = [
  {
    id: 'ai-ml-platform',
    category: 'ai',
    concept: 'Machine Learning Platform',
    azure: {
      name: 'Azure Machine Learning',
      tagline: 'End-to-end ML lifecycle platform',
      description:
        'Managed platform to build, train, deploy, and manage ML models with notebooks, automated ML, pipelines, a model registry, and managed online/batch endpoints.',
      limitations: [
        'Compute is bounded by regional dedicated/low-priority vCPU quotas per VM family.',
        'Managed online endpoints: default 100 endpoints per region and 5,000 instances per subscription (soft).',
        'Default max 20 concurrent AutoML iterations per experiment.',
        'Endpoint request payload limited to ~1.5 MB and default 90-second scoring timeout.',
      ],
      docsUrl: 'https://learn.microsoft.com/azure/machine-learning/',
      free: true,
    },
    aws: {
      name: 'Amazon SageMaker',
      tagline: 'Build, train & deploy ML',
      description:
        'Fully managed service covering the entire ML workflow — labeling, notebooks, training, tuning, hosting, and MLOps — with real-time, serverless, and batch inference options.',
      limitations: [
        'Per-instance-type training and endpoint quotas apply per region (many default to 0 until raised).',
        'Real-time endpoint: max 60-second invocation timeout and ~6 MB payload limit.',
        'Default limit on number of endpoints, endpoint configs, and hyperparameter tuning jobs per account.',
        'Serverless inference max memory 6 GB and max concurrency 200 per endpoint.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/sagemaker/',
      free: true,
    },
  },
  {
    id: 'ai-genai',
    category: 'ai',
    concept: 'Generative AI / Foundation Models',
    azure: {
      name: 'Azure OpenAI Service',
      tagline: 'Managed OpenAI foundation models',
      description:
        'Provides REST access to OpenAI models (GPT-4o, GPT-4, embeddings, DALL·E) with Azure security, private networking, content filtering, and regional deployments.',
      limitations: [
        'Per-deployment quotas measured in Tokens-Per-Minute (TPM) with derived requests-per-minute (RPM).',
        'Model and feature availability varies by region and requires approved access.',
        'Default per-model, per-region subscription TPM caps that must be raised via quota requests.',
        'Content filtering and abuse-monitoring policies apply to all deployments.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/openai/',
      free: false,
    },
    aws: {
      name: 'Amazon Bedrock',
      tagline: 'Serverless foundation model API',
      description:
        'Fully managed service offering a choice of foundation models (Anthropic, Meta, Amazon Titan, Cohere, etc.) via a single API, with fine-tuning, RAG, agents, and guardrails.',
      limitations: [
        'Individual model access must be explicitly requested/enabled per account and region.',
        'On-demand throughput governed by per-model requests-per-minute and tokens-per-minute quotas.',
        'Guaranteed high throughput requires purchasing Provisioned Throughput (model units).',
        'Model and feature availability differs across AWS regions.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/bedrock/',
      free: false,
    },
  },
  {
    id: 'ai-speech',
    category: 'ai',
    concept: 'Speech-to-Text & Text-to-Speech',
    azure: {
      name: 'Azure AI Speech',
      tagline: 'Speech transcription & synthesis',
      description:
        'Unified speech service providing speech-to-text, text-to-speech (including neural and custom voices), speech translation, and speaker recognition.',
      limitations: [
        'Batch transcription audio file limited to ~1 GB / up to 4 hours per file.',
        'Real-time recognition connection auto-disconnects after ~20 minutes of silence.',
        'Default concurrency limits on transcriptions and per-second request quotas by tier.',
        'Custom Neural Voice requires an application and Microsoft approval.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/speech-service/',
      free: true,
    },
    aws: {
      name: 'Amazon Transcribe / Polly',
      tagline: 'Speech recognition & synthesis',
      description:
        'Amazon Transcribe converts speech to text (batch and streaming) and Amazon Polly turns text into lifelike speech with neural voices across many languages.',
      limitations: [
        'Transcribe batch audio limited to 4 hours (or 2 GB) per file.',
        'Streaming transcription supports a bounded set of languages and 4-hour session max.',
        'Polly synthesis input limited to 3,000 billed characters (6,000 total) per SynthesizeSpeech call.',
        'Per-account TPS quotas apply to both Transcribe and Polly APIs.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/transcribe/',
      free: true,
    },
  },
  {
    id: 'ai-vision',
    category: 'ai',
    concept: 'Computer Vision / Image Analysis',
    azure: {
      name: 'Azure AI Vision',
      tagline: 'Image analysis & OCR',
      description:
        'Pretrained and customizable vision APIs for image tagging, object detection, OCR (Read), spatial analysis, and image captioning, plus Custom Vision for tailored models.',
      limitations: [
        'Analyze Image input limited to 20 MB (URL/binary) and dimensions between 50×50 and 16,000×16,000 px.',
        'Read/OCR supports PDFs and images up to 500 pages / 500 MB (per tier).',
        'Free (F0) tier limited to 20 calls per minute and 5,000 per month.',
        'Some features and model versions are region-restricted.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/computer-vision/',
      free: true,
    },
    aws: {
      name: 'Amazon Rekognition',
      tagline: 'Image & video analysis',
      description:
        'Deep-learning image and video analysis for object/scene detection, facial analysis and recognition, text-in-image, content moderation, and custom labels.',
      limitations: [
        'Input image limited to 15 MB as bytes or 15 MB when stored in S3 (5 MB for some APIs).',
        'Stored video analysis limited to 10 hours and 10 GB per file.',
        'Face collections and per-second API quotas apply per account/region.',
        'Custom Labels billed per training and inference hour with concurrency limits.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/rekognition/',
      free: true,
    },
  },
  {
    id: 'ai-language',
    category: 'ai',
    concept: 'Natural Language Processing',
    azure: {
      name: 'Azure AI Language',
      tagline: 'Text analytics & NLP',
      description:
        'Suite of NLP capabilities including sentiment analysis, key phrase extraction, named entity recognition, PII detection, summarization, and custom text classification.',
      limitations: [
        'Sync requests limited to 10 documents and 5,120 characters per document per request.',
        'Free (F0) tier limited to ~5,000 transactions per 30 days and low TPS.',
        'Custom models limited by training-document counts and per-project quotas.',
        'Language and feature availability varies by region and model version.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/language-service/',
      free: true,
    },
    aws: {
      name: 'Amazon Comprehend',
      tagline: 'NLP & text insights',
      description:
        'Managed NLP service for sentiment, entities, key phrases, language detection, PII, and topic modeling, plus custom classification and entity recognition.',
      limitations: [
        'Sync single-document analysis limited to 5,000 UTF-8 bytes of text.',
        'Batch (BatchDetect*) limited to 25 documents per request.',
        'Custom classification/entity training and endpoints subject to per-account quotas.',
        'Async topic modeling limited to 1 million documents / 5 GB per job.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/comprehend/',
      free: true,
    },
  },
  {
    id: 'ai-translation',
    category: 'ai',
    concept: 'Machine Translation',
    azure: {
      name: 'Azure AI Translator',
      tagline: 'Real-time text translation',
      description:
        'Neural machine translation service supporting 100+ languages for text and document translation, with custom translation models via Custom Translator.',
      limitations: [
        'Text translation request limited to 50,000 characters total per request.',
        'Free (F0) tier limited to 2 million characters per month.',
        'Document Translation supports files up to 40 MB and batches up to 250 MB / 1,000 files.',
        'Per-tier request-rate throttling applies.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/translator/',
      free: true,
    },
    aws: {
      name: 'Amazon Translate',
      tagline: 'Neural machine translation',
      description:
        'Neural machine translation service for real-time and batch translation across 75+ languages, with custom terminology and active custom translation support.',
      limitations: [
        'Real-time TranslateText limited to 10,000 bytes of UTF-8 text per request.',
        'Async batch documents limited to 20 MB and 1 million characters per file.',
        'Custom terminology files limited to 10 MB and 256 KB per source term set.',
        'Default per-account TPS quotas apply to real-time translation.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/translate/',
      free: true,
    },
  },
  {
    id: 'ai-document',
    category: 'ai',
    concept: 'Document Intelligence / OCR Extraction',
    azure: {
      name: 'Azure AI Document Intelligence',
      tagline: 'Extract data from documents',
      description:
        'Extracts text, key-value pairs, tables, and structure from documents using prebuilt models (invoices, receipts, IDs) and custom-trained models (formerly Form Recognizer).',
      limitations: [
        'Input file limited to 500 MB (4 MB on free tier) and 2,000 pages per document.',
        'Image dimensions must be between 50×50 and 10,000×10,000 pixels.',
        'Custom template models limited to ~500 pages of training data; neural models have their own caps.',
        'Free (F0) tier limited to 500 pages per month and low concurrency.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/ai-services/document-intelligence/',
      free: true,
    },
    aws: {
      name: 'Amazon Textract',
      tagline: 'Document text & data extraction',
      description:
        'Machine-learning service that extracts printed and handwritten text, forms, tables, and query-based fields from scanned documents beyond simple OCR.',
      limitations: [
        'Synchronous operations limited to single-page images up to 10 MB (JPEG/PNG) or 5 MB PDF.',
        'Asynchronous jobs support PDF/TIFF up to 500 MB and 3,000 pages.',
        'Per-account TPS quotas differ by API (Detect, Analyze, Queries).',
        'Handwriting supported only for English.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/textract/',
      free: true,
    },
  },
  {
    id: 'ai-bots',
    category: 'ai',
    concept: 'Conversational AI / Chatbots',
    azure: {
      name: 'Azure AI Bot Service',
      tagline: 'Build & host chatbots',
      description:
        'Framework and hosting for building conversational bots with the Bot Framework SDK, connecting to channels like Teams, Web Chat, and Slack, integrated with language understanding.',
      limitations: [
        'Standard channels are free, but Premium channels (e.g. Direct Line) are billed per messages.',
        'Direct Line and Web Chat have per-conversation and message-throughput limits.',
        'Requires an Azure Bot resource plus separate language/OpenAI resources for NLU.',
        'Some channels have message size and rich-card formatting restrictions.',
      ],
      docsUrl:
        'https://learn.microsoft.com/azure/bot-service/',
      free: true,
    },
    aws: {
      name: 'Amazon Lex',
      tagline: 'Conversational voice & text bots',
      description:
        'Service for building conversational interfaces using the same technology as Alexa, providing automatic speech recognition and natural-language understanding for bots.',
      limitations: [
        'Default limit of 100 bots per account and 250 intents per bot (soft).',
        'Max 100 slot types per bot and 10 sample utterances constraints per build.',
        'Streaming/audio conversations limited to a bounded session duration.',
        'Per-account text and speech request TPS quotas apply.',
      ],
      docsUrl: 'https://docs.aws.amazon.com/lexv2/',
      free: true,
    },
  },
];
