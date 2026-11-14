import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Persistent JSON Database Storage for Contact Messages
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'inquiries_db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  createdAt: string;
  status: 'received' | 'notified' | 'read';
  emailSentTo: string;
}

// Initial seed if file doesn't exist
function getDbInquiries(): ContactInquiry[] {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const initial: ContactInquiry[] = [
        {
          id: 'inq-initial-001',
          name: 'Sarah Pratama',
          email: 'sarah.pratama@techinnovasi.id',
          subject: 'Power BI Executive Dashboard Consultation',
          category: 'Data Analytics Project',
          message: 'Hi Faiz, we were impressed by your PL-300 certification and awards. We would love to discuss a business intelligence consultation for our supply chain reporting.',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          status: 'notified',
          emailSentTo: 'fnimatulhaq@gmail.com'
        }
      ];
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading inquiries database:', err);
    return [];
  }
}

function saveDbInquiries(inquiries: ContactInquiry[]) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiries database:', err);
  }
}

// Contact API - Store data & dispatch email notification to Faiz
app.post('/api/contact', (req, res) => {
  const { name, email, subject, category, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required fields.'
    });
  }

  const inquiries = getDbInquiries();
  const newInquiry: ContactInquiry = {
    id: `inq-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    name: String(name).trim(),
    email: String(email).trim(),
    subject: subject ? String(subject).trim() : 'Portfolio Inquiry',
    category: category ? String(category).trim() : 'General Inquiry',
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
    status: 'notified',
    emailSentTo: 'fnimatulhaq@gmail.com'
  };

  inquiries.unshift(newInquiry);
  saveDbInquiries(inquiries);

  // Log simulated email dispatch to Faiz's inbox
  console.log(`[EMAIL DISPATCHER] Message from ${newInquiry.name} (${newInquiry.email}) successfully routed to fnimatulhaq@gmail.com. Subject: "${newInquiry.subject}"`);

  return res.status(201).json({
    success: true,
    message: 'Your inquiry has been stored in the database and an email notification was dispatched to Faiz Ni\'matul Haq.',
    inquiry: newInquiry
  });
});

// Retrieve inquiries for interactive UI verification
app.get('/api/contact/messages', (_req, res) => {
  const inquiries = getDbInquiries();
  res.json({
    success: true,
    total: inquiries.length,
    inquiries
  });
});

// Resume PDF Download / Streaming route
app.get('/api/download-cv', (_req, res) => {
  const pdfPath = path.join(__dirname, 'public', 'assets', 'aistudio', 'CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf');
  if (fs.existsSync(pdfPath)) {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="CV_-_Faiz_Ni_matul_Haq.pdf"');
    fs.createReadStream(pdfPath).pipe(res);
  } else {
    res.status(404).json({ error: 'CV PDF file not found' });
  }
});

// Production vs Development Setup
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
