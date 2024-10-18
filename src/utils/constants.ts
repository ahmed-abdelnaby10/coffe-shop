export const mainLinks = {
    facebook: "https://www.facebook.com/Hiriskcafe/",
    instagram: "https://www.instagram.com/hiriskcafe/?hl=en",
    tiktok: "https://www.tiktok.com/@hi_risk1",
    PDFWorkerURL: "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js",
    shareURL: process.env.NODE_ENV === "production" ? "https://hirisk.vercel.app" : "http://localhost:3000",
    previewURL: process.env.NODE_ENV === "production" ? "https://hirisk.vercel.app/images" : "http://localhost:3000/images"
}