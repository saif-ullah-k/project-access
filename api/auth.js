export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { password } = req.body;

  if (password === process.env.PASSWORD) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
}
