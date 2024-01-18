import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { formatDate } from './utils'

describe('Utils test', () => {
    test('show return formated data', () => {
        let mockDate = new Date("December 17, 1995 03:24:00");

        expect(formatDate(mockDate)).toBe( '1995-12-17')
    })

  
})

