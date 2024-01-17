import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'



describe.todo('movie card testing', () => {

    // beforeEach(() => { })
    // afterEach(cleanup)

    test('should not show info', () => {
        render(     < MovieCard><MovieCard />     )
        // expect(1+1).toBe(2)
        expect(screen.findByRole("h3")).toBeDefined()
    })
    test('should show info & Button on hover', () => {
        // expect(1+1).toBe(2)
        // fireEvent.mouseEnter(<Link/>),
        expect(1 + 1).toBe(2)

        expect(screen.findByRole("a")).toBeDefined()

    })


})

