import React from 'react';

export default function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Name: 
                    <input
                        type="text"
                        name="name"
                        placeholder="enter name here..."
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                <label>Email: 
                    <input
                        type="email"
                        name="email"
                        placeholder="enter email here..."
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                {/* ////////// DROPDOWN ////////// */}
                <label>Role: 
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value="">-- Select a Role --</option>
                        <option value="Leader">Leader</option>
                        <option value="FE Engineer">Front-End Engineer</option>
                        <option value="BE Engineer">Back-End Engineer</option>
                        <option value="Web Designer">Web Designer</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
        )
}