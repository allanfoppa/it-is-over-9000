import { CharacterService } from '../../src/services/CharacterService';
import type { CharactersResponse } from '../../src/types/characters-response';

describe('Characters API', () => {
  let data: CharactersResponse;

  beforeAll(async () => {
    data = await CharacterService.getAll();
  });

  it('should return a list of characters', () => {
    expect(Array.isArray(data.items)).toBe(true);
  });

  it('should not return an empty list', () => {
    expect(data.items.length).toBeGreaterThan(0);
  });

  it('each character should have name and image', () => {
    data.items.forEach((char) => {
      expect(char).toHaveProperty('name');
      expect(char).toHaveProperty('image');
    });
  });

  it('should support pagination', () => {
    expect(data.links).toHaveProperty('next');
  });
});
