import React from 'react';
import {beforeEach, describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from '../src/App';

describe("Todolist test", () => {
    // Before each test, simulate render of App (Todolist)
    beforeEach(() => {
        render(<App></App>);
    });

    // Get input texte to add an item in todolist
    const getInputTexte = () => {
        const inputTexte = screen.getByLabelText('texte-input') as HTMLInputElement
        return inputTexte
    };
    
    test("should show todolist title all the time", () => {
        // title h1 = ToDoList
        expect(screen.getByText("ToDoList")).toBeDefined()
    })

    // Input, Validate and Delete element test
    test('should add text in input then add it to todolist and finally delete it', async () => { 
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

    // Supprimer tout button
    test('should delete all element in todolist', async () => { 
        const inputTexte = getInputTexte()
        const buttonValidate = screen.getByText(/Valider/i);
        fireEvent.change(inputTexte, { target: { value: 'Lorem' } })
        fireEvent.click(buttonValidate)
        fireEvent.change(inputTexte, { target: { value: 'Ipsum' } })
        fireEvent.click(buttonValidate)

        // Verify if 2 elements added in todolist
        expect(screen.queryByText(/Lorem/i)).toBeDefined();
        expect(screen.queryByText(/Ipsum/i)).toBeDefined();

        
        // Delete all elements in todolist
        const buttonSupprimerTout = screen.getByText("Supprimer tout");
        fireEvent.click(buttonSupprimerTout)

        expect(screen.queryByText(/Lorem/i)).toBeNull()
        expect(screen.queryByText(/Ipsum/i)).toBeNull()
    })
})