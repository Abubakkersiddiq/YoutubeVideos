import React from 'react';
import './Link.css';
import { Form, FormGroup, FormInput, FormSelect } from "shards-react";

function Link() {
    return (
        <div>
            <Form>
                <FormGroup>
                    <label htmlFor="Link" className="Link-input">Enter the Youtube Link</label>
                    <FormInput id="Link"/>
                    <label htmlFor="Link" className="Link-input">Choose the Category</label>
                    <FormSelect>
                        <option value="first">Cooking</option>
                        <option value="second">Electrical</option>
                    </FormSelect>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Link
