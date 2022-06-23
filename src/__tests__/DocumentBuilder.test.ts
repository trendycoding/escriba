import { DocumentBuilder } from '../index';

test('Build Document', () => {
    expect(DocumentBuilder('Yoyo')).toBe('Hello Yoyo');
})