import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FormPropsTextFields() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        ph: "",
        subject: "",
        msg: ""
    });

    const handle = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
      Enquiry Submitted: 
      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.ph}
      Subject: ${form.subject}
      Message: ${form.msg}
    `);

    };
    function clr() {
        setForm({ name: "", email: "", ph: "", subject: "", msg: "" });
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3,
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "100%",
                    maxWidth: 500,
                }}
            >
                <h2 style={{ textAlign: "center" }}>Enquiry Form</h2>
                <TextField
                    required
                    name="name"
                    label="Full Name"
                    value={form.name}
                    onChange={handle}
                />
                <TextField
                    required
                    name="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                />
                <TextField
                    required
                    name="ph"
                    label="Phone No"
                    type="tel"
                    value={form.ph}
                    onChange={handle}
                />
                <TextField
                    required
                    name="subject"
                    label="Subject"
                    value={form.subject}
                    onChange={handle}
                />
                <TextField
                    required
                    name="msg"
                    label="Message"
                    multiline
                    rows={3}
                    value={form.msg}
                    onChange={handle}
                />
                <div className="flex justify-center gap-4">

                    <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                         Submit Enquiry
                    </Button>
                    <Button id="liveToastBtn" type="button" onClick={clr} variant="outlined" sx={{ mt: 1 }}>
                        Clear Enquiry
                    </Button>
                </div>
            </Box>
        </div>
    );
}