import React, {useState} from 'react';
import {Link} from "react-router-dom";



const AddContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const checkContactEmailExists = contacts.filter((contact) =>
        //     contact.email === email ? contact : null
        // );
        // const checkContactPhoneExists = contacts.filter((contact) =>
        //     contact.phone === phone ? contact : null
        // );
        //
        // if (!email || !name || !phone) {
        //     return toast.warning("Please fill in all fields!!");
        // }
        // if (checkContactEmailExists.length > 0) {
        //     return toast.error("This email already exists!!");
        // }
        // if (checkContactPhoneExists.length > 0) {
        //     return toast.error("This phone number already exists!!");
        // }
        // const data = {
        //     id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
        //     email,
        //     name,
        //     phone,
        // };
        //
        // addContact(data);
        // toast.success("Contact added successfully!!");
        // history.push("/");
    }

    return (
        <div className="container">
            <h1 className="text-center my-5 display-3">Add Student</h1>
            <div className="row">
                <div className="col-md-6 p-5 mx-auto shadow">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group my-2">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-2">
                            <input
                                className="form-control"
                                type="number"
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group text-center" style={{marginTop:20}}>
                            <input
                                className="btn btn-dark"
                                type="submit"
                                value="Add Student"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AddContact;