import { handler } from '../../lambda/showip';
import axios from 'axios';
import { fibonacci } from '../../lambda/showip';

describe('handler', () => {


  it('should return IP address', async () => {
    const result = await handler({}, {});

    expect(result).toHaveProperty('ip');
  });
});

describe('fibonacci', () => {
  it('should return correct fibonacci number', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(10)).toBe(55);
  });
});

