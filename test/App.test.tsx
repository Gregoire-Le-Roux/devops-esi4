import React from 'react';
import {beforeEach, describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../src/App';

describe("Accordion test", () => {
    beforeEach(() => {
        render(<App></App>);
    });
    const getInputTexte = () => {
        const inputTexte = screen.getByLabelText('texte-input') as HTMLInputElement
        return inputTexte
    };
    
    test("should show title all the time", () => {
        // Titre h1 soit ToDoList
        expect(screen.getByText("ToDoList")).toBeDefined()
    })

    test('should add text in input then add it to todolist', async () => { 
        // Add text in input
        const inputTexte = getInputTexte()
        fireEvent.change(inputTexte, { target: { value: 'Lorem' } })
        expect(inputTexte.value).toBe('Lorem') 
        screen.debug()

        // Add item and check if text added to todolist
        const buttonValidate = screen.getByText(/Valider/i);
        fireEvent.click(buttonValidate)

        expect(screen.queryByText(/Lorem/i)).toBeDefined();
        expect(inputTexte.value).toBe('') // inputTexte should have no value after validating 
        screen.debug()

        // Delete element Lorem of todolist
        const buttonSupprimer = screen.getByText("Supprimer");
        fireEvent.click(buttonSupprimer)

        screen.debug()
        expect(screen.queryByText(/Lorem/i)).toBeNull()
    })
})