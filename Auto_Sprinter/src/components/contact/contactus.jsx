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

        <div className="contact-form-container">
            <h2 className="form-title">Book a Call Back 🚘</h2>

            {selectedCar && (
                <div className="car-details-card">
                    <h3 className="car-details-title">Car Details</h3>
                    <ul className="car-details-list">
                        <li><strong>{selectedCar.title}</strong> ({selectedCar.year})</li>
                        <li>💰 {selectedCar.price}</li>
                        <li>⚙ {selectedCar.engine_capacity}</li>
                        <li>🕹 {selectedCar.transmission}</li>
                        <li>🔀 {selectedCar.drive_type}</li>
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="input-field"
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="input-field"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Optional message"
                    className="input-field textarea"
                />

                <button
                    type="submit"
                    className={`submit-btn `}>
                    📩 Send Request
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
