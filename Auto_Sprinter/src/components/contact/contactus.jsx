import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

export default function ContactForm({ selectedCar }) {
    const [referrer, setReferrer] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    useEffect(() => {
        setReferrer(document.referrer || "Direct Access");
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToTelegram = async () => {
        const botToken = "7879955769:AAF7mwYMDTxlmJQ7M4SXCT5r4QXQOEEPtxI"; // Replace with your bot token
        const chatId = "5771898196"; // Replace with your chat ID

        const { name, phone, message } = formData;

        const carDetails = selectedCar
            ? `
🚗 *Detaliile masini vazute*  
🆔 ID: ${selectedCar.id}  
📌 Masina: ${selectedCar.title}  
📅 An: ${selectedCar.year}  
💰 Pret: ${selectedCar.price}  
📦 Motor: ${selectedCar.engine_capacity}  
🕹 Cutie: ${selectedCar.transmission}  
🚗 Tractiune: ${selectedCar.drive_type}
            `
            : "";

        const text = `
📞 *Request nou*  
👤 Nume: ${name}  
📱 Numar de telefon: ${phone}  
💬 Messaj: ${message}  
🔗 Link-ul: ${referrer}
${carDetails}
        `;

        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: "Markdown",
            }),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendToTelegram();
        toast.success("✅ Your request has been sent via Telegram!");
        setFormData({ name: "", phone: "", message: "" });
    };

    return (

            <div className="max-w-lg mx-auto p-8 backdrop-blur-md bg-white/60 shadow-2xl border border-gray-200 rounded-3xl mt-10 transition-all duration-500">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8 tracking-tight">
                    Book a Call Back 🚘
                </h2>

                {selectedCar && (
                    <div className="mb-6 p-4 rounded-xl bg-white/50 border border-gray-300 text-sm text-gray-700 shadow-sm backdrop-blur">
                        <h3 className="font-semibold text-lg mb-1 text-gray-800">Car Details</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>{selectedCar.title}</strong> ({selectedCar.year})</li>
                            <li>💰 {selectedCar.price}</li>
                            <li>⚙ {selectedCar.engine_capacity}</li>
                            <li>🕹 {selectedCar.transmission}</li>
                            <li>🔀 {selectedCar.drive_type}</li>
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Full Name"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Optional message"
                        className="w-full px-5 py-4 border border-gray-300 rounded-xl bg-white/80 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl text-lg font-semibold tracking-wide shadow-md transition duration-300"
                    >
                        📩 Send Request
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={3000} />
            </div>
    );
}
