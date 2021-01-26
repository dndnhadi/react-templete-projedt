import React from 'react';
import {Drop , DropTitle ,Span ,Input,Form ,InputSubmit,FormInput,InputEmail,InputText, InputSub,Textarea} from './style.js';
import Footer from './../Footer';

export default function index() {
    return (
        <React.Fragment>
        <Drop>
        <div class="container">
            <DropTitle><Span>Drop </Span>Me A line</DropTitle>
            <Form action="">
                <FormInput>
                    <InputText  type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </FormInput>
                <InputSub type="text" class="sub" placeholder="Your Subject"/>
                <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
                <InputSubmit type="submit" value="Send Message"/>
            </Form>
        </div>
    </Drop>
    <Footer/>
    </React.Fragment>
    )
}
