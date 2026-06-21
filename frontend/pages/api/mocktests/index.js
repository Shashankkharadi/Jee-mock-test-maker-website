const dbConnect = require('../../../lib/mongodb');
const MockTest = require('../../../models/MockTest');

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const tests = await MockTest.find({}).lean();
      return res.status(200).json(tests);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error fetching mock tests' });
    }
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body;
      const created = await MockTest.create(payload);
      return res.status(201).json(created);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: 'Invalid payload or DB error' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
