import React, {  useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

export default function ContactForm({ selectedCar }) {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToTelegram = async () => {
        const botToken = "7879955769:AAF7mwYMDTxlmJQ7M4SXCT5r4QXQOEEPtxI"; // Replace with your bot token
        const chatId = "849951670"; // Replace with your chat ID

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
🔗 Link-ul: ${window.location.href}
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
        toast.success("✅ Mesajul a fost trimis!");
        setFormData({ name: "", phone: "", message: "" });
    };

    return (

        <div className="contact-form-container">
            <h2 className="form-title">Lasă-ți contactele și va vom suna înapoi! </h2>



            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nume"
                    className="input-field"
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Numar de telefon"
                    className="input-field"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Mesaj optional"
                    className="input-field textarea"
                />

                <button
                    type="submit"
                    className={`submit-btn `}>
                    📩 Trimite mesajul
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
