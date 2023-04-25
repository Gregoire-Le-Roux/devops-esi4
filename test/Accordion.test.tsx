import React from 'react';
import {beforeEach, describe, expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Accordion from '../src/Accordion';

describe("Accordion test", () => {
    beforeEach(() => {
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);
    });
    test("should show title all the time", () => {
       
        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
})