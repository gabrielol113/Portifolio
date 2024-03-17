import { render } from '@testing-library/react';
const { describe } = require('node:test');
const sum = require('../Components/sum');

describe("teste sum", ()=>{
    test("Should render correctly"), () =>{
        render(<Header/>)
    }
});