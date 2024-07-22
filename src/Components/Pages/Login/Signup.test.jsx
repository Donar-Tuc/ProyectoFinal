// src/test/Signup.test.jsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Signup from './Signup';

describe('Signup Component', () => {
    it('renders the Signup form', () => {
        render(<Signup />);

        expect(screen.getByText('Registro')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Correo electrónico')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Número de contacto')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Nombre de institución')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('CUIT')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Dirección física')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('¿Por qué necesitan la visibilidad?')).toBeInTheDocument();
        expect(screen.getByText('Registrarme')).toBeInTheDocument();
    });

    it('shows validation errors when form is submitted empty', () => {
        render(<Signup />);

        fireEvent.click(screen.getByText('Registrarme'));

        expect(screen.getByText('El correo electrónico es requerido.')).toBeInTheDocument();
        expect(screen.getByText('El número de contacto es requerido.')).toBeInTheDocument();
        expect(screen.getByText('El nombre de la institución es requerido.')).toBeInTheDocument();
        expect(screen.getByText('El CUIT es requerido.')).toBeInTheDocument();
        expect(screen.getByText('La descripción es requerida.')).toBeInTheDocument();
    });

    it('accepts valid input and does not show validation errors', () => {
        render(<Signup />);

        fireEvent.change(screen.getByPlaceholderText('Correo electrónico'), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Número de contacto'), { target: { value: '123456789' } });
        fireEvent.change(screen.getByPlaceholderText('Nombre de institución'), { target: { value: 'Institución Ejemplo' } });
        fireEvent.change(screen.getByPlaceholderText('CUIT'), { target: { value: '20304050607' } });
        fireEvent.change(screen.getByPlaceholderText('Dirección física'), { target: { value: '123 Calle Falsa' } });
        fireEvent.change(screen.getByPlaceholderText('¿Por qué necesitan la visibilidad?'), { target: { value: 'Necesitamos visibilidad para...' } });

        fireEvent.click(screen.getByText('Registrarme'));

        expect(screen.queryByText('El correo electrónico es requerido.')).toBeNull();
        expect(screen.queryByText('El número de contacto es requerido.')).toBeNull();
        expect(screen.queryByText('El nombre de la institución es requerido.')).toBeNull();
        expect(screen.queryByText('El CUIT es requerido.')).toBeNull();
        expect(screen.queryByText('La descripción es requerida.')).toBeNull();
    });
});
