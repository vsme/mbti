import { describe, it, expect } from 'vitest';
import { getPersonalityClassGroupByTestScores } from '../lib/personality-test';

describe('getPersonalityClassGroupByTestScores', () => {
  it('returns ENTP for equal counts', () => {
    const scores = ['E', 'N', 'T', 'P'];
    const group = getPersonalityClassGroupByTestScores(scores);
    expect(group.type).toBe('ENTP');
  });
});
