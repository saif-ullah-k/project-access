export default function handler(req, res) {
  if (req.method === "POST") {
    const { password } = req.body;

    if (password === process.env.PASSWORD) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
